import HomePage from '../pageElements/HomePage';
import Cart from '../pageElements/Cart';
import Checkout from '../pageElements/Checkout';


describe("Login Functionality", () => {
  beforeEach(() => {                                  // Logs in using credentials from environment variables
    cy.Login(Cypress.env("username"), Cypress.env("password")); 
    cy.visit('/')
  });


    it("should display store excellence", () => {
      
      HomePage.elements.storeExclence().should("be.visible");
    });

//Selecting items and adding them to cart
 

    it("should add item to cart", () => {      
      Cart.selectProduct('Medusa T-Shirt');
      Cart.selectSize();
      Cart.selectColour();
      Cart.addToCart();
      Cart.goToCart();
      
    });


    //completing the checkout


    it("should complete checkout process", () => {           
      cy.getByTestId('nav-cart-link').click(); 
      cy.visit('/cart');
      cy.getByTestId('checkout-button').should('have.text', 'Go to checkout').click();
      //cy.getByTestId('edit-address-button').click();
      Checkout.elements.shippingFirstNameInput().type('Lion');
      Checkout.elements.shippingLastNameInput().type('King');
      Checkout.elements.shippingAddressInput().type('Main Street');
      Checkout.elements.shippingPostalCodeInput().type('LV-1007');
      Checkout.elements.shippingCityInput().type('LA');
      Checkout.elements.shippingCountrySelect().select('United States');
      Checkout.elements.submitAddressButton().click();
      cy.getByTestId('delivery-option-radio').contains('FakeEx Express').click();
      cy.getByTestId('submit-delivery-option-button').click();
      Checkout.elements.submitPaymentButton().click();
      cy.getByTestId('submit-order-button').click();
      cy.getByTestId('order-complete-container').contains('Your order was placed successfully.');
    });

 //Loging out of the system

    it("should log out successfully", () => {           
      cy.getByTestId('nav-menu-button').click();
      cy.getByTestId('logout-button').click();
      cy.getByTestId('login-page').contains('Welcome back');
    });
});



