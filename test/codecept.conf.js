const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './allure-report',
  helpers: {
    Playwright: {
      url: 'https://www.google.com/',
      show: true,
      browser: 'chromium',
       video: 'keepVideoForPassedTests',
       video: 'enables video recording for failed tests',
       video: 'recordVideo',
    }
  },
  include: {
    "I": "../steps_file.js",
    "loginPage": "../pages/WritesonicLogin.js",
    "testDataPage": "../resources/testdata.js",
    "expectedAssertionsPage": "../resources/expectedassertions.js",
    "article3OPage": "../pages/Article3.OPage.js",
    "article4OPage": "../pages/Article4.OPage.js",
    "AIArticlePage": "../pages/AIArticlePage.js",
    "ChatSonicPage": "../pages/ChatSonicPage.js",
  
  },
  name: 'writesonic_POM',
  plugins: {
    allure: {
      enable: true,
    }
  }
}