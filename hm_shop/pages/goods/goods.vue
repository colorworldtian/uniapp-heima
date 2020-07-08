<template>
	<view>
		<goodsList @getGoodsItem="getGoodsItem" :goods="goods"></goodsList>
		<view class="isOver" v-if="flag">---我是有底线的---</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list.vue'
	export default {
		data() {
			return {
				pageIndex: 1,
				goods: [],
				flag: false
			}
		},
		methods: {
			//  获取热门商品列表
			async getHotGoods(callBack){
				const ress = await this.$myRequest({
					url: '/api/getgoods?pageindex=' + this.pageIndex
				})
				// console.log('goods')
				// console.log(ress)
				this.goods = [...this.goods,...ress.data.message]
				// callBack && callBack()
				// 如果有传方法，则调用，没有传，则不调用
				if(callBack != null){
					callBack()
				}
			},
			getGoodsItem(id) {
				// console.log('kk')
				uni.navigateTo({
					url: '/pages/goodsDetail/goodsDetail?id='+id
				})
			}
		},
		onLoad() {
			this.getHotGoods()
		},
		components: {
			goodsList
		},
		onReachBottom() {
			// 滑到最下面时触发
			// 判断如果没有数据了，则就不再去请求数据了
			if (this.goods.length < this.pageIndex * 10) return this.flag = true
			this.pageIndex++
			this.getHotGoods()
			console.log('到底了')
		},
		onPullDownRefresh() {
			console.log('下拉刷新')
			this.pageIndex = 1
			this.goods = []
			this.flag = false
			setTimeout(() => {
				this.getHotGoods(()=>{
					// 加载成功之后，把下拉刷新的图标隐藏
					uni.stopPullDownRefresh()
				})
			},1000)
		}
	}
</script>

<style lang="scss">
.isOver{
	width: 100%;
	text-align: center;
	line-height: 50px;
	font-size: 14px;
}
</style>
