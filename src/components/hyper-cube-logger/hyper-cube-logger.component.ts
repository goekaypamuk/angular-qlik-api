import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {HyperCube} from '../../class/hyper-cube.class';

@Component({
  selector: 'hyper-cube-logger',
  templateUrl: './hyper-cube-logger.component.html'
})
export class HyperCubeLoggerComponent implements OnInit, OnDestroy {
    @Input() myHyperCube: HyperCube;
    @Input() tableClass: string;
    result: any;
    constructor( ) {}

    ngOnInit() {
        this.myHyperCube
            .subscribe( reply => {
                this.result = reply.result;
            });
    }

    ngOnDestroy() {
        this.myHyperCube
            .unsubscribe();
    }
}
