import validator from "validator";

export function isEmail(text) {
  return validator.isEmail(text);
}

export function isURL(text) {
  return validator.isURL(text);
}

export function isLinkedInURL(text) {
  return validator.isURL(text) && text.toLowerCase().includes("linkedin");
}

export function isEmployeeSize(text) {
  const employeeRegex = /^(\d+)(?:-([1-9]\d*))?([kK])?(\+)?$/;
  return employeeRegex.test(text);
}

export function isCompanyName(text) {
  return !validator.isNumeric(text) && !isURL(text) && !isEmployeeSize(text);
}
