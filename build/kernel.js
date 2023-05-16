import { __awaiter } from "tslib";
import { CheckConfig } from './config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import requestIP from 'request-ip';
import axios from 'axios';
import { JSDOM } from 'jsdom';
import cookieparser from 'cookie-parser';
import setcookieparser from 'set-cookie-parser';
axios.defaults.withCredentials = true;
const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);
void (() => __awaiter(void 0, void 0, void 0, function* () {
    CheckConfig();
    const app = express();
    const port = 3000;
    app.use(cors({ origin: ['http://localhost:3000', 'localhost', 'luluhypermarket.com'] }));
    app.use(cookieparser());
    app.use('/_ui/', express.static(path.join(_dirname, 'public', '_ui')));
    app.use('/cdn-cgi/', express.static(path.join(_dirname, 'public', 'cdn-cgi')));
    app.use('/wro/', express.static(path.join(_dirname, 'public', 'wro')));
    app.use('/public/scripts', express.static(path.join(_dirname, 'public', 'scripts', 'build')));
    app.use('/public/styles', express.static(path.join(_dirname, 'public', 'styles')));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.listen(port, '0.0.0.0');
    app.get('/_api/test', (req, res) => {
        res.send('test');
    });
    const excludedPathsMap = [
        '/public/scripts/xhook.js',
        '/public/scripts/script2.js',
        '/_api/test',
        '/cdn-cgi/',
        '/_ui/'
    ];
    app.get('/public/scripts/xhook.js', (req, res) => {
        fs.readFile('./public/scripts/xhook.js', 'utf-8', function (err, data) {
            if (err != null) {
                res.send(404);
            }
            else {
                res.contentType('text/javascript');
                res.send((data));
            }
        });
    });
    app.get('/public/scripts/script2.js', (req, res) => {
        fs.readFile('./public/scripts/build/script.js', 'utf-8', function (err, data) {
            if (err != null) {
                res.send(404);
            }
            else {
                res.contentType('text/javascript');
                res.send((data).replace('import xhook from \'xhook\';', 'import xhook from \'./xhook.js\';'));
            }
        });
    });
    app.post('/*', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        if (excludedPathsMap.includes(req.url)) {
            return;
        }
        let data;
        console.log(req.url);
        try {
            delete req.headers.host;
            data = yield axios.create().post('https://www.luluhypermarket.com' + req.url, req.body, {
                headers: Object.assign(Object.assign({}, req.headers), { Cookie: req.headers.cookie }),
                maxRedirects: 0
            });
        }
        catch (error) {
            data = error.response;
            console.log(error);
        }
        if (data.headers !== undefined) {
            Object.keys(data.headers).forEach(v => res.setHeader(v, data.headers[v]));
        }
        if (data.status === 302) {
            res.redirect(data.headers.location);
            return;
        }
        res.send(data.data);
        console.log(req.body);
    }));
    app.get('/*', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d;
        if (excludedPathsMap.find(v => req.url.startsWith(v)) !== undefined) {
            return;
        }
        const ipAddress = requestIP.getClientIp(req);
        let data;
        console.log(req.url);
        try {
            delete req.headers.host;
            data = yield axios.create().get('https://www.luluhypermarket.com' + req.url, {
                headers: Object.assign(Object.assign({}, req.headers), { Cookie: req.headers.cookie })
            });
        }
        catch (error) {
            data = error.response;
            console.log(error);
        }
        const contentType = (_d = (_b = (_a = data === null || data === void 0 ? void 0 : data.headers['Content-Type']) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : (_c = data === null || data === void 0 ? void 0 : data.headers['content-type']) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : '';
        if (contentType.startsWith('text/html')) {
            const parser = new JSDOM(data.data);
            const document = parser.window.document;
            const base = document.createElement('base');
            base.href = 'https://www.luluhypermarket.com/';
            document.head.prepend(base);
            const script = document.createElement('script');
            script.src = 'http://localhost:3000/public/scripts/script2.js';
            script.type = 'module';
            document.head.prepend(script);
            const xrefs = Array.from(document.getElementsByTagName('use'));
            xrefs.forEach(v => { var _a; return v.setAttribute('xlink:href', `http://localhost:3000${(_a = v.getAttribute('xlink:href')) !== null && _a !== void 0 ? _a : ''}`); });
            const alinks = Array.from(document.getElementsByTagName('a'));
            alinks.forEach(v => {
                const attr = v.getAttribute('href');
                if (attr === null || attr === 'javascript:void(0)' || (attr === null || attr === void 0 ? void 0 : attr.length) < 1) {
                    return;
                }
                v.setAttribute('href', `http://localhost:3000${attr}`);
            });
            const formlinks = Array.from(document.getElementsByTagName('form'));
            formlinks.forEach(v => {
                const attr = v.getAttribute('action');
                if (attr === null || attr === 'javascript:void(0)' || (attr === null || attr === void 0 ? void 0 : attr.length) < 1) {
                    return;
                }
                v.setAttribute('action', `http://localhost:3000${attr}`);
            });
            const cookies = data.headers['set-cookie'];
            cookies === null || cookies === void 0 ? void 0 : cookies.forEach(v => {
                const cook = setcookieparser.parseString(v);
                res.cookie(cook.name, cook.value, {
                    domain: cook.domain,
                    expires: cook.expires,
                    maxAge: cook.maxAge,
                    httpOnly: cook.httpOnly
                });
            });
            data.data = parser.serialize();
        }
        if (data.headers !== undefined) {
            Object.keys(data.headers).forEach(v => res.setHeader(v, data.headers[v]));
        }
        res.send(data.data);
    }));
}))();
