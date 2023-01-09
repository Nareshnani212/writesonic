const allure = codeceptjs.container.plugins('allure');

Feature('Make Your Own AI');

Before(({ I, loginPage, testData }) => {
    allure.severity('Blocker');
    I.amOnPage(testData.home.baseUrl);
    loginPage.loginWithPassword(testData.login.email, testData.login.password);

})
Scenario('Verify Mandatory Validation For Instruction Field', ({ I, BaseAutomationPage, MakeYourOwnAIPage, testData, expectedAssertionsPage }) => {
    allure.epic('Others');
    allure.feature('Make Your Own AI');
    allure.severity('MAJOR');
    allure.setDescription('Mandatory validation for Instruction field');

    MakeYourOwnAIPage.clickOnMakeYourOwnAIfeature();
    BaseAutomationPage.clickOnGenerateButton();
    I.see(expectedAssertionsPage.MakeYourOwnAI.gettxtpleasefillinthefield);

});


Scenario('AI generation using MakeYourOwnAI', ({ I, BaseAutomationPage, MakeYourOwnAIPage, testData, expectedAssertionsPage }) => {
    allure.epic('Article And Blogs');
    allure.feature('AI Article Writer 4.0');
    allure.severity('BLOCKER');
    allure.setDescription('mandatory validation for all input fields');

    MakeYourOwnAIPage.clickOnMakeYourOwnAIfeature();
   // MakeYourOwnAIPage.setContext(testData.MakeYourOwnAI.context);
    MakeYourOwnAIPage.setInstructions(testData.MakeYourOwnAI.instructions);
    BaseAutomationPage.setLanguageAsEnglish(testData.language);
    BaseAutomationPage.setOutputs(testData.outputs);
    BaseAutomationPage.clickOnGenerateButton();
    BaseAutomationPage.clickOnCopyBtn();
    I.see(expectedAssertionsPage.AIArticle.gettxttexthasbeencopiedtoclipboard);
    BaseAutomationPage.clickOnDeleteIcon();
    I.see(expectedAssertionsPage.AIArticle.gettextCopyhasbeendeletedsuccessfully);
    BaseAutomationPage.clickOnEditIcon();
    I.see(expectedAssertionsPage.AIArticle.gettxtCopyhasbeeneditedsuccessfully);
    BaseAutomationPage.clickOnEditIconForCancel();
    BaseAutomationPage.clickOnBookMarkIcon();
    I.see(expectedAssertionsPage.gettextCopyhasbeensavedsuccessfully);
    BaseAutomationPage.clickOnBookMarkIcon();
    I.see(expectedAssertionsPage.gettextCopyhasbeenunsavedsuccessfully);
    BaseAutomationPage.clickOnStarRating1();
    BaseAutomationPage.clickOnStarRating3();
    BaseAutomationPage.clickOnStarRating5();
    BaseAutomationPage.clickOnShareYourDocument();
    I.see(expectedAssertionsPage.sharethisarticle);
});