const { test } = require('@playwright/test');

test('network Call with Status', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const productName = 'ZARA COAT 3';
    const products = page.locator(".card-body");
    await page.on('response', response => console.log(response.url(), response.status()));
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("rounakagiwal031@gmail.com");
    await page.locator("#userPassword").fill("Pass@1234");
    await page.locator("#login").click();
    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
    const count = await products.count();
    for (let i = 0; i < count; ++i) {
        if (await products.nth(i).locator("b").textContent() === productName) {
            //add to cart
            await products.nth(i).locator("text= Add To Cart").click();
            break;
        }
    }



}

)