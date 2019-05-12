#!/usr/bin/env node
const meow = require('meow')
const motivate = require('.')
// const chalk = require('chalk')
const log = console.log

const cli = meow(`
  Usage
   $ motivate-me

   Examples
    $ motivate-me --code
      Code faster!
    $ motivate-me
      A random one
`)

log(motivate(cli.flags));

// log(`
// ${chalk.gray.bold('Title')}
// ${chalk.red(mother(cli.flags).title)}
// `)
// log(`
// ${chalk.gray.bold('Review')}
// ${chalk.green(mother(cli.flags).content)}
// `)
// log(`
// ${chalk.gray.bold('Rating')}
// ${chalk.yellow(mother(cli.flags).rating)}${chalk.yellow('/10')}
// `)
