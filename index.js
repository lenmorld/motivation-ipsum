#!/usr/bin/env node

const quotesArray = require('./quotes.json');

const getRandomElemFromArray = (array) => {
  const randomIndex = Math.floor(Math.random() * (array.length - 1));
  return array[randomIndex];
};

const getQuote = (_opts) => {
  const opts = _opts || {};
  if (opts.category) {
    // coming up
  }

  if (opts.author) {
    // coming up
  }
  return getRandomElemFromArray(quotesArray);
}

module.exports = getQuote;
