export interface QFileDataFormat {
    qType?: any;
    qLabel?: any;
    qQuote?: any;
    qComment?: string;
    qDelimiter?: any;
    qCodePage?: number;
    qHeaderSize?: number;
    qRecordSize?: number;
    qTabSize?: number;
    qIgnoreEOF?: boolean;
    qFixedWidthDelimiters?: string;
}