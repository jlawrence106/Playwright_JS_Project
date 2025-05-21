import { test, expect } from '@playwright/test';
import {LoginPage} from '../page-objects/LoginPage';
import {HomePage} from '../page-objects/HomePage';
import {ProductPage} from '../page-objects/ProductPage';
import {YourcartPage} from '../page-objects/YourcartPage';

//Import Data
const envdetails = JSON.parse(JSON.stringify(require("../data-json/env-config.json")));
const menuItems = JSON.parse(JSON.stringify(require("../data-json/menu-item.json")));
const homeproductItems = JSON.parse(JSON.stringify(require("../data-json/home-products.json")));


test.describe('JIRA01 - Saucetest Smoke Test Validations', () => {


test.beforeEach(async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  await page.goto(envdetails.url);
  const loginObj = new LoginPage(page);
  await loginObj.login(envdetails.username, envdetails.password);  
});

test.skip('TEST01 - Validate Menu Items', async ({ page }) => {
  const homepageObj = new HomePage(page);
  await homepageObj.menuValidate(menuItems);
});

test.skip('TEST02 - Validate Product Items', async ({ page }) => {
 const homepageObj = new HomePage(page);
 await homepageObj.productValidate(homeproductItems);
});

test('TEST03 - Validate Product Pages', async ({ page }) => {
  
  const itemdetails = {
    "name": "Sauce Labs Backpack",
    "price": "$29.99",
    "desc": "New York"
  };
  //Home Page
  const homepageObj = new HomePage(page);
  await homepageObj.openProduct('Sauce Labs Backpack');

  //Product Page
  const productpageObj = new ProductPage(page);
  await productpageObj.validatepageDetails(itemdetails);
  await productpageObj.addtocart;
  await productpageObj.navigatetoCart;

  //Your Cart Page
  const yourcartObj = new ProductPage(page);
  await yourcartObj.checkout;

  
});

test.skip('TEST04 - End-to-end Checkout Single Item', async ({ page }) => {
  console.log(`Running ${test.info().title}`);
});

test.skip('TEST05 - End-to-end Checkout Multiple Item', async ({ page }) => {
  console.log(`Running ${test.info().title}`);
});

});
