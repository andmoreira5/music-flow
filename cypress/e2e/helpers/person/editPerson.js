import { faker } from "@faker-js/faker";
import { MESSAGES } from "../../../data/messages.js";

export const editPerson = (type = "student") => {
  cy.contains("button", type === "student" ? "Students" : "Professors").click();
  cy.contains("Edit").first().click();

  const newName = faker.person.fullName().toUpperCase();
  const newAddress = faker.location.streetAddress().toUpperCase();

  cy.get('[name="name"]').clear().type(newName);
  cy.get('[name="address"]').clear().type(newAddress);

  cy.contains("button", "Submit").click();

  cy.contains(newName).should("exist");
  cy.contains(newAddress).should("exist");
  cy.contains(MESSAGES.updated).should("exist");
};
