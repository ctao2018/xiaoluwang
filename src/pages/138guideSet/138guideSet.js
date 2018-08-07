const content = require('./138guideSet.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '向导服务套餐',
}


module.exports = layout.init({
  pf
}).run(content({
    
}), '', );