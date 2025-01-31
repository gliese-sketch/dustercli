import fs from "fs";
import Papa from "papaparse";
import { log } from "@clack/prompts";

export function readCSV(file) {
  try {
    const csvData = fs.readFileSync(file, "utf-8");
    const parsed = Papa.parse(csvData, {
      header: true,
    });

    const header = parsed.meta.fields;
    const body = parsed.data;

    return { header, body };
  } catch (err) {
    log.error(`Unable to read the file: ${file}`);
    process.exit(1);
  }
}

export function writeCSV(file, data) {
  try {
    const stringify = Papa.unparse(data);
    fs.writeFileSync(file, stringify);
  } catch (err) {
    log.error(`Unable to create new file: ${file}`);
    process.exit(1);
  }
}
