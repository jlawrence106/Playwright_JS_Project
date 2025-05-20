class ProductPage{

    constructor (page) {

        this.itemname = page.locator('[data-test=inventory-item-name]');
        this.itemdesc = page.locator('[data-test=inventory-item-desc]');
        this.itemprice = page.locator('[inventory-item-price]');
        this.addtocart = page.locator('#add-to-cart');
        this.remove = page.locator('#remove');
        this.carticon = page.locator('#.shopping_cart_badge');

    }

    async validatepageDetails() {

    }

    async addtocart() {

    }

    async navigatetoCart() {

    }
}

module.exports = {ProductPage}