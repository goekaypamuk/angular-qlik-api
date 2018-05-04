import {QGroupType} from '../enum/q-group-type.enum';

export interface QSearchGroupOptions {
    qGroupType?: QGroupType;
    qOffset?: number;
    qCount?: number;
}
