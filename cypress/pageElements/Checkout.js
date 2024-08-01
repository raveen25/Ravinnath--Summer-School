// cypress/pageElemants/checkout.js
/*class checkout {
  elements = {
    delivaryOptionRadio: () => cy.getByTestID("delivery-option-radio"),
    continueToReview: () => cy.getByTestID("continue-to-review"),
    submitOrderButton: () => cy.getByTestID("submit-order-button"),
    
  };
}


export default checkout;*/



class Checkout {
  elements = {
    deliveryOptionRadio: () => cy.getByTestId("delivery-option-radio"),
    continueToReview: () => cy.getByTestId("continue-to-review"),
    submitOrderButton: () => cy.getByTestId("submit-order-button"),
    checkoutButton: () => cy.getByTestId("checkout-button"),
    shippingFirstNameInput: () => cy.getByTestId("shipping-first-name-input"),
    shippingLastNameInput: () => cy.getByTestId("shipping-last-name-input"),
    shippingAddressInput: () => cy.getByTestId("shipping-address-input"),
    shippingPostalCodeInput: () => cy.getByTestId("shipping-postal-code-input"),
    shippingCityInput: () => cy.getByTestId("shipping-city-input"),
    shippingCountrySelect: () => cy.getByTestId("shipping-country-select"),
    submitAddressButton: () => cy.getByTestId("submit-address-button"),
    submitPaymentButton: () => cy.getByTestId("submit-payment-button"),
    orderCompleteContainer: () => cy.getByTestId("order-complete-container"),
  };

  fillShippingDetails(firstName, lastName, address, postalCode, city, country) {
    this.elements.shippingFirstNameInput().type(firstName);
    this.elements.shippingLastNameInput().type(lastName);
    this.elements.shippingAddressInput().type(address);
    this.elements.shippingPostalCodeInput().type(postalCode);
    this.elements.shippingCityInput().type(city);
    this.elements.shippingCountrySelect().select(country);
  }

  selectDeliveryOption(option) {
    this.elements.deliveryOptionRadio().contains(option).click();
  }

  verifyOrderSuccess() {
    this.elements.orderCompleteContainer().contains('Your order was placed successfully.');
  }
}

export default new Checkout();

