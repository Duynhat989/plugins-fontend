<script setup>
import { onMounted, ref } from 'vue';

const img = ref('')
const props = defineProps(["image"])
onMounted(()=>{
    img.value = props.image
})
</script>
<template>
    <section class="item">
        <div class="item_content">
            <div class="image">
                <img :src="img" alt="">
            </div>
        </div>
    </section>
</template>
<style scoped>
.item{
    color: rgb(0, 78, 78);
    font-size: 0.9em;
    cursor: pointer;
}
.item .item_content{
    padding: 5px;
    width: 100%;
    border: 1px solid rgba(128, 128, 128, 0.24);
}
.image{
    width: 100%;
}
.item .item_content img{
    object-fit: cover;
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
}
.title{
    padding: 5px 0px;
}
.rate .star{
    color: rgb(245, 160, 62);
    font-size: 0.8em;
}
</style>