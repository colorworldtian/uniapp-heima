<template>
	<view class="pics">
		<scroll-view class="left" scroll-y="true">
			<view 
			:class="active===index?'active':''" 
			v-for="(item, index) in cates" 
			:key="index"
			@click="leftClickHandle(index,item.id)"
			>
				{{item.title}}
			</view>
		</scroll-view>
		<scroll-view class="right" scroll-y="true" >
			<view class="item" v-for="(item,index) in secondData" :key="index">
				<image @click="previewImg(item.img_url)" :src="item.img_url" mode=""></image>
				<text>{{item.title}}</text>
			</view>
			<view style="font-size: 30rpx;" v-if="secondData.length === 0">暂无数据</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates: [],
				active: 0,
				secondData: []
			}
		},
		methods: {
			async getPicsCate() {
				const res = await this.$myRequest({
					url: '/api/getimgcategory'
				})
				// console.log(res)
				this.cates = res.data.message
				// 刚进页面时需要展示右边的，默认为0
				this.leftClickHandle(0,this.cates[0].id)
			},
			async leftClickHandle(index,id){
				this.active = index
				// 获取右侧的数据
				const ress = await this.$myRequest({
					url: '/api/getimages/'+id
				})
				// console.log(ress)
				this.secondData = ress.data.message
			},
			previewImg(current){
				// 预览图片
				const urls = this.secondData.map(item=>{
					return item.img_url
				})
				// console.log(urls)
				uni.previewImage({
					current:current, // 点击当前图片的链接
					urls: urls //预览时左滑右滑时的链接
				})
			}
		},
		onLoad() {
			this.getPicsCate()
		}
	}
</script>

<style lang="scss" scoped>
page{
	height: 100%;
	.pics{
		height: 100%;
		display: flex;
		.left{
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;
			view{
				height: 60px;
				line-height: 60px;
				text-align: center;
				color: #333;
				font-size: 30rpx;
				border-top: 1px solid #eee;
			}
			.active{
				background-color: $shop-color;
				color: #fff;
			}
		}
		.right{
			height: 100%;
			width: 520rpx;
			margin: 10rpx auto;
			.item{
				image{
					width: 520rpx;
					height: 520rpx;
					border-radius: 5px;
				}
				text{
					font-size: 30rpx;
				}
			}
		}
	}
}
</style>
