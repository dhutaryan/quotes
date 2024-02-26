import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

const MAX_RATING = 5;
let timepickerUid = 0;

@Component({
  selector: 'qt-rating',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingComponent {
  public ratings = Array.from(
    { length: MAX_RATING },
    (_, i) => i + 1,
  ).reverse();
  public control = new FormControl<number | null>(null);
  public uid = `rating-${timepickerUid++}`;
}
