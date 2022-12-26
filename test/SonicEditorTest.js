const allure = codeceptjs.container.plugins('allure');
Feature('SonicEditor');

Before(({ I, loginPage, testDataPage }) => {
    I.amOnPage(testDataPage.home.baseUrl);
    loginPage.loginWithGoogleAccount(testDataPage.login.email, testDataPage.login.password);

});
Scenario('@Verify ChatSonic Feature', ({ I, SonicEditorPage, testDataPage, expectedAssertionsPage, BaseAutomationPage }) => {
    SonicEditorPage.clickOnSonicEditorFeature();
    SonicEditorPage.setTextOnSonicEditor(testDataPage.SonicEditor.SonicEditortext);
    SonicEditorPage.clickOnGeneralTabIcon();
    I.see(expectedAssertionsPage.SonicEditor.gettxtgeneral);
    SonicEditorPage.SlidingCreativitySlider();
    BaseAutomationPage.setLanguageAsEnglish(testDataPage.language);

});