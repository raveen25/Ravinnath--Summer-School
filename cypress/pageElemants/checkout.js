let checkout = {};

before(() => {
  checkout = {
    elements: {
      delivaryOptionRadio: (option) => cy.get(`[data-test-id="delivery-option-${option}"]`),
      continueToReview: () => cy.get('[data-test-id="continue-to-review-button"]'),
      submitOrderButton: () => cy.get('[data-test-id="submit-order-button"]'),
    },
  };
});