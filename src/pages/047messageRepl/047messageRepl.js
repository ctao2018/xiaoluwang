
const content = require('./047messageRepl.ejs');
const layout = require('../../template/layout.js');
const pf = {
    pageTitle: '添加文字',
    rtBtn1: 'btn-string',
    rtStr1: '发布',
  }


module.exports = layout.init({
    pf
}).run(content());