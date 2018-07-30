const content = require('./062haltDynamic.ejs');
const botSource = require('../../plugin/062haltDynamic.ejs');
const layout = require('../../template/layout.js');
const halt = require('../../template/halt-item.ejs');
const pf = {
  pageTitle: '驻足列表',
}


module.exports = layout.init({
  pf
}).run(content({
  halt
}), '', botSource());