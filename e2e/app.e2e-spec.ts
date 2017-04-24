import { UthlidPage } from './app.po';

describe('uthlid App', function() {
  let page: UthlidPage;

  beforeEach(() => {
    page = new UthlidPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
