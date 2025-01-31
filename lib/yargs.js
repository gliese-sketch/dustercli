import { createRequire } from "module";
const require = createRequire(import.meta.url);
const packageJSON = require("../package.json");

import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

export default function () {
  const argv = yargs(hideBin(process.argv))
    .option("input", {
      alias: "i",
      type: "string",
      description: "What is your input.csv file?",
    })
    .option("output", {
      alias: "o",
      type: "string",
      description: "What will be the ouput.csv file?",
    })
    .option("errors", {
      alias: "e",
      type: "string",
      description: "What will be the errors.csv file?",
    })
    .version(packageJSON.version)
    .alias("v", "version")
    .help("h")
    .alias("h", "help")
    .parse();

  return { input: argv.input, output: argv.output, errors: argv.errors };
}
