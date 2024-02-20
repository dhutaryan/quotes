import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'qt-nav-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavMenuComponent {
  public items = [
    {
      path: '/quotes/random',
      name: 'Random',
    },
    {
      path: '/quotes/search',
      name: 'Search',
    },
  ];
}
