<template>
  <div id="app">
      <video-player :options="{}"/>
    <div id="nav">
        <button @click="ytGetList()">testetstetstetste</button>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import ajax from "./mixins/ajax.js";
import VideoPlayer from "@/components/player.vue";

export default {
    data(){
        return {
            test : []
        }
    },
    mixins:[ajax],
    components: {
		VideoPlayer
	},
    methods: {
        getData(){
            
        }
    },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
