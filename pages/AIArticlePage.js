const { I } = inject();

class AIArticlePage {
    //Elements---------------------------------------------------------

    tabGetIdeas = "//p[text()='GET IDEAS']";
    btnGenerateIdeas = "//p[@class='flex justify-center items-center whitespace-nowrap']";
    tabGetAnOutline = "//p[text()='GET AN OUTLINE']";
    tabGetAnArticle = "//p[text()='GET AN ARTICLE']";
    lblTopic = "//input[@placeholder='Artificial Intelligence in Copywriting']";
    lblOutput = "//input[@type='number']";
    btnSaveIcon = "//div[@class='sticky ml-8 left-4 bottom-4 gap-2 items-center hidden sm:flex tabletStars:sticky']//child::div//child::button";
    btnEditIcon = "//button[@aria-label='Edit']";
    btnSave = "//div[text()='Save']";
    rdoOutline = "//span[@class='h-5 w-5 mt-0.5 cursor-pointer rounded-full flex items-center justify-center border-gray-300 border']";
    tabGetAnIntro = "//p[text()='GET AN INTRO']";
    btnSelectindividualoutlinesToggle = "//span[text()='Select individual outlines']";
    iconStarRating1 = "(//*[@class='text-gray-2 cursor-pointer transition-all duration-100 hover:scale-125'])[6]";
    iconStarRating3 = "(//*[@class='text-gray-2 cursor-pointer transition-all duration-100 hover:scale-125'])[4]";
    //Methods-------------------------------------------------------
    clickOnGetAnIntroTab() {
        I.click(this.tabGetAnIntro);
    };
    setOutputs(outputvalue) {
        I.fillField(this.lblOutput, outputvalue);
    };
    setTopicField(topic) {
       I.waitForVisible(this.lblTopic, 30);
        I.fillField(this.lblTopic, topic);
    };
    clickOnGetAnArticleTab() {
        I.click(this.tabGetAnArticle);
    };

    clickOnGetAnOutlineTab() {
        I.click(this.tabGetAnOutline);
    };

    clickOnGenerateIdeasButton() {
        I.click(this.btnGenerateIdeas);
    };

    clickOnGetIdeasTab() {
        I.click(this.tabGetIdeas);
    };
    clickOnSaveBtn() {
        I.waitForVisible(this.btnSaveIcon, 180);
        I.click(this.btnSaveIcon);
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
    clickOnSelectindividualoutlinesToggleButton(){
        I.waitForVisible(this.btnSelectindividualoutlinesToggle, 30);
        I.click(this.btnSelectindividualoutlinesToggle);
    };
    clickOnStarRating1(){
        I.click(this.iconStarRating1);
    };
    clickOnStarRating3(){
        I.click(this.iconStarRating1);
    };
    clickOnStarRating5(){
        I.click(this.iconStarRating3);
    };
}
module.exports = new AIArticlePage();