const content = require('./134productAdded.ejs');
const layout = require('../../template/layout.js');
const botSource = require('../../plugin/134productAdded.ejs');
const productList = require('../../template/product-list.ejs');
const pf = {
  pageTitle: '服务产品',
  rtBtn1: 'btn-string',
  rtStr1: '添加',
  isFoot: true,
  footType: 'doyen',
}


module.exports = layout.init({
  pf
}).run(content({
    productList,
}), '', botSource());