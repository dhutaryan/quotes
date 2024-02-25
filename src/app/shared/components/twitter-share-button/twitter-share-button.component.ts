import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'qt-twitter-share-button',
  standalone: true,
  imports: [],
  templateUrl: './twitter-share-button.component.html',
  styleUrl: './twitter-share-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TwitterShareButtonComponent {
  @Input({ required: true }) set text(value: string) {
    this.href = `https://twitter.com/intent/tweet?text=${value}`;
  }

  public href: string;
}
