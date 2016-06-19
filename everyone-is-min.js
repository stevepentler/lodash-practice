"use strict";

const _ = require('lodash');

function gaugeTemp(temp) {
  return temp > 19;
}

function sortTowns(towns) {
  let type = {
    hot: [],
    warm: []
  }

  _.forEach(towns, function(town, townName) {
    console.log("townName", townName)
    console.log("town", town)
    if (_.every(town, gaugeTemp)) {
      type.hot.push(townName);
    } else if (_.some(town, gaugeTemp)) {
      type.warm.push(townName);
    }
  });

  return type;
};

module.exports = sortTowns;