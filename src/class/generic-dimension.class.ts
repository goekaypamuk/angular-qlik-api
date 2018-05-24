import {Document} from './document.class';
import {Deferred} from './deferred.class';
import {QPatches} from '../interface/q-patches.interface';
import {QGenericDimensionProperties} from '../interface/q-generic-dimension-properties.interface';
import {QLinkedObjectInfo} from '../interface/q-linked-object-info.interface';
import {QOp} from '../enum/q-op.enum';
import {QGrouping} from '../enum/q-grouping.enum';

export class GenericDimension {
    qProp: QGenericDimensionProperties;
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

    $$setHandle(handle: number): void {
        this.getProperties();
        this.deferred.resolve(handle);
    }

  /**
   * Applying a patch takes less time than resetting all the properties.
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
   * Returns the definition of a dimension.
   * @returns {Promise<any>}
   */
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
   * Evaluates a dimension and displays its properties, including the dynamic properties.
   * @param {QGenericDimensionProperties} qLayout
   * @returns {Promise<any>}
   */
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
   * Shows the properties of an object. Returns the identifier and the definition of the dimension
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
   * Publishes a dimension.
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
   * Sets some properties for a dimension.
   * @param {QGenericDimensionProperties} qProp
   * @returns {Promise<any>}
   */
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
                this.outerDoc.refreshAll();
                deferred.resolve(message);
            }]);
        });
        return deferred.promise;
    }

  /**
   * Unpublishes a dimension.
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
   * Sets the title. If presist set to true, then it will automatically save the document object the dimension is atached to.
   * @param {string} title
   * @param {boolean} presist
   * @returns {GenericDimension}
   */
    $setTitle(title: string, presist = true): GenericDimension {
      this.applyPatches([{
        qOp: QOp.Add,
        qPath: '/qDim/title',
        qValue: '"' + title + '"'
      }, {
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
     * Sets the field definition. If presist set to true, then it will automatically save the document object the dimension is atached to.
     * @param {Array<string>} qFieldDefs
     * @param {boolean} presist
     * @returns {GenericDimension}
     */
    $setFieldDefs(qFieldDefs: Array<string>, presist = true): GenericDimension {
      this.applyPatches([{
        qOp: QOp.Add,
        qPath: '/qDim/qFieldDefs',
        qValue: '["' + qFieldDefs.join('","') + '"]'
      }, {
        qOp: QOp.Add,
        qPath: '/qDim/qGrouping',
        qValue: '"' + (qFieldDefs.length > 1 ? QGrouping.DRILL_DOWN : QGrouping.NO_GROUPING) + '"'
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
   * Sets the field labels. If presist set to true, then it will automatically save the document object the dimension is atached to.
   * @param {Array<string>} qFieldLabels
   * @param {boolean} presist
   * @returns {GenericDimension}
   */
    $setFieldLabels(qFieldLabels: Array<string>, presist = true): GenericDimension {
      this.applyPatches([{
        qOp: QOp.Add,
        qPath: '/qDim/qFieldLabels',
        qValue: '["' + qFieldLabels.join('","') + '"]'
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
   * Sets the tags. If presist set to true, then it will automatically save the document object the dimension is atached to.
   * @param {Array<string>} tags
   * @param {boolean} presist
   * @returns {GenericDimension}
   */
    $setTags(tags: Array<string>, presist = true): GenericDimension {
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
   * Sets the description. If presist set to true, then it will automatically save the document object the dimension is atached to.
   * @param {string} description
   * @param {boolean} presist
   * @returns {GenericDimension}
   */
    $setDescription(description: string, presist = true): GenericDimension {
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
}
