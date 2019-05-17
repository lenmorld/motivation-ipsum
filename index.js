const axios = require('axios');

const fetchFromQuotes = () => {
  return new Promise((resolve, reject) => {
    // http://quotes.rest/qod.json
    axios.get('https://favqs.com/api/qotd').then(res => {
      resolve(res.data.quote);
    }).catch(err => {
      resolve({
        author: "Les Brown",
        body: "Shoot for the moon and if you miss you will still be among the stars.",
      });
    });
  });
};

module.exports = (_opts, cb) => {
  const opts = _opts || {}

  if (opts.category) {
    // coming up
  }

  fetchFromQuotes().then(quote => {
    cb(quote);
  });
}
