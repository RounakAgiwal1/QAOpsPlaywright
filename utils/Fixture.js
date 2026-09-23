const base = require("@playwright/test");

exports.customtest = base.test.extend({
    authenticatePage: async ({ browser }, use) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://rahulshettyacademy.com/client");
        await page.locator("#userEmail").fill("anshika@gmail.com");
        await page.locator("#userPassword").fill("Iamking@000");
        await page.locator("[value='Login']").click();
        await page.locator(".card-body b").first().waitFor();
        await use(page);
    }
}
)
