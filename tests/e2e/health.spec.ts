import path from "node:path";
import { describeFeature, loadFeature } from "@amiceli/vitest-cucumber";
import request from "supertest";
import { expect } from "vitest";

const feature = await loadFeature(
  path.join(__dirname, "../features/health.feature"),
);

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
