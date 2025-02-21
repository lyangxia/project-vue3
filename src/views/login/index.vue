<template>
    <div class="login-box">
        <div class="container-box">
            <div class="img"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
var isPalindrome = function (num: number) {

    let x: string = num.toString()
    let sortX = ''
    for (let index = x.length - 1; index >= 0; index--) {
        sortX += x[index]
    }
    if (x == sortX) {
        return true
    } else {
        return false
    }
}; console.log("🚀 ~ isPalindrome ~ isPalindrome:", isPalindrome(2))
</script>

<!-- <style lang="scss" scoped>
.login-box {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-image: url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');

    .container-box {
        width: 1200px;
        height: 600px;
        border-radius: 6px;
        background-color: white;
        display: flex;
        align-items: center;
        padding: 0 40px;
    }

    .img {
        width: 400px;
        height: 400px;
        background-image: url('@/assets/images/login_picture.png');
        background-size: 100% 100%;
    }
}
</style> -->