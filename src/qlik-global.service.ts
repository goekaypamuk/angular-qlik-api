import { Inject, Injectable } from '@angular/core';
import { Deferred } from './class/deferred.class';
import { QlikConfig } from './class/qlik-config.class';
import { Document } from './class/document.class';
import {QBnfType} from './enum/q-bnf-type.enum';
import {Connection} from './class/connection.class';
import {QGroup} from './enum/q-group.enum';


@Injectable()
export class QlikGlobalService {
    private enumerator = 0;
    private ws: WebSocket;
    private wsPromise: Deferred<any>;
    private docList: any;
    private wsQue: any = {};

    constructor(@Inject('qlikConfig') private qlikConfig: QlikConfig) {
        let webSocketLink = qlikConfig.getWebsocketConnectionLink();

        this.docList = {};
        this.wsPromise = new Deferred();

        this.ws = new WebSocket(webSocketLink);
        this.ws.onopen = (m) => {
            this.wsPromise.resolve(true);
        };

        this.ws.onmessage = (ev) => {
            const data = JSON.parse(ev.data);
            if (this.wsQue[data.id] !== undefined) {
                // this.wsQue[data.id](data);
                this.wsQue[data.id].forEach( (func) => {
                    func(data);
                });
            }
        };
    }

    wsSend(obj: any, callback: Array<Function>) {
        this.wsQue[obj.id] = callback;
        this.wsPromise.promise.then( _ => {
            this.ws.send(JSON.stringify(obj));
        });
    }

    getNextEnumerator(): number {
        return this.enumerator++;
    }

    /**
     * Global Class Method implementation
     **/

    abortAll(): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'AbortAll',
            'handle': -1,
            'params': []
        }, [(message: any) => {
            deferred.resolve(true);
        }]);
        return deferred.promise;
    }

    allowCreateApp(): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'AllowCreateApp',
            'handle': -1,
            'params': []
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }

    cancelReload(): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'CancelReload',
            'handle': -1,
            'params': []
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }

    cancelRequest(qRequestId: number): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'CancelRequest',
            'handle': -1,
            'params': [
                qRequestId
            ]
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }

    configureReload(qCancelOnScriptError: boolean, qUseErrorData: boolean, qInteractOnError: boolean): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'ConfigureReload',
            'handle': -1,
            'params': []
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }

    CopyApp(qTargetAppId: string, qSrcAppId: string, qIds: Array<string> ): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'CopyApp',
            'handle': -1,
            'params': [
                qTargetAppId,
                qSrcAppId,
                qIds
            ]
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }

    createApp(qAppName: string, qLocalizedScriptMainSection?: string): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'CreateApp',
            'handle': -1,
            'params': [
                qAppName,
                qLocalizedScriptMainSection || null
            ]
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }

    createDocEx(qDocName: string,
                qUserName?: string,
                qPassword?: string,
                qSerial?: string,
                qLocalizedScriptMainSection?: string): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'CreateDocEx',
            'handle': -1,
            'params':  {
                'qDocName': qDocName,
                'qUserName': qUserName || '',
                'qPassword': qPassword || '',
                'qSerial': qSerial || '',
                'qLocalizedScriptMainSection': qLocalizedScriptMainSection || ''
            }
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }

    createSessionApp(): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'CreateSessionApp',
            'handle': -1,
            'params': [
            ]
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }

    createSessionAppFromApp(qSrcAppId: string): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'CreateSessionAppFromApp',
            'handle': -1,
            'params': [
                qSrcAppId
            ]
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }

    deleteApp(qAppId: string): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'DeleteApp',
            'handle': -1,
            'params': [
                qAppId
            ]
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }

    engineVersion(): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'EngineVersion',
            'handle': -1,
            'params': [
            ]
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }

    exportApp(qTargetPath: string,
                qSrcAppId: string,
                qIds: Array<string>): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'ExportApp',
            'handle': -1,
            'params':  {
                'qTargetPath': qTargetPath,
                'qSrcAppId': qSrcAppId,
                'qIds': qIds
            }
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }

    getActiveDoc(): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'GetActiveDoc',
            'handle': -1,
            'params': [
            ]
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }

    getAppEntry(qAppID: string): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'GetAppEntry',
            'handle': -1,
            'params': {
                'qAppID': qAppID
            }
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }

    getAuthenticatedUser(qAppID: string): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'GetAuthenticatedUser',
            'handle': -1,
            'params': []
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }

    getBaseBNF(qBnfType: QBnfType): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'GetBaseBNF',
            'handle': -1,
            'params': [
                qBnfType
            ]
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }

    getBaseBNFHash(qBnfType: QBnfType): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'GetBaseBNFHash',
            'handle': -1,
            'params': [
                qBnfType
            ]
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }

    getBNF(qBnfType: QBnfType): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'GetBNF',
            'handle': -1,
            'params': [
                qBnfType
            ]
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }


    getCustomConnectors(qReloadList: boolean): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'GetCustomConnectors',
            'handle': -1,
            'params': {
                qReloadList: qReloadList
            }
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }

    getDatabasesFromConnectionString(qConnection: Connection): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'GetDatabasesFromConnectionString',
            'handle': -1,
            'params': {
                qConnection: qConnection
            }
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }

    getDefaultAppFolder(): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'getDefaultAppFolder',
            'handle': -1,
            'params': {
            }
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }

    getDocList(): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'GetDocList',
            'handle': -1,
            'params': []
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }

    getFolderItemsForPath (qPath: string): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'getFolderItemsForPath',
            'handle': -1,
            'params': {
                qPath: qPath
            }
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }

    getFunctions (qGroup?: QGroup): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'GetFunctions',
            'handle': -1,
            'params': {
                qGroup: qGroup || QGroup.ALL
            }
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }

    getInteract (qRequestId: number): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'GetInteract',
            'handle': -1,
            'params': {
                qRequestId: qRequestId
            }
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }

    getLogicalDriveStrings (): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'GetLogicalDriveStrings',
            'handle': -1,
            'params': {}
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }

    getOdbcDsns (): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'GetOdbcDsns',
            'handle': -1,
            'params': {}
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }

    getOleDbProviders (): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'GetOleDbProviders',
            'handle': -1,
            'params': {}
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }

    getProgress (qRequestId: number): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'GetProgress',
            'handle': -1,
            'params': {
                qRequestId: qRequestId
            }
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }

    getSupportedCodePages (): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'GetSupportedCodePages',
            'handle': -1,
            'params': {}
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }

    getUniqueID (): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'GetUniqueID',
            'handle': -1,
            'params': {}
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }

    interactDone (qRequestId: number, qResult: number ): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'InteractDone',
            'handle': -1,
            'params': {
                InteractDef: {
                    qResult: qResult
                }
            }
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }

    isDesktopMode (): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'IsDesktopMode',
            'handle': -1,
            'params': {}
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }

    IsPersonalMode (): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'IsPersonalMode',
            'handle': -1,
            'params': {}
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }

    isValidConnectionString (qConnection: Connection): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'IsValidConnectionString',
            'handle': -1,
            'params': {
                qConnection: qConnection
            }
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }

    openDoc(id: string): Document {
        if (this.docList[id] === undefined) {
            this.docList[id] = new Document(id, this);
        }
        return this.docList[id];
    }

    oSName (): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'OSName',
            'handle': -1,
            'params': {}
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }

    oSVersion (): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'OSVersion',
            'handle': -1,
            'params': {}
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }

    productVersion (): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'ProductVersion',
            'handle': -1,
            'params': {}
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }

    qTProduct (): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'QTProduct',
            'handle': -1,
            'params': {}
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }

    qvVersion (): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'qvVersion',
            'handle': -1,
            'params': {}
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }

    reloadExtensionList (): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'ReloadExtensionList',
            'handle': -1,
            'params': {}
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }

    replaceAppFromID (qTargetAppId: string, qSrcAppID: string, qIds?: Array<string>): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'ReplaceAppFromID',
            'handle': -1,
            'params': {
                qTargetAppId: qTargetAppId,
                qSrcAppID: qSrcAppID,
                qIds: qIds || []
            }
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }

    shutdownProcess (): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'shutdownProcess',
            'handle': -1,
            'params': {}
        }, [(message: any) => {
            deferred.resolve(message);
        }]);
        return deferred.promise;
    }
}
