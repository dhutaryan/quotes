import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  effect,
  input,
} from '@angular/core';

@Component({
  selector: 'qt-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent implements OnInit {
  public page = input.required<number>();
  public totalPages = input.required<number>();

  @Output() pageChange = new EventEmitter<number>();

  constructor() {
    effect(() => {
      if (this.page() > this.totalPages()) {
        this.pageChange.emit(this.totalPages());
      }
    });
  }

  ngOnInit(): void {}

  public previous(): void {
    this.pageChange.emit(this.page() - 1);
  }

  public next(): void {
    this.pageChange.emit(this.page() + 1);
  }
}
