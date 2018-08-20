const content   = require('./105eidtBarterExpress.ejs');
const botSource = require('../../plugin/105eidtBarterExpress.ejs');
const layout    = require('../../template/layout.js');
const orderItem    = require('../../template/order-list-item.ejs');
const pf        = {
  pageTitle: '填写退货物流',
}


module.exports = layout.init({
  pf
}).run(content({
  orderItem
}),'',botSource());