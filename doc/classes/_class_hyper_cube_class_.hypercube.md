[angular-qlik-api](../README.md) > ["class/hyper-cube.class"](../modules/_class_hyper_cube_class_.md) > [HyperCube](../classes/_class_hyper_cube_class_.hypercube.md)

# Class: HyperCube

## Hierarchy

**HyperCube**

## Index

### Constructors

* [constructor](_class_hyper_cube_class_.hypercube.md#constructor)

### Properties

* [callback](_class_hyper_cube_class_.hypercube.md#callback)
* [cubeOuterId](_class_hyper_cube_class_.hypercube.md#cubeouterid)
* [deferred](_class_hyper_cube_class_.hypercube.md#deferred)
* [doc](_class_hyper_cube_class_.hypercube.md#doc)
* [globalService](_class_hyper_cube_class_.hypercube.md#globalservice)
* [outerDoc](_class_hyper_cube_class_.hypercube.md#outerdoc)

### Methods

* [addDimension](_class_hyper_cube_class_.hypercube.md#adddimension)
* [addMeasure](_class_hyper_cube_class_.hypercube.md#addmeasure)
* [getLayout](_class_hyper_cube_class_.hypercube.md#getlayout)
* [onMessageCubeCreated](_class_hyper_cube_class_.hypercube.md#onmessagecubecreated)
* [onMessageLayout](_class_hyper_cube_class_.hypercube.md#onmessagelayout)
* [select](_class_hyper_cube_class_.hypercube.md#select)
* [setDefinitionId](_class_hyper_cube_class_.hypercube.md#setdefinitionid)
* [setEffectiveColumnSorter](_class_hyper_cube_class_.hypercube.md#seteffectivecolumnsorter)
* [setHandle](_class_hyper_cube_class_.hypercube.md#sethandle)
* [setInitialDataFetch](_class_hyper_cube_class_.hypercube.md#setinitialdatafetch)
* [setStateName](_class_hyper_cube_class_.hypercube.md#setstatename)
* [setSuppressMissing](_class_hyper_cube_class_.hypercube.md#setsuppressmissing)
* [setSuppressZero](_class_hyper_cube_class_.hypercube.md#setsuppresszero)
* [subscribe](_class_hyper_cube_class_.hypercube.md#subscribe)
* [unsubscribe](_class_hyper_cube_class_.hypercube.md#unsubscribe)

### Object literals

* [definition](_class_hyper_cube_class_.hypercube.md#definition)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new HyperCube**(deferred: *[Deferred](_class_deferred_class_.deferred.md)<`number`>*, globalService: *`any`*, doc: *[Document](_class_document_class_.document.md)*, cubeOuterId: *`string`*): [HyperCube](_class_hyper_cube_class_.hypercube.md)

*Defined in [class/hyper-cube.class.ts:40](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/hyper-cube.class.ts#L40)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| deferred | [Deferred](_class_deferred_class_.deferred.md)<`number`> |
| globalService | `any` |
| doc | [Document](_class_document_class_.document.md) |
| cubeOuterId | `string` |

**Returns:** [HyperCube](_class_hyper_cube_class_.hypercube.md)

___

## Properties

<a id="callback"></a>

###  callback

**● callback**: *`Array`<`Function`>*

*Defined in [class/hyper-cube.class.ts:38](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/hyper-cube.class.ts#L38)*

___
<a id="cubeouterid"></a>

###  cubeOuterId

**● cubeOuterId**: *`string`*

*Defined in [class/hyper-cube.class.ts:40](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/hyper-cube.class.ts#L40)*

___
<a id="deferred"></a>

###  deferred

**● deferred**: *[Deferred](_class_deferred_class_.deferred.md)<`number`>*

*Defined in [class/hyper-cube.class.ts:37](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/hyper-cube.class.ts#L37)*

___
<a id="doc"></a>

###  doc

**● doc**: *[Deferred](_class_deferred_class_.deferred.md)<`number`>*

*Defined in [class/hyper-cube.class.ts:36](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/hyper-cube.class.ts#L36)*

___
<a id="globalservice"></a>

###  globalService

**● globalService**: *`any`*

*Defined in [class/hyper-cube.class.ts:35](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/hyper-cube.class.ts#L35)*

___
<a id="outerdoc"></a>

###  outerDoc

**● outerDoc**: *[Document](_class_document_class_.document.md)*

*Defined in [class/hyper-cube.class.ts:39](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/hyper-cube.class.ts#L39)*

___

## Methods

<a id="adddimension"></a>

###  addDimension

▸ **addDimension**(dim: *[Dimension](_class_dimension_class_.dimension.md)*): [HyperCube](_class_hyper_cube_class_.hypercube.md)

*Defined in [class/hyper-cube.class.ts:124](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/hyper-cube.class.ts#L124)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| dim | [Dimension](_class_dimension_class_.dimension.md) |

**Returns:** [HyperCube](_class_hyper_cube_class_.hypercube.md)

___
<a id="addmeasure"></a>

###  addMeasure

▸ **addMeasure**(ms: *[Measure](_class_measure_class_.measure.md)*): [HyperCube](_class_hyper_cube_class_.hypercube.md)

*Defined in [class/hyper-cube.class.ts:131](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/hyper-cube.class.ts#L131)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| ms | [Measure](_class_measure_class_.measure.md) |

**Returns:** [HyperCube](_class_hyper_cube_class_.hypercube.md)

___
<a id="getlayout"></a>

###  getLayout

▸ **getLayout**(): `void`

*Defined in [class/hyper-cube.class.ts:66](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/hyper-cube.class.ts#L66)*

**Returns:** `void`

___
<a id="onmessagecubecreated"></a>

###  onMessageCubeCreated

▸ **onMessageCubeCreated**(m: *`any`*): `void`

*Defined in [class/hyper-cube.class.ts:78](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/hyper-cube.class.ts#L78)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| m | `any` |

**Returns:** `void`

___
<a id="onmessagelayout"></a>

###  onMessageLayout

▸ **onMessageLayout**(m: *`any`*): `void`

*Defined in [class/hyper-cube.class.ts:88](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/hyper-cube.class.ts#L88)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| m | `any` |

**Returns:** `void`

___
<a id="select"></a>

###  select

▸ **select**(dimensionIndex: *`number`*, rowIndex: *`number`*): [HyperCube](_class_hyper_cube_class_.hypercube.md)

*Defined in [class/hyper-cube.class.ts:138](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/hyper-cube.class.ts#L138)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| dimensionIndex | `number` |
| rowIndex | `number` |

**Returns:** [HyperCube](_class_hyper_cube_class_.hypercube.md)

___
<a id="setdefinitionid"></a>

### `<Private>` setDefinitionId

▸ **setDefinitionId**(n: *`number`*): `void`

*Defined in [class/hyper-cube.class.ts:164](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/hyper-cube.class.ts#L164)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| n | `number` |

**Returns:** `void`

___
<a id="seteffectivecolumnsorter"></a>

###  setEffectiveColumnSorter

▸ **setEffectiveColumnSorter**(arr: *`Array`<`number`>*): [HyperCube](_class_hyper_cube_class_.hypercube.md)

*Defined in [class/hyper-cube.class.ts:103](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/hyper-cube.class.ts#L103)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| arr | `Array`<`number`> |

**Returns:** [HyperCube](_class_hyper_cube_class_.hypercube.md)

___
<a id="sethandle"></a>

### `<Private>` setHandle

▸ **setHandle**(h: *`number`*): `void`

*Defined in [class/hyper-cube.class.ts:160](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/hyper-cube.class.ts#L160)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| h | `number` |

**Returns:** `void`

___
<a id="setinitialdatafetch"></a>

###  setInitialDataFetch

▸ **setInitialDataFetch**(height: *`number`*, width: *`number`*): [HyperCube](_class_hyper_cube_class_.hypercube.md)

*Defined in [class/hyper-cube.class.ts:118](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/hyper-cube.class.ts#L118)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| height | `number` |
| width | `number` |

**Returns:** [HyperCube](_class_hyper_cube_class_.hypercube.md)

___
<a id="setstatename"></a>

###  setStateName

▸ **setStateName**(s: *`string`*): [HyperCube](_class_hyper_cube_class_.hypercube.md)

*Defined in [class/hyper-cube.class.ts:113](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/hyper-cube.class.ts#L113)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| s | `string` |

**Returns:** [HyperCube](_class_hyper_cube_class_.hypercube.md)

___
<a id="setsuppressmissing"></a>

###  setSuppressMissing

▸ **setSuppressMissing**(b: *`boolean`*): [HyperCube](_class_hyper_cube_class_.hypercube.md)

*Defined in [class/hyper-cube.class.ts:108](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/hyper-cube.class.ts#L108)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| b | `boolean` |

**Returns:** [HyperCube](_class_hyper_cube_class_.hypercube.md)

___
<a id="setsuppresszero"></a>

###  setSuppressZero

▸ **setSuppressZero**(b: *`boolean`*): [HyperCube](_class_hyper_cube_class_.hypercube.md)

*Defined in [class/hyper-cube.class.ts:98](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/hyper-cube.class.ts#L98)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| b | `boolean` |

**Returns:** [HyperCube](_class_hyper_cube_class_.hypercube.md)

___
<a id="subscribe"></a>

###  subscribe

▸ **subscribe**(cb: *`any`*): [HyperCube](_class_hyper_cube_class_.hypercube.md)

*Defined in [class/hyper-cube.class.ts:50](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/hyper-cube.class.ts#L50)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cb | `any` |

**Returns:** [HyperCube](_class_hyper_cube_class_.hypercube.md)

___
<a id="unsubscribe"></a>

###  unsubscribe

▸ **unsubscribe**(): `void`

*Defined in [class/hyper-cube.class.ts:60](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/hyper-cube.class.ts#L60)*

**Returns:** `void`

___

## Object literals

<a id="definition"></a>

###  definition

**definition**: *`object`*

*Defined in [class/hyper-cube.class.ts:7](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/hyper-cube.class.ts#L7)*

<a id="definition.handle"></a>

####  handle

**● handle**: *`null`* =  null

*Defined in [class/hyper-cube.class.ts:11](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/hyper-cube.class.ts#L11)*

___
<a id="definition.id"></a>

####  id

**● id**: *`null`* =  null

*Defined in [class/hyper-cube.class.ts:9](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/hyper-cube.class.ts#L9)*

___
<a id="definition.jsonrpc"></a>

####  jsonrpc

**● jsonrpc**: *`string`* = "2.0"

*Defined in [class/hyper-cube.class.ts:8](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/hyper-cube.class.ts#L8)*

___
<a id="definition.method"></a>

####  method

**● method**: *`string`* = "CreateSessionObject"

*Defined in [class/hyper-cube.class.ts:10](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/hyper-cube.class.ts#L10)*

___
<a id="definition.params"></a>

####  params

**● params**: *`object`[]* =  [
            {
                'qInfo': {
                    'qType': 'Chart'
                },
                'qHyperCubeDef': {
                    'qInitialDataFetch': [
                        {
                            'qHeight': 2000,
                            'qWidth': 1
                        }
                    ],
                    'qDimensions': [],
                    'qMeasures': [],
                    'qSuppressZero': false,
                    'qSuppressMissing': false,
                    'qMode': 'S',
                    'qInterColumnSortOrder': [],
                    'qStateName': '$'
                }
            }
        ]

*Defined in [class/hyper-cube.class.ts:12](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/class/hyper-cube.class.ts#L12)*

___

___

