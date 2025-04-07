import { describeFeature, loadFeature } from "@amiceli/vitest-cucumber";
import { expect } from "vitest";
import request from "supertest";
import app from "../../src/app";
import { beforeAll, afterAll } from "vitest";

const feature = await loadFeature("features/health.feature");
let server: ReturnType<typeof app.listen>;

beforeAll(() => {
	server = app.listen(3000);
});

afterAll(() => {
	server.close();
});

describeFeature(feature, ({ Scenario }) => {
	Scenario("Check if the server is alive", ({ When, Then, And }) => {
		let response: request.Response;

		When('I send a GET request to "/health"', async () => {
			response = await request("http://localhost:3000").get("/health");
		});

		Then("I should receive a 200 status code", () => {
			expect(response.status).toBe(200);
		});

		And('the response should be "OK"', () => {
			expect(response.text).toBe("OK");
		});
	});
});
