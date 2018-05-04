import {QContext} from '../enum/q-context.enum';
import {QCharEncoding} from '../enum/q-char-encoding.enum';

export interface QSearchCombinationOptions {
    qSearchFields: Array<string>;
    qContext?: QContext;
    qCharEncoding?: QCharEncoding;
    qAttributes?: Array<string>;
}
