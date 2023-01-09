const { I } = inject();
class PlansAndBillingPage {
    //Elements--------------------------------------------------  
    btnUnSubscribe = "(//div[text()='Unsubscribe'])[1]";
    rdoSomethingelse = "//input[@id='survey-option-94b3f300-60ee-48e3-8592-881176181292']";
    btnNext = "//button[@class='ck-button px-10 py-3 text-base leading-6 font-medium rounded-md hover:opacity-75 transition ease-in-out duration-150 bg-brand-black text-white ck-black-primary-button']";
    btnBack = "//button[@class='ck-button px-10 py-3 text-base leading-6 font-medium rounded-md hover:opacity-75 transition ease-in-out duration-150 bg-gray-200 text-brand-black ck-gray-primary-button']";
    btnDeclineOffer = "//button[@class='ck-button px-10 py-3 text-base leading-6 font-medium rounded-md hover:opacity-75 transition ease-in-out duration-150 bg-brand-black text-white ck-black-primary-button']";
    lblComment = "//textarea[@placeholder='We really read every answer.']";
    btnGotoAccount = "//button[@class='ck-button px-10 px-10 py-3 text-base leading-6 font-medium rounded-md hover:opacity-75 transition ease-in-out duration-150 bg-brand-black text-white ck-black-primary-button']";
    btnReactivate = "//div[text()='Reactivate']";
    btnCancel = "//div[text ()= 'Cancel']";
    btnConfirm = "//div[text ()= 'Confirm']";
    btnPause = "(//div[text()='Pause'])[1]";
    btn2 = "//div[text()='2']";
    btnPauseNow = "//div[text()='Pause Now']";
    btnResumeNow = "(//div[text()='Resume Now'])[1]";
    txtPlansAndBilling = "//span[text()='Plans and Billing']";
    scrollwords = "//span[@class='MuiSlider-thumb MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium css-7drnjp']";
    btnChangePlan = "//button[@class='bg-purple-1 transition text-white font-bold rounded-xb-large px-4 flex justify-center items-center py-2 active:bg-navy-1 hover:bg-purple-2 text-base mobile:w-full h-12 w-42.5 rounded-xl hover:bg-purple-2 active:bg-navy-1 text-sm']";
    btnchangePlanSubscription = "(//div[text()='Change Plan'])[2]";
    btnEdit = "//button[text()='Edit']";
    selectCard = "//span[text()='Primary']";
    txtEditPaymentMethod = "//span[@aria-label='Click to edit current payment']";
    lblCardNumber = "//input[@id='number']";
    lblExpiryMonth = "//input[@id='exp_month']";
    lblExpiryYear = "//input[@id='exp_year']";
    lblCvv = "//input[@id='cvv']";
    btnUpdate = "//span[@class='cb-button__text']";
    iframe1 = "//div[@id='cb-container']//iframe[1]";
    iframe2 = "//div[@id='cb-container']//iframe[2]";
    iconBackNavigate = "//i[@class='icon-angle-left cb-header__icon']";
    btnAddnew = "//span[@class='cb-button__text']";
    txtPrimary = "(//div[@class='cb-options__head'])[1]";
    txtBackup = "(//div[@class='cb-options__head'])[2]";
    btnBackup = "//span[text()='Backup']";
    txtRemovePaymentMethod = "//div[@class='cb-payment__action']";
    txtEditBillingDetails = "//div[text()='Edit Billing Details']";
    tabBillingAddress = "//div[@class='cb-bar__wrap']";
    lblFirstName = "//input[@id='first_name']";
    lblLastName = "//input[@id='last_name']";
    lblLine1 = "//input[@id='line1']";
    lblLine2 = "//input[@id='line2']";
    lblCity = "//input[@id='city']";
    lblZip = "//input[@id='zip']";
    selectState = "//select[@id ='state_code']";
    selectCountry = "//select[@id ='country']";
    iconCancelAddress = "//div[@aria-label='close checkout']";
    txtViewInvoice = "//div[text()='View Invoices']";
    gettxtBillingShippingAddresses = "//div[@id='cb-header-title']";
    gettxtUpdateYourBillingDetails = "//span[@class='cb-header__text']";
    btnResumeNow = "(//button[contains(@class,'text-purple-1 text-sm')])[1]";

    //Methods---------------------------------------------------
    clickOnUnSubscribeButton() {
        I.click(this.btnUnSubscribe);
    };
    selectSomethingElse() {
        I.click(this.rdoSomethingelse);
    };
    clickOnNextButton() {
        I.click(this.btnNext);
    };
    clickOnBackButton() {
        I.click(this.btnBack);
    };
    clickOnDeclineOfferButton() {
        I.click(this.btnDeclineOffer);
    };
    setCommentWhileUnsubscrible(comment) {
        I.fillField(this.lblComment, comment)
    };
    clickOnConfirmAndCancelButton() {
        I.click(this.btnNext);
    };
    clickOnGotoAccountButton() {
        I.click(this.btnGotoAccount);
    };
    clickOnReactivateButton() {
        I.click(this.btnReactivate);
    };
    clickOnCancelButton() {
        I.click(this.btnCancel);
    };
    clickOnConfirmButton() {
        I.click(this.btnConfirm);
    };
    clickOnPauseButton() {
        I.click(this.btnPause);
    };
    clickOn2Tab() {
        I.click(this.btn2);
    };
    clickOnPauseNowButton() {
        I.click(this.btnPauseNow);
    };
    clickOnResumeNowButton() {
        I.click(this.btnResumeNow);
    };
    clickOnPlansAndBillingTab() {
        I.click(this.txtPlansAndBilling);
    };
    scrollToChangePlan() {
        I.scrollTo(this.scrollwords);
        I.dragSlider(this.scrollwords, -30)
    };
    clickOnChangePlanButton() {
        I.click(this.btnChangePlan);
    };
    clickOnChangePlanButtonForChangeSubscriptionPlan() {
        I.click(this.btnchangePlanSubscription);
    };
    clickOnEditButton() {
        I.click(this.btnEdit);
    };
    selectCardForPayment() {
        I.switchTo(this.iframe1);
        I.click(this.selectCard);
    };
    clickOnEditPaymentMethod() {

        I.click(this.txtEditPaymentMethod);
    };
    setCardNumber(cardnumber) {
        I.wait(3);
        I.fillField(this.lblCardNumber, cardnumber);
    };
    setExpiryMonth(expirymonth) {
        I.fillField(this.lblExpiryMonth, expirymonth);
    };
    setExpiryYear(expiryyear) {
        I.fillField(this.lblExpiryMonth, expiryyear);
    };
    setCvv(cvv) {
        I.fillField(this.lblCvv, cvv);
    };
    clickOnUpdateButton() {
        I.click(this.btnUpdate);
    };
    clickOnBackNavigateIcon() {
        I.waitForVisible(this.btnUpdate, 20);
        I.click(this.iconBackNavigate);
    };
    clickOnAddNewButton() {
        I.waitForVisible(this.btnAddnew, 20)
        I.click(this.btnAddnew);
    };
    clickOnPrimary() {
        I.waitForVisible(this.txtPrimary, 20);
        I.click(this.txtPrimary);
    };
    clickOnBackup() {
        I.click(this.txtBackup);
    };
    clickOnBackupForDelete() {
        I.click(this.btnBackup);
    };
    clickOnRemovePaymentMethod() {
        I.click(this.txtRemovePaymentMethod);
    };
    clickOnConfirmButtonForRemoveCard() {
        I.click(this.btnUpdate);
    };
    clickOnEditBillingDetails() {
        I.click(this.txtEditBillingDetails);
    };
    clickOnBillingAddress() {
        I.switchTo(this.iframe1);
        I.click(this.tabBillingAddress);
    };
    setFirstName(firstname) {
        I.clearField(this.lblFirstName);
        I.fillField(this.lblFirstName, firstname);
    };
    setLastName(lastname) {
        I.clearField(this.lblLastName);
        I.fillField(this.lblLastName, lastname);
    };
    setAddressLine1(line1) {
        I.clearField(this.lblLine1);
        I.fillField(this.lblLine1, line1);
    };
    setAddressLine2(line2) {
        I.clearField(this.lblLine2);
        I.fillField(this.lblLine2, line2);
    };
    setCity(city) {
        I.clearField(this.lblCity);
        I.fillField(this.lblCity, city);
    };
    setZipCode(pincode) {
        I.clearField(this.lblZip);
        I.fillField(this.lblZip, pincode);
    };
    selectStateAsAndhraPradesh() {
        I.selectOption(this.selectState, 'Andhra Pradesh')
    };
    selectCountryAsIndia() {
        I.selectOption(this.selectCountry, 'India')
    };
    clickOnCancelIconAddress() {
        I.click(this.iconCancelAddress);
    };
    clickOnViewInvoices() {
        I.switchTo();
        I.click(this.txtViewInvoice);
    };
    clickOnResumeNowButton() {
        I.click(this.btnResumeNow);
    };

}
module.exports = new PlansAndBillingPage();