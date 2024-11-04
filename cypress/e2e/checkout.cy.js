import userProfile from "../support/userProfile";

describe('Checkout', () => {
    it('passes', () => {
        userProfile.userLogin();
        cy.wait(2000);
        cy.xpath('//*[@id="tbodyid"]/div[1]/div/div/h4/a').click();
        cy.xpath('//*[@id="tbodyid"]/div[2]/div/a').click();
        cy.xpath('//*[@id="cartur"]').click();

        cy.xpath('//*[@id="tbodyid"]/tr[1]/td[2]').should('have.text', 'Samsung galaxy s6');
    })
})