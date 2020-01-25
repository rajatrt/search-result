<template>
    <div class="grid-wrapper">
        <div 
            :class="['image',image == selectedImage ? 'selected':'']" 
            v-for="(image,index) in images" 
            :key="image" 
            :id="image.id"
            @click="clickHandler({ image,index })">
            <img :src="image.download_url">
            <div class="label">{{ '-by ' + image.author }}</div>
        </div>
    </div>
</template>


<script>


export default {
    props:{
        selectedImage: {
            type: Object,
            default: () => ({})
        },
        images: {
            type: Array,
            default: () => []
        }
    },
    methods:{
        clickHandler({ image, index }) {
            this.$emit('selected-image',{ image, index});
        }
    }
}
</script>

<style lang="scss" scoped>
.grid-wrapper{
    display: flex;
    flex: 1 1 20rem;
    flex-wrap: wrap;
    height: calc(100vh - 2rem);
    overflow: auto;
    .image{
        display: flex;
        flex-direction: column;
        margin:.5rem;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
        border-radius: .5rem;
        cursor: pointer;
        &.selected{
            border: 1px solid #aaaaaa;
        }
        img{
            width: 10rem;
            height: 10rem;  
            border-radius: .5rem .5rem 0 0;
        }
        .label{
            width: 10rem;
            margin: .5rem 0;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
    }
    .image:hover{
        box-shadow: 10px 10px 5px #aaaaaa;   
    }
}
</style>

