const content   = require('./161indeedIdent.ejs');
const layout    = require('../../template/layout.js');
const pf        = {
  pageTitle: '实地认证'
}


module.exports = layout.init({
  pf
}).run(content());