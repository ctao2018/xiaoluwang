const content = require('./151lineCenterDate.ejs');
const layout = require('../../template/layout.js');
const botSource = require('../../plugin/151lineCenterDate.ejs');
const pf = {
  pageTitle: '选择日期',
  
}


module.exports = layout.init({
  pf
}).run(content({
    
}), '', botSource());