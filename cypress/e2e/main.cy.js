import UITesting from "./userInterface.cy";
import data from "./data";
import APITesting from "./API.cy";

describe("Testing User interface and API of Restful booking platform", () => {
  let face = new UITesting();
  let back = new APITesting();

  it("Successfully books room", () => {
    face.openSite();
    face.bookRoom();
  });

  //Data driven testing for book a room endpoint
  // data.forEach((item) => {
  //   it("Successfully send requests to the endpoint", () => {
  //     back.testBookRoomEndPoint(
  //       item.bookingdates,
  //       item.depositpaid,
  //       item.firstname,
  //       item.lastname,
  //       item.roomid,
  //       item.email,
  //       item.phone
  //     );
  //   });
  // });

  it("Successfully sends message", () => {
    face.openSite();
    face.sendMessage();
  });
});
