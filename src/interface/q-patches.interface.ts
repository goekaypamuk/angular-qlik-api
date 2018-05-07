import {QOp} from '../enum/q-op.enum';

export interface QPatches {
    qOp: QOp;
    qPath: string;
    qValue?: string;
}
