const content = require('./177invoiceList.ejs');
const layout  = require('../../template/layout.js');
const tcm = require('../../template/title-count-more.ejs');
const pf      = {
  pageTitle: '发票列表',
  rtBtn1   : 'btn-string',
  rtStr1   : '管理'
}


module.exports = layout.init({
  pf
}).run(content({
}));