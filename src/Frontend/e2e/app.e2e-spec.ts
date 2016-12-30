import { BedMatressWebsitePage } from './app.po';

describe('bed-matress-website App', function() {
  let page: BedMatressWebsitePage;

  beforeEach(() => {
    page = new BedMatressWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
