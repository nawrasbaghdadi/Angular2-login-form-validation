import { GreenProjectPage } from './app.po';

describe('green-project App', function() {
  let page: GreenProjectPage;

  beforeEach(() => {
    page = new GreenProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
