const I = actor();

export default loginPage = {
    email: 'form[data-qa="login-form"] input[type="email"]',
    password: 'form[data-qa="login-form"] input[type="password"]',
    loginButton: 'form[data-qa="login-form"] button[type="submit"]',
    errorMessage: 'span[data-qa="user-form-message-error"]',
    emptyFieldError: 'div[class="input__error"]',

    login(creds) {
        I.fillField(this.email, creds.email);
        I.fillField(this.password, creds.password);
        I.click(this.loginButton);
        I.wait(2);
    }
}