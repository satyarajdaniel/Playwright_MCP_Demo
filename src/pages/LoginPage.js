import { BasePage } from './BasePage.js';

export class LoginPage extends BasePage {
  constructor(page) {
    super(page);

    this.usernameInput = page.getByLabel('Username');
    this.passwordInput = page.getByLabel('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com');
    await this.waitForReady();
    return this;
  }

  async loginAs(user) {
    await this.usernameInput.waitFor({ state: 'visible' });
    await this.usernameInput.fill(user.username);
    await this.passwordInput.waitFor({ state: 'visible' });
    await this.passwordInput.fill(user.password);
    await this.loginButton.waitFor({ state: 'visible' });
    await this.loginButton.click();

    return new (await import('./InventoryPage.js')).InventoryPage(this.page);
  }
}
