const content = require('./040missionDetails.ejs');
const botSource = require('../../plugin/040missionDetails.ejs');
const layout = require('../../template/layout.js');
const scrollWall = require('../../template/scrollWall.ejs');
const mandetails = require('../../template/man-details-item.ejs');
const travels = require('../../template/travels-item.ejs');
const latestPresence = require('../../template/latest-presence-item.ejs');

const pf = {
  pageTitle: '带团达人详情',
  showTitle: false,
  headerBg: 'bg-opacity',
  ltBtn1: 'nav-op-back',
  rtBtn1: 'nav-op-share',
  rtStr1: '分享'
}

module.exports = layout.init({
  pf
}).run(content({
  mandetails,
  travels,
  latestPresence,
  scrollWall: scrollWall({
    w: 750,
    h: 450
  })
}),'', botSource());