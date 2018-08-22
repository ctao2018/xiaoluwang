const content = require('./182travelNotes.ejs');
const layout = require('../../template/layout.js');
const botSource = require('../../plugin/182travelNotes.ejs');

const pf = {
  pageTitle: '驻足·游记',
  rtBtn1: 'btn-string',
  rtStr1: '管理',
}


module.exports = layout.init({
  pf
}).run(content({
    
}), '', botSource());