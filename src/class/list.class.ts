import {Deferred} from './deferred.class';
import { Document } from './document.class';

export class List {
    definition: any = {
        'jsonrpc': '2.0',
        'id': null,
        'method': 'CreateSessionObject',
        'handle': null,
        'params': [
            {
                'qInfo': {
                    'qType': 'List'
                },
                'qListObjectDef': {
                    'qStateName': '$',
                    'qLibraryId': '',
                    'qDef': {
                        'qGrouping': 'N',
                        'qFieldDefs': [],
                        'qFieldLabels': [],
                        'qSortCriterias': [
                            {
                                'qSortByState': 1,
                                'qSortByFrequency': 0,
                                'qSortByNumeric': 0,
                                'qSortByAscii': 0,
                                'qSortByLoadOrder': 0,
                                'qSortByExpression': 0,
                                'qExpression': {
                                    'qv': ''
                                }
                            }
                        ],
                        'qNumberPresentations': [
                            {
                                'qType': 'U',
                                'qnDec': 10,
                                'qUseThou': 0,
                                'qFmt': '',
                                'qDec': '.',
                                'qThou': ' '
                            }
                        ]
                    },
                    'qAutoSortByState': {
                        'qDisplayNumberOfRows': -1
                    },
                    'qFrequencyMode': 'EQ_NX_FREQUENCY_NONE',
                    'qShowAlternatives': true,
                    'qInitialDataFetch': [
                        {
                            'qTop': 0,
                            'qLeft': 0,
                            'qHeight': 100,
                            'qWidth': 1
                        }
                    ]
                }
            }
        ]
    };
    globalService: any;
    doc: Deferred<number>;
    deferred: Deferred<number>;
    callback: any;
    outerDoc: any;
    cubeOuterId: string;
    constructor(deferred: Deferred<number>, globalService: any, doc: Document, cubeOuterId: string) {
        this.outerDoc = doc;
        this.deferred = new Deferred();
        this.doc = deferred;
        this.globalService = globalService;
        this.cubeOuterId = cubeOuterId;
    }

    subscribe(cb: any): List {
        this.callback = cb;
        this.doc.promise.then( h => {
            this.setHandle(h);
            this.setDefinitionId(this.globalService.getNextEnumerator());
            this.globalService.wsSend(this.definition, [this.onMessageListCreated.bind(this)]);
        });
        return this;
    }

    unsubscribe() {
        this.deferred.promise.then((d) => {
            this.outerDoc.removeHyperCube(this.cubeOuterId);
        });
    }

    onMessageListCreated(m: any) {
        if (m.error) {
            this.deferred.reject(m.error.message);
            console.error(m.error.message);
        } else {
            this.deferred.resolve(m.result.qReturn.qHandle);
            this.getLayout();
        }
    }

    getLayout() {
        this.deferred.promise.then((d) => {
            this.globalService.wsSend({
                'jsonrpc': '2.0',
                'id': this.globalService.getNextEnumerator(),
                'method': 'GetLayout',
                'handle': d,
                'params': []
            }, [this.onMessageLayout.bind(this)]);
        });
    }

    onMessageLayout(m: any) {
        if (m.error) {
            console.error(m.error.message);
        } else {
            this.callback(m);
        }
    }

    addQFieldDef(qFieldDefs: string, qFieldLabels?: string): List {
        this.definition.params[0].qListObjectDef.qDef.qFieldDefs.push(qFieldDefs);
        this.definition.params[0].qListObjectDef.qDef.qFieldLabels.push(qFieldDefs || '');
        return this;
    }

    select(index: number): List {
        this.deferred.promise.then((d) => {
            this.globalService.wsSend({
                    'jsonrpc': '2.0',
                    'id': this.globalService.getNextEnumerator(),
                    'method': 'SelectListObjectValues',
                    'handle': d,
                    'params': [
                        '/qListObjectDef',
                        [
                            index
                        ],
                        true
                    ]
                },
                [() => {this.outerDoc.refreshAll(); }]
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