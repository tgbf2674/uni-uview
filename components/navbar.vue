<template>
	<u-navbar :background="background" back-icon-color="#fff" :is-back="true" title="本地宝" title-color="#fff">
		<view class="slot-wrap">
			<view @click="goHome" class="right-icon">
				<u-icon name="home"></u-icon>
				<view>首页</view>
			</view>
		</view>
	</u-navbar>
</template>

<script>
	export default {
		name:"navbar",
		data() {
			return {
				background: { backgroundImage: 'linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))'}
			};
		},
		methods:{
			goHome(){
				this.$emit('goHome')
			}
		}
	}
</script>

<style lang="scss">
	.right-icon {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin-left: 40rpx;
		color: #FFFFFF;
	}
</style>
