import { text, cancel, isCancel } from "@clack/prompts";
import yargs from "./yargs.js";

export default async function () {
  let { input, output, errors } = yargs();

  if (input && output && errors) return { input, output, errors };

  input = await text({
    message: "What is the input file?",
    initialValue: "input.csv",
    placeholder: "Enter csv file",
    validate: (value) => {
      if (!value.toLowerCase().endsWith(".csv")) {
        return "Must be a csv file.";
      }
    },
  });

  if (isCancel(input)) {
    cancel("Operation cancelled.");
    process.exit(0);
  }

  output = await text({
    message: "What will be the output file?",
    initialValue: "output.csv",
    placeholder: "Enter csv file",
    validate: (value) => {
      if (!value.toLowerCase().endsWith(".csv")) {
        return "Must be a csv file.";
      }
    },
  });

  if (isCancel(output)) {
    cancel("Operation cancelled.");
    process.exit(0);
  }

  errors = await text({
    message: "What will be the errors file?",
    initialValue: "errors.csv",
    placeholder: "Enter csv file",
    validate: (value) => {
      if (!value.toLowerCase().endsWith(".csv")) {
        return "Must be a csv file.";
      }
    },
  });

  if (isCancel(errors)) {
    cancel("Operation cancelled.");
    process.exit(0);
  }

  return { input, output, errors };
}
