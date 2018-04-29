import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QlikConfig } from './class/qlik-config.class';
import { QlikGlobalService } from './qlik-global.service';
import  {HyperCubeLoggerComponent } from './components/hyper-cube-logger/hyper-cube-logger.component';

export * from './components/hyper-cube-logger/hyper-cube-logger.component';
export * from './qlik-global.service';
export * from './class/qlik-config.class';
export * from './class/deferred.class';
export * from './class/dimension.class';
export * from './class/document.class';
export * from './class/hyper-cube.class';
export * from './class/list.class';
export * from './class/measure.class';
export * from './interface/q-connection.interface';
export * from './interface/q-field-attributes.interface';
export * from './interface/q-file-data-format.interface';
export * from './interface/q-filter-info.interface';
export * from './interface/q-generic-bookmark-properties.interface';
export * from './interface/q-generic-dimension-properties.interface';
export * from './interface/q-generic-measure-properties.interface';
export * from './interface/q-generic-object-properties.interface';
export * from './interface/q-generic-variable-properties.interface';
export * from './interface/q-info.interface';
export * from './interface/q-library-dimension-def.interface';
export * from './interface/q-library-measure-def.interface';
export * from './interface/q-meta.interface';
export * from './interface/qlik-config.interface';
export * from './enum/q-bnf-type.enum';
export * from './enum/q-connection-type.enum';
export * from './enum/q-field-attributes-type.enum';
export * from './enum/q-filter-info-type.enum';
export * from './enum/q-group.enum';
export * from './enum/q-grouping.enum';
export * from './enum/q-logon.enum';
export * from './enum/q-mode.enum';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      HyperCubeLoggerComponent,
  ],
  exports: [
      HyperCubeLoggerComponent,
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
