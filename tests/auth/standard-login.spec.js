import { test, expect } from '../../src/fixtures/base.js';
import { LoginPage } from '../../src/pages/LoginPage.js';
import users from '../data/users.json';

test.describe('Authentication', () => {
  test('standard user can log in successfully @smoke @critical', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    const inventoryPage = await loginPage.loginAs(users.standard);

    await expect(page).toHaveURL(/inventory/);
    await expect(inventoryPage.productsHeading).toBeVisible();
  });
});
