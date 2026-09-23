const { test, expect } = require('@playwright/test');
const { customtest } = require("../utils/Fixture.js");

customtest('Fixture test', async ({ authenticatePage }) => {
    await authenticatePage.goto("https://rahulshettyacademy.com/client");
});
