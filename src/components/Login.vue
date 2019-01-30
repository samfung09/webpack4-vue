<template>
    <div id="login">
        <h2 @click="handleClick">{{msg}}</h2>
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg: '这是登录页'
        }
    },
    methods: {
        handleClick(){
            console.log('click')
        }
    }
}
</script>
<style lang="less" scoped>
#login{
    h2{
        color: red;
    }
}
</style>

