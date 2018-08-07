const content = require('./175addVisaInfo.ejs');
const botSource = require('../../plugin/175addVisaInfo.ejs')
const layout  = require('../../template/layout.js');
const tcm = require('../../template/title-count-more.ejs');
const pf      = {
  pageTitle: '添加签证',
  ltBtn1   : 'btn-string',
  ltStr1   : '取消',
  rtBtn1   : 'btn-string',
  rtStr1   : '保存'
}


module.exports = layout.init({
  pf
}).run(content({
  tcm
}),'',botSource());