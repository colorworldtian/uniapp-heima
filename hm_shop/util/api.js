// 声明一个常量，存放基本的路径，以后改的话就只改这里
const BASE_URL = 'http://localhost:8082'
export const myRequest = (options) => {
	// 使用 promise
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			success: (res) => {
				if(res.data.status !== 0){
					return uni.showToast({
						title:'获取数据失败'
					})
				}
				// 调用成功
				resolve(res)
			},
			fail: (err) => {
				return uni.showToast({
					title:'获取接口失败'
				})
				reject(err)
			}
		})
	})
}

// myRequest({
// 	url: '',
// 	method: 'POST',
// 	data: {
		
// 	}
// })