const content = require('./144sellScreen.ejs');
const botSource = require('../../plugin/144sellScreen.ejs');
const layout = require('../../template/layout.js');
const scrollWall = require('../../template/scrollWall.ejs');
const sellItem = require('../../template/sell-item.ejs');
const pf = {
  pageTitle: '合销产品筛选',
  showTitle: false,
  search: 'nav-search',
  searchStr: '商品关键字/店铺名称',
  rtBtn1: 'nav-menu',
  rtStr1: '菜单',
}


module.exports = layout.init({
  pf
}).run(content({
    scrollWall: scrollWall({
        w: 750,
        h: 320
    }),
    sellItem:sellItem()
}), '', botSource());