<template>
  <div id="app">
    <router-view class="content"></router-view>
    <mt-tabbar :fixed="true">
      <router-link to="/" v-bind:class="ClassMenuQuery" v-on:click.native="select(0)"><i class="fa fa-edit"></i>预订</router-link>
      <router-link to="/OrderList" v-bind:class="ClassMenuOrder" v-on:click.native="select(1)"><i class="fa fa-bar-chart"></i>我的订单</router-link>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      selected:-1,
    }
  },
  computed: {
    ClassMenuQuery(){
      return{
        'mint-tab-item':true,
        'is-selected':this.selected==0
      }
    },
    ClassMenuOrder(){
      return{
        'mint-tab-item':true,
        'is-selected':this.selected==1
      }
    }
  },
  methods:{
      select(m){
        this.selected=m;
      }
  }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #app .mint-tab-item{
    font-size: 20px;
    padding: 15px;
  }
  #app .Content{
    padding-bottom: 56px;
  }
</style>
