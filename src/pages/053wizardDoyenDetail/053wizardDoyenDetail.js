const content = require('./053wizardDoyenDetail.ejs');
const botSource = require('../../plugin/053wizardDoyenDetail.ejs');
const layout = require('../../template/layout.js');
const tcm = require('../../template/title-count-more.ejs');
const comment = require('../../template/comment-item.ejs');
const guideRecord = require('../../template/guide-record-item.ejs');
const pf = {
  pageTitle: '向导服务达人详情',
  showTitle: false,
  headerBg: 'bg-opacity',
  ltBtn1: 'nav-op-back',
  rtBtn1: 'nav-op-share',
  rtStr1: '分享',
  rtBtn2: 'nav-op-msg',
  rtStr2: '消息',
}


module.exports = layout.init({
  pf
}).run(content({
  tcm,
  comment,
  guideRecord
}), '', botSource());