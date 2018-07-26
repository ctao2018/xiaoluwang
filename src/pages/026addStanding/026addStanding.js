const content = require('./026addStanding.ejs');
const layout = require('../../template/layout.js');
const pf = {
    isHead: false
  }


module.exports = layout.init({
    pf
}).run(content());