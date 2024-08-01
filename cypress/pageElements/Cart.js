class Cart {
  elements = {
  productWrapper: () => cy.getByTestId('product-wrapper').first(),
  optionButtonSize: () => cy.getByTestId('option-button').contains('XL'),
  optionButtonColour: () => cy.getByTestId('option-button').contains('Black'),
  addProductButton: () => cy.getByTestId('add-product-button'),
  navCartLink: () => cy.getByTestId('nav-cart-link'),
  productSelectButton: () => cy.getByTestId('product-select-button'),
}
  
  selectProduct() {
    this.elements.productWrapper().click();
  }

  selectSize() {
    this.elements.optionButtonSize().click();
  }

  selectColour() {
    this.elements.optionButtonColour().click();
  }

  addToCart() {
    this.elements.addProductButton().click();
  }

  goToCart() {
    this.elements.navCartLink().click();
  }

}

export default new Cart();
