import { Pipe, PipeTransform } from '@angular/core';
import { PostDetailsModel } from '../models';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'postTextContent'
})
export class PostTextContentPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}

  transform(post: PostDetailsModel): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(post.content);
  }
}
