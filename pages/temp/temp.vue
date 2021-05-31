<template>
	<view>
		<view>
		<my-navbar @goHome="handleclick"></my-navbar>
		</view>
	<text>hello</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			handleclick(){
				let pages = getCurrentPages()
				uni.navigateBack({
					delta: pages.length
				})
			}
		}
	}
</script>

<style>

</style>
