const content = require('./041bndRecord.ejs');
const botSource = require('../../plugin/041bndRecord.ejs');
const layout = require('../../template/layout.js');
const guideRecord = require('../../template/man-details-item.ejs');

const pf = {
  pageTitle: '带团记录'
}

module.exports = layout.init({
  pf
}).run(content({
  guideRecord
}),'', botSource());