const { I } = inject();
class SonicEditorPage {
    //Elements----------------------------------------
    tabArticleAndBlog = "//a[text()='Article And Blogs']";
    txtSonicEditor = "//p[text()='Sonic Editor']";
    lblSonicEditorText = "//div[@class='ql-editor ql-blank']";
    lblSonicEditorTextEmpty = "//div[@class='ql-editor']/p";
    btnWriteWithAi = "//div[@class='flex justify-center items-center']";
    btnS = "//span[text()='S']";
    btnmedium = "//p[text()='Medium']";
    btnlong = "//p[text()='Long']";
    btnGeneralTab = "//div[contains(@class,'cursor-pointer text-gray-6')]";
    sliderCreativity = "//span[@class='MuiSlider-thumb MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium css-7drnjp']";
    btnInsertdocumentcursor = "//button[@aria-label='Insert this text at the document cursor']";
    lblTopic = "//input[@placeholder='Artificial intelligence is the future of copywriting']";
    lblTitle = "//input[@placeholder='How Artificial Intelligence Will Change The World Of Copywriting']";
    lblTargetKeywords = "//input[@placeholder='landing page, Google ads, Facebook ads']";
    txtarticleandblogsinsoniceditor = "//p[text()='Article And Blogs']";
    txtparagraph = "//p[text()='Paragraph Writer']";
    txtaiarticlesintro = "//p[text()='AI Article Intros']";
    iconfocusmode ="//button[@aria-label='Focus mode']";
    iconsonicmode = "//button[@aria-label='Sonic mode']";
    iconsurferseomode = "//button[@aria-label='SurferSEO mode']";
    drpdwnwords = "//button[@class='menu-close shadow-gButton z-1  bg-white gray-7 text-[14px] font-medium rounded-8 ql-counter min-w-150 absolute left-[32px] bottom-[30px] inline-flex justify-between items-center px-4 py-2']";
    lblwords = "//div[@data-gramm='false']/p";
    lblQualityType = "(//input[contains(@class,'capitalize pl-3')])[2]";
    //Methods-----------------------------------------
    clickOnSonicEditorFeature() {
        I.waitForVisible(this.tabArticleAndBlog, 50);
        I.click(this.tabArticleAndBlog);
        I.click(this.txtSonicEditor);
    };
    setTextOnSonicEditor(text) {
        I.fillField(this.lblSonicEditorText, text);
    };
    setTextOnSonicEditorForSecond(text) {
        I.clearField(this.lblwords);
        I.fillField(this.lblwords, text);
    };
    clickOnWriteWithAi() {
        I.click(this.btnWriteWithAi);
    };
    clickOnSButton() {
        I.click(this.btnS);
    };
    clickOnMedium() {
        I.click(this.btnmedium);
    };
    clickOnLong() {
        I.waitForVisible(this.btnlong, 10);
        I.click(this.btnlong);
    };
    clickOnGeneralTabIcon() {
        I.click(this.btnGeneralTab);
    };
    SlidingCreativitySlider() {
        I.dragSlider(this.sliderCreativity, 3);
    };
    clickOnInsertDocumentCursor() {
        I.waitForVisible(this.btnInsertdocumentcursor, 20);
        I.click(this.btnInsertdocumentcursor);
    };
    setTopicFieldInParagarphWriter(topic) {
        I.wait(5);
        I.fillField(this.lblTopic, topic);
    };
    setTitleInAiArticlesIntros(title) {
        I.wait(5);
        I.fillField(this.lblTitle, title);
    };
    setTargetKeywordsInParagarphWriter(Targetkeywords) {
        I.fillField(this.lblTargetKeywords, Targetkeywords);
    };
    clickOnArticleAndBlogsTab(){
        I.click(this.txtarticleandblogsinsoniceditor);
    };
    clickOnParagraphFeature(){
        I.click(this.txtparagraph);
    };
    clickOnAiArticleIntroFeature(){
        I.click(this.txtaiarticlesintro);
    };
    clickOnFocusModeIcon(){
        I.click(this.iconfocusmode);
    };
    clickOnSurferSEOModeIcon(){
        I.waitForVisible(this.btnWriteWithAi, 30);
        I.click(this.iconsurferseomode);
    }; 
    clickOnSonicModeIcon(){
        I.click(this.iconsonicmode);
    };
    clickOnWordsDropdown(){
        I.click(this.drpdwnwords);
    };
    setQualityType(qualitytype) {
        I.fillField(this.lblQualityType, qualitytype);
    };
}
module.exports = new SonicEditorPage();