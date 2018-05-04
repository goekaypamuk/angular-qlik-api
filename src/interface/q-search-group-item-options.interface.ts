import {QGroupItemType} from '../enum/q-group-item-type.enum';

export interface QSearchGroupItemOptions {
    qGroupItemType?: QGroupItemType;
    qOffset?: number;
    qCount?: number;
}