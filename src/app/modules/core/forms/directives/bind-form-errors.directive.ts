import { AfterViewInit, ContentChildren, Directive, Input, QueryList } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BindFormControlErrorDirective } from './bind-form-control-error.directive';

@Directive({
  selector: '[appBindFormErrors]'
})
export class BindFormErrorsDirective implements AfterViewInit {
  @Input()
  private readonly formGroup: FormGroup;
  @ContentChildren(BindFormControlErrorDirective, { descendants: true })
  private readonly controlsQuery: QueryList<BindFormControlErrorDirective>;

  public ngAfterViewInit(): void {
    this.controlsQuery.forEach(control => control.bindControl(this.formGroup));
  }
}
