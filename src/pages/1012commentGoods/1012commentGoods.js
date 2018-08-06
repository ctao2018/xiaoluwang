const content = require('./1012commentGoods.ejs');
const botSource = require('../../plugin/1012commentGoods.ejs')
const layout  = require('../../template/layout.js');
const pf      = {
  pageTitle: '评价晒单',
  rtBtn1   : 'btn-string',
  rtStr1   : '提交'
}


module.exports = layout.init({
  pf
}).run(content(),'',botSource());