const content = require('./028choosePhoto.ejs');
const layout = require('../../template/layout.js');
const funs = require('../../plugin/028choosePhoto.ejs')
const pf = {
    pageTitle: '发布驻足',
    rtBtn1: 'btn-string',
    rtStr1: '发布',
  }


module.exports = layout.init({
    pf
}).run(content(),'',funs());