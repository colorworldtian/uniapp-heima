<template>
	<view class="contact">
		<image class="img" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg"></image>
		<view class="info">
			<view @click="phone()">联系电话：400-618-9090（点击拨打）</view>
			<view>校区地址：浙江省杭州市浙江省杭州市浙江省杭州市浙江省杭州市</view>
		</view>
		<map class="map" style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude" :markers="covers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:0,
				latitude: 39.909,
				longitude: 116.39742,
				covers: [{
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: '../../static/logo.png',
					width: 20,
					height: 20
				}]
			}
		},
		methods: {
			phone(){
				uni.makePhoneCall({
				    phoneNumber: '400-618-9090' //仅为示例
				});
			}
		}
	}
</script>

<style lang="scss">
.contact{
	.img{
		width: 750rpx;
		height: 320rpx;
	}
	.info{
		padding: 10rpx 20rpx;
		font-size: 30rpx;
		view{
			line-height: 80rpx;
			border-bottom: 1px solid #eee;
		}
	}
	// .map{
	// 	width: 750rpx;
	// 	height: 550rpx;
	// }
}
</style>
