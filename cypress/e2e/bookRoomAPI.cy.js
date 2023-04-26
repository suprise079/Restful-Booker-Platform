import APITesting from "../classes/APITesting";
import data from "../fixtures/bookingData.json";

describe("Testing the book room endpoint with DDT", () => {
  let back = new APITesting();

  data.forEach((item) =>
    it(`${item.title}`, () => {
      back.testBookRoomEndPoint(item);
    })
  );
});
