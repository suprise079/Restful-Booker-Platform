import UITesting from "../classes/userInterface";
import data from "../fixtures/bookingData.js";
import messageData from "../fixtures/messageData.js";
import APITesting from "../classes/APITesting";

describe("Testing User interface and API of Restful booking platform", () => {
  let face = new UITesting();
  let back = new APITesting();

  it("Testing form ui successfully books room", () => {
    face.openSite();
    face.bookRoom();
  });

  it("Testing form ui successfully sends message", () => {
    face.openSite();
    face.sendMessage();
  });

  // Data driven testing for send message endpoint
  messageData.forEach((item) => {
    it(`${item.title}`, () => {
      back.testSendMessage(item);
    });
  });
});
