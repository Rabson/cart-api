import app from "../../app";
import request from "supertest";

describe("GET /cart", () => {
  it("returns status code 200 ", async () => {
    const res = await request(app).get("/cart").send();
    expect(res.statusCode).toEqual(200);
  });

  it("returns bad request if cart id is invalid", async () => {
    const id = "621faf4d328ace1ae41bfcf";
    const res = await request(app).get(`/cart/${id}`).send();
    expect(res.statusCode).toEqual(400);
  });

  it("returns return document if id is valid", async () => {
    const id = "621faf4d328ace1ae41bfcf9";
    const res = await request(app).get(`/cart/${id}`).send();
    expect(res.statusCode).toEqual(200);
  });
});
