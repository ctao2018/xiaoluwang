const content = require('./108myPoints.ejs');
const botSource = require('../../plugin/108myPoints.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '我的积分',
  headerBg: false
}


module.exports = layout.init({
  pf
}).run(content(),'',botSource());