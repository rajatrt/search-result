<template>
    <div class="side-panel-wrapper">
        <img :src="selectedImage.download_url"/>
        <div class="cross-button" @click="closeSidePanel()">
            <i class="fa fa-times"></i>
        </div>
        <div class="navigation-button">
            <i class="fa fa-chevron-circle-left" @click="navigate(-1)"></i>
            <i class="fa fa-chevron-circle-right" @click="navigate(1)"></i>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        selectedImage:{
            type: Object,
            required: true
        },
        index:{
            type: Number,
            required: true
        }
    },
    methods:{
        closeSidePanel(){
            this.$emit('close-side-panel');
        },
        navigate(ind){
            this.$emit('navigate-image',ind);
        }
    }
}
</script>

<style lang="scss" scoped>
.side-panel-wrapper{
    padding:1rem;
    height: fit-content;
    border-radius: 1rem;
    margin:.5rem 2rem;
    box-shadow: 10px 10px 5px #aaaaaa;
    position: relative;
    border: 1px solid #424242;
    img{
        border-radius: 1rem;
        width:34rem;
        height:38rem;
    }
    .navigation-button{
        position: absolute;
        top: 2rem;
        right: 2.5rem;
        background: transparent;
        font-size: 1.5rem;
        color: white;
        >i{
            margin:.25rem;
        }
    }
    .cross-button{
        position: absolute;
        top: 2rem;
        left: 2.5rem;
        font-size: 1.5rem;
        width: 2rem;
        height: 2rem;
        border-radius: 4rem;
        background: white;
        cursor: pointer;
        display: flex;
        >i{
            margin: auto;
        }
    }
}
</style>

