const { I } = inject();
class InstantArticleWriterPage {
    //Elements--------------------------------------------
    lblTitle = "//input[@placeholder='Artificial Intelligence in Copywriting']";
    tabArticleAndBlog = "//a[text()='Article And Blogs']";
    txtInstantArticleWriter = "//p[text()='Instant Article Writer']";

    //Methods----------------------------------------------
    setTitle(title){
        I.fillField(this.lblTitle, title)
    };
    clickOnInstantArticleWriterfeature() {
        I.waitForVisible(this.tabArticleAndBlog, 50);
        I.click(this.tabArticleAndBlog);
        I.click(this.txtInstantArticleWriter);
      };
}
module.exports = new InstantArticleWriterPage();