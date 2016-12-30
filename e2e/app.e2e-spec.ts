import { ResPage } from './app.po';

describe('res App', function() {
  let page: ResPage;

  beforeEach(() => {
    page = new ResPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
