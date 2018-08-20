const content = require('./150lineCenterApply.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '线路编辑',
  rtBtn1: 'btn-string',
  rtStr1: '完成',
}


module.exports = layout.init({
  pf
}).run(content({
    
}), '', );