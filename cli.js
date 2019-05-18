#!/usr/bin/env node
'use strict';

const meow = require('meow')
const motivate = require('.')
const chalk = require('chalk')
const log = console.log

const cli = meow(`
  Usage
   $ motivation-ipsum

   Example
    $ motivation-ipsum
    "Some quote" by some author
`)

const quote = motivate();

log(`${chalk.blue.bold(quote.quoteText)}`);
log(`by ${chalk.gray(quote.quoteAuthor)}`);
