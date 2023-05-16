declare namespace mediator {
    export const trackers: {};
    export { publish };
    export { publishAll };
    export { subscribe };
}
declare function publish(tracker: any, ...args: any[]): any;
declare function publishAll(...args: any[]): any;
declare function subscribe(tracker: any, fn: any): any;
//# sourceMappingURL=analyticsmediator.d.ts.map