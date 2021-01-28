import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-core-layout-header-action',
  templateUrl: './core-layout-header-action.component.html',
  styleUrls: ['./core-layout-header-action.component.css']
})
export class CoreLayoutHeaderActionComponent {
  @Input()
  public icon: string;
  @Input()
  public title: string;

  @Output()
  public readonly onClick = new EventEmitter<null>();

  public proxyClick(): void {
    this.onClick.emit(null);
  }
}
