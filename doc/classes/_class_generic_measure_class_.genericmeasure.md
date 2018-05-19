[angular-qlik-api](../README.md) > ["class/generic-measure.class"](../modules/_class_generic_measure_class_.md) > [GenericMeasure](../classes/_class_generic_measure_class_.genericmeasure.md)

# Class: GenericMeasure

## Hierarchy

**GenericMeasure**

## Index

### Constructors

* [constructor](_class_generic_measure_class_.genericmeasure.md#constructor)

### Properties

* [deferred](_class_generic_measure_class_.genericmeasure.md#deferred)
* [doc](_class_generic_measure_class_.genericmeasure.md#doc)
* [genericMeasureId](_class_generic_measure_class_.genericmeasure.md#genericmeasureid)
* [globalService](_class_generic_measure_class_.genericmeasure.md#globalservice)
* [outerDoc](_class_generic_measure_class_.genericmeasure.md#outerdoc)
* [qProp](_class_generic_measure_class_.genericmeasure.md#qprop)

### Methods

* [$setColor](_class_generic_measure_class_.genericmeasure.md#_setcolor)
* [$setDescription](_class_generic_measure_class_.genericmeasure.md#_setdescription)
* [$setFormula](_class_generic_measure_class_.genericmeasure.md#_setformula)
* [$setGrouping](_class_generic_measure_class_.genericmeasure.md#_setgrouping)
* [$setLabelExpression](_class_generic_measure_class_.genericmeasure.md#_setlabelexpression)
* [$setTags](_class_generic_measure_class_.genericmeasure.md#_settags)
* [$setTitle](_class_generic_measure_class_.genericmeasure.md#_settitle)
* [applyPatches](_class_generic_measure_class_.genericmeasure.md#applypatches)
* [getInfo](_class_generic_measure_class_.genericmeasure.md#getinfo)
* [getLayout](_class_generic_measure_class_.genericmeasure.md#getlayout)
* [getLinkedObjects](_class_generic_measure_class_.genericmeasure.md#getlinkedobjects)
* [getMeasure](_class_generic_measure_class_.genericmeasure.md#getmeasure)
* [getProperties](_class_generic_measure_class_.genericmeasure.md#getproperties)
* [publish](_class_generic_measure_class_.genericmeasure.md#publish)
* [setHandle](_class_generic_measure_class_.genericmeasure.md#sethandle)
* [setProperties](_class_generic_measure_class_.genericmeasure.md#setproperties)
* [unPublish](_class_generic_measure_class_.genericmeasure.md#unpublish)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new GenericMeasure**(deferred: *[Deferred](_class_deferred_class_.deferred.md)<`number`>*, globalService: *`any`*, doc: *[Document](_class_document_class_.document.md)*, genericMeasureId: *`string`*): [GenericMeasure](_class_generic_measure_class_.genericmeasure.md)

*Defined in [class/generic-measure.class.ts:14](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/generic-measure.class.ts#L14)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| deferred | [Deferred](_class_deferred_class_.deferred.md)<`number`> |
| globalService | `any` |
| doc | [Document](_class_document_class_.document.md) |
| genericMeasureId | `string` |

**Returns:** [GenericMeasure](_class_generic_measure_class_.genericmeasure.md)

___

## Properties

<a id="deferred"></a>

###  deferred

**● deferred**: *[Deferred](_class_deferred_class_.deferred.md)<`number`>*

*Defined in [class/generic-measure.class.ts:12](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/generic-measure.class.ts#L12)*

___
<a id="doc"></a>

###  doc

**● doc**: *[Deferred](_class_deferred_class_.deferred.md)<`number`>*

*Defined in [class/generic-measure.class.ts:11](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/generic-measure.class.ts#L11)*

___
<a id="genericmeasureid"></a>

###  genericMeasureId

**● genericMeasureId**: *`string`*

*Defined in [class/generic-measure.class.ts:14](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/generic-measure.class.ts#L14)*

___
<a id="globalservice"></a>

###  globalService

**● globalService**: *`any`*

*Defined in [class/generic-measure.class.ts:10](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/generic-measure.class.ts#L10)*

___
<a id="outerdoc"></a>

###  outerDoc

**● outerDoc**: *[Document](_class_document_class_.document.md)*

*Defined in [class/generic-measure.class.ts:13](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/generic-measure.class.ts#L13)*

___
<a id="qprop"></a>

###  qProp

**● qProp**: *[QGenericMeasureProperties](../interfaces/_interface_q_generic_measure_properties_interface_.qgenericmeasureproperties.md)*

*Defined in [class/generic-measure.class.ts:9](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/generic-measure.class.ts#L9)*

___

## Methods

<a id="_setcolor"></a>

###  $setColor

▸ **$setColor**(hexColor: *`string`*, presist?: *`boolean`*): `Promise`<`any`>

*Defined in [class/generic-measure.class.ts:344](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/generic-measure.class.ts#L344)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| hexColor | `string` | - |
| `Default value` presist | `boolean` | true |

**Returns:** `Promise`<`any`>

___
<a id="_setdescription"></a>

###  $setDescription

▸ **$setDescription**(description: *`string`*, presist?: *`boolean`*): `Promise`<`any`>

*Defined in [class/generic-measure.class.ts:249](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/generic-measure.class.ts#L249)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| description | `string` | - |
| `Default value` presist | `boolean` | true |

**Returns:** `Promise`<`any`>

___
<a id="_setformula"></a>

###  $setFormula

▸ **$setFormula**(expression: *`string`*, presist?: *`boolean`*): `Promise`<`any`>

*Defined in [class/generic-measure.class.ts:287](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/generic-measure.class.ts#L287)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| expression | `string` | - |
| `Default value` presist | `boolean` | true |

**Returns:** `Promise`<`any`>

___
<a id="_setgrouping"></a>

###  $setGrouping

▸ **$setGrouping**(qGroup: *[QGrouping](../enums/_enum_q_grouping_enum_.qgrouping.md)*, presist?: *`boolean`*): `Promise`<`any`>

*Defined in [class/generic-measure.class.ts:306](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/generic-measure.class.ts#L306)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| qGroup | [QGrouping](../enums/_enum_q_grouping_enum_.qgrouping.md) | - |
| `Default value` presist | `boolean` | true |

**Returns:** `Promise`<`any`>

___
<a id="_setlabelexpression"></a>

###  $setLabelExpression

▸ **$setLabelExpression**(expression: *`string`*, presist?: *`boolean`*): `Promise`<`any`>

*Defined in [class/generic-measure.class.ts:325](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/generic-measure.class.ts#L325)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| expression | `string` | - |
| `Default value` presist | `boolean` | true |

**Returns:** `Promise`<`any`>

___
<a id="_settags"></a>

###  $setTags

▸ **$setTags**(tags: *`Array`<`string`>*, presist?: *`boolean`*): `Promise`<`any`>

*Defined in [class/generic-measure.class.ts:268](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/generic-measure.class.ts#L268)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| tags | `Array`<`string`> | - |
| `Default value` presist | `boolean` | true |

**Returns:** `Promise`<`any`>

___
<a id="_settitle"></a>

###  $setTitle

▸ **$setTitle**(title: *`string`*, presist?: *`boolean`*): `Promise`<`any`>

*Defined in [class/generic-measure.class.ts:230](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/generic-measure.class.ts#L230)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| title | `string` | - |
| `Default value` presist | `boolean` | true |

**Returns:** `Promise`<`any`>

___
<a id="applypatches"></a>

###  applyPatches

▸ **applyPatches**(qPatches: *`Array`<[QPatches](../interfaces/_interface_q_patches_interface_.qpatches.md)>*): `Promise`<`any`>

*Defined in [class/generic-measure.class.ts:33](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/generic-measure.class.ts#L33)*

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

*Defined in [class/generic-measure.class.ts:56](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/generic-measure.class.ts#L56)*

Returns the type and identifier of the object.

**Returns:** `Promise`<`any`>

___
<a id="getlayout"></a>

###  getLayout

▸ **getLayout**(qLayout: *[QGenericMeasureProperties](../interfaces/_interface_q_generic_measure_properties_interface_.qgenericmeasureproperties.md)*): `Promise`<`any`>

*Defined in [class/generic-measure.class.ts:78](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/generic-measure.class.ts#L78)*

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

*Defined in [class/generic-measure.class.ts:100](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/generic-measure.class.ts#L100)*

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

*Defined in [class/generic-measure.class.ts:122](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/generic-measure.class.ts#L122)*

Returns the definition of a measure.

**Returns:** `Promise`<`any`>

___
<a id="getproperties"></a>

###  getProperties

▸ **getProperties**(): `Promise`<`any`>

*Defined in [class/generic-measure.class.ts:144](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/generic-measure.class.ts#L144)*

Shows the properties of an object. Returns the identifier and the definition of the measure.

**Returns:** `Promise`<`any`>

___
<a id="publish"></a>

###  publish

▸ **publish**(): `Promise`<`any`>

*Defined in [class/generic-measure.class.ts:166](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/generic-measure.class.ts#L166)*

Publishes a measure.

**Returns:** `Promise`<`any`>

___
<a id="sethandle"></a>

###  setHandle

▸ **setHandle**(handle: *`number`*): `void`

*Defined in [class/generic-measure.class.ts:23](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/generic-measure.class.ts#L23)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| handle | `number` |

**Returns:** `void`

___
<a id="setproperties"></a>

###  setProperties

▸ **setProperties**(qProp: *[QGenericMeasureProperties](../interfaces/_interface_q_generic_measure_properties_interface_.qgenericmeasureproperties.md)*): `Promise`<`any`>

*Defined in [class/generic-measure.class.ts:188](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/generic-measure.class.ts#L188)*

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

*Defined in [class/generic-measure.class.ts:211](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/generic-measure.class.ts#L211)*

Unpublishes a measure.

**Returns:** `Promise`<`any`>

___

