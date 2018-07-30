const content = require('./061bandRecord.ejs');
const botSource = require('../../plugin/061bandRecord.ejs');
const layout = require('../../template/layout.js');
const iwp = require('../../template/item-with-pic.ejs');
const pf = {
  pageTitle: '带团记录',
}


module.exports = layout.init({
  pf
}).run(content({
  iwp
}), '', botSource());