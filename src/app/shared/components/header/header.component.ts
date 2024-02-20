import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NavMenuComponent } from '../nav-menu';

@Component({
  selector: 'qt-header',
  standalone: true,
  imports: [NavMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
