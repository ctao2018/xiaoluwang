const content   = require('./169serviceDynamics.ejs');
const layout    = require('../../template/layout.js');
const botSource = require('../../plugin/169serviceDynamics.ejs');
const orderItem    = require('../../template/order-list-item.ejs');
const pf        = {
  pageTitle: '服务动态',
}


module.exports = layout.init({
  pf
}).run(content({
  orderItem
}),'',botSource());