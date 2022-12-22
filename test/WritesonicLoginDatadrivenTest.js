Feature('logintest of writesonic');

let accounts = new DataTable(['email', 'password']);
accounts.add(['arun.akenapelli@b2btesters.com', 'Arun@1111']);
accounts.add(['naresh@gmail.com', 'naresh123']);
accounts.add(['admin', '123456']);
accounts.add(['arun@gmail.com', 'arun1234']);

Data(accounts).only.Scenario('verify writesonic Login Functionality',  ({ I,current, loginpagePage, testDataPage, expectedAssertionsPage }) => {
   
    I.amOnPage(testDataPage.login.loginUrl);
    I.waitForClickable(loginpagePage.set.txtEmail, 10);
    I.fillField(loginpagePage.set.txtEmail, current.email);
    I.fillField(loginpagePage.set.txtPassword, current.password);
    I.click(loginpagePage.btnLogin);
    I.waitForText(expectedAssertionsPage.login.myAccount, 15);
    I.see(expectedAssertionsPage.login.myAccount);
    I.wait(3);
    
});
