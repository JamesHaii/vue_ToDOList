<template>
  <div>
    <h1>{{ zmsg }}</h1>
    <div id="app">
    <input v-model="msg" placeholder="请输入字条串" v-on:keyup.enter='addmsg'>   
    <div>
      <p v-for="(vs,index) in list" v-bind:class="{completed:vs.isCompleted}" v-bind:key="index">
        <span v-on:click="sign(index)">
          <span v-if="vs.show">{{vs.v}}
            <button v-on:click="del(index)">&times;</button>
          </span>
        </span>
        
      </p>	
    </div>
    <div>
      <button v-on:click="all">全部</button>
      <button v-on:click="finish">完成</button>
      <button v-on:click="active">未完成</button>
      <input type="text" v-model='seach'>
      <button v-on:click="find">查询</button>
    </div>
  </div>
  <Dialog v-if="seachlist.length" :childData="seachlist" :hide="headeDialog"></Dialog>
  </div>
</template>

<script>
import Dialog from "./common/Dialog";

export default {
  name: "test1",
  components: {
    Dialog
  },
  data() {
    return {
      zmsg: "Welcome to Your Vue.js App",
      msg: "",
      list: [
        { v: "中国", isCompleted: false, show: true },
        { v: "美国", isCompleted: false, show: true },
        { v: "日本", isCompleted: false, show: true },
        { v: "朝鲜", isCompleted: false, show: true },
        { v: "美国-内蒙", isCompleted: false, show: true },
        { v: "中国-台湾", isCompleted: false, show: true },
        { v: "外蒙", isCompleted: false, show: true }
      ],
      seachlist:[],
      seach:''
    };
  },
  methods: {
    headeDialog: function() {
      this.seachlist = []
    },
    addmsg: function(e) {
      this.msg = "";
      this.list.push({v: this.msg, isCompleted: false, show: true});
    },
    del: function(index) {
      console.log(index);
      this.list.splice(index, 1);
    },
    sign: function(id) {
      this.list[id].isCompleted = !this.list[id].isCompleted;
    },
    all: function() {
      for (var i = 0; i < this.list.length; i++) {
        this.list[i].show = true;
      }
    },
    //
    finish: function() {
      var list = this.list;
      for (let i = 0; i < list.length; i++) {
        if (!list[i].isCompleted) {
          list[i].show = false;
        } else {
          list[i].show = true;
        }
      }
      this.list = list;
    },
    active: function() {
      var list2 = this.list;
      for (var j = 0; j < list2.length; j++) {
        if (list2[j].isCompleted) {
          list2[j].show = false;
        } else {
          list2[j].show = true;
        }
      }
      this.list = list2;
    },
    find: function() {
      var len = this.list.length
      var tmp = []
      for(var i=0; i<len; i++){
        var index = this.list[i].v.indexOf(this.seach)
        if (index !== -1) {
            tmp.push(this.list[i])
        }
      }
      this.seachlist = tmp
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
.completed {
  text-decoration: line-through;
  color: #ddd;
}
p {
  cursor: pointer;
}
</style>
