import { UnknownTitlePage } from './app.po';

describe('unknown-title App', () => {
  let page: UnknownTitlePage;

  beforeEach(() => {
    page = new UnknownTitlePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
