const content = require('./124verifyingBank.ejs');
const botSource = require('../../plugin/124verifyingBank.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '验证银行卡信息',
}


module.exports = layout.init({
  pf
}).run(content(),'',botSource());