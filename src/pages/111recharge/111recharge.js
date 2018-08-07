const content = require('./111recharge.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '充值',
}


module.exports = layout.init({
  pf
}).run(content());