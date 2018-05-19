# GenericMeasure _(Class)_

This Class has all the methods that apply at GenericBookmark Class level and some additional methods provided by this library to facilitate the usage.

All additional methods provided by this class start with the _$_ letter to distinguish them from the standard methods defined by Qlik Engine API.

You can find full list and all details of all Doc class methods on [Qlik Help Website](https://help.qlik.com/en-US/sense-developer/April2018/apis/EngineAPI/index.html)

## Example of use

All standart methods defined by Qlik GenericMeasure class return a promise. To access the _GenericMeasure_ class you need to use the _getMeasure_ or _createMeasure_ methods on _Doc_ class. These two methods return a _GenericBookmark_ object containing all methods on _GenericBookmark_ class.

```typescript
import {Component} from '@angular/core';
import {QlikGlobalService, Document, Bookmark} from 'angular-qlik-api';


@Component({
  selector: 'app-root'
})
export class MyApp  {

  myDoc: Document;
  myBookmark: Bookmark;
  constructor(qlikGlobal: QlikGlobalService ) {
      
        // Opens and returns a Document Class. 
        // this.myDoc variable references to a Doc object where you can invoke from now on doc class methods.  
        this.myDoc = qlikGlobal.openDoc('sales discovery.qvf');
    
        // get the list of all Bookmarks from a given Qlik Document
        this.myDoc.getBookmarks().then( cb => {
                console.log(cb);
            });
        
        // get bookmark object from current document
        // variable myBookmark contains a Bookmark class containing bookmark methods
        this.myBookmark = this.myDoc.getBookmark('JKVD');
        
        // Apply the selection of the bookmark
        // will automatically refreshes all hypercubes and list objects
        this.myBookmark.apply();
  }
}
```

## Methods
### Standard Methods


