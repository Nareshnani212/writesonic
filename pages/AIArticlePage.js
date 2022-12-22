const { I } = inject();

class AIArticlePage {
    //Elements---------------------------------------------------------

    tabGetIdeas = "//p[text()='GET IDEAS']";
    btnGenerate = "//p[text()='Generate']";
    tabGetAnOutline = "//p[text()='GET AN OUTLINE']";
    tabGetAnArticle = "//p[text()='GET AN ARTICLE']";
    lblTopic = "//input[@placeholder='Artificial Intelligence in Copywriting']";
    lblOutput = "//input[@type='number']";
    btnSaveIcon = "//div[@class='sticky ml-8 left-4 bottom-4 gap-2 items-center hidden sm:flex tabletStars:sticky']//child::div//child::button";
    btnCopy = "//button[@aria-label='Copy to clipboard']";
    btnDeleteIcon = "//button[@aria-label='Delete']//*[name()='svg']";
    btnDelete = "//div[text()='Delete']";
    btnEditIcon = "//button[@aria-label='Edit']";
    btnSave = "//div[text()='Save']";
    rdoOutline = "//span[@class='h-5 w-5 mt-0.5 cursor-pointer rounded-full flex items-center justify-center border-gray-300 border']";
    tabGetAnIntro = "//p[text()='GET AN INTRO']";

    //Methods-------------------------------------------------------
    clickOnGetAnIntroTab() {
        I.click(this.tabGetAnIntro);
    };
    setOutputs(outputvalue) {
        I.fillField(this.lblOutput, outputvalue);
    };
    setTopicField(topic) {
        I.fillField(this.lblTopic, topic);
    };
    clickOnGetAnArticleTab() {
        I.click(this.tabGetAnArticle);
    };

    clickOnGetAnOutlineTab() {
        I.click(this.tabGetAnOutline);
    };

    clickOnGenerateButton() {
        I.click(this.btnGenerate);
    };

    clickOnGetIdeasTab() {
        I.click(this.tabGetIdeas);
    };
    clickOnSaveBtn() {
        I.waitForVisible(this.btnSaveIcon, 100);
        I.click(this.btnSaveIcon);
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
        I.waitForVisible(this.btnDeleteIcon, 10);
        I.click(this.btnDelete);
    };
    clickOnEditIcon() {
        I.moveCursorTo(this.btnEditIcon);
        I.waitForVisible(this.btnEditIcon, 10);
        I.click(this.btnEditIcon);
        I.waitForVisible(this.btnSave, 10);
        I.click(this.btnSave);
    };
    clickOnRadioBtnForOutline() {
        I.waitForVisible(this.rdoOutline, 10);
        I.click(this.rdoOutline);
    };
}
module.exports = new AIArticlePage();