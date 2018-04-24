export class Connection {
    qId: string;
    qName: string;
    qMeta: any;
    qConnectionString: string;
    qUserName: string;
    qPassword: string;
    qType: string;

    constructor(qId: string, qName: string, qMeta: any, qConnectionString: string, qUserName: string, qPassword: string, qType: string) {
        this.qId = qId;
        this.qName = qName;
        this.qMeta = qMeta;
        this.qConnectionString = qConnectionString;
        this.qUserName = qUserName;
        this.qPassword = qPassword;
        this.qType = qType;
    }
}