const { test, expect } = require('@playwright/test');

test('Pop-up and Frame', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.mouse.wheel(0, 500);
    /*await page.evaluate(() => {

        window.scrollBy(0, 500);
    });*/
    await page.getByPlaceholder("Hide/Show Example").isVisible();
    await page.locator("input[value=Hide]").click();
    await expect(page.getByPlaceholder("Hide/Show Example")).toBeHidden();
    await page.getByPlaceholder("Hide/Show Example").isHidden();
    await page.mouse.wheel(0, -500);
    await page.getByPlaceholder("Enter Your Name").fill("Rounak Agiwal");
    await page.locator("input[value='Alert']").click();
    console.log(await page.on('dialog', dialog => dialog.message));
}

)