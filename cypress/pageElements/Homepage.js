class HomePage {
  elements = {
    prodList: () => cy.getByTestId("product-wrapper"),
    storeExclence: () => cy.getByTestId("nav-store-link"),
    headerLink: () => cy.getByTestId("header-link"),
    productLink: () => cy.getByTestId("product-link"),
  };
}
export default new HomePage();




