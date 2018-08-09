const content   = require('./1531DoyenGroupDetail.ejs');
const layout    = require('../../template/layout.js');
const botSource = require('../../plugin/1531DoyenGroupDetail.ejs');
const orderItem    = require('../../template/order-list-item.ejs');
const pf        = {
  pageTitle: '组团情况',
  isFoot:true,
  footType:'doyen'
}


module.exports = layout.init({
  pf
}).run(content({
  orderItem
}),'',botSource());