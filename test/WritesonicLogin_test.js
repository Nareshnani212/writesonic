const allure = codeceptjs.container.plugins('allure');
Feature('SignIn');

Scenario('@verify login By Invalid Password', ({ I, loginPage, testData, expectedAssertionsPage }) => {
    allure.epic('Login Feature');
    allure.feature('Login with invalid Password');
    allure.severity('BLOCKER');
    allure.setDescription('verify login By Invalid Password');


    I.amOnPage(testData.home.baseUrl);
    loginPage.clickOnSignInWithPassword();
    loginPage.setEmail(testData.login.email);

    loginPage.setPassword(testData.login.invalidpassword);
    loginPage.clickOnBtnSignIn();
    I.see(expectedAssertionsPage.login.wrongpassword);

});
Scenario('@verify login By Invalid Email', ({ I, loginPage, testData, expectedAssertionsPage }) => {
    allure.epic('Login Feature');
    allure.feature('Login with Invalid Email');
    allure.severity('BLOCKER');
    allure.setDescription('verify login By Invalid Email');

    I.amOnPage(testData.home.baseUrl);
    loginPage.clickOnSignInWithPassword();
    loginPage.setEmail(testData.login.invalidemail);
    loginPage.setPassword(testData.login.password);
    loginPage.clickOnBtnSignIn();
    I.see(expectedAssertionsPage.login.invalidemailId);
});
Scenario('@verify login By Mandatory Validation For Email', ({ I, loginPage, testData, expectedAssertionsPage }) => {
    allure.epic('Login Feature');
    allure.feature('Login with Mandatory Validation For Email');
    allure.severity('BLOCKER');
    allure.setDescription('verify login By Mandatory Validation For Email');

    I.amOnPage(testData.home.baseUrl);
    loginPage.clickOnSignInWithPassword();
    loginPage.setEmail(testData.login.emptyemail);
    loginPage.setPassword(testData.login.password);
    loginPage.clickOnBtnSignIn();
    I.wait(3);
});
Scenario('@verify login By Mandatory Validation For Password', ({ I, loginPage, testData, expectedAssertionsPage }) => {
    allure.epic('Login Feature');
    allure.feature('Login with Mandatory Validation For Password');
    allure.severity('BLOCKER');
    allure.setDescription('verify login By Mandatory Validation For Password');

    I.amOnPage(testData.home.baseUrl);
    loginPage.clickOnSignInWithPassword();
    loginPage.setEmail(testData.login.email);
    loginPage.setPassword(testData.login.emptypaswd);
    loginPage.clickOnBtnSignIn();
    I.wait(3);
});
Scenario('@verify writesonic Login Functionality', ({ I, loginPage, testData, expectedAssertionsPage }) => {
    allure.epic('Login Feature');
    allure.feature('Login Functionality');
    allure.severity('BLOCKER');
    allure.setDescription('verify writesonic Login Functionality');

    I.amOnPage(testData.home.baseUrl);
    loginPage.clickOnSignInWithPassword();
    loginPage.setEmail(testData.login.email);
    loginPage.setPassword(testData.login.password);
    loginPage.clickOnBtnSignIn();
    I.waitForVisible(loginPage.veryMyAccount, 50);

});
Scenario('@verify login funtionality using Google Account', ({ I, loginPage, testData, expectedAssertionsPage }) => {
    allure.epic('SignIn');
    allure.feature('SignIn');
    allure.severity('Blocker');
    allure.setDescription('Verify Google Account Login Feature');

    I.amOnPage(testData.home.baseUrl);
    loginPage.loginWithGoogleAccount(testData.login.email, testData.login.password);
    I.waitForVisible(loginPage.veryMyAccount, 50);
    I.see(expectedAssertionsPage.login.myAccount);
});