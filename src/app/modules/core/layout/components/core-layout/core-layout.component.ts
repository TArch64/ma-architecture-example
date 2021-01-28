import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';
import { BooleanInput } from 'ngx-boolean-input';
import { LayoutScrollService } from '../../services';

@Component({
  selector: 'app-core-layout',
  templateUrl: './core-layout.component.html',
  styleUrls: ['./core-layout.component.css']
})
export class CoreLayoutComponent implements AfterViewInit {
  @Input()
  @BooleanInput()
  public fixedHeader: boolean;

  constructor(
    private readonly hostRef: ElementRef<HTMLElement>,
    private readonly scrollService: LayoutScrollService
  ) {}

  public ngAfterViewInit(): void {
    this.scrollService.registerScrollingRoot(this.hostRef);
  }
}
