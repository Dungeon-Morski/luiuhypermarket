"use strict";
(() => { var t = { 874: (t, e, n) => { var r, a, o; o = function () { var t, e, n = document, r = n.getElementsByTagName("head")[0], a = !1, o = "push", i = "readyState", s = "onreadystatechange", c = {}, l = {}, d = {}, u = {}; function p(t, e) { for (var n = 0, r = t.length; n < r; ++n)
        if (!e(t[n]))
            return a; return 1; } function m(t, e) { p(t, (function (t) { return e(t), 1; })); } function f(e, n, r) { e = e[o] ? e : [e]; var a = n && n.call, i = a ? n : r, s = a ? e.join("") : n, h = e.length; function w(t) { return t.call ? t() : c[t]; } function S() { if (!--h)
        for (var t in c[s] = 1, i && i(), d)
            p(t.split("|"), w) && !m(d[t], w) && (d[t] = []); } return setTimeout((function () { m(e, (function e(n, r) { return null === n ? S() : (r || /^https?:\/\//.test(n) || !t || (n = -1 === n.indexOf(".js") ? t + n + ".js" : t + n), u[n] ? (s && (l[s] = 1), 2 == u[n] ? S() : setTimeout((function () { e(n, !0); }), 0)) : (u[n] = 1, s && (l[s] = 1), void g(n, S))); })); }), 0), f; } function g(t, a) { var o, c = n.createElement("script"); c.onload = c.onerror = c[s] = function () { c[i] && !/^c|loade/.test(c[i]) || o || (c.onload = c[s] = null, o = 1, u[t] = 2, a()); }, c.async = 1, c.src = e ? t + (-1 === t.indexOf("?") ? "?" : "&") + e : t, r.insertBefore(c, r.lastChild); } return f.get = g, f.order = function (t, e, n) { !function r(a) { a = t.shift(), t.length ? f(a, r) : f(a, e, n); }(); }, f.path = function (e) { t = e; }, f.urlArgs = function (t) { e = t; }, f.ready = function (t, e, n) { t = t[o] ? t : [t]; var r, a = []; return !m(t, (function (t) { c[t] || a[o](t); })) && p(t, (function (t) { return c[t]; })) ? e() : (r = t.join("|"), d[r] = d[r] || [], d[r][o](e), n && n(a)), f; }, f.done = function (t) { f([null], t); }, f; }, t.exports ? t.exports = o() : void 0 === (a = "function" == typeof (r = o) ? r.call(e, n, e, t) : r) || (t.exports = a); }, 604: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), e.Heartbeat = void 0;
        class n {
            static startSendingHeartBeatToIframe(t) { const e = n.getHeartBeatInterval(t); setInterval((() => { parent.postMessage({ pk: Math.random(), gatewayId: "heartBeatGateway", eventId: "heartBeat", data: { location: document.location.href } }, "*"); }), e); }
            static getHeartBeatInterval(t) { return parseInt(t.getAttribute("data-smartedit-heart-beat-interval") || n.DEFAULT_HEARTBEAT_INTERVAL, 10); }
        }
        e.Heartbeat = n, n.DEFAULT_HEARTBEAT_INTERVAL = "500";
    }, 866: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = n(874);
        class a {
            static getWebappScriptElementFromDocument(t) { if (t.currentScript) {
                if (!(t.currentScript instanceof HTMLScriptElement))
                    throw new Error("getWebappScriptElementFromDocument() found non html script element");
                return t.currentScript;
            } const e = t.querySelector(`script#${a.webappScriptId}`); if (e)
                return e; const n = t.querySelectorAll(`script[src*=${a.webappScriptName}]`); if (1 !== n.length)
                throw new Error(`SmartEdit unable to load - invalid ${a.webappScriptName} script tag`); return n.item(0); }
            static extractQueryParameter(t, e) { const n = {}; return t.replace(/([?&])([^&=]+)=([^&]*)?/g, ((t, e, r, a) => (n[r] = a, ""))), n[e]; }
            static injectJS(t, e = 0) { t.length && e < t.length && a.getScriptJs()(t[e], (function () { a.injectJS(t, e + 1); })); }
            static injectCSS(t, e) { if (e)
                for (let n = 0; n < e.length; n++) {
                    if (a.isFioriWithoutDark(e[n]))
                        continue;
                    let r = `themeCss${n}`;
                    const o = e[n];
                    e[n].includes("main.css") && (r = a.smarteditMainCssId, document.getElementById(r)) || a.injectCSSHelper(r, o, t);
                } }
            static removeThemeCSS() { const t = document.getElementById("themeCss0"), e = document.getElementById("themeCss1"); t && e && (null == t || t.remove(), null == e || e.remove()); }
            static getScriptJs() { return r; }
            static injectCSSHelper(t, e, n) { const r = document.createElement("link"); r.rel = "stylesheet", r.type = "text/css", r.id = t, r.href = e, n.appendChild(r); }
            static isFioriWithoutDark(t) { return t.includes("fiori") && !t.includes("dark"); }
        }
        e.default = a, a.webappScriptId = "smartedit-injector", a.webappScriptName = "webApplicationInjector", a.smarteditMainCssId = "smarteditMainCss";
    }, 809: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = n(866);
        class a {
            static convertWhitelistingToRegexp(t) { return (t = t || []).map((t => { const e = t.trim(); if (a.whitelistingConfigRegex.test(e)) {
                const t = ["^", "$"].join(e.replace(/\./g, "\\.").replace(/\*/g, "[-a-zA-Z0-9]*"));
                return new RegExp(t);
            } throw new Error(a.whitelistingErrorMsg); })); }
            static getWhitelistFromScriptElement(t, e) { let n = [a.getSanitizedHostFromLocation(e.location)]; const o = t.getAttribute(a.allowOriginAttributeName) || ""; o && (n = n.concat(o.split(","))); let i = ""; const s = e.document.createElement("a"); s.href = t.src; const c = r.default.extractQueryParameter(s.search, a.allowOriginQueryParamName); return c && (i = decodeURI(c), i && i.split(",").forEach((t => n.push(t)))), n; }
            static isAllowed(t, e, n) { if (!/^(https?:)\/\/([-.a-zA-Z0-9]+(:[0-9]{1,5})?)$/.test(t))
                return !1; const r = e.document.createElement("a"); return r.href = t, ("https:" !== e.location.protocol || "https:" === r.protocol) && n.some((t => (t.lastIndex = 0, t.test(a.getSanitizedHostFromLocation(r))))); }
            static getSanitizedHostFromLocation(t) { const e = t.port || ("https" === t.protocol.replace(/:/g, "") ? "443" : "80"); return `${t.hostname}:${e}`; }
        }
        e.default = a, a.whitelistingConfigRegex = new RegExp(/^(([-*a-zA-Z0-9]+[.])*([-a-zA-Z0-9]+[.]))?[-a-zA-Z0-9]+(:[0-9]{1,5})$/), a.allowOriginAttributeName = "data-smartedit-allow-origin", a.allowOriginQueryParamName = "allow-origin", a.whitelistingErrorMsg = "\n\t\tAllowed whitelist characters are a-z, A-Z, 0-9, -, period, or *\n\t\tThe wildcard * can be used to represent a prefixed domain, Good example: *.domain.com:80\n\t\tbut not a suffix or port, Bad examples: subdomain.*.com subdomain.domain.com:*.\n\t\tEvery whitelisting must contain a specific port.\n\t";
    } }, e = {}; function n(r) { var a = e[r]; if (void 0 !== a)
    return a.exports; var o = e[r] = { exports: {} }; return t[r](o, o.exports, n), o.exports; } (() => {
    "use strict";
    const t = n(604), e = n(866), r = n(809), a = "smartEditBootstrap", o = e.default.getWebappScriptElementFromDocument(document);
    if (!o)
        throw new Error("Unable to location webappInjector script");
    const i = r.default.getWhitelistFromScriptElement(o, window), s = r.default.convertWhitelistingToRegexp(i);
    parent.postMessage({ pk: Math.random(), gatewayId: a, eventId: "loading", data: { location: document.location.href } }, "*"), window.addEventListener("load", (function () { parent.postMessage({ pk: Math.random(), gatewayId: a, eventId: "bootstrapSmartEdit", data: { location: document.location.href } }, "*"); })), window.addEventListener("message", (function (t) { if (t.data.gatewayId === a && "bundle" === t.data.eventId) {
        if (!r.default.isAllowed(t.origin, window, s))
            throw new Error(t.origin + " is not allowed to override this storefront.");
        !function (t, n) { if (window.smartedit = window.smartedit || {}, parent.postMessage({ gatewayId: a, eventId: "promiseAcknowledgement", data: { pk: t } }, "*"), n) {
            const t = document.getElementsByTagName("body")[0];
            !function (t) { if (t.properties)
                for (const e in t.properties)
                    t.properties.hasOwnProperty(e) && (window.smartedit[e] = t.properties[e]); }(n), function (t) { if (!(t.js && t.js.length > 0))
                return; let n; n = "string" == typeof t.js[0] ? t.js : t.js.filter((t => !t.namespaceToCheck || !window[t.namespaceToCheck])).map((t => t.src)), e.default.injectJS(n); }(n), n.css && n.css.length > 0 && (e.default.removeThemeCSS(), e.default.injectCSS(t, n.css));
        } parent.postMessage({ gatewayId: a, eventId: "promiseReturn", data: { pk: t, type: "success" } }, "*"); }(t.data.pk, t.data.data.resources);
    } }), !1), window.onbeforeunload = function () { parent.postMessage({ pk: Math.random(), gatewayId: a, eventId: "unloading", data: { location: document.location.href } }, "*"); }, t.Heartbeat.startSendingHeartBeatToIframe(o);
})(); })();
(function () {
    window.smartedit = window.smartedit || {};
    var onReprocessListeners = [];
    window.smartedit.reprocessPage = function () {
        onReprocessListeners.forEach(function (callbackFn) {
            try {
                callbackFn();
            }
            catch (e) { }
        });
    };
    window.smartedit.addOnReprocessPageListener = function (callbackFn) {
        if (!_isFunction(callbackFn)) {
            throw new Error('SmartEditAddon - Cannot register page reprocessing listener. Provided callback must be a function.');
        }
        onReprocessListeners.push(callbackFn);
    };
    function _isFunction(obj) { return (obj && typeof obj === 'function'); }
})();
;
