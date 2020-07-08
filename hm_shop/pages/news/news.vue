<template>
	<view class="news">
		<newsItem @itemClick="goDetail" :newList="this.newList"></newsItem>
	</view>
</template>

<script>
	import newsItem from '../../components/news-item.vue'
	export default {
		data() {
			return {
				newList: []
			}
		},
		methods: {
			async getNews() {
				const res = await this.$myRequest({
					url: '/api/getnewslist'
				})
				this.newList = res.data.message
				console.log(this.newList)
			},
			goDetail(id){
				console.log('o')
				uni.navigateTo({
					url: '/pages/detail/detail?id='+id,
					
				})
			}
		},
		onLoad() {
			this.getNews()
		},
		components:{
			newsItem
		}
	}
</script>

<style lang="scss" scoped>
	.news{
		.newsItem{
			display: flex;
			justify-content: space-between;
			padding: 10rpx 20rpx;
			border-bottom: 1px solid $shop-color;
			image{
				// width: 400rpx;
				// height: 200rpx;
				min-width: 200rpx;
				max-width: 200rpx;
				// width: 200rpx;
				height: 150rpx;
			}
			.newsText{
				font-size: 30rpx;
				padding-left: 10rpx;
			}
			.bt{
				font-size: 24rpx;
				line-height: 60rpx;
				display: flex;
				justify-content: space-between;
			}
		}
	}

</style>
