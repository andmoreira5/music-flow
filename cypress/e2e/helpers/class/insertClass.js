export const insertClass = (courseId, weekdayId, time, submit = true) => {
  courseId && cy.get("#course").select(courseId);
  weekdayId && cy.get("#weekDay").select(weekdayId);
  time && cy.get("#time").clear().type(time);
  submit && cy.contains("button", "Submit").click();
};
