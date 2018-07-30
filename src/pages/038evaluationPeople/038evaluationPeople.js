const content = require('./038evaluationPeople.ejs');
const layout = require('../../template/layout.js');
const comment = require('../../template/mandetails-item.ejs');
const pf = {
  pageTitle: '达人带团评论',
  rtBtn1: 'nav-menu',
  rtStr1: '菜单',
}


module.exports = layout.init({
  pf
}).run(content({
  comment
}))