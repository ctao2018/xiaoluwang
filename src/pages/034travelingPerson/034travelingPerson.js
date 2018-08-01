
const content = require('./034travelingPerson.ejs');
const layout = require('../../template/layout.js');
const pf = {
  pageTitle: '编辑出行人',
}


module.exports = layout.init({
  pf
}).run(content())