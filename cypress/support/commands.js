import Login from "../pageElements/Login";

// Adding a custom Cypress command to get elements by their data-testid attribute
Cypress.Commands.add("getByTestId", (id) => {
  cy.get(`[data-testid="${id}"]`,{timeout: 10000});
});
// Adding a custom Cypress command for logging in
Cypress.Commands.add("Login", (username, password) => {
  cy.session([username, password], () => {
    cy.visit("/");
    cy.url().should('include', '/sign-in')
    cy.contains("h1", "Welcome back");
    Login.elements.emailInput().type(username, {delay: 100});
    Login.elements.passwordInput().type(password);
    Login.elements.signInButton().click();
    cy.getByTestId('nav-store-link').should('be.visible');
  })
});




