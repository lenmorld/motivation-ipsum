# Motivation-Ipsum

[![Build Status](https://travis-ci.com/lenmorld/motivation-ipsum.svg?branch=master)](https://travis-ci.com/lenmorld/motivation-ipsum)

> Use some motivational quotes instead of Lorem Ipsum!

Inspired and initial version cloned from https://github.com/SaraVieira/mother

Quotes from here: https://github.com/JamesFT/Database-Quotes-JSON

## CLI

```
$ npm install --global motivation-ipsum
```

```
$ motivation-ipsum --help

	Usage
	  $ motivation-ipsum

	Examples
     motivation-ipsum
	  "A quote"
     by A Famous Person
```

## JS - Node or frontend

```
const motivation_ipsum = require('motivation-ipsum');

const quote = motivation_ipsum();

console.log("======= MOTIVATION =======");
console.log(quote.quoteText);
console.log(`by ${quote.quoteAuthor}`);
```

## License

WTFPL © [Lenmor Ld](http://lenmorld.github.io)
