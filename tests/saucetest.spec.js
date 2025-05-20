import { test, expect } from '@playwright/test';
import {LoginPage} from '../page-objects/LoginPage';
import {HomePage} from '../page-objects/HomePage';

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
  const homepageObj = new HomePage(page);
  await homepageObj.addtoCart('Sauce Labs Backpack');
});

test.skip('TEST04 - Checkout Single Item', async ({ page }) => {
  console.log(`Running ${test.info().title}`);
});

test.skip('TEST05 - Checkout Multiple Item', async ({ page }) => {
  console.log(`Running ${test.info().title}`);
});

});
