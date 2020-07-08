<template>
	<view class="content">
		<swiper class="swiper" circular="true" indicator-dots="true" autoplay="true" interval="1000">
			<swiper-item v-for="(item,index) in swipers" :key="item.id">
				<image :src="item.img" mode=""></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="hm_nav">
			<view class="nav_cell" 
				v-for="(item,index) in navs" :key="index"
				@click="navItemClick(item.path)">
				<span :class="item.icon"></span>
				<view>{{item.title}}</view>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="tit">推荐商品</view>
			<goodsList @getGoodsItem="getGoodsItem" :goods="goods"></goodsList>
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list.vue'
	export default {
		data() {
			return {
				swipers: [],
				goods: [],
				navs: [
					{
						icon: 'iconfont icon-gouwu',
						title: '黑马超市',
						path: '/pages/goods/goods'
					},
					{
						icon: 'iconfont icon-lianxiwomen',
						title: '联系我们',
						path: '/pages/contact/contact'
					},
					{
						icon: 'iconfont icon-tupian',
						title: '社区图片',
						path: '/pages/pics/pics'
					},
					{
						icon: 'iconfont icon-video',
						title: '学习视频',
						path: '/pages/videos/videos'
					}
				]
			}
		},
		onLoad() {
			// 一进页面触发获取轮播的数据
			this.getSwiper()
			this.getHotGoods()
		},
		methods: {
			// 获取轮播数据
			async getSwiper(){
				// uni.request({
				//     url: 'http://localhost:8082/api/getlunbo', //仅为示例，并非真实接口地址。
				//     success: (res) => {
				// 		if(res.data.status !== 0){
				// 			return uni.showToast({
				// 				title:'获取数据失败'
				// 			})
				// 		}
				// 		this.swipers = res.data.message
				//         console.log(this.swipers);
				//     }
				// });
				const res = await this.$myRequest({
					url: '/api/getlunbo'
				})
				// console.log(res)
				this.swipers = res.data.message
			},
			//  获取热门商品列表
			async getHotGoods(){
				const ress = await this.$myRequest({
					url: '/api/getgoods?pageindex=1'
				})
				console.log('goods')
				console.log(ress)
				this.goods = ress.data.message
			},
			navItemClick(url){
				// 点击导航，进入不同的页面
				uni.navigateTo({
					url:url
				})
			},
			getGoodsItem(id) {
				// console.log('kk')
				uni.navigateTo({
					url: '/pages/goodsDetail/goodsDetail?id='+id
				})
			}
		},
		components:{
			goodsList
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		.swiper{
			width: 750rpx;
			height: 380rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.hm_nav{
			width: 100%;
			display: flex;
			.nav_cell{
				width: 25%;
				text-align: center;
				view{
					font-size: 30rpx;
				}
				span{
					color: #ffffff;
					font-size: 30px;
					background-color: $shop-color;
					border-radius: 50%;
					margin: 10px;
					padding: 10px;
					line-height: 70px;
				}
			}
		}
		.hot_goods{
			background-color: #eee;
			overflow: hidden;
			margin-top: 10px;
			.tit{
				height: 50px;
				line-height: 50px;
				color: $shop-color;
				text-align: center;
				background-color: #FFFFFF;
				margin: 10rpx 0;
				font-size: 20px;
				letter-spacing: 5px;
			}
			
		}
	}
</style>
