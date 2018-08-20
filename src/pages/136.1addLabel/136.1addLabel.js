const content = require('./136.1addLabel.ejs');
const layout = require('../../template/layout.js');
const botSource = require('../../plugin/136.1addLabel.ejs');
const pf = {
  pageTitle: '设置标签',
 
}


module.exports = layout.init({
  pf
}).run(content({
    
}), '', botSource());