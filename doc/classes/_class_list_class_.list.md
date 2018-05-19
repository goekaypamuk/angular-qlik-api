[angular-qlik-api](../README.md) > ["class/list.class"](../modules/_class_list_class_.md) > [List](../classes/_class_list_class_.list.md)

# Class: List

## Hierarchy

**List**

## Index

### Constructors

* [constructor](_class_list_class_.list.md#constructor)

### Properties

* [callback](_class_list_class_.list.md#callback)
* [cubeOuterId](_class_list_class_.list.md#cubeouterid)
* [deferred](_class_list_class_.list.md#deferred)
* [doc](_class_list_class_.list.md#doc)
* [globalService](_class_list_class_.list.md#globalservice)
* [outerDoc](_class_list_class_.list.md#outerdoc)

### Methods

* [addQFieldDef](_class_list_class_.list.md#addqfielddef)
* [getLayout](_class_list_class_.list.md#getlayout)
* [onMessageLayout](_class_list_class_.list.md#onmessagelayout)
* [onMessageListCreated](_class_list_class_.list.md#onmessagelistcreated)
* [select](_class_list_class_.list.md#select)
* [setDefinitionId](_class_list_class_.list.md#setdefinitionid)
* [setHandle](_class_list_class_.list.md#sethandle)
* [subscribe](_class_list_class_.list.md#subscribe)
* [unsubscribe](_class_list_class_.list.md#unsubscribe)

### Object literals

* [definition](_class_list_class_.list.md#definition)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new List**(deferred: *[Deferred](_class_deferred_class_.deferred.md)<`number`>*, globalService: *`any`*, doc: *[Document](_class_document_class_.document.md)*, cubeOuterId: *`string`*): [List](_class_list_class_.list.md)

*Defined in [class/list.class.ts:68](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/list.class.ts#L68)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| deferred | [Deferred](_class_deferred_class_.deferred.md)<`number`> |
| globalService | `any` |
| doc | [Document](_class_document_class_.document.md) |
| cubeOuterId | `string` |

**Returns:** [List](_class_list_class_.list.md)

___

## Properties

<a id="callback"></a>

###  callback

**● callback**: *`any`*

*Defined in [class/list.class.ts:66](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/list.class.ts#L66)*

___
<a id="cubeouterid"></a>

###  cubeOuterId

**● cubeOuterId**: *`string`*

*Defined in [class/list.class.ts:68](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/list.class.ts#L68)*

___
<a id="deferred"></a>

###  deferred

**● deferred**: *[Deferred](_class_deferred_class_.deferred.md)<`number`>*

*Defined in [class/list.class.ts:65](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/list.class.ts#L65)*

___
<a id="doc"></a>

###  doc

**● doc**: *[Deferred](_class_deferred_class_.deferred.md)<`number`>*

*Defined in [class/list.class.ts:64](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/list.class.ts#L64)*

___
<a id="globalservice"></a>

###  globalService

**● globalService**: *`any`*

*Defined in [class/list.class.ts:63](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/list.class.ts#L63)*

___
<a id="outerdoc"></a>

###  outerDoc

**● outerDoc**: *`any`*

*Defined in [class/list.class.ts:67](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/list.class.ts#L67)*

___

## Methods

<a id="addqfielddef"></a>

###  addQFieldDef

▸ **addQFieldDef**(qFieldDefs: *`string`*, qFieldLabels?: *`string`*): [List](_class_list_class_.list.md)

*Defined in [class/list.class.ts:123](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/list.class.ts#L123)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| qFieldDefs | `string` |
| `Optional` qFieldLabels | `string` |

**Returns:** [List](_class_list_class_.list.md)

___
<a id="getlayout"></a>

###  getLayout

▸ **getLayout**(): `void`

*Defined in [class/list.class.ts:103](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/list.class.ts#L103)*

**Returns:** `void`

___
<a id="onmessagelayout"></a>

###  onMessageLayout

▸ **onMessageLayout**(m: *`any`*): `void`

*Defined in [class/list.class.ts:115](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/list.class.ts#L115)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| m | `any` |

**Returns:** `void`

___
<a id="onmessagelistcreated"></a>

###  onMessageListCreated

▸ **onMessageListCreated**(m: *`any`*): `void`

*Defined in [class/list.class.ts:93](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/list.class.ts#L93)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| m | `any` |

**Returns:** `void`

___
<a id="select"></a>

###  select

▸ **select**(index: *`number`*): [List](_class_list_class_.list.md)

*Defined in [class/list.class.ts:129](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/list.class.ts#L129)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index | `number` |

**Returns:** [List](_class_list_class_.list.md)

___
<a id="setdefinitionid"></a>

### `<Private>` setDefinitionId

▸ **setDefinitionId**(n: *`number`*): `void`

*Defined in [class/list.class.ts:154](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/list.class.ts#L154)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| n | `number` |

**Returns:** `void`

___
<a id="sethandle"></a>

### `<Private>` setHandle

▸ **setHandle**(h: *`number`*): `void`

*Defined in [class/list.class.ts:150](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/list.class.ts#L150)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| h | `number` |

**Returns:** `void`

___
<a id="subscribe"></a>

###  subscribe

▸ **subscribe**(cb: *`any`*): [List](_class_list_class_.list.md)

*Defined in [class/list.class.ts:77](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/list.class.ts#L77)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cb | `any` |

**Returns:** [List](_class_list_class_.list.md)

___
<a id="unsubscribe"></a>

###  unsubscribe

▸ **unsubscribe**(): `void`

*Defined in [class/list.class.ts:87](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/list.class.ts#L87)*

**Returns:** `void`

___

## Object literals

<a id="definition"></a>

###  definition

**definition**: *`object`*

*Defined in [class/list.class.ts:5](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/list.class.ts#L5)*

<a id="definition.handle"></a>

####  handle

**● handle**: *`null`* =  null

*Defined in [class/list.class.ts:9](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/list.class.ts#L9)*

___
<a id="definition.id"></a>

####  id

**● id**: *`null`* =  null

*Defined in [class/list.class.ts:7](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/list.class.ts#L7)*

___
<a id="definition.jsonrpc"></a>

####  jsonrpc

**● jsonrpc**: *`string`* = "2.0"

*Defined in [class/list.class.ts:6](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/list.class.ts#L6)*

___
<a id="definition.method"></a>

####  method

**● method**: *`string`* = "CreateSessionObject"

*Defined in [class/list.class.ts:8](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/list.class.ts#L8)*

___
<a id="definition.params"></a>

####  params

**● params**: *`object`[]* =  [
            {
                'qInfo': {
                    'qType': 'List'
                },
                'qListObjectDef': {
                    'qStateName': '$',
                    'qLibraryId': '',
                    'qDef': {
                        'qGrouping': 'N',
                        'qFieldDefs': [],
                        'qFieldLabels': [],
                        'qSortCriterias': [
                            {
                                'qSortByState': 1,
                                'qSortByFrequency': 0,
                                'qSortByNumeric': 0,
                                'qSortByAscii': 0,
                                'qSortByLoadOrder': 0,
                                'qSortByExpression': 0,
                                'qExpression': {
                                    'qv': ''
                                }
                            }
                        ],
                        'qNumberPresentations': [
                            {
                                'qType': 'U',
                                'qnDec': 10,
                                'qUseThou': 0,
                                'qFmt': '',
                                'qDec': '.',
                                'qThou': ' '
                            }
                        ]
                    },
                    'qAutoSortByState': {
                        'qDisplayNumberOfRows': -1
                    },
                    'qFrequencyMode': 'EQ_NX_FREQUENCY_NONE',
                    'qShowAlternatives': true,
                    'qInitialDataFetch': [
                        {
                            'qTop': 0,
                            'qLeft': 0,
                            'qHeight': 100,
                            'qWidth': 1
                        }
                    ]
                }
            }
        ]

*Defined in [class/list.class.ts:10](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/list.class.ts#L10)*

___

___

