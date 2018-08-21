const content = require('./132.2refuseRefund.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '拒绝退款',
  rtBtn1: 'btn-string',
  rtStr1: '确认',
}


module.exports = layout.init({
  pf
}).run(content({
    
}), '', );