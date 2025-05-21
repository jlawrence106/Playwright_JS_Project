import { Page } from "@playwright/test"; 
import { test, expect } from '@playwright/test';

class CheckoutinfoPage{

    constructor(page) {
        this.page = page;
        this.qty
        this.itemname
        this.itemdesc
        this.itemprice
        this.checkoutBtn
    }
}

module.exports = {HomePage}