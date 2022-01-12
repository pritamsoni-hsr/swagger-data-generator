'use strict';

var jsf = require('json-schema-faker');
var generators = require('./generators/generators.js');

jsf.format('date', generators.fullDate);
jsf.format('byte', generators.byte);
jsf.format('int64', generators.int64);
jsf.format('uint64', generators.unit64);
jsf.format('binary', generators.binary);
jsf.format('password', generators.password);

module.exports = jsf;
