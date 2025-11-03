import { faker } from "@faker-js/faker";
import { MESSAGES } from "../../../data/messages.js";

export const insertPerson = (type = "student", name = "") => {
  cy.contains("button", type === "student" ? "Students" : "Professors").click();
  cy.contains("div", "Add").click();
  if (name == "") name = faker.person.fullName();
  cy.get('[name="name"]').type(name);
  cy.get('[name="dateOfBirth"]').type(
    faker.date
      .birthdate({ mode: "age", min: 18, max: 60 })
      .toISOString()
      .split("T")[0]
  );
  cy.get('[name="address"]').type(faker.location.streetAddress());
  cy.get('[name="contact"]').type(faker.string.numeric(11));

  cy.contains("button", "Submit").click();

  cy.contains(name.toUpperCase()).should("exist");
  cy.contains(MESSAGES.success).should("exist");
};
