const content   = require('./申请退款.ejs');
const layout    = require('../../template/layout.js');
const botSource = require('../../plugin/申请退款.ejs');
const orderItem    = require('../../template/order-list-item.ejs');
const pf        = {
  pageTitle: '申请退款',
}


module.exports = layout.init({
  pf
}).run(content({
  orderItem
}),'',botSource());