class Elements {
  getBook = () => cy.contains("Book this room");

  // Book room
  getDate = () => cy.get(":nth-child(5) > .rbc-row-bg > :nth-child(4)");
  getFirstName = () => cy.get(".col-sm-4 > :nth-child(1) > .form-control");
  getLastName = () => cy.get(".col-sm-4 > :nth-child(2) > .form-control");
  getFirstEmail = () => cy.get(".col-sm-4 > :nth-child(3) > .form-control");
  getFirstPhone = () => cy.get(".col-sm-4 > :nth-child(4) > .form-control");
  getSubmitBook = () => cy.get(".col-sm-4 > .btn-outline-primary");

  // Contact us
  getName = () => cy.get("#name");
  getEmail = () => cy.get("#email");
  getPhone = () => cy.get("#phone");
  getSubject = () => cy.get("#subject");
  getMessage = () => cy.get("#description");
  getSubmitMessage = () => cy.get("#submitContact");
}

export default Elements;
