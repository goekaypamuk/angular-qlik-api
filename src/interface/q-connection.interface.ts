import {QType} from '../enum/q-connection-type.enum';
import {QMeta} from './q-meta.interface';
import {QLogon} from '../';

export interface QConnection {
    qId?: string;
    qName: string;
    qConnectionString: string;
    qType: QType | string;
    qUserName?: string;
    qPassword?: string;
    qMeta?: QMeta;
    qLogOn?: QLogon;
}
