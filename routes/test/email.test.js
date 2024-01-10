const request = require("supertest");

const app = require("../../app");

it("can send emails with valid impust", async () => {
  return request(app)
    .post("/api/mail")
    .send({
      to: "aqui el correo del cliente",
      subject: "aqui va el titutlo",
      text: "esto puede ir vacia",
      html: "aqui el html con todo los dato del cliente",
      sandboxMode: true,
    })
    .expect(201);
});
