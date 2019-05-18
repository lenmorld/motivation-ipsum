#!/usr/bin/env node
'use strict';

const meow = require('meow')
const motivate = require('.')
const chalk = require('chalk')
const log = console.log

const cli = meow(`
  Usage
   $ motivate

   Example
    $ motivate
    "Some quote" by some author
`)

const quote = motivate();

log(`${chalk.blue.bold(quote.quoteText)}`);
log(`by ${chalk.gray(quote.quoteAuthor)}`);


// motivate(cli.flags, (quote) => {
//   log(`${chalk.blue.bold(quote.body)}`)
//   log(`by ${chalk.gray(quote.author)}
// `)
// });
