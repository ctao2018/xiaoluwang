const content = require('./064accountNoSign.ejs');
const botSource = require('../../plugin/064accountNoSign.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '小鹿网',
  showTitle: false,
  isFoot: true,
  headerBg: 'bg-opacity',
  ltBtn1: 'nav-scan',
  ltStr1: '扫描',
  rtBtn1: 'nav-set',
  rtStr1: '设置',
  rtBtn2: 'nav-msg-l',
  rtStr2: '消息',
}


module.exports = layout.init({
  pf
}).run(content(), '', botSource());