import { Component, Input } from '@angular/core';
import { BooleanInput } from 'ngx-boolean-input';

@Component({
  selector: 'app-core-layout',
  templateUrl: './core-layout.component.html',
  styleUrls: ['./core-layout.component.css']
})
export class CoreLayoutComponent {
  @Input()
  @BooleanInput()
  public fixedHeader: boolean;
}
