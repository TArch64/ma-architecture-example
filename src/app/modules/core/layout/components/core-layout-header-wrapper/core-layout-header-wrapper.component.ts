import { Component, Input } from '@angular/core';
import { BooleanInput } from 'ngx-boolean-input';

@Component({
  selector: 'app-core-layout-header-wrapper',
  templateUrl: './core-layout-header-wrapper.component.html',
  styleUrls: ['./core-layout-header-wrapper.component.css']
})
export class CoreLayoutHeaderWrapperComponent {
  @Input()
  @BooleanInput()
  public fixed: boolean;
}
