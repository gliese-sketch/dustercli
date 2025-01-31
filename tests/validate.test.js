import { expect, test, describe } from "vitest";
import * as v from "../lib/validate.js";

describe("isLinkedInURL", () => {
  test("should return true for a valid LinkedIn company URL", () => {
    expect(v.isLinkedInURL("https://linkedin.com/company/google")).toBe(true);
  });

  test("should return false for an invalid LinkedIn URL (wrong domain)", () => {
    expect(v.isLinkedInURL("https://linked.com/company/google")).toBe(false);
  });

  test("should return false for a non-URL string", () => {
    expect(v.isLinkedInURL("not a url")).toBe(false);
  });

  test("should return false for an empty string", () => {
    expect(v.isLinkedInURL("")).toBe(false);
  });

  test("should return false for a company url with no protocol", () => {
    expect(v.isLinkedInURL("linkedin.com/company/google")).toBe(true);
  });
});

describe("isEmployeeSize", () => {
  test("should return true for a valid range (e.g., 10-400)", () => {
    expect(v.isEmployeeSize("10-400")).toBe(true);
  });

  test("should return true for a valid single number (e.g., 10)", () => {
    expect(v.isEmployeeSize("10")).toBe(true);
  });

  test("should return true for a valid number with plus sign (e.g., 500+)", () => {
    expect(v.isEmployeeSize("500+")).toBe(true);
  });

  test("should return true for a valid number with 'k' (e.g., 10k)", () => {
    expect(v.isEmployeeSize("10k")).toBe(true);
  });

  test("should return true for a valid number with 'k' and plus sign (e.g., 10k+)", () => {
    expect(v.isEmployeeSize("10k+")).toBe(true);
  });

  test("should return false for an invalid string (e.g., 10a)", () => {
    expect(v.isEmployeeSize("10a")).toBe(false);
  });

  test("should return false for an empty string", () => {
    expect(v.isEmployeeSize("")).toBe(false);
  });
  test("should return false for a range that starts with zero", () => {
    expect(v.isEmployeeSize("0-10")).toBe(true);
  });

  test("should return false for a range that ends with zero", () => {
    expect(v.isEmployeeSize("10-0")).toBe(false);
  });

  test("should return false for a range that has letter", () => {
    expect(v.isEmployeeSize("a-10")).toBe(false);
  });
});

describe("isCompanyName", () => {
  test("should return true for a valid company name with alphanumeric characters (e.g., e42)", () => {
    expect(v.isCompanyName("e42")).toBe(true);
  });

  test("should return true for a valid company name with alphabetic characters (e.g., Phleebs)", () => {
    expect(v.isCompanyName("Phleebs")).toBe(true);
  });

  test("should return true for a valid company name with mixed-case characters (e.g., wwArena)", () => {
    expect(v.isCompanyName("wwArena")).toBe(true);
  });

  test("should return false for a company name consisting only of numbers (e.g., 1000)", () => {
    expect(v.isCompanyName("1000")).toBe(false);
  });

  test("should return false for a company name that looks like a URL (e.g., www.apple.com)", () => {
    expect(v.isCompanyName("www.apple.com")).toBe(false);
  });
});

describe("isEmail", () => {
  test("should return true for a valid email address", () => {
    expect(v.isEmail("test@example.com")).toBe(true);
  });

  test("should return false for an invalid email address", () => {
    expect(v.isEmail("invalid-email")).toBe(false);
  });
});

describe("isURL", () => {
  test("should return true for a valid url", () => {
    expect(v.isURL("https://www.google.com")).toBe(true);
  });
  test("should return false for an invalid url", () => {
    expect(v.isURL("not a url")).toBe(false);
  });
});
