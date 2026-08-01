import { BasePage } from './BasePage.js';

export class InventoryPage extends BasePage {
  constructor(page) {
    super(page);

    this.productsHeading = page.getByRole('heading', { name: 'Products' });
  }
}
