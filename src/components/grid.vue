<template>
    <div class="grid-wrapper">
        <div 
            :class="['image',image == selectedImage ? 'selected':'']" 
            v-for="(image,index) in images" 
            :key="image" 
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
        padding: 1rem;
        border-radius: 1rem;
        margin:.5rem;
        box-shadow: 10px 10px 5px #aaaaaa;
        cursor: pointer;
        &.selected{
            border: 1px solid #aaaaaa;
        }
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
    .image:hover{
        img{
            box-shadow: 10px 10px 5px #aaaaaa;
        }   
    }
}
</style>

