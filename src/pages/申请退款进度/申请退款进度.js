const content = require('./申请退款进度.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '退款详情',
}


module.exports = layout.init({
  pf
}).run(content());