[angular-qlik-api](../README.md) > ["class/bookmark.class"](../modules/_class_bookmark_class_.md) > [Bookmark](../classes/_class_bookmark_class_.bookmark.md)

# Class: Bookmark

## Hierarchy

**Bookmark**

## Index

### Constructors

* [constructor](_class_bookmark_class_.bookmark.md#constructor)

### Properties

* [bookmarkOuterId](_class_bookmark_class_.bookmark.md#bookmarkouterid)
* [deferred](_class_bookmark_class_.bookmark.md#deferred)
* [doc](_class_bookmark_class_.bookmark.md#doc)
* [globalService](_class_bookmark_class_.bookmark.md#globalservice)
* [outerDoc](_class_bookmark_class_.bookmark.md#outerdoc)

### Methods

* [apply](_class_bookmark_class_.bookmark.md#apply)
* [applyPatches](_class_bookmark_class_.bookmark.md#applypatches)
* [getInfo](_class_bookmark_class_.bookmark.md#getinfo)
* [getLayout](_class_bookmark_class_.bookmark.md#getlayout)
* [getProperties](_class_bookmark_class_.bookmark.md#getproperties)
* [publish](_class_bookmark_class_.bookmark.md#publish)
* [setHandle](_class_bookmark_class_.bookmark.md#sethandle)
* [setProperties](_class_bookmark_class_.bookmark.md#setproperties)
* [unPublish](_class_bookmark_class_.bookmark.md#unpublish)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Bookmark**(deferred: *[Deferred](_class_deferred_class_.deferred.md)<`number`>*, globalService: *`any`*, doc: *[Document](_class_document_class_.document.md)*, bookmarkOuterId: *`string`*): [Bookmark](_class_bookmark_class_.bookmark.md)

*Defined in [class/bookmark.class.ts:11](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/bookmark.class.ts#L11)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| deferred | [Deferred](_class_deferred_class_.deferred.md)<`number`> |
| globalService | `any` |
| doc | [Document](_class_document_class_.document.md) |
| bookmarkOuterId | `string` |

**Returns:** [Bookmark](_class_bookmark_class_.bookmark.md)

___

## Properties

<a id="bookmarkouterid"></a>

###  bookmarkOuterId

**● bookmarkOuterId**: *`string`*

*Defined in [class/bookmark.class.ts:11](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/bookmark.class.ts#L11)*

___
<a id="deferred"></a>

###  deferred

**● deferred**: *[Deferred](_class_deferred_class_.deferred.md)<`number`>*

*Defined in [class/bookmark.class.ts:9](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/bookmark.class.ts#L9)*

___
<a id="doc"></a>

###  doc

**● doc**: *[Deferred](_class_deferred_class_.deferred.md)<`number`>*

*Defined in [class/bookmark.class.ts:8](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/bookmark.class.ts#L8)*

___
<a id="globalservice"></a>

###  globalService

**● globalService**: *`any`*

*Defined in [class/bookmark.class.ts:7](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/bookmark.class.ts#L7)*

___
<a id="outerdoc"></a>

###  outerDoc

**● outerDoc**: *[Document](_class_document_class_.document.md)*

*Defined in [class/bookmark.class.ts:10](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/bookmark.class.ts#L10)*

___

## Methods

<a id="apply"></a>

###  apply

▸ **apply**(): `Promise`<`any`>

*Defined in [class/bookmark.class.ts:24](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/bookmark.class.ts#L24)*

**Returns:** `Promise`<`any`>

___
<a id="applypatches"></a>

###  applyPatches

▸ **applyPatches**(qPatches: *[QPatches](../interfaces/_interface_q_patches_interface_.qpatches.md)*): `Promise`<`any`>

*Defined in [class/bookmark.class.ts:42](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/bookmark.class.ts#L42)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| qPatches | [QPatches](../interfaces/_interface_q_patches_interface_.qpatches.md) |

**Returns:** `Promise`<`any`>

___
<a id="getinfo"></a>

###  getInfo

▸ **getInfo**(): `Promise`<`any`>

*Defined in [class/bookmark.class.ts:60](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/bookmark.class.ts#L60)*

**Returns:** `Promise`<`any`>

___
<a id="getlayout"></a>

###  getLayout

▸ **getLayout**(): `Promise`<`any`>

*Defined in [class/bookmark.class.ts:77](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/bookmark.class.ts#L77)*

**Returns:** `Promise`<`any`>

___
<a id="getproperties"></a>

###  getProperties

▸ **getProperties**(): `Promise`<`any`>

*Defined in [class/bookmark.class.ts:94](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/bookmark.class.ts#L94)*

**Returns:** `Promise`<`any`>

___
<a id="publish"></a>

###  publish

▸ **publish**(): `Promise`<`any`>

*Defined in [class/bookmark.class.ts:111](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/bookmark.class.ts#L111)*

**Returns:** `Promise`<`any`>

___
<a id="sethandle"></a>

###  setHandle

▸ **setHandle**(handle: *`number`*): `void`

*Defined in [class/bookmark.class.ts:20](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/bookmark.class.ts#L20)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| handle | `number` |

**Returns:** `void`

___
<a id="setproperties"></a>

###  setProperties

▸ **setProperties**(qProp: *[QGenericBookmarkProperties](../interfaces/_interface_q_generic_bookmark_properties_interface_.qgenericbookmarkproperties.md)*): `Promise`<`any`>

*Defined in [class/bookmark.class.ts:128](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/bookmark.class.ts#L128)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| qProp | [QGenericBookmarkProperties](../interfaces/_interface_q_generic_bookmark_properties_interface_.qgenericbookmarkproperties.md) |

**Returns:** `Promise`<`any`>

___
<a id="unpublish"></a>

###  unPublish

▸ **unPublish**(): `Promise`<`any`>

*Defined in [class/bookmark.class.ts:145](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/bookmark.class.ts#L145)*

**Returns:** `Promise`<`any`>

___

