#!/usr/bin/env node
'use strict';

const program = require('commander');
const chalk = require('chalk');
const exec = require('child_process').exec;
const pkg = require('./package.json');

let listFunction = (directory, options) => {
  const cmd = 'ls';

  // array holding any params passed by user
  let params = [];

  // check whether short-hand or long-hand flags pased
  if (options.all) {
    params.push('a');
  }
  if (options.long) {
    params.push('l');
  }

  // variable holding full shell command
  let fullCommand = params.length
                    ? cmd + ' -' + params.join('')
                    : cmd;

  // check if optional directory value passed
  if (directory) {
    fullCommand += ' ' + directory;
  };
  
  // method signature from Node docs
  let execCallback = (error, stdout, stderr) => {
    if (error) console.log(chalk.red.bold.underline('exec error: ') + error);
    if (stdout) console.log(chalk.green.bold.underline('Result: ') + stdout);
    if (stderr) console.log(chalk.red('shell error: ') + stderr);
  };

  exec(fullCommand, execCallback);

}

program
  .version('0.1.0')
  .command('list [directory]')
  .description('List files and folders')
  .option('-a, --all', 'List all files and folders')
  .option('-l, --long', '')
  .action(listFunction);

program.parse(process.argv);

// show help if called with no args
if (program.args.length === 0) {
  program.help();
}
