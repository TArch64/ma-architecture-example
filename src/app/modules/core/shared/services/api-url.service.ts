import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments';

@Injectable()
export class ApiUrlService {
  public build(paths: string[]): string {
    return [environment.apiUrl].concat(paths).join('/');
  }
}
