# GenericMeasure _(Class)_

This Class has all the methods that apply at GenericDimension Class level and some additional methods provided by this library to facilitate the usage.

All additional methods provided by this class start with the _$_ letter to distinguish them from the standard methods defined by Qlik Engine API.

You can find full list and all details of all Doc class methods on [Qlik Help Website](https://help.qlik.com/en-US/sense-developer/April2018/apis/EngineAPI/index.html)

## Example of use

All standart methods defined by Qlik GenericDimension class return a promise. To access the _GenericDimension_ class you need to use the _$getDimension_ or _$createDimension_ methods on _Doc_ class. These two methods return a _GenericDimension_ object containing all methods on _GenericDimension_ class.

```typescript
import { Component } from '@angular/core';
import {QlikGlobalService, Document, GenericMeasure, GenericDimension} from 'angular-qlik-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  doc: Document;
  dimension: GenericDimension;
  myMeasure: GenericMeasure;
  constructor(private qlik: QlikGlobalService) {
    this.doc = this.qlik.openDoc('Sales Discovery.qvf');

    this.doc.$getDimensionList().then( cb => {
      console.log(cb);
    });

    this.dimension = this.doc.$getDimension('BQnV')
      .$setTitle('A new Title')
      .$setDescription('My description')
      .$setTags(['Angular', 'Qlik', 'Api'])
      .$setFieldDefs(['City'])
      .$setFieldLabels(['CITY']);
  }
}
```
You can use the _aqa-generic-dimension_ component to preview a _GenericDimension_ object.

```HTML
<aqa-generic-dimension [genericDimension]="dimension"></aqa-generic-dimension>
```
note: The visualisation depends on Bootstrap 4
### Methods

* [$$setHandle](GenericDimension.md#__sethandle)
* [$setDescription](GenericDimension.md#_setdescription)
* [$setFieldDefs](GenericDimension.md#_setfielddefs)
* [$setFieldLabels](GenericDimension.md#_setfieldlabels)
* [$setTags](GenericDimension.md#_settags)
* [$setTitle](GenericDimension.md#_settitle)
* [applyPatches](GenericDimension.md#applypatches)
* [getDimension](GenericDimension.md#getdimension)
* [getInfo](GenericDimension.md#getinfo)
* [getLayout](GenericDimension.md#getlayout)
* [getLinkedObjects](GenericDimension.md#getlinkedobjects)
* [getProperties](GenericDimension.md#getproperties)
* [publish](GenericDimension.md#publish)
* [setProperties](GenericDimension.md#setproperties)
* [unPublish](GenericDimension.md#unpublish)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new GenericDimension**(deferred: *[Deferred](_class_deferred_class_.deferred.md)<`number`>*, globalService: *`any`*, doc: *[Document](_class_document_class_.document.md)*, genericDimensionId: *`string`*): [GenericDimension](GenericDimension.md)

___

## Methods

<a id="__sethandle"></a>

###  $$setHandle

▸ **$$setHandle**(handle: *`number`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| handle | `number` |

**Returns:** `void`

___
<a id="_setdescription"></a>

###  $setDescription

▸ **$setDescription**(description: *`string`*, presist?: *`boolean`*): [GenericDimension](GenericDimension.md)

Module helper method Sets the description. If presist set to true, then it will automatically save the document object the dimension is atached to.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| description | `string` | - |  - |
| `Default value` presist | `boolean` | true |  - |

**Returns:** [GenericDimension](GenericDimension.md)

___
<a id="_setfielddefs"></a>

###  $setFieldDefs

▸ **$setFieldDefs**(qFieldDefs: *`Array`<`string`>*, presist?: *`boolean`*): [GenericDimension](GenericDimension.md)

Module helper method Sets the field definition. If presist set to true, then it will automatically save the document object the dimension is atached to.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| qFieldDefs | `Array`<`string`> | - |  - |
| `Default value` presist | `boolean` | true |  - |

**Returns:** [GenericDimension](GenericDimension.md)

___
<a id="_setfieldlabels"></a>

###  $setFieldLabels

▸ **$setFieldLabels**(qFieldLabels: *`Array`<`string`>*, presist?: *`boolean`*): [GenericDimension](GenericDimension.md)

Module helper method Sets the field labels. If presist set to true, then it will automatically save the document object the dimension is atached to.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| qFieldLabels | `Array`<`string`> | - |  - |
| `Default value` presist | `boolean` | true |  - |

**Returns:** [GenericDimension](GenericDimension.md)

___
<a id="_settags"></a>

###  $setTags

▸ **$setTags**(tags: *`Array`<`string`>*, presist?: *`boolean`*): [GenericDimension](GenericDimension.md)

Module helper method Sets the tags. If presist set to true, then it will automatically save the document object the dimension is atached to.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| tags | `Array`<`string`> | - |  - |
| `Default value` presist | `boolean` | true |  - |

**Returns:** [GenericDimension](GenericDimension.md)

___
<a id="_settitle"></a>

###  $setTitle

▸ **$setTitle**(title: *`string`*, presist?: *`boolean`*): [GenericDimension](GenericDimension.md)

Module helper method Sets the title. If presist set to true, then it will automatically save the document object the dimension is atached to.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| title | `string` | - |  - |
| `Default value` presist | `boolean` | true |  - |

**Returns:** [GenericDimension](GenericDimension.md)

___
<a id="applypatches"></a>

###  applyPatches

▸ **applyPatches**(qPatches: *`Array`<[QPatches](../interfaces/_interface_q_patches_interface_.qpatches.md)>*): `Promise`<`any`>

Applying a patch takes less time than resetting all the properties.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| qPatches | `Array`<[QPatches](../interfaces/_interface_q_patches_interface_.qpatches.md)> |  - |

**Returns:** `Promise`<`any`>

___
<a id="getdimension"></a>

###  getDimension

▸ **getDimension**(): `Promise`<`any`>

Returns the definition of a dimension.

**Returns:** `Promise`<`any`>

___
<a id="getinfo"></a>

###  getInfo

▸ **getInfo**(): `Promise`<`any`>

Returns the type and identifier of the object.

**Returns:** `Promise`<`any`>

___
<a id="getlayout"></a>

###  getLayout

▸ **getLayout**(qLayout: *[QGenericDimensionProperties](../interfaces/_interface_q_generic_dimension_properties_interface_.qgenericdimensionproperties.md)*): `Promise`<`any`>

Evaluates a dimension and displays its properties, including the dynamic properties.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| qLayout | [QGenericDimensionProperties](../interfaces/_interface_q_generic_dimension_properties_interface_.qgenericdimensionproperties.md) |  - |

**Returns:** `Promise`<`any`>

___
<a id="getlinkedobjects"></a>

###  getLinkedObjects

▸ **getLinkedObjects**(qItems: *`Array`<[QLinkedObjectInfo](../interfaces/_interface_q_linked_object_info_interface_.qlinkedobjectinfo.md)>*): `Promise`<`any`>

Lists the linked objects to a generic object, a dimension or a measure.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| qItems | `Array`<[QLinkedObjectInfo](../interfaces/_interface_q_linked_object_info_interface_.qlinkedobjectinfo.md)> |  - |

**Returns:** `Promise`<`any`>

___
<a id="getproperties"></a>

###  getProperties

▸ **getProperties**(): `Promise`<`any`>

Shows the properties of an object. Returns the identifier and the definition of the dimension

**Returns:** `Promise`<`any`>

___
<a id="publish"></a>

###  publish

▸ **publish**(): `Promise`<`any`>

Publishes a dimension.

**Returns:** `Promise`<`any`>

___
<a id="setproperties"></a>

###  setProperties

▸ **setProperties**(qProp: *[QGenericDimensionProperties](../interfaces/_interface_q_generic_dimension_properties_interface_.qgenericdimensionproperties.md)*): `Promise`<`any`>

Sets some properties for a dimension.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| qProp | [QGenericDimensionProperties](../interfaces/_interface_q_generic_dimension_properties_interface_.qgenericdimensionproperties.md) |  - |

**Returns:** `Promise`<`any`>

___
<a id="unpublish"></a>

###  unPublish

▸ **unPublish**(): `Promise`<`any`>

Unpublishes a dimension.

**Returns:** `Promise`<`any`>

___



