const content = require('./121nameAuthEdit.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '账户实名认证',
  
}


module.exports = layout.init({
  pf
}).run(content({
    
}), '', );