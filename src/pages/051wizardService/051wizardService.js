const content = require('./051wizardService.ejs');
const botSource = require('../../plugin/051wizardService.ejs');
const layout = require('../../template/layout.js');
const scrollWall = require('../../template/scrollWall.ejs');
const pf = {
  pageTitle: '向导服务',
}


module.exports = layout.init({
  pf
}).run(content({
  scrollWall: scrollWall({
    w: 750,
    h: 320
  })
}), '', botSource());