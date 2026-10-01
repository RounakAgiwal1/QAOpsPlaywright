const { test } = require('@playwright/test');

test('@web Window Handle', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    // 1️⃣ Open first tab
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    // 2️⃣ Open second tab
    const [newpage2] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator("#opentab").click()
    ]);

    // 3️⃣ Work on second tab
    console.log(
        await newpage2.locator("header .mt-3").textContent()
    );

    // 4️⃣ Come back to first tab
    await page.bringToFront();

    // 5️⃣ Scroll first page
    await page.mouse.wheel(0, 500);

    // 6️⃣ Scroll table
    const table = page.locator(".tableFixHead");

    await table.evaluate(element => {
        element.scrollBy(0, 500);
    });
});