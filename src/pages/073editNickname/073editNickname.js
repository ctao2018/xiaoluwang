const content = require('./073editNickname.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '修改昵称',
}

module.exports = layout.init({
  pf
}).run(content());