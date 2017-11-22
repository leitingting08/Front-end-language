const STORAGE_KEY = 'todos-vuejs'
export default {
	fetch:function () {
		return JSON.parse(window.localStorge.getItem(STORAGE_KEY) || '[]')
	},
	save:function (items) {
		window.localStorge.setItem(STORAGE_KEY, JSON.stringify(items))
	}
}