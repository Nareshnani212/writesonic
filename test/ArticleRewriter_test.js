const allure = codeceptjs.container.plugins('allure');

Feature('Article Rewriter');

Before(({ I, loginPage, testData}) => {
    allure.severity('Blocker');
    I.amOnPage(testData.home.baseUrl);
    loginPage.loginWithPassword(testData.login.email, testData.login.password);
});
Scenario('Verify Mandatory Validation For Link Fields Of Article Rewriter', ({ I, ArticleRewriterPage, expectedAssertionsPage, BaseAutomationPage }) => {
    allure.epic('Article And Blogs');
    allure.feature('Article ReWriter');
    allure.severity('MAJOR');
    allure.setDescription('mandatory validation for Link fields');

    //Navigating to Article Rewriter
    ArticleRewriterPage.clickOnArticleRewriterfeature();
    BaseAutomationPage.clickOnGenerateButton();
    I.see(expectedAssertionsPage.ArticleRewriter.gettxtpleaseinputcontent);

});
Scenario('Verify Data Validation For Link Fields Of Article Rewriter', ({ I, ArticleRewriterPage, expectedAssertionsPage, BaseAutomationPage, testData }) => {
    allure.epic('Article And Blogs');
    allure.feature('Article ReWriter');
    allure.severity('MAJOR');
    allure.setDescription('Data validation for Link fields by passing Invalid URL');

    //Navigating to Article Rewriter
    ArticleRewriterPage.clickOnArticleRewriterfeature();
    ArticleRewriterPage.setLink(testData.ArticleRewriter.invalidLink);
    BaseAutomationPage.clickOnGenerateButton();
    I.see(expectedAssertionsPage.ArticleRewriter.gettxtSorrywecouldntfetchthecontentofthisarticlePleasecopypasteitmanually);

});
Scenario('Verify the Rewriting of Article By Link', ({ I, ArticleRewriterPage, BaseAutomationPage, expectedAssertionsPage, testData }) => {
    allure.epic('Article And Blogs');
    allure.feature('Article ReWriter');
    allure.severity('MAJOR');
    allure.setDescription('Verify Article Rewriter feature');

    //Navigating to Article Rewriter
    ArticleRewriterPage.clickOnArticleRewriterfeature();
    ArticleRewriterPage.setLink(testData.ArticleRewriter.Link);
    //BaseAutomationPage.setQualityType(testData.good);
    //BaseAutomationPage.clickOnGood();
    BaseAutomationPage.clickOnGenerateButton();

    BaseAutomationPage.clickOnStarRating1();
    BaseAutomationPage.clickOnStarRating3();
    BaseAutomationPage.clickOnStarRating5();
    BaseAutomationPage.clickOnReGenerateButton();
    BaseAutomationPage.clickOnStarRating1();
    BaseAutomationPage.clickOnStarRating3();
    BaseAutomationPage.clickOnStarRating5();

    ArticleRewriterPage.clickOnForwardNavigateBtn();
    BaseAutomationPage.clickOnReGenerateButton();
    BaseAutomationPage.clickOnStarRating1();
    BaseAutomationPage.clickOnStarRating3();
    BaseAutomationPage.clickOnStarRating5();

    //ArticleRewriterPage.clickOnBackNavigateBtn();
    ArticleRewriterPage.clickOnArticleSaveBtn();
    I.see(expectedAssertionsPage.gettextCopyhasbeensavedsuccessfully);
    ArticleRewriterPage.clickOnArticleSaveBtn();
    I.see(expectedAssertionsPage.gettextCopyhasbeensavedsuccessfully);
    BaseAutomationPage.clickOnShareYourDocument();
    I.see(expectedAssertionsPage.sharethisarticle);

});
Scenario('Verify the Rewriting of Article By Article', ({ I, ArticleRewriterPage, BaseAutomationPage, expectedAssertionsPage, testData }) => {
    allure.epic('Article And Blogs');
    allure.feature('Article ReWriter');
    allure.severity('MAJOR');
    allure.setDescription('Verify Article Rewriter feature');

    //Navigating to Article Rewriter
    ArticleRewriterPage.clickOnArticleRewriterfeature();
    ArticleRewriterPage.clickOnUrlMainContainToggleBtn();
    //BaseAutomationPage.setQualityType(testData.good);
    //BaseAutomationPage.clickOnGood();
    ArticleRewriterPage.setArticle(testData.ArticleRewriter.Article);
    BaseAutomationPage.clickOnGenerateButton();
    BaseAutomationPage.clickOnStarRating1();
    BaseAutomationPage.clickOnStarRating3();
    BaseAutomationPage.clickOnStarRating5();
    BaseAutomationPage.clickOnReGenerateButton();
    BaseAutomationPage.clickOnStarRating1();
    BaseAutomationPage.clickOnStarRating3();
    BaseAutomationPage.clickOnStarRating5();
    ArticleRewriterPage.clickOnForwardNavigateBtn();
    BaseAutomationPage.clickOnArticleSaveBtn();
    I.see(expectedAssertionsPage.gettextCopyhasbeensavedsuccessfully);
    BaseAutomationPage.clickOnArticleSaveBtn();
    I.see(expectedAssertionsPage.gettextCopyhasbeensavedsuccessfully);
    BaseAutomationPage.clickOnShareYourDocument();
    I.see(expectedAssertionsPage.sharethisarticle);
});