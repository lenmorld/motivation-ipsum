# mother [![Build Status](https://travis-ci.org/saravieira/mother.svg?branch=master)](https://travis-ci.org/saravieira/mother)

> Why use lorem when you can use random reviews from mother! ?

Inspired by Javi Velasco and all the Agent Conf Crew.

I cannot recommend this module though

## Install

```
$ yarn add mother-exclamation-mark
```

## Usage

```js
const mother = require('mother');

mother();
//=> mother review

mother({ bad: true });
//=> bad mother review
```

## API

### mother({options})

#### options

##### good

Type: `boolean`<br>
Default: `false`

Returns a good review for mother!

##### bad

Type: `boolean`<br>
Default: `false`

Returns a good review for mother!

## CLI

```
$ yarn global add mother-exclamation-mark
```

```
$ mother --help

	Usage
	  $ mother

	Examples
	  $ mother --good
	  a bad review
	  $ mother --bad
	  a good review
```

## License

WTFPL © [Sara Vieira](http://iamsaravieira.com)