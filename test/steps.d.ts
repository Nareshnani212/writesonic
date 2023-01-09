/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type loginPage = typeof import('../pages/WritesonicLogin.js');
type testData = typeof import('../resources/testdata.js');
type expectedAssertionsPage = typeof import('../resources/expectedassertions.js');
type article3OPage = typeof import('../pages/Article3.OPage.js');
type article4OPage = typeof import('../pages/Article4.OPage.js');
type AIArticlePage = typeof import('../pages/AIArticlePage.js');
type ChatSonicPage = typeof import('../pages/ChatSonicPage.js');
type SonicEditorPage = typeof import('../pages/SonicEditorPage.js');
type BaseAutomationPage = typeof import('../pages/BaseAutomationPage.js');
type ArticleRewriterPage = typeof import('../pages/ArticleRewriterPage.js');
type InstantArticleWriterPage = typeof import('../pages/InstantArticleWriterPage.js');
type MakeYourOwnAIPage = typeof import('../pages/MakeYourOwnAIPage.js');
type PlansAndBillingPage = typeof import('../pages/PlansAndBillingPage.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginPage: loginPage, testData: testData, expectedAssertionsPage: expectedAssertionsPage, article3OPage: article3OPage, article4OPage: article4OPage,
    AIArticlePage: AIArticlePage,ChatSonicPage:ChatSonicPage, SonicEditorPage:SonicEditorPage,BaseAutomationPage:BaseAutomationPage, ArticleRewriterPage: ArticleRewriterPage, InstantArticleWriterPage: InstantArticleWriterPage,
    MakeYourOwnAIPage: MakeYourOwnAIPage, PlansAndBillingPage:PlansAndBillingPage}
  interface Methods extends Playwright { }
  interface I extends ReturnType<steps_file> { }
  namespace Translation {
    interface Actions { }
  }
}
