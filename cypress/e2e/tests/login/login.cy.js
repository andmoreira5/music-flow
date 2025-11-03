import { MESSAGES } from "../../../data/messages.js";

describe("Login flow", () => {
  it("handles wrong login", () => {
    cy.visit("/");
    cy.get('[data-testid="inputEmailLogin"]').clear();
    cy.get('[data-testid="buttonLogin"]').click();
    cy.contains(MESSAGES.empty).should("exist");
    cy.get('[data-testid="inputEmailLogin"]').type("example@mail.com");
    cy.get('[data-testid="buttonLogin"]').click();
    cy.contains(MESSAGES.invalid).should("exist");
  });

  it("logs in successfully, toggles dark mode, and logs out ", () => {
    cy.login();
    cy.url().should("include", "/home");
    cy.contains("ADMIN").should("exist");
    cy.get("html").should("not.have.class", "dark");
    cy.contains("LIGHT").should("be.visible");
    cy.get('[data-testid="darkModeSwitch"]').click();
    cy.get("html").should("have.class", "dark");
    cy.contains("DARK").should("be.visible");
    cy.get('[data-testid="logoutButton"]').click();
    cy.url().should("include", "/login");
  });
});
