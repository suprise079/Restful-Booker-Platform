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
      expect(response.status).to.eq(item.expectedCode);
      if (response.errorMessage != null) {
        expect(response.errorMesaage).to.contain(item.errorMessage);
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
      expect(response.status).to.eq(item.expectedCode);
      if (response.errorMessage != null) {
        expect(response.errorMesaage).to.contain(item.errorMessage);
      }
    });
  }
}

export default APITesting;
