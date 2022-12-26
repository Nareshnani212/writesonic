const { I } = inject();

class BaseAutomationPage {
    //Elements---------------------------------------------------------

    btnResetChat = "//div[text()='Reset Chat']";
    iconEdit = "//button[@aria-label='Download']//following-sibling::button[@aria-label='Edit']";
    iconDownload = "//button[@aria-label='Download']//*[name()='svg']";
    btnSave = "//div[text()='Save']";
    iconCopy = "//button[@aria-label='Copy to clipboard']//*[name()='svg']";
    iconLike = "//div[contains(@class,'flex gap-1')]//button[1]";
    iconDisLike = "//div[contains(@class,'flex gap-1')]//button[2]";
    lblQualityType = "//input[@class='capitalize pl-3  bg-white border border-gray-200 rounded-lg pr-10 w-full py-2 focus:border-indigo-500 focus:outline-none focus:ring-0.5 focus:ring-purple-1 text-sm']";
    txtEconomy = "//span[text()='economy']";
    txtGood = "//span[text()='good']";
    txtAverage = "//span[text()='average']";
    txtPremium = "//span[text()='premium']";
    lblLanguage = "//input[@class='pl-10 bg-white border border-gray-200 rounded-lg pr-10 w-full py-2 focus:border-indigo-500 focus:outline-none focus:ring-0.5 focus:ring-purple-1 text-sm']";
    txtEnglish = "//span[text()='English']";


    //Methods-------------------------------------------------------
    clickOnResetChat() {
        I.click(this.btnResetChat);
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
    setQualityTypeAsEconomy(economy) {
        I.fillField(this.lblQualityType, economy);
        I.click(this.txtEconomy);
    };
    setQualityTypeAsPremium(Premium) {
        I.fillField(this.txtQualityType, Premium);
        I.click(this.txtEconomy);
    };
    setQualityTypeAsGood(Good) {
        I.fillField(this.txtQualityType, Good);
        I.click(this.txtEconomy);
    };
    setQualityTypeAsAverage(Average) {
        I.fillField(this.txtQualityType, Average);
        I.click(this.txtEconomy);
    };
    setLanguageAsEnglish(english) {
        I.fillField(this.lblLanguage, english);
        I.click(this.txtEnglish);
    };

}

module.exports = new BaseAutomationPage();