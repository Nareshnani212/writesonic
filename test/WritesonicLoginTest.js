const allure = codeceptjs.container.plugins('allure');

Feature('verify login feature of writesonic');


Scenario('@verify login using Google',async ({ I, loginPage, testDataPage, expectedAssertionsPage }) => {
    allure.severity('CRITICAL');
    I.amOnPage(testDataPage.home.baseUrl);
    loginPage.clickOnGoogle();
    loginPage.setGmail(testDataPage.login.email);
    loginPage.setGmailPassword(testDataPage.login.password);
    loginPage.clickOnNextButton();
    I.see(expectedAssertionsPage.login.myAccount);

});
