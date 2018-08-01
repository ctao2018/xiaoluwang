const content = require('./045detailsTravelnotes.ejs');
const botSource = require('../../plugin/045detailsTravelnotes.ejs');
const layout = require('../../template/layout.js');

const pf = {
  pageTitle: '达人游记'
}

module.exports = layout.init({
  pf
}).run(content(),'', botSource());