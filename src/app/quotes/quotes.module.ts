import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotesRoutingModule } from './quotes-routing.module';
import { RandomQuoteComponent } from './pages';
import { QuoteCardComponent } from './components';
import { SkeletonComponent } from '../shared/components';

@NgModule({
  declarations: [RandomQuoteComponent, QuoteCardComponent],
  imports: [CommonModule, SkeletonComponent, QuotesRoutingModule],
})
export class QuotesModule {}
