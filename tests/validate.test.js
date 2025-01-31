import { expect, test, describe } from "vitest";
import { isLinkedInURL } from "../lib/validate.js";

describe("Test cases for LinkedIn URL", () => {
  test("check for a valid linkedin url", () => {
    expect(isLinkedInURL("https://linkedin.com/company/google")).toBe(true);
  });

  test("check for a valid linkedin url", () => {
    expect(isLinkedInURL("https://linked.com/company/google")).toBe(false);
  });
});
