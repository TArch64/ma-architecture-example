import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BooleanInput } from 'ngx-boolean-input';
import { ThemePalette } from '@angular/material/core';

enum ButtonIcons {
  UNPUBLISH = 'unpublished',
  PUBLISH = 'publish'
}

@Component({
  selector: 'app-admin-post-publish',
  templateUrl: './admin-post-publish.component.html',
  styleUrls: ['./admin-post-publish.component.css']
})
export class AdminPostPublishComponent {
  @Input()
  @BooleanInput()
  public published: boolean;

  @Output()
  public readonly onToggle = new EventEmitter<boolean>();

  public get buttonIcon(): ButtonIcons {
    return this.published ? ButtonIcons.UNPUBLISH : ButtonIcons.PUBLISH;
  }

  public get buttonColor(): ThemePalette {
    return this.published ? null : 'primary';
  }

  public get buttonText(): string {
    return this.published ? 'Unpublish' : 'Publish';
  }

  public togglePublished(): void {
    this.onToggle.emit(!this.published);
  }
}
