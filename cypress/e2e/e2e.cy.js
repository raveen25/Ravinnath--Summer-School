import Login from '../pageElements/Login'; // do we need unused classes?
import Global from '../pageElements/Global';
import HomePage from '../pageElements/HomePage';
import Cart from '../pageElements/Cart';

describe("Login Functionality", () => {
  beforeEach(() => {
    cy.Login(Cypress.env("username"), Cypress.env("password")); // only classes use big first letter, rest please use camelCase
  });

  describe("Validate signin page", () => {
    it("should display store excellence", () => {
      Homepage.elements.storeExclence().should("be.visible");
    });
  });

  /*describe("Add items to cart", () => {
    it("should add item to cart", () => {
      cy.getByTestId('product-wrapper').contains('p', 'Medusa T-Shirt').click() // define all elements to class
      cy.getByTestId('option-button').contains('button', 'XL').click()
      cy.getByTestId('option-button').contains('button', 'Black').click()
      cy.getByTestId('add-product-button').contains('button', 'Add to cart').click()
      cy.getByTestId('nav-cart-link').click();
      cy.getByTestId('product-select-button').should('have.length', 1);
    });
  });*/



  describe("Add items to cart", () => {
    it("should add item to cart", () => {
      Cart.selectProduct('Medusa T-Shirt');
      Cart.selectSize('XL');
      Cart.selectColour('Black');
      Cart.addToCart();
      Cart.goToCart();
      Cart.verifyProductInCart(1);
    });
  });



  describe("Checkout", () => {
    it("should complete checkout process", () => {
      cy.getByTestId('nav-cart-link').click(); // add all elements in class
      cy.visit('/cart');
      cy.getByTestId('checkout-button').should('have.text', 'Go to checkout').click();
      //cy.getByTestId('edit-address-button').click();
      cy.getByTestId('shipping-first-name-input').type('Lion');
      cy.getByTestId('shipping-last-name-input').type('King');
      cy.getByTestId('shipping-address-input').type('Main Street');
      cy.getByTestId('shipping-postal-code-input').type('LV-1007');
      cy.getByTestId('shipping-city-input').type('LA');
      cy.getByTestId('shipping-country-select').select('United States');
      cy.getByTestId('submit-address-button').click();
      cy.getByTestId('delivery-option-radio').contains('FakeEx Express').click();
      cy.getByTestId('submit-delivery-option-button').click();
      cy.getByTestId('submit-payment-button').click();
      cy.getByTestId('submit-order-button').click();
      cy.getByTestId('order-complete-container').contains('Your order was placed successfully.');
    });
  });

  describe("Logout", () => {
    it("should log out successfully", () => {
      cy.getByTestId('nav-menu-button').click();
      cy.getByTestId('logout-button').click();
      cy.getByTestId('login-page').contains('Welcome back');
    });
  });
});



