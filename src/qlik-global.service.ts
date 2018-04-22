import {Inject, Injectable} from '@angular/core';
import {QlikConfig} from './class/qlik-config';

@Injectable()
export class QlikGlobal {
  private webSocketLink: string;
  constructor(@Inject('config') private config: QlikConfig) {
    console.log(config.getWebsocketConnectionLink());
    this.webSocketLink = config.getWebsocketConnectionLink();
  }

}
