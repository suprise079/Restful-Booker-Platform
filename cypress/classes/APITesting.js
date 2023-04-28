class APITesting {
  constructor() {}

  testBookRoomEndPoint(item) {
    cy.request({
      method: "POST",
      url: "/booking/", // baseUrl is prepend to URL
      failOnStatusCode: false,
      body: {
        bookingdates: {
          checkin: item.bookingdates.checkin,
          checkout: item.bookingdates.checkout,
        },
        depositpaid: item.depositpaid,
        firstname: item.firstname,
        lastname: item.lastname,
        roomid: item.roomid,
        email: item.email,
        phone: item.phone,
      },
    }).then((response) => {

      if (response.status == item.expectedCode) {

        expect(response.status).to.eq(item.expectedCode);

        let resMsg = response.body ? response.body : "No response body from server";
        
        expect(JSON.stringify(resMsg)).to.contain(item.errorMessage);
      } 
      else {
        if (response.body) {
          expect(JSON.stringify(response.body)).to.contain(item.errorMessage);
        }
        expect(response.status).to.eq(item.expectedCode);
      }
    });
  }

  testSendMessage(item) {
    cy.request({
      method: "POST",
      url: "/message/", // baseUrl is prepend to URL
      failOnStatusCode: false,
      body: {
        name: item.name,
        email: item.email,
        phone: item.phone,
        subject: item.subject,
        description: item.description,
      },
    }).then((response) => {
      if (response.status == item.expectedCode) {

        expect(response.status).to.eq(item.expectedCode);

        let resMsg = response.body ? response.body : "No response body from server";

        
        expect(JSON.stringify(resMsg)).to.contain(item.errorMessage);
      }
      else {

        if (response.body) {
          expect(JSON.stringify(response.body)).to.contain(item.errorMessage);
        }

        expect(response.status).to.eq(item.expectedCode);
      }
    });
  }
}

export default APITesting;
