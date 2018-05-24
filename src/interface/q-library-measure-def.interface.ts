import {QGrouping} from '../enum/q-grouping.enum';

export interface QLibraryMeasureDef {
    qLabel?: string;
    qDef?: string;
    qGrouping?: QGrouping;
    qExpressions?: Array<string>;
    qActiveExpression?: number;
    qLabelExpression?: string;
}
