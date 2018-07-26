const content = require('./029photoRelease.ejs');
const botSource = require('../../plugin/029photoRelease.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '鹿友驻足',
}


module.exports = layout.init({
  pf
}).run(content(), '', botSource());