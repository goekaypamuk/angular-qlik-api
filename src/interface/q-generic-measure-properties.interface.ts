import {QInfo} from './q-info.interface';
import {QLibraryMeasureDef} from './q-library-measure-def.interface';

export interface QGenericMeasureProperties {
    qInfo?: QInfo;
    qMeasure?: QLibraryMeasureDef;
    qMetaDef?: any;
}
