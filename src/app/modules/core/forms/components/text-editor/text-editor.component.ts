import { Component, ElementRef, forwardRef, HostBinding, HostListener, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type EmitChanged = (text: string) => void;
type EmitTouched = () => void;

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextEditorComponent),
      multi: true
    }
  ]
})
export class TextEditorComponent implements ControlValueAccessor {
  public text: string = '';

  private emitChanged!: EmitChanged;
  private emitTouched!: EmitTouched;

  @HostBinding('class.app-text-editor')
  private readonly hostBaseClass = true;

  constructor(private readonly hostRef: ElementRef<HTMLElement>) {}

  public onTextInput(text: string): void {
    this.writeValue(text);
    this.emitChanged(text);
  }

  public writeValue(text: string): void {
    this.text = text;
  }

  public registerOnChange(emitChanged: EmitChanged): void {
    this.emitChanged = emitChanged;
  }

  public registerOnTouched(emitTouched: EmitTouched): void {
    this.emitTouched = emitTouched;
  }

  @HostListener('focusout')
  public onFocusOut(): void {
    this.hostRef.nativeElement.blur();
  }
}
