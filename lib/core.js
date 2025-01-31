import * as v from "./validate.js";

export default function (records) {
  const clean = [];
  const errors = [];
  const companySet = new Set();

  for (let row of records) {
    const rowError = [];

    if (!row["Company Name"].trim() || !v.isCompanyName(row["Company Name"])) {
      rowError.push("Invalid company name");
    } else if (companySet.has(row["Company Name"])) {
      rowError.push("Duplicate company name");
    } else {
      companySet.add(row["Company Name"]);
    }

    if (
      !row["LinkedIn Profile URL"].trim() ||
      !v.isURL(row["LinkedIn Profile URL"])
    ) {
      rowError.push("Invalid LinkedIn profile URL");
    }

    if (
      !row["Employee Size"].trim() ||
      !v.isEmployeeSize(row["Employee Size"])
    ) {
      rowError.push("Invalid employee size");
    }

    if (!row["Website URL"].trim() || !v.isURL(row["Website URL"])) {
      rowError.push("Invalid website URL");
    }

    if (!rowError.length) {
      clean.push(row);
    } else {
      errors.push({ ...row, errors: rowError.join(" / ") });
    }
  }

  return [clean, errors];
}
