import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'qt-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
