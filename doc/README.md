
angular-qlik-api
================

AngulerQlikApi is the angular wrapper for Qlik Engine API. It facilitates the usage and handles the synchronization.

The Qlik Engine API is a WebSocket protocol that uses JSON to pass information between the Qlik Sense engine and the clients. The Qlik Engine API consists of a set of objects representing apps, lists, and so on. These objects are organized in a hierarchical structure. When you send requests to the API, you perform actions on these objects.

The Qlik Engine API can be used for:

*   creating apps and loading data
*   building stories
*   getting system information

Typical situations where you would use the Qlik Engine API include:

*   building a specialized client as a standalone or web application
*   automating repetitive or complicated updates or changes to apps

To work with the Qlik Engine API, you can use any language or tool that supports WebSockets and can parse JSON. JavaScript is a common and obvious choice, because of its built-in JSON support, and because there are a number of libraries available to make it easier to work with WebSockets.

###### Qlik Classes

*   [Use Global class methods](https://github.com/goekaypamuk/angular-qlik-api/blob/pag-develop/docs/Global.md)
*   [Use Doc class methods](https://github.com/goekaypamuk/angular-qlik-api/blob/pag-develop/docs/Doc.md)
*   [Use Bookmark class methods](https://github.com/goekaypamuk/angular-qlik-api/blob/pag-develop/docs/Bookmark.md)
*   [Use Field class methods](https://github.com/goekaypamuk/angular-qlik-api/blob/pag-develop/docs/Field.md)

Installation
------------

To install this library, run:

```bash
$ npm install angular-qlik-api -save
```

Consuming AngularQlikApi library
--------------------------------

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install angular-qlik-api
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import AngularQlikApiModule library
import {AngularQlikApiModule, QlikConfig} from 'angular-qlik-api';

// Define your connection to Qlik Sense Server or Qlik Sense Desktop
const qlikConfig = new QlikConfig({
  useWss: false,
  address: 'localhost',
  port: 4848
});

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Specify  library as an import
    AngularQlikApiModule.forRoot(qlikConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once the library is imported, you can use its components and services in your Angular application:

```typescript
@Component({
  selector: 'app-root'
})
export class MyApp implements OnDestroy {
  myHyperCube: HyperCube;
  constructor(qlikGlobal: QlikGlobalService ) {
    this.myHyperCube = this.qlikGlobal.openDoc('sales discovery.qvf')
         .createHyperCube()
         .addDimension(new Dimension('Region Name'))
         .addMeasure(new Measure('Sum([YTD Sales Amount])'))
         .subscribe( reply => {
            console.log(reply);
         });
  }

  ngOnDestroy() {
    this.myHyperCube.unsubscribe();
  }
}
```

Development Progress
--------------------

*   \[x\] Global Class Methods
*   \[x\] App Class Methods
*   \[x\] GenericBookmark Methods
*   \[x\] GenericDimension Class Methods
*   \[ \] GenericObject Class Methods
*   \[x\] GenericMeasure Class Methods
*   \[ \] GenericVariable Class Methods
*   \[x\] Field Class Methods
*   \[ \] Variable Class Methods

Initially, a hypercube builder has been added to the library but it may change completely in future releases!

Development
-----------

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

Contribution
------------

This library is still under cunstruction and we are looking for contributors. If you like to contribute plase contact me: [goekaypamuk@gmai.com](mailto:goekaypamuk@gmai.com)

License
-------

MIT © [Gökay Pamuk](mailto:goekaypamuk@gmail.com)

## Index

### External modules

* ["class/bookmark.class"](modules/_class_bookmark_class_.md)
* ["class/connection.class"](modules/_class_connection_class_.md)
* ["class/deferred.class"](modules/_class_deferred_class_.md)
* ["class/dimension.class"](modules/_class_dimension_class_.md)
* ["class/document.class"](modules/_class_document_class_.md)
* ["class/field.class"](modules/_class_field_class_.md)
* ["class/generic-dimension.class"](modules/_class_generic_dimension_class_.md)
* ["class/generic-measure.class"](modules/_class_generic_measure_class_.md)
* ["class/hyper-cube.class"](modules/_class_hyper_cube_class_.md)
* ["class/list.class"](modules/_class_list_class_.md)
* ["class/measure.class"](modules/_class_measure_class_.md)
* ["class/qlik-config.class"](modules/_class_qlik_config_class_.md)
* ["components/hyper-cube-logger/hyper-cube-logger.component"](modules/_components_hyper_cube_logger_hyper_cube_logger_component_.md)
* ["enum/q-bnf-type.enum"](modules/_enum_q_bnf_type_enum_.md)
* ["enum/q-char-encoding.enum"](modules/_enum_q_char_encoding_enum_.md)
* ["enum/q-command.enum"](modules/_enum_q_command_enum_.md)
* ["enum/q-connection-type.enum"](modules/_enum_q_connection_type_enum_.md)
* ["enum/q-context.enum"](modules/_enum_q_context_enum_.md)
* ["enum/q-field-attributes-type.enum"](modules/_enum_q_field_attributes_type_enum_.md)
* ["enum/q-filter-info-type.enum"](modules/_enum_q_filter_info_type_enum_.md)
* ["enum/q-group-item-type.enum"](modules/_enum_q_group_item_type_enum_.md)
* ["enum/q-group-type.enum"](modules/_enum_q_group_type_enum_.md)
* ["enum/q-group.enum"](modules/_enum_q_group_enum_.md)
* ["enum/q-grouping.enum"](modules/_enum_q_grouping_enum_.md)
* ["enum/q-logon.enum"](modules/_enum_q_logon_enum_.md)
* ["enum/q-matching-field-mode.enum"](modules/_enum_q_matching_field_mode_enum_.md)
* ["enum/q-mode.enum"](modules/_enum_q_mode_enum_.md)
* ["enum/q-op.enum"](modules/_enum_q_op_enum_.md)
* ["index"](modules/_index_.md)
* ["interface/q-app-properties.interface"](modules/_interface_q_app_properties_interface_.md)
* ["interface/q-connection.interface"](modules/_interface_q_connection_interface_.md)
* ["interface/q-editor-breakpoint.interface"](modules/_interface_q_editor_breakpoint_interface_.md)
* ["interface/q-field-attributes.interface"](modules/_interface_q_field_attributes_interface_.md)
* ["interface/q-field-value.interface"](modules/_interface_q_field_value_interface_.md)
* ["interface/q-file-data-format.interface"](modules/_interface_q_file_data_format_interface_.md)
* ["interface/q-filter-info.interface"](modules/_interface_q_filter_info_interface_.md)
* ["interface/q-generic-bookmark-properties.interface"](modules/_interface_q_generic_bookmark_properties_interface_.md)
* ["interface/q-generic-dimension-properties.interface"](modules/_interface_q_generic_dimension_properties_interface_.md)
* ["interface/q-generic-measure-properties.interface"](modules/_interface_q_generic_measure_properties_interface_.md)
* ["interface/q-generic-object-properties.interface"](modules/_interface_q_generic_object_properties_interface_.md)
* ["interface/q-generic-variable-properties.interface"](modules/_interface_q_generic_variable_properties_interface_.md)
* ["interface/q-info.interface"](modules/_interface_q_info_interface_.md)
* ["interface/q-library-dimension-def.interface"](modules/_interface_q_library_dimension_def_interface_.md)
* ["interface/q-library-measure-def.interface"](modules/_interface_q_library_measure_def_interface_.md)
* ["interface/q-lineage-info.interface"](modules/_interface_q_lineage_info_interface_.md)
* ["interface/q-linked-object-info.interface"](modules/_interface_q_linked_object_info_interface_.md)
* ["interface/q-meta.interface"](modules/_interface_q_meta_interface_.md)
* ["interface/q-object-options.interface"](modules/_interface_q_object_options_interface_.md)
* ["interface/q-patch.interface"](modules/_interface_q_patch_interface_.md)
* ["interface/q-patches.interface"](modules/_interface_q_patches_interface_.md)
* ["interface/q-search-combination.interface"](modules/_interface_q_search_combination_interface_.md)
* ["interface/q-search-group-item-options.interface"](modules/_interface_q_search_group_item_options_interface_.md)
* ["interface/q-search-group-options.interface"](modules/_interface_q_search_group_options_interface_.md)
* ["interface/q-search-object-options.interface"](modules/_interface_q_search_object_options_interface_.md)
* ["interface/q-search-page.interface"](modules/_interface_q_search_page_interface_.md)
* ["interface/q-size.interface"](modules/_interface_q_size_interface_.md)
* ["interface/qlik-config.interface"](modules/_interface_qlik_config_interface_.md)
* ["qlik-global.service"](modules/_qlik_global_service_.md)

---

