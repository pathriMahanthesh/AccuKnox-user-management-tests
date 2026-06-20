const { test, expect } = require('@playwright/test');

const { login } = require('../utils/testHelper');
const DashboardPage = require('../pages/DashboardPage');
const AdminPage = require('../pages/AdminPage');

const userData = require('../test-data/user.json');

test('Add New User', async ({ page }) => {

    // Login
    await login(page);

    // Navigate to Admin
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.navigateToAdmin();

    // Admin Page
    const adminPage = new AdminPage(page);

    // Click Add
    await adminPage.clickAddButton();

    // Fill User Details
await adminPage.enterEmployeeName(userData.employeeName);

await adminPage.selectUserRole(userData.userRole);

await adminPage.selectStatus(userData.status);

    const username = `automation${Date.now()}`;

    await adminPage.enterUsername(username);

    await adminPage.enterPassword(userData.password);

    // Save User
    await adminPage.clickSave();

});