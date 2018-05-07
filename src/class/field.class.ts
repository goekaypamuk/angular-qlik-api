import {Deferred} from './deferred.class';
import {Document} from './document.class';

export class Field {
    globalService: any;
    doc: Deferred<number>;
    deferred: Deferred<number>;
    callback: Array<Function>;
    outerDoc: Document;
    fieldOuterId: string;
    constructor(deferred: Deferred<number>, globalService: any, doc: Document, fieldOuterId: string) {
        this.callback = [];
        this.outerDoc = doc;
        this.deferred = new Deferred();
        this.doc = deferred;
        this.globalService = globalService;
        this.fieldOuterId = fieldOuterId;
    }

    setHandle(handle: number): void {
        this.deferred.resolve(handle);
    }

    clearAllButThis(qSoftLock = false): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'ClearAllButThis',
                'handle': handle,
                'params': {
                    qSoftLock: qSoftLock
                }
            }, [(message: any) => {
                this.outerDoc.refreshAll();
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    clear(): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'Clear',
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

    getAndMode(): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetAndMode',
                'handle': handle,
                'params': {
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    getCardinal(): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetCardinal',
                'handle': handle,
                'params': {
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    getNxProperties(): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetNxProperties',
                'handle': handle,
                'params': {
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    lock(): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'Lock',
                'handle': handle,
                'params': {
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    lowLevelSelect(qValues: Array<number>, qToggleMode: boolean, qSoftLock = false ): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'LowLevelSelect',
                'handle': handle,
                'params': {
                    qValues: qValues,
                    qToggleMode: qToggleMode,
                    qSoftLock: qSoftLock
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    selectAll(qSoftLock = false): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'SelectAll',
                'handle': handle,
                'params': {
                    qSoftLock: qSoftLock
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    selectAlternative(qSoftLock = false): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'SelectAlternative',
                'handle': handle,
                'params': {
                    qSoftLock: qSoftLock
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    selectExcluded(qSoftLock = false): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'SelectExcluded',
                'handle': handle,
                'params': {
                    qSoftLock: qSoftLock
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    select(qMatch: string, qSoftLock = false, qExcludedValuesMode: number): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'select',
                'handle': handle,
                'params': {
                    qMatch: qMatch,
                    qSoftLock: qSoftLock,
                    qExcludedValuesMode: qExcludedValuesMode
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    selectPossible(qSoftLock = false): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'SelectPossible',
                'handle': handle,
                'params': {
                    qSoftLock: qSoftLock
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    /**
     *
     * @param {Array<number>} qValues
     * @param {boolean} qToggleMode
     * @param {boolean} qSoftLock
     * @returns {Promise<any>}
     */
    selectValues(qValues: Array<number>, qToggleMode: boolean, qSoftLock = false ): Promise<any>  {
        const deferred = new Deferred<any>();
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'SelectValues',
                'handle': handle,
                'params': {
                    qValues: qValues,
                    qToggleMode: qToggleMode,
                    qSoftLock: qSoftLock
                }
            }, [(message: any) => {
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }
}
