import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {GenericMeasure} from '../../class/generic-measure.class';

@Component({
  selector: 'aqa-generic-measure',
  templateUrl: './aqa-generic-measure.component.html'
})
export class GenericMeasureComponent implements OnInit, OnDestroy {
  @Input() genericMeasure: GenericMeasure;
  constructor( ) {}
  ngOnInit() {
  }
  ngOnDestroy() {
  }
}
