describe('Форма логина и пароля', function () {

    it('Правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#form > .header').should('be.visible');
        cy.get('#form > .header').contains('Форма логина');
        cy.get('#forgotEmailButton').should('be.visible');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
        cy.get('#forgotEmailButton').contains('Забыли пароль?');
        cy.get('#loginButton').should('be.visible');
        cy.get('#loginButton').contains('Войти');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    }) 

    it('Забыли пароль', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#form > .header').should('be.visible');
        cy.get('#form > .header').contains('Форма логина');
        cy.get('#loginButton').should('be.visible');
        cy.get('#loginButton').contains('Войти');
        cy.get('#forgotEmailButton').should('be.visible');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
        cy.get('#forgotEmailButton').contains('Забыли пароль?');
        cy.get('#forgotEmailButton').click();
        cy.get('#forgotForm > .header').should('be.visible');
        cy.get('#forgotForm > .header').contains('Восстановите пароль');
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').should('be.visible');
        cy.get('#restoreEmailButton').contains('Отправить код'); 
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Правильный логин и НЕправильный пароль', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#form > .header').should('be.visible');
        cy.get('#form > .header').contains('Форма логина');
        cy.get('#forgotEmailButton').should('be.visible');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
        cy.get('#forgotEmailButton').contains('Забыли пароль?');
        cy.get('#loginButton').should('be.visible');
        cy.get('#loginButton').contains('Войти');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio2');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    }) 

    it('НЕправильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#form > .header').should('be.visible');
        cy.get('#form > .header').contains('Форма логина');
        cy.get('#forgotEmailButton').should('be.visible');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
        cy.get('#forgotEmailButton').contains('Забыли пароль?');
        cy.get('#loginButton').should('be.visible');
        cy.get('#loginButton').contains('Войти');
        cy.get('#mail').type('germann@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    }) 

     it('Логин без @ и правильный пароль', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#form > .header').should('be.visible');
        cy.get('#form > .header').contains('Форма логина');
        cy.get('#forgotEmailButton').should('be.visible');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
        cy.get('#forgotEmailButton').contains('Забыли пароль?');
        cy.get('#loginButton').should('be.visible');
        cy.get('#loginButton').contains('Войти');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    }) 

    it('Заглавные буквы в логине и правильный пароль', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#form > .header').should('be.visible');
        cy.get('#form > .header').contains('Форма логина');
        cy.get('#forgotEmailButton').should('be.visible');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
        cy.get('#forgotEmailButton').contains('Забыли пароль?');
        cy.get('#loginButton').should('be.visible');
        cy.get('#loginButton').contains('Войти');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })        
})

      