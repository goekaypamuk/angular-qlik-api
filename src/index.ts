import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';

import { QlikConfig } from './class/qlik-config.class';
import { QlikGlobalService } from './qlik-global.service';

export * from './sample.component';
export * from './qlik-global.service';
export * from './class/qlik-config.class';
export * from './class/deferred.class';
export * from './class/dimension.class';
export * from './class/document.class';
export * from './class/hyper-cube.class';
export * from './class/list.class';
export * from './class/measure.class';
export * from './interface/qlik-config.interface';
export * from './enum/qbnftype.enum';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SampleComponent,
  ],
  exports: [
    SampleComponent,
  ]
})
export class AngularQlikApiModule {
  static forRoot(qlikConfig: QlikConfig): ModuleWithProviders {
    return {
      ngModule: AngularQlikApiModule,
      providers: [QlikGlobalService, {provide: 'qlikConfig', useValue: qlikConfig}]
    };
  }
}
