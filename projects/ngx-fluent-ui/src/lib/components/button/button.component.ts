import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { SizeDirective } from '../../directives/size.directive';

export type ButtonType = 'primary' | 'secondary' | 'outline' | 'subtle' | 'transparent';

@Component({
  selector: 'flu-button',
  standalone: true,
  hostDirectives: [
    {
      directive: SizeDirective,
      inputs: ['fluSize: size']
    },
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [],
})
export class ButtonComponent {

  @Input()
  @HostBinding('class')
  type: ButtonType = 'secondary';

  @Input()
  @HostBinding('class.disabled')
  disabled = false;

  @Input()
  @HostBinding('class.selected')
  selected = false;

  @HostBinding('attr.tabindex')
  tabIndex = 0;

}
