import { deletePerson } from "../../helpers/person/deletePerson.js";

describe("Deleting a person", () => {
  beforeEach(() => {
    cy.login();
  });

  it("Should be able delete a student inserted", () => {
    deletePerson("student");
  });
  it("Should be able delete a professor inserted", () => {
    deletePerson("professor");
  });
});
