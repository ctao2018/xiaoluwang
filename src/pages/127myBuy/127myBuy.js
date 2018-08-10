const content = require('./127myBuy.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '我的回购',
  rtBtn1: 'btn-string',
  rtStr1: '明细',
  
}


module.exports = layout.init({
  pf
}).run(content({
    
}), '', );