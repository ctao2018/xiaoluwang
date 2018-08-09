const content   = require('./155wayAndService.ejs');
const layout    = require('../../template/layout.js');
const pf        = {
  pageTitle: '报团明细'
}


module.exports = layout.init({
  pf
}).run(content());