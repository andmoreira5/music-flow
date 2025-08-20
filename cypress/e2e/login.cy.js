describe("Login flow", () => {
  it("logs in successfully", () => {
    cy.visit("/");
    cy.get('[data-testid="inputEmailLogin"]').should(
      "have.value",
      "adm@adm.com"
    );
    cy.get('[data-testid="inputPasswordLogin"]').should("have.value", "adm065");
    cy.get('[data-testid="buttonLogin"]').click();
    cy.url().should("include", "/home");
    cy.contains("BOA TARDE, USUÁRIO TESTE!").should("be.visible");
    cy.get("html").should("not.have.class", "dark");
    cy.contains("CLARO").should("be.visible");
    cy.get('[data-testid="darkModeSwitch"]').click();
    cy.get("html").should("have.class", "dark");
    cy.contains("ESCURO").should("be.visible");
    cy.get('[data-testid="logoutButton"]').click();
    cy.url().should("include", "/login");
  });
});
