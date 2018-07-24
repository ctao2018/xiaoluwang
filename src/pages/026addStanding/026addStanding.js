const content = require('./028choosePhoto.ejs');
const layout = require('../../template/layout.js');
const pf = {
    isHead: false
  }


module.exports = layout.init({
    pf
}).run(content());