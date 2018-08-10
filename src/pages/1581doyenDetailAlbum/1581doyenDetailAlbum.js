const content = require('./1581doyenDetailAlbum.ejs');
const layout = require('../../template/layout.js');
const botSource = require('../../plugin/1581doyenDetailAlbum.ejs');
const orderItem = require('../../template/order-list-item.ejs');
const pf = {
  pageTitle: '达人详情相册',
  rtBtn1: 'btn-string',
  rtStr1: '添加'
}


module.exports = layout.init({
  pf
}).run(content({
  orderItem
}), '', botSource());