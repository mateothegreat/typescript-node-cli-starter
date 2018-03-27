"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander = require("commander");
class App {
    constructor() {
        this.program = commander;
        this.package = require('../../package.json');
    }
    initialize() {
        this.program.version(this.package.version);
        this.program
            .command('run <somearg> [optional]')
            .description('run with one optional and one required arguments')
            .option('-d, --dryrun', 'Generate message but do not send.')
            .option('-v, --verbose', 'Output more verbosity (debug information).')
            .action((somearg, optional, cmd) => {
            console.log('run something');
            console.log(somearg);
            console.log(optional);
        });
        this.program.on('--help', function () {
            console.log('');
            console.log('  Examples:');
            console.log('');
            console.log('    $ custom-help --help');
            console.log('    $ custom-help -h');
            console.log('');
        });
        this.program.parse(process.argv);
    }
}
exports.App = App;
let app = new App();
app.initialize();
