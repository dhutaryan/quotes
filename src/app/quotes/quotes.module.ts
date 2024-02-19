import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotesRoutingModule } from './quotes-routing.module';
import { RandomQuoteComponent, SearchQuoteComponent } from './pages';
import { QuoteCardComponent } from './components';
import { PaginationComponent, SkeletonComponent } from '../shared/components';

@NgModule({
  declarations: [
    RandomQuoteComponent,
    QuoteCardComponent,
    SearchQuoteComponent,
  ],
  imports: [
    CommonModule,
    SkeletonComponent,
    PaginationComponent,
    QuotesRoutingModule,
  ],
})
export class QuotesModule {}
