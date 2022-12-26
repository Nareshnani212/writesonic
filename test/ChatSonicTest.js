const allure = codeceptjs.container.plugins('allure');
Feature('ChatSonic');

Before(({ I, loginPage, testDataPage }) => {
    I.amOnPage(testDataPage.home.baseUrl);
    loginPage.loginWithGoogleAccount(testDataPage.login.email, testDataPage.login.password);

});
Scenario('@Verify ChatSonic Feature', ({ I, ChatSonicPage, testDataPage, expectedAssertionsPage }) => {
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
    ChatSonicPage.setChatSonicText(testDataPage.ChatSonic.chatsonictext);
    ChatSonicPage.clickOnSendButton();
    I.see(expectedAssertionsPage.ChatSonic.gettxtresetchat);
    ChatSonicPage.clickOnIncludelatestGoogledataToggleButton();
    ChatSonicPage.setChatSonicText(testDataPage.ChatSonic.chatsonictext);
    ChatSonicPage.clickOnSendButton();
    ChatSonicPage.clickOnRecordingButton();
    //I.see(expectedAssertionsPage.ChatSonic.gettxtstoprecording);
    ChatSonicPage.clickOnRecordingButton();
    //I.see(expectedAssertionsPage.ChatSonic.gettxtstartrecording);
    // ChatSonicPage.clickOnSettingsButton();
    // I.see(expectedAssertionsPage.ChatSonic.gettxtsettings);
    // ChatSonicPage.clickOnTextToSpeechToggleButton();
    // ChatSonicPage.clickOnCancelButtonOnSettings();
    ChatSonicPage.clickOnTextToSpeech();
    ChatSonicPage.clickOnEditIcon();
    ChatSonicPage.clickOnSaveButton();
    I.see(expectedAssertionsPage.ChatSonic.gettxtmessagebeensuccessfully);
    ChatSonicPage.clickOnCopyIcon();
    I.see(expectedAssertionsPage.ChatSonic.gettxttexthasbeencopiedtoclipboard);
    ChatSonicPage.clickOnLikeIcon();
    ChatSonicPage.clickOnUnLikeIcon();
    ChatSonicPage.clickOnResetChat();
    I.see(expectedAssertionsPage.ChatSonic.gettextchatsonic);
   
});
