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

describe("Test cases for Company Name", () => {
  test("check for a valid", () => {
    expect(v.isCompanyName("e42")).toBe(true);
  });

  test("check for a valid", () => {
    expect(v.isCompanyName("Phleebs")).toBe(true);
  });

  test("check for a valid", () => {
    expect(v.isCompanyName("wwArena")).toBe(true);
  });

  test("check for an invalid case", () => {
    expect(v.isCompanyName("1000")).toBe(false);
  });

  test("check for an invalid case", () => {
    expect(v.isCompanyName("www.apple.com")).toBe(false);
  });
});
