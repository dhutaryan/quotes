import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '../header';

@Component({
  selector: 'qt-app-layout',
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppLayoutComponent {}
