var _ = require("lodash");

/**
 * Generates a int64 as a string in JSON Schema
 *
 * @method     uint64
 * @return     {string}  - a random date as a string.
 */
function uint64() {
  return _.random(0, 100000).toFixed();
}

module.exports = uint64;
