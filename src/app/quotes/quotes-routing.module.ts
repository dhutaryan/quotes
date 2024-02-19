import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RandomQuoteComponent, SearchQuoteComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'random',
  },
  {
    path: 'random',
    component: RandomQuoteComponent,
  },
  {
    path: 'search',
    component: SearchQuoteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuotesRoutingModule {}
