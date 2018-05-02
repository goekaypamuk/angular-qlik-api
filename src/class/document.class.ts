import {Deferred} from './deferred.class';
import {HyperCube} from './hyper-cube.class';
import {List} from './list.class';
import {QGenericBookmarkProperties} from '../interface/q-generic-bookmark-properties.interface';
import {QConnection} from '../interface/q-connection.interface';
import {QGenericDimensionProperties} from '../interface/q-generic-dimension-properties.interface';
import {QGenericMeasureProperties} from '../interface/q-generic-measure-properties.interface';
import {QGenericObjectProperties} from '../interface/q-generic-object-properties.interface';
import {QGenericVariableProperties} from '../interface/q-generic-variable-properties.interface';
import {QMode} from '../enum/q-mode.enum';
import {QInfo} from '../interface/q-info.interface';
import {QFilterInfo} from '../interface/q-filter-info.interface';
import {QFileDataFormat} from '../interface/q-file-data-format.interface';
import {QLineageInfo} from '../interface/q-lineage-info.interface';
import {QMatchingFieldMode} from '../enum/q-matching-field-mode.enum';
import {QObjectOptions} from '../interface/q-object-options.interface';
import {QSize} from '../';

export class Document {
    globalService: any;
    id: number;
    docId: string;
    deferred: Deferred<number>;
    hyperCubeList: any = {};
    listList: any = {};
    constructor(docId: string, service: any) {
        this.globalService = service;
        this.id = this.globalService.getNextEnumerator();
        this.deferred = new Deferred();
        this.docId = docId;
        this.globalService.wsSend({
            'method': 'OpenDoc',
            'handle': -1,
            'params': [
                this.docId
            ],
            'outKey': -1,
            'id': this.id
        }, [this.onDocumentOpened.bind(this)]);
    }

    createHyperCube(): HyperCube {
        const hqId = 'HC_' + this.globalService.getNextEnumerator();
        this.hyperCubeList[hqId] = new HyperCube(this.deferred, this.globalService, this, hqId);
        return this.hyperCubeList[hqId];
    }

    removeHyperCube(id: string) {
        delete this.hyperCubeList[id];
    }

    createList(): List {
        const Id = 'L_' + this.globalService.getNextEnumerator();
        this.listList[Id] = new List(this.deferred, this.globalService, this, Id);
        return this.listList[Id];
    }

    refreshAll() {
        for (const hc in this.hyperCubeList) {
            if (this.hyperCubeList.hasOwnProperty(hc)) {
                this.hyperCubeList[hc].getLayout();
            }
        }

        for (const l in this.listList) {
            if (this.hyperCubeList.hasOwnProperty(l)) {
                this.listList[l].getLayout();
            }
        }
    }

    private onDocumentOpened(m: any) {
        if (m.error) {
            this.deferred.reject(m.error.message);
            console.error(m.error.message);
        } else {
            this.deferred.resolve(m.result.qReturn.qHandle);
        }
    }

    abortModal(qAccept: boolean): Promise<any> {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'AbortModal',
                'handle': handle,
                'params': {
                    qAccept: qAccept
                }
            }, [(message: any) => {
                    deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    addFieldFromExpression(qName: string, qExpr: string): Promise<any> {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'AddAlternateState',
                'handle': handle,
                'params': {
                    qName: qName,
                    qExpr: qExpr
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    applyBookmark(qId: string): Promise<any> {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'ApplyBookmark',
                'handle': handle,
                'params': {
                    qId: qId
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    backCount(): Promise<any> {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'BackCount',
                'handle': handle,
                'params': {
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    back(): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'Back',
                'handle': handle,
                'params': []
            }, [this.refreshAll.bind(this),
                (message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    checkExpression(qExpr: string, qLabels: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'CheckExpression',
                'handle': handle,
                'params': {
                    qExpr: qExpr,
                    qLabels: qLabels
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    checkNumberOrExpression(qExpr: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'CheckNumberOrExpression',
                'handle': handle,
                'params': {
                    qExpr: qExpr
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    checkScriptSyntax(): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'CheckScriptSyntax',
                'handle': handle,
                'params': {
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    clearAll(qLockedAlso?: boolean, qStateName?: boolean): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'ClearAll',
                'handle': handle,
                'params': {
                    qLockedAlso: qLockedAlso,
                    qStateName: qStateName
                }
            }, [this.refreshAll.bind(this),
                (message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    clearUndoBuffer(): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'ClearUndoBuffer',
                'handle': handle,
                'params': {
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    cloneBookmark(qId: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'CloneBookmark',
                'handle': handle,
                'params': {
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    cloneDimension(qId: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'CloneDimension',
                'handle': handle,
                'params': {
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    cloneMeasure(qId: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'CloneMeasure',
                'handle': handle,
                'params': {
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    cloneObject(qId: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'CloneObject',
                'handle': handle,
                'params': {
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    commitDraft(qId: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'CommitDraft',
                'handle': handle,
                'params': {
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    createBookmark(qGenericBookmarkProperties: QGenericBookmarkProperties): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'CreateBookmark',
                'handle': handle,
                'params': {
                    qProp: qGenericBookmarkProperties
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    createConnection(qConnection: QConnection): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'CreateConnection',
                'handle': handle,
                'params': {
                    qConnection: qConnection
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    createDimension(qGenericDimensionProperties: QGenericDimensionProperties): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'createDimension',
                'handle': handle,
                'params': {
                    qProp: qGenericDimensionProperties
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    createDraft(qId: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'CreateDraft',
                'handle': handle,
                'params': {
                    qId: qId
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    createMeasure(qGenericMeasureProperties: QGenericMeasureProperties): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'CreateMeasure',
                'handle': handle,
                'params': {
                    qProp: qGenericMeasureProperties
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    createObject(qGenericObjectProperties: QGenericObjectProperties): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'CreateObject',
                'handle': handle,
                'params': {
                    qProp: qGenericObjectProperties
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    createSessionObject(qGenericObjectProperties: QGenericObjectProperties): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'CreateSessionObject',
                'handle': handle,
                'params': {
                    qProp: qGenericObjectProperties
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }
    createSessionVariable(qGenericVariableProperties: QGenericVariableProperties): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'CreateSessionVariable',
                'handle': handle,
                'params': {
                    qProp: qGenericVariableProperties
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    createVariableEx(qGenericVariableProperties: QGenericVariableProperties): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'CreateVariableEx',
                'handle': handle,
                'params': {
                    qProp: qGenericVariableProperties
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    deleteConnection(qConnectionId: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'DeleteConnection',
                'handle': handle,
                'params': {
                    qConnectionId: qConnectionId
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    destroyBookmark(qId: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'DestroyBookmark',
                'handle': handle,
                'params': {
                    qId: qId
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    destroyDimension(qId: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'DestroyDimension',
                'handle': handle,
                'params': {
                    qId: qId
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    destroyDraft(qId: string, qSourceId: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'DestroyDraft',
                'handle': handle,
                'params': {
                    qId: qId,
                    qSourceId: qSourceId
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    destroyMeasure(qId: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'DestroyMeasure',
                'handle': handle,
                'params': {
                    qId: qId
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    destroyObject(qId: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'DestroyObject',
                'handle': handle,
                'params': {
                    qId: qId
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    destroySessionObject(qId: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'DestroySessionObject',
                'handle': handle,
                'params': {
                    qId: qId
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    destroySessionVariable(qId: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'DestroySessionVariable',
                'handle': handle,
                'params': {
                    qId: qId
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    destroyVariableById(qId: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'destroyVariableById',
                'handle': handle,
                'params': {
                    qId: qId
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    destroyVariableByName(qName: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'DestroyVariableByName',
                'handle': handle,
                'params': {
                    qName: qName
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    doReload(qPartial?: boolean, qDebug?: boolean, qMode?: QMode): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'DoReload',
                'handle': handle,
                'params': {
                    qPartial: qPartial,
                    qDebug: qDebug,
                    qMode: qMode
                }
            }, [this.refreshAll.bind(this),
                (message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    doReloadEx(qPartial?: boolean, qDebug?: boolean, qMode?: QMode): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'DoReloadEx',
                'handle': handle,
                'params': {
                    qParams: {
                        qPartial: qPartial,
                        qDebug: qDebug,
                        qMode: qMode
                    }
                }
            }, [this.refreshAll.bind(this),
                (message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    doSave(qFileName?: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'DoSave',
                'handle': handle,
                'params': {
                    qFileName: qFileName
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    evaluate(qExpression: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'Evaluate',
                'handle': handle,
                'params': {
                    qExpression: qExpression
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    evaluateEx(qExpression: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'EvaluateEx',
                'handle': handle,
                'params': {
                    qExpression: qExpression
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    findMatchingFields(qFieldName: string, qTags: Array<string>): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'FindMatchingFields',
                'handle': handle,
                'params': {
                    qFieldName: qFieldName,
                    qTags: qTags
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    forward(): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'Forward',
                'handle': handle,
                'params': []
            }, [this.refreshAll.bind(this),
                (message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    forwardCount(): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'ForwardCount',
                'handle': handle,
                'params': []
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    getAllInfos(qInfos: QInfo): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetAllInfos',
                'handle': handle,
                'params': {
                    qInfos: qInfos
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    getAppLayout(): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetAppLayout',
                'handle': handle,
                'params': {
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    getAppProperties(): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetAppProperties',
                'handle': handle,
                'params': {
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    GetAssociationScores(qTable1: string, qTable2: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetAppProperties',
                'handle': handle,
                'params': {
                    qTable1: qTable1,
                    qTable2: qTable2
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    getBookmark(qId: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetBookmark',
                'handle': handle,
                'params': {
                    qId: qId
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    getBookmarks(qId: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetBookmarks',
                'handle': handle,
                'params': {
                    qId: qId
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    getConnection(qConnectionId: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetConnection',
                'handle': handle,
                'params': {
                    qConnectionId: qConnectionId
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    getConnections(): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetConnections',
                'handle': handle,
                'params': {
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    getContentLibraries(): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetContentLibraries',
                'handle': handle,
                'params': {
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    getDatabaseInfo(qConnectionId: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetDatabaseInfo',
                'handle': handle,
                'params': {
                    qConnectionId: qConnectionId
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    getDatabaseOwners(qConnectionId: string, qDatabase?: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetDatabaseOwners',
                'handle': handle,
                'params': {
                    qConnectionId: qConnectionId,
                    qDatabase: qDatabase
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    getDatabaseTableFields(qConnectionId: string, qTable: string, qDatabase?: string, qOwner?: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetDatabaseTableFields',
                'handle': handle,
                'params': {
                    qConnectionId: qConnectionId,
                    qDatabase: qDatabase,
                    qTable: qTable,
                    qOwner: qOwner
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    getDatabaseTablePreview(qConnectionId: string,
                            qTable: string,
                            qDatabase?: string,
                            qOwner?: string,
                            qConditions?: QFilterInfo): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetDatabaseTablePreview',
                'handle': handle,
                'params': {
                    qConnectionId: qConnectionId,
                    qDatabase: qDatabase,
                    qTable: qTable,
                    qOwner: qOwner,
                    qConditions: qConditions
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    getDatabaseTables(qConnectionId: string,
                            qDatabase?: string,
                            qOwner?: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetDatabaseTables',
                'handle': handle,
                'params': {
                    qConnectionId: qConnectionId,
                    qDatabase: qDatabase,
                    qOwner: qOwner,
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    getDatabases(qConnectionId: string,
                      qDatabase?: string,
                      qOwner?: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetDatabases',
                'handle': handle,
                'params': {
                    qConnectionId: qConnectionId,
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    /**
     * s
     */
    getDimension(qId: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetDimension',
                'handle': handle,
                'params': {
                    qId: qId,
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    getEmptyScript(qLocalizedMainSection?: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetEmptyScript',
                'handle': handle,
                'params': {
                    qLocalizedMainSection: qLocalizedMainSection,
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    getFavoriteVariables(): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetFavoriteVariables',
                'handle': handle,
                'params': {
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    /**
     *
     */
    getField(qFieldName: string, qStateName?: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetField',
                'handle': handle,
                'params': {
                    qFieldName: qFieldName,
                    qStateName: qStateName
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    getFieldDescription(qFieldName: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetFieldDescription',
                'handle': handle,
                'params': {
                    qFieldName: qFieldName
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    getFieldOnTheFlyByName(qFieldName: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetFieldOnTheFlyByName',
                'handle': handle,
                'params': {
                    qFieldName: qFieldName
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    /**
     *
     * QFileDataFormat not completed
     */
    getFileTableFields(qConnectionId: string, qDataFormat: QFileDataFormat , qTable: string, qRelativePath?: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetFileTableFields',
                'handle': handle,
                'params': {
                    qConnectionId: qConnectionId,
                    qDataFormat: qDataFormat,
                    qTable: qTable,
                    qRelativePath: qRelativePath
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    getFileTablePreview(qReadableName: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetFileTablePreview',
                'handle': handle,
                'params': {
                    qReadableName: qReadableName
                }
            }, [(message: any) => {
                    deferred.resolve(message);
                }]);
        });
        return deferred.promise;
    }

    getFileTables(qConnectionId: string, qDataFormat: QFileDataFormat , qRelativePath?: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetFileTables',
                'handle': handle,
                'params': {
                    qConnectionId: qConnectionId,
                    qDataFormat: qDataFormat,
                    qRelativePath: qRelativePath
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    getFileTablesEx(qConnectionId: string, qDataFormat: QFileDataFormat , qRelativePath?: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetFileTablesEx',
                'handle': handle,
                'params': {
                    qConnectionId: qConnectionId,
                    qDataFormat: qDataFormat,
                    qRelativePath: qRelativePath
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    getFolderItemsForConnection(qConnectionId: string,  qRelativePath?: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetFolderItemsForConnection',
                'handle': handle,
                'params': {
                    qConnectionId: qConnectionId,
                    qRelativePath: qRelativePath
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    getIncludeFileContent(qPath: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetIncludeFileContent',
                'handle': handle,
                'params': {
                    qPath: qPath
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    getLibraryContent(qName: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetLibraryContent',
                'handle': handle,
                'params': {
                    qName: qName
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    getLineage(qLineage: Array<QLineageInfo>): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetLineage',
                'handle': handle,
                'params': {
                    qLineage: qLineage
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    getLocaleInfo(): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetLocaleInfo',
                'handle': handle,
                'params': {
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    getLooselyCoupledVector(): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetLooselyCoupledVector',
                'handle': handle,
                'params': {
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    getMatchingFields(qTags: Array<string>, qMatchingFieldMode?: QMatchingFieldMode): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'getMatchingFields',
                'handle': handle,
                'params': {
                    qTags: qTags,
                    qMatchingFieldMode: qMatchingFieldMode
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    getMeasure(qId: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetMeasure',
                'handle': handle,
                'params': {
                    qId: qId
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    getMediaList(): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetMediaList',
                'handle': handle,
                'params': {
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    getObject(qId: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetObject',
                'handle': handle,
                'params': {
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    getObjects(qObjectOptions: QObjectOptions): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetObjects',
                'handle': handle,
                'params': {
                    qOptions: qObjectOptions
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    getScript(): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetScript',
                'handle': handle,
                'params': {
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    getScriptBreakpoints(): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetScriptBreakpoints',
                'handle': handle,
                'params': {
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    getScriptEx(): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetScriptEx',
                'handle': handle,
                'params': {
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    getTableData(qOffset: number, qRows: number, qSyntheticMode: boolean, qTableName: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetTableData',
                'handle': handle,
                'params': {
                    qOffset: qOffset,
                    qRows: qRows,
                    qSyntheticMode: qSyntheticMode,
                    qTableName: qTableName
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    getTablesAndKeys(qWindowSize: QSize,
                     qNullSize: QSize,
                     qCellHeight: number,
                     qSyntheticMode: boolean,
                     qIncludeSysVars: boolean): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetTablesAndKeys',
                'handle': handle,
                'params': {
                    qWindowSize: qWindowSize,
                    qNullSize: qNullSize,
                    qCellHeight: qCellHeight,
                    qSyntheticMode: qSyntheticMode,
                    qIncludeSysVars: qIncludeSysVars
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    getTextMacros(): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetTextMacros',
                'handle': handle,
                'params': {
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    getVariable(qName: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetVariable',
                'handle': handle,
                'params': {
                    qName: qName
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    getVariableById(qId: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetVariableById',
                'handle': handle,
                'params': {
                    qName: qId
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    getVariableByName(qName: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetVariableByName',
                'handle': handle,
                'params': {
                    qName: qName
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    getViewDlgSaveInfo(): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetViewDlgSaveInfo',
                'handle': handle,
                'params': {
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    guessFileType(qConnectionId: string, qRelativePath?: string ): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GuessFileType',
                'handle': handle,
                'params': {
                    qConnectionId: qConnectionId,
                    qRelativePath: qRelativePath
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    lockAll (qStateName?: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'LockAll',
                'handle': handle,
                'params': {
                    qStateName: qStateName
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    modifyConnection (qConnectionId: string, qConnection?: QConnection, qOverrideCredentials?: boolean): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'ModifyConnection',
                'handle': handle,
                'params': {
                    qConnectionId: qConnectionId,
                    qConnection: qConnection,
                    qOverrideCredentials: qOverrideCredentials
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    publish (qStreamId: string, qName?: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'Publish',
                'handle': handle,
                'params': {
                    qStreamId: qStreamId,
                    qName: qName
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    redo (): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'Redo',
                'handle': handle,
                'params': {
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    removeAlternateState (qStateName: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'RemoveAlternateState',
                'handle': handle,
                'params': {
                    qStateName: qStateName
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    resume(): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'Resume',
                'handle': handle,
                'params': {
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    saveObjects(): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'SaveObjects',
                'handle': handle,
                'params': {
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    scramble(qFieldName: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'Scramble',
                'handle': handle,
                'params': {
                    qFieldName: qFieldName
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    /*
    searchAssociations(qOptions: string): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'SearchAssociations',
                'handle': handle,
                'params': {
                    qFieldName: qOptions
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }
    */
    /* To be implemented !!



GetTableData method

GetTablesAndKeys method

GetTextMacros method

GetVariable method

GetVariableById method

GetVariableByName method

GetViewDlgSaveInfo method

GuessFileType method

LockAll method

ModifyConnection method

Publish method

Redo method

RemoveAlternateState method

RemoveVariable method

Resume method

SaveObjects method

SearchAssociations method

SearchObjects method

SearchResults method

SearchSuggest method

SelectAssociations method

SendGenericCommandToCustomConnector method

SetAppProperties method

SetFavoriteVariables method

SetFetchLimit method

SetLooselyCoupledVector method

SetScriptBreakpoints method

SetScript method

SetViewDlgSaveInfo method

Undo method

UnlockAll method

     */
}
