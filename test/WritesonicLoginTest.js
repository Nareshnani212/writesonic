const allure = codeceptjs.container.plugins('allure');
Feature('logintest of writesonic');

// Before(({ I, expectedAssertionsPage, testDataPage }) => {
//     allure.severity('Blocker');
//     I.amOnPage(testDataPage.home.baseUrl);
//     I.seeTitleEquals(expectedAssertionsPage.home.title);
//     I.see(expectedAssertionsPage.home.homePage);

// });

// Scenario('@verify login By Invalid Code', ({ I, loginPage, testDataPage, expectedAssertionsPage }) => {
//     allure.severity('Critical');
//     loginPage.setEmail(testDataPage.login.email);
//     loginPage.clickOnContinueEmailButton();
//     loginPage.setCode(testDataPage.login.invalidcode);
//     loginPage.clickOnVerify();
//     I.see(expectedAssertionsPage.login.invalidcode);
//     I.see(3);
// });
//no proper notification message 
// Scenario('@verify login By Invalid Email', ({ I, loginPage, testDataPage, expectedAssertionsPage }) => {
//     loginPage.setEmail(testDataPage.login.invalidemail);
//     loginPage.setPassword(testDataPage.login.password);
//     loginPage.clickOnBtnSignIn();
//     I.see(expectedAssertionsPage.login.invalidemailId);
// });
// Scenario('@verify login By Mandatory Validation For Email', ({ I, loginPage, testDataPage, expectedAssertionsPage }) => {
//     loginPage.setEmail(testDataPage.login.emptyemail);
//     loginPage.setPassword(testDataPage.login.password);
//     loginPage.clickOnBtnSignIn();
//     I.see(3);
// });
// Scenario('@verify login By Mandatory Validation For Password', ({ I, loginPage, testDataPage, expectedAssertionsPage }) => {
//     loginPage.setEmail(testDataPage.login.email);
//     loginPage.setPassword(testDataPage.login.emptypaswd);
//     loginPage.clickOnBtnSignIn();
//     I.see(3);
//});
// Scenario('@verify writesonic Login Functionality', ({ I, loginPage, testDataPage, expectedAssertionsPage }) => {
//     loginPage.setEmail(testDataPage.login.email);
//     loginPage.setPassword(testDataPage.login.password);
//     loginPage.clickOnBtnSignIn();
//     I.wait(5);
//     I.see(expectedAssertionsPage.login.myAccount);

// });
Scenario('@verify Google Account login Feature', ({ I, loginPage, testDataPage, expectedAssertionsPage }) => {
        allure.severity('Critical');
        I.amOnPage(testDataPage.home.baseUrl);
        loginPage.loginWithGoogleAccount(testDataPage.login.email, testDataPage.login.password);
        I.see(expectedAssertionsPage.login.myAccount);
    });
