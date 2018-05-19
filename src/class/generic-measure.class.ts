import {Document} from './document.class';
import {Deferred} from './deferred.class';
import {QPatches} from '../interface/q-patches.interface';
import {QGenericMeasureProperties, QGrouping} from '../';
import {QLinkedObjectInfo} from '../interface/q-linked-object-info.interface';
import {QOp} from '../enum/q-op.enum';

export class GenericMeasure {
    qProp: QGenericMeasureProperties;
    globalService: any;
    doc: Deferred<number>;
    deferred: Deferred<number>;
    outerDoc: Document;
    genericMeasureId: string;
    constructor(deferred: Deferred<number>, globalService: any, doc: Document, genericMeasureId: string) {
        this.outerDoc = doc;
        this.deferred = new Deferred();
        this.doc = deferred;
        this.globalService = globalService;
        this.genericMeasureId = genericMeasureId;
    }

    setHandle(handle: number): void {
        this.getProperties();
        this.deferred.resolve(handle);
    }

    /**
     * Applies a patch to the properties of an object. Allows an update to some of the properties.
     * @param {Array<QPatches>} qPatches
     * @returns {Promise<any>}
     */
    applyPatches(qPatches: Array<QPatches>): Promise<any>  {
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

    /**
     * Returns the type and identifier of the object.
     * @returns {Promise<any>}
     */
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

    /**
     * Evaluates a measure and displays its properties, including the dynamic properties.
     * @param {QGenericMeasureProperties} qLayout
     * @returns {Promise<any>}
     */
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
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    /**
     * Lists the linked objects to a generic object, a dimension or a measure.
     * @param {Array<QLinkedObjectInfo>} qItems
     * @returns {Promise<any>}
     */
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

    /**
     * Returns the definition of a measure.
     * @returns {Promise<any>}
     */
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
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    /**
     * Shows the properties of an object.
     * Returns the identifier and the definition of the measure.
     * @returns {Promise<any>}
     */
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
                this.qProp = message.result.qProp;
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

    /**
     * Publishes a measure.
     * @returns {Promise<any>}
     */
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

    /**
     * Sets some properties for a measure.
     * @param {QGenericMeasureProperties} qProp
     * @returns {Promise<any>}
     */
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

    /**
     * Unpublishes a measure.
     * @returns {Promise<any>}
     */
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

  /**
   * Module helper method
   * Sets the title. If presist true will automatically save the object
   * @param {string} title
   * @param {boolean} presist
   * @returns {GenericMeasure}
   */
    $setTitle(title: string, presist = true): GenericMeasure {
        this.applyPatches([{
            qOp: QOp.Add,
            qPath: '/qMetaDef/title',
            qValue: '"' + title + '"'
        }]).then(m => {
            this.getProperties();
            if (presist) {
                this.outerDoc.saveObjects();
            }
        });
        return this;
    }

    /**
     * Module helper method
     * Sets the description. If presist param set to true will, then the GenericMeasure object is saved automatically
     * @param {string} description
     * @param {boolean} presist
     * @returns {Promise<any>}
     */
    $setDescription(description: string, presist = true): GenericMeasure {
        this.applyPatches([{
            qOp: QOp.Add,
            qPath: '/qMetaDef/description',
            qValue: '"' + description + '"'
        }]).then(m => {
            this.getProperties();
            if (presist) {
                this.outerDoc.saveObjects();
            }
        });
        return this;
    }

    /**
     * Module helper method
     * Sets the tag property. If presist param set to true will, then the GenericMeasure object is saved automatically
     * @param {Array<string>} tags
     * @param {boolean} presist
     * @returns {Promise<any>}
     */
    $setTags(tags: Array<string>, presist = true): GenericMeasure {
        this.applyPatches([{
            qOp: QOp.Add,
            qPath: '/qMetaDef/tags',
            qValue: '["' + tags.join('","') + '"]'
        }]).then(m => {
            this.getProperties();
            if (presist) {
                this.outerDoc.saveObjects();
            }
        });
        return this;
    }

    /**
     * Module helper method
     * Sets the Measure expression. If presist param set to true will, then the GenericMeasure object is saved automatically
     * @param {string} expression
     * @param {boolean} presist
     * @returns {Promise<any>}
     */
    $setFormula(expression: string, presist = true): GenericMeasure {
        this.applyPatches([{
            qOp: QOp.Add,
            qPath: '/qMeasure/qDef',
            qValue: '"' + expression + '"'
        }]).then(m => {
            this.getProperties();
            if (presist) {
              this.outerDoc.saveObjects();
            }
        });
        return this;
    }

    /**
     * Module helper method
     * Sets the grouping property. If presist param set to true will, then the GenericMeasure object is saved automatically
     * @param {QGrouping} qGroup
     * @param {boolean} presist
     * @returns {Promise<any>}
     */
    $setGrouping(qGroup: QGrouping, presist = true): GenericMeasure {
        this.applyPatches([{
            qOp: QOp.Add,
            qPath: '/qMeasure/qGrouping',
            qValue: '"' + qGroup + '"'
        }]).then(m => {
            this.getProperties();
            if (presist) {
              this.outerDoc.saveObjects();
            }
        });
        return this;
    }

    /**
     * Module helper method
     * Sets the labelExpression property. If presist param set to true will, then the GenericMeasure object is saved automatically
     * @param {string} expression
     * @param {boolean} presist
     * @returns {Promise<any>}
     */
    $setLabelExpression(expression: string, presist = true): GenericMeasure {
        this.applyPatches([{
            qOp: QOp.Add,
            qPath: '/qMeasure/qLabelExpression',
            qValue: '"' + expression + '"'
        }]).then(m => {
            this.getProperties();
            if (presist) {
              this.outerDoc.saveObjects();
            }
        });
        return this;
    }

    /**
     * Module helper method
     * Sets the coloring property. If presist param set to true will, then the GenericMeasure object is saved automatically
     * @param {string} hexColor
     * @param {boolean} presist
     * @returns {Promise<any>}
     */
    $setColor(hexColor: string, presist = true): GenericMeasure {
        this.applyPatches([{
            qOp: QOp.Add,
            qPath: '/qMeasure/coloring/baseColor/color',
            qValue: '"' + hexColor + '"'
        }]).then(m => {
            this.getProperties();
            if (presist) {
              this.outerDoc.saveObjects();
            }
        });
        return this;
    }
}
