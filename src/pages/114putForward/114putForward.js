const content = require('./114putForward.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '提现',
}


module.exports = layout.init({
  pf
}).run(content());