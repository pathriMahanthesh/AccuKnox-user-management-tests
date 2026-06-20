const { test, expect } = require('@playwright/test');

const { login } = require('../utils/testHelper');
const DashboardPage = require('../pages/DashboardPage');
const AdminPage = require('../pages/AdminPage');

const userData = require('../test-data/user.json');

test('Delete User', async ({ page }) => {

    // Login
    await login(page);

    // Navigate to Admin
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.navigateToAdmin();

    const adminPage = new AdminPage(page);

    // ---------- Create User ----------

    await adminPage.clickAddButton();

    await adminPage.enterEmployeeName(userData.employeeName);

    await adminPage.selectUserRole(userData.userRole);

    await adminPage.selectStatus(userData.status);

    const username = `automation${Date.now()}`;

    await adminPage.enterUsername(username);

    await adminPage.enterPassword(userData.password);

    await adminPage.clickSave();

    // ---------- Search User ----------

    await adminPage.searchUser(username);

    await adminPage.verifyUser(username);

    // ---------- Delete User ----------

    await adminPage.selectFirstUser();

    await adminPage.clickDeleteButton();

    await adminPage.confirmDelete();

// ---------- Verify Deletion ----------

await page.waitForTimeout(2000);

await adminPage.searchUser(username);

await page.waitForTimeout(3000);

await page.screenshot({ path: 'after-delete-search.png', fullPage: true });

});