const content = require('./148lineCenter.ejs');
const layout = require('../../template/layout.js');
const botSource = require('../../plugin/148lineCenter.ejs');
const pf = {
  pageTitle: '线路中心',
  isFoot: true,
  footType: 'doyen',
}


module.exports = layout.init({
  pf
}).run(content({
    
}), '', botSource());