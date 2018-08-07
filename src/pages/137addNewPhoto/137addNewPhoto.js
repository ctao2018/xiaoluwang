const content = require('./137addNewPhoto.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '添加照片',
}


module.exports = layout.init({
  pf
}).run(content({
    
}), '', );