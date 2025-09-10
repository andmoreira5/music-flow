Cypress.Commands.add("login", () => {
  cy.visit("/");
  cy.get('[data-testid="buttonLogin"]').click();
});
