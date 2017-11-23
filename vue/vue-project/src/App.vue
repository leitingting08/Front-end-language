<template>
  <div id="app">
    <h1 v-text="title"></h1>
    <input v-model="newItem" v-on:keyup.enter="addNew">
    <ul>
      <li v-for="item in items" v-bind:class="{finished: item.isFinished}" v-on:click="toggleFinish(item)">
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
// import Store from './store'
//  console.log(Store)

export default {
  data:function () {
    return {
      title: 'todos',
      items: [],
      newItem:''
      }      
    },
    watch:{
      items: {
        handler: function(items){
          // Store.save()
        },
        deep: false
      }
    },
    methods: {
      toggleFinish:function(item){
        item.isFinished = !item.isFinished
    },
    addNew: function(){
     this.items.push({
         label:this.newItem,
         isFinished:false
     })
      this.newItem = ''
      // Store.save()
    }
  }
}
</script>

<style>
#app h1{color: #ffccff; font-size: 45px;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  font-size: 20px;
  color:#ddd;
}
#app input{width: 80%;height:2rem;border:1px solid #ddd;}
#app ul{margin: 0;}
#app ul li{list-style: none;border-bottom: 1px solid #ddd;padding: 1rem;width: 80%;}
.finished{text-decoration: line-through;color: #FF4500;}
</style>
