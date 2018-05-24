import {QGrouping} from '../enum/q-grouping.enum';

export interface QLibraryDimensionDef {
    title?: string;
    qGrouping?: QGrouping;
    qFieldDefs: Array<string>;
    qFieldLabels: Array<string>;
    coloring?: any;
}
