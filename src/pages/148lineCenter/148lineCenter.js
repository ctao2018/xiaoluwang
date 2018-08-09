const content = require('./148lineCenter.ejs');
const layout = require('../../template/layout.js');
const botSource = require('../../plugin/148lineCenter.ejs');
const lineCenterItem = require('../../template/line-center-item.ejs');
const pf = {
  pageTitle: '线路中心',
  rtBtn1: 'btn-string',
  rtStr1: '添加',
  isFoot: true,
  footType: 'doyen',
}


module.exports = layout.init({
  pf
}).run(content({
    lineCenterItem,
}), '', botSource());