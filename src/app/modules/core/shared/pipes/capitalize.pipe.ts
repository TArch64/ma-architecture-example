import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  public transform(value: string): string {
    return value.split(' ').map(this.capitalizeWord).join(' ');
  }

  private capitalizeWord(word: string): string {
    return word[0].toUpperCase() + word.slice(1);
  }
}
