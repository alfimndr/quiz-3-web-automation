import userProfile from "../support/userProfile";

describe ('About Us', () => {
    it('Open About Us without Login', () => {
        cy.visit('https://www.demoblaze.com/index.html');
        cy.xpath('//*[@id="navbarExample"]/ul/li[3]/a').click();
        cy.xpath('//*[@id="videoModal"]/div/div').within(() => {
            cy.xpath('//*[@id="example-video"]/button').click();
        });
    })
    it('Open About Us with Login', () => {
        userProfile.userLogin();
        cy.wait(1000);
        cy.xpath('//*[@id="navbarExample"]/ul/li[3]/a').click();
        cy.xpath('//*[@id="videoModal"]/div/div').within(() => {
            cy.xpath('//*[@id="example-video"]/button').click();
        });
    })
})