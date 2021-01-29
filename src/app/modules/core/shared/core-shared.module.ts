import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './pipes';
import { DataStorageService, JsonService, EncodingService, ApiUrlService } from './services';

const sharedPipes: Type<any>[] = [
  CapitalizePipe
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: sharedPipes,
  providers: [
    JsonService,
    EncodingService,
    ApiUrlService,
    DataStorageService.provideLocalStorage(),
    DataStorageService.provideSessionStorage()
  ],
  exports: sharedPipes
})
export class CoreSharedModule {}
