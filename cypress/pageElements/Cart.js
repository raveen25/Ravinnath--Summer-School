class Cart {
  elements = {
  productWrapper: () => cy.getByTestId('product-wrapper'),
  optionButton: () => cy.getByTestId('option-button'),
  addProductButton: () => cy.getByTestId('add-product-button'),
  navCartLink: () => cy.getByTestId('nav-cart-link'),
  productSelectButton: () => cy.getByTestId('product-select-button'),
}
  
  selectProduct() {
    this.elements.productWrapper().click();
  }

  selectSize() {
    this.elements.optionButton().click();
  }

  selectColour() {
    this.elements.optionButton().click();
  }

  addToCart() {
    this.elements.addProductButton().click();
  }

  goToCart() {
    this.elements.navCartLink().click();
  }

  verifyProductInCart() {
    this.elements.productSelectButton().should('have.length', 1);
  }
}

export default new Cart();
