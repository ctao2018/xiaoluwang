const content = require('./132orderService.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '订单中心',
}


module.exports = layout.init({
  pf
}).run(content({
    
}), '', );