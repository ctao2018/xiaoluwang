const content = require('./112rechargeRecord.ejs');
const botSource = require('../../plugin/112rechargeRecord.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '充值记录',
}


module.exports = layout.init({
  pf
}).run(content(),'',botSource());