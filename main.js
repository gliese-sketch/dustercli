const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv))
        .option('input', {
            alias: 'i',
            type: 'string',
            description: 'What is your input.csv file?'
        })
        .option('output', {
            alias: 'o',
            type: 'string',
            description: 'What will be the ouput.csv file?'
        })
        .option('errors', {
            alias: 'e',
            type: 'string',
            description: 'What will be the errors.csv file?'
        })
        .version('1.0.0')
        .alias('v', 'version')
        .help("h")
        .alias('h', 'help')
        .parse()

console.log(argv.input, argv.output, argv.errors)