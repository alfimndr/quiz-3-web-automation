import userProfile from "../support/userProfile";

describe ('Contact', () => {
    it('Send Message without Login', () => {
        cy.visit('https://www.demoblaze.com/index.html');
        cy.xpath('//*[@id="navbarExample"]/ul/li[2]/a').click();
        cy.wait(1000);
        cy.xpath('//*[@id="recipient-email"]').invoke('val', 'test@test.com');
        cy.xpath('//*[@id="recipient-name"]').invoke('val', 'Test User');
        cy.xpath('//*[@id="message-text"]').invoke('val', 'This is a test message');
        cy.xpath('//*[@id="exampleModal"]/div/div/div[3]/button[2]').click(); //click send message button
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Thanks for the message!!');
        });
    })
    it('Send Message with Login', () => {
        userProfile.userLogin();
        cy.wait(1000);
        cy.xpath('//*[@id="navbarExample"]/ul/li[2]/a').click();
        cy.xpath('//*[@id="recipient-email"]').invoke('val', 'test@test.com');
        cy.xpath('//*[@id="recipient-name"]').invoke('val', 'Test User');
        cy.xpath('//*[@id="message-text"]').invoke('val', 'This is a test message');
        cy.xpath('//*[@id="exampleModal"]/div/div/div[3]/button[2]').click();
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Thanks for the message!!');
        });
    })
})