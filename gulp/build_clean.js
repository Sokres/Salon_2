const cleans = require ('del');

module.exports = function clean() {
  return cleans("build/@_*.html");
}
