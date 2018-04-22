import { Component } from '@angular/core';
import {QlikGlobalService} from './qlik-global.service';


@Component({
  selector: 'sample-component',
  template: `<h1>Sample component</h1>`
})
export class SampleComponent {

  constructor(private ss: QlikGlobalService) {
  }

}
