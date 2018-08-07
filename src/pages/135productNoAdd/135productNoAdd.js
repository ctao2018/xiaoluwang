const content = require('./135productNoAdd.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '服务产品',
}


module.exports = layout.init({
  pf
}).run(content({
    
}), '', );