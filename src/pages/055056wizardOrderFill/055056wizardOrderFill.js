const content = require('./055056wizardOrderFill.ejs');
const botSource = require('../../plugin/055056wizardOrderFill.ejs');
const layout = require('../../template/layout.js');
const tcm = require('../../template/title-count-more.ejs');
const pf = {
  pageTitle: '订单填写',
}


module.exports = layout.init({
  pf
}).run(content({
  tcm,
}), '', botSource());