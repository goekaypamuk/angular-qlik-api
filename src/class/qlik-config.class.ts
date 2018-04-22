import {QlikConfigInterface} from '../';


export class  QlikConfig {
    useWss: boolean;
    address: string;
    port: number;
    constructor(qlikConfig: QlikConfigInterface) {
        this.useWss = qlikConfig.useWss || false;
        this.address = qlikConfig.address || 'localhost';
        this.port = qlikConfig.port || 4848;
    }

    getWebsocketConnectionLink(): string {
        const protocol = this.useWss ? 'wss' : 'ws';
        return  protocol + '://' + this.address + ':' + this.port + '/app/';
    }
}