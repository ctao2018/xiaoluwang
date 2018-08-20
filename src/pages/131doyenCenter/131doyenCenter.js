const content = require('./131doyenCenter.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '达人中心',
  isFoot: true,
  footType: 'doyen',
}


module.exports = layout.init({
  pf
}).run(content({
    
}), '', );