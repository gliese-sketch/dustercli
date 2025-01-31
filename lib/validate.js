import validator from "validator";

export function isEmail(text) {
  return validator.isEmail(text);
}

export function isURL(text) {
  return validator.isURL(text);
}

export function isLinkedInURL(text) {
  return validator.isURL(text) && text.includes("linkedin");
}

export function isCompanyName(text) {}
export function isEmployeeSize(text) {}
export function isPhoneNumber(text) {}
