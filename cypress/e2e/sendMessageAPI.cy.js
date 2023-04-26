import data from "../fixtures/messageData.json";
import APITesting from "../classes/APITesting";

describe("Testing Send message endpoint With DDT", () => {
  let back = new APITesting();
  it("Load data from fixture for the tests", () => {
    cy.task("parseXlsx", {
      filePath: "cypress\\fixtures\\messageData.xlsx",
    }).then((rows) => {
      console.log("Rows here: " + rows);
      let dataRows = rows[0].data;
      console.log(dataRows);
      let jsonData = [];

      dataRows.map((row) => {
        jsonData.push({
          title: row[count++],
          name: row[count++],
          email: row[count++],
          phone: row[count++],
          subject: row[count++],
          description: row[count++],
          expectedCode: row[count++],
          errorMessage: row[count++],
        });
      });
      cy.writeFile("cypress/fixtures/messageData.json", jsonData);
    });
  });

  data.forEach((item) =>
    it(`${item.title} with data:\n ${JSON.stringify(item)}`, () => {
      back.testBookRoomEndPoint(item);
    })
  );
});
