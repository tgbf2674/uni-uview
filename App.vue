<script>
	export default {
		onLaunch: function() {
			uni.login({
				success(res) {
					console.log(res)
				},fail(err){
					console.log(err)
				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "uview-ui/index.scss";
</style>
