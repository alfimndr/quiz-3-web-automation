import login from "../support/login";

describe('template spec', () => {
  it('passes', () => {
    login.visit();  
    login.openLoginModal();
    login.inputUsername();
    login.inputPassword();
    login.submitLogin();

    cy.url().should('include', '/index.html');
    cy.xpath('//*[@id="nameofuser"]').should('have.text', 'Welcome akuntestdemoblaze@gmail.com');
  })
})