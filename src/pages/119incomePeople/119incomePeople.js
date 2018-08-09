const content = require('./119incomePeople.ejs');
const layout = require('../../template/layout.js');
const botSource = require('../../plugin/119incomePeople.ejs');
const pf = {
  pageTitle: '达人收益',
  headerBg: false
}


module.exports = layout.init({
  pf
}).run(content(),'',botSource());