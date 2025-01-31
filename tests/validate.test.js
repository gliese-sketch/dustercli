import { expect, test, describe } from "vitest";
import * as v from "../lib/validate.js";

describe("Test cases for LinkedIn URL", () => {
  test("check for a valid linkedin url", () => {
    expect(v.isLinkedInURL("https://linkedin.com/company/google")).toBe(true);
  });

  test("check for a valid linkedin url", () => {
    expect(v.isLinkedInURL("https://linked.com/company/google")).toBe(false);
  });
});

describe("Test cases for Employee Size", () => {
  test("check for a valid", () => {
    expect(v.isEmployeeSize("10-400")).toBe(true);
  });

  test("check for an invalid case", () => {
    expect(v.isEmployeeSize("10a")).toBe(false);
  });
});
