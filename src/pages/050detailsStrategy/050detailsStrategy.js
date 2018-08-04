const content = require('./050detailsStrategy.ejs');
const botSource = require('../../plugin/050detailsStrategy.ejs');
const layout = require('../../template/layout.js');
const scrollWall = require('../../template/scrollWall.ejs');
const pf = {
  pageTitle: '游玩攻略',
}


module.exports = layout.init({
  pf
}).run(content({
    scrollWall: scrollWall({
        w: 750,
        h: 320
    })
}), '', botSource());