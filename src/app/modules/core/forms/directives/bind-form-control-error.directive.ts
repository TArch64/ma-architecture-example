import { Directive, ElementRef, Input, OnDestroy, Renderer2 } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appBindFormControlError]'
})
export class BindFormControlErrorDirective implements OnDestroy {
  @Input('appBindFormControlError')
  private readonly controlName: string;
  private control: AbstractControl;
  private statusChangesSubscription: Subscription;

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2,
  ) {}

  public ngOnDestroy(): void {
    this.statusChangesSubscription.unsubscribe();
  }

  public bindControl(form: FormGroup): void {
    this.control = form.get(this.controlName);
    if (!this.control) throw new Error(`Undefined control with name: "${this.controlName}"`);

    this.statusChangesSubscription = this.control.statusChanges.subscribe(this.renderError.bind(this));
    this.renderError();
  }

  private renderError(): void {
    this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', this.errorMessage);
  }

  private get errorMessage(): string {
    if (!this.control.errors || !this.control.errors.messages?.length) return '';
    return this.control.errors.messages[0];
  }
}
