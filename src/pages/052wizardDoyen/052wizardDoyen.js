const content = require('./052wizardDoyen.ejs');
const botSource = require('../../plugin/052wizardDoyen.ejs');
const layout = require('../../template/layout.js');
const wizardItem = require('../../template/wizardItem.ejs');
const pf = {
  pageTitle: '向导服务达人列表',
  showTitle: false,
  search: 'nav-search',
  searchStr: '请输入关键字',
  rtBtn1: 'nav-msg-l',
  rtStr1: '消息',
}


module.exports = layout.init({
  pf
}).run(content({
  wizardItem: wizardItem()
}), '', botSource());