<template>
	<view class="goodsDetail">
		<swiper indicator-dots="true" class="swiper">
			<swiper-item v-for="(item,index) in lunboimg" :key="index">
				<image :src="item.src" mode=""></image>
			</swiper-item>
		</swiper>
		<view class="box1">
			<view class="price">
				<text>￥{{itemInfo.sell_price}}</text>
				<text>￥{{itemInfo.market_price}}</text>
			</view>
			<view class="goods_name">{{itemInfo.title}}</view>
		</view>
		<view class="line"></view>
		<view class="box2">
			<view>货号：{{itemInfo.goods_no}}</view>
			<view>库存：{{itemInfo.stock_quantity}}</view>
		</view>
		<view class="line"></view>
		<view class="box3">
			<view class="tit">详情介绍</view>
			<view class="content"><rich-text :nodes="itemJs.content"></rich-text></view>
		</view>
		<view class="fix">
			<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
		data() {
			return {
				id: 0,
				lunboimg: [],
				itemInfo: {},
				itemJs: {},
				options: [
					{
						icon: 'headphones',
						text: '客服'
					}, {
						icon: 'shop',
						text: '店铺',
						info: 2,
						infoBackgroundColor:'#007aff',
						infoColor:"red"
					}, {
						icon: 'cart',
						text: '购物车',
						info: 2
					}],
					buttonGroup: [{
					  text: '加入购物车',
					  backgroundColor: '#ff0000',
					  color: '#fff'
					},
					{
					  text: '立即购买',
					  backgroundColor: '#ffa200',
					  color: '#fff'
					}]
			}
		},
		methods: {
			async getSwipers(){
				const res = await this.$myRequest({
					url: '/api/getthumimages/'+this.id
				})
				// console.log(res)
				this.lunboimg = res.data.message
			},
			async getDetailInfo(){
				const ress = await this.$myRequest({
					url: '/api/goods/getinfo/'+this.id
				})
				// console.log(ress)
				this.itemInfo = ress.data.message[0]
			},
			async getDetailjs(){
				const resss = await this.$myRequest({
					url: '/api/goods/getdesc/'+this.id
				})
				console.log(resss)
				this.itemJs = resss.data.message[0]
			},
		    onClick (e) {
			  uni.showToast({
			    title: `点击${e.content.text}`,
			    icon: 'none'
			  })
		    },
		    buttonClick (e) {
			  console.log(e)
			  this.options[2].info++
		    }
		},
		onLoad(options) {
			console.log(options)
			this.id = options.id
			this.getSwipers()
			this.getDetailInfo()
			this.getDetailjs()
		},
		components: {uniGoodsNav}
	}
</script>

<style lang="scss" scoped>
	.goodsDetail{
		.swiper{
			// width: 750rpx;
			height: 700rpx;
			text-align: center;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.box1{
			padding: 10px;
			.price{
				font-size: 35rpx;
				color: $shop-color;
				line-height: 80rpx;
				text:nth-child(2){
					color: #ccc;
					font-size: 28rpx;
					text-decoration: line-through;
					margin-left: 20rpx;
				}
			}
			.goods_name{
				font-size: 32rpx;
				line-height: 60rpx;
			}
		}
		.line{
			width: 100%;
			height: 8rpx;
			background-color: #eee;
		}
		.box2{
			padding: 0 10px;
			font-size: 32rpx;
			line-height: 70rpx;
		}
		.box3{
			padding-bottom: 100rpx;
			.tit{
				font-size: 32rpx;
				padding-left: 10px;
				border-bottom: 1px solid #eee;
				line-height: 70rpx;
			}
			.content{
				padding: 10px;
				font-size: 26rpx;
				line-height: 40rpx;
			}
		}
		.fix{
			width: 100%;
			position: fixed;
			bottom: 0;
		}
	}

</style>
