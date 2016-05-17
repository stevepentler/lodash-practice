var _ = require("lodash");

function filter(people) {
  return _.filter( people, { active: true })
};

module.exports = filter;