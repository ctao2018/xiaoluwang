const content = require('./117sharingRecords.ejs');
const layout = require('../../template/layout.js');
const funs = require('../../plugin/117sharingRecords.ejs')
const scrollWall = require('../../template/scrollWall.ejs');
const pf = {
  pageTitle: '分享专区',
  rtBtn1: 'btn-string',
  rtStr1: '分享记录'
}


module.exports = layout.init({
    pf
}).run(content({
  scrollWall: scrollWall({
    w: 750,
    h: 320
  })
}),'',funs());