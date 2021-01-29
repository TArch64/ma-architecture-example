import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreLayoutComponent, CoreLayoutHeaderActionComponent, CoreLayoutLoadingComponent } from './components';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AppearsOnScrollDirective } from './directives';
import { LayoutScrollService } from './services';
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
  declarations: [
    ...sharedComponents,
    AppearsOnScrollDirective,
    CoreLayoutLoadingComponent
  ],
  providers: [
    LayoutScrollService
  ],
  exports: sharedComponents
})
export class CoreLayoutModule {}
