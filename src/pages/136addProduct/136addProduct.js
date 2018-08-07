const content = require('./136addProduct.ejs');
const layout = require('../../template/layout.js');
const botSource = require('../../plugin/136addProduct.ejs');
const pf = {
  pageTitle: '添加产品',
}


module.exports = layout.init({
  pf
}).run(content({
    
}), '', botSource());