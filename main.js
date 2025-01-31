import { intro, outro, log } from "@clack/prompts";

import { readCSV, writeCSV } from "./lib/io.js";
import prompt from "./lib/prompt.js";
import core from "./lib/core.js";

async function main() {
  // Start interactive CLI
  intro("DusterCLI app starting");

  const { input, output, errors: errorsFile } = await prompt();

  // Read the file
  const data = readCSV(input);

  const [clean, errors] = core(data.body);

  // Create the clean file
  writeCSV(output, clean);

  // Create errors file
  writeCSV(errorsFile, errors);

  outro("Thanks for using our app!");
}

main();
