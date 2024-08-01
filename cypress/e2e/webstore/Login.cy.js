// import Login from '../../pageElemants/Login';
// import Global from '../../pageElemants/Global';
// import HomePage from '../../pageElemants/HomePage';

// describe("Login Functionality", () => {
//   beforeEach(() => {
//     cy.visit("/");
//   });

//   it("Validate signin page", () => {
//     cy.contains("h1", "Welcome back");
//     Login.elements.emailInput().should("be.visible");
//     Login.elements.passwordInput().should("be.visible");
//     Login.elements.signInButton().should("be.visible");
//   });

//   /*it("Logs in and opens store page from sidebar", () => {
//     cy.login(Cypress.env("username"), Cypress.env("password"));
//     cy.log("Logged in successfully");
  
//     Homepage.elements.headerLink().should('exist');
//     cy.log("Header link exists");
  
//     Homepage.elements.headerLink().contains('Store of Excellence');
//     cy.log("Header link contains 'Store of Excellence'");
  
//     Homepage.elements.productLink().should('have.length', 4);
//     cy.log("Product links have length 4");
  
//     Global.navigateSideBar.openPage('Store');
//     cy.log("Opened Store page from sidebar");
//   });*/


// import Login from '../../pageElemants/Login';
// import Global from '../../pageElemants/Global';
// import HomePage from '../../pageElemants/HomePage';

// describe("Login Functionality", () => {
//   beforeEach(() => {
//     cy.visit("/");
//   });

//   it("Validate signin page", () => {
//     cy.contains("h1", "Welcome back");
//     Login.elements.emailInput().should("be.visible");
//     Login.elements.passwordInput().should("be.visible");
//     Login.elements.signInButton().should("be.visible");
//   });

//   it("Logs in and opens store page from sidebar", () => {
//     cy.login(Cypress.env("username"), Cypress.env("password"));
//     Homepage.elements.headerLink().contains('Store of Excellence');
//     Homepage.elements.productLink().should('have.length', 4);
//     Global.navigateSideBar.openPage('Store');
//   });
// });
// });
