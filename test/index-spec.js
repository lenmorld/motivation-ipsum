var assert = require('assert');
var motivate = require('../index');
describe('motivate', function () {
   it('returns a string ', function () {
      motivate({}, (quote) => {
         assert.ok(quote.body);
      });
   });
});
