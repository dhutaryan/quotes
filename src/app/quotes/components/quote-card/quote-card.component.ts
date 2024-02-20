import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Quote } from '../../types';

@Component({
  selector: 'qt-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrl: './quote-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuoteCardComponent {
  @Input({ required: true }) quote: Quote | null;
  @Input() isLoading = false;
}
