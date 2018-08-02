const content = require('./075editAge.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '年龄',
}

module.exports = layout.init({
  pf
}).run(content());