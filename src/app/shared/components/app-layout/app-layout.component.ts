import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavMenuComponent } from '../nav-menu/nav-menu.component';

@Component({
  selector: 'qt-app-layout',
  standalone: true,
  imports: [RouterModule, NavMenuComponent],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppLayoutComponent {}
