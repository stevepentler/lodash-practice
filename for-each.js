"use strict";

const _ = require('lodash');

function sizeTowns(townData) {
  return _.forEach(townData, sizeAttribute);
}
function sizeAttribute(town) {
  let population = town.population;
  console.log("town", town.population);
  if (population > 1) {
    town.size = "big";
  } else if (population < 0.5) {
    town.size = "small";
  } else {
    town.size = "med";
  }
}

module.exports = sizeTowns;