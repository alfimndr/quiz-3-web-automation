import userProfile from "../support/userProfile";
import checkout from "../support/checkout";

describe('Checkout', () => {
    it('Checkout Item', () => {
        userProfile.userLogin(); // Perform user login before checkout
        cy.wait(2000); // Wait for 2 seconds to ensure the login process is complete
        checkout.checkoutItem('Samsung galaxy s6'); // Proceed to checkout the item 'Samsung galaxy s6'
    })
    
    it('Checkout Item by Category', () => {
        userProfile.userLogin(); // Perform user login before searching for item by category
        cy.wait(2000); // Wait for 2 seconds to ensure the login process is complete
        checkout.checkoutByCategory('Phones', 'Samsung galaxy s6'); // Proceed to checkout the item 'Samsung galaxy s6' under 'Phones' category
    })

    it('Remove item from cart', () => {
        userProfile.userLogin(); // Perform user login before removing item from cart
        cy.wait(2000); // Wait for 2 seconds to ensure the login process is complete
        checkout.removeItemFromCart(); // Remove the item from the cart
    })

    it('Place order', () => {
        userProfile.userLogin(); // Perform user login before placing order
        cy.wait(2000); // Wait for 2 seconds to ensure the login process is complete
        checkout.placeOrder(); // Place the order
    })
})