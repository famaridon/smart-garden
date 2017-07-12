import { SmartGardenNgPage } from './app.po';

describe('smart-garden-ng App', () => {
  let page: SmartGardenNgPage;

  beforeEach(() => {
    page = new SmartGardenNgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
