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
    btnResetChat = "//div[text()='Reset Chat']";
    iconTextToSpeach = "//div[@class='flex items-center justify-center']//button[@type='button']//*[name()='svg']";
    iconspeech = "//*[@class='h-4 w-4 text-gray-400 hover:text-purple-1']";
    iconEditQuestion = "(//button[@aria-label='Edit'])[1]";
    iconEdit = "//button[@aria-label='Download']//following-sibling::button[@aria-label='Edit']";
    iconDownload = "//button[@aria-label='Download']//*[name()='svg']";
    btnSave = "//div[text()='Save']";
    iconCopy = "//button[@aria-label='Copy to clipboard']//*[name()='svg']";
    iconLike = "//div[contains(@class,'flex gap-1')]//button[1]";
    iconDisLike = "//div[contains(@class,'flex gap-1')]//button[2]";
    iconDownload = "//button[@aria-label='Download']//*[name()='svg']";
    btnChangeMode = "//p[@class='underline cursor-pointer']";
    txtGeneralAi = "//div[text()='General AI']";
    txtAstrologer = "//div[text()='Astrologer']";
    txtDoctorr = "//div[text()='Doctor']";
    txtStandupComedian = "//div[text()='Stand-up Comedian']";
    txtPoet = "//div[text()='Poet']";
    txtPersonalTrainer = "//div[text()='Personal Trainer']";
    txtEnglishTranslator = "//div[text()='English Translator']";
    txtPhilosopher = "//div[text()='Philosopher']";
    txtInterviewer = "//div[text()='Interviewer']";
    txtMotivationalCoach = "//div[text()='Motivational Coach']";
    txtDentist = "//div[text()='Dentist']";
    txtMotivationalCoach = "//div[text()='Motivational Coach']";
    txtAccountant = "//div[text()='Accountant']";
    txtMathTeacher = "//div[text()='Math Teacher']";
    txtRelationshipCoach = "//div[text()='Relationship Coach']";
    txtTravelGuide = "//div[text()='Travel Guide']";
    txtCareerCounselor = "//div[text()='Career Counselor']";

    btnStartChat = "//div[text()='Start Chat']";
    gettxtAstrologer = "//strong[text()='Astrologer']";
    gettxtYouarechattingwithGeneralAI = "//span[text()='You are chatting with General AI']";
    btnResubmit = "//div[text()='Resubmit']";
    gettxtInvalidData = "//div[@class='bg-red-200 px-4 lg:px-2 group border-t border-b border-indigo-100']";
    //Methods-----------------------------------------
    clickOnChatSonicTab() {
        I.waitForVisible(this.tabChatSonic, 50);
        I.click(this.tabChatSonic);
    };
    clickOnLetsGoButton() {
        I.click(this.btnLetsGo);
    };
    setChatSonicText(chatsonictxt) {
        I.fillField(this.lblchatSonicText, chatsonictxt)
    };
    clickOnIncludelatestGoogledataToggleButton() {

        I.click(this.tgleBtnIncludelatestGoogledata);
    };
    clickOnSendButton() {
        I.click(this.btnSend);
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
    clickOnEditIcon() {
        I.moveCursorTo(this.iconEdit);
        I.click(this.iconEdit);
    };
    clickOnSaveButton() {
        I.waitForVisible(this.btnSave, 10);
        I.click(this.btnSave);
    };
    clickOnDeleteIcon() {
        I.waitForVisible(this.btnDeleteIcon, 10);
        I.moveCursorTo(this.btnDeleteIcon);
        I.click(this.btnDeleteIcon);
        I.waitForVisible(this.btnDeleteIcon, 10);
        I.click(this.btnDelete);
    };
    clickOnChangemodeButton() {
        I.click(this.btnChangeMode);
    };
    clickOnGeneralAi() {
        I.click(this.txtGeneralAi);
    };
    clickOnAstrologer() {
        I.click(this.txtAstrologer);
    };
    clickOnStartChat() {
        I.click(this.btnStartChat);
        I.scrollPageToBottom();
    };
    clickOnEditIconForQuestion() {
        I.waitForVisible(this.btnSend, 100);
        I.moveCursorTo(this.iconEditQuestion);
        I.click(this.iconEditQuestion);
    };
    clickOnReSubmitButton() {
        I.click(this.btnResubmit);
        I.waitForVisible(this.btnSend, 50);
    };
    clickOnDoctor() {
        I.click(this.txtDoctorr);
    };
    clickOnStandUpComedian() {
        I.click(this.txtStandupComedian);
    };
    clickOnPoet() {
        I.click(this.txtPoet);
    };
    clickOnPersonalTrainer() {
        I.click(this.txtPersonalTrainer);
    };
    clickOnPhilosopher() {
        I.click(this.txtPhilosopher);
    };
    clickOnInterviewer() {
        I.click(this.txtInterviewer);
    };
    clickOnMotivationalCoach() {
        I.click(this.txtMotivationalCoach);
    };
    clickOnDentist() {
        I.click(this.txtDentist);
    };
    clickOnAccountant() {
        I.click(this.txtAccountant);
    };
    clickOnMathTeacher() {
        I.click(this.txtMathTeacher);
    };
    clickOnRelationShip() {
        I.click(this.txtRelationshipCoach);
    };
    clickOnTravelGuide() {
        I.click(this.txtTravelGuide);
    };
    clickOnCareerCounselor() {
        I.click(this.txtCareerCounselor);
    };
    clickOnEnglishTranslator() {
        I.click(this.txtEnglishTranslator);
    };
}
module.exports = new ChatSonicPage();