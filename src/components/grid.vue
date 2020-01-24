<template>
    <div class="grid-wrapper">
        <div class="image" v-for="image in images" :key="image">
            <img :src="image.download_url">
            <div class="label">{{ '-by ' + image.author }}</div>
        </div>
    </div>
</template>


<script>

import { getFreeImages } from '../services/utility.js'

export default {
    data(){
        return {
            images:[]
        }
    },
    mounted() {
        getFreeImages().then(res => {
            this.images = res;
        });
    }
}
</script>

<style lang="scss" scoped>
.grid-wrapper{
    display: flex;
    flex: 1 1 20rem;
    flex-wrap: wrap;
    .image{
        display: flex;
        flex-direction: column;
        padding: 1rem;
        border-radius: 1rem;
        margin:.5rem;
        box-shadow: 10px 10px 5px #aaaaaa;
        img{
            width: 10rem;
            height: 10rem;  
            border-radius: 1rem;
        }
        .label{
            width: 10rem;
            margin-top: .3rem;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
    }
}
</style>

