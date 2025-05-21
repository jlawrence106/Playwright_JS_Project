import { test, expect } from '@playwright/test';

class ProductPage{

    constructor (page) {
        this.page = page;
        this.itemname = page.locator('[data-test=inventory-item-name]');
        this.itemdesc = page.locator('[data-test=inventory-item-desc]');
        this.itemprice = page.locator('[data-test=inventory-item-price]');
        this.addtocart = page.locator('#add-to-cart');
        this.remove = page.locator('#remove');
        this.carticon = page.locator('.shopping_cart_link');
        this.cartbadge = page.locator('[data-test=shopping-cart-badge]');

    }

    async validatepageDetails(itemdetails) {
        expect(await this.itemname.textContent()).toBe(itemdetails.name);
       // expect(await this.itemdesc.textContent()).toBe(itemdetails.desc);
        expect(await this.itemprice.textContent()).toBe(itemdetails.price);
        expect(await this.carticon).toBeVisible();

    }

    async addCart () {
        await this.addtocart.click();
        expect(await this.remove).toBeVisible();
    }

    async navigateCart() {
        await this.carticon.click();
        expect(await this.page.locator('[data-test=title]').textContent()).toBe('Your Cart');
    }
}

module.exports = {ProductPage}