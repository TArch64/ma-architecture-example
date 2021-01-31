import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AdminPostModel } from '../../models';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AutoUnsubscribe, requireField } from '../../../../core';
import { AdminPostChanges } from '../../type';

@Component({
  selector: 'app-admin-post-editor',
  templateUrl: './admin-post-editor.component.html',
  styleUrls: ['./admin-post-editor.component.css']
})
export class AdminPostEditorComponent extends AutoUnsubscribe {
  @Input()
  public set post(post: AdminPostModel) {
    this.postEditorForm.patchValue({
      title: post.title,
      illustration: post.illustration
    }, { emitEvent: false });
  }

  @Output()
  public readonly onUpdate = new EventEmitter<AdminPostChanges>();

  public postEditorForm: FormGroup = this.createEditorForm();

  constructor(private readonly formBuilder: FormBuilder) {
    super();
  }

  public validate(): boolean {
    this.postEditorForm.markAllAsTouched();
    return this.postEditorForm.valid;
  }

  private createEditorForm(): FormGroup {
    const form = this.formBuilder.group({
      title: ['', requireField],
      illustration: null
    });

    form.valueChanges.pipe(this.takeUntilDestroyed).subscribe(data => this.onUpdate.emit(data));

    return form;
  }
}
