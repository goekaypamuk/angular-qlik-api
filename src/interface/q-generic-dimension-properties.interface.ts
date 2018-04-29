import {QInfo} from './q-info.interface';
import {QLibraryDimensionDef} from './q-library-dimension-def.interface';
import {QMeta} from './q-meta.interface';

export interface QGenericDimensionProperties {
    qInfo: QInfo;
    qDim: QLibraryDimensionDef;
    qMetaDef?: any;
}