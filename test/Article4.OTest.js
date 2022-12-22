
Feature('Verify Article4.O Feature');

Before(({ I, loginPage, testDataPage }) => {
    I.amOnPage(testDataPage.home.baseUrl);
    loginPage.loginUserforallfeatures(testDataPage.login.email, testDataPage.login.password);

})
Scenario('@mandatory validation for all input fields', ({ I, article4OPage, AIArticlePage ,expectedAssertionsPage }) => {
    article4OPage.clickOnArticle4Ofeature();

    //Get Keywords
    I.see(expectedAssertionsPage.AIArticle.gettxtaiarticle4o);
    article4OPage.clickOnSearchKeywords();
    I.see(expectedAssertionsPage.AIArticle.gettxtPleaseinsertatopic);

    //Get Ideas Tab
    AIArticlePage.clickOnGetIdeasTab();
    AIArticlePage.clickOnGenerateButton();
    I.see(expectedAssertionsPage.AIArticle.gettxtPleaseinsertatopic);
    I.see(expectedAssertionsPage.AIArticle.gettxtpleaseinsertkeywords);

    //Get An Outline Tab
    AIArticlePage.clickOnGetAnOutlineTab();
    AIArticlePage.clickOnGenerateButton();
    I.see(expectedAssertionsPage.AIArticle.gettxtPleaseinsertitle);
    I.see(expectedAssertionsPage.AIArticle.gettxtpleaseinsertkeywords);

    //Get An Article Tab
    AIArticlePage.clickOnGetAnArticleTab();
    AIArticlePage.clickOnGenerateButton();
    I.see(expectedAssertionsPage.AIArticle.gettxtPleaseinsertitle);
    I.see(expectedAssertionsPage.AIArticle.gettxtpleaseinsertkeywords);
    I.see(expectedAssertionsPage.AIArticle.gettxtPleaseaddatleast4outlines);
});

Scenario('@Article 4.O feature', ({ I, AIArticlePage, article4OPage, testDataPage, expectedAssertionsPage }) => {
    article4OPage.clickOnArticle4Ofeature();

    //Get Keywords
    AIArticlePage.setTopicField(testDataPage.AIArticle.topic);
    article4OPage.clickOnSearchKeywords();
    I.wait(40);
    article4OPage.clickOnKeywordCheckBox();
    article4OPage.clickOnNextButton();

    //Get Ideas Tab
    article4OPage.setToneOfVoice(testDataPage.AIArticle.excited);
    article4OPage.clickOnExcited();
    article4OPage.setPointOfView(testDataPage.AIArticle.firstPerson);
    article4OPage.clickOnFirstPerson();
    AIArticlePage.setOutputs(testDataPage.AIArticle.outputs);
    AIArticlePage.clickOnGenerateButton();
    AIArticlePage.clickOnCopyBtn();
    I.see(expectedAssertionsPage.AIArticle.gettxttexthasbeencopiedtoclipboard);
    AIArticlePage.clickOnEditIcon();
    I.see(expectedAssertionsPage.AIArticle.gettxtCopyhasbeeneditedsuccessfully);
    AIArticlePage.clickOnDeleteIcon();
    I.see(expectedAssertionsPage.AIArticle.gettextCopyhasbeendeletedsuccessfully);
    article4OPage.clickOnRadioButtonFortitle();

    //Get An Outline Tab
    article4OPage.setToneOfVoice(testDataPage.AIArticle.encouraging);
    article4OPage.clickOnEncouraging();
    article4OPage.setPointOfView(testDataPage.AIArticle.thirdperson);
    article4OPage.clickOnThirdPerson();
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
    article4OPage.setToneOfVoice(testDataPage.AIArticle.witty);
    article4OPage.clickOnWitty();
    AIArticlePage.clickOnGenerateButton();
    AIArticlePage.clickOnSaveBtn();
    I.see(expectedAssertionsPage.AIArticle.gettextCopyhasbeensavedsuccessfully);
    AIArticlePage.clickOnSaveBtn();
    I.see(expectedAssertionsPage.AIArticle.gettextCopyhasbeenunsavedsuccessfully);
});
