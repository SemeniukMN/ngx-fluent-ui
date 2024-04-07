import { Directive, HostBinding, Input } from '@angular/core';
import { Size } from '../props/size';

@Directive({
  selector: '[fluSize]',
  standalone: true,
  providers: []
})
export class SizeDirective {

  @Input({alias: 'fluSize'})
  @HostBinding('class')
  size: Size = 'medium';

}
