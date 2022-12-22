Feature('Verify Article3.O Feature');

Before(({ I, loginPage, testDataPage }) => {
    I.amOnPage(testDataPage.home.baseUrl);
    loginPage.loginUserforallfeatures(testDataPage.login.email, testDataPage.login.password);

})

Scenario('@mandatory validation for all input fields', ({ I, article3OPage, AIArticlePage, expectedAssertionsPage }) => {
    article3OPage.clickOnArticle3Ofeature();
    I.see(expectedAssertionsPage.AIArticle.txtaiarticle3o);

    //Get An Ideas Tab
    AIArticlePage.clickOnGenerateButton();
    I.see(expectedAssertionsPage.AIArticle.gettxtPleaseinsertatopic);

    //Get An Intro Tab
    AIArticlePage.clickOnGetAnIntroTab();
    AIArticlePage.clickOnGenerateButton();
    I.see(expectedAssertionsPage.AIArticle.gettxtPleaseinsertatopic);

    //Get An Outline Tab
    AIArticlePage.clickOnGetAnOutlineTab();
    AIArticlePage.clickOnGenerateButton();
    I.see(expectedAssertionsPage.AIArticle.gettxtPleaseinsertitle);
    I.see(expectedAssertionsPage.AIArticle.gettxtPleaseinsertaintro);
    I.see(expectedAssertionsPage.AIArticle.gettxtEnsurethisvaluehasatleast2charactersensurethisvaluehasatleast2characters);

    //Get An Article Tab
    AIArticlePage.clickOnGetAnArticleTab();
    AIArticlePage.clickOnGenerateButton();
    I.see(expectedAssertionsPage.AIArticle.gettxtPleaseinsertitle);
    I.see(expectedAssertionsPage.AIArticle.gettxtPleaseinsertanintro);
    I.see(expectedAssertionsPage.AIArticle.gettxtPleaseaddatleast4outlines);
});

Scenario('@Verify Article 3.O feature', ({ I, article3OPage, AIArticlePage, testDataPage, expectedAssertionsPage }) => {
    
    article3OPage.clickOnArticle3Ofeature();

    //Get An Ideas Tab
    I.see(expectedAssertionsPage.AIArticle.txtaiarticle3o);
    AIArticlePage.setTopicField(testDataPage.AIArticle.topic);
    article3OPage.setQualityTypeAsEconomy(testDataPage.AIArticle.qualitytype);
    article3OPage.setLanguageAsEnglish(testDataPage.AIArticle.language);
    AIArticlePage.setOutputs(testDataPage.AIArticle.outputs);
    AIArticlePage.clickOnGenerateButton();
    AIArticlePage.clickOnCopyBtn();
    I.see(expectedAssertionsPage.AIArticle.gettxttexthasbeencopiedtoclipboard);
    AIArticlePage.clickOnEditIcon();
    I.see(expectedAssertionsPage.AIArticle.gettxtCopyhasbeeneditedsuccessfully);
    AIArticlePage.clickOnDeleteIcon();
    I.see(expectedAssertionsPage.AIArticle.gettextCopyhasbeendeletedsuccessfully);
    article3OPage.clickOnRadioBtn();

    //Get An Intro Tab
    I.see(expectedAssertionsPage.AIArticle.getanintrotabtitlefield);
    article3OPage.setQualityTypeAsEconomy(testDataPage.AIArticle.qualitytype);
    article3OPage.setLanguageAsEnglish(testDataPage.AIArticle.language);
    AIArticlePage.setOutputs(testDataPage.AIArticle.outputs);
    AIArticlePage.clickOnGenerateButton();
    AIArticlePage.clickOnCopyBtn();
    I.see(expectedAssertionsPage.AIArticle.gettxttexthasbeencopiedtoclipboard);
    AIArticlePage.clickOnEditIcon();
    I.see(expectedAssertionsPage.AIArticle.gettxtCopyhasbeeneditedsuccessfully);
    AIArticlePage.clickOnDeleteIcon();
    I.see(expectedAssertionsPage.AIArticle.gettextCopyhasbeendeletedsuccessfully);
    article3OPage.clickOnRadioBtn();

    //Get An Outline Tab
    I.see(expectedAssertionsPage.AIArticle.gettxtarticleintro);
    article3OPage.setQualityTypeAsEconomy(testDataPage.AIArticle.qualitytype);
    AIArticlePage.setOutputs(testDataPage.AIArticle.outputs);
    AIArticlePage.clickOnGenerateButton();
    AIArticlePage.clickOnCopyBtn();
    I.see(expectedAssertionsPage.AIArticle.gettxttexthasbeencopiedtoclipboard);
    AIArticlePage.clickOnEditIcon();
    I.see(expectedAssertionsPage.AIArticle.gettxtCopyhasbeeneditedsuccessfully);
    AIArticlePage.clickOnDeleteIcon();
    I.see(expectedAssertionsPage.AIArticle.gettextCopyhasbeendeletedsuccessfully);
    AIArticlePage.clickOnRadioBtnForOutline();

    //Get An Article Tab
    article3OPage.setQualityTypeAsEconomy(testDataPage.AIArticle.qualitytype);
    article3OPage.setLanguageAsEnglish(testDataPage.AIArticle.language);
    AIArticlePage.clickOnGenerateButton();
    AIArticlePage.clickOnSaveBtn();
    I.see(expectedAssertionsPage.AIArticle.gettextCopyhasbeensavedsuccessfully);
    AIArticlePage.clickOnSaveBtn();
    I.see(expectedAssertionsPage.AIArticle.gettextCopyhasbeenunsavedsuccessfully);
});
