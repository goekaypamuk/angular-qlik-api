import {QSearchGroupOptions} from './q-search-group-options.interface';
import { QSearchGroupItemOptions} from './q-search-group-item-options.interface';

export interface QSearchPage {
    qOffset?: number;
    qCount?: number;
    qMaxNbrFieldMatches?: number;
    qGroupOptions: Array<QSearchGroupOptions>;
    qGroupItemOptions: Array<QSearchGroupItemOptions>;
}