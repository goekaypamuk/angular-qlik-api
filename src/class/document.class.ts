import {Deferred} from './deferred.class';
import {HyperCube} from './hyper-cube.class';
import {List} from './list.class';

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
        }, this.onMessage.bind(this));
    }

    createHyperCube(): HyperCube {
        const hqId = 'HC_' + this.globalService.getNextEnumerator();
        this.hyperCubeList[hqId] = new HyperCube(this.deferred, this.globalService, this, hqId);
        return this.hyperCubeList[hqId];
    }

    removeHyperCube(id: string){
        delete this.hyperCubeList[id];
    }

    createList(): List {
        const Id = 'L_' + this.globalService.getNextEnumerator();
        this.listList[Id] = new List(this.deferred, this.globalService, this, Id);
        return this.listList[Id];
    }

    refreshAll() {
        for (const hc in Object.keys(this.hyperCubeList)) {
            if (this.hyperCubeList.hasOwnProperty(hc)) {
                this.hyperCubeList[hc].getLayout();
            }
        }

        for (const l in Object.keys(this.listList)) {
            if (this.hyperCubeList.hasOwnProperty(l)) {
                this.listList[l].getLayout();
            }
        }
    }

    onMessage(m: any) {
        if (m.error) {
            this.deferred.reject(m.error.message);
            console.error(m.error.message);
        } else {
            this.deferred.resolve(m.result.qReturn.qHandle);
        }
    }

    clearAll(): Document {
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'ClearAll',
                'handle': handle,
                'params': []
            }, this.refreshAll.bind(this));
        });
        return this;
    }

    back(): Document {
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'Back',
                'handle': handle,
                'params': []
            }, this.refreshAll.bind(this));
        });
        return this;
    }

    forward(): Document {
        this.deferred.promise.then( handle => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'Forward',
                'handle': handle,
                'params': []
            }, this.refreshAll.bind(this));
        });
        return this;
    }
}
