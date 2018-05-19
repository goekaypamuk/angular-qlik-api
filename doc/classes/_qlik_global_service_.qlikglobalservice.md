[angular-qlik-api](../README.md) > ["qlik-global.service"](../modules/_qlik_global_service_.md) > [QlikGlobalService](../classes/_qlik_global_service_.qlikglobalservice.md)

# Class: QlikGlobalService

## Hierarchy

**QlikGlobalService**

## Index

### Constructors

* [constructor](_qlik_global_service_.qlikglobalservice.md#constructor)

### Properties

* [docList](_qlik_global_service_.qlikglobalservice.md#doclist)
* [enumerator](_qlik_global_service_.qlikglobalservice.md#enumerator)
* [qlikConfig](_qlik_global_service_.qlikglobalservice.md#qlikconfig)
* [ws](_qlik_global_service_.qlikglobalservice.md#ws)
* [wsPromise](_qlik_global_service_.qlikglobalservice.md#wspromise)
* [wsQue](_qlik_global_service_.qlikglobalservice.md#wsque)

### Methods

* [CopyApp](_qlik_global_service_.qlikglobalservice.md#copyapp)
* [abortAll](_qlik_global_service_.qlikglobalservice.md#abortall)
* [allowCreateApp](_qlik_global_service_.qlikglobalservice.md#allowcreateapp)
* [cancelReload](_qlik_global_service_.qlikglobalservice.md#cancelreload)
* [cancelRequest](_qlik_global_service_.qlikglobalservice.md#cancelrequest)
* [configureReload](_qlik_global_service_.qlikglobalservice.md#configurereload)
* [createApp](_qlik_global_service_.qlikglobalservice.md#createapp)
* [createDocEx](_qlik_global_service_.qlikglobalservice.md#createdocex)
* [createSessionApp](_qlik_global_service_.qlikglobalservice.md#createsessionapp)
* [createSessionAppFromApp](_qlik_global_service_.qlikglobalservice.md#createsessionappfromapp)
* [deleteApp](_qlik_global_service_.qlikglobalservice.md#deleteapp)
* [engineVersion](_qlik_global_service_.qlikglobalservice.md#engineversion)
* [exportApp](_qlik_global_service_.qlikglobalservice.md#exportapp)
* [getActiveDoc](_qlik_global_service_.qlikglobalservice.md#getactivedoc)
* [getAppEntry](_qlik_global_service_.qlikglobalservice.md#getappentry)
* [getAuthenticatedUser](_qlik_global_service_.qlikglobalservice.md#getauthenticateduser)
* [getBNF](_qlik_global_service_.qlikglobalservice.md#getbnf)
* [getBaseBNF](_qlik_global_service_.qlikglobalservice.md#getbasebnf)
* [getBaseBNFHash](_qlik_global_service_.qlikglobalservice.md#getbasebnfhash)
* [getCustomConnectors](_qlik_global_service_.qlikglobalservice.md#getcustomconnectors)
* [getDatabasesFromConnectionString](_qlik_global_service_.qlikglobalservice.md#getdatabasesfromconnectionstring)
* [getDefaultAppFolder](_qlik_global_service_.qlikglobalservice.md#getdefaultappfolder)
* [getDocList](_qlik_global_service_.qlikglobalservice.md#getdoclist)
* [getFolderItemsForPath](_qlik_global_service_.qlikglobalservice.md#getfolderitemsforpath)
* [getFunctions](_qlik_global_service_.qlikglobalservice.md#getfunctions)
* [getInteract](_qlik_global_service_.qlikglobalservice.md#getinteract)
* [getLogicalDriveStrings](_qlik_global_service_.qlikglobalservice.md#getlogicaldrivestrings)
* [getNextEnumerator](_qlik_global_service_.qlikglobalservice.md#getnextenumerator)
* [getOdbcDsns](_qlik_global_service_.qlikglobalservice.md#getodbcdsns)
* [getOleDbProviders](_qlik_global_service_.qlikglobalservice.md#getoledbproviders)
* [getProgress](_qlik_global_service_.qlikglobalservice.md#getprogress)
* [getSupportedCodePages](_qlik_global_service_.qlikglobalservice.md#getsupportedcodepages)
* [getUniqueID](_qlik_global_service_.qlikglobalservice.md#getuniqueid)
* [interactDone](_qlik_global_service_.qlikglobalservice.md#interactdone)
* [isDesktopMode](_qlik_global_service_.qlikglobalservice.md#isdesktopmode)
* [isPersonalMode](_qlik_global_service_.qlikglobalservice.md#ispersonalmode)
* [isValidConnectionString](_qlik_global_service_.qlikglobalservice.md#isvalidconnectionstring)
* [oSName](_qlik_global_service_.qlikglobalservice.md#osname)
* [oSVersion](_qlik_global_service_.qlikglobalservice.md#osversion)
* [openDoc](_qlik_global_service_.qlikglobalservice.md#opendoc)
* [productVersion](_qlik_global_service_.qlikglobalservice.md#productversion)
* [qTProduct](_qlik_global_service_.qlikglobalservice.md#qtproduct)
* [qvVersion](_qlik_global_service_.qlikglobalservice.md#qvversion)
* [reloadExtensionList](_qlik_global_service_.qlikglobalservice.md#reloadextensionlist)
* [replaceAppFromID](_qlik_global_service_.qlikglobalservice.md#replaceappfromid)
* [shutdownProcess](_qlik_global_service_.qlikglobalservice.md#shutdownprocess)
* [wsSend](_qlik_global_service_.qlikglobalservice.md#wssend)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new QlikGlobalService**(qlikConfig: *[QlikConfig](_class_qlik_config_class_.qlikconfig.md)*): [QlikGlobalService](_qlik_global_service_.qlikglobalservice.md)

*Defined in [qlik-global.service.ts:16](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L16)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| qlikConfig | [QlikConfig](_class_qlik_config_class_.qlikconfig.md) |

**Returns:** [QlikGlobalService](_qlik_global_service_.qlikglobalservice.md)

___

## Properties

<a id="doclist"></a>

### `<Private>` docList

**● docList**: *`any`*

*Defined in [qlik-global.service.ts:15](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L15)*

___
<a id="enumerator"></a>

### `<Private>` enumerator

**● enumerator**: *`number`* = 0

*Defined in [qlik-global.service.ts:12](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L12)*

___
<a id="qlikconfig"></a>

### `<Private>` qlikConfig

**● qlikConfig**: *[QlikConfig](_class_qlik_config_class_.qlikconfig.md)*

*Defined in [qlik-global.service.ts:18](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L18)*

___
<a id="ws"></a>

### `<Private>` ws

**● ws**: *`WebSocket`*

*Defined in [qlik-global.service.ts:13](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L13)*

___
<a id="wspromise"></a>

### `<Private>` wsPromise

**● wsPromise**: *[Deferred](_class_deferred_class_.deferred.md)<`any`>*

*Defined in [qlik-global.service.ts:14](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L14)*

___
<a id="wsque"></a>

### `<Private>` wsQue

**● wsQue**: *`any`*

*Defined in [qlik-global.service.ts:16](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L16)*

___

## Methods

<a id="copyapp"></a>

###  CopyApp

▸ **CopyApp**(qTargetAppId: *`string`*, qSrcAppId: *`string`*, qIds: *`Array`<`string`>*): `Promise`<`any`>

*Defined in [qlik-global.service.ts:126](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L126)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| qTargetAppId | `string` |
| qSrcAppId | `string` |
| qIds | `Array`<`string`> |

**Returns:** `Promise`<`any`>

___
<a id="abortall"></a>

###  abortAll

▸ **abortAll**(): `Promise`<`any`>

*Defined in [qlik-global.service.ts:54](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L54)*

Global Class Method implementation

**Returns:** `Promise`<`any`>

___
<a id="allowcreateapp"></a>

###  allowCreateApp

▸ **allowCreateApp**(): `Promise`<`any`>

*Defined in [qlik-global.service.ts:68](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L68)*

**Returns:** `Promise`<`any`>

___
<a id="cancelreload"></a>

###  cancelReload

▸ **cancelReload**(): `Promise`<`any`>

*Defined in [qlik-global.service.ts:82](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L82)*

**Returns:** `Promise`<`any`>

___
<a id="cancelrequest"></a>

###  cancelRequest

▸ **cancelRequest**(qRequestId: *`number`*): `Promise`<`any`>

*Defined in [qlik-global.service.ts:96](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L96)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| qRequestId | `number` |

**Returns:** `Promise`<`any`>

___
<a id="configurereload"></a>

###  configureReload

▸ **configureReload**(qCancelOnScriptError: *`boolean`*, qUseErrorData: *`boolean`*, qInteractOnError: *`boolean`*): `Promise`<`any`>

*Defined in [qlik-global.service.ts:112](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L112)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| qCancelOnScriptError | `boolean` |
| qUseErrorData | `boolean` |
| qInteractOnError | `boolean` |

**Returns:** `Promise`<`any`>

___
<a id="createapp"></a>

###  createApp

▸ **createApp**(qAppName: *`string`*, qLocalizedScriptMainSection?: *`string`*): `Promise`<`any`>

*Defined in [qlik-global.service.ts:144](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L144)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| qAppName | `string` |
| `Optional` qLocalizedScriptMainSection | `string` |

**Returns:** `Promise`<`any`>

___
<a id="createdocex"></a>

###  createDocEx

▸ **createDocEx**(qDocName: *`string`*, qUserName?: *`string`*, qPassword?: *`string`*, qSerial?: *`string`*, qLocalizedScriptMainSection?: *`string`*): `Promise`<`any`>

*Defined in [qlik-global.service.ts:161](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L161)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| qDocName | `string` |
| `Optional` qUserName | `string` |
| `Optional` qPassword | `string` |
| `Optional` qSerial | `string` |
| `Optional` qLocalizedScriptMainSection | `string` |

**Returns:** `Promise`<`any`>

___
<a id="createsessionapp"></a>

###  createSessionApp

▸ **createSessionApp**(): `Promise`<`any`>

*Defined in [qlik-global.service.ts:185](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L185)*

**Returns:** `Promise`<`any`>

___
<a id="createsessionappfromapp"></a>

###  createSessionAppFromApp

▸ **createSessionAppFromApp**(qSrcAppId: *`string`*): `Promise`<`any`>

*Defined in [qlik-global.service.ts:200](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L200)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| qSrcAppId | `string` |

**Returns:** `Promise`<`any`>

___
<a id="deleteapp"></a>

###  deleteApp

▸ **deleteApp**(qAppId: *`string`*): `Promise`<`any`>

*Defined in [qlik-global.service.ts:216](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L216)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| qAppId | `string` |

**Returns:** `Promise`<`any`>

___
<a id="engineversion"></a>

###  engineVersion

▸ **engineVersion**(): `Promise`<`any`>

*Defined in [qlik-global.service.ts:232](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L232)*

**Returns:** `Promise`<`any`>

___
<a id="exportapp"></a>

###  exportApp

▸ **exportApp**(qTargetPath: *`string`*, qSrcAppId: *`string`*, qIds: *`Array`<`string`>*): `Promise`<`any`>

*Defined in [qlik-global.service.ts:247](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L247)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| qTargetPath | `string` |
| qSrcAppId | `string` |
| qIds | `Array`<`string`> |

**Returns:** `Promise`<`any`>

___
<a id="getactivedoc"></a>

###  getActiveDoc

▸ **getActiveDoc**(): `Promise`<`any`>

*Defined in [qlik-global.service.ts:267](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L267)*

**Returns:** `Promise`<`any`>

___
<a id="getappentry"></a>

###  getAppEntry

▸ **getAppEntry**(qAppID: *`string`*): `Promise`<`any`>

*Defined in [qlik-global.service.ts:282](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L282)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| qAppID | `string` |

**Returns:** `Promise`<`any`>

___
<a id="getauthenticateduser"></a>

###  getAuthenticatedUser

▸ **getAuthenticatedUser**(qAppID: *`string`*): `Promise`<`any`>

*Defined in [qlik-global.service.ts:298](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L298)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| qAppID | `string` |

**Returns:** `Promise`<`any`>

___
<a id="getbnf"></a>

###  getBNF

▸ **getBNF**(qBnfType: *[QBnfType](../enums/_enum_q_bnf_type_enum_.qbnftype.md)*): `Promise`<`any`>

*Defined in [qlik-global.service.ts:344](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L344)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| qBnfType | [QBnfType](../enums/_enum_q_bnf_type_enum_.qbnftype.md) |

**Returns:** `Promise`<`any`>

___
<a id="getbasebnf"></a>

###  getBaseBNF

▸ **getBaseBNF**(qBnfType: *[QBnfType](../enums/_enum_q_bnf_type_enum_.qbnftype.md)*): `Promise`<`any`>

*Defined in [qlik-global.service.ts:312](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L312)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| qBnfType | [QBnfType](../enums/_enum_q_bnf_type_enum_.qbnftype.md) |

**Returns:** `Promise`<`any`>

___
<a id="getbasebnfhash"></a>

###  getBaseBNFHash

▸ **getBaseBNFHash**(qBnfType: *[QBnfType](../enums/_enum_q_bnf_type_enum_.qbnftype.md)*): `Promise`<`any`>

*Defined in [qlik-global.service.ts:328](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L328)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| qBnfType | [QBnfType](../enums/_enum_q_bnf_type_enum_.qbnftype.md) |

**Returns:** `Promise`<`any`>

___
<a id="getcustomconnectors"></a>

###  getCustomConnectors

▸ **getCustomConnectors**(qReloadList: *`boolean`*): `Promise`<`any`>

*Defined in [qlik-global.service.ts:361](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L361)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| qReloadList | `boolean` |

**Returns:** `Promise`<`any`>

___
<a id="getdatabasesfromconnectionstring"></a>

###  getDatabasesFromConnectionString

▸ **getDatabasesFromConnectionString**(qConnection: *[Connection](_class_connection_class_.connection.md)*): `Promise`<`any`>

*Defined in [qlik-global.service.ts:377](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L377)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| qConnection | [Connection](_class_connection_class_.connection.md) |

**Returns:** `Promise`<`any`>

___
<a id="getdefaultappfolder"></a>

###  getDefaultAppFolder

▸ **getDefaultAppFolder**(): `Promise`<`any`>

*Defined in [qlik-global.service.ts:393](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L393)*

**Returns:** `Promise`<`any`>

___
<a id="getdoclist"></a>

###  getDocList

▸ **getDocList**(): `Promise`<`any`>

*Defined in [qlik-global.service.ts:408](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L408)*

**Returns:** `Promise`<`any`>

___
<a id="getfolderitemsforpath"></a>

###  getFolderItemsForPath

▸ **getFolderItemsForPath**(qPath: *`string`*): `Promise`<`any`>

*Defined in [qlik-global.service.ts:422](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L422)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| qPath | `string` |

**Returns:** `Promise`<`any`>

___
<a id="getfunctions"></a>

###  getFunctions

▸ **getFunctions**(qGroup?: *[QGroup](../enums/_enum_q_group_enum_.qgroup.md)*): `Promise`<`any`>

*Defined in [qlik-global.service.ts:438](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L438)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` qGroup | [QGroup](../enums/_enum_q_group_enum_.qgroup.md) |

**Returns:** `Promise`<`any`>

___
<a id="getinteract"></a>

###  getInteract

▸ **getInteract**(qRequestId: *`number`*): `Promise`<`any`>

*Defined in [qlik-global.service.ts:454](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L454)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| qRequestId | `number` |

**Returns:** `Promise`<`any`>

___
<a id="getlogicaldrivestrings"></a>

###  getLogicalDriveStrings

▸ **getLogicalDriveStrings**(): `Promise`<`any`>

*Defined in [qlik-global.service.ts:470](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L470)*

**Returns:** `Promise`<`any`>

___
<a id="getnextenumerator"></a>

###  getNextEnumerator

▸ **getNextEnumerator**(): `number`

*Defined in [qlik-global.service.ts:46](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L46)*

**Returns:** `number`

___
<a id="getodbcdsns"></a>

###  getOdbcDsns

▸ **getOdbcDsns**(): `Promise`<`any`>

*Defined in [qlik-global.service.ts:484](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L484)*

**Returns:** `Promise`<`any`>

___
<a id="getoledbproviders"></a>

###  getOleDbProviders

▸ **getOleDbProviders**(): `Promise`<`any`>

*Defined in [qlik-global.service.ts:498](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L498)*

**Returns:** `Promise`<`any`>

___
<a id="getprogress"></a>

###  getProgress

▸ **getProgress**(qRequestId: *`number`*): `Promise`<`any`>

*Defined in [qlik-global.service.ts:512](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L512)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| qRequestId | `number` |

**Returns:** `Promise`<`any`>

___
<a id="getsupportedcodepages"></a>

###  getSupportedCodePages

▸ **getSupportedCodePages**(): `Promise`<`any`>

*Defined in [qlik-global.service.ts:528](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L528)*

**Returns:** `Promise`<`any`>

___
<a id="getuniqueid"></a>

###  getUniqueID

▸ **getUniqueID**(): `Promise`<`any`>

*Defined in [qlik-global.service.ts:542](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L542)*

**Returns:** `Promise`<`any`>

___
<a id="interactdone"></a>

###  interactDone

▸ **interactDone**(qRequestId: *`number`*, qResult: *`number`*): `Promise`<`any`>

*Defined in [qlik-global.service.ts:556](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L556)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| qRequestId | `number` |
| qResult | `number` |

**Returns:** `Promise`<`any`>

___
<a id="isdesktopmode"></a>

###  isDesktopMode

▸ **isDesktopMode**(): `Promise`<`any`>

*Defined in [qlik-global.service.ts:574](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L574)*

**Returns:** `Promise`<`any`>

___
<a id="ispersonalmode"></a>

###  isPersonalMode

▸ **isPersonalMode**(): `Promise`<`any`>

*Defined in [qlik-global.service.ts:588](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L588)*

**Returns:** `Promise`<`any`>

___
<a id="isvalidconnectionstring"></a>

###  isValidConnectionString

▸ **isValidConnectionString**(qConnection: *[Connection](_class_connection_class_.connection.md)*): `Promise`<`any`>

*Defined in [qlik-global.service.ts:602](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L602)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| qConnection | [Connection](_class_connection_class_.connection.md) |

**Returns:** `Promise`<`any`>

___
<a id="osname"></a>

###  oSName

▸ **oSName**(): `Promise`<`any`>

*Defined in [qlik-global.service.ts:625](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L625)*

**Returns:** `Promise`<`any`>

___
<a id="osversion"></a>

###  oSVersion

▸ **oSVersion**(): `Promise`<`any`>

*Defined in [qlik-global.service.ts:639](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L639)*

**Returns:** `Promise`<`any`>

___
<a id="opendoc"></a>

###  openDoc

▸ **openDoc**(id: *`string`*): [Document](_class_document_class_.document.md)

*Defined in [qlik-global.service.ts:618](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L618)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `string` |

**Returns:** [Document](_class_document_class_.document.md)

___
<a id="productversion"></a>

###  productVersion

▸ **productVersion**(): `Promise`<`any`>

*Defined in [qlik-global.service.ts:653](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L653)*

**Returns:** `Promise`<`any`>

___
<a id="qtproduct"></a>

###  qTProduct

▸ **qTProduct**(): `Promise`<`any`>

*Defined in [qlik-global.service.ts:667](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L667)*

**Returns:** `Promise`<`any`>

___
<a id="qvversion"></a>

###  qvVersion

▸ **qvVersion**(): `Promise`<`any`>

*Defined in [qlik-global.service.ts:681](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L681)*

**Returns:** `Promise`<`any`>

___
<a id="reloadextensionlist"></a>

###  reloadExtensionList

▸ **reloadExtensionList**(): `Promise`<`any`>

*Defined in [qlik-global.service.ts:695](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L695)*

**Returns:** `Promise`<`any`>

___
<a id="replaceappfromid"></a>

###  replaceAppFromID

▸ **replaceAppFromID**(qTargetAppId: *`string`*, qSrcAppID: *`string`*, qIds?: *`Array`<`string`>*): `Promise`<`any`>

*Defined in [qlik-global.service.ts:709](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L709)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| qTargetAppId | `string` |
| qSrcAppID | `string` |
| `Optional` qIds | `Array`<`string`> |

**Returns:** `Promise`<`any`>

___
<a id="shutdownprocess"></a>

###  shutdownProcess

▸ **shutdownProcess**(): `Promise`<`any`>

*Defined in [qlik-global.service.ts:727](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L727)*

**Returns:** `Promise`<`any`>

___
<a id="wssend"></a>

###  wsSend

▸ **wsSend**(obj: *`any`*, callback: *`Array`<`Function`>*): `void`

*Defined in [qlik-global.service.ts:39](https://github.com/goekaypamuk/angular-qlik-api/blob/be30617/src/qlik-global.service.ts#L39)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| obj | `any` |
| callback | `Array`<`Function`> |

**Returns:** `void`

___

