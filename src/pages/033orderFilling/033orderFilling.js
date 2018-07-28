const content = require('./033orderFilling.ejs');
const botSource = require('../../plugin/033orderFilling.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '订单信息填写',
}


module.exports = layout.init({
  pf
}).run(content(),'',botSource())