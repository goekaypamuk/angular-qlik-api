[angular-qlik-api](../README.md) > ["class/field.class"](../modules/_class_field_class_.md) > [Field](../classes/_class_field_class_.field.md)

# Class: Field

## Hierarchy

**Field**

## Index

### Constructors

* [constructor](_class_field_class_.field.md#constructor)

### Properties

* [deferred](_class_field_class_.field.md#deferred)
* [doc](_class_field_class_.field.md#doc)
* [fieldOuterId](_class_field_class_.field.md#fieldouterid)
* [globalService](_class_field_class_.field.md#globalservice)
* [outerDoc](_class_field_class_.field.md#outerdoc)

### Methods

* [clear](_class_field_class_.field.md#clear)
* [clearAllButThis](_class_field_class_.field.md#clearallbutthis)
* [getAndMode](_class_field_class_.field.md#getandmode)
* [getCardinal](_class_field_class_.field.md#getcardinal)
* [getNxProperties](_class_field_class_.field.md#getnxproperties)
* [lock](_class_field_class_.field.md#lock)
* [lowLevelSelect](_class_field_class_.field.md#lowlevelselect)
* [select](_class_field_class_.field.md#select)
* [selectAll](_class_field_class_.field.md#selectall)
* [selectAlternative](_class_field_class_.field.md#selectalternative)
* [selectExcluded](_class_field_class_.field.md#selectexcluded)
* [selectPossible](_class_field_class_.field.md#selectpossible)
* [selectValues](_class_field_class_.field.md#selectvalues)
* [setAndMode](_class_field_class_.field.md#setandmode)
* [setHandle](_class_field_class_.field.md#sethandle)
* [setNxProperties](_class_field_class_.field.md#setnxproperties)
* [toggleSelect](_class_field_class_.field.md#toggleselect)
* [unlock](_class_field_class_.field.md#unlock)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Field**(deferred: *[Deferred](_class_deferred_class_.deferred.md)<`number`>*, globalService: *`any`*, doc: *[Document](_class_document_class_.document.md)*, fieldOuterId: *`string`*): [Field](_class_field_class_.field.md)

*Defined in [class/field.class.ts:10](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/field.class.ts#L10)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| deferred | [Deferred](_class_deferred_class_.deferred.md)<`number`> |
| globalService | `any` |
| doc | [Document](_class_document_class_.document.md) |
| fieldOuterId | `string` |

**Returns:** [Field](_class_field_class_.field.md)

___

## Properties

<a id="deferred"></a>

###  deferred

**● deferred**: *[Deferred](_class_deferred_class_.deferred.md)<`number`>*

*Defined in [class/field.class.ts:8](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/field.class.ts#L8)*

___
<a id="doc"></a>

###  doc

**● doc**: *[Deferred](_class_deferred_class_.deferred.md)<`number`>*

*Defined in [class/field.class.ts:7](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/field.class.ts#L7)*

___
<a id="fieldouterid"></a>

###  fieldOuterId

**● fieldOuterId**: *`string`*

*Defined in [class/field.class.ts:10](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/field.class.ts#L10)*

___
<a id="globalservice"></a>

###  globalService

**● globalService**: *`any`*

*Defined in [class/field.class.ts:6](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/field.class.ts#L6)*

___
<a id="outerdoc"></a>

###  outerDoc

**● outerDoc**: *[Document](_class_document_class_.document.md)*

*Defined in [class/field.class.ts:9](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/field.class.ts#L9)*

___

## Methods

<a id="clear"></a>

###  clear

▸ **clear**(): `Promise`<`any`>

*Defined in [class/field.class.ts:42](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/field.class.ts#L42)*

**Returns:** `Promise`<`any`>

___
<a id="clearallbutthis"></a>

###  clearAllButThis

▸ **clearAllButThis**(qSoftLock?: *`boolean`*): `Promise`<`any`>

*Defined in [class/field.class.ts:23](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/field.class.ts#L23)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` qSoftLock | `boolean` | false |

**Returns:** `Promise`<`any`>

___
<a id="getandmode"></a>

###  getAndMode

▸ **getAndMode**(): `Promise`<`any`>

*Defined in [class/field.class.ts:60](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/field.class.ts#L60)*

**Returns:** `Promise`<`any`>

___
<a id="getcardinal"></a>

###  getCardinal

▸ **getCardinal**(): `Promise`<`any`>

*Defined in [class/field.class.ts:77](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/field.class.ts#L77)*

**Returns:** `Promise`<`any`>

___
<a id="getnxproperties"></a>

###  getNxProperties

▸ **getNxProperties**(): `Promise`<`any`>

*Defined in [class/field.class.ts:94](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/field.class.ts#L94)*

**Returns:** `Promise`<`any`>

___
<a id="lock"></a>

###  lock

▸ **lock**(): `Promise`<`any`>

*Defined in [class/field.class.ts:111](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/field.class.ts#L111)*

**Returns:** `Promise`<`any`>

___
<a id="lowlevelselect"></a>

###  lowLevelSelect

▸ **lowLevelSelect**(qValues: *`Array`<`number`>*, qToggleMode: *`boolean`*, qSoftLock?: *`boolean`*): `Promise`<`any`>

*Defined in [class/field.class.ts:128](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/field.class.ts#L128)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| qValues | `Array`<`number`> | - |
| qToggleMode | `boolean` | - |
| `Default value` qSoftLock | `boolean` | false |

**Returns:** `Promise`<`any`>

___
<a id="select"></a>

###  select

▸ **select**(qMatch: *`string`*, qSoftLock?: *`boolean`*, qExcludedValuesMode?: *`number`*): `Promise`<`any`>

*Defined in [class/field.class.ts:206](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/field.class.ts#L206)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| qMatch | `string` | - |
| `Default value` qSoftLock | `boolean` | false |
| `Optional` qExcludedValuesMode | `number` | - |

**Returns:** `Promise`<`any`>

___
<a id="selectall"></a>

###  selectAll

▸ **selectAll**(qSoftLock?: *`boolean`*): `Promise`<`any`>

*Defined in [class/field.class.ts:149](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/field.class.ts#L149)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` qSoftLock | `boolean` | false |

**Returns:** `Promise`<`any`>

___
<a id="selectalternative"></a>

###  selectAlternative

▸ **selectAlternative**(qSoftLock?: *`boolean`*): `Promise`<`any`>

*Defined in [class/field.class.ts:168](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/field.class.ts#L168)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` qSoftLock | `boolean` | false |

**Returns:** `Promise`<`any`>

___
<a id="selectexcluded"></a>

###  selectExcluded

▸ **selectExcluded**(qSoftLock?: *`boolean`*): `Promise`<`any`>

*Defined in [class/field.class.ts:187](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/field.class.ts#L187)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` qSoftLock | `boolean` | false |

**Returns:** `Promise`<`any`>

___
<a id="selectpossible"></a>

###  selectPossible

▸ **selectPossible**(qSoftLock?: *`boolean`*): `Promise`<`any`>

*Defined in [class/field.class.ts:227](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/field.class.ts#L227)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` qSoftLock | `boolean` | false |

**Returns:** `Promise`<`any`>

___
<a id="selectvalues"></a>

###  selectValues

▸ **selectValues**(qFieldValues: *`Array`<[QFieldValue](../interfaces/_interface_q_field_value_interface_.qfieldvalue.md)>*, qToggleMode: *`boolean`*, qSoftLock?: *`boolean`*): `Promise`<`any`>

*Defined in [class/field.class.ts:246](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/field.class.ts#L246)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| qFieldValues | `Array`<[QFieldValue](../interfaces/_interface_q_field_value_interface_.qfieldvalue.md)> | - |
| qToggleMode | `boolean` | - |
| `Default value` qSoftLock | `boolean` | false |

**Returns:** `Promise`<`any`>

___
<a id="setandmode"></a>

###  setAndMode

▸ **setAndMode**(qAndMode: *`boolean`*): `Promise`<`any`>

*Defined in [class/field.class.ts:267](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/field.class.ts#L267)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| qAndMode | `boolean` |

**Returns:** `Promise`<`any`>

___
<a id="sethandle"></a>

###  setHandle

▸ **setHandle**(handle: *`number`*): `void`

*Defined in [class/field.class.ts:19](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/field.class.ts#L19)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| handle | `number` |

**Returns:** `void`

___
<a id="setnxproperties"></a>

###  setNxProperties

▸ **setNxProperties**(qOneAndOnlyOne: *`boolean`*): `Promise`<`any`>

*Defined in [class/field.class.ts:285](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/field.class.ts#L285)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| qOneAndOnlyOne | `boolean` |

**Returns:** `Promise`<`any`>

___
<a id="toggleselect"></a>

###  toggleSelect

▸ **toggleSelect**(qMatch: *`string`*, qSoftLock?: *`boolean`*, qExcludedValuesMode?: *`number`*): `Promise`<`any`>

*Defined in [class/field.class.ts:305](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/field.class.ts#L305)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| qMatch | `string` | - |
| `Default value` qSoftLock | `boolean` | false |
| `Optional` qExcludedValuesMode | `number` | - |

**Returns:** `Promise`<`any`>

___
<a id="unlock"></a>

###  unlock

▸ **unlock**(): `Promise`<`any`>

*Defined in [class/field.class.ts:326](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/field.class.ts#L326)*

**Returns:** `Promise`<`any`>

___

