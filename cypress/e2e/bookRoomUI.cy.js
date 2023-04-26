import UITesting from "../classes/userInterface";

describe("Testing User interface and API of Restful booking platform", () => {
  let face = new UITesting();

  it("Testing form ui successfully books room", () => {
    face.openSite();
    face.bookRoom();
  });

});