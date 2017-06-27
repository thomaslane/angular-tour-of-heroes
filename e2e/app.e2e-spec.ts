import { BasicAngularPage } from './app.po';

describe('basic-angular App', () => {
  let page: BasicAngularPage;

  beforeEach(() => {
    page = new BasicAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
