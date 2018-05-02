# Document _(Class)_

This Calss has all the methods that apply at Doc Class level and some additional methods provided by this library to facilitate the usage.

You can find full list and all details of all Doc class methods on [Qlik Help Website](https://help.qlik.com/en-US/sense-developer/April2018/apis/EngineAPI/index.html)

## Example

All standart methods defined by Qlik Doc class return a promise. 

```typescript
import {Component} from '@angular/core';
import QlikGlobalService from 'qlik-global.service';
import Document from './class/document.class';

@Component({
  selector: 'app-root'
})
export class MyApp  {

  myDoc: Document;
  constructor(qlikGlobal: QlikGlobalService ) {
      
        // Opens and returns a Document Class. 
        // _this.myDoc variable references to a Doc object where you can invoke from now on doc class methods.  
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