const content   = require('./156passengerMsg.ejs');
const layout    = require('../../template/layout.js');
const pf        = {
  pageTitle: '消息'
}


module.exports = layout.init({
  pf
}).run(content());