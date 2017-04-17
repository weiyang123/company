import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	strict: true,
	state: {
		user: {}
	},
	mutations: {
		setUserData(state, data) {
			state.user = data;
		}
	}
});