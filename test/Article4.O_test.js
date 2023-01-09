const allure = codeceptjs.container.plugins('allure');

Feature('Article4.O');

Before(({ I, loginPage, testData }) => {
    allure.severity('Blocker');
    I.amOnPage(testData.home.baseUrl);
    loginPage.loginWithPassword(testData.login.email, testData.login.password);

})
Scenario('Verify Mandatory Validation For All Input Fields Of Article4.O', ({ I, article4OPage, AIArticlePage ,expectedAssertionsPage }) => {
    allure.epic('Article And Blogs');
    allure.feature('AI Article Writer 4.0');
    allure.severity('MAJOR');
    allure.setDescription('mandatory validation for all input fields');

    //Navigating to Article 4.0 page
    article4OPage.clickOnArticle4Ofeature();
   
    //Get Keywords
    article4OPage.clickOnSearchKeywords();
    I.see(expectedAssertionsPage.AIArticle.gettxtPleaseinsertatopic);
    
    //Get Ideas Tab
    AIArticlePage.clickOnGetIdeasTab();
    AIArticlePage.clickOnGenerateIdeasButton();
    I.see(expectedAssertionsPage.AIArticle.gettxtPleaseinsertatopic);
    I.see(expectedAssertionsPage.AIArticle.gettxtpleaseinsertkeywords);
    
    //Get An Outline Tab
    AIArticlePage.clickOnGetAnOutlineTab();
    AIArticlePage.clickOnGenerateIdeasButton();
    I.see(expectedAssertionsPage.AIArticle.gettxtPleaseinsertitle);
    I.see(expectedAssertionsPage.AIArticle.gettxtpleaseinsertkeywords);
    
    //Get An Article Tab
    AIArticlePage.clickOnGetAnArticleTab();
    AIArticlePage.clickOnGenerateIdeasButton();
    I.see(expectedAssertionsPage.AIArticle.gettxtPleaseinsertitle);
    I.see(expectedAssertionsPage.AIArticle.gettxtpleaseinsertkeywords);
    I.see(expectedAssertionsPage.AIArticle.gettxtPleaseaddatleast4outlines);

});

Scenario('@ Article Generation Test Using Article4.OFeature', ({ I, AIArticlePage, article4OPage, testData, expectedAssertionsPage, BaseAutomationPage }) => {
    allure.epic('Article And Blogs');
    allure.feature('AI Article Writer 4.0');
    allure.severity('CRITICAL');
    allure.setDescription('Verify Article 4.O feature');

    //Navigating to Article 4.0 page
    article4OPage.clickOnArticle4Ofeature();
    
    //Get Keywords
    AIArticlePage.setTopicField(testData.AIArticle.topic);
    article4OPage.clickOnSearchKeywords();
    article4OPage.clickOnKeywordCheckBox();
    article4OPage.clickOnNextButton();
    
    //Get Ideas Tab
    BaseAutomationPage.setToneOfVoice(testData.excited);
    BaseAutomationPage.clickOnExcited();
    article4OPage.setPointOfView(testData.AIArticle.firstPerson);
    article4OPage.clickOnFirstPerson();
    BaseAutomationPage.setOutputs(testData.AIArticle.outputs);
    AIArticlePage.clickOnGenerateIdeasButton();
    BaseAutomationPage.clickOnCopyBtn();
    I.see(expectedAssertionsPage.AIArticle.gettxttexthasbeencopiedtoclipboard);
    BaseAutomationPage.clickOnEditIcon();
    I.see(expectedAssertionsPage.AIArticle.gettxtCopyhasbeeneditedsuccessfully);
    BaseAutomationPage.clickOnDeleteIcon();
    I.see(expectedAssertionsPage.AIArticle.gettextCopyhasbeendeletedsuccessfully);
    article4OPage.clickOnRadioButtonFortitle();
    
    //Get An Outline Tab
    BaseAutomationPage.setToneOfVoice(testData.encouraging);
    BaseAutomationPage.clickOnEncouraging();
    article4OPage.setPointOfView(testData.AIArticle.thirdperson);
    article4OPage.clickOnThirdPerson();
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
    BaseAutomationPage.setToneOfVoice(testData.witty);
    BaseAutomationPage.clickOnWitty();
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

});
