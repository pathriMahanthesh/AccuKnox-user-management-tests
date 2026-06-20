const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');

const constants = require('../utils/constants');

test('Login to OrangeHRM successfully', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
        constants.USERNAME,
        constants.PASSWORD
    );

    await expect(page).toHaveURL(/dashboard/);

});