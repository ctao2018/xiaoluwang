const content = require('./141consultSetEdit.ejs');
const layout = require('../../template/layout.js');
const pf = {
    isHead: false
}


module.exports = layout.init({
  pf
}).run(content({
    
}), '', );