import Login from "../pageElements/Login";
import HomePage from "../pageElements/HomePage";
import checkout from "../pageElements/checkout";

// Cypress.Commands.add("getByTestId", (id) => {
//  cy.get(`[data-testid=${id}]`);
// });
Cypress.Commands.add("getByTestId", (id) => {
  cy.get(`[data-testid="${id}"]`,{timeout: 10000});
});

Cypress.Commands.add("Login", (username, password) => {
  //cy.session([username, password], () => {

    cy.visit("/");
    cy.contains("h1", "Welcome back");
    Login.elements.emailInput().type(username);
    Login.elements.passwordInput().type(password);
    Login.elements.signInButton().click();
    //Homepage.elements.storeExclence().should("be.visible");
  //});
 
});



// import Login from "../../pageElements/Login";

// Cypress.Commands.add("getByTestId", (id) => {
//   cy.get(`[data-testid="${id}"]`, { timeout: 10000 });
// });

// Cypress.Commands.add("login", (username, password) => {
//   cy.visit("/");
//   cy.contains("h1", "Welcome back");
//   Login.login(username, password);
// });

