"use strict";
$(document).ready(function () {
    $('.checkout-checkbox').on("click", ".square-radio", function () { $(this).toggleClass("square-radio--clicked"); if ($(this).attr('class') == 'square-radio') {
        $(this).find('.plp-categories-title').css('color', '#54545d');
    }
    else {
        $(this).find('.plp-categories-title').css('color', '#27272d');
    } });
    $('ul.setup-panel li.active a').trigger('click');
    $('#activate-step-3').on('click', function (e) { $('ul.setup-panel li:eq(2)').removeClass('disabled'); $('ul.setup-panel li a[href="#step-3"]').trigger('click'); $('.shiiping-details-show').hide(); $('.ordersummary-right-show').show(); $(this).remove(); });
    $('#checkout-section').find('.nav-pills li').click(function () { var liTag = $(this).find('a').attr('href'); if (liTag == "#step-1") {
        $('.shiiping-details-show').show();
        $('.ordersummary-right-show').hide();
    }
    else if (liTag == "#step-3") {
        $('.shiiping-details-show').hide();
        $('.ordersummary-right-show').show();
    } });
    $('#activate-step-1').on('click', function (e) { $('ul.setup-panel li:eq(0)').removeClass('disabled'); $('ul.setup-panel li a[href="#step-1"]').trigger('click'); $(this).remove(); });
    $('.address-box3').click(function () { $('#add-newadd-div').css('display', 'inline-block'); });
    $('.chk-save-btn').click(function () { });
    $('.shipping-options-sub-content').click(function () { $('.shipping-options-sub-content').each(function () { $('.shipping-options-sub-content').find('.circle-radio').removeClass('circle-radio--clicked'); $(this).removeClass('active'); }); $(this).find('.circle-radio').addClass('circle-radio--clicked'); $(this).addClass('active'); });
    $("#chkout-newadd-form").submit(function (e) { e.preventDefault(); if ($(this).valid()) {
        alert('Validate');
    } });
    $('#chkout-newadd-form input[name*="chkfirstname"],#chkout-newadd-form input[name*="chklastname"]').keypress(function (e) { var regex = new RegExp("^[a-zA-Z]+$"); var str = String.fromCharCode(!e.charCode ? e.which : e.charCode); if (regex.test(str)) {
        return true;
    }
    else {
        return false;
    } });
    $('#chkout-newadd-form input[name*="chkMblNum"]').keypress(function (e) { if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        return false;
    } });
    $('#AddEditAddressModal').on('keyup', '#lulu-address-edit-form [data-toggle="floatLabel"],#lulu-address-add-form [data-toggle="floatLabel"]', function () { if ($(this).val()) {
        $(this).closest('.form-group').find('.inner-text').css({ "opacity": "1", "top": "3px" });
    }
    else {
        $(this).closest('.form-group').find('.inner-text').css({ "opacity": "0", "top": "18px" });
    } });
    $('#payment-section .nav-tabs a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href");
        if (target == '#visaCheckout') {
            $('.visa-checkout-btn').show();
        }
        else {
            $('.visa-checkout-btn').hide();
        }
        if (target == '#debitCreditCard') {
            $('#visaDebitCheckoutConfirmAndPay').prop('disabled', true);
        }
        var actionclassName = $(target).data('paymentActionClass');
        if (actionclassName == 'js-check-deliveryslot-stock-reservation') {
            $('#visaDebitCheckoutConfirmAndPay').prop('disabled', false);
        }
        else { }
    });
    $('#visaDebitCheckoutConfirmAndPay').click(function (e) { var activeTabID = $('#payment-section').find('li.active').find('a').attr('href'); var creditButton = $(activeTabID).find('a.js-check-deliveryslot-stock-reservation'); if (typeof creditButton !== "undefined" && creditButton.length > 0) {
        creditButton.click();
    }
    else {
        $(activeTabID).find('button.submit_silentOrderPostForm').click();
    } });
    $('#visaDebitCheckoutConfirmAndPay2').click(function (e) { var activeTabID = $('#payment-section').find('li.active').find('a').attr('href'); var creditButton = $(activeTabID).find('a.js-check-deliveryslot-stock-reservation'); if (typeof creditButton !== "undefined" && creditButton.length > 0) {
        creditButton.click();
    }
    else {
        $(activeTabID).find('button.submit_silentOrderPostForm').click();
    } });
    $('#myaccount-sec .nav-stacked li.brand-nav ').click(function () { $('.nav-stacked li.brand-nav ').removeClass("active"); $(this).addClass("active"); });
});
$(document).ready(function () {
    $("#profile_mobilePhone").attr({ "type": "tel", });
    $("#profile_mobilePhone").intlTelInput({ initialCountry: $('.country-label').html() });
    $("#profile_mobilePhone").on("keypress keyup", function (event) {
        if ($(this).val().search(/^0/) != -1) {
            $(this).val(null);
        }
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    });
    $('input[name=firstName]').on("keypress keyup", function (event) { var fname = new RegExp("^[a-zA-Z ]+$"); var key = String.fromCharCode(!event.charCode ? event.which : event.charCode); if (!fname.test(key)) {
        event.preventDefault();
        return false;
    } });
    $('input[name=lastName]').on("keypress keyup", function (event) { var lname = new RegExp("^[a-zA-Z ]+$"); var key = String.fromCharCode(!event.charCode ? event.which : event.charCode); if (!lname.test(key)) {
        event.preventDefault();
        return false;
    } });
    $("#feedback_mobileNumber").attr({ "type": "tel", });
    $("#feedback_mobileNumber").intlTelInput({ initialCountry: ACC.config.customerPreference.country, formatOnDisplay: false });
    $("#feedback_mobileNumber").on("keypress keyup", function (event) {
        if ($(this).val().search(/^0/) != -1) {
            $(this).val(null);
        }
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    });
    $('#profile\\.birthDate').mask('99/99/9999', { placeholder: "MM/DD/YYYY" });
    $(".profile-mobile-verification-error-msg").html("");
    $(".profile-mobile-verification-error-msg").addClass("d-none");
    $(".verified-profile-text-lable").removeClass("d-none");
    var isPhoneVerificationEnabledelement = document.getElementById("isPhoneVerificationEnabled");
    var isPhoneVerifiedElement = document.getElementById("isPhoneVerified");
    if (isPhoneVerificationEnabledelement != null && isPhoneVerifiedElement != null) {
        var isPhoneVerificationEnabled = isPhoneVerificationEnabledelement.value;
        var isPhoneVerified = isPhoneVerifiedElement.value;
        if (isPhoneVerificationEnabled && !(isPhoneVerified.toUpperCase() == "TRUE")) {
            $(".verify-profile-mobile-number").removeClass("d-none");
        }
    }
    function showOTPForUpdate() {
        var emailBool = $('#updateProfileForm .add-address-mail-input').attr('value');
        var smsBool = $('#updateProfileForm .add-address-sms-input').attr('value');
        if (typeof emailBool === 'undefined') {
            emailBool = true;
        }
        if (typeof smsBool === 'undefined') {
            smsBool = true;
        }
        var updateProfileForm = $('#updateProfileForm').serialize() + '&optinEmail=' + emailBool + '&optinSms=' + smsBool;
        $(".error").remove();
        $('#globalMeg').hide();
        $('.loading-overlay').show();
        $.ajax({ type: 'POST', url: ACC.config.encodedContextPath + '/my-account/generateOTP', data: updateProfileForm, success: function (res) {
                $('.loading-overlay').hide();
                $('#globalMeg').show();
                if (res.code == '2') {
                    if (res.errorCodeMeg == 'true') {
                        $('#globalMeg').text($('#confirmation_profile_updated').val());
                        $('.loading-overlay').hide();
                        $('#global-alerts').show();
                        $('#global-alerts').fadeOut(3000);
                        window.location.reload(true);
                    }
                    else {
                        window.location.replace(ACC.config.encodedContextPath + "/my-account/update-profile/redirect?isSuccess=false");
                    }
                }
                else if (res.code == '1') {
                    $('#globalMeg').text($('#successes').val());
                    ACC.colorbox.open("Otp Verification", { html: '<input id="profile_onetimepassword" type="text" maxlength="4"/>'
                            + '<button class="js-profile-otp-resend countdown-verification">Resend</button>'
                            + '<div><span class="timer"></span></div>'
                            + '<button class="js-profile-otp-validation otp-countdown-verification">SUBMIT</button>', width: "480px" });
                    showOTPCountDown(true);
                }
                else {
                    $('#globalMeg').text($('#failed').val());
                    $.each(res.bindErrors, function (key, value) { if (key == "firstName") {
                        $('input[name=' + key + ']').after('<span style="color:red" class="error">Please check First Name !</span>');
                    }
                    else if (key == "lastName") {
                        $('input[name=' + key + ']').after('<span style="color:red" class="error">Please check Last Name !</span>');
                    }
                    else if (key == "mobilePhone") {
                        $('input[name=' + key + ']').after('<span style="color:red" class="error">Please enter a valid mobile number !</span>');
                    }
                    else if (key == "birthDate") {
                        $('input[name=' + key + ']').after('<span style="color:red" class="error">Please enter Date of Birth !</span>');
                    } });
                }
            }, error: function (error) { $('#globalMeg').show(); $('.loading-overlay').hide(); $('#globalMeg').text(JSON.stringify(error)); } });
    }
    $(document).on("click", ".profile-update-button", function () {
        var firsName = $('input[name=firstName]').val();
        var lastName = $('input[name=lastName]').val();
        var mobilePhone = $('input[name=mobilePhone]').val();
        var birthDate = $('input[name=birthDate]').val();
        if (firsName != "" && lastName != "" && mobilePhone != "" && birthDate != "") {
            if (!$(this).hasClass('js-feedbackSubmit'))
                showOTPForUpdate();
        }
        else {
            if (firsName == "" && lastName != "") {
                $('#error-red-2').html('');
                $('#error-red-1').html('');
                $('input[name=firstName]').after('<span style="color:red" id="error-red-1" class="error">Please check First Name !</span>');
            }
            else if (lastName == "" && firsName != "") {
                $('#error-red-1').html('');
                $('#error-red-2').html('');
                $('input[name=lastName]').after('<span style="color:red" id="error-red-2" class="error">Please check Last Name !</span>');
            }
            else if (firsName == "") {
                $('#error-red-2').html('');
                $('#error-red-1').html('');
                $('input[name=firstName]').after('<span style="color:red" id="error-red-1" class="error">Please check First Name !</span>');
            }
            else if (lastName == "") {
                $('#error-red-1').html('');
                $('#error-red-2').html('');
                $('input[name=lastName]').after('<span style="color:red" id="error-red-2" class="error">Please check Last Name !</span>');
            }
            else if (birthDate == "") {
                $('#error-red-1').html('');
                $('#error-red-2').html('');
                $('#error-red-3').html('');
                $('#error-red-4').html('');
                $('input[name=birthDate]').after('<span style="color:red" id="error-red-4" class="error">Please enter Date of Birth !</span>');
            }
            else if (mobilePhone == "" && lastName != "" && firsName != "" && birthDate != "") {
                $('#error-red-1').html('');
                $('#error-red-2').html('');
                $('#error-red-4').html('');
                $('#error-red-3').html('');
                $('input[name=mobilePhone]').after('<span style="color:red" id="error-red-3" class="error">Please enter a valid mobile number !</span>');
            }
            else if (mobilePhone == "" && lastName != "" && firsName != "") {
                $('#error-red-1').html('');
                $('#error-red-2').html('');
                $('#error-red-3').html('');
                $('input[name=mobilePhone]').after('<span style="color:red" id="error-red-3" class="error">Please enter a valid mobile number !</span>');
            }
            else if (lastName == "" && mobilePhone != "" && birthDate != "") {
                $('#error-red-4').html('');
                $('#error-red-3').html('');
                $('#error-red-2').html('');
                $('input[name=lastName]').after('<span style="color:red" id="error-red-2" class="error">Please check Last Name !</span>');
            }
            else if (firsName == "" && mobilePhone != "" && birthDate != "") {
                $('#error-red-4').html('');
                $('#error-red-3').html('');
                $('#error-red-1').html('');
                $('input[name=firstName]').after('<span style="color:red" id="error-red-1" class="error">Please check First Name !</span>');
            }
            else if (birthDate == "" && firsName != "" && lastName != "" && mobilePhone != "") {
                $('#error-red-1').html('');
                $('#error-red-2').html('');
                $('#error-red-3').html('');
                $('#error-red-4').html('');
                $('input[name=birthDate]').after('<span style="color:red" id="error-red-4" class="error">Please enter Date of Birth !</span>');
            }
            else if (birthDate == "" && mobilePhone == "") {
                $('#error-red-1').html('');
                $('#error-red-2').html('');
                $('#error-red-4').html('');
                $('input[name=birthDate]').after('<span style="color:red" id="error-red-4" class="error">Please enter Date of Birth !</span>');
            }
            else if (mobilePhone == "" && birthDate == "") {
                $('#error-red-1').html('');
                $('#error-red-2').html('');
                $('#error-red-3').html('');
                $('input[name=mobilePhone]').after('<span style="color:red" id="error-red-3" class="error">Please enter a valid mobile number !</span>');
            }
            else if (birthDate != "") {
                $('#error-red-4').html('');
            }
            else {
                $('#error-red-1').html('');
                $('input[name=firstName]').after('<span style="color:red" id="error-red-1" class="error">Please check First Name !</span>');
                $('#error-red-2').html('');
                $('input[name=lastName]').after('<span style="color:red" id="error-red-2" class="error">Please check Last Name !</span>');
            }
        }
    });
    $(document).on("click", ".js-profile-otp-resend", function () { showOTPForUpdate(); });
    $(document).on("click", ".js-profile-otp-validation", function () {
        var otp = $("#profile_onetimepassword").val();
        var data1 = $('#updateProfileForm').serialize() + '&otp=' + otp;
        $.ajax({ url: ACC.config.encodedContextPath + "/my-account/verifyotp", data: data1, type: 'POST', success: function (response) {
                if (response) {
                    window.location.replace(ACC.config.encodedContextPath + "/my-account/update-profile/redirect?isSuccess=true");
                }
                else {
                    ACC.colorbox.open("Otp Verification", { html: '<input id="profile_onetimepassword" type="text" maxlength="4"/>'
                            + '<span style="color:red" id="invalidOtpMsg">Please enter your valid otp</span>'
                            + '<button class="js-profile-otp-resend countdown-verification">Resend</button>'
                            + '<div><span class="timer"></span></div>'
                            + '<button class="js-profile-otp-validation otp-countdown-verification">SUBMIT</button>', width: "480px" });
                }
            }, error: function (e) { window.location.replace(ACC.config.encodedContextPath + "/pages/error/errorNotFoundPage"); } });
    });
});
function getKeyByValue(object, value) { return Object.keys(object).find(key => object[key] === value); }
$(document).ready(function () {
    var selectedCategoryCheckboxes = [];
    $("input:checkbox[id=preferences]").prop('checked', true);
    if (ACC.config.optSms === "true") {
        $('.js-profileSubscribedPhone').prop('checked', true);
    }
    else {
        $('.js-profileSubscribedPhone').prop('checked', false);
    }
    if (ACC.config.optEmail === "true") {
        $('.js-profileSubscribedEmail').prop('checked', true);
    }
    else {
        $('.js-profileSubscribedEmail').prop('checked', false);
    }
    if (ACC.config.selectedPreferredCategories && ACC.config.selectedPreferredCategories != null) {
        var categories = ACC.config.selectedPreferredCategories;
        var latlong = categories.substring(categories.indexOf('[') + 1, categories.indexOf(']'));
        var nameArr = latlong.split(",");
        for (var i = 0; i < nameArr.length; i++) {
            selectedCategoryCheckboxes.push($.trim(nameArr[i]));
            $('input:checkbox[name=' + $.trim(nameArr[i]) + ']').prop('checked', true);
        }
        $('input:hidden[name=selectedPreferredCategories]').val(selectedCategoryCheckboxes);
    }
    $(".my-preferences-category").delegate("input[type='checkbox']", 'change', function () {
        var $this = $(this);
        if ($this.prop('checked') && selectedCategoryCheckboxes.indexOf($this.val()) === -1) {
            selectedCategoryCheckboxes.push($this.val());
        }
        else {
            selectedCategoryCheckboxes.splice(selectedCategoryCheckboxes.indexOf($this.val()), 1);
        }
        $('input:hidden[name=selectedPreferredCategories]').val(selectedCategoryCheckboxes);
    });
    $("#preferenceFormSubmit").on("click", function () { console.log(selectedCategoryCheckboxes); $('<input />').attr('type', 'hidden').attr('name', 'selectedPreferredCategories').attr('value', selectedCategoryCheckboxes).appendTo('#preferenceSubmittionForm'); $("#preferenceSubmittionForm").submit(); });
    $(document).on("change", "input:checkbox[id=preferences]", function () {
        var $this = $(this);
        if ($this.prop('checked')) {
            $("#pref-categorys input").removeAttr('disabled');
        }
        else {
            $("#pref-categorys input").attr("disabled", true);
            $("#pref-categorys input").prop('checked', false);
            var categories = ACC.config.selectedPreferredCategories;
            var latlong = categories.substring(categories.indexOf('[') + 1, categories.indexOf(']'));
            var nameArr = latlong.split(",");
            if (categories.length > 0) {
                for (var i = 0; i < nameArr.length; i++) {
                    selectedCategoryCheckboxes.splice(selectedCategoryCheckboxes.indexOf($this.val()), 1);
                    $('input:checkbox[name=' + $.trim(nameArr[i]) + ']').prop('checked', false);
                }
            }
        }
    });
    $("#profile_mobilePhone").attr({ "type": "tel", });
    $("#profile_mobilePhone").intlTelInput({ initialCountry: ACC.config.customerPreference.country, formatOnDisplay: false });
    $("#profile_mobilePhone").on("keypress keyup", function (event) {
        if ($(this).val().search(/^0/) != -1) {
            $(this).val(null);
        }
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
        var isPhoneVerificationEnabled = document.getElementById("isPhoneVerificationEnabled").value;
        var oldPhoneNumber = document.getElementById("oldMobilePhone").value;
        var newPhonePrefix = document.getElementById("phonePrefix").value;
        var newNumber = document.getElementById("profile_mobilePhone").value.replaceAll(" ", "");
        var newPhoneNumber = newPhonePrefix + newNumber;
        var isPhoneVerified = document.getElementById("isPhoneVerified").value;
        if (validatePhoneNumberLengthonProfilePage(newNumber)) {
            $('#maskMessage').css('display', 'none');
            if (isPhoneVerificationEnabled && (oldPhoneNumber.localeCompare(newPhoneNumber) != 0)) {
                $(".verified-profile-text-lable").addClass("d-none");
                $(".verify-profile-mobile-number").removeClass("d-none");
            }
            else {
                $(".verified-profile-text-lable").removeClass("d-none");
            }
        }
        else {
            $(".verified-profile-text-lable").addClass("d-none");
        }
    });
    $('#profile_mobilePhone').on('blur', function () {
        var actualLength = 0;
        var mobileNumber = $('#profile_mobilePhone').val().replace(/ /g, "");
        if ($('#phonePrefix').val() == "+971" || $('#phonePrefix').val() == "+966") {
            actualLength = 9;
        }
        else if ($('#phonePrefix').val() == "+91") {
            actualLength = 10;
        }
        else if ($('#phonePrefix').val() == "+60") {
            if (mobileNumber.length == 10) {
                actualLength = 10;
            }
            else {
                actualLength = 9;
            }
        }
        else if ($('#phonePrefix').val() == "+20") {
            actualLength = 10;
            if (mobileNumber.length == 9) {
                actualLength = 9;
            }
            if (mobileNumber.length == 8) {
                actualLength = 8;
            }
        }
        else if ($('#phonePrefix').val() == "+62") {
            if (mobileNumber.length == 12) {
                actualLength = 12;
            }
            else if (mobileNumber.length == 11) {
                actualLength = 11;
            }
            else if (mobileNumber.length == 10) {
                actualLength = 10;
            }
            else if (mobileNumber.length == 9) {
                actualLength = 9;
            }
            else {
                actualLength = 8;
            }
        }
        else {
            actualLength = 8;
        }
        if (ACC.config.siteName == 'lulu-ae' && mobileNumber.length == actualLength && !mobileNumber.startsWith(5)) {
            $('#maskMessage').html('Please enter a valid mobile number !').css('color', '#e30613');
            $('#maskMessage').css('display', 'block');
            $("#addressMobilePhoneError").val('1');
            $(this).closest('.form-group').find('.tooltipster-arrow-bottom').css('display', 'block');
            return false;
        }
        else if (mobileNumber.length == actualLength) {
            $('#maskMessage').html('').css('color', 'green');
            $('#maskMessage').css('display', 'block');
            $("#addressMobilePhoneError").val('0');
            $(this).closest('.form-group').find('.tooltipster-arrow-bottom').css('display', 'none');
            var isAddressVerificationEnabled = $("#isAddressVerificationEnabledFlag").val();
            if (isAddressVerificationEnabled == undefined || isAddressVerificationEnabled == 'false') { }
            return true;
        }
        else if (mobileNumber.length == 0) {
            $('#maskMessage').html(document.getElementById('phoneErrorMsg').value).css('color', '#e30613');
            $('#maskMessage').css('display', 'block');
            $("#addressMobilePhoneError").val('1');
            $(this).closest('.form-group').find('.tooltipster-arrow-bottom').css('display', 'block');
            return false;
        }
        else {
            $('#maskMessage').html(document.getElementById('mobile').value).css('color', '#e30613');
            $('#maskMessage').css('display', 'block');
            $("#addressMobilePhoneError").val('1');
            $(this).closest('.form-group').find('.tooltipster-arrow-bottom').css('display', 'block');
            return false;
        }
    });
    $('.js-updateProfile').on('click', function (e) {
        if ($('#profilebirthDate')) {
            let date = $('#profilebirthDate').val().split('/');
            let input = moment(date, "MM-DD-YYYY");
            let current = moment();
            let diff = current.diff(input, "years", true);
            if (diff < 10) {
                e.preventDefault();
                $('#profile-dob-error').html($('#profileMinAgeError').val());
            }
        }
        if ($('#addressMobilePhoneError').val() == 1) {
            e.preventDefault();
            $('#profile_mobilePhone').focus();
        }
        let re = new RegExp("^[A-Za-z]+$");
        if ($('input[name=firstName]').val().length > 40 || $('input[name=firstName]').val().length < 1) {
            console.log($('input[name=firstName]').val());
            console.log("Invalid first name");
            $('input[name=firstName]').focus();
            let errorMsg = $('#firstNameErrorMessage').val();
            $('input[name=firstName]').closest('.form-group').siblings('.js-validatorMessage').html(errorMsg);
            e.preventDefault();
        }
        if ($('input[name=firstName]').val().length <= 40 && $('input[name=firstName]').val().length >= 1) {
            $('input[name=firstName]').closest('.form-group').siblings('.js-validatorMessage').html('');
        }
        if ($('input[name=lastName]').val().length > 40 || $('input[name=lastName]').val().length < 1) {
            console.log($('input[name=lastName]').val());
            console.log("Invalid last name");
            $('input[name=lastName]').focus();
            let errorMsg = $('#lastNameErrorMessage').val();
            $('input[name=lastName]').closest('.form-group').siblings('.js-validatorMessage').html(errorMsg);
            e.preventDefault();
        }
        if ($('input[name=lastName]').val().length <= 40 && $('input[name=lastName]').val().length >= 1) {
            $('input[name=lastName]').closest('.form-group').siblings('.js-validatorMessage').html('');
        }
        let isPhoneVerificationEnabledElement = document.getElementById("isPhoneVerificationEnabled");
        if (isPhoneVerificationEnabledElement != null) {
            let isPhoneVerificationEnabled = document.getElementById("isPhoneVerificationEnabled").value.toLowerCase();
            if (isPhoneVerificationEnabled == 'true') {
                let oldPhoneNumber = document.getElementById("oldMobilePhone").value;
                let newPhonePrefix = document.getElementById("phonePrefix").value;
                let newNumber = document.getElementById("profile_mobilePhone").value.replaceAll(" ", "");
                let newPhoneNumber = newPhonePrefix + newNumber;
                let isPhoneVerified = document.getElementById("isPhoneVerified").value;
                if (oldPhoneNumber != newPhoneNumber) {
                    $('#maskMessage').html(document.getElementById('mobilePhoneVerifyError').value).css('color', 'red');
                    $('#maskMessage').css('display', 'block');
                    $("#addressMobilePhoneError").val('1');
                    e.preventDefault();
                }
                else {
                    $('#maskMessage').html('');
                    $('#maskMessage').css('display', 'none');
                    $("#addressMobilePhoneError").val('0');
                }
            }
        }
    });
    $('.js-profileSubscribedEmail').on('click', function () { $('.js-profileSubscribedEmail').prop('checked', $(this).prop('checked')); });
    $('.js-profileSubscribedPhone').on('click', function () { $('.js-profileSubscribedPhone').prop('checked', $(this).prop('checked')); });
    $('.js-consentGivenTemplate').on('click', function () { $('.js-consentGivenTemplate').prop('checked', $(this).prop('checked')); });
    $('#submitProfilePic').on('click', function (e) {
        e.preventDefault();
        let file = $('#luluUploadImageForm').find('#uploadimage')[0].files[0];
        if (file.type === "image/png" || file.type === "image/jpg" || file.type === "image/jpeg") {
            $('.js-incorrectFileUpload').html('');
            if (file.size <= ACC.config.maxImageUploadSize) {
                $('#luluUploadImageForm').submit();
            }
            else {
                $('.js-incorrectFileUpload').html('Please upload file smaller than ' + ACC.config.maxImageUploadSize / 1000000 + ' MB.');
            }
        }
        else {
            $('.js-incorrectFileUpload').html('Please upload correct file format(jpg, jpeg, png).');
        }
    });
});
$(document).on("click", ".verify-profile-mobile-number-button", function (e) {
    e.preventDefault();
    $('.loading-overlay').show();
    $(".otp-failure").addClass("d-none");
    var newPhonePrefix = document.getElementById("phonePrefix").value;
    var newNumber = document.getElementById("profile_mobilePhone").value.replaceAll(" ", "");
    var newPhoneNumber = newPhonePrefix + newNumber;
    var countryOfPhoneNumber = getKeyByValue(ACC.config.phoneCodes, newPhonePrefix);
    if (ACC.config.customerPreference.country === countryOfPhoneNumber) {
        var data = "uId=" + newPhoneNumber;
        $.ajax({ url: ACC.config.encodedContextPath + "/my-account/requestOTP", data: data, type: "POST", success: function (response) {
                if (response.otpCreated) {
                    $('.loading-overlay').hide();
                    $("#getotpmodalprofilephone").modal("show");
                    showOTPCountDown(true);
                }
                else {
                    $('.loading-overlay').hide();
                    if (response.errorMessages != null && response.errorMessages.size != 0) {
                        $(".profile-mobile-verification-error-msg").removeClass("d-none");
                        $.each(response.errorMessages, function (key, value) { $(".profile-mobile-verification-error-msg").html(value); });
                    }
                }
            }, error: function (e) { $('.loading-overlay').hide(); $("#getotperrormodalprofilephone").modal("show"); } });
    }
    else {
        $('.loading-overlay').hide();
        let errMobileMsg = $('#phoneInvalidMsg').val();
        $('#maskMessage').html(errMobileMsg).css('color', 'red');
        $('#maskMessage').css('display', 'block');
        $("#addressMobilePhoneError").val('1');
    }
});
$(document).on("click", ".js-otp-submit-profile", function (e) {
    $('.loading-overlay').show();
    e.preventDefault();
    var submitButtonLable = $("#submit_button_lable").val();
    var resendButtonLable = $("#resend_button_lable").val();
    var profileEnterOtpText = $("#profileEnterOtpText").val();
    var newPhonePrefix = document.getElementById("phonePrefix").value;
    var newNumber = document.getElementById("profile_mobilePhone").value.replaceAll(" ", "");
    var newPhoneNumber = newPhonePrefix + newNumber;
    var otp = $("#mobile_profile_update_otp").val();
    var data = "otp=" + otp + "&mobileNumber=" + newPhoneNumber;
    $.ajax({ url: ACC.config.encodedContextPath + "/my-account/confirmOTP", data: data, type: "POST", success: function (response) {
            if (response) {
                $('.loading-overlay').hide();
                $("#getotpmodalprofilephone form").hide();
                $(".otp-success").removeClass("d-none");
                $(".otp-failure").addClass("d-none");
                setTimeout(function () { $("#getotpmodalprofilephone").modal("hide"); location.reload(); }, 5000);
            }
            else {
                $('.loading-overlay').hide();
                $(".otp-failure").removeClass("d-none");
                invalidOTPHtml = '<div class="form-group"><label class="required">' + profileEnterOtpText + '</label><input class="form-control" id="mobile_profile_update_otp" type="text" maxlength="4"/></div>'
                    + '<div class="form-group d-flex justify-content-between align-items-center"><span class="timer font-weight-bold text-green"></span><button class="verify-profile-mobile-number-button countdown-verification btn btn-link p-0 font-weight-bold">' + resendButtonLable + '</button></div>'
                    + '<div class="form-group"><button class="js-otp-submit-profile otp-countdown-verification btn btn-primary w-100">' + submitButtonLable + '</button></div>';
                $("#getotpmodalprofilephone form").html(invalidOTPHtml);
            }
        }, error: function () { $('.loading-overlay').hide(); ACC.notification.siteNotification('<div class="addToCart-notification">System is currently under maintenance. Please try again later!</div>', 'red', 5000); } });
});
var intervalId;
var distance;
function showOTPCountDown(needCountDownReStart) {
    clearInterval(intervalId);
    $('.countdown-verification').hide();
    $('.otp-validation-mssg').delay(500).fadeOut();
    if (needCountDownReStart) {
        distance = 180000;
    }
    intervalId = setInterval(function () {
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        $(".timer").html("0" + minutes + ":" + seconds);
        distance -= 1000;
        if (distance < 0) {
            clearInterval(intervalId);
            $('.countdown-verification').show();
            $('#invalidOtpMsg').hide();
            $(".timer").html('<span style="color:orange"> Time is up, you need to resend code again </span>');
        }
    }, 1000);
}
$(document).on("click", ".profile-page-email-verify-button", function (e) {
    $('.loading-overlay').show();
    $.ajax({ url: ACC.config.encodedContextPath + "/my-account/sendVerificationEmail", type: "POST", success: function (response) {
            if (response) {
                $('.loading-overlay').hide();
                $("#verifyProfileEmailModal").modal("show");
                $(".verification-email-success").removeClass("d-none");
                $(".verification-email-failure").addClass("d-none");
            }
            else {
                $('.loading-overlay').hide();
                $("#verifyProfileEmailModal").modal("show");
                $(".verification-email-failure").removeClass("d-none");
                $(".verification-email-success").addClass("d-none");
            }
            setTimeout(function () { $("#verifyProfileEmailModal").modal("hide"); location.reload(); }, 5000);
        }, error: function () { $('.loading-overlay').hide(); ACC.notification.siteNotification('<div class="addToCart-notification">System is currently under maintenance. Please try again later!</div>', 'red', 5000); } });
});
$(document).ready(function () { var addRemoveDisabled = function () { if ($(window).width() <= 767) {
    $('.desktop-consent-form').prop("disabled", true);
    $('.mobileConsentForm').prop("disabled", false);
}
else if ($(window).width() >= 767) {
    $('.desktop-consent-form').prop("disabled", false);
    $('.mobileConsentForm').prop("disabled", true);
} ; }; $(window).resize(function () { addRemoveDisabled(); }); addRemoveDisabled(); });
function removeProfilePic() { var removeProfilepicForm = document.getElementById("removeProfilePicForm"); if (null != removeProfilepicForm && removeProfilepicForm != 'undefined') {
    removeProfilepicForm.submit();
} }
$(".refund-options-available").delegate("input[type='radio']", 'change', function () { var selectedRefundOption = $('.refund-options>input:checked').val(); console.log(selectedRefundOption); $('<input />').attr('type', 'hidden').attr('name', 'refundOption').attr('value', selectedRefundOption).appendTo('#updateRefundOption'); $("#updateRefundOption").submit(); });
function validatePhoneNumberLengthonProfilePage(mobileNumber) {
    var actualLength = 0;
    if ($('#phonePrefix').val() == "+971" || $('#phonePrefix').val() == "+966") {
        actualLength = 9;
    }
    else if ($('#phonePrefix').val() == "+91") {
        actualLength = 10;
    }
    else if ($('#phonePrefix').val() == "+60") {
        if (mobileNumber.length == 10) {
            actualLength = 10;
        }
        else {
            actualLength = 9;
        }
    }
    else if ($('#phonePrefix').val() == "+20") {
        actualLength = 10;
        if (mobileNumber.length == 9) {
            actualLength = 9;
        }
        if (mobileNumber.length == 8) {
            actualLength = 8;
        }
    }
    else if ($('#phonePrefix').val() == "+62") {
        if (mobileNumber.length == 12) {
            actualLength = 12;
        }
        else if (mobileNumber.length == 11) {
            actualLength = 11;
        }
        else if (mobileNumber.length == 10) {
            actualLength = 10;
        }
        else if (mobileNumber.length == 9) {
            actualLength = 9;
        }
        else if (mobileNumber.length == 8) {
            actualLength = 8;
        }
    }
    else {
        actualLength = 8;
    }
    return mobileNumber.length == actualLength;
}
$(document).ready(function () { let hasActiveClass = $('.js-nav-class').children('li').hasClass('active'); if (hasActiveClass) {
    $('.js-nav-class').children('li.active').parent('.js-nav-class').siblings('ul.list-unstyled>li:first-child').addClass('active');
} });
$(document).ready(function () {
    $(document).on("keyup", "#card_number", function () {
        var cardNumber = $('#card_number').val().replace(/ /g, '');
        $("#visaCardImg").hide();
        $("#masterCardImg").hide();
        $("#amexCardImg").hide();
        if (cardNumber.length > 3) {
            var cards = { visa: /^4[0-9]{3,18}$/, master: /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{1,12}$/, amex: /^3[47][0-9]{3,13}$/ };
            for (var card in cards) {
                if (cards[card].test(cardNumber)) {
                    $("#" + card + "CardImg").show();
                    if (card == "amex") {
                        $('#card_number-error').removeClass('d-none');
                    }
                    else {
                        $('#card_number-error').addClass('d-none');
                    }
                    $("#card_type option[value=" + ((card == "visa") ? "001" : ((card == "master") ? "002" : "003")) + "]").prop('selected', true);
                    break;
                }
                else {
                    $("#visaCardImg").hide();
                }
            }
        }
        if (cardNumber.length == 15) {
            $('#card_cvn').mask("9999");
        }
        else {
            $('#card_cvn').mask("999");
        }
    });
    $('.js-addPaymentProfileAddressRadio').on('click', function () { $('#addPaymentProfileAddressNext').attr('disabled', false); });
    $('#addPaymentProfileAddressNext').on('click', function () { $('#addPaymentAddressSection').addClass('d-none'); $('#addPaymentCardSection').removeClass('d-none'); });
    $('#addNewPaymentBack').on('click', function () { $('#addPaymentAddressSection').removeClass('d-none'); $('#addPaymentCardSection').addClass('d-none'); $('#cybersourcePaymentProfileForm').trigger("reset"); $('#addPaymentProfileSubmit').attr('disabled', true); $("#visaCardImg").hide(); $("#masterCardImg").hide(); $("#amexCardImg").hide(); });
    $('#addPaymentProfileModal').on('hidden.bs.modal', function (e) {
        if ($("#paymentProvider").val() != "TAPPAY") {
            $('#addPaymentAddressSection').removeClass('d-none');
            $('#addPaymentCardSection').addClass('d-none');
        }
        $('#cybersourcePaymentProfileForm').trigger("reset");
        $('#addPaymentProfileAddressNext').attr('disabled', true);
        $('#addPaymentProfileSubmit').attr('disabled', true);
        $('.js-addPaymentProfileAddressRadio').prop('checked', false);
        $("#visaCardImg").hide();
        $("#masterCardImg").hide();
        $("#amexCardImg").hide();
    });
    $('#addPaymentProfileSubmit').on('click', function () {
        $.ajax({ url: ACC.config.encodedContextPath + '/checkout/multi/payment-method/cyberSourceProfilePaymentData', async: true, data: { 'addressId': $('.js-addPaymentProfileAddressRadio:checked').attr('id'), 'isDefault': $('#setPaymentProfileAsDefault').prop('checked'), 'binNumber': $('#cybersourcePaymentProfileForm').find('[name=card_number]').val().replace(/ /g, '').substr(0, 6) }, type: "POST", }).done(function (data) {
            var dynamicFields = '';
            if (data.signatureParams) {
                dynamicFields = ACC.silentorderpost.appendInputField(data.signatureParams, dynamicFields);
            }
            if (data.subscriptionSignatureParams) {
                dynamicFields = ACC.silentorderpost.appendInputField(data.subscriptionSignatureParams, dynamicFields);
            }
            if (data.customerBillingParams) {
                dynamicFields = ACC.silentorderpost.appendInputField(data.customerBillingParams, dynamicFields);
            }
            let formData = $('#cybersourcePaymentProfileForm');
            formData.attr('action', data.comments);
            $(formData).find('[name=card_expiry_date]').val($('select[id=expiry_month').val().concat('-20').concat($('select[id=expiry_year').val()));
            $(formData).find('[name=card_number]').val($('input[name=card_number]').val().replace(/ /g, ''));
            formData = formData.append(dynamicFields);
            formData.submit();
        }).fail(function (error) { $('.loading-overlay').hide(); });
    });
    $('#addPaymentProfileAddAddress').on('click', function (e) { window.sessionStorage.setItem("openAddPaymentProfilePopUp", new Date().getTime()); });
    let showPopup = window.sessionStorage.getItem("openAddPaymentProfilePopUp");
    const d = new Date().getTime();
    if ((showPopup != null) && (window.location.href.includes('my-account/payment-details'))) {
        if ((d - parseInt(showPopup)) < 300000) {
            $('#addPaymentProfileModal').modal('show');
            if ($('.js-addPaymentProfileAddressRadio:checked').length > 0) {
                $('#addPaymentProfileAddressNext').attr('disabled', false);
            }
            window.sessionStorage.removeItem("openAddPaymentProfilePopUp");
        }
        else {
            window.sessionStorage.removeItem("openAddPaymentProfilePopUp");
        }
    }
    let cardNumberMaxLength = parseInt($('#card_number').attr('maxlength'));
    let cardCvnMaxLength = parseInt($('#card_cvn').attr('maxlength'));
    $('#cybersourcePaymentProfileForm').on('keyup change paste', '#card_number, #card_cvn, #expiry_month, #expiry_year', function (e) {
        if (($('#card_type').val() != null) && ($('#card_type').val() != '003') && ($('#expiry_year').val() != null) && ($('#expiry_month').val() != null) && ($('#card_number').val().length >= cardNumberMaxLength) && ($('#card_cvn').val().length >= cardCvnMaxLength)) {
            $('#addPaymentProfileSubmit').attr('disabled', false);
        }
        else {
            $('#addPaymentProfileSubmit').attr('disabled', true);
        }
    });
});
$('.savedCard-payment input:radio[name="address"]').change(function (event) {
    paymentSectionId = $('input[name="payment-method"]').data('id');
    $('input:radio[name="address"]').attr('checked');
    $('input:radio[name="payment-method"]').removeAttr('checked');
    $(".save-card-checkout-button").attr('disabled', false);
    $("#" + paymentSectionId).removeClass("d-block");
    $("#" + paymentSectionId).addClass("d-none");
    var selectedPaymentSec = $(this).data('id');
    $('input[name="payment-method"]').each(function (i) {
        paymentSectionId = $(this).data('id');
        if (selectedPaymentSec != paymentSectionId) {
            $("#" + paymentSectionId).removeClass("d-block").addClass("d-none");
        }
    });
});
$('.selectable-payment-option input:radio[name="payment-method"]').change(function (event) { $('input:radio[name="payment-method"]').attr('checked'); $('input:radio[name="address"]').removeAttr('checked'); $(".save-card-checkout-button").attr('disabled', true); });
$(document).on('click', '.cancel-order-button', function (event) { event.stopPropagation(); });
$(document).on('click', '.order-return-button', function (event) { event.stopPropagation(); });
$(document).on('click', '.js-reorder-button', function (event) { event.stopPropagation(); $('.loading-overlay').show(); let jsonObj = { "addProductToCartDTOList": [] }; let confirmButton = $(this); $(this).closest('.product-list').find('.js-product-checkbox').each(function (index, checkbox) { if (checkbox.checked) {
    jsonObj["addProductToCartDTOList"].push({ productCode: $(checkbox).val(), quantity: $(checkbox).closest('.product-list-content').find('.js-product-quantity').val() });
} }); console.log(jsonObj); if (jsonObj.addProductToCartDTOList.length > 0) {
    $.ajax({ type: "POST", url: ACC.config.encodedContextPath + "/cart/addAll", data: JSON.stringify(jsonObj), contentType: "application/json; charset=utf-8", dataType: "json", success: function (cartResult, statusText, xhr, formElement) { ACC.notification.siteNotification(cartResult.addToCartLayer, 'green', 3000); ACC.minicart.updateMiniCartDisplay(); $('.loading-overlay').hide(); confirmButton.closest('.button-section').find('.back-button').click(); }, error: function (error) { console.error(error); ACC.minicart.updateMiniCartDisplay(); $('.loading-overlay').hide(); confirmButton.closest('.button-section').find('.back-button').click(); } });
} });
$(document).on('click', '.reorder-button', function (event) {
    event.stopPropagation();
    $(this).addClass('d-none');
    $(this).parents('.button-section').find('.cancel-order-button').addClass('d-none');
    $(this).parents('.button-section').find('.order-return-button').addClass('d-none');
    var that = $(this);
    setTimeout(function () { that.parents('.button-section').find('.show-back-button').removeClass('d-none'); that.parents('.button-section').find('.show-confirm-button').removeClass('d-none'); }, 500);
    that.closest('.myOrderTabContent').addClass('reorder-wrap');
    if ($(this).closest('.myOrderTabContent').find('.product_block-list').length > 0) { }
    else {
        $($(this).parents('.product-list-header')[0]).click();
    }
});
$(document).on('click', '.show-back-button', function (event) {
    event.stopPropagation();
    $(this).parents('.product-list-header').siblings('.product-list').find('.reorder-check').addClass('d-none');
    var that = $(this);
    setTimeout(function () { that.parents('.button-section').find('.reorder-button').removeClass('d-none'); that.parents('.button-section').find('.cancel-order-button').removeClass('d-none'); that.parents('.button-section').find('.order-return-button').removeClass('d-none'); }, 500);
    that.closest('.myOrderTabContent').removeClass('reorder-wrap');
    $(this).addClass('d-none');
    $(this).parents('.button-section').find('.show-confirm-button').addClass('d-none');
});
$(function () {
    $(".js-searchOrderOnClick").click(function (e) {
        $(".js-searchOrderOnClick").prop("disabled", true);
        let orderId = $(".js-searchByOrderId").val().trim();
        let orderCode = "orderId=" + orderId;
        let orderTypes = "orderType=" + myAccountOrderType;
        var listingDiv = $("div.my-orders-content-top");
        $.ajax({ url: ACC.config.encodedContextPath +
                "/my-orders/orders-filter?" +
                orderTypes +
                "&" +
                orderCode, type: "GET", success: function (data) {
                listingDiv.html(data);
                if (orderId != "") {
                    shouldScroll = false;
                }
                let reg = new RegExp('^[0-9]+$');
                let shouldNotScrollLocal = reg.test(parseInt(window.location.href.substring(window.location.href.lastIndexOf('/') + 1)));
                myOrderCurrentPage = 1;
                if ($(".js-searchByOrderId").val().trim().length === 0) {
                    shouldNotScroll = false;
                }
                else {
                    shouldNotScroll = shouldNotScrollLocal;
                }
                myOrderCurrentPage = 1;
                ACC.orderhistorypage.bindShowMore();
                if (data != "") {
                    $("#noOrderFound").addClass("d-none");
                }
                else {
                    $("#noOrderFound").removeClass("d-none").text($("#noOrderAlert").val());
                }
                $(".js-searchOrderOnClick").prop("disabled", false);
                $(".js-searchByOrderId").prop("disabled", false);
            }, });
    });
    $(".js-searchByOrderId").keypress(function (e) { var key = e.which; if (key == 13) {
        $(".js-searchOrderOnClick").click();
        $(".js-searchOrderOnClick").prop("disabled", true);
        return false;
    } });
});
$(document).on("keyup", ".js-searchByOrderId", function () {
    let orderId = $(".js-searchByOrderId").val().trim();
    let orderTypes = "orderType=" + myAccountOrderType;
    var listingDiv = $("div.my-orders-content-top");
    if (orderId.length == 0 && !shouldNotScroll) {
        $.ajax({ url: ACC.config.encodedContextPath +
                "/my-orders/orders-filter?" +
                orderTypes, type: "GET", success: function (data) { listingDiv.html(data); shouldScroll = true; myOrderCurrentPage = 1; ACC.orderhistorypage.bindShowMore(); if (data != "") {
                $("#noOrderFound").addClass("d-none");
            }
            else {
                $("#noOrderFound").removeClass("d-none").text($("#noOrderAlert").val());
            } }, });
    }
});
$(document).on('change', '.js-product-checkbox', function () {
    let confirmButton = $(this).closest('ul.list-unstyled').find('.js-reorder-button');
    if ($(this).closest('ul.list-unstyled').find('.js-product-checkbox').filter(':checked').length < 1) {
        confirmButton.addClass('disabled');
    }
    else {
        confirmButton.removeClass('disabled');
    }
});
$(document).on('click', '.back-button', function () { console.log($(this).closest('.product-list').find('.js-product-checkbox').attr('checked')); $(this).closest('.product-list').find('.js-product-checkbox').prop('checked', true); $(this).closest('ul.list-unstyled').find('.js-reorder-button').removeClass('disabled'); });
$(document).on("click", ".retun-expand-arrow", function () {
    let rmacode = $(this).data("rmacode");
    var listingDiv = $(this).parents('.item-grid-right-result-component').find('div.result-append');
    var currentDiv = $(this);
    if ($(this).hasClass('loaded-div')) {
        $(listingDiv).find('div.product-list').toggleClass('d-block');
    }
    if (!$(this).hasClass('loaded-div')) {
        $.ajax({ url: ACC.config.encodedContextPath +
                "/my-account/returns/" +
                rmacode, type: "GET", success: function (data) {
                $(currentDiv).addClass('loaded-div');
                $(listingDiv).html($(data).find('div.returned-data').html());
                $(listingDiv).find('div.product-list').addClass('d-block');
                if (!data) {
                    console.log('data is empty');
                }
            }, });
    }
});
$(document).on('click', '.product-list-header', function (e) {
    let orderId = "orderId=" + $(this).data('orderid');
    let showDetails = "showDetails=true";
    if (myAccountOrderType !== undefined) {
        orderType = "orderType=" + myAccountOrderType;
    }
    else {
        orderType = "orderType=";
    }
    console.log("ordertype", orderType);
    let hook = $(this);
    if (!hook.hasClass('.active-product-list-header') && hook.siblings('.product-list').find('.product-list-content').length == 0) {
        $('.loading-overlay').show();
        $.ajax({ url: ACC.config.encodedContextPath + "/my-orders/orders-filter?" + orderType + "&" + orderId + "&" + showDetails, type: "GET", success: function (data) {
                $('.loading-overlay').hide();
                hook.parent('li').append(data);
                hook.toggleClass('active-product-list-header');
                hook.siblings('.product-list').slideToggle();
                $(document).on('click', '.loadmodal', function (e) {
                    var url = $(this).attr("data-href");
                    if ($(document).find("#rateseller .modal-body").html().trim().length > 0) {
                        console.log("modal has data ");
                        $("#rateseller").modal('show');
                        $('#consignmentEvaluationForm').attr('action', url);
                        $('#rateseller').on('hidden.bs.modal', function () { $("#consignmentEvaluationForm")[0].reset(); $(this).find(".js-miraklRatingIconSet").removeClass("active"); });
                    }
                    else {
                        console.log("modal has NO data ");
                        $.ajax({ url: url, type: 'GET', method: 'GET', beforeSend: function () { $('.loading-overlay').show(); }, success: function (res) {
                                $('.loading-overlay').hide();
                                $("#rateseller").find('.modal-body').html(res);
                                $("#rateseller").modal('show');
                                $('#consignmentEvaluationForm').attr('action', url);
                                $('#rateseller').on('hidden.bs.modal', function () { $("#consignmentEvaluationForm")[0].reset(); $(this).find(".js-miraklRatingIconSet").removeClass("active"); });
                                ACC.miraklratingstars.bindRatingStars();
                                ACC.miraklratingstars.bindRatingStarsSet();
                            }, error: function () { $('.loading-overlay').hide(); } });
                    }
                });
            }, error: function (e) { console.log(e); } });
    }
    else {
        hook.toggleClass('active-product-list-header');
        hook.siblings('.product-list').slideToggle();
    }
});
ACC.miraklratingstars = { _autoload: [["bindRatingStars", $(".js-miraklRatingCalc").length > 0], ["bindRatingStarsSet", $(".js-miraklRatingCalcSet").length > 0],], bindRatingStars: function () {
        console.log("hello");
        $elements = $(".js-miraklRatingCalc");
        $elements.each(function () {
            var $ratingData = $(this).data("rating");
            var $ratingIcon = $(this).find(".js-miraklRatingIcon");
            var rating = $ratingData.rating;
            var maxRating = $ratingData.total;
            var fullIconCount = Math.floor(rating);
            var emptyIconCount = maxRating - Math.ceil(rating);
            $ratingIcon.removeClass("js-miraklRatingIcon");
            for (var i = 0; i < fullIconCount && i < maxRating; i++) {
                $ratingIcon.clone().addClass("active").insertBefore($ratingIcon);
            }
            if (fullIconCount + emptyIconCount < maxRating) {
                var iconFirstHalfValue = rating - fullIconCount;
                $ratingIcon.clone().addClass("active 1").css("width", iconFirstHalfValue + "em").css("margin-right", "0px").insertBefore($ratingIcon);
                var iconSecondHalfValue = 1 - iconFirstHalfValue;
                $ratingIcon.clone().css("width", iconSecondHalfValue + "em").css("text-indent", -iconFirstHalfValue + "em").css("margin-left", "0px").insertBefore($ratingIcon);
            }
            for (var i = 0; i < emptyIconCount && i < maxRating; i++) {
                $ratingIcon.clone().insertBefore($ratingIcon);
            }
            $ratingIcon.remove();
        });
    }, bindRatingStarsSet: function () {
        $e = $(".js-miraklRatingCalcSet");
        $e.on("mouseenter", ".js-miraklRatingIconSet", function (e) { e.preventDefault(); $(this).parent().children().removeClass("active"); var cIndex = $(this).index() + 1; var $i = $(this).parent().children(".js-miraklRatingIconSet:lt(" + cIndex + ")"); $i.addClass("active"); });
        $(document).on("mouseleave", ".js-miraklRatingCalcSet", function (e) { e.preventDefault(); $(this).find(".js-miraklRatingIconSet").removeClass("active"); var rating = $(this).parent().find(".js-miraklRatingSetInput").val(); console.log("inside rating ", rating); var $i = $(this).find(".js-miraklRatingIconSet:lt(" + rating + ")"); $i.addClass("active"); });
        $e.on("click", ".js-miraklRatingIconSet", function (e) { e.preventDefault(); var ratingData = $(this).parents().eq(1).data("rating"); var cIndex = $(this).index() + 1; ratingData.rating = cIndex; console.log("*******", ratingData.rating); $(this).parents().eq(2).find(".js-miraklRatingSetInput").val(ratingData.rating); });
        $e.each(function () {
            var ratingData = $(this).data("rating");
            var $ratingIcon = $(this).find(".js-miraklRatingIcon");
            for (var i = 1; i <= ratingData.total; i++) {
                var $clone = $ratingIcon.clone().removeClass("js-miraklRatingIcon");
                $clone.insertBefore($ratingIcon);
            }
            $ratingIcon.remove();
            $(this).find(".js-miraklRatingIconSet").removeClass("active");
            var rating = $(this).parent().find(".js-miraklRatingSetInput").val();
            var $i = $(this).find(".js-miraklRatingIconSet:lt(" + rating + ")");
            $i.addClass("active");
        });
        this.validateForm();
    }, validateForm: function () {
        $.validator.addClassRules("validateField", { required: true, });
        $("#consignmentEvaluationForm").validate({ errorPlacement: function (error, element) {
                if (element.attr("name") == "sellerGrade") {
                    error.insertAfter("#validatemessageBox");
                }
                else if (element.is('[name^=assessment]')) {
                    error.insertAfter($(element).parents('.error-placement'));
                }
                else {
                    error.insertAfter(element);
                }
            }, rules: { sellerGrade: { required: true } }, messages: { sellerGrade: 'This field is mandatory' }, submitHandler: function (form) { console.log('Hello buddy', $(form).serialize()); $.ajax({ type: $(form).attr('method'), url: $(form).attr('action'), data: $(form).serialize(), }).done(function (response) { $('.loading-overlay').hide(); $("#consignmentEvaluationForm")[0].reset(); $(".js-miraklRatingIconSet").removeClass('active'); $("#ratesellerConfirm").find('.modal-body').html(response); $('#rateseller').modal('hide'); $('#ratesellerConfirm').modal('show'); var url = $(form).attr('action'); $('.loadmodal').filter('[data-href="' + url + '"]').remove(); console.log("success response >>>>>>", response); }).error(function (response) { console.log(response); }); } });
    } };
$(document).ready(function () {
    if (ACC.config.pageType === 'PAYMENT' || ACC.config.pageType === 'ACCOUNT') {
        $('.loading-overlay').show();
        var currencyIso = $("main").data('currency-iso-code');
        var availablePoints, points, money, availableMoney;
        $(document).ready(function () { $('.js-accountNavigationNodes ul li.brand-nav a').on('click', function () { $('.loading-overlay').show(); }); });
        if (ACC.config.pageType === 'PAYMENT') {
            $(document).ready(function () {
                $('.loading-overlay').show();
                if (document.getElementById("isLoyaltyEnabled") != null && document.getElementById("isLoyaltyEnabled").value == "true" && document.getElementById("showLuluPointPaymentMode") != null && document.getElementById("showLuluPointPaymentMode").value == "true") {
                    fetchPoints();
                    $('#luluPointCheck').click(function (e) {
                        var pointCheck = document.getElementById("luluPointCheck");
                        if (pointCheck.checked) {
                            $('.loading-overlay').show();
                            $.ajax({ url: ACC.config.encodedContextPath + '/checkout/multi/payment-method/checkAndExtendReservations', type: 'GET', success: function (response) { $('.loading-overlay').hide(); $.ajax({ url: ACC.config.encodedContextPath + "/my-account/redeemLuluPoints", data: { "money": availableMoney }, type: "POST", success: function (response) { if (response.status == "SUCCESS") {
                                        window.location.href = ACC.config.encodedContextPath + "/checkout/multi/payment-method/luluPoints/luluPointsPlaceOrder?money=" + response.money;
                                    }
                                    else {
                                        console.log(response);
                                    } }, error: function (e) { console.log("error :", e); } }); } });
                        }
                    });
                    $('#removeLuluPoints').click(function (e) { var cancelLuluPointAmount = document.getElementById("cancelLuluPointAmount").value; $('.loading-overlay').show(); $.ajax({ url: ACC.config.encodedContextPath + "/my-account/cancelRedeemLuluPoints", data: { "money": cancelLuluPointAmount }, type: "POST", success: function (response) { $('.loading-overlay').hide(); if (response == "SUCCESS") {
                            window.location.href = ACC.config.encodedContextPath + "/checkout/multi/payment-method/add";
                            $("#removeSuccessMessageBox").text(response);
                            $("#removeSuccessMessageBox").fadeIn(100);
                            $("#removeSuccessMessageBox").fadeOut(5000);
                        }
                        else {
                            $("#removeErrorMessageBox").text($("#removeErrorMessage").val());
                            $("#removeErrorMessageBox").fadeIn(100);
                            $("#removeErrorMessageBox").fadeOut(5000);
                        } }, error: function (e) { console.log(e); $('.loading-overlay').hide(); $("#removeErrorMessageBox").text($("#removeErrorMessage").val()); $("#removeErrorMessageBox").fadeIn(100); $("#removeErrorMessageBox").fadeOut(5000); } }); });
                }
            });
        }
        if (ACC.config.pageType === 'ACCOUNT') {
            $(document).ready(function () {
                if (document.getElementById("happinessProgLoading") != null) {
                    $('.loading-overlay').hide();
                }
                else {
                    if (document.getElementById("maxxingCardId") != null) {
                        $("#happinessCurrency").text(currencyIso);
                        var maxxingCardId = document.getElementById("maxxingCardId").value;
                        jQuery('#maxingQR').html('');
                        qrHeight = parseInt(window.getComputedStyle(document.getElementById("maxingQR")).height) - 5;
                        qrWidth = parseInt(window.getComputedStyle(document.getElementById("maxingQR")).width) - 5;
                        jQuery('#maxingQR').qrcode({ text: maxxingCardId, render: "canvas", height: qrHeight, width: qrWidth });
                    }
                    if (document.getElementById("onlineCouponCode") != null) {
                        var onlineCouponCode = document.getElementById("onlineCouponCode").value;
                        jQuery('div[id^="onlineCouponQR"]').html('');
                        jQuery('div[id^="onlineCouponQR"]').qrcode({ text: onlineCouponCode, render: "canvas", height: 60, width: 60 });
                    }
                    if (document.getElementById("offlineCouponCode") != null) {
                        var offlineCouponCode = document.getElementById("offlineCouponCode").value;
                        jQuery('div[id^="offlineCouponQR"]').html('');
                        jQuery('div[id^="offlineCouponQR"]').qrcode({ text: offlineCouponCode, render: "canvas", height: 60, width: 60 });
                    }
                    $('.loading-overlay').hide();
                    $("#happinessContentContainer").removeClass("d-none");
                    $("#pointsContent").removeClass("d-none");
                }
            });
            $(document).on("click", "#loyltyProgBtn", function () {
                var lhpEnrolled = true;
                if ($("#t_and_c")[0].checked == false) {
                    $("#errorMessageField").attr("hidden", false);
                    $("#errorMessageField").text($("#errorMessage").val());
                }
                else if ($("#t_and_c")[0].checked == true) {
                    $("#errorMessageField").attr("hidden", true);
                    $('.loading-overlay').show();
                    $.ajax({ url: ACC.config.encodedContextPath + "/my-account/updateLHPconsent/" + lhpEnrolled, type: "GET", success: function () { $('.loading-overlay').hide(); location.reload(); }, error: function (e) { console.log(e); $('.loading-overlay').hide(); } });
                }
            });
            $(document).on("click", "#luluPointIdBtn", function () { $('.loading-overlay').show(); $.ajax({ url: ACC.config.encodedContextPath + '/checkout/multi/payment-method/checkAndExtendReservations', type: 'GET', success: function (response) { $('.loading-overlay').hide(); $.ajax({ url: ACC.config.encodedContextPath + "/my-account/redeemLuluPoints", data: { "points": -availablePoints }, type: "POST", success: function (response) { if (response.status == "SUCCESS") {
                        window.location.href = ACC.config.encodedContextPath + "/checkout/multi/payment-method/luluPoints/luluPointsPlaceOrder?money=" + availableMoney;
                    }
                    else {
                        console.log(response);
                    } } }); } }); });
        }
        function fetchPoints() {
            $('.loading-overlay').show();
            $.ajax({ url: ACC.config.encodedContextPath + "/my-account/fetchLuluPoints", type: "GET", success: function (response) {
                    points = response.points;
                    threshold = response.pointsThreshold;
                    if (threshold > 0 && points >= threshold) {
                        availablePoints = response.availablepoints;
                        money = response.money;
                        availableMoney = response.availablemoney;
                        var bal = availablePoints + " of " + points + " points";
                        $(".amountredeemCredit").attr("hidden", false);
                        $(".amountredeemCredit").text(bal);
                        $('#debitLuluPointTransaction').removeClass("d-none");
                        $('#debitTransaction').addClass("d-none");
                        $('#walletTransactionWithLuluPoint').removeClass("d-none");
                        $('#walletTransaction').addClass("d-none");
                        $('#savedCardWithLuluPoint').removeClass("d-none");
                        $('#savedCardWithoutLuluPoint').addClass("d-none");
                        $('#giftCardWithLuluPointsPayment').removeClass("d-none");
                        $('#emirateTransactionWithLuluPoint').removeClass("d-none");
                        $('#emirateTransactionWithoutLuluPoint').addClass("d-none");
                        $('#CodWithLuluPoints').removeClass("d-none");
                        $('#CodWithoutLuluPoints').addClass("d-none");
                    }
                    $('.loading-overlay').hide();
                }, error: function (e) { console.log(e); $('.loading-overlay').hide(); } });
        }
        function removePoints() { location.reload(); }
        $(document).ready(function () {
            $('.loading-overlay').hide();
            if (document.getElementById("cancelLuluPointAmount") != null && document.getElementById("cancelLuluPointAmount").value != null && document.getElementById("luluPointsRevertTime") != null) {
                var revertTime = 30;
                if (document.getElementById("luluPointsRevertTime").value != null) {
                    revertTime = document.getElementById("luluPointsRevertTime").value;
                }
                var ms = revertTime * 60 * 1000;
                setTimeout(removePoints, ms);
            }
        });
        $(document).on("click", "#pntHistory", function () { $('#TermsAndConditionsModalBody').empty(); var url = $(this).data("href"); $.ajax({ url: ACC.config.encodedContextPath + url, type: "GET", success: function (response) { $('#TermsAndConditionsModalBody').html(response); } }); });
    }
});
$(document).ready(function () {
    $("#register_phone").attr({ "type": "tel", });
    $(".multiple-user-error").addClass("d-none");
    $(".no-user-found-error").addClass("d-none");
    $(".login-otp-sent-successfully").addClass("d-none");
    $(".invalid-otp-login-error").addClass("d-none");
    $("registerChkTermsConditions").on('change', function () {
        if (this.checked) {
            $("#register-button-id-gtm").removeAttr("disabled");
        }
        else {
            $("#register-button-id-gtm").attr("disabled", "disabled");
        }
    });
    $("#register_phone").intlTelInput({ initialCountry: ACC.config.customerPreference.country });
    var emailId = $("#emailAddress").val();
    if (emailId != undefined && emailId.replaceAll(" ", "") != "") {
        var isPhone = $.isNumeric(emailId.replaceAll(" ", ""));
        if (isPhone) {
            $('#countryCode').slideDown();
            $('#register_phone').val(emailId);
            $('#emailAddress').hide();
            $('#requestOtpDiv').css({ 'display': 'block' });
            $('input[name=emailAddress]').next('span').remove();
        }
    }
    $("#register_phone").on("keypress keyup", function (event) {
        if ($(this).val().search(/^0/) != -1) {
            $(this).val(null);
        }
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    });
    $("#register_firstName").on("keypress keyup", function (event) { var firstname = new RegExp("^[a-zA-Z ]+$"); var key = String.fromCharCode(!event.charCode ? event.which : event.charCode); if (!firstname.test(key)) {
        event.preventDefault();
        return false;
    } });
    $("#register_lastName").on("keypress keyup", function (event) { var lastname = new RegExp("^[a-zA-Z ]+$"); var key = String.fromCharCode(!event.charCode ? event.which : event.charCode); if (!lastname.test(key)) {
        event.preventDefault();
        return false;
    } });
    $('#otpAlertMssg').hide();
    $('#verifyOTP').prop('disabled', true);
    $('#validateEmailIdBtn').click(function () {
        var emailId = $("#register_email").val();
        var emailRegex = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        $('#commonEmail-error').text('');
        $('#emailValidationError').text();
        if (emailId == "") {
            $('#commonEmail-error').text($('#commonEmail-error-meg').val());
        }
        else {
            if (emailRegex.test(emailId)) {
                $('#subscribedEmail').prop('checked', false);
                $('#subscribedPhone').prop('checked', false);
                $('.mail-field-div').find('.correct-arrow').css('display', 'inline-block');
                var data = 'emailId=' + emailId;
                $.ajax({ url: ACC.config.encodedContextPath + "/login/register/validateEmail", data: data, type: "GET", success: function (response) {
                        $('#maaxing_send_mail').val($('#register_email').val());
                        if (response != null && response !== '' && !response.hybrisCustomer) {
                            $('#NonHybrisCustomerResetPwdModal').removeClass('cboxElement');
                            $('#NonHybrisCustomerResetPwdModal').modal('show');
                        }
                        if (response != null && response !== '' && response.customerExist) {
                            $('.register_details').hide();
                            $('.login_field').attr('data-value', $('#register_email').val());
                            $('.login_field').attr('value', $('#register_email').val());
                            $('#login').show();
                            return false;
                        }
                        else {
                            $('#register').toggle(300);
                            $('#registerInitTitle').hide();
                            $('#registerfinalTitle').show();
                            $('#validateEmailIdBtn').hide();
                            return true;
                        }
                    } });
            }
            else {
                $('#commonEmail-error').text("Email is Not Valid.Please Provide Valid Email");
                $('#emailValidationError').text($('#emailValidationError-meg').val());
            }
        }
    });
    $('#registerChkTermsConditions').click(function () { if ($('#registerChkTermsConditions').is(':checked')) {
        $('#verifyOTP').prop('disabled', false);
    }
    else {
        $('#verifyOTP').prop('disabled', true);
    } });
    var regData;
    $(document).bind('keypress', function (e) { if (e.keyCode == 13) {
        $('.js-otp-verification').trigger('click');
    } });
    $(document).on("click", ".js-otp-verification", function (e) {
        regData = $('#luluRegisterForm').serialize();
        e.preventDefault();
        $.ajax({ type: "POST", url: ACC.config.encodedContextPath + "/register/processRegistration", data: regData, success: function (response) {
                $('select[name=email]').next('span').remove();
                $('select[name=titleCode]').next('span').remove();
                $('input[name=firstName]').next('span').remove();
                $('input[name=lastName]').next('span').remove();
                $('input[name=email]').next('span').remove();
                $('input[name=pwd]').next('span').remove();
                $('input[name=checkPwd]').next('span').remove();
                $('.intl-tel-input').next('span').remove();
                $('#g-recaptcha_incorrect').hide();
                $('select[name=email]').removeAttr("style");
                $('select[name=titleCode]').removeAttr("style");
                $('input[name=firstName]').removeAttr("style");
                $('input[name=lastName]').removeAttr("style");
                $('input[name=email]').removeAttr("style");
                $('input[name=pwd]').removeAttr("style");
                $('input[name=checkPwd]').removeAttr("style");
                $('input[name=mobileNumber]').removeAttr("style");
                $('#globalMsg').hide();
                $('#maskMessage').empty();
                if (response.formValidationFailed) {
                    $.each(response.errorMessages, function (key, value) {
                        if (key == 'email') {
                            $('.mail-field-div').find('.correct-arrow').hide();
                        }
                        if (key === 'recaptcha.challenge.field.invalid') {
                            $("#g-recaptcha_incorrect").text("Invalid answer to captcha challenge");
                            $('#g-recaptcha_incorrect').show();
                        }
                        else if (key === 'titleCode') {
                            $('select[name=' + key + ']').next('.register-form_error').remove();
                            $('select[name=' + key + ']').after('<span class="register-form_error">' + value + '</span>');
                            $('select[name=' + key + ']').addClass('input-validation-error');
                        }
                        else if (key == 'mobileNumber') {
                            $('.intl-tel-input').next('.register-form_error').remove();
                            $('.intl-tel-input').after('<span class="register-form_error">' + value + '</span>');
                            $('.intl-tel-input').addClass('input-validation-error');
                        }
                        else {
                            $('input[name=' + key + ']').next('.register-form_error').remove();
                            $('input[name=' + key + ']').after('<span class="register-form_error">' + value + '</span>');
                            $('input[name=' + key + ']').addClass('input-validation-error');
                        }
                    });
                    $('#globalMsg').show();
                    $('#globalMsg').text($('#failed').val());
                }
                else {
                    window.location.replace(ACC.config.encodedContextPath);
                }
            }, error: function (e) { ACC.notification.siteNotification('<div class="addToCart-notification">Fill the mandatory fields</div>', 'red', 5000); } });
    });
    $(document).bind('keypress', function (e) { if (e.keyCode == 13) {
        $('.js-otp-checkout-verification').trigger('click');
    } });
    $(document).on("click", ".js-otp-checkout-verification", function (e) {
        regData = $('#checkoutLuluRegisterForm').serialize();
        e.preventDefault();
        $.ajax({ type: "POST", url: ACC.config.encodedContextPath + "/login/register/processRegistration", data: regData, success: function (response) {
                $('select[name=email]').next('span').remove();
                $('select[name=titleCode]').next('span').remove();
                $('input[name=firstName]').next('span').remove();
                $('input[name=lastName]').next('span').remove();
                $('input[name=email]').next('span').remove();
                $('input[name=pwd]').next('span').remove();
                $('input[name=checkPwd]').next('span').remove();
                $('input[name=mobileNumber]').next('span').remove();
                if (response.formValidationFailed) {
                    $.each(response.errorMessages, function (key, value) {
                        if (key == 'email') {
                            $('.mail-field-div').find('.correct-arrow').hide();
                        }
                        if (key === 'recaptcha.challenge.field.invalid') {
                            $("#g-recaptcha_incorrect").text("Invalid answer to captcha challenge");
                            $('#g-recaptcha_incorrect').show();
                        }
                        $('input[name=' + key + ']').next('.tooltipster-arrow-bottom').remove();
                        $('input[name=' + key + ']').after('<span class="tooltipster-arrow-bottom">' + value + '</span>');
                        $('input[name=' + key + ']').css({ 'border-color': '#ff0000', 'box-shadow': 'inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6)' });
                    });
                    if (response.errorMessages['titleCode']) {
                        $('select[name=titleCode]').next('span').remove();
                        $('select[name=titleCode]').after('<span class="form-error" style="color:red">' + response.errorMessages['titleCode'] + '</span>');
                    }
                }
                else {
                    window.location.replace(ACC.config.encodedContextPath);
                }
            }, error: function (e) { ACC.notification.siteNotification('<div class="addToCart-notification">Fill the mandatory fields</div>', 'red', 5000); } });
    });
    $(document).on("click", ".js-otp-summary-verification", function (e) {
        regData = $('#checkoutLuluRegisterForm').serialize();
        e.preventDefault();
        $.ajax({ type: "POST", url: ACC.config.encodedContextPath + "/login/register/processRegistration", data: regData, success: function (response) {
                $('select[name=email]').next('span').remove();
                $('select[name=titleCode]').next('span').remove();
                $('input[name=firstName]').next('span').remove();
                $('input[name=lastName]').next('span').remove();
                $('input[name=email]').next('span').remove();
                $('input[name=pwd]').next('span').remove();
                $('input[name=checkPwd]').next('span').remove();
                $('input[name=mobileNumber]').next('span').remove();
                if (response.formValidationFailed) {
                    $.each(response.errorMessages, function (key, value) {
                        if (key === 'recaptcha.challenge.field.invalid') {
                            $("#g-recaptcha_incorrect").text("Invalid answer to captcha challenge");
                            $('#g-recaptcha_incorrect').show();
                        }
                        $('input[name=' + key + ']').next('span').remove();
                        $('input[name=' + key + ']').after('<span style="color:red">' + value + '</span>');
                    });
                    if (response.errorMessages['titleCode']) {
                        $('select[name=titleCode]').next('span').remove();
                        $('select[name=titleCode]').after('<span style="color:red">' + response.errorMessages['titleCode'] + '</span>');
                    }
                }
                else {
                    window.location.replace(ACC.config.encodedContextPath);
                }
            }, error: function (e) { ACC.notification.siteNotification('<div class="addToCart-notification">Fill the mandatory fields</div>', 'red', 5000); } });
    });
    $(document).on("click", ".js-otp-validation", function (e) {
        var otp = $("#user_onetimepassword").val();
        var data = regData + '&oneTimePassword=' + otp;
        $.ajax({ type: "POST", url: ACC.config.encodedContextPath + "/login/register/verifyOTP", data: data, success: function (response) {
                if (response) {
                    window.location.replace(ACC.config.encodedContextPath);
                }
                else {
                    ACC.colorbox.open("Otp Verification", { html: '<input id="user_onetimepassword" type="text" maxlength="4"/>'
                            + '<button class="js-otp-verification countdown-verification">Resend</button>'
                            + '<div><span class="timer"></span></div>'
                            + '<button class="js-otp-validation otp-countdown-verification">SUBMIT</button>'
                            + '</br> <span style="color:orange" class="otp-validation-mssg"> Please enter valid OTP </span>', width: "460px" });
                    showOTPCountDown(false);
                }
            }, error: function (e) { } });
    });
    $(document).on("click", ".js-otp-checkout-validation", function (e) {
        var otp = $("#user_onetimepassword").val();
        var data = regData + '&oneTimePassword=' + otp;
        $.ajax({ type: "POST", url: ACC.config.encodedContextPath + "/login/checkout/verifyOTP", data: data, success: function (response) {
                if (response) {
                    $('#checkoutLuluRegisterForm').submit();
                }
                else {
                    ACC.colorbox.open("Otp Verification", { html: '<input id="user_onetimepassword" type="text" maxlength="4"/>'
                            + '<button class="js-otp-verification countdown-verification">Resend</button>'
                            + '<div><span class="timer"></span></div>'
                            + '<button class="js-otp-checkout-validation otp-countdown-verification">SUBMIT</button>'
                            + '</br> <span style="color:orange" class="otp-validation-mssg"> Please enter valid OTP </span>', width: "460px" });
                    showOTPCountDown(false);
                }
            }, error: function (e) { } });
    });
    $(document).on("click", ".js-otp-summary-validation", function (e) {
        var otp = $("#user_onetimepassword").val();
        var data = regData + '&oneTimePassword=' + otp;
        $.ajax({ type: "POST", url: ACC.config.encodedContextPath + "/checkout/summary/register/verifyOTP", data: data, success: function (response) {
                if (response) {
                    window.location.replace(ACC.config.encodedContextPath);
                }
                else {
                    ACC.colorbox.open("Otp Verification", { html: '<input id="user_onetimepassword" type="text" maxlength="4"/>'
                            + '<button class="js-otp-verification countdown-verification">Resend</button>'
                            + '<div><span class="timer"></span></div>'
                            + '<button class="js-otp-summary-validation otp-countdown-verification">SUBMIT</button>'
                            + '</br> <span style="color:orange" class="otp-validation-mssg"> Please enter valid OTP </span>', width: "460px" });
                    showOTPCountDown(false);
                }
            }, error: function (e) { } });
    });
    $(document).on("click", ".js-checkout-otp-verification", function (e) {
        var valid = customValidateForm();
        if (!valid) {
            return;
        }
        regData = $('#checkoutLuluRegisterForm').serialize();
        var preAuctionData = document.getElementById('loginPopupData');
        e.preventDefault();
        $.ajax({ type: "POST", url: ACC.config.encodedContextPath + "/login/checkout/checkoutRegister", data: regData, success: function (response) { preAuctionData.innerHTML = response; $("#checkoutPopupModel").css('display', 'block'); }, error: function (e) { } });
    });
    $('.previous_step').click(function () { location.reload(); });
    $('#radio-div').find('input').removeAttr('checked');
    $('#radio-div').find('label.active').click();
    $('#checkout-guest-login').click(function () {
        $('.checkout-guest-user-content').find('.guestEmail').attr('data-value', $('.checkout-guest-user-content').find('.guestEmail').val());
        $('.checkout-guest-user-content').find('.confirmGuestEmail').attr('data-value', $('.checkout-guest-user-content').find('.confirmGuestEmail').val());
        $('#radio-div label').removeClass('active');
        $(this).addClass('active');
        var orginalEmail = $(".guestEmail").val();
        var confirmationEmail = $(".confirmGuestEmail").val();
        var emailRegex = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        if (emailRegex.test(orginalEmail) && emailRegex.test(confirmationEmail)) {
            if (orginalEmail == confirmationEmail) {
                $(".guestCheckoutBtn").removeAttr("disabled");
            }
            else {
                $(".guestCheckoutBtn").attr("disabled", "disabled");
            }
        }
        else {
            $(".guestCheckoutBtn").attr("disabled", "disabled");
        }
        $('#checkout-user-login').css('color', '#999999');
        $(".form-error").remove();
        $(this).css('color', '#27272d');
        $('#checout-guest-content').show();
        $('#checout-user-content').hide();
        $('#commonEmail-error').text('');
        $('#emailValidationError').text();
    });
    $('#checkout-user-login').click(function () { $('#radio-div label').removeClass('active'); $(this).addClass('active'); $('#checkout-guest-login').css('color', '#999999'); $(".form-error").remove(); $(this).css('color', '#27272d'); $('#checout-user-content').show(); $('#checout-guest-content').hide(); $('#commonEmail-error').text(''); $('#emailValidationError').text(); });
});
$(document).on("click", ".js-summary-otp-verification", function (e) { regData = $('#checkoutLuluRegisterForm').serialize(); var preAuctionData = document.getElementById('loginPopupData'); e.preventDefault(); $.ajax({ type: "POST", url: ACC.config.encodedContextPath + "/checkout/summaryRegister", data: regData, success: function (response) { preAuctionData.innerHTML = response; $("#checkoutPopupModel").css('display', 'block'); }, error: function (e) { } }); });
$(document).on("click", "#checkoutPopupClose", function (e) { $('#checkoutPopupModel').css('display', 'none'); });
function customValidateForm() {
    var email = document.forms["luLuRegistration"]["email"].value;
    var titleCode = document.forms["luLuRegistration"]["titleCode"].value;
    var firstName = document.forms["luLuRegistration"]["firstName"].value;
    var lastName = document.forms["luLuRegistration"]["lastName"].value;
    var pwd = document.forms["luLuRegistration"]["pwd"].value;
    var checkPwd = document.forms["luLuRegistration"]["checkPwd"].value;
    var mobileNumber = document.forms["luLuRegistration"]["mobileNumber"].value;
    $('input[name=email]').next('span').remove();
    $('select[name=titleCode]').next('span').remove();
    $('input[name=firstName]').next('span').remove();
    $('input[name=lastName]').next('span').remove();
    $('input[name=pwd]').next('span').remove();
    $('input[name=checkPwd]').next('span').remove();
    $('input[name=mobileNumber]').next('span').remove();
    var flag = true;
    if (email == "") {
        $('input[name=email]').after('<span style="color:red">Please enter valid email id</span>');
        flag = false;
    }
    if (titleCode == "") {
        $('select[name=titleCode]').after('<span style="color:red">Please select title</span>');
        flag = false;
    }
    if (firstName == "") {
        $('input[name=firstName]').after('<span style="color:red">Please enter your first name</span>');
        flag = false;
    }
    if (lastName == "") {
        $('input[name=lastName]').after('<span style="color:red">Please enter your last name</span>');
        flag = false;
    }
    if (pwd == "") {
        $('input[name=pwd]').after('<span style="color:red">Please enter password</span>');
        flag = false;
    }
    if (checkPwd == "") {
        $('input[name=checkPwd]').after('<span style="color:red">Please enter password</span>');
        flag = false;
    }
    if (mobileNumber == "") {
        $('input[name=mobileNumber]').after('<span style="color:red">Please enter valid mobile number</span>');
        flag = false;
    }
    return flag;
}
var intervalId;
var distance;
function showOTPCountDown(needCountDownReStart) {
    clearInterval(intervalId);
    $('.countdown-verification').hide();
    $('.otp-validation-mssg').delay(500).fadeOut();
    if (needCountDownReStart) {
        distance = 180000;
    }
    intervalId = setInterval(function () {
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        $(".timer").html("0" + minutes + ":" + seconds);
        distance -= 1000;
        if (distance < 0) {
            clearInterval(intervalId);
            $('.countdown-verification').show();
            $('#invalidOtpMsg').hide();
            $(".timer").html('<span style="color:orange"> Time is up, you need to resend code again </span>');
        }
    }, 1000);
}
var pwdUpdateData;
$(document).on("click", ".js-updatepwd-otp-verification", function (e) {
    pwdUpdateData = $('#updatePasswordForm').serialize();
    $(".otp-failure").addClass("d-none");
    e.preventDefault();
    $.ajax({ type: "POST", url: ACC.config.encodedContextPath + "/my-account/update-password/generateOTP", data: pwdUpdateData, success: function (response) {
            $('input[name=currentPassword]').next('span').remove();
            $('input[name=newPassword]').next('span').remove();
            $('input[name=checkNewPassword]').next('span').remove();
            console.log(response);
            if (response.otpCreated) {
                $("#getotpmodal").modal("show");
                showOTPCountDown(true);
            }
            else if (!response.otpCreated && !response.formValidationFailed) {
                $("#getotpmaxattemptmodal").modal("show");
            }
            else if (response.formValidationFailed) {
                $.each(response.errorMessages, function (key, value) { $('input[name=' + key + ']').after('<span style="color:red" class="error">' + $('input[name="' + value + '"]').val() + '</span>'); });
            }
            else {
                ACC.notification.siteNotification('<div class="addToCart-notification">Fill the mandatory fields</div>', 'red', 5000);
            }
        }, error: function (e) { $("#getotperrormodal").modal("show"); } });
});
$(document).on("click", ".js-updatepwd-otp-validation", function (e) { $('.loading-overlay').show(); e.preventDefault(); var otp = $("#user_onetimepassword").val(); var data = pwdUpdateData + '&oneTimePassword=' + otp; var submitButtonLable = $("#submit_button_lable").val(); var resendButtonLable = $("#resend_button_lable").val(); $('#updatePasswordOTP').val(otp); $('#updatePasswordForm').submit(); });
$(document).on("click", "#js-maaxing-pwd-reset-send-mail", function (e) { var emailId = $('#maaxing_send_mail').val(); var data = "emailId=" + emailId; $.ajax({ type: "POST", url: ACC.config.encodedContextPath + "/login/pw/request/maxxingUser", data: data, success: function (resetPwdSuccessPopup) { $('#NonHybrisCustomerResetPwdModal').modal('hide'); $('#NonHybrisCustomerResetConfSentModal').html(resetPwdSuccessPopup); $('#NonHybrisCustomerResetConfSentModal').removeClass('cboxElement'); $('#NonHybrisCustomerResetConfSentModal').modal('show'); }, error: function (e) { } }); });
$("#requestOTPBtn").click(function () { var otpLabel = $("#customPasswordOTP").val(); $(".label-value").html(otpLabel); });
$(document).ready(function () {
    $('#register_email').on('change', function () { $('#register_email').valid(); $('#register_email').closest('.form-group').find('.register-form_error').remove(); $('#register_email').removeClass('input-validation-error'); });
    $('#register_firstName').on('change', function () { $('#register_firstName').valid(); $('#register_firstName').closest('.form-group').find('.register-form_error').remove(); $('#register_firstName').removeClass('input-validation-error'); });
    $('#register_title').blur(function () { if ($(this).val()) {
        $('#register_title').closest('.form-group').find('.register-form_error').remove();
        $('#register_title').removeClass('input-validation-error');
    } });
    $('#register_lastName').blur(function () { if ($(this).val()) {
        $('#register_lastName').closest('.form-group').find('.register-form_error').remove();
        $('#register_lastName').removeClass('input-validation-error');
    } });
    $('#register_phone').change(function () {
        $('#register_phone').closest('.form-group').find('.register-form_error').remove();
        $('#register_phone').removeClass('input-validation-error');
        $('.intl-tel-input').removeClass('input-validation-error');
        $('.intl-tel-input').next('.resgister_form_sucess_msg').remove();
        $(".otp-input-field-registration").addClass("d-none");
        $(".otp-submit-button-registration").addClass("d-none");
        $(".verify-otp-div").removeClass("d-none");
        $(".otp-verified-text").addClass("d-none");
        var isPhoneVerificationEnabled = $('#isPhoneVerificationEnabled').val();
        if (isPhoneVerificationEnabled == 'true' || !validatePhoneNumber()) {
            $('.js-otp-verification').attr('disabled', true);
        }
        else if (isPhoneVerificationEnabled == 'false' && validatePhoneNumber() && $('#registerChkTermsConditions').prop('checked')) {
            $('.js-otp-verification').attr('disabled', false);
        }
        if (document.getElementById("otpEnteredFlag") != null) {
            document.getElementById("otpEnteredFlag").value = false;
        }
        $('.register-page-mobile-warning').removeClass("d-none");
        $(".resend-otp-button-registration").addClass("d-none");
    });
    $('#password').blur(function () { if ($(this).val()) {
        $('#password').closest('.form-group').find('.register-form_error').remove();
        $('#password').removeClass('input-validation-error');
    } });
    $('#registercheckPwd').blur(function () { if ($(this).val()) {
        $('#registercheckPwd').closest('.form-group').find('.register-form_error').remove();
        $('#registercheckPwd').removeClass('input-validation-error');
    } });
    $('#registercheckPwd').keyup(function () {
        var matching = $("#matching").val();
        var notMatching = $("#not_matching").val();
        if ($(this).val()) {
            var pwd = $('#password').val();
            if (pwd != '') {
                var checkPwd = $('#registercheckPwd').val();
                if (pwd == checkPwd) {
                    $('#registercheckPwd').next('span').remove();
                    $('#registercheckPwd').after('<span style="color:green">' + matching + '</span>');
                }
                else {
                    $('#registercheckPwd').next('span').remove();
                    $('#registercheckPwd').after('<span style="color:red">' + notMatching + '</span>');
                }
            }
        }
    });
});
$('#requestOTPBtn').click(function () {
    $(".multiple-user-error").addClass("d-none");
    $(".no-user-found-error").addClass("d-none");
    $(".login-otp-sent-successfully").addClass("d-none");
    $(".invalid-otp-login-error").addClass("d-none");
    var emailId = $("#register_phone").val().replaceAll(" ", "");
    if (emailId == "") {
        $('#commonEmail-error').text($('#commonEmail-error-meg').val());
    }
    else {
        var phonePrefix = $("#phonePrefix").val();
        var completePhone = phonePrefix + emailId;
        var data = 'uId=' + completePhone;
        $.ajax({ url: ACC.config.encodedContextPath + "/login/requestOTP", data: data, type: "POST", success: function (response) {
                if (response.customerDetails == '1') {
                    $(".no-user-found-error").removeClass("d-none");
                }
                else if (response.customerDetails == '2') {
                    $(".multiple-user-error").removeClass("d-none");
                }
                else {
                    if (response.multipleAccounts) {
                        $('#multipleAcccountsLoginData').data().mulitpleaccount = response.multipleAccounts;
                        $('#multipleAcccountsLoginData').data().listofemail = response.listOfEmails;
                    }
                    $(".login-otp-sent-successfully").removeClass("d-none");
                }
            }, error: function (e) { } });
    }
});
$('#registerChkTermsConditions').attr('value', 'false');
$('#registerChkTermsConditions').removeAttr('name');
var isPhoneNumberVerified = document.getElementById("otpEnteredFlag");
$('.check-termcondition').change(function () {
    var checkValue = $('#registerChkTermsConditions').attr('value');
    if (checkValue == "true") {
        $('#registerChkTermsConditions').removeAttr('name');
        $('#registerChkTermsConditions').attr('value', 'false');
        $('.js-otp-verification').attr('disabled', true);
    }
    else if (checkValue == "false") {
        $('#registerChkTermsConditions').attr('name', 'termsCheck');
        $('#registerChkTermsConditions').attr('value', 'true');
    }
    enableAndDisableSubmitBtn();
});
function enableAndDisableSubmitBtn() {
    var checkValue = $('#registerChkTermsConditions').attr('value');
    if (checkValue == "true" && isPhoneNumberVerified == null) {
        $('.js-otp-verification').removeAttr('disabled');
    }
    else if (checkValue == "true" && isPhoneNumberVerified != null && document.getElementById("otpEnteredFlag").value == "true") {
        $('.js-otp-verification').removeAttr('disabled');
    }
    else {
        $('.js-otp-verification').attr('disabled', true);
    }
}
$('#subscribedEmail').removeAttr('name');
$('#subscribedEmail').attr('value', 'false');
$('#subscribedPhone').removeAttr('name');
$('#subscribedPhone').attr('value', 'false');
$('.pwd-div-checked').change(function () { var checkValue = $('#subscribedEmail').attr('value'); if (checkValue == "true") {
    $('#subscribedEmail').removeAttr('name');
    $('#subscribedEmail').attr('value', 'false');
}
else if (checkValue == "false") {
    $('#subscribedEmail').attr('name', 'optinEmail');
    $('#subscribedEmail').attr('value', 'true');
} });
$('.cpwd-div-checked').change(function () { var checkValue = $('#subscribedPhone').attr('value'); if (checkValue == "true") {
    $('#subscribedPhone').removeAttr('name');
    $('#subscribedPhone').attr('value', 'false');
}
else if (checkValue == "false") {
    $('#subscribedPhone').attr('name', 'optinSms');
    $('#subscribedPhone').attr('value', 'true');
} });
$('#consentChk').removeAttr('name');
$('#consentChk').attr('value', 'false');
$('.check-consent').change(function () { var checkConsentValue = $('#consentChk').attr('value'); if (checkConsentValue == "true") {
    $('#consentChk').removeAttr('name');
    $('#consentChk').attr('value', 'false');
}
else if (checkConsentValue == "false") {
    $('#consentChk').attr('name', 'consentForm.consentGiven');
    $('#consentChk').attr('value', 'true');
} });
function validateLoginForm(e) {
    var emailId = $("#emailAddress").val();
    var isPhone = $.isNumeric(emailId.replaceAll(" ", ""));
    var login_email_error = $("#login_email_error_text").val();
    var login_password_error = $("#login_password_error_text").val();
    if (isPhone) {
        var phonePrefix = $("#phonePrefix").val();
        var phoneNumber = $("#register_phone").val().replaceAll(" ", "");
        var completePhone = phonePrefix + phoneNumber;
        $('input[name="j_username"]').val(completePhone);
    }
    var password = $("#j_password").val();
    var emailRegex = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    $('input[name=emailAddress]').next('span').remove();
    $('input[name=j_password]').next('span').remove();
    var flag = true;
    if (!isPhone && (emailId == "" || !emailRegex.test(emailId))) {
        $('input[name=emailAddress]').after('<span style="color:red">' + login_email_error + '</span>');
        flag = false;
    }
    if (password == "") {
        $('input[name=j_password]').after('<span style="color:red">' + login_password_error + '</span>');
        flag = false;
    }
    if (flag && $('#multipleAcccountsLoginData').data().mulitpleaccount) {
        e.preventDefault();
        $(".invalid-otp-login-error").addClass("d-none");
        $("#containerForEmailIds").html("");
        $(".js-primary-id-notselected-error").addClass("d-none");
        var otp = $('input[name=j_password]').val();
        var data = "otp=" + otp;
        $.ajax({ url: ACC.config.encodedContextPath + "/login/verifyOtp", data: data, type: "POST", success: function (response) {
                if (response) {
                    var emailIds = $('#multipleAcccountsLoginData').data().listofemail;
                    var infoPara = document.getElementById("multipleAccountLoginPopupInfoPara");
                    bold = document.createElement('strong'), text = document.createTextNode(" " + $("#j_username").val() + " .");
                    bold.appendChild(text);
                    infoPara.appendChild(bold);
                    var i = 0;
                    for (var value of emailIds) {
                        $('#containerForEmailIds').append($('<input>').prop({ type: 'radio', id: value, name: 'primaryId', value: value, class: 'custom-control-input part-radio-button-div-' + i })).append($('<label>').prop({ for: value, class: 'custom-control-label part-radio-button-div-' + i }).html(value));
                        $(".part-radio-button-div-" + i).wrapAll("<div class='custom-control custom-radio radio-button-div' style='padding-bottom: 10px' />");
                        i++;
                    }
                    $(".radio-button-div").wrapAll("<p/>");
                    $("#multipleAccountsAtLoginPopup").modal("show");
                }
                else {
                    $(".login-otp-sent-successfully").addClass("d-none");
                    $(".invalid-otp-login-error").removeClass("d-none");
                }
            }, error: function () { ACC.notification.siteNotification('<div class="addToCart-notification">Fill the mandatory fields</div>', 'red', 5000); } });
    }
    return flag;
}
$('#submitPrimaryEmailId').click(function () {
    var selectedPrimaryId = $("input[name='primaryId']:checked").val();
    if (selectedPrimaryId == undefined || selectedPrimaryId == "") {
        $(".js-primary-id-notselected-error").removeClass("d-none");
    }
    else {
        $(".js-primary-id-notselected-error").addClass("d-none");
        var data = "uId=" + selectedPrimaryId;
        $.ajax({ url: ACC.config.encodedContextPath + "/login/updatePrimaryEmail", data: data, type: "POST", success: function (response) {
                if (response) {
                    document.getElementById("loginFormToSubmit").submit();
                }
                else {
                    $(".js-primary-id-notselected-error").removeClass("d-none");
                }
            }, error: function () { $("#multipleAccountsAtLoginPopup").modal("hide"); ACC.notification.siteNotification('<div class="addToCart-notification">Fill the mandatory fields</div>', 'red', 5000); } });
    }
});
function validateResetPwdForm() {
    var pwd = $("#password").val().trim();
    var updatePwd = $("#registercheckPwd").val().trim();
    $('input[name="pwd"]').next('span').remove();
    $('input[name=checkPwd]').next('span').remove();
    var reset_password_error = $("#reset_password_error_text").val();
    flag = true;
    if (pwd == "") {
        $('input[name=pwd]').after('<span style="color:red">' + reset_password_error + '</span>');
        flag = false;
    }
    if (updatePwd == "") {
        $('input[name=checkPwd]').after('<span style="color:red">' + reset_password_error + '</span>');
        flag = false;
    }
    return flag;
}
$('#oneTimePassword').on("keyup blur", function () {
    var otp = $("#oneTimePassword").val();
    var invalidOtpError = $("#registerIncorrectOtpError").val();
    if (otp == undefined || otp == '' || otp.length < 4) {
        $('.intl-tel-input').next('.resgister_form_sucess_msg').remove();
        $('.intl-tel-input').next('.register-form_error').remove();
        $('.intl-tel-input').after('<span class="register-form_error">' + invalidOtpError + '</span>');
        $('.intl-tel-input').addClass('input-validation-error');
        $('#oneTimePassword').addClass('input-validation-error');
        document.getElementById("otpEnteredFlag").value = false;
        enableAndDisableSubmitBtn();
    }
    else {
        $('.intl-tel-input').next('.resgister_form_sucess_msg').remove();
        $('.intl-tel-input').next('.register-form_error').remove();
        $('.intl-tel-input').removeClass('input-validation-error');
        $('#oneTimePassword').removeClass('input-validation-error');
        document.getElementById("otpEnteredFlag").value = true;
        enableAndDisableSubmitBtn();
    }
});
function getKeyByValue(object, value) { return Object.keys(object).find(key => object[key] === value); }
$(document).on("click", ".verify-otp-button-registration", function () {
    $('.loading-overlay').show();
    var number = $("#register_phone").val().replaceAll(" ", "");
    var phonePrefix = $("#phonePrefix").val();
    var invalidPhoneNumberError = $("#invalidPhoneNumberError").val();
    var registerOtpSentSuccessMsg = $("#registerOtpSentSuccessMsg").val();
    var countryOfPhoneNumber = getKeyByValue(ACC.config.phoneCodes, phonePrefix);
    $('.intl-tel-input').next('.resgister_form_sucess_msg').remove();
    document.getElementById("oneTimePassword").value = "";
    if (number == 'undefined' || number == "") {
        $('.intl-tel-input').next('.register-form_error').remove();
        $('.intl-tel-input').after('<span class="register-form_error">' + invalidPhoneNumberError + '</span>');
        $('.intl-tel-input').addClass('input-validation-error');
        $('.loading-overlay').hide();
        return;
    }
    else if (!validatePhoneNumber()) {
        $('.intl-tel-input').next('.register-form_error').remove();
        $('.intl-tel-input').after('<span class="register-form_error">' + invalidPhoneNumberError + '</span>');
        $('.intl-tel-input').addClass('input-validation-error');
        $('.loading-overlay').hide();
        return;
    }
    else if (ACC.config.customerPreference.country != countryOfPhoneNumber) {
        $('.intl-tel-input').next('.register-form_error').remove();
        $('.intl-tel-input').after('<span class="register-form_error">' + invalidPhoneNumberError + '</span>');
        $('.intl-tel-input').addClass('input-validation-error');
        $('.loading-overlay').hide();
        return;
    }
    else {
        var phoneNumber = phonePrefix + number;
        var data = "uId=" + phoneNumber;
        $.ajax({ url: ACC.config.encodedContextPath + "/register/requestOTP", data: data, type: "POST", success: function (response) {
                if (response.otpCreated) {
                    $('.loading-overlay').hide();
                    $(".otp-input-field-registration").removeClass("d-none");
                    $(".otp-submit-button-registration").removeClass("d-none");
                    $(".verify-otp-div").addClass("d-none");
                    $('.intl-tel-input').next('.register-form_error').remove();
                    $('.intl-tel-input').after('<span  class="resgister_form_sucess_msg" style="color:green">' + registerOtpSentSuccessMsg + '</span>');
                    document.getElementById("oneTimePassword").focus();
                    $(".resend-otp-button-registration").removeClass("d-none");
                }
                else {
                    $('.loading-overlay').hide();
                    if (response.errorMessages != null && response.errorMessages.size != 0) {
                        $('#register_phone').closest('.form-group').find('.register-form_error').remove();
                        $('#register_phone').removeClass('input-validation-error');
                        $('.intl-tel-input').removeClass('input-validation-error');
                        $(".resend-otp-button-registration").addClass("d-none");
                        $.each(response.errorMessages, function (key, value) { $('.intl-tel-input').next('.register-form_error').remove(); $('.intl-tel-input').after('<span class="register-form_error">' + value + '</span>'); $('.intl-tel-input').addClass('input-validation-error'); });
                    }
                }
            }, error: function (e) { $('.loading-overlay').hide(); ACC.notification.siteNotification('<div class="addToCart-notification">Fill the mandatory fields</div>', 'red', 5000); } });
    }
});
$(document).on("click", ".confirm-otp-button-registration", function () {
    $('#register_phone').closest('.form-group').find('.register-form_error').remove();
    $('#register_phone').removeClass('input-validation-error');
    $('.intl-tel-input').removeClass('input-validation-error');
    var registerIncorrectOtpError = $("#registerIncorrectOtpError").val();
    var otp = $("#oneTimePassword").val().replaceAll(" ", "");
    var otpRegex = /^\d{4}$/;
    if (otpRegex.test(otp)) {
        var data = "otp=" + otp;
        $.ajax({ url: ACC.config.encodedContextPath + "/register/verifyOTP", data: data, type: "POST", success: function (response) {
                if (response) {
                    $(".otp-input-field-registration").addClass("d-none");
                    $(".otp-submit-button-registration").addClass("d-none");
                    $('.intl-tel-input').next('.resgister_form_sucess_msg').remove();
                    $('#register_phone').closest('.form-group').find('.register-form_error').remove();
                    $('#register_phone').removeClass('input-validation-error');
                    $('.intl-tel-input').removeClass('input-validation-error');
                    $(".otp-verified-text").removeClass("d-none");
                    document.getElementById("otpEnteredFlag").value = true;
                    var termsCheckBox = document.getElementById("registerChkTermsConditions");
                    if (termsCheckBox.checked) {
                        $('.js-otp-verification').removeAttr('disabled');
                    }
                    $('.register-page-mobile-warning').addClass("d-none");
                    $(".resend-otp-button-registration").addClass("d-none");
                }
                else {
                    $('.intl-tel-input').next('.resgister_form_sucess_msg').remove();
                    $('.intl-tel-input').next('.register-form_error').remove();
                    $('.intl-tel-input').after('<span class="register-form_error">' + registerIncorrectOtpError + '</span>');
                    $(".resend-otp-button-registration").removeClass("d-none");
                }
            }, error: function () { ACC.notification.siteNotification('<div class="addToCart-notification">Fill the mandatory fields</div>', 'red', 5000); } });
    }
    else {
        $('.intl-tel-input').next('.resgister_form_sucess_msg').remove();
        $('.intl-tel-input').next('.register-form_error').remove();
        $('.intl-tel-input').after('<span class="register-form_error">' + registerIncorrectOtpError + '</span>');
        $(".resend-otp-button-registration").removeClass("d-none");
    }
});
function validatePhoneNumber() {
    var actualLength = 0;
    var mobileNumber = $('#register_phone').val().replace(/ /g, "");
    if ($('#phonePrefix').val() == "+971" || $('#phonePrefix').val() == "+966") {
        actualLength = 9;
    }
    else if ($('#phonePrefix').val() == "+91") {
        actualLength = 10;
    }
    else if ($('#phonePrefix').val() == "+60") {
        if (mobileNumber.length == 10) {
            actualLength = 10;
        }
        else {
            actualLength = 9;
        }
    }
    else if ($('#phonePrefix').val() == "+20") {
        actualLength = 10;
        if (mobileNumber.length == 9) {
            actualLength = 9;
        }
        if (mobileNumber.length == 8) {
            actualLength = 8;
        }
    }
    else if ($('#phonePrefix').val() == "+62") {
        if (mobileNumber.length == 12) {
            actualLength = 12;
        }
        else if (mobileNumber.length == 11) {
            actualLength = 11;
        }
        else if (mobileNumber.length == 10) {
            actualLength = 10;
        }
        else if (mobileNumber.length == 9) {
            actualLength = 9;
        }
        else if (mobileNumber.length == 8) {
            actualLength = 8;
        }
    }
    else {
        actualLength = 8;
    }
    return mobileNumber.length == actualLength;
}
function closeMulitpleAccountLoginPopup() { location.reload(); }
$(document).on('click', '#setPreferences', function () {
    if ($(this).prop('checked')) {
        $('input:checkbox[name=selectedPreferrences]').attr("disabled", false);
    }
    else {
        $('input:checkbox[name=selectedPreferrences]').attr("disabled", true);
        $('input:checkbox[name=selectedPreferrences]').prop('checked', false);
    }
});
$(document).on("click", "#validateCardBtn", function () {
    var giftCardValidateFormData = $("#giftCardValidateForm").serialize();
    var currencyIso = $("main").data('currency-iso-code');
    if ($("#barCode").val()) {
        giftCardValidateFormData = $("#giftCardQrcodeForm").serialize();
    }
    $('.loading-overlay').show();
    $.ajax({ url: ACC.config.encodedContextPath + "/checkout/multi/giftcard/validate", data: giftCardValidateFormData, type: 'POST', success: function (response) {
            $('.loading-overlay').hide();
            if (response && response.approvalCode) {
                $("#detectedCard").text(response.barcode.substring(0, 6) + "xxxxxxxxxxxxxxxx" + response.barcode.substring(22, 26));
                var balance = parseFloat(response.remainingAnount);
                if ((currencyIso == 'OMR') || (currencyIso == 'KWD') || (currencyIso == 'BHD')) {
                    var cartTotal = parseFloat($("#gift_cart-total").val()).toFixed(3);
                }
                else {
                    var cartTotal = parseFloat($("#gift_cart-total").val()).toFixed(2);
                }
                $('#giftCardPayForm').show();
                if ((currencyIso == 'OMR') || (currencyIso == 'KWD') || (currencyIso == 'BHD')) {
                    var id = parseFloat($("#redeemAmount").val()).toFixed(3);
                }
                else {
                    var id = parseFloat($("#redeemAmount").val()).toFixed(2);
                }
                if (response.remainingAnount < cartTotal) {
                    $("#cardAmount").html('<small>' + currencyIso + '</small> ' + response.remainingAnount);
                    $('#redeemAmount').attr('value', response.remainingAnount);
                }
                else {
                    $("#cardAmount").html('<small>' + currencyIso + '</small> ' + response.remainingAnount);
                    $('#redeemAmount').attr('value', cartTotal);
                }
                $('#redeemAmountOriginal').attr('value', response.remainingAnount);
                $('#redeemAmount').on('input propertychange paste', function () { this.value = this.value.replace(/[^0-9\.]/g, ''); var balance = parseFloat(response.remainingAnount); var cartTotal = parseFloat($("#gift_cart-total").val()); var id = parseFloat($("#redeemAmount").val()); if (id > cartTotal || id > balance) {
                    $('#giftcardPayBtn').attr('disabled', true);
                }
                else {
                    $('#giftcardPayBtn').attr('disabled', false);
                } });
                if (response.remainingAnount == 0) {
                    $('.giftcard_form-wrap').hide();
                }
                else {
                    $('.giftcard_form-wrap').show();
                }
                ;
                $('#redeemAmount').keyup(function (e) { this.value = this.value.replace(/[^0-9\.]/g, ''); var id = $(this).val(); var cartTotal = parseFloat($("#redeemAmount").val()); $('#redeemAmount').on("cut copy paste", function (e) { e.preventDefault(); }); });
                $('#redeemAmount').keydown(function (e) { });
                $("#cardCurrency").text(currencyIso);
                $("#gift-card-pay-form").show();
                $("#paycardNumber").val(response.cardNumber);
                $("#paybarCode").val(response.barcode);
                $("#paycardPin").val(response.cardPin);
                if (response.amount > 0) {
                    $("#giftcardPayBtn").show();
                    $("#redeemAmount").show();
                    $("#cardCurrency").show();
                }
            }
            else {
                $("#messageBox").text(response.message);
                $("#messageBox").fadeIn(100);
                $("#messageBox").fadeOut(10000);
            }
        }, error: function (e) { console.log(e); $('.loading-overlay').hide(); } });
    $('#giftCardPayForm').trigger("reset");
});
$(document).on('keyup', "#redeemAmount", function () {
    if (parseFloat($(this).val()) > parseFloat($('#redeemAmountOriginal').val())) {
        $('#giftcardPayBtn').attr('disabled', true);
        $('#giftcardPayBtn').addClass('disabled');
        $('#giftcardPayBtn').addClass('btn');
        $('#giftcardPayBtn').removeClass('btn-success');
    }
    else {
        $('#giftcardPayBtn').attr('disabled', false);
        $('#giftcardPayBtn').removeClass('disabled');
        $('#giftcardPayBtn').removeClass('btn');
        $('#giftcardPayBtn').addClass('btn-success');
    }
});
$(document).on("click", "#giftcardPayBtn", function () {
    $('.loading-overlay').show();
    var redirectUrl = "";
    $.ajax({ url: ACC.config.encodedContextPath + '/checkout/multi/payment-method/checkAndExtendReservations', type: 'GET', success: function (response) {
            if ((response.success == true)) {
                var giftCardPayFormData = $("#giftCardPayForm").serialize();
                $.ajax({ url: ACC.config.encodedContextPath + "/checkout/multi/giftcard/pay", data: giftCardPayFormData, type: 'POST', success: function (response) {
                        if (response.transactionStatus == "ACCEPTED") {
                            window.location.href = ACC.config.encodedContextPath + "/checkout/orderConfirmation/" + response.invoiceNumber;
                        }
                        else if (response.transactionStatus == "CAPTURE_PENDING") {
                            $("#infoBox").text($("#paymentSuccessMessage").val());
                            $("#infoBox").fadeIn(100);
                            $("#infoBox").fadeOut(5000);
                            if (ACC.config.siteName === 'lulu-in') {
                                redirectUrl = ACC.config.encodedContextPath + "/checkout/multi/payment-method-india/add";
                            }
                            else if (ACC.config.siteName === 'lulu-qa') {
                                redirectUrl = ACC.config.encodedContextPath + "/checkout/multi/payment-method-qatar/add";
                            }
                            else if (ACC.config.siteName === 'lulu-bh') {
                                redirectUrl = ACC.config.encodedContextPath + "/checkout/multi/payment-method-bahrain/add";
                            }
                            else if (ACC.config.siteName === 'lulu-om') {
                                redirectUrl = ACC.config.encodedContextPath + "/checkout/multi/payment-method-oman/add";
                            }
                            else if (ACC.config.siteName === 'lulu-kw') {
                                redirectUrl = ACC.config.encodedContextPath + "/checkout/multi/payment-method-kuwait/add";
                            }
                            else {
                                redirectUrl = ACC.config.encodedContextPath + "/checkout/multi/payment-method/add";
                            }
                            window.location.href = redirectUrl;
                        }
                        else {
                            $("#messageBox").text(response.transactionDescription);
                            $("#messageBox").fadeIn(100);
                            $("#messageBox").fadeOut(10000);
                            $('.loading-overlay').hide();
                        }
                    }, error: function (e) { console.log(e); $('.loading-overlay').hide(); $("#messageBox").text($("#paymentErrorMessage").val()); $("#messageBox").fadeIn(100); $("#messageBox").fadeOut(10000); } });
            }
            else {
                var dataForDisplayOnModal = response;
                $.ajax({ type: "POST", contentType: 'application/json', url: ACC.config.encodedContextPath + '/checkout/multi/payment-method/displayReservationResults', data: JSON.stringify(dataForDisplayOnModal), success: function (result) { $('#CheckoutDeliverySlotAndStockReservationModal').html(result); $('#CheckoutDeliverySlotAndStockReservationModal').removeClass('cboxElement'); $('#CheckoutDeliverySlotAndStockReservationModal').modal('show'); $('.loading-overlay').hide(); }, error: function (error) { console.error(error); window.location.href = ACC.config.encodedContextPath + '/cart'; } });
            }
        }, error: function (error) { console.error(error); $('.loading-overlay').hide(); } });
});
function removeGiftCard(event) {
    var giftCardRedeemCancelData = $(event).closest("form")[0];
    var from = $(giftCardRedeemCancelData).serialize();
    var redirectUrl = "";
    $('.loading-overlay').show();
    $.ajax({ url: ACC.config.encodedContextPath + "/checkout/multi/giftcard/cancelRedeem", data: from, type: 'POST', success: function (response) {
            $('.loading-overlay').hide();
            if (response.transactionStatus == "ACCEPTED" || response.transactionStatus == "CANCELLED") {
                $("#infoBox").text($("#removeSuccessMessage").val());
                $("#infoBox").fadeIn(100);
                $("#infoBox").fadeOut(5000);
                if (ACC.config.siteName === "lulu-in") {
                    window.location.href = ACC.config.encodedContextPath + "/checkout/multi/payment-method-india/add";
                }
                else if (ACC.config.siteName === 'lulu-qa') {
                    window.location.href = ACC.config.encodedContextPath + "/checkout/multi/payment-method-qatar/add";
                }
                else if (ACC.config.siteName === 'lulu-bh') {
                    window.location.href = ACC.config.encodedContextPath + "/checkout/multi/payment-method-bahrain/add";
                }
                else if (ACC.config.siteName === 'lulu-om') {
                    window.location.href = ACC.config.encodedContextPath + "/checkout/multi/payment-method-oman/add";
                }
                else if (ACC.config.siteName === 'lulu-kw') {
                    window.location.href = ACC.config.encodedContextPath + "/checkout/multi/payment-method-kuwait/add";
                }
                else {
                    window.location.href = ACC.config.encodedContextPath + "/checkout/multi/payment-method/add";
                }
            }
            else if (response.transactionStatus == "ERROR" || response.transactionStatus == "REJECTED") {
                $("#messageBox").text(response.errorMsg);
                $("#messageBox").fadeIn(100);
                $("#messageBox").fadeOut(5000);
            }
        }, error: function (e) { console.log(e); $('.loading-overlay').hide(); $("#messageBox").text($("#removeErrorMessage").val()); $("#messageBox").fadeIn(100); $("#messageBox").fadeOut(5000); } });
}
window.onload = function () { var txt = document.getElementById('redeemAmount'); txt.addEventListener('keyup', myFunc); function myFunc(e) { var val = this.value; var re = /^([0-9]+[\.]?[0-9]?[0-9]?|[0-9]+)$/g; var re1 = /^([0-9]+[\.]?[0-9]?[0-9]?|[0-9]+)/g; if (re.test(val)) { }
else {
    val = re1.exec(val);
    if (val) {
        this.value = val[0];
    }
    else {
        this.value = "";
    }
} } };
$('#redeemAmount').keypress(function (e) { if (this.value.length == 0 && e.which == 48) {
    return false;
} });
$(document).ready(function () { $("#cardCurrency").each(function () { var value = $(this).next('#redeemAmount').val(); if (value != 0) {
    $(this).hide();
}
else {
    $this.show();
} ; }); $("#cardPin").mask("999999"); });
$('#redeemAmount').bind("keyup keypress", function (e) {
    var code = e.keyCode || e.which;
    if (code == 13) {
        if ($(this).val() == '') {
            e.preventDefault();
            return false;
        }
        else {
            e.preventDefault();
        }
    }
});
$(document).ready(function () { $('.giftcard_cont-wrapper input[type="radio"]').click(function () { var inputValue = $(this).attr("value"); var targetBox = $("." + inputValue); $(".select").not(targetBox).hide(); $(targetBox).show(); $('#giftCardPayForm').hide(); }); });
$(document).ready(function () { $('#payment-section .nav-tabs li').click(function () { $('#giftCardPayForm').hide(); $('#giftCardValidateForm input[type="text"]').val(""); $('#giftCardQrcodeForm input[type="text"]').val(""); }); });
if (location.pathname.includes("payment-method")) {
    var scanner = new Instascan.Scanner({ video: document.getElementById('preview-qr'), scanPeriod: 5, mirror: false, });
    scanner.addListener('scan', function (content) { document.getElementById("barCode").value = content; $('#barCodeVisible').val(content.substring(0, 6) + "xxxxxxxxxxxxxxxx" + content.substring(22, 26)); var audio = new Audio('/_ui/responsive/common/images/beep.mp3'); audio.play(); scanner.stop(); });
    $(".scan_qrcode-btn").click(function () { Instascan.Camera.getCameras().then(function (cameras) { if (cameras.length > 0) {
        scanner.start(cameras[0]);
        $('input[name="scanQrCode"]').on('change', function () { if ($(this).val() == 1) {
            if (cameras[0] != "") {
                scanner.start(cameras[0]);
            }
            else {
                alert('No Front camera found!');
            }
        }
        else if ($(this).val() == 2) {
            if (cameras[1] != "") {
                scanner.start(cameras[1]);
            }
            else {
                alert('No Back camera found!');
            }
        } });
    }
    else {
        console.error('No cameras found.');
        alert('No cameras found.');
    } }).catch(function (e) { console.error(e); alert(e); }); });
    function ClearFields(ctrl) { var fieldset = ctrl.closest('fieldset'); $('#giftCardValidateForm input[type="text"]').val(""); $('#giftCardQrcodeForm input[type="text"]').val(""); scanner.stop(); }
    $(".left-nav-tab .nav-link").click(function () { ClearFields($(this)); $('#credit_debit').removeClass('d-block'); $('#payByCheckout').removeClass('d-block'); $('#payByCheckout').addClass('d-none'); $('#eWalletCheckout').removeClass('d-block'); $('#eWalletCheckout').addClass('d-none'); $("input:radio").prop("checked", false); $('.gift_wrapper .select').removeClass('d-block'); $('.gift_wrapper .select').addClass('d-none'); $('#gift-card-pay-form').hide(); scanner.stop(); });
    $('#barCode, .gift-card-sop #cardNumber').on('keypress', function (event) {
        if (event.keyCode < 48 || event.keyCode > 57)
            return false;
    });
}
$('.js-giftCard').on('click', function () {
    let cardNumber = $(this).find('.js-giftCardNumber').val();
    let barCode = $(this).find('.js-giftCardBarcode').val();
    if (barCode.length == 26) {
        $('#js-qrRadio').trigger('click');
        $('#barCode').val(barCode);
        $('#barCodeVisible').val(barCode.substring(0, 6) + "xxxxxxxxxxxxxxxx" + barCode.substring(22, 26));
        $('#savedGiftCardsModal').modal('hide');
    }
    else {
        $('#js-numberRadio').trigger('click');
        $('#cardNumber').val(cardNumber);
        $('#savedGiftCardsModal').modal('hide');
    }
});
$('#barCodeVisible').on("input", function () { $('#barCode').val($('#barCodeVisible').val()); });
var cardDetails;
var otpVerified = false;
$(document).on("click", "#validateEmirateIdBtn", function () {
    if ($("#emiratesId").val()) {
        if (document.getElementById("emiratesId") != null) {
            var emiratesId = document.getElementById("emiratesId").value;
        }
        var mocdData = { "emiratesId": emiratesId };
    }
    $('.loading-overlay').show();
    $.ajax({ url: ACC.config.encodedContextPath + "/checkout/multi/giftcard/validateEmirateId", data: JSON.stringify(mocdData), type: "POST", contentType: 'application/json', success: function (response) {
            $('.loading-overlay').hide();
            if (response.ResponseMessage == "MAX_ATTEMPT") {
                $('#emiratesOtp').attr('hidden', true);
                $("#validateEmirateIdOtpBtn").attr('hidden', true);
                $("#invalidEmirateId").attr('hidden', false);
                $("#invalidEmirateId").text($("#maxAttemptsErrorMessage").val());
                $("#invalidOtp").attr('hidden', true);
                $("#emiratePayError").attr('hidden', true);
            }
            else {
                if (response.Phone != null) {
                    cardDetails = response;
                    $('#emiratesOtp').attr('hidden', false);
                    $("#validateEmirateIdOtpBtn").attr('hidden', false);
                    $("#invalidEmirateId").attr('hidden', true);
                    $("#invalidOtp").attr('hidden', true);
                    $("#emiratePayError").attr('hidden', true);
                }
                else {
                    $('#emiratesOtp').attr('hidden', true);
                    $("#validateEmirateIdOtpBtn").attr('hidden', true);
                    $("#invalidEmirateId").attr('hidden', false);
                    $("#invalidEmirateId").text($("#invalidEmirateIdErrorMessage").val());
                    $("#invalidOtp").attr('hidden', true);
                    $("#emiratePayError").attr('hidden', true);
                }
            }
        }, error: function (e) { console.log(e); $('.loading-overlay').hide(); } });
});
$(document).on("click", "#validateEmirateIdOtpBtn", function () {
    var currencyIso = $("main").data('currency-iso-code');
    var emiratesOtp = document.getElementById("emiratesOtp").value;
    var verifyingData = { "otp": emiratesOtp, "mobileNumber": cardDetails.Phone };
    $('.loading-overlay').show();
    $.ajax({ url: ACC.config.encodedContextPath + "/checkout/multi/giftcard/checkEmirateCardBalance", data: JSON.stringify(verifyingData), type: "POST", contentType: 'application/json', success: function (response) {
            $('.loading-overlay').hide();
            if (response.status == "SUCCESS") {
                var balance = cardDetails.CardsResponse[0].OutstandingBalance;
                $("#emirateCardBalance").attr('hidden', false);
                $("#emirateCardAmount").html(balance);
                $("#invalidOtp").attr('hidden', true);
                $("#emiratePayError").attr('hidden', true);
                $("#emirateCurrency").text(currencyIso);
                if (balance > 0) {
                    $("#emirateCurrency").attr('hidden', false);
                    $("#emirateRedeemAmount").attr('hidden', false);
                    $("#emirateRedeemAmount").text(balance);
                    $("#emiratePayBtn").attr('hidden', false);
                    otpVerified = true;
                }
            }
            else if (response.status == "MAX_ATTEMPT") {
                $("#emirateCardBalance").attr('hidden', true);
                $("#invalidOtp").attr('hidden', false);
                $("#invalidOtp").text($("#maxAttemptsErrorMessage").val());
            }
            else {
                $("#emirateCardBalance").attr('hidden', true);
                $("#emiratePayError").attr('hidden', true);
                $("#invalidOtp").attr('hidden', false);
                $("#invalidOtp").text($("#invalidEmirateOtpErrorMessage").val());
            }
        }, error: function (e) { $("#invalidOtp").attr('hidden', false); $('.loading-overlay').hide(); } });
});
$(document).on("click", "#emiratePayBtn", function () {
    var cardNumber = cardDetails.CardsResponse[0].CardNumber;
    var originalTransactionId = cardDetails.TransactionId;
    var isEmirate = true;
    var amount = document.getElementById("emirateRedeemAmount").value;
    var giftCardData = { cardNumber, originalTransactionId, amount, isEmirate };
    $('.loading-overlay').show();
    if (otpVerified == true) {
        $.ajax({ url: ACC.config.encodedContextPath + '/checkout/multi/payment-method/checkAndExtendReservations', type: 'GET', success: function (response) {
                $('.loading-overlay').hide();
                $.ajax({ url: ACC.config.encodedContextPath + "/checkout/multi/giftcard/payByEmirateId", data: JSON.stringify(giftCardData), type: "POST", contentType: 'application/json', success: function (response) {
                        $("#emiratePayError").text(response.transactionDescription);
                        $("#emiratePayError").attr('hidden', false);
                        $('.loading-overlay').hide();
                        if (response.transactionStatus == "ACCEPTED") {
                            window.location.href = ACC.config.encodedContextPath + "/checkout/orderConfirmation/" + response.invoiceNumber;
                        }
                        else if (response.transactionStatus == "CAPTURE_PENDING") {
                            if (ACC.config.siteName === 'lulu-in') {
                                redirectUrl = ACC.config.encodedContextPath + "/checkout/multi/payment-method-india/add";
                            }
                            else {
                                redirectUrl = ACC.config.encodedContextPath + "/checkout/multi/payment-method/add";
                            }
                            window.location.href = redirectUrl;
                        }
                        else {
                            $("#emiratePayError").text(response.transactionDescription);
                            $("#emiratePayError").attr('hidden', false);
                            $('.loading-overlay').hide();
                        }
                    }, error: function (e) { console.log(e); } });
            } });
    }
    $('.loading-overlay').hide();
});
