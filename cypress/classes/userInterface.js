import Elements from "./elements";

class UITesting {
  obj = null;

  constructor() {
    this.obj = new Elements();
  }

  openSite() {
    cy.visit("https://automationintesting.online/");
  }

  bookRoom() {
    this.obj.getBook().click();
    this.obj.getFirstName().type("John");
    this.obj.getLastName().type("Doe");
    this.obj.getFirstEmail().type("johnDoe@gmail.com");
    this.obj.getFirstPhone().type("+271234567890");
    this.obj.getSubmitBook().click();
  }

  sendMessage() {
    this.obj.getName().type("John Doe");
    this.obj.getEmail().type("JohnDoe@gmail.com");
    this.obj.getPhone().type("+271234567890");
    this.obj.getSubject().type("Testing");
    this.obj.getMessage().type("This is a test message");
    this.obj.getSubmitMessage().click();
  }
}

export default UITesting;
