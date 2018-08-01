const content = require('./044ravelsList.ejs');
const botSource = require('../../plugin/044ravelsList.ejs');
const layout = require('../../template/layout.js');

const pf = {
  pageTitle: '达人游记'
}

module.exports = layout.init({
  pf
}).run(content(),'', botSource());