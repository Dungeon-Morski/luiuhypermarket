export { xhook as default };
declare namespace xhook {
    export { EventEmitter };
    export function before(handler: any, i: any): void;
    export function after(handler: any, i: any): void;
    export function enable(): void;
    export function disable(): void;
    import XMLHttpRequest_1 = XMLHttpRequest.Native;
    export { XMLHttpRequest_1 as XMLHttpRequest };
    import fetch_1 = fetch.Native;
    export { fetch_1 as fetch };
    import headers_1 = headers.convert;
    export { headers_1 as headers };
}
declare function EventEmitter(nodeStyle: any): {
    addEventListener(event: any, callback: any, i: any): void;
    removeEventListener(event: any, callback: any): void;
    dispatchEvent(...args: any[]): void;
    _has(event: any): any;
    listeners(event: any): any[];
    on: (event: any, callback: any, i: any) => void;
    off: (event: any, callback: any) => void;
    fire: (...args: any[]) => void;
    once(e: any, fn: any): void;
    destroy(): {};
};
declare namespace XMLHttpRequest {
    export function patch(): void;
    export function unpatch(): void;
    export { Native$1 as Native };
    export { Xhook$1 as Xhook };
}
declare namespace fetch {
    export function patch(): void;
    export function unpatch(): void;
    export { Native };
    export { Xhook };
}
declare namespace headers {
    export { convert };
}
declare const Native$1: {
    new (): XMLHttpRequest;
    prototype: XMLHttpRequest;
    readonly DONE: number;
    readonly HEADERS_RECEIVED: number;
    readonly LOADING: number;
    readonly OPENED: number;
    readonly UNSENT: number;
};
declare function Xhook$1(): {
    addEventListener(event: any, callback: any, i: any): void;
    removeEventListener(event: any, callback: any): void;
    dispatchEvent(...args: any[]): void;
    _has(event: any): any;
    listeners(event: any): any[];
    on: (event: any, callback: any, i: any) => void;
    off: (event: any, callback: any) => void;
    fire: (...args: any[]) => void;
    once(e: any, fn: any): void;
    destroy(): {};
};
declare namespace Xhook$1 {
    const UNSENT: number;
    const OPENED: number;
    const HEADERS_RECEIVED: number;
    const LOADING: number;
    const DONE: number;
}
declare const Native: typeof globalThis.fetch;
declare function Xhook(input: any, init?: {
    headers: {};
}): Promise<any>;
declare function convert(headers: any, dest: any): any;
//# sourceMappingURL=xhook.d.ts.map