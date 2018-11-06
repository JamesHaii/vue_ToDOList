<template>
    <div class="dialog">
        <h4>查询的详细列表：</h4>
        <p v-for="(vs,index) in childData" v-bind:key="index">{{vs.v}}123456</p>
        <button v-on:click="hide">X</button>
    </div>
</template>
<script>

export default {
  name: "dialog",
  props: [ 'childData','hide'],

  data() {
    return {
      
    }
  }
};
</script>
<style>
.dialog {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    min-height: 200px;
    background: #fff;
}
</style>

