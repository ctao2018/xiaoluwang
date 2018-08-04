const content   = require('./091feedback.ejs');
const layout    = require('../../template/layout.js');
const pf        = {
  pageTitle: '意见反馈',
}


module.exports = layout.init({
  pf
}).run(content());