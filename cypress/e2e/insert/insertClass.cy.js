describe("Insert a class", () => {
  beforeEach(() => {
    cy.login();
  });

  it("display an error when a required field is empty", () => {
    cy.contains("button", "Classes").click();
    cy.contains("Add").click();
    cy.contains("button", "Submit").click();
    cy.contains("The 'time' field cannot be empty").should("be.visible");
  });
});
