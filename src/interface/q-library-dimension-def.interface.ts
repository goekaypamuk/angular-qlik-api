import {QGrouping} from '../enum/q-grouping.enum';

export interface QLibraryDimensionDef {
    qGrouping?: QGrouping;
    qFieldDefs: Array<string>;
    qFieldLabels: Array<string>;
}