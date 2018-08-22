const content = require('./123addBankCard.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '我的银行卡',
}


module.exports = layout.init({
  pf
}).run(content());