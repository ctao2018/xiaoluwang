const content = require('./074doyenPresent.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '达人介绍',
}

module.exports = layout.init({
  pf
}).run(content());