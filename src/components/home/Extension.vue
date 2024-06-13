<script setup>
import { onMounted, ref } from 'vue';
import ExtensionView from '../layouts/products/Extension.vue';
import { languagePack } from '@/languages';
import request from '@/utils/request';

const products = ref([])
const current = ref(0);
const loadExtensions = () => {

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'api/extensions',
        headers: {}
    };

    request.request(config)
        .then((response) => {
            products.value = response.data.data
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });

}
onMounted(() => {
    loadExtensions()
})

</script>
<template>
    <section class="food">
        <div class="container">
            <div class="food_content">
                <div class="title flex">
                    <h5><i class='bx bx-extension'></i> {{ languagePack["LIST_EXTENSION"] }}</h5>
                </div>
                <div class="food_slider_wrapper flex">
                    <ExtensionView v-for="item of products" :product="item" />
                </div>
            </div>
            <div class="paging">
                <a-pagination v-model:current="current" :total="5000" show-less-items />
            </div>
        </div>
    </section>
</template>
<style scoped>
.paging {
    padding: 15px 0px;
}

.food_content {
    border: 1px solid rgba(128, 128, 128, 0.137);
    padding: 5px;
    margin: 10px 0px;
}

.food_slider_wrapper {
    max-width: 100%;
    flex-wrap: wrap;
    /* Giữ cho cuộn ngang trong phạm vi của container cha */
}

.food_slider {
    flex-wrap: nowrap;
    overflow-x: scroll;
    margin-bottom: 10px;
    padding: 10px 0px;
}

.food_slider::-webkit-scrollbar {
    height: 5px;
    background-color: #F5F5F5;
    padding: 0 10px;
}

.food_slider::-webkit-scrollbar-thumb {
    background-color: #00000056;
    border-radius: 5px;
    cursor: pointer;
}

.more {
    margin-left: auto;
    /* text-decoration: underline; */
    display: flex;
    align-items: center;
    font-size: 13px;
}
</style>