var _ = require("lodash");

/**
 * Generates a int64 as a string in JSON Schema
 *
 * @method     int64
 * @return     {string}  - a random date as a string.
 */
function int64() {
  return _.random(-20000, 100000).toFixed();
}

module.exports = int64;
