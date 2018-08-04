const content   = require('./095orderList.ejs');
const layout    = require('../../template/layout.js');
const botSource = require('../../plugin/095orderList.ejs');
const orderItem    = require('../../template/order-list-item.ejs');
const pf        = {
  pageTitle: '商品订单',
}


module.exports = layout.init({
  pf
}).run(content({
  orderItem
}),'',botSource());