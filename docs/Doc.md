# Document _(Class)_

This Class has all the methods that apply at Doc Class level and some additional methods provided by this library to facilitate the usage.

You can find full list and all details of all Doc class methods on [Qlik Help Website](https://help.qlik.com/en-US/sense-developer/April2018/apis/EngineAPI/index.html)

## Example

All standart methods defined by Qlik Doc class return a promise except:
- __createMeasure__(qGenericMeasureProperties: QGenericMeasureProperties): GenericMeasure
- __getMeasure__(qId: string): GenericMeasure
- __getBookmark__(qId: string): Bookmark 
- __getField__(qFieldName: string, qStateName?: string): Field 

```typescript
import {Component} from '@angular/core';
import QlikGlobalService from 'angular-qlik-api';
import Document from 'angular-qlik-api';

@Component({
  selector: 'app-root'
})
export class MyApp  {

  myDoc: Document;
  constructor(qlikGlobal: QlikGlobalService ) {
      
        // Opens and returns a Document Class. 
        // this.myDoc variable references to a Doc object where you can invoke from now on doc class methods.  
        this.myDoc = qlikGlobal.openDoc('sales discovery.qvf');
    
        // Clear all selection in sales discovery.qvf
        this.myDoc.clearAll().then( message => {
            console.log(message);
        });
        
        // Lock all selection in state $ 
        this.myDoc.lockAll('$').then( message => {
            console.log(message);
        });
 
  }
}
```

## Custom Methods

Additional to the standard Doc class methods you will find following methods in Doc class

```
/**
  * Returns a list of measures from the current Doc object.
  * @returns {Promise<any>}
  */
  getMeasureList(): Promise<any>
```