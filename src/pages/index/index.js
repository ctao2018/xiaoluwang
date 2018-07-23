const content = require('./index.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '向阳宝贝',
  isFoot: true
}


module.exports = layout.init({
  pf
}).run(content({
  pageTitle: pf.pageTitle
}));