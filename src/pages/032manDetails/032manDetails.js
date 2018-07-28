const content = require('./032manDetails.ejs');
const botSource = require('../../plugin/032manDetails.ejs');
const layout = require('../../template/layout.js');
const scrollWall = require('../../template/scrollWall.ejs');
const tcm = require('../../template/title-count-more.ejs');
const mandetails = require('../../template/mandetails-item.ejs');
const guideRecord = require('../../template/man-details-item.ejs');
const itemWithPic = require('../../template/item-with-pic.ejs');
const dialogForGuide = require('../../template/dialog-guide-service.ejs');
const pf = {
  pageTitle: '达人带团详情',
  showTitle: false,
  headerBg: 'bg-opacity',
  ltBtn1: 'nav-op-back',
  rtBtn1: 'nav-op-share',
  rtStr1: '分享'
}

module.exports = layout.init({
  pf
}).run(content({
  tcm,
  mandetails,
  guideRecord,
  itemWithPic,
  scrollWall: scrollWall({
    w: 750,
    h: 450
  }),
  dialogForGuide: dialogForGuide({
    itemWithPic: itemWithPic
  })
}),'', botSource());