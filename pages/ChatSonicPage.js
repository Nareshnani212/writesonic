const { I } = inject();
class ChatSonicPage {

    //Elements----------------------------------------
    tabChatSonic = "//a[text()='Chatsonic']";
    btnLetsGo = "//div[@class='mt-2 block']/following-sibling::button";
    lblchatSonicText = "//div[@class='flex-1']/textarea";
    tgleBtnIncludelatestGoogledata = "//label[@class='inline-flex relative cursor-pointer']";
    btnSend = "//div[@class='absolute right-2 bottom-2 mt-2 cursor-pointer']";
    btnRecording = "//button[@class='ml-2 mt-2']";
    btnSettings = "//button[@class='ml-2 mt-2']/following-sibling::div";
    tgleBtnTextToSpeech = "//p[text()='Text To Speech: ']/following-sibling::div/label";
    btnCanelSetting = "//p[text()='Settings']/following-sibling::button";
    btnWatchDemo = "//span[text()='Watch a demo']";
    txtCheckReleaseNotes = "//span[text()='Check release notes.']";
    btnCancelCheckReleaseNotes = "//button[@type='button']/span[text()='Close']";
    btnShareYourDocument = "//div[@class='hidden md:block']";
    btnResetChat = "//div[text()='Reset Chat']";
    iconTextToSpeach = "//div[@class='flex items-center justify-center']//button[@type='button']//*[name()='svg']";
    iconspeech = "//*[@class='h-4 w-4 text-gray-400 hover:text-purple-1']";
    iconEdit = "//button[@aria-label='Download']//following-sibling::button[@aria-label='Edit']";
    iconDownload = "//button[@aria-label='Download']//*[name()='svg']";
    btnSave = "//div[text()='Save']";
    iconCopy = "//button[@aria-label='Copy to clipboard']//*[name()='svg']";
    iconLike = "//div[contains(@class,'flex gap-1')]//button[1]";
    iconDisLike = "//div[contains(@class,'flex gap-1')]//button[2]";

    //Methods-----------------------------------------
    clickOnChatSonicTab() {
        I.waitForVisible(this.tabChatSonic, 20);
        I.click(this.tabChatSonic);
    };
    clickOnLetsGoButton() {
        I.click(this.btnLetsGo);
    };
    setChatSonicText(chatsonictxt) {
        //I.switchToPreviousTab();
        I.waitForVisible(this.lblchatSonicText, 20);
        I.fillField(this.lblchatSonicText, chatsonictxt)
    };
    clickOnIncludelatestGoogledataToggleButton() {
        I.click(this.tgleBtnIncludelatestGoogledata);
    };
    clickOnSendButton() {
        I.click(this.btnSend);
        //I.waitForVisible(this.btnSend, 50);
    };
    clickOnRecordingButton() {
        I.moveCursorTo(this.btnResetChat);
        I.click(this.btnRecording);
        I.moveCursorTo(this.btnRecording);
        I.wait(2);
    };
    clickOnSettingsButton() {
        I.click(this.btnSettings);
    };
    clickOnTextToSpeechToggleButton() {
        I.moveCursorTo(this.btnCanelSetting);
        I.click(this.tgleBtnTextToSpeech);
    };
    clickOnCancelButtonOnSettings() {
        I.click(this.btnCanelSetting);
    };
    clickOnWatchDemo() {
        I.click(this.btnWatchDemo);
        I.switchToNextTab();
        I.wait(5);
    };
    clickOnCheckReleaseNotes() {
        I.click(this.txtCheckReleaseNotes);
        I.waitForVisible(this.btnCancelCheckReleaseNotes, 5);
        I.click(this.btnCancelCheckReleaseNotes)
    };
    clickOnShareYourDocument() {
        I.click(this.btnShareYourDocument);
    };
    clickOnResetChat() {
        I.click(this.btnResetChat);
    };
    clickOnTextToSpeech() {
        I.moveCursorTo(this.iconTextToSpeach);
        I.click(this.iconTextToSpeach);
    };
    clickOnEditIcon() {
        I.moveCursorTo(this.iconEdit);
        I.click(this.iconEdit);
    };
    clickOnSaveButton() {
        I.waitForVisible(this.btnSave, 10);
        I.click(this.btnSave);
    }; 
    clickOnDownloadIcon() {
        I.moveCursorTo(this.iconDownload);
        I.click(this.iconDownload);
    };
    clickOnCopyIcon() {
        I.moveCursorTo(this.iconCopy);
        I.click(this.iconCopy);
    };
    clickOnLikeIcon() {
        I.moveCursorTo(this.iconLike);
        I.click(this.iconLike);
    };
    clickOnUnLikeIcon() {
        I.moveCursorTo(this.iconDisLike);
        I.click(this.iconDisLike);
    };
}
module.exports = new ChatSonicPage();