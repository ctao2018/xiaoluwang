const content = require('./025standingBack.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '驻足回复',
}


module.exports = layout.init({
  pf
}).run(content());