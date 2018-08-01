const layout = require('./layout.ejs');
const header = require('./header.ejs');
const footer = require('./footer.ejs');

let pf = {
	pageTitle: "home",
	ltBtn1: 'back-to',
	ltStr1: '返回',
	ltBtn2: false,
	ltStr2: '',
	rtBtn1: false,
	rtStr1: '',
	rtBtn2: false,
	rtStr2: '',
	search: false,
	searchStr: '商品关键字/店铺名称',
	headerBg: 'bg-normal',
	showTitle: true,
	isHead: true,
	isFoot: false,
	footType: 'account'
}

const moduleExports = {
	/* 处理需要在公共页面用到的参数 */
	init(res) {
		for (let ev in res.pf) {
			pf[ev] = res.pf[ev]
		}
		return this;
	},

	/* 拼接公共组件与实际内容 */
	run(content, topsource, botsource) {
		let ctopsource = !topsource ? '' : topsource;
		let cbotsource = !botsource ? '' : botsource;
		let renderData = {
			pageTitle: pf.pageTitle,
			topsource: ctopsource,
			botsource: cbotsource,
			header: header(pf),
			footer: footer(pf),
			content,
			pf
		}
		return layout(renderData);
	}
}

module.exports = moduleExports