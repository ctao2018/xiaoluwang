const content   = require('./090systemMessage.ejs');
const botSource = require('../../plugin/090systemMessage.ejs');
const layout    = require('../../template/layout.js');
const pf        = {
  pageTitle: '我的消息',
}


module.exports = layout.init({
  pf
}).run(content(), '', botSource());