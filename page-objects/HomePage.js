import { Page } from "@playwright/test"; 
import { test, expect } from '@playwright/test';


class HomePage
{
    constructor(page)
    {

        this.menu = page.locator('[class=bm-item-list] a');
        this.products = page.locator('[class=inventory_list]  [class=inventory_item]');

    }

async menuValidate(menuitemsArr) {

        const itemcount = await this.menu.count();
        const allitems = await this.menu.allInnerTexts();
        console.log(`element lenght ${allitems}`);
        expect(itemcount).toBe(menuitemsArr.length);
        for (let i = 0; i < itemcount; i++) {
            expect(allitems[i]).toBe(menuitemsArr[i].name);
        }
}

async productValidate(productitemsArr) {
    
        const itemcount = await this.products.count();
        console.log(`products ${itemcount}`);
        //const eleval = await this.products.locator('.inventory_item_name').nth(1).textContent();
       // console.log(`products ${eleval}`);
        expect(itemcount).toBe(productitemsArr.length);
        for (let i = 0; i < itemcount; i++) {
           
           expect (await this.products.locator('.inventory_item_name').nth(i).textContent()).toBe(productitemsArr[i].productname);
           //console.log(`products ${eleval}`);
          // expect (await this.products.nth(i).locator('[class=inventory_item_name')).toHaveText(productitemsArr[i].productname);

        }

    
    }
}



module.exports = {HomePage}