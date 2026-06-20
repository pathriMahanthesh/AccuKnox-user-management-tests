const { test, expect } = require('@playwright/test');

const { login } = require('../utils/testHelper');
const DashboardPage = require('../pages/DashboardPage');

test('Navigate to Admin Module', async ({ page }) => {

    await login(page);

    const dashboardPage = new DashboardPage(page);
    await dashboardPage.navigateToAdmin();

    await expect(
        page.getByRole('heading', { name: 'System Users' })
    ).toBeVisible();

});