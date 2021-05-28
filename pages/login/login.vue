<template>
    <view class="container">
        <view class="left-top-sign">LOGIN</view>
        <view class="welcome">欢迎回来！</view>
        <button class="confirm-btn" open-type="getUserInfo" @getuserinfo="wxLogin" :disabled="logining">微信授权登录</button>
    </view>
</template>
​
<script>
export default {
    data() {
        return {
            logining: false
        };
    },
    onLoad() {},
    methods: {
        wxLogin(e) {
        const that = this;
        that.logining = true;
        let userInfo = e.detail.userInfo;
        uni.login({
            provider:"weixin",
            success:(login_res => {
                let code = login_res.code;
                uni.getUserInfo({
                    success(info_res) {
                        console.log(info_res)
                        uni.hideLoading()
                        uni.navigateBack()
                    }
                })
                
            })
            })
        }
    }
};
</script>
​
<style lang="scss">
.container {
    display: flex;
    overflow: hidden;
    background: #fff;
    flex-direction: column;
    justify-content: center;
    .left-top-sign {
        font-size: 120upx;
        color: #4CD964;
        position: relative;
        left: -10upx;
        margin-top: 100upx;
    }
    .welcome {
        position: relative;
        left: 50upx;
        top: -90upx;
        font-size: 46upx;
        color: #555;
        text-shadow: 1px 0px 1px rgba(0, 0, 0, 0.3);
    }
    .confirm-btn {
        width: 630upx;
        height: 76upx;
        line-height: 76upx;
        border-radius: 50px;
        margin-top: 70upx;
        background: #4CD964;
        color: #fff;
        font-size: 20px;
        &:after {
            border-radius: 100px;
        }
    }
}
</style>
