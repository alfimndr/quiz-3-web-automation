class checkout {
    checkoutItem(item) {
        cy.url().then((url) => {
            if (url !== 'https://demoblaze.com/index.html') {
                cy.visit('https://demoblaze.com/index.html');
            }
        });
        cy.contains(item).click();
        cy.xpath('//*[@id="tbodyid"]/div[2]/div/a').click();
        cy.xpath('//*[@id="cartur"]').click();
        cy.xpath('//*[@id="tbodyid"]/tr[1]/td[2]').should('have.text', item);
    }

    checkoutByCategory(category, item) {
        cy.url().then((url) => {
            if (url !== 'https://demoblaze.com/index.html') {
                cy.visit('https://demoblaze.com/index.html');
            }
        });
        cy.contains(category).click();
        cy.contains(item).click();
        cy.xpath('//*[@id="tbodyid"]/div[2]/div/a').click();
        cy.xpath('//*[@id="cartur"]').click();
        cy.xpath('//*[@id="tbodyid"]/tr[1]/td[2]').should('have.text', item);
    }

    removeItemFromCart() {
        cy.xpath('//*[@id="cartur"]').click();
        cy.xpath('//*[@id="tbodyid"]/tr/td[4]/a').click({ multiple: true });
    }

    placeOrder() {
        cy.xpath('//*[@id="cartur"]').click();
        cy.xpath('//*[@id="page-wrapper"]/div/div[2]/button').click();
        cy.xpath('//*[@id="name"]').invoke('val', 'John Doe');
        cy.xpath('//*[@id="country"]').invoke('val', 'Indonesia');
        cy.xpath('//*[@id="city"]').invoke('val', 'Jakarta');
        cy.xpath('//*[@id="card"]').invoke('val', '1234567890');
        cy.xpath('//*[@id="month"]').invoke('val', '12');
        cy.xpath('//*[@id="year"]').invoke('val', '2024');
        cy.xpath('//*[@id="orderModal"]/div/div/div[3]/button[2]').click();
        cy.xpath('/html/body/div[10]/div[7]/div/button').should('have.text', 'OK').click();
    }
}

module.exports = new checkout();