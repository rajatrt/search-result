<template>
  <div id="app">
    <grid 
      v-on:selected-image="selectedImageHandler($event)">
    </grid>
    <side-panel 
      v-if="showSidePanel" 
      :image="image" 
      v-on:close-side-panel="closeSidePanel()">
    </side-panel>
  </div>
</template>

<script>

import Grid from './components/grid.vue'
import SidePanel from './components/sidePanel.vue'

export default {
  name: 'app',
  data() {
    return {
      showSidePanel: false,
      image: {}
    }
  },
  components: {
    Grid,
    'side-panel': SidePanel
  },
  methods:{
    selectedImageHandler(image){
      this.showSidePanel=true;
      this.image = image;
    },
    closeSidePanel(){
      this.showSidePanel=false
    }
  }
}
</script>

<style lang="scss">
body{
  margin:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 2rem;
  display: flex;
}
</style>
