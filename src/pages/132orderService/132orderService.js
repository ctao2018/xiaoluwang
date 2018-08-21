const content = require('./132orderService.ejs');
const layout = require('../../template/layout.js');
const botSource = require('../../plugin/132orderService.ejs');
const serviceItem = require('../../template/service-item.ejs');
const pf = {
  pageTitle: '订单中心',
  isFoot: true,
  footType: 'doyen',
const pf = {
  pageTitle: '订单中心',
}


module.exports = layout.init({
  pf
}).run(content({
  serviceItem,
}), '', botSource());
