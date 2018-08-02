const content = require('./088messageBroadcast.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '消息设置',
}

module.exports = layout.init({
  pf
}).run(content());