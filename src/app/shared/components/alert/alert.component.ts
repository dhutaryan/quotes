import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type AlertType = 'error';

@Component({
  selector: 'qt-alert',
  standalone: true,
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'alert',
    '[class.alert-error]': 'type === "error"',
  },
})
export class AlertComponent {
  @Input() title = 'Error';
  @Input() message = 'Something went wrong!';
  @Input() type: AlertType = 'error';
}
