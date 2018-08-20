const content = require('./152addLineEdit.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '线路中心',
  isFoot: true,
  footType: 'doyen',
}


module.exports = layout.init({
  pf
}).run(content({
    
}), '', );