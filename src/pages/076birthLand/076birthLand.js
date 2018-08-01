const content = require('./076birthLand.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '故乡',
}

module.exports = layout.init({
  pf
}).run(content());