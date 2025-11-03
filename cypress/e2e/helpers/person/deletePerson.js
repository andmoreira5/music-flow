import { faker } from "@faker-js/faker";
import { insertPerson } from "./insertPerson.js";

export const deletePerson = (screen) => {
  const name = faker.person.fullName();
  insertPerson(screen, name);
  cy.contains("h2", name.toUpperCase())
    .parents("div.bg-gray-800")
    .within(() => {
      cy.contains("button", "Delete").click();
    });
  cy.contains("CONFIRM DELETION?").should("be.visible");
  cy.contains(name.toUpperCase()).should("be.visible");
  cy.contains("OK").click();
  cy.contains("Removed successfully").should("be.visible");
};
