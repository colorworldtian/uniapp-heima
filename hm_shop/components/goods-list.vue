<template>
	<view>
		<view class="goods_list">
			<view @click="navigator(item.id)" class="goods_item" v-for="(item,index) in goods" :key="index">
				<image :src="item.img_url" mode=""></image>
				<view class="price">
					<text class="nowP">￥{{item.sell_price}}</text>
					<text class="oldP">￥{{item.market_price}}</text>
				</view>
				<view class="name">
					{{item.title}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['goods'],
		methods:{
			navigator(id){
				this.$emit('getGoodsItem',id)
			}
		}
	}
</script>

<style lang="scss" scoped>
.goods_list{
				padding: 0 15rpx;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				// .goods_item{
				// 	background-color: #FFFFFF;
				// 	width: 355rpx;
				// 	margin: 10rpx 0;
				// 	padding: 15rpx;
				// 	box-sizing: border-box;
				// 	image{
				// 		width: 80%;
				// 		height: 150px;
				// 		display: block;
				// 		margin: auto;
				// 	}
				// 	.price{
				// 		color: $shop-color;
				// 		font-size: 36rpx;
				// 		text:nth-child(2){
				// 			color: #ccc;
				// 			font-size: 28rpx;
				// 			margin-left: 17rpx;
				// 			text-decoration: line-through;
				// 		}
				// 	}
				// 	.name{
				// 		font-size: 28rpx;
				// 		line-height: 50rpx;
				// 		padding-bottom: 15rpx;
				// 		padding-bottom: 10rpx;
				// 	}
				// }
			}
			.goods_list{
				// padding: 0 14rpx;
				// overflow: hidden;
				.goods_item{
					width: 355rpx;
					background-color: #FFFFFF;
					padding: 20rpx;
					box-sizing: border-box;
					margin: 10rpx 0;
					float: left;
					text-align: center;
					image{
						width: 80%;
						height: 150px;
						margin-left: auto;
						margin-right: auto;
					}
					.price{
						line-height: 40px;
						text-align: left;
						.nowP{
							color: $shop-color;
							font-size: 20px;
						}
						.oldP{
							color: #ccc;
							font-size: 12px;
							margin-left: 10px;
						}
					}
					.name{
						font-size: 16px;
						color: #000;
						line-height: 50rpx;
						text-align: left;
					}
				}
				.goods_item:nth-child(odd){
					margin-right: 14rpx;
				}
			}
</style>
