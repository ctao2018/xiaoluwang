const content = require('./037reportDetail.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '报团明细'
}


module.exports = layout.init({
  pf
}).run(content())