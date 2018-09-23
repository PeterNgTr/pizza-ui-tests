import {expect} from 'chai';

Feature('Login functionality');

Before((I) => {
    I.amOnPage('/');
});

Scenario('Login with valid creds', async (I, homePage, loginPage, data) => {
    I.click(homePage.loginButton);
    loginPage.login(data.credentials);
    I.dontSeeElement(homePage.loginButton);
});

Scenario('Login with invalid email', async (I, homePage, loginPage, data) => {
    I.click(homePage.loginButton);
    loginPage.login(data.invalid_email);
    I.seeElement(loginPage.errorMessage);
});

Scenario('Login with invalid password', async (I, homePage, loginPage, data) => {
    I.click(homePage.loginButton);
    loginPage.login(data.invalid_password);
    I.seeElement(loginPage.errorMessage);
});

Scenario('Login with blank email', async (I, homePage, loginPage, data) => {
    I.click(homePage.loginButton);
    loginPage.login(data.blank_email);
    I.seeElement(loginPage.emptyFieldError);
});

Scenario('Login with blank password', async (I, homePage, loginPage, data) => {
    I.click(homePage.loginButton);
    loginPage.login(data.blank_password);
    I.seeElement(loginPage.emptyFieldError);
});