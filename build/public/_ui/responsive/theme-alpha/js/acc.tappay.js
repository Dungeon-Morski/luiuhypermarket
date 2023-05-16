"use strict";
ACC.tapPay = { _autoload: ["bindTapPayRadioClick", "bindTapPayPromoPopupClose", "bindTapPopupPay", "bindTapSaveCardPopupPay"], binNumber: "", tempToken: "", fistBin: true, bindTapPopupPay: function () { $('#tapPopupPay').on('click', function () { if (ACC.tapPay.tempToken != "") {
        ACC.tapPay.tapPayButtonClick(ACC.tapPay.tempToken);
    } }); }, bindTapPayPromoPopupClose: function () { $('#tapPromoClose').on('click', function () { $('.loading-overlay').show(); ACC.payment.removeCardPromotion(); }); }, bindTapPayRadioClick: function () { $('#js-tappay').on('click', function () { if ($('#tappay').hasClass('d-none')) {
        $('#tap-element-container').html('');
        ACC.tapPay.tapFormInitialize();
    } }); }, bindTapPayPromoClose: function () { $('#tapPayPromotion').on('hidden.bs.modal', function (e) { if (ACC.tapPay.tempToken != "") {
        ACC.tapPay.tapPayButtonClick(ACC.tapPay.tempToken);
    } }); }, bindTapSaveCardPopupPay: function () { $('#paymentProfileModal').on('click', function () { $('#tap-element-container').html(''); ACC.tapPay.tapFormInitialize(); }); }, promotionByToken: function (token) {
        $('.loading-overlay').show();
        $.ajax({ contentType: "application/json; charset=utf-8", dataType: "json", type: "POST", url: ACC.config.encodedContextPath + "/checkout/multi/payment-method/tappay/promotionByToken", data: JSON.stringify(token), success: function (cartData) {
                console.log(cartData);
                $('.loading-overlay').hide();
                if (cartData) {
                    ACC.payment.updateCardBinSection(cartData);
                    ACC.payment.updateCartDetailsSection(cartData);
                    if (cartData.groupedEntries) {
                        cartData.groupedEntries.forEach(function (group) { $('.js-groupEntryTotal-' + group.code).html(group.totalGroupPrice.formattedValue); $('.js-groupEntryTotal-' + group.code).addClass('pricing-value'); });
                    }
                    $('.js-amountPayable').html(cartData.amountTobePaid);
                    if (null != cartData.totalDiscounts && cartData.totalDiscounts !== undefined) {
                        if (cartData.totalDiscounts.value > 0) {
                            ACC.tapPay.tempToken = token;
                            $('#tapDiscount').html(cartData.totalDiscounts.formattedValue);
                            $('#tapTotalPay').html(cartData.totalPrice.formattedValue);
                            if (cartData.amountTobePaid != null && cartData.totalPrice != null) {
                                $('#tapTotalPay').html("<small>" + cartData.totalPrice.currencyIso + "</small>" + cartData.amountTobePaid);
                            }
                            let timeout = 60 * 1000;
                            if (ACC.config.giftCardRevertTime !== '') {
                                timeout = parseInt(ACC.config.giftCardRevertTime) * 60 * 1000;
                                if (timeout - (60 * 1000) >= (60 * 1000)) {
                                    timeout = timeout - (60 * 1000);
                                }
                            }
                            let timer = setTimeout(function () { let isShown = $('#tapPayPromotion').hasClass('in') || $('#tapPayPromotion').hasClass('show'); if (isShown) {
                                $('#tapPromoClose').click();
                            } }, timeout);
                            $('#tapPayPromotion').modal('show');
                        }
                        else {
                            ACC.tapPay.tapPayButtonClick(token);
                        }
                    }
                    else {
                        ACC.tapPay.tapPayButtonClick(token);
                    }
                }
            }, error: function (e) { $('.loading-overlay').hide(); console.log("error: " + e); } });
    }, tapPayButtonClick: function (token) {
        $('.loading-overlay').show();
        $.ajax({ url: ACC.config.encodedContextPath + '/checkout/multi/payment-method/checkAndExtendReservations', type: 'GET', success: function (response) {
                $('.loading-overlay').hide();
                if (response.success == true) {
                    ACC.tapPay.tapTokenHandler(token);
                }
                else {
                    $('.loading-overlay').show();
                    var dataForDisplayOnModal = response;
                    $.ajax({ type: "POST", contentType: 'application/json', url: ACC.config.encodedContextPath + '/checkout/multi/payment-method/displayReservationResults', data: JSON.stringify(dataForDisplayOnModal), success: function (result) { $('.loading-overlay').hide(); $('#CheckoutDeliverySlotAndStockReservationModal').html(result); $('#CheckoutDeliverySlotAndStockReservationModal').removeClass('cboxElement'); $('#CheckoutDeliverySlotAndStockReservationModal').modal('show'); }, error: function (error) { $('.loading-overlay').hide(); console.error(error); window.location.href = ACC.config.encodedContextPath + '/cart'; } });
                }
            }, error: function (error) { $('.loading-overlay').hide(); console.error(error); } });
    }, tapTokenHandler: function (token) {
        $('.loading-overlay').show();
        $.ajax({ contentType: "application/json; charset=utf-8", dataType: "json", type: "POST", url: ACC.config.encodedContextPath + "/checkout/multi/payment-method/tappay/chargeByToken", data: JSON.stringify(token), success: function (data) {
                console.log(data);
                if (data != null && data.status != null && data.redirect != null && data.redirect.url != null && data.status === 'CAPTURED') {
                    window.location.href = data.redirect.url;
                }
                else if (data != null && data.status != null && data.status === 'INITIATED' && data.transaction != null && data.transaction.url != null) {
                    window.location.href = data.transaction.url;
                }
                else {
                    window.location.href = ACC.config.encodedContextPath + "/checkout/multi/payment-method/tappay/placeTapPayOrder";
                }
            }, error: function (e) { $('.loading-overlay').hide(); console.log("error: " + e); } });
    }, tapFormInitialize: function () {
        $('.loading-overlay').show();
        var tap = Tapjsli(ACC.config.tapPayPublicKey + "");
        var elements = tap.elements({});
        var style = { base: { color: '#535353', lineHeight: '18px', fontFamily: 'sans-serif', fontSmoothing: 'antialiased', fontSize: '16px', '::placeholder': { color: 'rgba(0, 0, 0, 0.26)', fontSize: '15px' } }, invalid: { color: 'red' } };
        var labels = { cardNumber: "Card Number", expirationDate: "MM/YY", cvv: "CVV", cardHolder: "Card Holder Name" };
        var paymentOptions = { currencyCode: ["KWD", "USD", "SAR", "AED"], labels: labels, TextDirection: 'ltr' };
        var card = elements.create('card', { style: style }, paymentOptions);
        card.mount('#tap-element-container');
        card.addEventListener('change', function (event) {
            if (event.loaded) {
                console.log("UI loaded :" + event.loaded);
                console.log("current currency is :" + card.getCurrency());
                $('#tap-btn').attr('disabled', false);
            }
            var displayError = document.getElementById('tap-error-handler');
            if (event.error) {
                displayError.textContent = event.error.message;
            }
            else {
                displayError.textContent = '';
            }
            $('.loading-overlay').hide();
        });
        var form = document.getElementById('tap-form-container');
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            tap.createToken(card).then(function (result) {
                console.log(result);
                if (result.error) {
                    var errorElement = document.getElementById('tap-error-handler');
                    errorElement.textContent = result.error.message;
                }
                else {
                    var errorElement = document.getElementById('success');
                    var tokenElement = document.getElementById('token');
                    tokenElement.textContent = result.id;
                    console.log(result.id);
                    var isProfilePage = document.getElementById('isProfilePage');
                    if (isProfilePage) {
                        ACC.tapPay.verifyTappayCard(result);
                    }
                    else {
                        ACC.tapPay.promotionByToken(result);
                    }
                }
            });
        });
    }, verifyTappayCard: function (token) {
        $('.loading-overlay').show();
        $.ajax({ contentType: "application/json; charset=utf-8", dataType: "json", type: "POST", url: ACC.config.encodedContextPath + "/my-account/verifyCard", data: JSON.stringify(token), success: function (data) {
                console.log(data);
                if (data != null && data.status != null && data.redirect != null && data.redirect.url != null && data.status === 'VALID') {
                    window.location.href = data.redirect.url;
                }
                else if (data != null && data.status != null && data.status === 'INITIATED' && data.transaction != null && data.transaction.url != null) {
                    window.location.href = data.transaction.url;
                }
                else {
                    window.location.href = ACC.config.encodedContextPath + "/my-account/verifyCard/redirect?isInvalid=true";
                }
            }, error: function (e) { $('.loading-overlay').hide(); console.log("error: " + e); } });
    } };
