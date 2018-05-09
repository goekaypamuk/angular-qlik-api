# QlikGlobalService

This services has all the methods that apply at global level.

You can find full detail of all global methods on [Qlik Help Website](https://help.qlik.com/en-US/sense-developer/April2018/apis/EngineAPI/index.html)

## Example

All methods on GlobalService except _openDoc_ will return a promise when method call is resolved. The _openDoc_ method will return a _Document_ class, enabling from there on to invoke methods on _Document_ level. 

```typescript
import {QlikGlobalService} from 'angular-qlik-api';

@Component({
  selector: 'app-root'
})
export class MyApp  {

  myDoc: Document;
  constructor(qlikGlobal: QlikGlobalService ) {
      
        // Opens and returns a Document Class. 
        this.myDoc = qlikGlobal.openDoc('sales discovery.qvf');
    
        // Get engine version
        qlikGlobal.engineVersion().then( message => {
          console.log(message);
        });
    
        // get document list
        qlikGlobal.getDocList().then( message => {
          console.log(message);
        });
    
        // create a new app with the name <my new  app>
        qlikGlobal.createApp('my new app').then( message => {
          console.log(message);
        });
  }
}
```

### File

`src/qlik-global.service.ts`

### Constructor

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><code>constructor(qlikConfig: QlikConfig)</code></td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:16</a>
            </div>
        </td>
    </tr>
    <tr class="odd">
        <td>
            <div>
                <strong>Parameters :</strong>
                Name
                Type
                Optional
                qlikConfig
                <code>QlikConfig</code>
                no
            </div>
        </td>
    </tr>
    </tbody>
</table>

### Methods

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="abortAll"></span> <span class="name"> <strong>abortAll</strong> <a href="#abortAll"><span
                class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>abortAll()</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:54</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <p>Global Class Method implementation</p>
            </div>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="allowCreateApp"></span> <span class="name"> <strong>allowCreateApp</strong> <a
                href="#allowCreateApp"><span class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>allowCreateApp()</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:68</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="cancelReload"></span> <span class="name"> <strong>cancelReload</strong> <a
                href="#cancelReload"><span class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>cancelReload()</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:82</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="cancelRequest"></span> <span class="name"> <strong>cancelRequest</strong> <a
                href="#cancelRequest"><span class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>cancelRequest(qRequestId: number)</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:96</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Parameters :</strong>
                Name
                Type
                Optional
                qRequestId
                <code>number</code>
                no
            </div>
            <div>

            </div>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
            <div class="io-description">

            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="configureReload"></span> <span class="name"> <strong>configureReload</strong> <a
                href="#configureReload"><span class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>configureReload(qCancelOnScriptError: boolean, qUseErrorData: boolean, qInteractOnError:
            boolean)</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:112</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Parameters :</strong>
                Name
                Type
                Optional
                qCancelOnScriptError
                <code>boolean</code>
                no
                qUseErrorData
                <code>boolean</code>
                no
                qInteractOnError
                <code>boolean</code>
                no
            </div>
            <div>

            </div>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
            <div class="io-description">

            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="CopyApp"></span> <span class="name"> <strong>CopyApp</strong> <a href="#CopyApp"><span
                class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>CopyApp(qTargetAppId: string, qSrcAppId: string, qIds: Array)</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:126</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Parameters :</strong>
                Name
                Type
                Optional
                qTargetAppId
                <code>string</code>
                no
                qSrcAppId
                <code>string</code>
                no
                qIds
                <code>Array&lt;string&gt;</code>
                no
            </div>
            <div>

            </div>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
            <div class="io-description">

            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="createApp"></span> <span class="name"> <strong>createApp</strong> <a href="#createApp"><span
                class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>createApp(qAppName: string, qLocalizedScriptMainSection?: string)</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:144</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Parameters :</strong>
                Name
                Type
                Optional
                qAppName
                <code>string</code>
                no
                qLocalizedScriptMainSection
                <code>string</code>
                yes
            </div>
            <div>

            </div>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
            <div class="io-description">

            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="createDocEx"></span> <span class="name"> <strong>createDocEx</strong> <a href="#createDocEx"><span
                class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>createDocEx(qDocName: string, qUserName?: string, qPassword?: string, qSerial?: string,
            qLocalizedScriptMainSection?: string)</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:161</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Parameters :</strong>
                Name
                Type
                Optional
                qDocName
                <code>string</code>
                no
                qUserName
                <code>string</code>
                yes
                qPassword
                <code>string</code>
                yes
                qSerial
                <code>string</code>
                yes
                qLocalizedScriptMainSection
                <code>string</code>
                yes
            </div>
            <div>

            </div>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
            <div class="io-description">

            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="createSessionApp"></span> <span class="name"> <strong>createSessionApp</strong> <a
                href="#createSessionApp"><span class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>createSessionApp()</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:185</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="createSessionAppFromApp"></span> <span class="name"> <strong>createSessionAppFromApp</strong> <a
                href="#createSessionAppFromApp"><span class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>createSessionAppFromApp(qSrcAppId: string)</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:200</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Parameters :</strong>
                Name
                Type
                Optional
                qSrcAppId
                <code>string</code>
                no
            </div>
            <div>

            </div>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
            <div class="io-description">

            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="deleteApp"></span> <span class="name"> <strong>deleteApp</strong> <a href="#deleteApp"><span
                class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>deleteApp(qAppId: string)</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:216</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Parameters :</strong>
                Name
                Type
                Optional
                qAppId
                <code>string</code>
                no
            </div>
            <div>

            </div>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
            <div class="io-description">

            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="engineVersion"></span> <span class="name"> <strong>engineVersion</strong> <a
                href="#engineVersion"><span class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>engineVersion()</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:232</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="exportApp"></span> <span class="name"> <strong>exportApp</strong> <a href="#exportApp"><span
                class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>exportApp(qTargetPath: string, qSrcAppId: string, qIds: Array)</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:247</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Parameters :</strong>
                Name
                Type
                Optional
                qTargetPath
                <code>string</code>
                no
                qSrcAppId
                <code>string</code>
                no
                qIds
                <code>Array&lt;string&gt;</code>
                no
            </div>
            <div>

            </div>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
            <div class="io-description">

            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="getActiveDoc"></span> <span class="name"> <strong>getActiveDoc</strong> <a
                href="#getActiveDoc"><span class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>getActiveDoc()</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:267</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="getAppEntry"></span> <span class="name"> <strong>getAppEntry</strong> <a href="#getAppEntry"><span
                class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>getAppEntry(qAppID: string)</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:282</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Parameters :</strong>
                Name
                Type
                Optional
                qAppID
                <code>string</code>
                no
            </div>
            <div>

            </div>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
            <div class="io-description">

            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="getAuthenticatedUser"></span> <span class="name"> <strong>getAuthenticatedUser</strong> <a
                href="#getAuthenticatedUser"><span class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>getAuthenticatedUser(qAppID: string)</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:298</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Parameters :</strong>
                Name
                Type
                Optional
                qAppID
                <code>string</code>
                no
            </div>
            <div>

            </div>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
            <div class="io-description">

            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="getBaseBNF"></span> <span class="name"> <strong>getBaseBNF</strong> <a href="#getBaseBNF"><span
                class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>getBaseBNF(qBnfType: QBnfType)</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:312</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Parameters :</strong>
                Name
                Type
                Optional
                qBnfType
                <code>QBnfType</code>
                no
            </div>
            <div>

            </div>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
            <div class="io-description">

            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="getBaseBNFHash"></span> <span class="name"> <strong>getBaseBNFHash</strong> <a
                href="#getBaseBNFHash"><span class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>getBaseBNFHash(qBnfType: QBnfType)</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:328</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Parameters :</strong>
                Name
                Type
                Optional
                qBnfType
                <code>QBnfType</code>
                no
            </div>
            <div>

            </div>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
            <div class="io-description">

            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="getBNF"></span> <span class="name"> <strong>getBNF</strong> <a href="#getBNF"><span
                class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>getBNF(qBnfType: QBnfType)</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:344</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Parameters :</strong>
                Name
                Type
                Optional
                qBnfType
                <code>QBnfType</code>
                no
            </div>
            <div>

            </div>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
            <div class="io-description">

            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="getCustomConnectors"></span> <span class="name"> <strong>getCustomConnectors</strong> <a
                href="#getCustomConnectors"><span class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>getCustomConnectors(qReloadList: boolean)</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:361</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Parameters :</strong>
                Name
                Type
                Optional
                qReloadList
                <code>boolean</code>
                no
            </div>
            <div>

            </div>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
            <div class="io-description">

            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="getDatabasesFromConnectionString"></span> <span class="name"> <strong>getDatabasesFromConnectionString</strong> <a
                href="#getDatabasesFromConnectionString"><span class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>getDatabasesFromConnectionString(qConnection: Connection)</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:377</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Parameters :</strong>
                Name
                Type
                Optional
                qConnection
                <code>Connection</code>
                no
            </div>
            <div>

            </div>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
            <div class="io-description">

            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="getDefaultAppFolder"></span> <span class="name"> <strong>getDefaultAppFolder</strong> <a
                href="#getDefaultAppFolder"><span class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>getDefaultAppFolder()</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:393</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="getDocList"></span> <span class="name"> <strong>getDocList</strong> <a href="#getDocList"><span
                class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>getDocList()</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:408</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="getFolderItemsForPath"></span> <span class="name"> <strong>getFolderItemsForPath</strong> <a
                href="#getFolderItemsForPath"><span class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>getFolderItemsForPath(qPath: string)</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:422</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Parameters :</strong>
                Name
                Type
                Optional
                qPath
                <code>string</code>
                no
            </div>
            <div>

            </div>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
            <div class="io-description">

            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="getFunctions"></span> <span class="name"> <strong>getFunctions</strong> <a
                href="#getFunctions"><span class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>getFunctions(qGroup?: QGroup)</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:438</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Parameters :</strong>
                Name
                Type
                Optional
                qGroup
                <code>QGroup</code>
                yes
            </div>
            <div>

            </div>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
            <div class="io-description">

            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="getInteract"></span> <span class="name"> <strong>getInteract</strong> <a href="#getInteract"><span
                class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>getInteract(qRequestId: number)</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:454</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Parameters :</strong>
                Name
                Type
                Optional
                qRequestId
                <code>number</code>
                no
            </div>
            <div>

            </div>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
            <div class="io-description">

            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="getLogicalDriveStrings"></span> <span class="name"> <strong>getLogicalDriveStrings</strong> <a
                href="#getLogicalDriveStrings"><span class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>getLogicalDriveStrings()</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:470</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="getNextEnumerator"></span> <span class="name"> <strong>getNextEnumerator</strong> <a
                href="#getNextEnumerator"><span class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>getNextEnumerator()</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:46</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Returns :</strong> <code>number</code>
            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="getOdbcDsns"></span> <span class="name"> <strong>getOdbcDsns</strong> <a href="#getOdbcDsns"><span
                class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>getOdbcDsns()</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:484</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="getOleDbProviders"></span> <span class="name"> <strong>getOleDbProviders</strong> <a
                href="#getOleDbProviders"><span class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>getOleDbProviders()</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:498</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="getProgress"></span> <span class="name"> <strong>getProgress</strong> <a href="#getProgress"><span
                class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>getProgress(qRequestId: number)</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:512</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Parameters :</strong>
                Name
                Type
                Optional
                qRequestId
                <code>number</code>
                no
            </div>
            <div>

            </div>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
            <div class="io-description">

            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="getSupportedCodePages"></span> <span class="name"> <strong>getSupportedCodePages</strong> <a
                href="#getSupportedCodePages"><span class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>getSupportedCodePages()</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:528</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="getUniqueID"></span> <span class="name"> <strong>getUniqueID</strong> <a href="#getUniqueID"><span
                class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>getUniqueID()</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:542</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="interactDone"></span> <span class="name"> <strong>interactDone</strong> <a
                href="#interactDone"><span class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>interactDone(qRequestId: number, qResult: number)</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:556</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Parameters :</strong>
                Name
                Type
                Optional
                qRequestId
                <code>number</code>
                no
                qResult
                <code>number</code>
                no
            </div>
            <div>

            </div>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
            <div class="io-description">

            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="isDesktopMode"></span> <span class="name"> <strong>isDesktopMode</strong> <a
                href="#isDesktopMode"><span class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>isDesktopMode()</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:574</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="isPersonalMode"></span> <span class="name"> <strong>isPersonalMode</strong> <a
                href="#isPersonalMode"><span class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>isPersonalMode()</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:588</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="isValidConnectionString"></span> <span class="name"> <strong>isValidConnectionString</strong> <a
                href="#isValidConnectionString"><span class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>isValidConnectionString(qConnection: Connection)</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:602</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Parameters :</strong>
                Name
                Type
                Optional
                qConnection
                <code>Connection</code>
                no
            </div>
            <div>

            </div>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
            <div class="io-description">

            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="openDoc"></span> <span class="name"> <strong>openDoc</strong> <a href="#openDoc"><span
                class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>openDoc(id: string)</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:618</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Parameters :</strong>
                Name
                Type
                Optional
                id
                <code>string</code>
                no
            </div>
            <div>

            </div>
            <div class="io-description">
                <strong>Returns :</strong> <code>Document</code>
            </div>
            <div class="io-description">

            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="oSName"></span> <span class="name"> <strong>oSName</strong> <a href="#oSName"><span
                class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>oSName()</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:625</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="oSVersion"></span> <span class="name"> <strong>oSVersion</strong> <a href="#oSVersion"><span
                class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>oSVersion()</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:639</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="productVersion"></span> <span class="name"> <strong>productVersion</strong> <a
                href="#productVersion"><span class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>productVersion()</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:653</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="qTProduct"></span> <span class="name"> <strong>qTProduct</strong> <a href="#qTProduct"><span
                class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>qTProduct()</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:667</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="qvVersion"></span> <span class="name"> <strong>qvVersion</strong> <a href="#qvVersion"><span
                class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>qvVersion()</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:681</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="reloadExtensionList"></span> <span class="name"> <strong>reloadExtensionList</strong> <a
                href="#reloadExtensionList"><span class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>reloadExtensionList()</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:695</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="replaceAppFromID"></span> <span class="name"> <strong>replaceAppFromID</strong> <a
                href="#replaceAppFromID"><span class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>replaceAppFromID(qTargetAppId: string, qSrcAppID: string, qIds?: Array)</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:709</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Parameters :</strong>
                Name
                Type
                Optional
                qTargetAppId
                <code>string</code>
                no
                qSrcAppID
                <code>string</code>
                no
                qIds
                <code>Array&lt;string&gt;</code>
                yes
            </div>
            <div>

            </div>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
            <div class="io-description">

            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="shutdownProcess"></span> <span class="name"> <strong>shutdownProcess</strong> <a
                href="#shutdownProcess"><span class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>shutdownProcess()</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:727</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Returns :</strong> <code>Promise&lt;any&gt;</code>
            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="wsSend"></span> <span class="name"> <strong>wsSend</strong> <a href="#wsSend"><span
                class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><code>wsSend(obj: any, callback: Array)</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:39</a>
            </div>
        </td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-description">
                <strong>Parameters :</strong>
                Name
                Type
                Optional
                obj
                <code>any</code>
                no
                callback
                <code>Array&lt;Function&gt;</code>
                no
            </div>
            <div>

            </div>
            <div class="io-description">
                <strong>Returns :</strong> <code>void</code>
            </div>
            <div class="io-description">

            </div>
        </td>
    </tr>
    </tbody>
</table>

### Properties

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="docList"></span> <span class="name"> <strong><span
                class="modifier">Private</span> docList</strong> <a href="#docList"><span class="fa fa-link"></span></a> </span>
        </td>
    </tr>
    <tr class="even">
        <td><span class="modifier-icon fa fa-reset"></span><code>docList: any</code></td>
    </tr>
    <tr class="odd">
        <td><em>Type :</em> <code>any</code></td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:15</a>
            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="enumerator"></span> <span class="name"> <strong><span
                class="modifier">Private</span> enumerator</strong> <a href="#enumerator"><span
                class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><span class="modifier-icon fa fa-reset"></span><code>enumerator: number</code></td>
    </tr>
    <tr class="odd">
        <td><em>Type :</em> <code>number</code></td>
    </tr>
    <tr class="even">
        <td><em>Default value :</em> <code>0</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:12</a>
            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="ws"></span> <span class="name"> <strong><span class="modifier">Private</span> ws</strong> <a
                href="#ws"><span class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><span class="modifier-icon fa fa-reset"></span><code>ws: WebSocket</code></td>
    </tr>
    <tr class="odd">
        <td><em>Type :</em> <code>WebSocket</code></td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:13</a>
            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="wsPromise"></span> <span class="name"> <strong><span
                class="modifier">Private</span> wsPromise</strong> <a href="#wsPromise"><span class="fa fa-link"></span></a> </span>
        </td>
    </tr>
    <tr class="even">
        <td><span class="modifier-icon fa fa-reset"></span><code>wsPromise: Deferred&lt;any&gt;</code></td>
    </tr>
    <tr class="odd">
        <td><em>Type :</em> <code>Deferred&lt;any&gt;</code></td>
    </tr>
    <tr class="even">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:14</a>
            </div>
        </td>
    </tr>
    </tbody>
</table>

<table style="width:100%">
    <colgroup>
        <col width="100%"/>
    </colgroup>
    <tbody>
    <tr class="odd">
        <td><span id="wsQue"></span> <span class="name"> <strong><span class="modifier">Private</span> wsQue</strong> <a
                href="#wsQue"><span class="fa fa-link"></span></a> </span></td>
    </tr>
    <tr class="even">
        <td><span class="modifier-icon fa fa-reset"></span><code>wsQue: any</code></td>
    </tr>
    <tr class="odd">
        <td><em>Type :</em> <code>any</code></td>
    </tr>
    <tr class="even">
        <td><em>Default value :</em> <code>{}</code></td>
    </tr>
    <tr class="odd">
        <td>
            <div class="io-line">
                Defined in <a href="" class="link-to-prism">src/qlik-global.service.ts:16</a>
            </div>
        </td>
    </tr>
    </tbody>
</table>
