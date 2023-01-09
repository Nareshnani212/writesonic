const { I } = inject();

class BaseAutomationPage {
    //Elements---------------------------------------------------------

    btnResetChat = "//div[text()='Reset Chat']";
    btnEditIcon = "//button[@aria-label='Edit']";
    btnSave = "//div[text()='Save']";
    btnCopy = "//button[@aria-label='Copy to clipboard']";
    btnDeleteIcon = "//button[@aria-label='Delete']//*[name()='svg']";
    btnDelete = "//div[text()='Delete']";
    iconLike = "//div[contains(@class,'flex gap-1')]//button[1]";
    iconDisLike = "//div[contains(@class,'flex gap-1')]//button[2]";
    lblQualityType = "//input[@class='capitalize pl-3  bg-white border border-gray-200 rounded-lg pr-10 w-full py-2 focus:border-indigo-500 focus:outline-none focus:ring-0.5 focus:ring-purple-1 text-sm']";
    txtEconomy = "//span[text()='economy']";
    txtGood = "//span[text()='good']";
    txtAverage = "//span[text()='average']";
    txtPremium = "//span[text()='premium']";
    lblLanguage = "//input[@class='pl-10 bg-white border border-gray-200 rounded-lg pr-10 w-full py-2 focus:border-indigo-500 focus:outline-none focus:ring-0.5 focus:ring-purple-1 text-sm']";
    txtEnglish = "//span[text()='English']";
    lblToneOfVoice = "//label[text()='Tone of voice']//parent::div//div//input[@class='pl-3  bg-white border border-gray-200 rounded-lg pr-10 w-full py-2 focus:border-indigo-500 focus:outline-none focus:ring-0.5 focus:ring-purple-1 text-sm']";
    txtExcited = "//span[text()='Excited']";
    txtProfessional = "//span[text()='Professional']";
    txtEncouraging = "//span[text()='Encouraging']";
    txtFunny = "//span[text()='Funny']";
    txtDramatic = "//span[text()='Dramatic']";
    txtWitty = "//span[text()='Witty']";
    lblOutput = "//input[@type='number']";
    btnGenerate = "//p[text()='Generate']";
    btnReGenerate = "//p[text()='Regenerate']";
    btnShareYourDocument = "//div[@class='hidden md:block']";
    iconStarRating1 = "(//*[@class='text-gray-2 cursor-pointer transition-all duration-100 hover:scale-125'])[1]";
    iconStarRating3 = "(//*[@class='text-gray-2 cursor-pointer transition-all duration-100 hover:scale-125'])[2]";
    btnArticleSave = "//button[@class='group border bg-white rounded-full flex justify-center items-center hover:border-purple-100 h-10 w-10 shadow-unsubscribeSection']";
    btnCancel = "//div[text()='Cancel']";
    btnBookmark = "//button[@aria-label='Bookmark']";
    iconProfile = "//img[contains(@class,'rounded-full border')]";

        //Methods-------------------------------------------------------
    clickOnResetChat() {
        I.click(this.btnResetChat);
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
    setQualityType(qualitytype) {
        I.fillField(this.lblQualityType, qualitytype);
    };
    clickOnEconomy() {
        I.click(this.txtEconomy);
    };
    clickOnGood() {
        I.click(this.txtGood);
    };
    clickOnAverage() {
        I.click(this.txtAverage);
    };
    clickOnPremium() {
        I.click(this.txtPremium);
    };
    setLanguageAsEnglish(english) {
        I.fillField(this.lblLanguage, english);
        I.click(this.txtEnglish);
    };
    setToneOfVoice(toneofvoice) {
        I.waitForVisible(this.lblToneOfVoice, 20);
        I.fillField(this.lblToneOfVoice, toneofvoice);
    };
    clickOnExcited() {
        I.click(this.txtExcited);
    };
    clickOnEncouraging() {
        I.click(this.txtEncouraging);
    };
    clickOnFunny() {
        I.click(this.txtFunny);
    };
    clickOnDramatic() {
        I.click(this.txtDramatic);
    };
    clickOnWitty() {
        I.click(this.txtWitty);
    };
    setOutputs(outputvalue) {
        I.fillField(this.lblOutput, outputvalue);
    };
    clickOnGenerateButton() {
        I.click(this.btnGenerate);
    };
    clickOnShareYourDocument() {
        I.waitForElement(this.btnShareYourDocument, 100);
        I.click(this.btnShareYourDocument);
    };
    clickOnReGenerateButton() {
        I.click(this.btnReGenerate);
    };
    clickOnEditIcon() {
        I.moveCursorTo(this.btnEditIcon);
        I.waitForVisible(this.btnEditIcon, 10);
        I.click(this.btnEditIcon);
        I.waitForVisible(this.btnSave, 10);
        I.click(this.btnSave);
    };
    clickOnEditIconForCancel() {
        I.moveCursorTo(this.btnEditIcon);
        I.waitForVisible(this.btnEditIcon, 10);
        I.click(this.btnEditIcon);
        I.waitForVisible(this.btnCancel, 10);
        I.click(this.btnCancel);
    };
    clickOnCopyBtn() {
        I.waitForVisible(this.btnCopy, 30);
        I.moveCursorTo(this.btnCopy);
        I.click(this.btnCopy);
    };
    clickOnDeleteIcon() {
        I.waitForVisible(this.btnDeleteIcon, 10);
        I.moveCursorTo(this.btnDeleteIcon);
        I.click(this.btnDeleteIcon);
        I.waitForVisible(this.btnDelete, 10);
        I.click(this.btnDelete);
    };
    clickOnStarRating1() {
        I.waitForVisible(this.iconStarRating1, 100);
        I.click(this.iconStarRating1);
    };
    clickOnStarRating3() {
        I.click(this.iconStarRating3);
    };
    clickOnStarRating5() {
        I.wait(3);
        I.click(this.iconStarRating3);
    };
    clickOnArticleSaveBtn() {
        I.waitForVisible(this.btnArticleSave, 180);
        I.click(this.btnArticleSave);
    };
    clickOnCancelBtnWhileEdit() {
        I.click(this.btnCancel);
    };
    clickOnBookMarkIcon(){
        I.click(this.btnBookmark);
    };
    clickOnProfileIcon(){
        I.waitForVisible(this.iconProfile, 100)
        I.click(this.iconProfile);
    }
}
module.exports = new BaseAutomationPage();