const content = require('./index.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '小鹿网',
  isFoot: false,
  rtBtn1:false,
  rtStr1:'保存'
}


module.exports = layout.init({
  pf
}).run(content({
  pageTitle: pf.pageTitle
}));