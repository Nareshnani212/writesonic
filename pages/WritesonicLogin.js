const { I, expectedAssertionsPage, testDataPage } = inject();
class loginPage {
  //Elements---------------------------

  txtEmail = "//input[@id='email']";
  txtPassword = "//input[@id='password']";
  btnSignIn = "//a[@class='link template-button']";
  btnLogin = "//button[@type='submit']";
  veryMyAccount = "//h1[text()='Library']";
  iframeGoogle = "//iframe[@title='Sign in with Google Button']";
  btnGoogle = { xpath: "//div[@class='nsm7Bb-HzV7m-LgbsSe-bN97Pc-sM5MNb ']/span[@class='nsm7Bb-HzV7m-LgbsSe-BPrWId']" };
  txtGmail = "//input[@type='email']";
  btnNext = "//span[text()='Next']";
  txtGmailPassword = "//input[@name='Passwd']";
  btnContinueWuthEmail = "//div[@class='flex justify-center items-center']";
  lblcode = "//input[@id='code']";
  btnVerify = "//div[text()='Verify']";
  //Method-------------------------------
  clickOnSignInTab() {
    I.waitForVisible(this.btnSignIn, 10);
    I.click(this.btnSignIn);
  };
  setEmail(email) {
    I.fillField(this.txtEmail, email);
  };
  setPassword(password) {
    I.fillField(this.txtPassword, password);
  };
  setCode(code) {
    I.fillField(this.lblcode, code)
  };
  clickOnVerify() {
    I.click(this.btnVerify);
  };
  clickOnBtnSignIn() {
    I.click(this.btnLogin);
  };
  clickOnContinueEmailButton() {
    I.click(this.btnContinueWuthEmail);
  };
  loginWithGoogleAccount(email, password) {
    I.see(expectedAssertionsPage.login.loginPage);
    I.switchTo(this.iframeGoogle);
    I.waitForVisible(this.btnGoogle, 20);
    I.click(this.btnGoogle);
    I.switchToNextTab();
    I.wait(3);
    I.see(expectedAssertionsPage.login.googleLogin);
    I.fillField(this.txtGmail, email)
    I.click(this.btnNext);
    I.see(testDataPage.login.email);
    I.waitForVisible(this.txtGmailPassword, 10);
    I.fillField(this.txtGmailPassword, password)
    I.click(this.btnNext);
    I.switchToPreviousTab();
    I.wait(5);
    I.waitForVisible(this.veryMyAccount,100);
    //I.see(expectedAssertionsPage.login.myAccount);
  };
}
module.exports = new loginPage();