import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Observable,
  Subject,
  combineLatest,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
} from 'rxjs';

import { QuotesService } from '../../quotes.service';
import { Quote } from '../../types';
import { Paginator } from '../../../shared/types';

@Component({
  selector: 'qt-search-quote',
  templateUrl: './search-quote.component.html',
  styleUrl: './search-quote.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchQuoteComponent implements OnInit {
  public quotes$ = new Subject<Quote[]>();
  public paginator$ = new Subject<Paginator>();

  constructor(
    private readonly _quotesService: QuotesService,
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
    private readonly _destroyRef: DestroyRef,
  ) {}

  ngOnInit(): void {
    const pageNumber$ = this._getPageNumber$();

    combineLatest([pageNumber$])
      .pipe(
        switchMap(([page]) => this._quotesService.search({ page })),
        takeUntilDestroyed(this._destroyRef),
      )
      .subscribe((quotes) => {
        this.quotes$.next(quotes.results);
        this.paginator$.next({
          page: quotes.page,
          totalPages: quotes.totalPages,
        });
      });
  }

  public onChangePage(page: number): void {
    console.log('onChangePage', page);
    this._goToPage(page);
  }

  private _getPageNumber$(): Observable<number> {
    return this._route.queryParams.pipe(
      map((params) => Number(params.page)),
      filter((page) => this._checkPageNumber(page)),
      distinctUntilChanged(),
    );
  }

  private _checkPageNumber(pageNumber: number): boolean {
    if (!pageNumber || pageNumber < 1) {
      this._goToPage(1, true);
      return false;
    }

    return true;
  }

  private _goToPage(pageNumber: number, replaceUrl = false): Promise<boolean> {
    const page = this._route.snapshot.queryParams.page;
    if (page !== pageNumber) {
      return this._router.navigate(['/quotes', 'search'], {
        queryParams: { page: pageNumber },
        replaceUrl: replaceUrl,
      });
    }

    return Promise.resolve(false);
  }
}
