const LoginPage = require('../pages/LoginPage');
const constants = require('./constants');

async function login(page) {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
        constants.USERNAME,
        constants.PASSWORD
    );

}

module.exports = { login };