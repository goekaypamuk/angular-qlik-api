export class Measure {
    definition = {
        'qLabel': '',
        'qLibraryId': '',
        'qDef': {
            'qLabel': '',
            'qDescription': '',
            'qTags': [
                'tags'
            ],
            'qGrouping': 'N',
            'qDef': ''
        }
    };
    constructor(qFieldDef: string) {
        this.definition.qDef.qDef = qFieldDef;
    }

    setQLabel(qLabel?: string): Measure {
        this.definition.qDef.qLabel = qLabel || '';
        return this;
    }
}
