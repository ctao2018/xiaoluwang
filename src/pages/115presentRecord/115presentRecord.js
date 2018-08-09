const content = require('./115presentRecord.ejs');
const botSource = require('../../plugin/115presentRecord.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '提现记录',
}


module.exports = layout.init({
  pf
}).run(content(),'',botSource());