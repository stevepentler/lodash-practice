'use strict';

var _ = require('lodash');

function sort(articles) {
  return _.sortBy(articles, 'quantity').reverse()
}

module.exports = sort;