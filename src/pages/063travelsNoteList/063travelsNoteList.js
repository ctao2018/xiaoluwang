const content = require('./063travelsNoteList.ejs');
const botSource = require('../../plugin/063travelsNoteList.ejs');
const layout = require('../../template/layout.js');
const tni = require('../../template/travels-note-item.ejs');
const pf = {
  pageTitle: '游记记录',
}


module.exports = layout.init({
  pf
}).run(content({
  tni
}), '', botSource());