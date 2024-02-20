import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppLayoutComponent } from './shared/components';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/quotes/random',
  },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'quotes',
        loadChildren: () =>
          import('./quotes/quotes.module').then((m) => m.QuotesModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/quotes/random',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
