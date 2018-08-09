const content = require('./118shareArea.ejs');
const botSource = require('../../plugin/118shareArea.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '分享记录',
}


module.exports = layout.init({
  pf
}).run(content(),'',botSource());