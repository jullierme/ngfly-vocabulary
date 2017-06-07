import { NgflyVocabularyPage } from './app.po';

describe('ngfly-vocabulary App', () => {
  let page: NgflyVocabularyPage;

  beforeEach(() => {
    page = new NgflyVocabularyPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
