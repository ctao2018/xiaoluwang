const content = require('./030manRegiment.ejs');
const botSource = require('../../plugin/030manRegiment.ejs');
const layout = require('../../template/layout.js');
const scrollWall = require('../../template/scrollWall.ejs');
const pf = {
  pageTitle: '达人带团',
}


module.exports = layout.init({
  pf
}).run(content({
    scrollWall: scrollWall({
        w: 750,
        h: 320
    })
}), '', botSource());