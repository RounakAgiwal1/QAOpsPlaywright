// Authore: Your Name
const { test, expect } = require('@playwright/test');
const { count } = require('node:console');
const { promises } = require('node:dns');
const { text } = require('node:stream/consumers');

test('Flipkart Order', async ({ browser }) => {

     const context = await browser.newContext();
     const page = await context.newPage();
     await page.goto("https://www.flipkart.com/");
     await page.locator(".b3wTlE").click();
     await page.getByPlaceholder("Search for Products, Brands and More").first()
          .fill("Mens shirts");
     await page.locator("[type='submit']").click();

     await page.locator(".p0C73x .atJtCj").first().waitFor();

     const products = await page.locator(".p0C73x .atJtCj");
     console.log(await products.count());

     const [newpage] = await Promise.all([

          context.waitForEvent('page'),
          await products.filter({ hasText: "Men Regular Fit Solid Button Down Collar Formal Shirt" }).click(),
     ]);

     await expect(newpage.locator("h1.v1zwn21n.v1zwn27._1psv1zeb9._1psv1ze0")).toHaveText('VeBNoR Men Regular Fit Solid Button Down Collar Formal Shirt');


     // await newpage.locator("div .css-146c3p1.r-dnmrzs.r-1udh08x.r-1udbk01.r-3s2u2q.r-1iln25a").click();
     // await newpage.getByRole("button", { name: 'Add to cart' }).first().waitFor();
     // await newpage.getByRole("button", { name: 'Add to cart' }).click();


     // newpage.locator(".css-g5y9jx.r-1udh08x.r-18u37iz.r-1777fci").click();
     // const Products = page
     //  .locator("[title='Men Regular Fit Solid Spread Collar Casual Shirt']");
     //const product = page.getByTitle
     //   ("Men Regular Fit Self Design Spread Collar Formal Shirt");

     await page.pause();

});

test.only('Dynamic Dropdown', async ({ page }) => {
     await page.goto("https://www.flipkart.com/").waitFor();
     await page.locator(".b3wTlE").click();
     await page.locator(".nw1UBF.v1zwn26").first().pressSequentially("watch");
     const dropdown = await page.locator(".VCplLH.lTpUwR");
     await dropdown.waitFor();
     const optionscount = await dropdown.locator("li").count();
     for (let i = 0; i < optionscount; i++) {

          const text = await dropdown.locator("li").nth(i).textContent();
          //if(text.includes("boys"))
          if (text === "watch for boys") {
               await dropdown.locator("li").nth(i).click();
               break;
          }
     }

});


