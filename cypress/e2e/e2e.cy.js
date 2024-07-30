import Login from '../pageElemants/Login';
import Global from '../pageElemants/Global';
import Homepage from '../pageElemants/Homepage';

describe("Login Functionality", () => {
  beforeEach(() => {
    cy.Login(Cypress.env("username"), Cypress.env("password"));
  });

  it("Validate signin page", () => {
    Homepage.elements.storeExclence().should("be.visible");
  });


  it("Add items to the cart", () => {
    
    // Homepage.elements.headerLink().contains('Store of Excellence');
    // Homepage.elements.productLink().should('have.length', 4);
    // Global.navigateSideBar.openPage('Store');
    cy.getByTestId('product-wrapper').contains('p', 'Medusa T-Shirt').click()
    cy.getByTestId('option-button').contains('button', 'XL').click()
    cy.getByTestId('option-button').contains('button', 'Black').click()
    cy.getByTestId('add-product-button').contains('button', 'Add to cart').click()
   


  });
  
  it("opens cart page nd checks out", () => {
    cy.getByTestId('nav-cart-link').click();
    cy.visit('/cart');
    cy.getByTestId('checkout-button').should('have.text', 'Go to checkout').click();
    cy.getByTestId('shipping-first-name-input').type('Lion');
    cy.getByTestId('shipping-last-name-input').type('King');
    cy.getByTestId('shipping-address-input').type('Main Street');
    cy.getByTestId('shipping-postal-code-input').type('LV-1007');
    cy.getByTestId('shipping-city-input').type('LA');
    cy.getByTestId('shipping-country-select').select('United States');
    cy.getByTestId('submit-address-button').click();
    checkout.elements.delivaryOptionRadio('FakeEx Express').click();
    checkout.elements.continueToReview.click();
    checkout.elements.submitOrderButton.click();
    cy.location().as('confirmedOrder');


  });
});
