Feature('logintest of writesonic');

Before(({ I, loginPage, expectedAssertionsPage, testDataPage }) => {
    I.amOnPage(testDataPage.home.baseUrl);
    I.seeTitleEquals(expectedAssertionsPage.home.title);
    I.see(expectedAssertionsPage.home.homePage);
    loginPage.clickOnSignInTab();

});

Scenario('@verify login By Invalid Password', ({ I, loginPage, testDataPage, expectedAssertionsPage }) => {
    loginPage.setEmail(testDataPage.login.email);
    loginPage.setPassword(testDataPage.login.invalidpassword);
    loginPage.clickOnBtnSignIn();
    I.see(expectedAssertionsPage.login.wrongpassword);

});
Scenario('@verify login By Invalid Email', ({ I, loginPage, testDataPage, expectedAssertionsPage }) => {
    loginPage.setEmail(testDataPage.login.invalidemail);
    loginPage.setPassword(testDataPage.login.password);
    loginPage.clickOnBtnSignIn();
    I.see(expectedAssertionsPage.login.invalidemailId);
});
Scenario('@verify login By Mandatory Validation For Email', ({ I, loginPage, testDataPage, expectedAssertionsPage }) => {
    loginPage.setEmail(testDataPage.login.emptyemail);
    loginPage.setPassword(testDataPage.login.password);
    loginPage.clickOnBtnSignIn();
    I.see(3);
});
Scenario('@verify login By Mandatory Validation For Password', ({ I, loginPage, testDataPage, expectedAssertionsPage }) => {
    loginPage.setEmail(testDataPage.login.email);
    loginPage.setPassword(testDataPage.login.emptypaswd);
    loginPage.clickOnBtnSignIn();
    I.see(3);
});
Scenario('@verify writesonic Login Functionality', ({ I, loginPage, testDataPage, expectedAssertionsPage }) => {
    loginPage.setEmail(testDataPage.login.email);
    loginPage.setPassword(testDataPage.login.password);
    loginPage.clickOnBtnSignIn();
    I.wait(5);
    I.see(expectedAssertionsPage.login.myAccount);

});
