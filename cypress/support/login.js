class login {
    visit() {
        cy.visit('https://demoblaze.com/index.html');
        cy.url().should('include', '/index.html');
        cy.xpath('//*[@id="navbarExample"]/ul/li[2]/a').should('have.text', 'Contact');
    }

    openLoginModal() {
        cy.xpath('//*[@id="login2"]').click();
    }

    inputUsername() {
        cy.xpath('//*[@id="loginusername"]').invoke('val', 'akuntestdemoblaze@gmail.com');
    }

    inputPassword() {
        cy.xpath('//*[@id="loginpassword"]').invoke('val', 'Akuntest1st!');
    }

    submitLogin() {
        cy.xpath('//*[@id="logInModal"]/div/div/div[3]/button[2]').click();
    }
}
module.exports = new login;