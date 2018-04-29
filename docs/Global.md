# QlikGlobalService

This services has all the methods that apply at global level.

You can find full detail of all global methods on [Qlik Help Website](https://help.qlik.com/en-US/sense-developer/April2018/apis/EngineAPI/index.html)

## Example

All methods on GlobalService except _openDoc_ will return a promise when method call is resolved. The _openDoc_ method will return a _Document_ class, enabling from there on to invoke methods on _Document_ level. 

```typescript
@Component({
  selector: 'app-root'
})
export class MyApp  {

  myDoc: Document;
  constructor(qlikGlobal: QlikGlobalService ) {
      
        // Opens and returns a Document Class. 
        this.myDoc = qlikGlobal.openDoc('sales discovery.qvf');
    
        // Get engine version
        qlikGlobal.engineVersion().then( message => {
          console.log(message);
        });
    
        // get document list
        qlikGlobal.getDocList().then( message => {
          console.log(message);
        });
    
        // create a new app with the name <my new  app>
        qlikGlobal.createApp('my new app').then( message => {
          console.log(message);
        });
  }
}
```