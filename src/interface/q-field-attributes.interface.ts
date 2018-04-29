import {QFieldAttributesType} from '../enum/q-field-attributes-type.enum';

export interface QFieldAttributes {
    qType?: QFieldAttributesType;
    qnDec?: number;
    qUseThou?: number;
    qFmt?: string;
    qDec?: string;
    qThou?: string;
}
