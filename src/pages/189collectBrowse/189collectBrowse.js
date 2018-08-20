const content = require('./189collectBrowse.ejs');
const layout = require('../../template/layout.js');
const botSource = require('../../plugin/189collectBrowse.ejs');
const collectList = require('../../template/collect-list.ejs');
const storeList = require('../../template/store-list.ejs');
const pf = {
  pageTitle: '收藏/浏览',
  rtBtn1: 'btn-string',
  rtStr1: '编辑',
}


module.exports = layout.init({
  pf
}).run(content({
    collectList,
    storeList,
}), '', botSource());