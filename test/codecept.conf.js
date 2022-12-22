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
  output: '../output',
  helpers: {
    Playwright: {
      url: 'https://www.google.com/',
      show: true,
      browser: 'chromium',
    

    }
  },
  include: {
    "I": "../steps_file.js",
    "loginPage": "../pages/WritesonicLogin.js",
    "testDataPage": "../resources/testdata.js",
    "expectedAssertionsPage": "../resources/expectedassertions.js",
    "article3OPage": "../pages/Article3.OPage.js",
    "article4OPage": "../pages/Article4.OPage.js",
    "AIArticlePage": "../pages/AIArticlePage.js"
  },
  name: 'writesonic_POM',
  plugins: {
    allure: {
      enable: true
    }
  }
}