import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RandomQuoteComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: RandomQuoteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuotesRoutingModule {}
