const allure = codeceptjs.container.plugins('allure');

Feature('Instant Article Writer');

Before(({ I, loginPage, testData }) => {
    allure.severity('Blocker');
    I.amOnPage(testData.home.baseUrl);
    loginPage.loginWithPassword(testData.login.email, testData.login.password);

})
Scenario('Verify Mandatory Validation For Title Fields Of Instatnt Article Writer', ({ I,InstantArticleWriterPage, expectedAssertionsPage, BaseAutomationPage}) => {
    allure.epic('Article And Blogs');
    allure.feature('Instant Article Writer');
    allure.severity('MAJOR');
    allure.setDescription('mandatory validation for Title fields');

    //Navigating to Article Rewriter
    InstantArticleWriterPage.clickOnInstantArticleWriterfeature();
    BaseAutomationPage.clickOnGenerateButton();
    I.see(expectedAssertionsPage.getxtpleaseinputtitle);
});
Scenario('Article Generation Test Using Instatnt Article Writer Feature', ({ I,InstantArticleWriterPage, expectedAssertionsPage, testData, BaseAutomationPage }) => {
    allure.epic('Article And Blogs');
    allure.feature('Instant Article Writer');
    allure.severity('BLOCKER');
    allure.setDescription('Verify Instant Article Writer Feature');

    //Navigating to Instant Article writer
    InstantArticleWriterPage.clickOnInstantArticleWriterfeature();
    InstantArticleWriterPage.setTitle(testData.Title);
    BaseAutomationPage.setLanguageAsEnglish(testData.language);
    BaseAutomationPage.setQualityType(testData.average);
    BaseAutomationPage.clickOnAverage();
    BaseAutomationPage.clickOnGenerateButton();
    BaseAutomationPage.clickOnStarRating1();
    BaseAutomationPage.clickOnStarRating3();
    BaseAutomationPage.clickOnStarRating5();
    BaseAutomationPage.clickOnArticleSaveBtn();
    I.see(expectedAssertionsPage.gettextCopyhasbeensavedsuccessfully);
    BaseAutomationPage.clickOnArticleSaveBtn();
    I.see(expectedAssertionsPage.gettextCopyhasbeensavedsuccessfully);
    BaseAutomationPage.clickOnShareYourDocument();
    I.see(expectedAssertionsPage.sharethisarticle);
});