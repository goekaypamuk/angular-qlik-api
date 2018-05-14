import {Document} from './document.class';
import {Deferred} from './deferred.class';
import {QPatches} from '../interface/q-patches.interface';
import {QGenericDimensionProperties} from '../';
import {QLinkedObjectInfo} from '../interface/q-linked-object-info.interface';

export class GenericDimension {
    globalService: any;
    doc: Deferred<number>;
    deferred: Deferred<number>;
    outerDoc: Document;
    genericDimensionId: string;
    constructor(deferred: Deferred<number>, globalService: any, doc: Document, genericDimensionId: string) {
        this.outerDoc = doc;
        this.deferred = new Deferred();
        this.doc = deferred;
        this.globalService = globalService;
        this.genericDimensionId = genericDimensionId;
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

    getDimension(): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetDimension',
                'handle': handle,
                'params': {
                }
            }, [(message: any) => {
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
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    getLayout(qLayout: QGenericDimensionProperties): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetInfo',
                'handle': handle,
                'params': {
                    qLayout: qLayout
                }
            }, [(message: any) => {
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
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    getProperties(qLayout: QGenericDimensionProperties): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetProperties',
                'handle': handle,
                'params': {
                    qLayout: qLayout
                }
            }, [(message: any) => {
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
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    setProperties(qProp: QGenericDimensionProperties): Promise<any>  {
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
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }
}
