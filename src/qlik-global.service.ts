import { Inject, Injectable } from '@angular/core';
import { Deferred } from './class/deferred.class';
import { QlikConfig } from './class/qlik-config.class';
import { Document } from './class/document.class';
import {QBnfType} from './enum/qbnftype.enum';

@Injectable()
export class QlikGlobalService {
    private enumerator = 0;
    private ws: WebSocket;
    private wsPromise: Deferred<any>;
    private docList: any;
    private wsQue: any = {};

    constructor(@Inject('qlikConfig') private qlikConfig: QlikConfig) {
        console.log(qlikConfig.getWebsocketConnectionLink());
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
                this.wsQue[data.id](data);
            }
        };
    }

    wsSend(obj: any, callback: any) {
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
        }, (message: any) => {
            deferred.resolve(true);
        });
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
        }, (message: any) => {
            deferred.resolve(message);
        });
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
        }, (message: any) => {
            deferred.resolve(message);
        });
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
        }, (message: any) => {
            deferred.resolve(message);
        });
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
        }, (message: any) => {
            deferred.resolve(message);
        });
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
        }, (message: any) => {
            deferred.resolve(message);
        });
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
        }, (message: any) => {
            deferred.resolve(message);
        });
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
        }, (message: any) => {
            deferred.resolve(message);
        });
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
        }, (message: any) => {
            deferred.resolve(message);
        });
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
        }, (message: any) => {
            deferred.resolve(message);
        });
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
        }, (message: any) => {
            deferred.resolve(message);
        });
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
        }, (message: any) => {
            deferred.resolve(message);
        });
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
        }, (message: any) => {
            deferred.resolve(message);
        });
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
        }, (message: any) => {
            deferred.resolve(message);
        });
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
        }, (message: any) => {
            deferred.resolve(message);
        });
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
        }, (message: any) => {
            deferred.resolve(message);
        });
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
        }, (message: any) => {
            deferred.resolve(message);
        });
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
        }, (message: any) => {
            deferred.resolve(message);
        });
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
        }, (message: any) => {
            deferred.resolve(message);
        });
        return deferred.promise;
    }

    /**
     *

     GetCustomConnectors method

     GetDatabasesFromConnectionString method

     GetDefaultAppFolder method

     */
    getDocList(): Promise<any> {
        const deferred = new Deferred<any>();
        this.wsSend({
            'jsonrpc': '2.0',
            'id': this.getNextEnumerator(),
            'method': 'GetDocList',
            'handle': -1,
            'params': []
        }, (message: any) => {
            deferred.resolve(message);
        });
        return deferred.promise;
    }

    /*

    GetFolderItemsForPath method

    GetFunctions method

    GetInteract method

    GetLogicalDriveStrings method

    GetOdbcDsns method

    GetOleDbProviders method

    GetProgress method

    GetStreamList method

    GetSupportedCodePages method

    GetUniqueID method

    InteractDone method

    IsDesktopMode method

    IsPersonalMode method

    IsValidConnectionString method
*/
    openDoc(id: string): Document {
        if (this.docList[id] === undefined) {
            this.docList[id] = new Document(id, this);
        }
        return this.docList[id];
    }
    /*
    OSName method

    OSVersion method

    ProductVersion method

    QTProduct method

    QvVersion method

    ReloadExtensionList method

    ReplaceAppFromID method

    ShutdownProcess method
    */

}
