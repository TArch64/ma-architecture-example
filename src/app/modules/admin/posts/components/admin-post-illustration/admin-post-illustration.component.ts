import { Component, forwardRef } from '@angular/core';
import { AdminPostIllustrationModel } from '../../models';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type EmitChanged = (illustration: AdminPostIllustrationModel) => void;
type EmitTouched = () => void;

@Component({
  selector: 'app-admin-post-illustration',
  templateUrl: './admin-post-illustration.component.html',
  styleUrls: ['./admin-post-illustration.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AdminPostIllustrationComponent),
      multi: true
    }
  ]
})
export class AdminPostIllustrationComponent implements ControlValueAccessor {
  public illustration: AdminPostIllustrationModel | null = null;
  private emitChanged!: EmitChanged;
  private emitTouched!: EmitTouched;

  public onSelected(file: File): void {
    AdminPostIllustrationModel.fromFile(file).subscribe(this.changeIllustration.bind(this));
  }

  public remove(): void {
    this.changeIllustration(null);
  }

  private changeIllustration(illustration: AdminPostIllustrationModel | null): void {
    this.writeValue(illustration);
    this.emitTouched();
    this.emitChanged(illustration);
  }

  public writeValue(illustration: AdminPostIllustrationModel): void {
    this.illustration = illustration;
  }

  public registerOnChange(emitChanged: EmitChanged): void {
    this.emitChanged = emitChanged;
  }

  public registerOnTouched(emitTouched: EmitTouched): void {
    this.emitTouched = emitTouched;
  }
}
