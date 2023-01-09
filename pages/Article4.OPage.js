
const { I } = inject();
class Article4OPage {
    //Elements--------------------------------------------------  
   
    btnSearchKeywords = "//div[text()='Search Keywords']";
    tabArticleAndBlog = "//a[text()='Article And Blogs']";
    lblToneOfVoice = "//label[text()='Tone of voice']//parent::div//div//input[@class='pl-3  bg-white border border-gray-200 rounded-lg pr-10 w-full py-2 focus:border-indigo-500 focus:outline-none focus:ring-0.5 focus:ring-purple-1 text-sm']";
    txtExcited = "//span[text()='Excited']";
    txtProfessional = "//span[text()='Professional']";
    txtEncouraging = "//span[text()='Encouraging']";
    txtFunny = "//span[text()='Funny']";
    txtDramatic = "//span[text()='Dramatic']";
    txtWitty = "//span[text()='Witty']";
    txtFirstPerson = "//span[text()='First Person']";
    txtSecondPerson = "//span[text()='Second Person']";
    txtThirdPerson = "//span[text()='Third Person']";
    txtArticle4o = "//p[text()='AI Article Writer 4.0']";
    chkKeyword = "(//input[contains(@class,'absolute left-4')])[2]";
    btnNext = "//div[text()='Next']";
    rdoTitle4o = "//div[@class='flex flex-col w-full']";
    txtPointOfView = "//label[text()='Point of view']//parent::div//div//input[@class='pl-3  bg-white border border-gray-200 rounded-lg pr-10 w-full py-2 focus:border-indigo-500 focus:outline-none focus:ring-0.5 focus:ring-purple-1 text-sm']";


    //Methods---------------------------------------------------

    clickOnSearchKeywords() {
        I.click(this.btnSearchKeywords);
    };
    setPointOfView(pointofview) {
        I.fillField(this.txtPointOfView, pointofview);
    };
    clickOnProfessional() {
        I.click(this.txtProfessional);
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
    clickOnArticle4Ofeature() {
        I.waitForVisible(this.tabArticleAndBlog, 180);
        I.click(this.tabArticleAndBlog);
        I.click(this.txtArticle4o);
        I.wait(4);
    };
    clickOnKeywordCheckBox() {
        I.waitForVisible(this.chkKeyword,180);
        I.click(this.chkKeyword);
    };
    clickOnNextButton() {
        I.click(this.btnNext);
    };
    clickOnFirstPerson() {
        I.click(this.txtFirstPerson);
    };
    clickOnSecondPerson() {
        I.click(this.txtSecondPerson);
    };
    clickOnThirdPerson() {
        I.click(this.txtThirdPerson);
    };
    clickOnRadioButtonFortitle() {
        I.click(this.rdoTitle4o);
    };
}
module.exports = new Article4OPage();