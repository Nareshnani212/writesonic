const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

const cp = require('child_process');
const clientPlaywrightVersion = cp.execSync('npx playwright --version').toString().trim().split(' ')[1];

const caps = {
  'browser': 'chrome', // allowed browsers are `chrome`, `edge`, `playwright-chromium`, `playwright-firefox` and `playwright-webkit`
  'os': 'osx',
  'os_version': 'catalina',
  'name': 'Codecept test using Playwright',
  'build': 'CodeceptJS on BrowserStack',
  'browserstack.username': process.env.BROWSERSTACK_USERNAME || 'accounts_L3j4sc',
  'browserstack.accessKey': process.env.BROWSERSTACK_ACCESS_KEY || 'sP1rjdeieEGoeXcjrrHL',
  'client.playwrightVersion': clientPlaywrightVersion  // example '1.11.0'
};

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      // url: 'http://localhost',
      show: true,
      browser: 'chromium',
      chromium: {
        browserWSEndpoint: { wsEndpoint: `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(JSON.stringify(caps))}` }
      }
    }
  },
  include: {
    "I": './steps_file.js',
    "loginPage": "../pages/WritesonicLogin.js",
    "testData": "../resources/testdata.js",
    "expectedAssertionsPage": "../resources/expectedassertions.js",
    "article3OPage": "../pages/Article3.OPage.js",
    "article4OPage": "../pages/Article4.OPage.js",
    "AIArticlePage": "../pages/AIArticlePage.js",
    "ChatSonicPage": "../pages/ChatSonicPage.js",
    "SonicEditorPage": "../pages/SonicEditorPage.js",
    "BaseAutomationPage": "../pages/BaseAutomationPage.js",
    "InstantArticleWriterPage": "../pages/InstantArticleWriterPage.js",
    "ArticleRewriterPage": "../pages/ArticleRewriterPage.js",
    "MakeYourOwnAIPage": "../pages/MakeYourOwnAIPage.js",
    "PlansAndBillingPage": "../Pages/PlansAndBillingPage.js"
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    allure: {
      outputDir: "../allure-results",
      enable: true,
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}
