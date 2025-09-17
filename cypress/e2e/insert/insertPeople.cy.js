import { insertPerson } from "./insertPerson.js";

describe("Inserting a person", () => {
  beforeEach(() => {
    cy.login();
  });

  it("displays an error when a required field is empty", () => {
    ["Students", "Professors"].forEach((el) => {
      cy.contains("button", el).click();
      cy.url().should("include", "/manageRegistrations");
      cy.contains("div", "Add").click();
      cy.contains("button", "Submit").click();
      cy.contains("Required").should("be.visible");
      cy.contains("button", "HOME").click();
    });
  });

  it("inserts a student when all fields are filled", () => {
    insertPerson("student");
  });

  it("inserts a professor when all fields are filled", () => {
    insertPerson("professor");
  });
});
