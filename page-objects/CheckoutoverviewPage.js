import { Page } from "@playwright/test"; 
import { test, expect } from '@playwright/test';

class CheckoutoverviewPage {

    constructor (page) {

        this.page = page;
        this.qty = page.locator('[data-test=item-quantity]');
        this.itemname = page.locator('[data-test=inventory-item-name]');
        this.itemdesc = page.locator('[data-test=inventory-item-desc]');
        this.price = page.locator('[data-test=inventory-item-price]');
        this.itemtotal = page.locator('[data-test=subtotal-label]');
        this.tax = page.locator('[data-test=tax-label]');
        this.total = page.locator('[data-test="total-label"]');
        this.finish = page.locator('#finish');
    }

    async completeorder () {
        await this.finish.click();
        expect(await this.page.getByText('Thank you for your order!')).toBeVisible();

    }

}

module.exports = {CheckoutoverviewPage};