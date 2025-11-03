import { course } from "../../../../src/data/course.js";

describe("Insert a class", () => {
  beforeEach(() => {
    cy.login();
  });

  it("display an error when a required field is empty", () => {
    cy.contains("button", "Classes").click();
    cy.contains("Add").click();

    cy.contains("button", "Submit").click();
    cy.contains("The 'time' field cannot be empty").should("be.visible");
    cy.get("#course").select(2);
    cy.get("#weekDay").select(1);
    let selectedCourse = course.find((el) => el.id == 3);
    cy.get("#time").clear().type("13:00");
    cy.contains("button", "Submit").click();
    cy.contains("Class added successfully!").should("be.visible");
    cy.get("div")
      .contains("h2", selectedCourse.name.toUpperCase())
      .parent()
      .within(() => {
        cy.contains("p", "13:00");
      });
  });
});
