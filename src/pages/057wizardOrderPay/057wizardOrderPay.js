const content = require('./057wizardOrderPay.ejs');
const botSource = require('../../plugin/057wizardOrderPay.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '支付订单',
}


module.exports = layout.init({
  pf
}).run(content(), '', botSource());