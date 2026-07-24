const request = require("supertest");
const app = require("../server");

describe("Page Pulse API", () => {

    test("Happy Path - Valid Website", async () => {

        const res = await request(app)
            .post("/audit")
            .send({
                url: "https://example.com"
            });

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("title");
        expect(res.body).toHaveProperty("status");
        expect(res.body).toHaveProperty("wordCount");

    });

    test("Failure - Missing URL", async () => {

        const res = await request(app)
            .post("/audit")
            .send({});

        expect(res.statusCode).toBe(400);
        expect(res.body.error).toBe("URL is required.");

    });

    test("Failure - Invalid URL", async () => {

        const res = await request(app)
            .post("/audit")
            .send({
                url: "invalid-url"
            });

        expect(res.statusCode).not.toBe(200);
        expect(res.body).toHaveProperty("error");

    });

});