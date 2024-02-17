import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotesRoutingModule } from './quotes-routing.module';
import { RandomQuoteComponent } from './pages';

@NgModule({
  declarations: [RandomQuoteComponent],
  imports: [CommonModule, QuotesRoutingModule],
})
export class QuotesModule {}
