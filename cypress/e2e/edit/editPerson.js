import { student } from "../../../src/data/student.js";

export const editPerson = (type = "student") => {
  cy.contains("button", type === "student" ? "Students" : "Professors").click();
  cy.contains("div", student[0].name).within(() => {
    cy.contains("button", "Edit").click();
  });
};
