<template>
	<u-navbar :background="background" :is-back="true" title="本地宝">
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
		border: 1px solid red
	}
</style>
