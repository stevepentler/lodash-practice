"use strict";

const _ = require("lodash");

function chained(words) {
  return _.chain(words).sortBy().map(function(word) { return word.toUpperCase() + "CHAINED"} );
}

module.exports = chained;