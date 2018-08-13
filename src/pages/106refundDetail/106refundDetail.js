const content   = require('./106refundDetail.ejs');
const layout    = require('../../template/layout.js');
const orderItem    = require('../../template/order-list-item.ejs');
const pf        = {
  pageTitle: '退款详情',
}


module.exports = layout.init({
  pf
}).run(content({
  orderItem
}));