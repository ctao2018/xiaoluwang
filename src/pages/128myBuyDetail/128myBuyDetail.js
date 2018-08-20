const content = require('./128myBuyDetail.ejs');
const layout = require('../../template/layout.js');
const botSource = require('../../plugin/128myBuyDetail.ejs');
const pf = {
  pageTitle: '我的回购',
  rtBtn1: 'btn-string',
  rtStr1: '筛选',
  
}


module.exports = layout.init({
  pf
}).run(content({
    
}), '', botSource());