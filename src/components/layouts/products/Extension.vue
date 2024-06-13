<script setup>
import { languagePack } from '@/languages';
import { onMounted, ref } from 'vue';


const product = ref(null)

const props = defineProps(['product']);
onMounted(() => {
    product.value = props.product
    
})

</script>
<template>
    <section class="item" v-if="product">
        <div class="item_content">
            <div class="image">
                <img width="100" height="" :src="product.avatar" alt="disktop image">
            </div>
            <div class="title">
                <h6><i class='bx bxs-extension' style='color:rgb(0, 78, 78)'></i> {{ product.title }}</h6>
            </div>
            <div class="short">
                <span><i class='bx bx-detail'></i>:</span> <span> {{ product.description }}.</span>
            </div>
            <div class="show flex">
                <div class="price">
                    <span><i class='bx bx-dollar-circle'></i>:</span> <span>{{ product.price }}$/{{ languagePack["MONTH"] }}</span>
                </div>
                <div class="rate">
                    <i class='bx bx-notepad'></i>: <span class="">
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star-half'></i>
                    </span>
                </div>
            </div>
            <div class="install">
                <a-button type="default" class="btn-antdv"><RouterLink :to="{ name: 'product_show', params: { slug: product.slug }}"><i class='bx bx-show-alt'></i> {{ languagePack["SHOW"] }}</RouterLink></a-button>
                <a-button type="default" class="btn-antdv btn-antdv-store"> <i class='bx bx-extension'></i> <span>&ensp;</span>{{ languagePack["INSTALL"] }}</a-button>
            </div>
        </div>
    </section>
</template>
<style scoped>
.btn-antdv {
    margin-right: 5px;
    background-color: rgb(11, 51, 45);
    color: rgba(240, 248, 255, 0.801);
    width: calc(((100% - 20px) / 2));
    font-size: 1em;
}

.btn-antdv:hover {
    color: aliceblue;
}

.btn-antdv-store {
    background-color: #109d57;
}

.item {
    color: rgb(0, 78, 78);
    font-size: 0.9em;
    width: calc(100% /4);
    cursor: pointer;
    padding: 5px;
}
.item .item_content {
    padding: 5px;
    width: 100%;
    border: 1px solid rgba(128, 128, 128, 0.24);
}

.item:hover .item_content{
    background-color: rgba(21, 41, 36, 0.247);
}
.image {
    width: 100%;
}

.item .item_content img {
    object-fit: cover;
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
}

.title {
    padding: 5px 0px;
}

.short {
    margin: 5px 0px;
}

.rate {
    font-size: 1em;
    margin-top: 5px;
    margin-left: auto;
}
.show{
    padding:5px 10px;
}

@media only screen and (max-width: 1200px) {
    .item {
        width: calc(100% /4);
    }
}

@media only screen and (max-width: 1000px) {
    .item {
        width: calc(100% /3);
    }
}

@media only screen and (max-width: 800px) {
    .item {
        width: calc(100% /2);
    }
}

@media only screen and (max-width: 450px) {
    .item {
        width: calc(100%);
    }
}
</style>