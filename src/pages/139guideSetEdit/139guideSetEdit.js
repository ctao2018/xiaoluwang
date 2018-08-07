const content = require('./139guideSetEdit.ejs');
const layout = require('../../template/layout.js');
const pf = {
    isHead: false
}


module.exports = layout.init({
  pf
}).run(content({
    
}), '', );