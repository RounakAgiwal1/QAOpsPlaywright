const { test, expect } = require('@playwright/test');

// const { LoginPage } = require('../pageobjects/LoginPage');
// const { DashboardPage } = require('../pageobjects/DashboardPage');
const { POManager } = require('../pageobjects/POManager');
const dataset = JSON.parse(JSON.stringify(require('../utils/EcomPOMTestData.json')));

for (const data of dataset)

    test(`Ecom ${data.productName}`, async ({ page }) => {

        const poManager = new POManager(page);

        // const loginPage = new LoginPage(page);
        const loginPage = poManager.getLoginPage();
        await loginPage.goTo();
        await loginPage.validLogin(data.username, data.password);

        //  const dashboardPage = new DashboardPage(page);

        const dashboardPage = poManager.getDashboardPage();

        dashboardPage.searchProductAddCart(data.productName);
        dashboardPage.navigateToCart();

        await page.locator("div li").first().waitFor();

    });