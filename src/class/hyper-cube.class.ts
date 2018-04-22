import {Deferred} from './deferred.class';
import {Dimension} from './dimension.class';
import {Measure} from './measure.class';
import { Document } from './document.class';

export class HyperCube {
    definition: any = {
        'jsonrpc': '2.0',
        'id': null,
        'method': 'CreateSessionObject',
        'handle': null,
        'params': [
            {
                'qInfo': {
                    'qType': 'Chart'
                },
                'qHyperCubeDef': {
                    'qInitialDataFetch': [
                        {
                            'qHeight': 2000,
                            'qWidth': 1
                        }
                    ],
                    'qDimensions': [],
                    'qMeasures': [],
                    'qSuppressZero': false,
                    'qSuppressMissing': false,
                    'qMode': 'S',
                    'qInterColumnSortOrder': [],
                    'qStateName': '$'
                }
            }
        ]
    };
    globalService: any;
    doc: Deferred<number>;
    deferred: Deferred<number>;
    callback: any;
    outerDoc: Document;
    cubeOuterId: string;
    constructor(deferred: Deferred<number>, globalService: any, doc: Document, cubeOuterId: string) {
        this.outerDoc = doc;
        this.deferred = new Deferred();
        this.doc = deferred;
        this.globalService = globalService;
        this.cubeOuterId = cubeOuterId;
    }

    subscribe(cb: any): HyperCube {
        this.callback = cb;
        this.doc.promise.then( h => {
            this.setHandle(h);
            this.setDefinitionId(this.globalService.getNextEnumerator());
            this.globalService.wsSend(this.definition, this.onMessageCubeCreated.bind(this));
        });
        return this;
    }

    unsubscribe() {
        this.deferred.promise.then((d) => {
            this.outerDoc.removeHyperCube(this.cubeOuterId);
        });
    }

    getLayout() {
        this.deferred.promise.then((d) => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetLayout',
                'handle': d,
                'params': []
            }, this.onMessageLayout.bind(this));
        });
    }

    onMessageCubeCreated(m: any) {
        if (m.error) {
            this.deferred.reject(m.error.message);
            console.error(m.error.message);
        } else {
            this.deferred.resolve(m.result.qReturn.qHandle);
            this.getLayout();
        }
    }

    onMessageLayout(m: any) {
        if (m.error) {
            console.error(m.error.message);
        } else {
            this.callback(m);
        }
    }

    setSuppressZero(b: boolean): HyperCube {
        this.definition.params[0].qHyperCubeDef.qSuppressZero = b;
        return this;
    }

    setEffectiveColumnSorter(arr: Array<number>): HyperCube {
        this.definition.params[0].qHyperCubeDef['qEffectiveInterColumnSortOrder'] = arr;
        return this;
    }

    setSuppressMissing(b: boolean): HyperCube {
        this.definition.params[0].qHyperCubeDef.qSuppressMissing = b;
        return this;
    }

    setStateName(s: string): HyperCube {
        this.definition.params[0].qHyperCubeDef.qStateName = s;
        return this;
    }

    setInitialDataFetch(height: number, width: number): HyperCube {
        this.definition.params[0].qHyperCubeDef.qInitialDataFetch[0].qHeight = height;
        this.definition.params[0].qHyperCubeDef.qInitialDataFetch[0].qWidth = width;
        return this;
    }

    addDimension(dim: Dimension): HyperCube {
        this.definition.params[0].qHyperCubeDef.qDimensions.push(dim.definition);
        this.definition.params[0].qHyperCubeDef.qInitialDataFetch[0].qWidth =
            this.definition.params[0].qHyperCubeDef.qInitialDataFetch[0].qWidth + 1;
        return this;
    }

    addMeasure(ms: Measure): HyperCube {
        this.definition.params[0].qHyperCubeDef.qMeasures.push(ms.definition);
        this.definition.params[0].qHyperCubeDef.qInitialDataFetch[0].qWidth =
            this.definition.params[0].qHyperCubeDef.qInitialDataFetch[0].qWidth + 1;
        return this;
    }

    select(pos: number, index: number): HyperCube {
        this.deferred.promise.then((d) => {
            this.globalService.wsSend({
                    'jsonrpc': '2.0',
                    'id': this.globalService.getNextEnumerator(),
                    'method': 'SelectHyperCubeValues',
                    'handle': d,
                    'params': [
                        '/qHyperCubeDef',
                        pos,
                        [
                            index
                        ],
                        true
                    ]
                },
                () => {this.outerDoc.refreshAll(); }
            );
        });
        return this;
    }

    private setHandle(h: number) {
        this.definition.handle = h;
    }

    private setDefinitionId(n: number) {
        this.definition.id = n;
    }
}