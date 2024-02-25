import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { QuotesRoutingModule } from './quotes-routing.module';
import { RandomQuoteComponent, SearchQuoteComponent } from './pages';
import { QuoteCardComponent } from './components';
import {
  AlertComponent,
  PaginationComponent,
  SkeletonComponent,
  TwitterShareButtonComponent,
} from '../shared/components';

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
    ReactiveFormsModule,
    AlertComponent,
    TwitterShareButtonComponent,
    QuotesRoutingModule,
  ],
})
export class QuotesModule {}
