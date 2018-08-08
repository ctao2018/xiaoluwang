const content = require('./142lineCertified.ejs');
const layout = require('../../template/layout.js');
const botSource = require('../../plugin/142lineCertified.ejs');
const pf = {
  pageTitle: '线路中心',
  isFoot: true,
  footType: 'doyen',
}


module.exports = layout.init({
  pf
}).run(content({
    
}), '', botSource());