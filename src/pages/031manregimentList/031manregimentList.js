const content = require('./031manregimentList.ejs');
const botSource = require('../../plugin/031manregimentList.ejs');
const layout = require('../../template/layout.js');
const regimentItem = require('../../template/regimentItem.ejs');
const pf = {
  pageTitle: '达人带团',
  showTitle: false,
  search: 'nav-search',
  searchStr: '请输入关键字',
  rtBtn1: 'nav-msg-l',
  rtStr1: '消息',
}


module.exports = layout.init({
  pf
}).run(content({
  regimentItem: regimentItem()
}), '', botSource());