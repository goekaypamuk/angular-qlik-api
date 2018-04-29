import {QFilterInfoType} from '../enum/q-filter-info-type.enum';

export interface QFilterInfo {
    qType: QFilterInfoType;
    qWherePredicate: string;
}