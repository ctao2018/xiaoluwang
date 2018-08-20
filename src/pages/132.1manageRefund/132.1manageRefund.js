const content = require('./132.1manageRefund.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '申请退款',
}


module.exports = layout.init({
  pf
}).run(content({
  
}), '',);