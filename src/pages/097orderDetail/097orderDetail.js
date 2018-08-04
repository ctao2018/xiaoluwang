const content   = require('./097orderDetail.ejs');
const layout    = require('../../template/layout.js');
const orderItem    = require('../../template/order-list-item.ejs');
const pf        = {
  pageTitle: '订单详情',
}


module.exports = layout.init({
  pf
}).run(content({
  orderItem
}));