const { I } = inject();
class  MakeYourOwnAIPage{
  //Elements--------------------------------------------------------------------------

  tabOthers = "//a[text()='Other']";
  tabArticleAndBlog = "//a[text()='Article And Blogs']";
  txtMakeYourOwnAI = "//p[text()='Make your own AI']";
  lblinstructions = "//textarea[@placeholder='Write a funny story about a day in the life of Optimus.']";
  lblContext = "//textarea[@class='autosizeArea appearance-none block w-full px-3 py-2 border placeholder-gray-400 focus:outline-none text-sm rounded-lg border-gray-200 focus:ring-1 focus:border-transparent focus:ring-purple-1']";

  //Methods----------------------------------------------------------------------------------

  clickOnMakeYourOwnAIfeature() {
    I.waitForVisible(this.tabArticleAndBlog, 180);
    I.click(this.tabOthers);
    I.click(this.txtMakeYourOwnAI);
  };
  setInstructions(instruction){
    I.fillField(this.lblinstructions, instruction);
  };
  setContext(context){
    I.fillField(this.lblContext, context);
  };
}
module.exports = new MakeYourOwnAIPage();