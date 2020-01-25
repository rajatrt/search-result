<template>
  <div id="app">
    <grid 
      id="grid"
      :images="images"
      :selected-image="selectedImage"
      v-on:selected-image="selectedImageHandler($event)">
    </grid>
    <side-panel 
      v-if="showSidePanel" 
      :selected-image="selectedImage"
      :index="index"
      v-on:close-side-panel="closeSidePanel()"
      v-on:navigate-image="navigateHandler($event)">
    </side-panel>
  </div>
</template>

<script>

import Grid from './components/grid.vue'
import SidePanel from './components/sidePanel.vue'

import { getFreeImages } from './services/utility.js'

export default {
  name: 'app',
  data() {
    return {
      showSidePanel: false,
      images: {},
      selectedImage: {},
      index: -1,
      page: 0,
      fetchData: true
    }
  },
  mounted() {
    getFreeImages(this.page).then(res => {
        this.images = res;
    });
    document.getElementById("grid").onscroll = () => {
      let grid = document.getElementById("grid");
      if ((grid.scrollHeight - grid.scrollTop) === grid.offsetHeight && this.fetchData) {
        this.fetchData = false;
        this.page++;
        getFreeImages(this.page).then(res =>{
          this.images = [...this.images,...res];
          this.fetchData = true;
        })
      }
    };
  },
  components: {
    Grid,
    'side-panel': SidePanel
  },
  methods:{
    selectedImageHandler({ image, index }){
      this.showSidePanel=true;
      this.selectedImage = image;
      this.index = index;
    },
    closeSidePanel(){
      // reset all the values.
      this.showSidePanel=false
      this.selectedImage = {};
      this.index = -1;
    },
    navigateHandler(ind){
      let newIndex = this.index+ind;
      if(newIndex >=0 && newIndex< this.images.length){
        this.selectedImage = this.images[newIndex];
        this.index = newIndex;
        document.getElementById(this.selectedImage.id).scrollIntoView(({ behavior: 'smooth' }));
      }
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
