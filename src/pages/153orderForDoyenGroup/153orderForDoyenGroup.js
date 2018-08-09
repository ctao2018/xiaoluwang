const content   = require('./153orderForDoyenGroup.ejs');
const layout    = require('../../template/layout.js');
const botSource = require('../../plugin/153orderForDoyenGroup.ejs');
const orderItem    = require('../../template/order-list-item.ejs');
const pf        = {
  pageTitle: '订单中心',
  rtBtn1:'btn-string',
  rtStr1:'组团情况',
  isFoot:true,
  footType:'doyen'
}


module.exports = layout.init({
  pf
}).run(content({
  orderItem
}),'',botSource());