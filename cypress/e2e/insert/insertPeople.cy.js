import { insertPerson } from "./insertPerson.js";

describe("Insert student ", () => {
  beforeEach(() => {
    cy.login();
  });

  it("shouldn't be able insert item with a required field not typed", () => {
    cy.contains("button", "Students").click();
    cy.contains("div", "Add").click();
    cy.contains("button", "Submit").click();
    cy.contains("Required").should("be.visible");
  });

  it("Should be able to insert a student", () => {
    insertPerson("student");
  });

  it("Should be able to insert a professor", () => {
    insertPerson("professor");
  });
});
