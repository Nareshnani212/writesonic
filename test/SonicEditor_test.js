const allure = codeceptjs.container.plugins('allure');

Feature('SonicEditor');

Before(({ I, loginPage, testData }) => {
    I.amOnPage(testData.home.baseUrl);
    loginPage.loginWithPassword(testData.login.email, testData.login.password);

});
Scenario('@Content Editor Test by Using Paragraph feature', ({ I, SonicEditorPage, testData, expectedAssertionsPage, BaseAutomationPage }) => {
    allure.epic('Article And Blogs');
    allure.feature('Sonic Editor');
    allure.severity('CRITICAL');
    allure.setDescription('Verify Sonic Editor feature');

    //Navigating to SonicEditor Page
    SonicEditorPage.clickOnSonicEditorFeature();

    //Sonic Mode Tab
    SonicEditorPage.setTextOnSonicEditor(testData.SonicEditor.Soniceditortext);
    SonicEditorPage.clickOnSButton();
    SonicEditorPage.clickOnGeneralTabIcon();
    I.waitForInvisible(SonicEditorPage.btnS);
    I.see(expectedAssertionsPage.SonicEditor.gettxtgeneral);
    SonicEditorPage.SlidingCreativitySlider();
    BaseAutomationPage.setLanguageAsEnglish(testData.language);
    SonicEditorPage.clickOnWriteWithAi();
    SonicEditorPage.clickOnGeneralTabIcon();
    I.waitForInvisible(SonicEditorPage.sliderCreativity);
    SonicEditorPage.clickOnParagraphFeature();
    SonicEditorPage.setTopicFieldInParagarphWriter(testData.SonicEditor.topic);
    SonicEditorPage.setTargetKeywordsInParagarphWriter(testData.SonicEditor.targetkeywords);
    BaseAutomationPage.setToneOfVoice(testData.encouraging);
    BaseAutomationPage.clickOnEncouraging();
    BaseAutomationPage.setLanguageAsEnglish(testData.language);
    BaseAutomationPage.setQualityType(testData.good);
    BaseAutomationPage.clickOnGood();
    BaseAutomationPage.setOutputs(testData.output1);
    BaseAutomationPage.clickOnGenerateButton();
    SonicEditorPage.clickOnInsertDocumentCursor();

    //Focus Mode Tab
    SonicEditorPage.clickOnFocusModeIcon();
    I.seeElement(SonicEditorPage.drpdwnwords);
    SonicEditorPage.clickOnWordsDropdown();
    I.seeElement(SonicEditorPage.lblwords);
    SonicEditorPage.setTextOnSonicEditorForSecond(testData.SonicEditor.Soniceditortext);
    SonicEditorPage.clickOnMedium();
    SonicEditorPage.setQualityType(testData.premium);
    BaseAutomationPage.clickOnPremium();
    SonicEditorPage.clickOnWriteWithAi();

    //Surfer SEO Mode Tab
    SonicEditorPage.clickOnSurferSEOModeIcon();
    SonicEditorPage.setTextOnSonicEditorForSecond(testData.SonicEditor.Soniceditortext);
    SonicEditorPage.clickOnGeneralTabIcon();
    SonicEditorPage.clickOnLong();
    SonicEditorPage.setQualityType(testData.economy);
    BaseAutomationPage.clickOnEconomy();
    SonicEditorPage.clickOnWriteWithAi();
    SonicEditorPage.clickOnSonicModeIcon();
    I.see(expectedAssertionsPage.SonicEditor.gettxttopic);
    BaseAutomationPage.clickOnShareYourDocument();
    I.see(expectedAssertionsPage.sharethisarticle);
});
Scenario('@Content Editor Test by Using ArticleAiIntros feature', ({ I, SonicEditorPage, testData, expectedAssertionsPage, BaseAutomationPage }) => {
    allure.epic('Article And Blogs');
    allure.feature('Sonic Editor');
    allure.severity('CRITICAL');
    allure.setDescription('Verify Sonic Editor feature');

    //Navigating to SonicEditor Page
    SonicEditorPage.clickOnSonicEditorFeature();

    //Sonic Mode Tab
    SonicEditorPage.setTextOnSonicEditor(testData.SonicEditor.Soniceditortext);
    SonicEditorPage.clickOnSButton();
    SonicEditorPage.clickOnGeneralTabIcon();
    I.waitForInvisible(SonicEditorPage.btnS);
    I.see(expectedAssertionsPage.SonicEditor.gettxtgeneral);
    SonicEditorPage.SlidingCreativitySlider();
    BaseAutomationPage.setLanguageAsEnglish(testData.language);
    SonicEditorPage.clickOnWriteWithAi();
    SonicEditorPage.clickOnGeneralTabIcon();
    I.waitForInvisible(SonicEditorPage.sliderCreativity);
    SonicEditorPage.clickOnAiArticleIntroFeature();
    SonicEditorPage.setTitleInAiArticlesIntros(testData.Title);
    BaseAutomationPage.setLanguageAsEnglish(testData.language);
    BaseAutomationPage.setQualityType(testData.average);
    BaseAutomationPage.clickOnAverage();
    BaseAutomationPage.setOutputs(testData.output1);
    BaseAutomationPage.clickOnGenerateButton();
    SonicEditorPage.clickOnInsertDocumentCursor();

    //Focus Mode Tab
    SonicEditorPage.clickOnFocusModeIcon();
    I.seeElement(SonicEditorPage.drpdwnwords);
    SonicEditorPage.clickOnWordsDropdown();
    I.seeElement(SonicEditorPage.lblwords);
    SonicEditorPage.setTextOnSonicEditorForSecond(testData.SonicEditor.Soniceditortext);
    SonicEditorPage.clickOnMedium();
    SonicEditorPage.setQualityType(testData.premium);
    BaseAutomationPage.clickOnPremium();
    SonicEditorPage.clickOnWriteWithAi();

    //Surfer SEO Mode Tab
    SonicEditorPage.clickOnSurferSEOModeIcon();
    SonicEditorPage.setTextOnSonicEditorForSecond(testData.SonicEditor.Soniceditortext);
    SonicEditorPage.clickOnGeneralTabIcon();
    SonicEditorPage.clickOnLong();
    SonicEditorPage.setQualityType(testData.average);
    BaseAutomationPage.clickOnAverage();
    SonicEditorPage.clickOnWriteWithAi();
    SonicEditorPage.clickOnSonicModeIcon();
    I.see(expectedAssertionsPage.SonicEditor.gettxtarticleblogtitle);
    BaseAutomationPage.clickOnShareYourDocument();
    I.see(expectedAssertionsPage.sharethisarticle);
});