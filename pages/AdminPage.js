class AdminPage {

    constructor(page) {

        this.page = page;

        // Buttons
        this.addButton = page.getByRole('button', { name: /Add/ });
        this.saveButton = page.getByRole('button', { name: 'Save' });

        // Dropdowns
        this.userRoleDropdown = page.locator('.oxd-select-text').nth(0);
        this.statusDropdown = page.locator('.oxd-select-text').nth(1);

        // Textboxes
        this.employeeNameTextbox = page.getByPlaceholder('Type for hints...');
        this.usernameTextbox = page.locator('input').nth(2);
        this.passwordTextbox = page.locator('input[type="password"]').nth(0);
        this.confirmPasswordTextbox = page.locator('input[type="password"]').nth(1);

    }

    async clickAddButton() {
        await this.addButton.click();
    }

    async selectUserRole(role) {

        await this.userRoleDropdown.click();

        await this.page.getByRole('option', { name: role }).click();

    }

async enterEmployeeName(employeeName) {

    await this.employeeNameTextbox.click();

    await this.employeeNameTextbox.fill(employeeName);

    await this.page
        .getByRole('option', { name: employeeName })
        .first()
        .click();

}

    async selectStatus(status) {

        await this.statusDropdown.click();

        await this.page.getByRole('option', { name: status }).click();

    }

    async enterUsername(username) {

        await this.usernameTextbox.fill(username);

    }

    async enterPassword(password) {

        await this.passwordTextbox.fill(password);

        await this.confirmPasswordTextbox.fill(password);

    }

async clickSave() {

    await this.saveButton.click();

    // Wait until Save button disappears
    await this.saveButton.waitFor({
        state: 'detached',
        timeout: 10000
    }).catch(() => {});

}

    // Search User
async searchUser(username) {

    await this.page.getByRole('textbox').nth(1).fill(username);

    await this.page.getByRole('button', { name: 'Search' }).click();

}

// Verify User Exists
async verifyUser(username) {

    await this.page.getByRole('cell', { name: username }).waitFor();

}

// Click Edit button of first user in search result
async clickEditButton() {

    await this.page.locator('button i.bi-pencil-fill').first().click();

}

// Update User Role
async updateUserRole(role) {

    await this.userRoleDropdown.click();

    await this.page.getByRole('option', { name: role }).click();

}

// Update Status
async updateStatus(status) {

    await this.statusDropdown.click();

    await this.page.getByRole('option', { name: status }).click();

}

// Update Username
async updateUsername(username) {

    await this.usernameTextbox.fill(username);

}

// Select first searched user
async selectFirstUser() {

    await this.page.locator(
        '.oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon'
    ).first().click();

}

// Click Delete button
async clickDeleteButton() {

    await this.page.getByRole('button')
        .filter({ hasText: /^$/ })
        .nth(5)
        .click();

}

// Confirm Delete
async confirmDelete() {

    await this.page.getByRole('button', { name: /Yes, Delete/ }).click();

    // Wait for the success toast
    await this.page.waitForTimeout(3000);

}

}


module.exports = AdminPage;