const content = require('./149lineCenterEdit.ejs');
const layout = require('../../template/layout.js');
const lineCenterItem = require('../../template/line-center-item.ejs');
const pf = {
  pageTitle: '线路编辑',
  rtBtn1: 'btn-string',
  rtStr1: '完成',
}


module.exports = layout.init({
  pf
}).run(content({
    lineCenterItem,
}), '', );