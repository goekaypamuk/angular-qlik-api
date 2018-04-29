import {QInfo} from './q-info.interface';
import {QLibraryMEasureDef} from './q-library-measure-def.interface';

export interface QGenericMeasureProperties {
    qInfo: QInfo;
    qMeasure: QLibraryMEasureDef;
    qMetaDef?: any;
}
