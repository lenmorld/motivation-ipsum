const meow = require('meow')
const motivate = require('.')
const chalk = require('chalk')
const log = console.log

const cli = meow(`
  Usage
   $ motivate-me

   Example
    $ motivate-me
    "Some quote" by some author
`)

motivate(cli.flags, (quote) => {
  log(`${chalk.blue.bold(quote.body)}`)
  log(`by ${chalk.gray(quote.author)}
`)
});
