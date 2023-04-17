class APITesting {
  constructor() {}

  testBookRoomEndPoint(
    dates,
    depositpaid,
    firstname,
    lastname,
    roomid,
    email,
    phone
  ) {
    cy.request({
      method: "POST",
      url: "https://automationintesting.online/booking/", // baseUrl is prepend to URL
      failOnStatusCode: false,
      body: {
        bookingdates: {
          checkin: dates.checkin,
          checkout: dates.checkout,
        },
        depositpaid,
        firstname,
        lastname,
        roomid,
        email,
        phone,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  }
}

export default APITesting;
