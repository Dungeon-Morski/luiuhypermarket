/* eslint-disable @typescript-eslint/no-misused-promises */
import { CheckConfig } from './config';
import express from 'express';
/* import http from 'http'; */
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import requestIP from 'request-ip';
import axios, { AxiosResponse } from 'axios';
import { JSDOM } from 'jsdom';
import cookieparser from 'cookie-parser';
import setcookieparser from 'set-cookie-parser';

axios.defaults.withCredentials = true;

/* void (async () => {
    try {
        const httpsAgent = new HttpsProxyAgent('http://t6XrijyZ:an7DLz5N@213.139.192.39:62525');
        const axiosClient = axios.create({ httpsAgent });
        const data = await axios.get('https://api.ipify.org/', {
            proxy: {
                protocol: 'http',
                host: '213.139.192.39',
                port: 62525,
                auth: { username: 't6XrijyZ', password: 'an7DLz5N' }
            }
        });
        console.log(data.data);
    } catch (error) {
        console.log(error);
    }
})();

exit(0); */
const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

void (async () => {
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
    ]

    app.get('/public/scripts/xhook.js', (req, res) => {
        fs.readFile('./public/scripts/xhook.js', 'utf-8', function (err, data) {
            if (err != null) {
                res.send(404);
            } else {
                res.contentType('text/javascript'); // Or some other more appropriate value
                /* transform(data); // use imagination please, replace with custom code */
                res.send((data))
            }
        });
    });

    app.get('/public/scripts/script2.js', (req, res) => {
        fs.readFile('./public/scripts/build/script.js', 'utf-8', function (err, data) {
            if (err != null) {
                res.send(404);
            } else {
                res.contentType('text/javascript'); // Or some other more appropriate value
                /* transform(data); // use imagination please, replace with custom code */
                res.send((data).replace('import xhook from \'xhook\';', 'import xhook from \'./xhook.js\';'))
            }
        });
    });

    app.post('/*', async (req, res) => {
        if (excludedPathsMap.includes(req.url)) {
            return;
        }

        let data: AxiosResponse<any, any>;
        console.log(req.url);
        try {
            delete req.headers.host;
            data = await axios.create().post('https://www.luluhypermarket.com' + req.url, req.body, {
                headers: { ...req.headers, Cookie: req.headers.cookie },
                maxRedirects: 0
            });
            /* console.log(data.data); */
        } catch (error) {
            data = (error as any).response;
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
    });

    app.get('/*', async (req, res) => {
        if (excludedPathsMap.find(v => req.url.startsWith(v)) !== undefined) {
            return;
        }

        const ipAddress = requestIP.getClientIp(req);
        /* console.log(ipAddress); */
        /* console.log(req.headers); */
        /* console.log(req.cookies); */
        let data: AxiosResponse<any, any>;
        console.log(req.url);
        try {
            delete req.headers.host;
            data = await axios.create().get('https://www.luluhypermarket.com' + req.url, {
                headers: { ...req.headers, Cookie: req.headers.cookie }
            });
            /* console.log(data.data); */
        } catch (error) {
            data = (error as any).response;
            console.log(error);
        }
        const contentType: string = data?.headers['Content-Type']?.toString() ?? data?.headers['content-type']?.toString() ?? '';
        if (contentType.startsWith('text/html')) {
            const parser = new JSDOM(data.data as string);
            const document = parser.window.document;

            const base = document.createElement('base');
            base.href = 'https://www.luluhypermarket.com/';
            document.head.prepend(base);

            const script = document.createElement('script');
            script.src = 'http://localhost:3000/public/scripts/script2.js';
            script.type = 'module';
            document.head.prepend(script);

            // patch all xrefs
            const xrefs = Array.from(document.getElementsByTagName('use'));
            xrefs.forEach(v => v.setAttribute('xlink:href', `http://localhost:3000${v.getAttribute('xlink:href') ?? ''}`));

            // patch all <a> links
            const alinks = Array.from(document.getElementsByTagName('a'));
            alinks.forEach(v => {
                const attr = v.getAttribute('href');

                if (attr === null || attr === 'javascript:void(0)' || attr?.length < 1) {
                    return;
                }
                v.setAttribute('href', `http://localhost:3000${attr}`);
            });

            // patch all <form> links
            const formlinks = Array.from(document.getElementsByTagName('form'));
            formlinks.forEach(v => {
                const attr = v.getAttribute('action');

                if (attr === null || attr === 'javascript:void(0)' || attr?.length < 1) {
                    return;
                }
                v.setAttribute('action', `http://localhost:3000${attr}`);
            });

            /* if (req.url.endsWith('/cart')) {
                const t: HTMLButtonElement[] = Array.from(document.getElementsByClassName('js-continue-checkout-button')) as HTMLButtonElement[];
                // eslint-disable-next-line no-eval, no-return-assign
                t.forEach(v => v.onclick = eval('() => {location = location.pathname + "/checkout"}'));
            }
 */
            const cookies = data.headers['set-cookie'];
            cookies?.forEach(v => {
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
        /* res.sendFile(path.join(_dirname, 'public', 'index.html')); */
    });
})();
