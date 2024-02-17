import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotesRoutingModule } from './quotes-routing.module';
import { RandomQuoteComponent } from './pages';
import { QuoteCardComponent } from './components';

@NgModule({
  declarations: [RandomQuoteComponent, QuoteCardComponent],
  imports: [CommonModule, QuotesRoutingModule],
})
export class QuotesModule {}
