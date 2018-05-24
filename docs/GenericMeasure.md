# GenericMeasure _(Class)_

This Class has all the methods that apply at GenericBookmark Class level and some additional methods provided by this library to facilitate the usage.

All additional methods provided by this class start with the _$_ letter to distinguish them from the standard methods defined by Qlik Engine API.

You can find full list and all details of all Doc class methods on [Qlik Help Website](https://help.qlik.com/en-US/sense-developer/April2018/apis/EngineAPI/index.html)

## Example of use

All standart methods defined by Qlik GenericMeasure class return a promise. To access the _GenericMeasure_ class you need to use the _getMeasure_ or _createMeasure_ methods on _Doc_ class. These two methods return a _GenericBookmark_ object containing all methods on _GenericBookmark_ class.

```typescript
import { Component } from '@angular/core';
import {QlikGlobalService, Document, GenericMeasure} from 'angular-qlik-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  doc: Document;
  myMeasure: GenericMeasure;
  constructor(private qlik: QlikGlobalService) {
    this.doc = this.qlik.openDoc('Sales Discovery.qvf');

    this.doc.$getMeasureList().then( cb => {
      console.log(cb.result);
    });

     this.myMeasure = this.doc.$createMeasure()
       .$setTitle('test measure')
       .$setFormula('count(sales)');
  }
}
```
You can use the _aqa-generic-dimension_ component to preview a _GenericDimension_ object.

```HTML
<aqa-generic-measure [genericMeasure]="myMeasure"></aqa-generic-measure>
```
note: The visualisation depends on Bootstrap 4

### Methods

* [$setColor](GenericMeasure.md#_setcolor)
* [$setDescription](GenericMeasure.md#_setdescription)
* [$setFormula](GenericMeasure.md#_setformula)
* [$setGrouping](GenericMeasure.md#_setgrouping)
* [$setLabelExpression](GenericMeasure.md#_setlabelexpression)
* [$setTags](GenericMeasure.md#_settags)
* [$setTitle](GenericMeasure.md#_settitle)
* [applyPatches](GenericMeasure.md#applypatches)
* [getInfo](GenericMeasure.md#getinfo)
* [getLayout](GenericMeasure.md#getlayout)
* [getLinkedObjects](GenericMeasure.md#getlinkedobjects)
* [getMeasure](GenericMeasure.md#getmeasure)
* [getProperties](GenericMeasure.md#getproperties)
* [publish](GenericMeasure.md#publish)
* [setHandle](GenericMeasure.md#sethandle)
* [setProperties](GenericMeasure.md#setproperties)
* [unPublish](GenericMeasure.md#unpublish)

---

## Methods

<a id="_setcolor"></a>

###  $setColor

▸ **$setColor**(hexColor: *`string`*, presist?: *`boolean`*): [GenericMeasure](GenericMeasure.md)

Module helper method Sets the coloring property. If presist param set to true will, then the GenericMeasure object is saved automatically

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| hexColor | `string` | - |  - |
| `Default value` presist | `boolean` | true |  - |

**Returns:** [GenericMeasure](GenericMeasure.md)

___
<a id="_setdescription"></a>

###  $setDescription

▸ **$setDescription**(description: *`string`*, presist?: *`boolean`*): [GenericMeasure](GenericMeasure.md)

Module helper method Sets the description. If presist param set to true will, then the GenericMeasure object is saved automatically

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| description | `string` | - |  - |
| `Default value` presist | `boolean` | true |  - |

**Returns:** [GenericMeasure](GenericMeasure.md)

___
<a id="_setformula"></a>

###  $setFormula

▸ **$setFormula**(expression: *`string`*, presist?: *`boolean`*): [GenericMeasure](GenericMeasure.md)

Module helper method Sets the Measure expression. If presist param set to true will, then the GenericMeasure object is saved automatically

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| expression | `string` | - |  - |
| `Default value` presist | `boolean` | true |  - |

**Returns:** [GenericMeasure](GenericMeasure.md)

___
<a id="_setgrouping"></a>

###  $setGrouping

▸ **$setGrouping**(qGroup: *[QGrouping](../enums/_enum_q_grouping_enum_.qgrouping.md)*, presist?: *`boolean`*): [GenericMeasure](GenericMeasure.md)

Module helper method Sets the grouping property. If presist param set to true will, then the GenericMeasure object is saved automatically

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| qGroup | [QGrouping](../enums/_enum_q_grouping_enum_.qgrouping.md) | - |  - |
| `Default value` presist | `boolean` | true |  - |

**Returns:** [GenericMeasure](GenericMeasure.md)

___
<a id="_setlabelexpression"></a>

###  $setLabelExpression

▸ **$setLabelExpression**(expression: *`string`*, presist?: *`boolean`*): [GenericMeasure](GenericMeasure.md)

Module helper method Sets the labelExpression property. If presist param set to true will, then the GenericMeasure object is saved automatically

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| expression | `string` | - |  - |
| `Default value` presist | `boolean` | true |  - |

**Returns:** [GenericMeasure](GenericMeasure.md)

___
<a id="_settags"></a>

###  $setTags

▸ **$setTags**(tags: *`Array`<`string`>*, presist?: *`boolean`*): [GenericMeasure](GenericMeasure.md)

Module helper method Sets the tag property. If presist param set to true will, then the GenericMeasure object is saved automatically

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| tags | `Array`<`string`> | - |  - |
| `Default value` presist | `boolean` | true |  - |

**Returns:** [GenericMeasure](GenericMeasure.md)

___
<a id="_settitle"></a>

###  $setTitle

▸ **$setTitle**(title: *`string`*, presist?: *`boolean`*): [GenericMeasure](GenericMeasure.md)

Module helper method Sets the title. If presist true will automatically save the object

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| title | `string` | - |  - |
| `Default value` presist | `boolean` | true |  - |

**Returns:** [GenericMeasure](GenericMeasure.md)

___
<a id="applypatches"></a>

###  applyPatches

▸ **applyPatches**(qPatches: *`Array`<[QPatches](../interfaces/_interface_q_patches_interface_.qpatches.md)>*): `Promise`<`any`>

Applies a patch to the properties of an object. Allows an update to some of the properties.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| qPatches | `Array`<[QPatches](../interfaces/_interface_q_patches_interface_.qpatches.md)> |  - |

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

▸ **getLayout**(qLayout: *[QGenericMeasureProperties](../interfaces/_interface_q_generic_measure_properties_interface_.qgenericmeasureproperties.md)*): `Promise`<`any`>

Evaluates a measure and displays its properties, including the dynamic properties.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| qLayout | [QGenericMeasureProperties](../interfaces/_interface_q_generic_measure_properties_interface_.qgenericmeasureproperties.md) |  - |

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
<a id="getmeasure"></a>

###  getMeasure

▸ **getMeasure**(): `Promise`<`any`>

Returns the definition of a measure.

**Returns:** `Promise`<`any`>

___
<a id="getproperties"></a>

###  getProperties

▸ **getProperties**(): `Promise`<`any`>

Shows the properties of an object. Returns the identifier and the definition of the measure.

**Returns:** `Promise`<`any`>

___
<a id="publish"></a>

###  publish

▸ **publish**(): `Promise`<`any`>

Publishes a measure.

**Returns:** `Promise`<`any`>

___
<a id="sethandle"></a>

###  setHandle

▸ **setHandle**(handle: *`number`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| handle | `number` |

**Returns:** `void`

___
<a id="setproperties"></a>

###  setProperties

▸ **setProperties**(qProp: *[QGenericMeasureProperties](../interfaces/_interface_q_generic_measure_properties_interface_.qgenericmeasureproperties.md)*): `Promise`<`any`>

Sets some properties for a measure.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| qProp | [QGenericMeasureProperties](../interfaces/_interface_q_generic_measure_properties_interface_.qgenericmeasureproperties.md) |  - |

**Returns:** `Promise`<`any`>

___
<a id="unpublish"></a>

###  unPublish

▸ **unPublish**(): `Promise`<`any`>

Unpublishes a measure.

**Returns:** `Promise`<`any`>

___


