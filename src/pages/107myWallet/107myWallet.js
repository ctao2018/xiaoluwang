const content = require('./107myWallet.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '我的钱包',
  headerBg: false
}


module.exports = layout.init({
  pf
}).run(content());