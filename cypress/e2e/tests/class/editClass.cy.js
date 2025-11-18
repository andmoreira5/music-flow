import { course } from "../../../../src/data/course.js";
import { insertClass } from "../../helpers/class/insertClass.js";
import { student } from "../../../../src/data/student.js";

describe("Edit a class", () => {
  beforeEach(() => {
    cy.login();
  });

  it("should be able edit a class", () => {
    cy.contains("button", "Class").click();
    cy.contains("Add").click();

    insertClass(1, false, "10:00");

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

  it("should be able to insert students into the class", () => {
    cy.contains("button", "Class").click();
    cy.contains("Add").click();
    insertClass(2, 2, "15:00", false);
    cy.get('[data-testid="addPerson"]').clear().type(student[0].name);
    cy.contains(student[0].name).click();
    cy.get('[data-testid="nameCard"]')
      .filter((_, el) => el.textContent.trim() == student[0].name)
      .should("have.length", 1);

    cy.get('[data-testid="addPerson"]').clear().type(student[0].name);
    cy.contains(student[0].name).click();
    cy.get('[data-testid="nameCard"]')
      .filter((_, el) => el.textContent.trim() == student[0].name)
      .should("have.length", 1);

    cy.contains("Submit").click();
    cy.contains("1 STUDENT(S) ENROLLED").should("exist");

    let selectedCourse = course.find((el) => el.id == 3).name.toUpperCase();

    cy.get('[data-testid="classes"]')
      .filter((_, el) => {
        const element = Cypress.$(el);
        return (
          element.find("h2").text().includes(selectedCourse) &&
          element.find("p").text().includes("15:00")
        );
      })
      .within(() => {
        cy.contains("Edit").click();
      });
    for (let i = 1; i < 3; i++) {
      cy.get('[data-testid="addPerson"]').clear().type(student[i].name);
      cy.contains(student[i].name).click();
    }
    cy.contains("Submit").click();
    cy.contains("3 STUDENT(S) ENROLLED").should("exist");
  });

  it("should be able to remove students from the class during edit", () => {
    cy.contains("button", "Class").click();
    cy.contains("Add").click();

    insertClass(3, 3, "14:00", false);
    for (let i = 0; i < 4; i++) {
      cy.get('[data-testid="addPerson"]').clear().type(student[i].name);
      cy.contains(student[i].name).click();
    }
    cy.contains("Submit").click();
    cy.contains("4 STUDENT(S) ENROLLED").should("exist");

    let selectedCourse = course.find((el) => el.id == 4).name.toUpperCase();
    cy.get('[data-testid="classes"]')
      .filter((_, el) => {
        const element = Cypress.$(el);
        return (
          element.find("h2").text().includes(selectedCourse) &&
          element.find("p").text().includes("14:00")
        );
      })
      .within(() => {
        cy.contains("Edit").click();
      });

    cy.contains(student[1].name.toUpperCase())
      .closest('[data-testid="cardPerson"]')
      .within(() => {
        cy.get('[data-testid="removePersonFromList"]').click();
      });

    cy.get('[data-testid="nameCard"]')
      .filter((_, el) => el.textContent.trim() == student[1].name)
      .should("not.exist");

    cy.contains("Submit").click();

    cy.contains("3 STUDENT(S) ENROLLED").should("exist");
  });
});
