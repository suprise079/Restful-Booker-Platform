import data from "../fixtures/messageData.json";
import APITesting from "../classes/APITesting";

describe("Testing Send message endpoint With DDT", () => {
  let back = new APITesting();

  data.forEach((item) =>
    it(`${item.title} with data:\n ${JSON.stringify(item)}`, () => {
      back.testSendMessage(item);
    })
  );
});
