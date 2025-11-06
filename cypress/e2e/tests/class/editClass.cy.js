import { course } from "../../../../src/data/course.js";

describe("Edit a class", () => {
  beforeEach(() => {
    cy.login();
  });
  it("should be able edit a class", () => {
    cy.contains("button", "Class").click();
    cy.contains("Add").click();

    cy.get("#course").select(1);
    cy.get("#time").clear().type("10:00");
    cy.contains("button", "Submit").click();
    let selectedCourse = course.find((el) => el.id == 2).name.toUpperCase();
    cy.get("div[data-testid='classes']")
      .filter((_, div) => {
        const element = Cypress.$(div);
        return (
          element.find("h2").text().includes(selectedCourse) &&
          element.find("p").text().includes("10:00")
        );
      })
      .within(() => {
        cy.contains("Edit").click();
      });

    cy.get("#time").clear().type("11:00");
    cy.contains("button", "Submit").click();
    cy.get("div[data-testid='classes']").filter((_, div) => {
      const element = Cypress.$(div);
      return (
        element.find("h2").text().includes(selectedCourse) &&
        element.find("p").text().includes("11:00")
      );
    });
  });
});
