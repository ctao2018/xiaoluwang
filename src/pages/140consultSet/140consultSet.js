const content = require('./140consultSet.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '咨询服务',
}


module.exports = layout.init({
  pf
}).run(content({
    
}), '', );