const content = require('./146sellDetail.ejs');
const botSource = require('../../plugin/146sellDetail.ejs');
const layout = require('../../template/layout.js');
const scrollWall = require('../../template/scrollWall.ejs');
const pf = {
    pageTitle: '合销产品详情',
  showTitle: false,
  headerBg: 'bg-opacity',
  ltBtn1: 'nav-op-back',
  rtBtn1: 'nav-op-share',
  rtStr1: '分享'
}


module.exports = layout.init({
  pf
}).run(content({
    scrollWall: scrollWall({
        w: 750,
        h: 450
      }),
}), '', botSource());