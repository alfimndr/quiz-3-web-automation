class userProfile {
    userLogin() {
        cy.visit('https://demoblaze.com/index.html');
        cy.xpath('//*[@id="login2"]').click();
        cy.xpath('//*[@id="loginusername"]').invoke('val', 'akuntestdemoblaze@gmail.com');
        cy.xpath('//*[@id="loginpassword"]').invoke('val', 'Akuntest1st!');
        cy.xpath('//*[@id="logInModal"]/div/div/div[3]/button[2]').click();
    }
}
module.exports = new userProfile;