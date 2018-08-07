const content = require('./110myBalance.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '我的余额',
  headerBg: false
}


module.exports = layout.init({
  pf
}).run(content());