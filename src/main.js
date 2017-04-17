import 'assets/less/index.less'; // 样式文件
import Vue from 'vue';
import router from 'router';
import store from 'store';

Vue.prototype.goPage = function(name, params = {}) {
	router.push({
		name: name,
		params: params
	});
};

new Vue({
	store,
	router
}).$mount('#app');