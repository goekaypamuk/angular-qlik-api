export class Dimension {
    definition = {
        'qDef': {
            'qFieldDefs': new Array<string>()
        },
        'qNullSuppression': true,
        'qOtherTotalSpec': {
            'qOtherMode': 'OTHER_OFF',
            'qSuppressOther': true,
            'qOtherSortMode': 'OTHER_SORT_DESCENDING',
            'qOtherCounted': {
                'qv': '5'
            },
            'qOtherLimitMode': 'OTHER_GE_LIMIT'
        }
    };
    constructor(qFieldDef: string) {
        this.definition.qDef.qFieldDefs.push(qFieldDef);
    }
}
