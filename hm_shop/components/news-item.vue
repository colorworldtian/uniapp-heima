<template>
	<view>
		<view @click="navigator(item.id)" v-for="(item,index) in newList" :key="index" class="newsItem">
			<image :src="item.img_url" mode=""></image>
			<view class="newsText">
				<view class="tit">
					{{item.title}}
				</view>
				<view class="bt">
					<text>发送时间：{{item.add_time | formatDate}}</text>
					<text>浏览：{{item.click}}次</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			navigator(id){
				this.$emit('itemClick',id)
			}
		},
		props:['newList'],
		filters: {
			formatDate (date) {
				// date 就是 需要过滤的字符
				console.log(date)
				const nDate = new Date(date)
				const year = nDate.getFullYear()
				const month = nDate.getMonth().toString().padStart(2,0)
				const day = nDate.getDay().toString().padStart(2,0)
				console.log(year,month,day)
				return year+'-'+month+'-'+day
			}
		}
	}
</script>

<style lang="scss" scoped>
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
</style>
