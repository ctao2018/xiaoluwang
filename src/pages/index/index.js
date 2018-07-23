const content = require('./index.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '小鹿网',
  isFoot: false,
  // headerBg: 'bg-opacity',
  // ltBtn1: 'back-to',
  // ltBtn1: 'nav-op-back',
  // ltBtn1: 'nav-scan',
  // ltStr1: '扫描',
  // ltBtn1: 'nav-close',
  // ltStr1: '关闭',
  // ltBtn1: 'nav-addr2',
  // ltStr1: '深圳',
  // ltBtn2: 'nav-addr',
  // ltStr2: '深圳',
  // search: 'nav-search',
  // search: 'nav-search-white',
  // rtBtn1: 'nav-op-share',
  // rtStr1: '分享',
  // rtBtn1: 'nav-share',
  // rtStr1: '分享',
  // rtBtn1: 'btn-string',
  // rtStr1: '保存',
  // rtBtn1: 'nav-msg',
  // rtStr1: '消息',
  // rtBtn1: 'nav-set',
  // rtStr1: '设置',
  // rtBtn2: 'nav-msg-l',
  // rtStr2: '消息',
  // rtBtn1: 'nav-card',
  // rtStr1: '购物车',
  // rtBtn2: 'nav-menu',
  // rtStr2: '菜单',
  // showTitle: false
}


module.exports = layout.init({
  pf
}).run(content());