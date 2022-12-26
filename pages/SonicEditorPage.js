const { I } = inject();
class SonicEditorPage {
    //Elements----------------------------------------
    tabArticleAndBlog = "//a[text()='Article And Blogs']";
    txtSonicEditor = "//p[text()='Sonic Editor']";
    lblSonicEditorText = "//div[@class='ql-editor ql-blank']";
    btnWriteWithAi = "//div[@class='flex justify-center items-center']";
    btnS = "//span[text()='S']";
    btnM = "//span[text()='L']";
    btnL = "//span[text()='M']";
    btnGeneralTab = "//div[contains(@class,'cursor-pointer text-gray-6')]";
    sliderCreativity = "//span[@class='MuiSlider-thumb MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium css-7drnjp']";
    //Methods-----------------------------------------
    clickOnSonicEditorFeature() {
        I.waitForVisible(this.tabArticleAndBlog, 50);
        I.click(this.tabArticleAndBlog);
        I.click(this.txtSonicEditor);
    };
    setTextOnSonicEditor(text) {
        I.fillField(this.lblSonicEditorText, text);
    };
    clickOnWriteWithAi() {
        I.click(this.btnWriteWithAi);
    };
    clickOnSButton() {
        I.click(this.btnS);
    };
    clickOnMButton() {
        I.click(this.btnM);
    };
    clickOnLButton() {
        I.click(this.btnL);
    };
    clickOnGeneralTabIcon(){
        I.click(this.btnGeneralTab);
    };
    SlidingCreativitySlider(){
        I.dragSlider(this.sliderCreativity, 10);
    };
}
module.exports = new SonicEditorPage();