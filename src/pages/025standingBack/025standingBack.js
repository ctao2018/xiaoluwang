const content = require('./025standingBack.ejs');
const layout = require('../../template/layout.js');
const stabList = require('../../assets/mockdata/025standingBack');
const pf = {
  pageTitle: '驻足回复',
}


module.exports = layout.init({
  pf
}).run(content({
  stabList:stabList
}));