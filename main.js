import { intro, outro, text, cancel, isCancel } from '@clack/prompts';
import yargs from './lib/yargs.js'


intro("DusterCLI app starting")


const input = await text({
    message: 'What is the input file?',
    initialValue: 'input.csv',
    placeholder: "Enter csv file",
    validate: (value) => {
        if (!value.toLowerCase().endsWith('.csv')) {
            return "Must be a csv file."
        }
    }
});

if (isCancel(input)) {
    cancel('Operation cancelled.');
    process.exit(0);
}



const output = await text({
    message: 'What will be the output file?',
    initialValue: 'output.csv',
    placeholder: "Enter csv file",
    validate: (value) => {
        if (!value.toLowerCase().endsWith('.csv')) {
            return "Must be a csv file."
        }
    }
});

if (isCancel(output)) {
    cancel('Operation cancelled.');
    process.exit(0);
}


const errors = await text({
    message: 'What will be the errors file?',
    initialValue: 'errors.csv',
    placeholder: "Enter csv file",
    validate: (value) => {
        if (!value.toLowerCase().endsWith('.csv')) {
            return "Must be a csv file."
        }
    }
});

if (isCancel(errors)) {
    cancel('Operation cancelled.');
    process.exit(0);
}

outro("Thanks for using our app!")