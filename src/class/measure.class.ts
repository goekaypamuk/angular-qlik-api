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
}
