import { faker } from "@faker-js/faker";
import { editPerson } from "./editPerson.js";
import { MESSAGES } from "../../data/messages.js";

describe("Editing a person", () => {
  beforeEach(() => {
    cy.login();
  });

  it("displays an error when a required field is empty", () => {
    ["Students", "Professors"].forEach((el) => {
      cy.contains("button", el).click();
      cy.contains("Edit").first().click();
      cy.get('[name="name"]').clear();
      cy.contains("Submit").click();
      cy.contains("Required").should("be.visible");
      cy.get('[name="name"]').type(faker.person.fullName());

      cy.get('[name="address"]').clear();
      cy.contains("Submit").click();
      cy.contains("Required").should("be.visible");
      cy.get('[name="address"]').type(faker.location.streetAddress());

      cy.get('[name="contact"]').clear();
      cy.contains("Submit").click();
      cy.contains("Required").should("be.visible");
      cy.get('[name="contact"]').clear().type("abcd");
      cy.get('[name="contact"]').should("have.value", "");
      cy.get('[name="contact"]').type(faker.string.numeric(10));
      cy.contains("Submit").click();
      cy.contains(MESSAGES.invalidNumber).should("be.visible");
      cy.get("button.Toastify__close-button").click();
      cy.get('[name="contact"]').clear().type(faker.string.numeric(11));

      cy.get('[name="dateOfBirth"]').clear();
      cy.contains("Submit").click();
      cy.contains("Required").should("be.visible");

      cy.contains("Back").click();
      cy.contains("HOME").click();
    });
  });

  it("should correctly edit a student", () => {
    editPerson("student");
  });

  it("should correctly edit a professor", () => {
    editPerson("professor");
  });
});
