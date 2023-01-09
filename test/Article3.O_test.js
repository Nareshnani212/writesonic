const allure = codeceptjs.container.plugins('allure');
Feature('Article3.O');

Before(({ I, loginPage, testData }) => {
    I.amOnPage(testData.home.baseUrl);
    loginPage.loginWithPassword(testData.login.email, testData.login.password);

})

Scenario('@Verify Mandatory Validation For All Input Fields Of Article3.O', ({ I, article3OPage, AIArticlePage, expectedAssertionsPage }) => {
    allure.epic('Article And Blogs');
    allure.feature('AI Article Writer 3.0');
    allure.severity('MAJOR');
    allure.setDescription('mandatory validation for all input fields');

    //Navigating to Article 3.0 page
    article3OPage.clickOnArticle3Ofeature();

    //Get An Ideas Tab
    I.see(expectedAssertionsPage.AIArticle.txtaiarticle3o);
    AIArticlePage.clickOnGenerateIdeasButton();
    I.see(expectedAssertionsPage.AIArticle.gettxtPleaseinsertatopic);
   
    //Get An Intro Tab
    AIArticlePage.clickOnGetAnIntroTab();
    AIArticlePage.clickOnGenerateIdeasButton();
    I.see(expectedAssertionsPage.AIArticle.gettxtPleaseinsertatopic);
    
    //Get An Outline Tab
    AIArticlePage.clickOnGetAnOutlineTab();
    AIArticlePage.clickOnGenerateIdeasButton();
    I.see(expectedAssertionsPage.AIArticle.gettxtPleaseinsertitle);
    I.see(expectedAssertionsPage.AIArticle.gettxtPleaseinsertaintro);
    I.see(expectedAssertionsPage.AIArticle.gettxtEnsurethisvaluehasatleast2charactersensurethisvaluehasatleast2characters);
    
    //Get An Article Tab
    AIArticlePage.clickOnGetAnArticleTab();
    AIArticlePage.clickOnGenerateIdeasButton();
    I.see(expectedAssertionsPage.AIArticle.gettxtPleaseinsertitle);
    I.see(expectedAssertionsPage.AIArticle.gettxtPleaseinsertanintro);
    I.see(expectedAssertionsPage.AIArticle.gettxtPleaseaddatleast4outlines);
});

Scenario('@ Article Generation Test Using Article3.OFeature', ({ I, article3OPage,AIArticlePage, testData, expectedAssertionsPage,BaseAutomationPage }) => {
    allure.epic('Article And Blogs');
    allure.feature('AI Article Writer 3.0');
    allure.severity('CRITICAL');
    allure.setDescription('Verify Article 3.O feature');

    //Navigating to Article 3.0 page
    article3OPage.clickOnArticle3Ofeature();
    
    //Get An Ideas Tab
    I.see(expectedAssertionsPage.AIArticle.txtaiarticle3o);
    AIArticlePage.setTopicField(testData.AIArticle.topic);
    BaseAutomationPage.setQualityType(testData.economy);
    BaseAutomationPage.clickOnEconomy();
    BaseAutomationPage.setLanguageAsEnglish(testData.AIArticle.language);
    BaseAutomationPage.setOutputs(testData.AIArticle.outputs);
    AIArticlePage.clickOnGenerateIdeasButton();
    BaseAutomationPage.clickOnCopyBtn();
    I.see(expectedAssertionsPage.AIArticle.gettxttexthasbeencopiedtoclipboard);
    BaseAutomationPage.clickOnEditIcon();
    I.see(expectedAssertionsPage.AIArticle.gettxtCopyhasbeeneditedsuccessfully);
    BaseAutomationPage.clickOnDeleteIcon();
    I.see(expectedAssertionsPage.AIArticle.gettextCopyhasbeendeletedsuccessfully);
    article3OPage.clickOnRadioBtn();
    
    //Get An Intro Tab
    I.see(expectedAssertionsPage.AIArticle.getanintrotabtitlefield);
    BaseAutomationPage.setQualityType(testData.average);
    BaseAutomationPage.clickOnAverage();
    BaseAutomationPage.setLanguageAsEnglish(testData.AIArticle.language);
    BaseAutomationPage.setOutputs(testData.AIArticle.outputs);
    AIArticlePage.clickOnGenerateIdeasButton();
    BaseAutomationPage.clickOnCopyBtn();
    I.see(expectedAssertionsPage.AIArticle.gettxttexthasbeencopiedtoclipboard);
    BaseAutomationPage.clickOnEditIcon();
    I.see(expectedAssertionsPage.AIArticle.gettxtCopyhasbeeneditedsuccessfully);
    BaseAutomationPage.clickOnDeleteIcon();
    I.see(expectedAssertionsPage.AIArticle.gettextCopyhasbeendeletedsuccessfully);
    article3OPage.clickOnRadioBtn();
    
    //Get An Outline Tab
    I.see(expectedAssertionsPage.AIArticle.gettxtarticleintro);
    BaseAutomationPage.setQualityType(testData.good);
    BaseAutomationPage.clickOnGood();
    BaseAutomationPage.setOutputs(testData.AIArticle.outputs);
    AIArticlePage.clickOnGenerateIdeasButton();
    AIArticlePage.clickOnSelectindividualoutlinesToggleButton();
    I.see(expectedAssertionsPage.AIArticle.gettxtnextbtn);
    AIArticlePage.clickOnSelectindividualoutlinesToggleButton();
    BaseAutomationPage.clickOnCopyBtn();
    I.see(expectedAssertionsPage.AIArticle.gettxttexthasbeencopiedtoclipboard);
    BaseAutomationPage.clickOnEditIcon();
    I.see(expectedAssertionsPage.AIArticle.gettxtCopyhasbeeneditedsuccessfully);
    BaseAutomationPage.clickOnDeleteIcon();
    I.see(expectedAssertionsPage.AIArticle.gettextCopyhasbeendeletedsuccessfully);
    AIArticlePage.clickOnRadioBtnForOutline();
   
    //Get An Article Tab
    article3OPage.setQualityTypeAsEconomy(testData.AIArticle.qualitytype);
    article3OPage.setLanguageAsEnglish(testData.AIArticle.language);
    AIArticlePage.clickOnGenerateIdeasButton();
    AIArticlePage.clickOnSaveBtn();
    I.see(expectedAssertionsPage.gettextCopyhasbeensavedsuccessfully);
    AIArticlePage.clickOnSaveBtn();
    I.see(expectedAssertionsPage.gettextCopyhasbeenunsavedsuccessfully);
    AIArticlePage.clickOnStarRating1();
    AIArticlePage.clickOnStarRating3();
    AIArticlePage.clickOnStarRating5();
    BaseAutomationPage.clickOnShareYourDocument();
    I.see(expectedAssertionsPage.sharethisarticle);
    BaseAutomationPage.clickOnShareYourDocument();
    I.see(expectedAssertionsPage.sharethisarticle);
});

