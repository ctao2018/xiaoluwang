const content = require('./122nameAuthDone.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '账户实名认证',
  
}


module.exports = layout.init({
  pf
}).run(content({
    
}), '', );