const content = require('./071accountSetting.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '设置',
}

module.exports = layout.init({
  pf
}).run(content());