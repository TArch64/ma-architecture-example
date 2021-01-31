import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreLayoutComponent, CoreLayoutHeaderActionComponent } from './components';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CoreSharedModule } from '../shared';

const sharedComponents: Type<any>[] = [
  CoreLayoutComponent,
  CoreLayoutHeaderActionComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    CoreSharedModule
  ],
  declarations: sharedComponents,
  exports: sharedComponents
})
export class CoreLayoutModule {}
