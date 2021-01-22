import { Component, Input } from '@angular/core';
import { BooleanInput } from 'ngx-boolean-input';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {
  @Input()
  @BooleanInput()
  private hideLogout: boolean;

  public get isLogoutVisible(): boolean {
    return !this.hideLogout;
  }
}
