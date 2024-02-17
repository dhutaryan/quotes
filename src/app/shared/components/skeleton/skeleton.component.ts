import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'qt-skeleton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skeleton.component.html',
  styleUrl: './skeleton.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    tabindex: '-1',
    role: 'progressbar',
    '[style.width]': 'width',
    '[style.height]': 'height',
  },
})
export class SkeletonComponent {
  @Input() height: string = '1rem';
  @Input() width: string = '100%';
}
