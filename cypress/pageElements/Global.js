class Global {
  elements = {
    sideBarBurger: () => cy.getByTestId("nav-menu-button"),
    sideBarLinks: (pageName) =>
      cy.getByTestId("nav-menu-popup").contains("a", pageName),
  };

  navigateSideBar = {
    openPage: (pagename) => {
      this.elements.sideBarBurger().click();
      this.elements.sideBarLinks(pagename).click();
    },
  };
}
export default new Global();



// class Global {
//   elements = {
//     sideBarBurger: () => cy.getByTestId("nav-menu-button"),
//     sideBarLinks: (pageName) =>
//       cy.getByTestId("nav-menu-popup").contains("a", pageName),
//     logoutButton: () => cy.getByTestId("logout-button"),
//     loginPage: () => cy.getByTestId("login-page"),
//   };

//   navigateSideBar(pageName) {
//     this.elements.sideBarBurger().click();
//     this.elements.sideBarLinks(pageName).click();
//   }

//   logout() {
//     this.elements.sideBarBurger().click();
//     this.elements.logoutButton().click();
//   }

//   verifyLoginPage() {
//     this.elements.loginPage().contains('Welcome back');
//   }
// }

// export default new Global();
