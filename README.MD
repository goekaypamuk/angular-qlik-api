# angular-qlik-api

AngulerQlikEngineApi is the angular wrapper for Qlik Engine API. It facilitates the usage and handles the synchronization.


The Qlik Engine API is a WebSocket protocol that uses JSON to pass information between the Qlik Sense engine and the clients. The Qlik Engine API consists of a set of objects representing apps, lists, and so on. These objects are organized in a hierarchical structure. When you send requests to the API, you perform actions on these objects.

The Qlik Engine API can be used for:

- creating apps and loading data
- building stories
- getting system information

Typical situations where you would use the Qlik Engine API include:

- building a specialized client as a standalone or web application
- automating repetitive or complicated updates or changes to apps

To work with the Qlik Engine API, you can use any language or tool that supports WebSockets and can parse JSON. JavaScript is a common and obvious choice, because of its built-in JSON support, and because there are a number of libraries available to make it easier to work with WebSockets.


## Installation

To install this library, run:

```bash
$ npm install angular-qlik-api --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install angular-qlik-api
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import AngularQlikApiModule library
import {AngularQlikApiModule, QlikConfig} from './angular-qlik-api';

const qlikConfig = new QlikConfig({
  useWss: false,
  address: 'localhost',
  port: 4248
});


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Specify  library as an import
    AngularQlikApiModule.forRoot(qlikConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```typescript
@Component({
  selector: 'app-root'
})
export class MyApp implements OnDestroy {
  myHyperCube: HyperCube;
  constructor(qlikGlobal: QlikGlobalService ) {
    this.myHyperCube = this.qlikGlobal.openDoc('sales.qvf')
         .createHyperCube()
         .addDimension(new Dimension('=name'))
         .addMeasure(new Measure('sum(cost)'))
         .subscribe( reply => {
            console.log(reply);
         });
  }

  ngOnDestroy() {
    this.myHyperCube.unsubscribe();
  }
}
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```
## Contribution
This library is still under cunstruction and we are looking for contributors. 
If you like to contribute plase contact me: goekaypamuk@gmai.com

## License

MIT © [Gökay Pamuk](mailto:goekaypamuk@gmail.com)
