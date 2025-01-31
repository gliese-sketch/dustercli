import { intro, outro, log } from "@clack/prompts";

import { readCSV, writeCSV } from "./lib/io.js";
import prompt from "./lib/prompt.js";

async function main() {
  // Start interactive CLI
  intro("DusterCLI app starting");

  // Get user prompt
  const { input, output, errors } = await prompt();

  // Read the file
  const data = readCSV(input);

  log.message("File has been read successfully!");

  // Create clean csv
  writeCSV(output, data.body);

  log.message("File has been created!");

  // TODO: Create errors.csv

  outro("Thanks for using our app!");
}

main();
