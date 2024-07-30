import Login from "../pageElemants/Login";
import Homepage from "../pageElemants/Homepage";

//Cypress.Commands.add("getByTestId", (id) => {
//  cy.get(`[data-testid=${id}]`);
//});
Cypress.Commands.add("getByTestId", (id) => {
  cy.get(`[data-testid="${id}"]`);
});

Cypress.Commands.add("Login", (username, password) => {
 // cy.session([username, password], () => {

    cy.visit("/");
    cy.contains("h1", "Welcome back");
    Login.elements.emailInput().type(username);
    Login.elements.passwordInput().type(password);
    Login.elements.signInButton().click();
    //Homepage.elements.storeExclence().should("be.visible");
  //});
 
});
