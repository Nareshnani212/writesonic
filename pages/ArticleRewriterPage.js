const { I } = inject();
class ArticleRewriterPage {
    //Elements------------------------------------------------
    lblLink = "//input[@class = 'appearance-none block w-full px-3 py-2.5 border placeholder-gray-400 focus:outline-none text-sm rounded-t-lg border-gray-200 focus:ring-1 focus:border-transparent focus:ring-purple-1']";
    tabArticleAndBlog = "//a[text()='Article And Blogs']";
    txtArticleRewriter = "//p[text()='Article Rewriter']";
    btnArticleSave = "//button[@class='group border bg-white rounded-full flex justify-center items-center hover:border-purple-100 h-10 w-10 shadow-unsubscribeSection']";
    btnBackNavigate = "(//button[contains(@class,'group border')])[1]";
    btnForwardNavigate = "//button[starts-with(@class,'group border bg-white rounded-full flex justify-center items-center hover:border-purple-100 w-6 h-6 ')]";
    urlMainContentToggleButton = "//span[starts-with(@class,'w-11 h-6 bg-gray-400 rounded-full peer peer-checked')]";
    lblArticle = "//div[@class='ql-editor ql-blank']";
    //Methods-------------------------------------------------
    setLink(link) {
        I.waitForVisible(this.lblLink, 100);
        I.fillField(this.lblLink, link);
    };
    setArticle(Article) {
      I.waitForVisible(this.lblArticle, 100);
      I.click(this.lblArticle);
      I.fillField(this.lblArticle, Article);
  };
    clickOnArticleRewriterfeature() {
        I.waitForVisible(this.tabArticleAndBlog, 50);
        I.click(this.tabArticleAndBlog);
        I.click(this.txtArticleRewriter);
      };
      clickOnArticleSaveBtn() {
        I.waitForVisible(this.btnArticleSave, 180);
        I.click(this.btnArticleSave);
      };
      clickOnBackNavigateBtn() {
        I.click(this.btnBackNavigate);
      };
      clickOnForwardNavigateBtn() {
        I.click(this.btnForwardNavigate);
      };
      clickOnUrlMainContainToggleBtn() {
        I.click(this.urlMainContentToggleButton);
      };
}
module.exports = new ArticleRewriterPage();