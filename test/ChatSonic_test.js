const allure = codeceptjs.container.plugins('allure');
Feature('ChatSonic');

Before(async ({ I, loginPage, testData }) => {
    I.amOnPage(testData.home.baseUrl);
    loginPage.loginWithPassword(testData.login.email, testData.login.password);

});
// Scenario('@ Mandatory Validation for Chat Message Field', ({ I, ChatSonicPage, expectedAssertionsPage }) => {
//     allure.epic('General Writing');
//     allure.feature('ChatSonic');
//     allure.severity('Normal');
//     allure.setDescription('Mandatory Validation for Chat Field');
//     ChatSonicPage.clickOnChatSonicTab();
//     I.see(expectedAssertionsPage.ChatSonic.gettextchatsonic);
//     if (I.see(expectedAssertionsPage.ChatSonic.gettxtHereswhatsnew)) {
//         ChatSonicPage.clickOnLetsGoButton();
//     };
//     ChatSonicPage.clickOnSendButton();
//     I.see(expectedAssertionsPage.ChatSonic.gettxtpleaseentermessage);
// });

// Scenario('@ Invalid Data Validation for Chat Message Field', ({ I, ChatSonicPage, expectedAssertionsPage, testData }) => {
//     allure.epic('General Writing');
//     allure.feature('ChatSonic');
//     allure.severity('Normal');
//     allure.setDescription('Data Validation for Chat Field');
//     ChatSonicPage.clickOnChatSonicTab();
//     I.see(expectedAssertionsPage.ChatSonic.gettextchatsonic);
//     if (I.see(expectedAssertionsPage.ChatSonic.gettxtHereswhatsnew)) {
//         ChatSonicPage.clickOnLetsGoButton();
//     };
//     ChatSonicPage.setChatSonicText(testData.ChatSonic.invaliddata);
//     ChatSonicPage.clickOnSendButton();
//     I.seeElement(ChatSonicPage.gettxtInvalidData);

//});
Scenario('@ verify Chat Generation using General AI', ({ I, ChatSonicPage, testData, expectedAssertionsPage, BaseAutomationPage }) => {
    allure.epic('General Writing');
    allure.feature('ChatSonic');
    allure.severity('CRITICAL');
    allure.setDescription('Verify ChatSonic Feature');

    
    

    ChatSonicPage.clickOnChatSonicTab();
    I.see(expectedAssertionsPage.ChatSonic.gettextchatsonic);
    if (I.see(expectedAssertionsPage.ChatSonic.gettxtHereswhatsnew)) {
        ChatSonicPage.clickOnLetsGoButton();
    };
    ChatSonicPage.clickOnWatchDemo();
    I.see(expectedAssertionsPage.ChatSonic.gettxtfromyoutube);
    I.closeCurrentTab();
    ChatSonicPage.clickOnChangemodeButton();
    ChatSonicPage.clickOnGeneralAi();
    ChatSonicPage.clickOnStartChat();
    I.seeElement(ChatSonicPage.gettxtYouarechattingwithGeneralAI);
    I.wait(3);
    ChatSonicPage.setChatSonicText(testData.ChatSonic.chatsonictext);
    ChatSonicPage.clickOnSendButton();
    I.see(expectedAssertionsPage.ChatSonic.gettxtresetchat);
    ChatSonicPage.clickOnEditIconForQuestion();
    ChatSonicPage.clickOnReSubmitButton();
    ChatSonicPage.clickOnEditIconForQuestion();
    BaseAutomationPage.clickOnCancelBtnWhileEdit();
    ChatSonicPage.clickOnIncludelatestGoogledataToggleButton();
    I.wait(10);
    ChatSonicPage.setChatSonicText(testData.ChatSonic.chatsonictext);
    ChatSonicPage.clickOnSendButton();
    ChatSonicPage.clickOnRecordingButton();
    //I.see(expectedAssertionsPage.ChatSonic.gettxtstoprecording);
    ChatSonicPage.clickOnRecordingButton();
    //  I.see(expectedAssertionsPage.ChatSonic.gettxtstartrecording);
    ChatSonicPage.clickOnTextToSpeech();
    ChatSonicPage.clickOnEditIcon();
    ChatSonicPage.clickOnSaveButton();
    ChatSonicPage.clickOnEditIcon();
    BaseAutomationPage.clickOnCancelBtnWhileEdit();
    I.see(expectedAssertionsPage.ChatSonic.gettxtmessagebeensuccessfully);
    ChatSonicPage.clickOnCopyIcon();
    I.see(expectedAssertionsPage.ChatSonic.gettxttexthasbeencopiedtoclipboard);
    ChatSonicPage.clickOnLikeIcon();
    ChatSonicPage.clickOnUnLikeIcon();
    ChatSonicPage.clickOnResetChat();
    I.see(expectedAssertionsPage.ChatSonic.gettextchatsonic);
    BaseAutomationPage.clickOnShareYourDocument();
    I.see(expectedAssertionsPage.sharethisarticle);
});
Scenario('@ verify Examples of Each Persona Mode', ({ I, ChatSonicPage, testData, expectedAssertionsPage, BaseAutomationPage }) => {
    allure.epic('General Writing');
    allure.feature('ChatSonic');
    allure.severity('Major');
    allure.setDescription('verify Examples of Each Persona Mode');

    ChatSonicPage.clickOnChatSonicTab();
    I.see(expectedAssertionsPage.ChatSonic.gettextchatsonic);
    if (I.see(expectedAssertionsPage.ChatSonic.gettxtHereswhatsnew)) {
        ChatSonicPage.clickOnLetsGoButton();
    };
    ChatSonicPage.clickOnChangemodeButton();
    ChatSonicPage.clickOnGeneralAi();
    ChatSonicPage.clickOnStartChat();
    I.see(expectedAssertionsPage.ChatSonic.gettxtgeneralaiex1);
    I.see(expectedAssertionsPage.ChatSonic.gettxtgeneralaiex2);
    I.see(expectedAssertionsPage.ChatSonic.gettxtgeneralaiex3);
    I.see(expectedAssertionsPage.ChatSonic.gettxtgeneralaiex4);

    ChatSonicPage.clickOnChangemodeButton();
    ChatSonicPage.clickOnAstrologer();
    ChatSonicPage.clickOnStartChat();
    I.see(expectedAssertionsPage.ChatSonic.gettxtastrologerex1);
    I.see(expectedAssertionsPage.ChatSonic.gettxtastrologerex2);
    I.see(expectedAssertionsPage.ChatSonic.gettxtastrologerex3);
    I.see(expectedAssertionsPage.ChatSonic.gettxtastrologerex4);

    ChatSonicPage.clickOnChangemodeButton();
    ChatSonicPage.clickOnDoctor();
    ChatSonicPage.clickOnStartChat();
    I.see(expectedAssertionsPage.ChatSonic.gettxtdoctorex1);
    I.see(expectedAssertionsPage.ChatSonic.gettxtdoctorex2);
    I.see(expectedAssertionsPage.ChatSonic.gettxtdoctorex3);

    ChatSonicPage.clickOnChangemodeButton();
    ChatSonicPage.clickOnStandUpComedian();
    ChatSonicPage.clickOnStartChat();
    I.see(expectedAssertionsPage.ChatSonic.gettxtstandupcomedianex1);
    I.see(expectedAssertionsPage.ChatSonic.gettxtstandupcomedianex2);
    I.see(expectedAssertionsPage.ChatSonic.gettxtstandupcomedianex3);

    ChatSonicPage.clickOnChangemodeButton();
    ChatSonicPage.clickOnPoet();
    ChatSonicPage.clickOnStartChat();
    I.see(expectedAssertionsPage.ChatSonic.gettxtpoetex1);
    I.see(expectedAssertionsPage.ChatSonic.gettxtpoetex2);
    I.see(expectedAssertionsPage.ChatSonic.gettxtpoetex3);

    ChatSonicPage.clickOnChangemodeButton();
    ChatSonicPage.clickOnPersonalTrainer();
    ChatSonicPage.clickOnStartChat();
    I.see(expectedAssertionsPage.ChatSonic.gettxtpersonaltrainerex1);
    I.see(expectedAssertionsPage.ChatSonic.gettxtpersonaltrainerex2);
    I.see(expectedAssertionsPage.ChatSonic.gettxtpersonaltrainerex3);

    ChatSonicPage.clickOnChangemodeButton();
    ChatSonicPage.clickOnEnglishTranslator();
    ChatSonicPage.clickOnStartChat();
    I.see(expectedAssertionsPage.ChatSonic.gettxtenglishtranslaterex1);
    I.see(expectedAssertionsPage.ChatSonic.gettxtenglishtranslaterex2);
    I.see(expectedAssertionsPage.ChatSonic.gettxtenglishtranslaterex3);

    ChatSonicPage.clickOnChangemodeButton();
    ChatSonicPage.clickOnPhilosopher();
    ChatSonicPage.clickOnStartChat();
    I.see(expectedAssertionsPage.ChatSonic.gettxtphilosopherex1);
    I.see(expectedAssertionsPage.ChatSonic.gettxtphilosopherex2);
    I.see(expectedAssertionsPage.ChatSonic.gettxtphilosopherex3);

    ChatSonicPage.clickOnChangemodeButton();
    ChatSonicPage.clickOnInterviewer();
    ChatSonicPage.clickOnStartChat();
    I.see(expectedAssertionsPage.ChatSonic.gettxtinterviewerex1);
    I.see(expectedAssertionsPage.ChatSonic.gettxtinterviewerex2);

    ChatSonicPage.clickOnChangemodeButton();
    ChatSonicPage.clickOnMotivationalCoach();
    ChatSonicPage.clickOnStartChat();
    I.see(expectedAssertionsPage.ChatSonic.gettxtmotivationalex1);
    I.see(expectedAssertionsPage.ChatSonic.gettxtmotivationalex2);
    I.see(expectedAssertionsPage.ChatSonic.gettxtmotivationalex3);

    ChatSonicPage.clickOnChangemodeButton();
    ChatSonicPage.clickOnDentist();
    ChatSonicPage.clickOnStartChat();
    I.see(expectedAssertionsPage.ChatSonic.gettxtdentistex1);
    I.see(expectedAssertionsPage.ChatSonic.gettxtdentistex2);
    I.see(expectedAssertionsPage.ChatSonic.gettxtdentistex3);

    ChatSonicPage.clickOnChangemodeButton();
    ChatSonicPage.clickOnAccountant();
    ChatSonicPage.clickOnStartChat();
    I.see(expectedAssertionsPage.ChatSonic.gettxtaccountantex1);
    I.see(expectedAssertionsPage.ChatSonic.gettxtaccountantex2);
    I.see(expectedAssertionsPage.ChatSonic.gettxtaccountantex3);

    ChatSonicPage.clickOnChangemodeButton();
    ChatSonicPage.clickOnMathTeacher();
    ChatSonicPage.clickOnStartChat();
    I.see(expectedAssertionsPage.ChatSonic.gettxtmathteacherex1);
    I.see(expectedAssertionsPage.ChatSonic.gettxtmathteacherex2);
    I.see(expectedAssertionsPage.ChatSonic.gettxtmathteacherex3);
    I.see(expectedAssertionsPage.ChatSonic.gettxtmathteacherex4);

    ChatSonicPage.clickOnChangemodeButton();
    ChatSonicPage.clickOnRelationShip();
    ChatSonicPage.clickOnStartChat();
    I.see(expectedAssertionsPage.ChatSonic.gettxtrelationshipex1);
    I.see(expectedAssertionsPage.ChatSonic.gettxtrelationshipex2);
    I.see(expectedAssertionsPage.ChatSonic.gettxtrelationshipex3);

    ChatSonicPage.clickOnChangemodeButton();
    ChatSonicPage.clickOnTravelGuide();
    ChatSonicPage.clickOnStartChat();
    I.see(expectedAssertionsPage.ChatSonic.gettxttravelguideex1);
    I.see(expectedAssertionsPage.ChatSonic.gettxttravelguideex2);
    I.see(expectedAssertionsPage.ChatSonic.gettxttravelguideex3);
    I.see(expectedAssertionsPage.ChatSonic.gettxttravelguideex4);

    ChatSonicPage.clickOnChangemodeButton();
    ChatSonicPage.clickOnCareerCounselor();
    ChatSonicPage.clickOnStartChat();
    I.see(expectedAssertionsPage.ChatSonic.gettxtcareercounselorex1);
    I.see(expectedAssertionsPage.ChatSonic.gettxtcareercounselorex2);
});
