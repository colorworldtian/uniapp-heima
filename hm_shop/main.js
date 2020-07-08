import Vue from 'vue'
import App from './App'
import { myRequest } from 'util/api.js'
Vue.prototype.$myRequest = myRequest

// 全局过滤器
Vue.filter('formatDate',(date)=>{
	const nDate = new Date(date)
	const year = nDate.getFullYear()
	const month = nDate.getMonth().toString().padStart(2,0)
	const day = nDate.getDay().toString().padStart(2,0)
	console.log(year,month,day)
	return year+'-'+month+'-'+day
})

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
