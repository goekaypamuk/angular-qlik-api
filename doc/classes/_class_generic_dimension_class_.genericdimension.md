[angular-qlik-api](../README.md) > ["class/generic-dimension.class"](../modules/_class_generic_dimension_class_.md) > [GenericDimension](../classes/_class_generic_dimension_class_.genericdimension.md)

# Class: GenericDimension

## Hierarchy

**GenericDimension**

## Index

### Constructors

* [constructor](_class_generic_dimension_class_.genericdimension.md#constructor)

### Properties

* [deferred](_class_generic_dimension_class_.genericdimension.md#deferred)
* [doc](_class_generic_dimension_class_.genericdimension.md#doc)
* [genericDimensionId](_class_generic_dimension_class_.genericdimension.md#genericdimensionid)
* [globalService](_class_generic_dimension_class_.genericdimension.md#globalservice)
* [outerDoc](_class_generic_dimension_class_.genericdimension.md#outerdoc)

### Methods

* [applyPatches](_class_generic_dimension_class_.genericdimension.md#applypatches)
* [getDimension](_class_generic_dimension_class_.genericdimension.md#getdimension)
* [getInfo](_class_generic_dimension_class_.genericdimension.md#getinfo)
* [getLayout](_class_generic_dimension_class_.genericdimension.md#getlayout)
* [getLinkedObjects](_class_generic_dimension_class_.genericdimension.md#getlinkedobjects)
* [getProperties](_class_generic_dimension_class_.genericdimension.md#getproperties)
* [publish](_class_generic_dimension_class_.genericdimension.md#publish)
* [setHandle](_class_generic_dimension_class_.genericdimension.md#sethandle)
* [setProperties](_class_generic_dimension_class_.genericdimension.md#setproperties)
* [unPublish](_class_generic_dimension_class_.genericdimension.md#unpublish)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new GenericDimension**(deferred: *[Deferred](_class_deferred_class_.deferred.md)<`number`>*, globalService: *`any`*, doc: *[Document](_class_document_class_.document.md)*, genericDimensionId: *`string`*): [GenericDimension](_class_generic_dimension_class_.genericdimension.md)

*Defined in [class/generic-dimension.class.ts:12](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/generic-dimension.class.ts#L12)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| deferred | [Deferred](_class_deferred_class_.deferred.md)<`number`> |
| globalService | `any` |
| doc | [Document](_class_document_class_.document.md) |
| genericDimensionId | `string` |

**Returns:** [GenericDimension](_class_generic_dimension_class_.genericdimension.md)

___

## Properties

<a id="deferred"></a>

###  deferred

**● deferred**: *[Deferred](_class_deferred_class_.deferred.md)<`number`>*

*Defined in [class/generic-dimension.class.ts:10](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/generic-dimension.class.ts#L10)*

___
<a id="doc"></a>

###  doc

**● doc**: *[Deferred](_class_deferred_class_.deferred.md)<`number`>*

*Defined in [class/generic-dimension.class.ts:9](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/generic-dimension.class.ts#L9)*

___
<a id="genericdimensionid"></a>

###  genericDimensionId

**● genericDimensionId**: *`string`*

*Defined in [class/generic-dimension.class.ts:12](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/generic-dimension.class.ts#L12)*

___
<a id="globalservice"></a>

###  globalService

**● globalService**: *`any`*

*Defined in [class/generic-dimension.class.ts:8](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/generic-dimension.class.ts#L8)*

___
<a id="outerdoc"></a>

###  outerDoc

**● outerDoc**: *[Document](_class_document_class_.document.md)*

*Defined in [class/generic-dimension.class.ts:11](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/generic-dimension.class.ts#L11)*

___

## Methods

<a id="applypatches"></a>

###  applyPatches

▸ **applyPatches**(qPatches: *[QPatches](../interfaces/_interface_q_patches_interface_.qpatches.md)*): `Promise`<`any`>

*Defined in [class/generic-dimension.class.ts:25](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/generic-dimension.class.ts#L25)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| qPatches | [QPatches](../interfaces/_interface_q_patches_interface_.qpatches.md) |

**Returns:** `Promise`<`any`>

___
<a id="getdimension"></a>

###  getDimension

▸ **getDimension**(): `Promise`<`any`>

*Defined in [class/generic-dimension.class.ts:44](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/generic-dimension.class.ts#L44)*

**Returns:** `Promise`<`any`>

___
<a id="getinfo"></a>

###  getInfo

▸ **getInfo**(): `Promise`<`any`>

*Defined in [class/generic-dimension.class.ts:61](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/generic-dimension.class.ts#L61)*

**Returns:** `Promise`<`any`>

___
<a id="getlayout"></a>

###  getLayout

▸ **getLayout**(qLayout: *[QGenericDimensionProperties](../interfaces/_interface_q_generic_dimension_properties_interface_.qgenericdimensionproperties.md)*): `Promise`<`any`>

*Defined in [class/generic-dimension.class.ts:78](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/generic-dimension.class.ts#L78)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| qLayout | [QGenericDimensionProperties](../interfaces/_interface_q_generic_dimension_properties_interface_.qgenericdimensionproperties.md) |

**Returns:** `Promise`<`any`>

___
<a id="getlinkedobjects"></a>

###  getLinkedObjects

▸ **getLinkedObjects**(qItems: *`Array`<[QLinkedObjectInfo](../interfaces/_interface_q_linked_object_info_interface_.qlinkedobjectinfo.md)>*): `Promise`<`any`>

*Defined in [class/generic-dimension.class.ts:96](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/generic-dimension.class.ts#L96)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| qItems | `Array`<[QLinkedObjectInfo](../interfaces/_interface_q_linked_object_info_interface_.qlinkedobjectinfo.md)> |

**Returns:** `Promise`<`any`>

___
<a id="getproperties"></a>

###  getProperties

▸ **getProperties**(qLayout: *[QGenericDimensionProperties](../interfaces/_interface_q_generic_dimension_properties_interface_.qgenericdimensionproperties.md)*): `Promise`<`any`>

*Defined in [class/generic-dimension.class.ts:114](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/generic-dimension.class.ts#L114)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| qLayout | [QGenericDimensionProperties](../interfaces/_interface_q_generic_dimension_properties_interface_.qgenericdimensionproperties.md) |

**Returns:** `Promise`<`any`>

___
<a id="publish"></a>

###  publish

▸ **publish**(): `Promise`<`any`>

*Defined in [class/generic-dimension.class.ts:132](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/generic-dimension.class.ts#L132)*

**Returns:** `Promise`<`any`>

___
<a id="sethandle"></a>

###  setHandle

▸ **setHandle**(handle: *`number`*): `void`

*Defined in [class/generic-dimension.class.ts:21](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/generic-dimension.class.ts#L21)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| handle | `number` |

**Returns:** `void`

___
<a id="setproperties"></a>

###  setProperties

▸ **setProperties**(qProp: *[QGenericDimensionProperties](../interfaces/_interface_q_generic_dimension_properties_interface_.qgenericdimensionproperties.md)*): `Promise`<`any`>

*Defined in [class/generic-dimension.class.ts:149](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/generic-dimension.class.ts#L149)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| qProp | [QGenericDimensionProperties](../interfaces/_interface_q_generic_dimension_properties_interface_.qgenericdimensionproperties.md) |

**Returns:** `Promise`<`any`>

___
<a id="unpublish"></a>

###  unPublish

▸ **unPublish**(): `Promise`<`any`>

*Defined in [class/generic-dimension.class.ts:167](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/generic-dimension.class.ts#L167)*

**Returns:** `Promise`<`any`>

___

