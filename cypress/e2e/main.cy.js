import UITesting from "../classes/userInterface.cy";
import data from "../classes/bookingData.js";
import messageData from "../classes/messageData.js";
import APITesting from "../classes/API.cy";

describe("Testing User interface and API of Restful booking platform", () => {
  let face = new UITesting();
  let back = new APITesting();

  it("Testing form ui successfully books room", () => {
    face.openSite();
    face.bookRoom();
  });

  // Data driven testing for book a room endpoint
  data.forEach((item) => {
    it(`${item.title}`, () => {
      back.testBookRoomEndPoint(item);
    });
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
