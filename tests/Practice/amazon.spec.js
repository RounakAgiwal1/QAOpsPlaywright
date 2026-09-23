const { test, expect } = require('@playwright/test');

test.only('amazon product', async ({ page }) => {

    await page.goto("https://www.amazon.in/?&linkCode=sl2&tag=kcsgroup0a-21&linkId=f330b257f2f5391201c6168c81c9950a&language=en_IN&ref_=as_li_ss_tl");

    await page.getByPlaceholder("Search Amazon.in").pressSequentially("Pen Drive");

    await page.locator("input#nav-search-submit-button").click();

    //const products= await page.locator(".atJtCj").allTextContents();
    // console.log(products);

   const product = page.locator("div.puisg-col-inner").filter({
        hasText: "SanDisk Mobile Pen Drive Luxe 128GB, USB Type A & USB C Connector, Up to 400MB/s R, Silver"
    });

    await product.getByRole("button", { name: "Add to cart" }).click();
    await page.locator("#nav-cart").click();
    console.log(await page.locator(".a-truncate-cut").textContent());

    await page.pause();

});
