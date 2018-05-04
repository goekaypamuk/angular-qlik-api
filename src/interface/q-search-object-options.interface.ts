import {QCharEncoding} from '../enum/q-char-encoding.enum';

export interface QSearchObjectOptions {
    qAttributes: Array<string>;
    qCharEncoding?: QCharEncoding;
}
