export class Deferred<T> {
    promise: Promise<T>;
    resolve: any;
    reject: any;
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.reject = reject;
            this.resolve = resolve;
        });
    }
}
