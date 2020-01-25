<template>
    <div class="side-panel-wrapper">
        <img :src="image.download_url"/>
        <div class="cross-button" @click="closeSidePanel()">
            <i class="fa fa-times"></i>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        image:{
            type: Object,
            required: true
        }
    },
    methods:{
        closeSidePanel(){
            this.$emit('close-side-panel');
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
    img{
        border-radius: 1rem;
        width:34rem;
        height:30rem;
    }
    .cross-button{
        position: absolute;
        top: 2rem;
        right: 2.5rem;
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

