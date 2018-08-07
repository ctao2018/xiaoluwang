const content = require('./178addInvoice.ejs');
const botSource = require('../../plugin/178addInvoice.ejs');
const layout  = require('../../template/layout.js');
const tcm = require('../../template/title-count-more.ejs');
const pf      = {
  pageTitle: '新增发票',
  ltBtn1   : 'btn-string',
  ltStr1   : '取消',
  rtBtn1   : 'btn-string',
  rtStr1   : '保存'
}


module.exports = layout.init({
  pf
}).run(content(),'',botSource());