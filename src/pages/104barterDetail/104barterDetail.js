const content   = require('./104barterDetail.ejs');
const layout    = require('../../template/layout.js');
const orderItem    = require('../../template/order-list-item.ejs');
const pf        = {
  pageTitle: '换货详情',
}


module.exports = layout.init({
  pf
}).run(content({
  orderItem
}));