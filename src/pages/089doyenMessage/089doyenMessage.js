const content = require('./089doyenMessage.ejs');
const layout  = require('../../template/layout.js');
const pf      = {
  pageTitle: '达人消息',
}

module.exports = layout.init({
  pf
}).run(content());