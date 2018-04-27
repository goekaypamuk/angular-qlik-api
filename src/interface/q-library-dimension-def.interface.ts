import {QGrouping} from '../enum/q-grouping';

export interface QLibraryDimensionDef {
    qGrouping?: QGrouping;
    qFieldDefs: Array<string>;
    qFieldLabels: Array<string>;
}