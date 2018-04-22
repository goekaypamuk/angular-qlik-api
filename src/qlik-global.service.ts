import { Inject, Injectable } from '@angular/core';
import { Deferred } from './class/deferred.class';
import { QlikConfig } from './class/qlik-config.class';
import { Document } from './class/document.class';

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

    /**
     *
     CancelReload method

     CancelRequest method

     ConfigureReload method

     CopyApp method

     CreateApp method

     CreateDocEx method

     CreateSessionApp method

     CreateSessionAppFromApp method

     DeleteApp method

     EngineVersion method

     ExportApp method

     GetActiveDoc method

     GetAppEntry method

     GetAuthenticatedUser method

     GetBaseBNFHash method

     GetBaseBNF method

     GetBNF method

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
