import { intro, outro, log } from "@clack/prompts";
import prompt from "./lib/prompt.js";

intro("DusterCLI app starting");

const { input, output, errors } = await prompt();

log.success(`${input} ${output} ${errors}`);

outro("Thanks for using our app!");
