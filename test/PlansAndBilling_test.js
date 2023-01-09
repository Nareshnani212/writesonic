const allure = codeceptjs.container.plugins('allure');

Feature('Plans and Billings');

Before(({ I, loginPage, testData, BaseAutomationPage, PlansAndBillingPage, expectedAssertionsPage }) => {
    allure.severity('Blocker');
    I.amOnPage(testData.home.baseUrl);
    loginPage.loginWithPassword(testData.login.email, testData.login.password);
    BaseAutomationPage.clickOnProfileIcon();
    PlansAndBillingPage.clickOnPlansAndBillingTab();
    I.see(expectedAssertionsPage.gettxtsettings);

})
Scenario('Verify Plan Unsubscribe and Pause funtionality', ({ I, BaseAutomationPage, PlansAndBillingPage, testData, expectedAssertionsPage }) => {
    allure.epic('Settings');
    allure.feature('Plans and Billing');
    allure.severity('BLOCKER');
    allure.setDescription('Verify Plan Unsubscribe and Pause funtionality');

    //Plan Unsubscribe
    PlansAndBillingPage.clickOnUnSubscribeButton();
    PlansAndBillingPage.selectSomethingElse();
    PlansAndBillingPage.clickOnNextButton();
    PlansAndBillingPage.clickOnBackButton();
    PlansAndBillingPage.clickOnNextButton();
    PlansAndBillingPage.clickOnDeclineOfferButton();
    PlansAndBillingPage.setCommentWhileUnsubscrible(testData.PlansandBillings.Commentforsubscribe);
    PlansAndBillingPage.clickOnNextButton();
    PlansAndBillingPage.clickOnBackButton();
    PlansAndBillingPage.clickOnNextButton();
    PlansAndBillingPage.clickOnConfirmAndCancelButton();
    I.see(expectedAssertionsPage.PlansandBilling.gettxtYoursubscriptionhasbeencanceled);
    I.see(expectedAssertionsPage.PlansandBilling.gettxtSubscriptioncancelled);
    PlansAndBillingPage.clickOnGotoAccountButton();

    //Plan Reactive
    PlansAndBillingPage.clickOnReactivateButton();
    PlansAndBillingPage.clickOnConfirmButton();
    I.see(expectedAssertionsPage.PlansandBilling.gettxtSubscriptionreactivatedsuccessfully);

    //Plan Pause
    PlansAndBillingPage.clickOnPauseButton();
    PlansAndBillingPage.clickOn2Tab();
    PlansAndBillingPage.clickOnPauseNowButton();
    I.see(expectedAssertionsPage.PlansandBilling.gettxtsubscriptionpausedsuccessfully);

    //Plan Resume
    PlansAndBillingPage.clickOnResumeNowButton();
    PlansAndBillingPage.clickOnConfirmButton();
    I.see(expectedAssertionsPage.PlansandBilling.gettxtSubscriptionresumedsuccesfully);

});

Scenario('Verify Change Subscription Plan', ({ I, PlansAndBillingPage, testData, expectedAssertionsPage }) => {
    allure.epic('Settings');
    allure.feature('Plans and Billing');
    allure.severity('BLOCKER');
    allure.setDescription('Verify Change Subscription Plan ');


    PlansAndBillingPage.scrollToChangePlan();
    PlansAndBillingPage.clickOnChangePlanButton();
    PlansAndBillingPage.clickOnCancelButton();
    PlansAndBillingPage.clickOnChangePlanButton();
    PlansAndBillingPage.clickOnChangePlanButtonForChangeSubscriptionPlan();
    if (I.see(expectedAssertionsPage.PlansandBilling.gettxtSorrypalnchangedmonth)) {
        PlansAndBillingPage.clickOnCancelButton();
    } else {
        I.see(expectedAssertionsPage.PlansandBilling.gettxtsubscriptionchangedsucessfully)
    };
});

Scenario('Verify Add New Card and Payment Method funtionality', ({ I, PlansAndBillingPage, testData, expectedAssertionsPage }) => {
    allure.epic('Settings');
    allure.feature('Plans and Billing');
    allure.severity('BLOCKER');
    allure.setDescription('Verify Add New Card and Payment Method funtionality');

    PlansAndBillingPage.clickOnEditButton();
    PlansAndBillingPage.selectCardForPayment();
    PlansAndBillingPage.clickOnEditPaymentMethod();

    PlansAndBillingPage.setCardNumber(testData.PlansandBillings.cardnumber);
    PlansAndBillingPage.setExpiryMonth(testData.PlansandBillings.expirymonth);
    PlansAndBillingPage.setExpiryYear(testData.PlansandBillings.expiryyear);
    PlansAndBillingPage.setCvv(testData.PlansandBillings.cvv);
    PlansAndBillingPage.clickOnUpdateButton();
    PlansAndBillingPage.clickOnBackNavigateIcon();
    PlansAndBillingPage.clickOnAddNewButton();

    PlansAndBillingPage.setCardNumber(testData.PlansandBillings.cardnumber);
    PlansAndBillingPage.setExpiryMonth(testData.PlansandBillings.expirymonth);
    PlansAndBillingPage.setExpiryYear(testData.PlansandBillings.expiryyear);
    PlansAndBillingPage.setCvv(testData.PlansandBillings.cvv);

    PlansAndBillingPage.clickOnAddNewButton();
    PlansAndBillingPage.clickOnPrimary();
    PlansAndBillingPage.clickOnBackup();
    PlansAndBillingPage.clickOnUpdateButton();

    PlansAndBillingPage.clickOnBackupForDelete();
    PlansAndBillingPage.clickOnRemovePaymentMethod();
    PlansAndBillingPage.clickOnConfirmButtonForRemoveCard();

});
Scenario('Verify Edit Billing Details and View Invoice', ({ I, PlansAndBillingPage, testData, expectedAssertionsPage }) => {
    allure.epic('Settings');
    allure.feature('Plans and Billing');
    allure.severity('BLOCKER');
    allure.setDescription('Verify Edit Billing Details and View Invoice');

    //Edit Billing Details
    PlansAndBillingPage.clickOnEditBillingDetails();
    I.wait(3);
    //I.seeElement(PlansAndBillingPage.gettxtBillingShippingAddresses);
    PlansAndBillingPage.clickOnBillingAddress();
    // I.seeElement(PlansAndBillingPage.gettxtUpdateYourBillingDetails);
    PlansAndBillingPage.setFirstName(testData.PlansandBillings.firstname);
    PlansAndBillingPage.setLastName(testData.PlansandBillings.lastname);
    PlansAndBillingPage.setAddressLine1(testData.PlansandBillings.Addressline1);
    PlansAndBillingPage.setAddressLine2(testData.PlansandBillings.Addressline2);
    PlansAndBillingPage.setCity(testData.PlansandBillings.city);
    PlansAndBillingPage.setZipCode(testData.PlansandBillings.zipcode);
    PlansAndBillingPage.selectStateAsAndhraPradesh();
    PlansAndBillingPage.selectCountryAsIndia();
    PlansAndBillingPage.clickOnUpdateButton();
    PlansAndBillingPage.clickOnCancelIconAddress();

    //View Invoices
    PlansAndBillingPage.clickOnViewInvoices();
    //I.seeElement(PlansAndBillingPage.gettxtBillingShippingAddresses);
});