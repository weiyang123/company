/**
 * @desc souche.com common function store
 * @create 2016-07-02
 */
//exports default {
//  convertParamsToString(obj, front = '') {
//      let arr = [];
//      Object.keys(obj).forEach(k => {
//          arr.push(`${k}=${obj[k]}`);
//      });
//      return front + arr.join('&');
//  },
//  isEmptyObject(obj) {
//      for(var name in obj) { // eslint-disable-line
//          return false;
//      }
//      return true;
//  },
//  isObject(target) {
//      return typeof target === 'object' && !this.isArray(target);
//  },
//  isArray(target) {
//      return Array.isArray(target);
//  },
//  getLocalJson(key) {
//      return JSON.parse(localStorage.getItem(key) || '{}');
//  },
//  getJsonData(value, result = {}) {
//      try {
//          return JSON.parse(value);
//      } catch (e) {
//          return result;
//      }
//  },
//  setLocalJson(key, json) {
//      if (!json || $DSC.isEmptyObject(json)) {
//          localStorage.removeItem(key);
//      } else {
//          localStorage.setItem(key, JSON.stringify(json));
//      }
//  },
//  splitData(value, split = ',', res = []) {
//      if (!value) {
//          return res;
//      }
//      try {
//          return value.split(split);
//      } catch (e) {
//          return res;
//      }
//  },
//  vm: null, // vue 的 实例化对象，唯一
//  power: {}, // 用户权限
//  token: null
//};
const getCookie = function(key) {
	var arr, reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)");
	if(arr = document.cookie.match(reg))
		return unescape(arr[2]);
	else
		return null;
}
export default {
	setCookie(key, value, expiredays, domain) {
		let exdate = new Date();
		exdate.setDate(exdate.getDate() + expiredays);
		let str = expiredays ? `;expires=${exdate.toGMTString()}` : '';
		str += domain ? `;domain=${domain}` : '';
		document.cookie = `${key}=${escape(value)}${str}`;
	},
	getCookie,
	clearCookie(name) {
		var exp = new Date();
		exp.setTime(exp.getTime() - 1);
		var cval = getCookie(name);
		if(cval != null)
			document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
	}
}