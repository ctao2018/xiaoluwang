const content   = require('./158personalInfo.ejs');
const botSource = require('../../plugin/158personalInfo.ejs');
const layout    = require('../../template/layout.js');
const pf        = {
  pageTitle: '个人信息'
}


module.exports = layout.init({
  pf
}).run(content(),'',botSource());