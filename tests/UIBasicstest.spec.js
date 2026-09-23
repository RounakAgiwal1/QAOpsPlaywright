const { test } = require('@playwright/test');

test('Browser playwright test', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractice/");

});

test('Page playwright test', async ({ page }) => {

    await page.goto("https://google.com");

});



