const content = require('./060wizardDoyenInfo.ejs');
const botSource = require('../../plugin/060wizardDoyenInfo.ejs');
const layout = require('../../template/layout.js');
const scrollWall = require('../../template/scrollWall.ejs');
const tcm = require('../../template/title-count-more.ejs');
const itemWithPic = require('../../template/item-with-pic.ejs');
const haltItem = require('../../template/halt-item.ejs');
const travelsNote = require('../../template/travels-note-item.ejs');
const pf = {
  pageTitle: '向导达人详情',
  showTitle: false,
  headerBg: 'bg-opacity',
  ltBtn1: 'nav-op-back',
  ltStr1: '返回',
  rtBtn1: 'nav-op-share',
  rtStr1: '分享',
}


module.exports = layout.init({
  pf
}).run(content({
  tcm,
  itemWithPic,
  haltItem,
  travelsNote,
  scrollWall: scrollWall({
    w: 750,
    h: 450
  })
}), '', botSource());