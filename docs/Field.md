# Field _(Class)_

This Class contains all the methods that apply at Field Class level and some additional methods provided by this library to facilitate the usage.

You can find full list and all details of all Doc class methods on [Qlik Help Website](https://help.qlik.com/en-US/sense-developer/April2018/apis/EngineAPI/index.html)

## Example

All standart methods defined by Qlik Field class return a promise. To access the _Field_ class you need to use the _getField_ method on _Doc_ class. This method returns a _Field_ object containing all methods on _Field_ class.

```typescript
import { Component } from '@angular/core';
import {HyperCube, QlikGlobalService, Document, Dimension, Measure, Field} from 'angular-qlik-api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  doc: Document;
  field: Field;
  hc: HyperCube;
  constructor(private qlik: QlikGlobalService) {
    // get the document object
    this.doc = this.qlik.openDoc('Sales Discovery.qvf');

    // get the field object
    this.field = this.doc
      .getField('[Region Name]');

    // create a hypecube to observe the result
    this.hc = this.doc.createHyperCube()
      .addDimension(new Dimension('City'))
      .addMeasure(new Measure('sum([Sales Amount])'))
      .subscribe( cb => {
        console.log(cb);
      });

    // Apply a selection after 3 seconds and observe the changes on the hypercube
    setTimeout(() => {
      this.field.select('Canada').then( message => {
        console.log('Selection Applied!');
      });
    }, 3000);
  }
}

```