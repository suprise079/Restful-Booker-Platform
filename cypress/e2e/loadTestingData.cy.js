describe("Load data from fixture for the tests", () => {
  it("Load data bookingData.json", () => {
    it("Load data from fixture for the test", () => {
      cy.task("parseXlsx", {
        filePath: "cypress\\fixtures\\bookingData.xlsx",
      }).then((rows) => {
        let dataRows = rows[0].data;
        // let jsonData = [];

        dataRows.map((row) => {
          let count = 0;
          jsonData.push({
            title: row[count++],
            bookingdates: {
              checkin: row[count++],
              checkout: row[count++],
            },
            depositpaid: row[count++],
            firstname: row[count++],
            lastname: row[count++],
            roomid: row[count++],
            email: row[count++],
            phone: row[count++],
            expectedCode: row[count++],
            errorMessage: row[count++],
          });
        });
        cy.writeFile("cypress/fixtures/bookingData.json", jsonData);
      });
    });
  });

  it("Load data messageData.json", () => {
    cy.task("parseXlsx", {
      filePath: "cypress\\fixtures\\messageData.xlsx",
    }).then((rows) => {
      console.log("Rows here: " + rows);
      let dataRows = rows[0].data;
      console.log(dataRows);
      let jsonData = [];
      let count = 0;
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
});
