<template>
	<view class="content">
		<my-navbar @goHome="goHome"></my-navbar>
		<view class="swiper">
			<u-swiper :list="list"></u-swiper>
		</view>
		<view class="card-box">
			<u-grid :border="false" :col="3">
				<u-grid-item>
					<u-icon name="photo" :size="78"></u-icon>
					<view class="grid-text">保险方案</view>
					<text class="textstyle">热门方案推荐</text>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="lock" :size="78"></u-icon>
					<view class="grid-text">产品测评</view>
					<text class="textstyle">热门方案推荐</text>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="hourglass" :size="78"></u-icon>
					<view class="grid-text">1V1咨询</view>
					<text class="textstyle">热门方案推荐</text>
				</u-grid-item>
			</u-grid>
		</view>
		<view class="mid-box">
			<u-row gutter="16">
				<u-col span="4">
					<u-swiper border-radius="8" img-mode="scaleToFill" :list="list"></u-swiper>
				</u-col>
				<u-col span="8">
					<image src="../../static/logo.png" mode="scaleToFill"></image>
					<view class="gutter"></view>
					<image src="../../static/logo.png" mode="scaleToFill"></image>
				</u-col>
			</u-row>
			<view class="bottom-img">
				<image src="../../static/logo.png" mode="scaleToFill"></image>
			</view>
		</view>
		<view class="bottom-box">
			<view class="header">
				<text class="text1">高性价比产品</text>
				<text class="text2">已测评3393款产品</text>
				<text class="text3">全部 ></text>
			</view>
			<view class="tags">
				<scroll-view scroll-x="true">
					<u-tag v-for="(item,index) in tagList" :key='item.code'
						:bgColor="selectCode===item.code ? 'blue' : '' " @click="selectTag(index)" :text="item.name"
						type="info" shape="circle" />
				</scroll-view>
			</view>
			<view style="margin-top: 20rpx;">
				<u-button @click=""> 登录 </u-button>
			</view>
			<view style="margin-top: 20rpx;">
				<u-button @click="goTemp">跳转 </u-button>
			</view>
			<view class="wrapper">
				<view class="tabs-swiper">
					<u-tabs-swiper ref="uTabs" :list="tabList" :current="current" @change="tabsChange" :is-scroll="true"
						swiperWidth="750"></u-tabs-swiper>
				</view>
				<u-popup v-model="show" mode="center" width="500rpx" height="600px">
					<view>
						<view>
							<text>青少年</text>
						</view>
						<view>老人</view>
						<view>婴儿</view>
					</view>
				</u-popup>
				<u-icon @click="show =true" name="list"></u-icon>
			</view>
			<swiper :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 800rpx;width: 100%;">
						111
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 800rpx;width: 100%;">
						222
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 800rpx;width: 100%;">
						333
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				customStyle: {
					marginTop: '20px', // 注意驼峰命名，并且值必须用引号包括，因为这是对象
					color: 'red',
				},
				list: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
				background: {
					backgroundColor: '#001f3f',

					// 导航栏背景图
					// background: 'url(https://cdn.uviewui.com/uview/swiper/1.jpg) no-repeat',
					// 还可以设置背景图size属性
					// backgroundSize: 'cover',

					// 渐变色
					backgroundImage: 'linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))'
				},
				selectedTag: true,
				tagList: [{
					code: "1",
					name: '重疾险'
				}, {
					code: "2",
					name: '医疗险'
				}, {
					code: "3",
					name: '寿险'
				}, {
					code: "4",
					name: '意外险'
				}, {
					code: "5",
					name: '意外险'
				}, {
					code: "6",
					name: '意外险'
				}, {
					code: "7",
					name: '意外险'
				}, ],
				selectCode: '',
				tabList: [{
					name: '月排行榜'
				}, {
					name: '季排行榜'
				}, {
					name: '年排行榜'
				}, {
					name: '季排行榜'
				}, {
					name: '年排行榜'
				}, {
					name: '季排行榜'
				}, {
					name: '年排行榜'
				}],
				// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
				show: false
			}
		},
		onLoad() {

		},
		methods: {
			selectTag(index) {
				console.log(index)
				if (this.selectCode !== this.tagList[index].code) {
					this.selectCode = ""
					this.selectCode = this.tagList[index].code
				}
			},
			getUser() {
				uni.getUserProfile({
					desc: '登录',
					success: (res) => {
						console.log(res)
					},
					fail: (res) => {
						console.log(res)
					}
				})
			},
			goTemp() {
				uni.navigateTo({
					url: "../temp/temp"
				})
			},
			goHome() {
				uni.switchTab({
					url: "./index"
				})
			},
			tabsChange(index) {
				this.swiperCurrent = index;
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.right-icon {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			margin-left: 40rpx;
		}
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.swiper {
		width: 750rpx;
	}

	.card-box {
		width: 96%;
		margin-top: 20rpx;
		border: 1px solid #C0C0C0;
		overflow: hidden;
		border-radius: 8px;
		box-shadow: 0px 4px 2px 0 rgba(0, 0, 0, 0.1);

		.line {
			display: inline-block;
			position: relative;
		}

		text {
			font-size: 14px;
			color: #C0C0C0;
		}
	}

	.mid-box {
		width: 96%;
		overflow: hidden;
		border-radius: 8px;
		height: 400rpx;
		box-shadow: 0px 4px 2px 0 rgba(0, 0, 0, 0.1);
		padding: 20rpx;
		margin-top: 20rpx;
		border: 1px solid #c0c0c0;

		.gutter {
			margin-top: 10rpx;
		}

		image {
			display: block;
			width: 100%;
			height: 120rpx;
		}

		.bottom-img {
			box-sizing: border-box;
			margin-top: 10rpx;

			image {
				display: block;
				padding-bottom: 10rpx;
				height: 110rpx;
			}
		}
	}

	.bottom-box {
		border-radius: 8px;
		width: 100%;
		box-shadow: 0px 4px 2px 0 rgba(0, 0, 0, 0.1);
		padding: 20rpx;
		margin-top: 20rpx;
		border: 1px solid #c0c0c0;

		.header {
			display: flex;
			align-items: center;

			.text1 {
				font-size: 18px;
				font-weight: bold;
			}

			.text2 {
				margin-left: 10rpx;
				font-size: 12px;
				color: #C0C0C0;
			}

			.text3 {
				font-size: 12px;
				color: #C0C0C0;
				margin-right: 10rpx;
				flex: 1;
				text-align: right;
			}
		}

		.tags {
			margin-top: 20rpx;
			white-space: nowrap;

			u-tag {
				margin-right: 10px;
			}
		}

		.wrapper {
			display: flex;

			.tabs-swiper {
				width: 650rpx;
			}

			u-icon {
				margin-left: 20rpx;
				font-size: 30rpx;
			}
		}
	}
</style>
