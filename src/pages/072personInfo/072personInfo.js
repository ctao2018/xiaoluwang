const content = require('./072personInfo.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '个人信息',
}

module.exports = layout.init({
  pf
}).run(content());