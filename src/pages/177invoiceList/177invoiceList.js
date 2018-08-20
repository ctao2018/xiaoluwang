const content = require('./177invoiceList.ejs');
const bot = require('../../plugin/177invoiceList.ejs');
const layout  = require('../../template/layout.js');
const pf      = {
  pageTitle: '发票列表',
  rtBtn1   : 'btn-string invoice-manage',
  rtStr1   : '管理',
  rtBtn2   : 'btn-string invoice-del',
  rtStr2   : '删除'
}


module.exports = layout.init({
  pf
}).run(content({
}),'',bot());