module.exports = {
	title: '《空花 Ephemeral》设计系统文档',
	description: 'Ephemeral Deisgn System Documentation',
	dest: '/dist',
	// head: [
	//     ['link', { rel: 'icon', href: '../assets/favicon.ico' }],
	// ]
	plugins: [
		'@vuepress/active-header-links', // 页面滚动时自动激活侧边栏链接的插件
		'@vuepress/back-to-top', // 返回顶部插件
		'@vuepress/medium-zoom', // 图片预览插件
		'@vuepress/nprogress', // 页面顶部进度条
	],
	themeConfig: {
		// 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
		// lastUpdated: 'Last Updated', // string | boolean
		// 启动页面丝滑滚动
		smoothScroll: true,
		// 导航栏配置
		nav: [
			{ text: '空花官网', link: 'https://blog.knowscount.cc' },
			{ text: 'Github', link: 'https://github.com/EphemeralMagazine' },
		],
		sidebar: {
			'/': getSidebar(),
		},
	},
}

function getSidebar() {
	return [
		{
			children: [{ text: '为什么要设计系统', link: '/why/' }],
		},
		{
			text: '官网',
			children: [{ text: '总览', link: '/website/' }],
			sidebarDepth: 3,
		},
		{
			text: '杂志',
			children: [
				{ text: '设计', link: '/magazine/' },
				{ text: '排版', link: '/magazine/typesetting' },
			],
		},
		{
			text: '其他',
			children: [{ text: '读物推荐', link: '/others/books' }],
			sidebarDepth: 3,
		},
	]
}
