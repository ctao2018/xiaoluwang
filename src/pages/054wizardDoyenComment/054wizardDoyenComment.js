const content = require('./054wizardDoyenComment.ejs');
const botSource = require('../../plugin/054wizardDoyenComment.ejs');
const layout = require('../../template/layout.js');
const comment = require('../../template/comment-item.ejs');
const itemWithPic = require('../../template/item-with-pic.ejs');
const dialogForGuide = require('../../template/dialog-guide-service.ejs');
const pf = {
  pageTitle: '点评',
  rtBtn1: 'nav-menu',
  rtStr1: '菜单',
}


module.exports = layout.init({
  pf
}).run(content({
  comment,
  dialogForGuide: dialogForGuide({
    itemWithPic: itemWithPic
  })
}), '', botSource());