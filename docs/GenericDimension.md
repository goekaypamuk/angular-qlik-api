# GenericMeasure _(Class)_

This Class has all the methods that apply at GenericBookmark Class level and some additional methods provided by this library to facilitate the usage.

All additional methods provided by this class start with the _$_ letter to distinguish them from the standard methods defined by Qlik Engine API.

You can find full list and all details of all Doc class methods on [Qlik Help Website](https://help.qlik.com/en-US/sense-developer/April2018/apis/EngineAPI/index.html)

## Example of use

All standart methods defined by Qlik GenericMeasure class return a promise. To access the _GenericMeasure_ class you need to use the _getMeasure_ or _createMeasure_ methods on _Doc_ class. These two methods return a _GenericBookmark_ object containing all methods on _GenericBookmark_ class.

```typescript
import { Component } from '@angular/core';
import {QlikGlobalService, Document, GenericMeasure, GenericDimension} from 'angular-qlik-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  doc: Document;
  dimension: GenericDimension;
  myMeasure: GenericMeasure;
  constructor(private qlik: QlikGlobalService) {
    this.doc = this.qlik.openDoc('Sales Discovery.qvf');

    this.doc.$getDimensionList().then( cb => {
      console.log(cb);
    });

    this.dimension = this.doc.$getDimension('BQnV')
      .$setTitle('A new Title')
      .$setDescription('My description')
      .$setTags(['Angular', 'Qlik', 'Api'])
      .$setFieldDefs(['City'])
      .$setFieldLabels(['CITY']);
  }
}
```

## Methods
### Standard Methods


