const content = require('./031manregimentList.ejs');
const botSource = require('../../plugin/031manregimentList.ejs');
const layout = require('../../template/layout.js');
const scrollWall = require('../../template/scrollWall.ejs');
const pf = {
  pageTitle: '达人带团31',
  rtBtn1: 'nav-msg',
  rtStr1: '消息',
}


module.exports = layout.init({
  pf
}).run(content(), '', botSource());