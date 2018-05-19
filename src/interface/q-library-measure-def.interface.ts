import {QGrouping} from '../enum/q-grouping.enum';

export interface QLibraryMEasureDef {
    qLabel?: string;
    qDef?: string;
    qGrouping?: QGrouping;
    qExpressions?: Array<string>;
    qActiveExpression?: number;
}
