const { I } = inject();
class Article3OPage {
  //Elements--------------------------------------------------------------------------

  tabArticleAndBlog = "//a[text()='Article And Blogs']";
  tabArticle3O = "//p[text()='AI Article Writer 3.0']";
  txtQualityType = "//input[@class='capitalize pl-3  bg-white border border-gray-200 rounded-lg pr-10 w-full py-2 focus:border-indigo-500 focus:outline-none focus:ring-0.5 focus:ring-purple-1 text-sm']";
  txtEconomy = "//span[text()='economy']";
  txtLanguage = "//input[@class='pl-10 bg-white border border-gray-200 rounded-lg pr-10 w-full py-2 focus:border-indigo-500 focus:outline-none focus:ring-0.5 focus:ring-purple-1 text-sm']";
  txtEnglish = "//span[text()='English']";
  rdoTitle = "//span[@class='rounded-full w-3 h-3 bg-white']";

  //Methods----------------------------------------------------------------------------------

  clickOnArticle3Ofeature() {
    I.waitForVisible(this.tabArticleAndBlog, 50);
    I.click(this.tabArticleAndBlog);
    I.click(this.tabArticle3O);
  };

  setQualityTypeAsEconomy(economy) {
    I.fillField(this.txtQualityType, economy);
    I.click(this.txtEconomy);
  };
  setLanguageAsEnglish(english) {
    I.fillField(this.txtLanguage, english);
    I.click(this.txtEnglish);
  };

  clickOnRadioBtn() {
    I.click(this.rdoTitle);
  };
}
module.exports = new Article3OPage();