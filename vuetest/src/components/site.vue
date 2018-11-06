<template>
    <div>
        <legend>
            <h4>登录</h4>
        </legend>
        <legend>
            <label>用户名</label>
            <input type="text" v-model="name">
        </legend>
        <legend>
            <label>密&nbsp;&nbsp;码:</label>
            <input type="password" v-model="pwd">
        </legend>
        <legend>
            <button v-on:click="login">确认</button>
        </legend>
    </div>
</template>
<script>
export default {
  name:'site',
  data() {
    return {
      name: "",
      pwd: "",
      show: true
    }
  },
  methods: {
    login: function() {
        if(this.name!='vue'){
            alert('用户名不存在')
        }else if(this.pwd!=123456){
            alert('密码错误')
        }else{
            this.$router.push({path:'/'})
        }
    }
  }
}
</script>
<style>
</style>
