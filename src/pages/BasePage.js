export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async waitForReady() {
    await this.page.waitForLoadState('domcontentloaded');
  }
}