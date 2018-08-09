const content = require('./112rechargeRecord.ejs');
const botSource = require('../../plugin/112rechargeRecord.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '充值记录',
  showTitle: false,
  navList  : true
}


module.exports = layout.init({
  pf
}).run(content(),'',botSource());