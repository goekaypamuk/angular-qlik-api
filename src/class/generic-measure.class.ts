import {Document} from './document.class';
import {Deferred} from './deferred.class';
import {QPatches} from '../interface/q-patches.interface';
import {QGenericMeasureProperties} from '../';
import {QLinkedObjectInfo} from '../interface/q-linked-object-info.interface';

export class GenericMeasure {
    globalService: any;
    doc: Deferred<number>;
    deferred: Deferred<number>;
    outerDoc: Document;
    bookMeasureId: string;
    constructor(deferred: Deferred<number>, globalService: any, doc: Document, bookMeasureId: string) {
        this.outerDoc = doc;
        this.deferred = new Deferred();
        this.doc = deferred;
        this.globalService = globalService;
        this.bookMeasureId = bookMeasureId;
    }

    setHandle(handle: number): void {
        this.deferred.resolve(handle);
    }

    applyPatches(qPatches: QPatches): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'ApplyPatches',
                'handle': handle,
                'params': {
                    qPatches: qPatches
                }
            }, [(message: any) => {
                this.outerDoc.refreshAll();
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    getInfo(): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetInfo',
                'handle': handle,
                'params': {
                }
            }, [(message: any) => {
                this.outerDoc.refreshAll();
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    getLayout(qLayout: QGenericMeasureProperties): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetLayout',
                'handle': handle,
                'params': {
                }
            }, [(message: any) => {
                this.outerDoc.refreshAll();
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    getLinkedObjects(qItems: Array<QLinkedObjectInfo>): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetLinkedObjects',
                'handle': handle,
                'params': {
                    qItems: qItems
                }
            }, [(message: any) => {
                this.outerDoc.refreshAll();
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    getMeasure(): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetMeasure',
                'handle': handle,
                'params': {
                }
            }, [(message: any) => {
                this.outerDoc.refreshAll();
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    getProperties(): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetProperties',
                'handle': handle,
                'params': {
                }
            }, [(message: any) => {
                this.outerDoc.refreshAll();
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    publish(): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'Publish',
                'handle': handle,
                'params': {
                }
            }, [(message: any) => {
                this.outerDoc.refreshAll();
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    setProperties(qProp: QGenericMeasureProperties): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'SetProperties',
                'handle': handle,
                'params': {
                    qProp: qProp
                }
            }, [(message: any) => {
                this.outerDoc.refreshAll();
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    unPublish(): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'UnPublish',
                'handle': handle,
                'params': {
                }
            }, [(message: any) => {
                this.outerDoc.refreshAll();
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }
}
