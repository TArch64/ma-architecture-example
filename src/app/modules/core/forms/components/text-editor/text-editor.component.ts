import { Component, forwardRef, ViewEncapsulation } from '@angular/core';
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
}
