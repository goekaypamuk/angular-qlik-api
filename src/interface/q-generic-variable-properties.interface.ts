import {QInfo} from './q-info.interface';
import {QFieldAttributes} from './q-field-attributes.interface';

export interface QGenericVariableProperties {
    qInfo: QInfo;
    qMetaDef?: any;
    qName: string;
    qComment?: string;
    qNumberPresentation: QFieldAttributes;
    qIncludeInBookmark?: boolean;
    qDefinition: string;
}
