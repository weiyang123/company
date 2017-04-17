export default [{
	path: '*',
	name: '/',
	component: require('views/index'),
	children: [{
		path: '/index',
		name: 'index',
		component: require('views/page/index')
	}, {
		path: '/product',
		name: 'product',
		component: require('views/page/product')
	},{
		path: '/about',
		name: 'about',
		component: require('views/page/about')
	},{
		path: '/contact',
		name: 'contact',
		component: require('views/page/contact')
	}]
}];