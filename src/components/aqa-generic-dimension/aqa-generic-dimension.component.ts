import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {GenericDimension} from '../../class/generic-dimension.class';

@Component({
  selector: 'aqa-generic-dimension',
  templateUrl: './aqa-generic-dimension.component.html'
})
export class GenericDimensionComponent implements OnInit, OnDestroy {
  @Input() genericDimension: GenericDimension;
  constructor( ) {}
  ngOnInit() {
  }
  ngOnDestroy() {
  }
}
