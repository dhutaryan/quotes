import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import {
  Observable,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  shareReplay,
  switchMap,
  tap,
} from 'rxjs';

import { QuotesService } from '../../quotes.service';
import { Quote, QuoteQuery } from '../../types';
import { Paginator } from '../../../shared/types';

@Component({
  selector: 'qt-search-quote',
  templateUrl: './search-quote.component.html',
  styleUrl: './search-quote.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchQuoteComponent implements OnInit {
  public quotes = signal<Quote[]>(Array(10));
  public paginator = signal<Paginator | null>(null);
  public searchControl = new FormControl<string | null>(null);
  public isLoading = signal(false);

  private _queryParams$ = this._route.queryParams.pipe(shareReplay());

  constructor(
    private readonly _quotesService: QuotesService,
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
    private readonly _destroyRef: DestroyRef,
  ) {}

  ngOnInit(): void {
    const author = this._route.snapshot.queryParams.author;
    this.searchControl.patchValue(author, { emitEvent: false });

    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        map((value) => (value ? value.trim().toLocaleLowerCase() : null)),
        distinctUntilChanged(),
        takeUntilDestroyed(this._destroyRef),
      )
      .subscribe((author) => {
        this._goToPage({ page: 1, author });
      });

    this._fetchQuotesBasedOnQueryParams();
  }

  public onChangePage(page: number): void {
    this._goToPage({ page });
  }

  private _fetchQuotesBasedOnQueryParams(): void {
    const pageNumber$ = this._getPageNumber$();
    const author$ = this._queryParams$.pipe(
      map((params) => params.author),
      distinctUntilChanged(),
    );

    combineLatest([pageNumber$, author$])
      .pipe(
        debounceTime(0),
        tap(() => this.isLoading.set(true)),
        switchMap(([page, author]) =>
          this._quotesService.search({ page, author }),
        ),
        takeUntilDestroyed(this._destroyRef),
      )
      .subscribe((quotes) => {
        this.quotes.set(quotes.results);
        this.paginator.set({
          page: quotes.page,
          totalPages: quotes.totalPages,
        });
        this.isLoading.set(false);
      });
  }

  private _getPageNumber$(): Observable<number> {
    return this._queryParams$.pipe(
      map((params) => Number(params.page)),
      filter((page) => this._checkPageNumber(page)),
      distinctUntilChanged(),
    );
  }

  private _checkPageNumber(pageNumber: number): boolean {
    if (!pageNumber || pageNumber < 1) {
      this._goToPage({ page: 1 }, true);
      return false;
    }

    return true;
  }

  private _goToPage(params: QuoteQuery, replaceUrl = false): Promise<boolean> {
    return this._router.navigate(['/quotes', 'search'], {
      queryParams: params,
      queryParamsHandling: 'merge',
      replaceUrl: replaceUrl,
    });
  }
}
