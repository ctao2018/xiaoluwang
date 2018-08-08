const content = require('./145sellList.ejs');
const botSource = require('../../plugin/145sellList.ejs');
const layout = require('../../template/layout.js');
const pf = {
    pageTitle: '合销商户',
}


module.exports = layout.init({
  pf
}).run(content({
    
}), '', botSource());