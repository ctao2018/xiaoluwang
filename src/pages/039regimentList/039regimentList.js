const content = require('./039regimentList.ejs');
const botSource = require('../../plugin/039regimentList.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '带团达人',
  showTitle: false,
  search: 'nav-search',
  searchStr: '请输入关键字',
  rtBtn1: 'nav-msg-l',
  rtStr1: '消息',
}


module.exports = layout.init({
  pf
}).run(content(), '', botSource());