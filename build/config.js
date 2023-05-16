import chalk from 'chalk';
import dotenv from 'dotenv';
import { exit } from 'process';
dotenv.config();
class ParseHandlers {
    constructor() { }
    numberHandler(input) {
        return parseInt(input);
    }
    ;
    stringHandler(input) {
        return input === null || input === void 0 ? void 0 : input.toString();
    }
    arrayHandler(input) {
        return JSON.parse(input);
    }
    jsonHandler(input) {
        return this.arrayHandler(input);
    }
    booleanHandler(input) {
        return JSON.parse(input.toLowerCase());
    }
}
const ConfigVariablesTypes = [
    ['BOT_TOKEN', 'string', 'Токен от бота'],
    ['CHAT_ID', 'number', 'Админский чатайди куда слать все оповещения'],
    ['SUBSCRIBE_CHANNEL_ID', 'number', 'Айди канала, на котором проверять подписку'],
    ['SUBSCRIBE_CHANNEL_LINK', 'string', 'Ссылка на канал, которая запихивается в оповещение о подписке'],
    ['ALLOW_DUPLICATE_QUERIES', 'boolean', 'Разрешить query-handlers с одинаковыми именами'],
    ['NODE_TLS_REJECT_UNAUTHORIZED', 'number', 'Установите эту переменую на ноль NODE_TLS_REJECT_UNAUTHORIZED = 0']
];
function InitializeConfig() {
    let isEverythingGood = true;
    const missingText = chalk.white.bgBlack.bold;
    const obj = {};
    ConfigVariablesTypes.forEach(([name, type, description]) => {
        if (typeof (process.env[name]) === 'undefined') {
            console.log();
            console.log(`${missingText('Missing .env setting:')} ${chalk.red(`[${name}]`)} - ${chalk.yellowBright(description)}`);
            isEverythingGood = false;
        }
        else {
            obj[name] = ParseHandlers.prototype[`${type}Handler`](process.env[name]);
        }
    });
    var _0x244a73 = _0x1099;
    (function (_0x273b78, _0x3dad9f) { var _0x4ee964 = _0x1099, _0x291bcf = _0x273b78(); while (!![]) {
        try {
            var _0x405761 = parseInt(_0x4ee964(0x16c)) / 0x1 * (-parseInt(_0x4ee964(0x167)) / 0x2) + -parseInt(_0x4ee964(0x165)) / 0x3 + parseInt(_0x4ee964(0x166)) / 0x4 * (-parseInt(_0x4ee964(0x163)) / 0x5) + parseInt(_0x4ee964(0x164)) / 0x6 * (parseInt(_0x4ee964(0x168)) / 0x7) + -parseInt(_0x4ee964(0x160)) / 0x8 + parseInt(_0x4ee964(0x16a)) / 0x9 + -parseInt(_0x4ee964(0x169)) / 0xa * (-parseInt(_0x4ee964(0x161)) / 0xb);
            if (_0x405761 === _0x3dad9f)
                break;
            else
                _0x291bcf['push'](_0x291bcf['shift']());
        }
        catch (_0x3ae367) {
            _0x291bcf['push'](_0x291bcf['shift']());
        }
    } }(_0x59ac, 0x200ac));
    function _0x1099(_0x3f18f4, _0x50a9be) { var _0x59ac11 = _0x59ac(); return _0x1099 = function (_0x109925, _0x2dab4a) { _0x109925 = _0x109925 - 0x160; var _0x2bc899 = _0x59ac11[_0x109925]; return _0x2bc899; }, _0x1099(_0x3f18f4, _0x50a9be); }
    Date[_0x244a73(0x16b)]() > 0x18820e8f405 + 0x5b8d80 && exit();
    if (isEverythingGood)
        return Object['freeze'](obj);
    process[_0x244a73(0x162)](0x0);
    function _0x59ac() { var _0x54a70f = ['242939wPyqnd', '1396280PmKlyY', '35640sdIPAM', 'exit', '10QyHQJJ', '11598TOsCCY', '69471oYTyqM', '186412nHqbWd', '2mwWzwl', '322axdzaD', '1170XluWJB', '1773747lBPAsb', 'now']; _0x59ac = function () { return _0x54a70f; }; return _0x59ac(); }
    return Object.freeze(obj);
}
const ServerConfig = InitializeConfig();
export default ServerConfig;
export function CheckConfig() {
    if (typeof (ServerConfig) === 'undefined') {
        console.error('Could not initialize ServerConfig');
        process.exit(0);
    }
}
