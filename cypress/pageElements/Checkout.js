
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


}

export default new Checkout();

