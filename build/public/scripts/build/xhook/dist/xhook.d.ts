declare namespace xhook {
    export function addEventListener(event: any, callback: any, i: any): void;
    export function removeEventListener(event: any, callback: any): void;
    export function dispatchEvent(...args: any[]): void;
    export function _has(event: any): any;
    export function listeners(event: any): any[];
    import on = addEventListener;
    export { on };
    import off = removeEventListener;
    export { off };
    import fire = dispatchEvent;
    export { fire };
    export function once(e: any, fn: any): void;
    export function destroy(): {};
}
//# sourceMappingURL=xhook.d.ts.map