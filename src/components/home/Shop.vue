<script setup>
import { onMounted, ref } from 'vue';
import ShopView from '../layouts/sevices/Shop.vue';
import request from '@/utils/request';
import { languagePack } from '@/languages';

const products = ref([])
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
const loadTimeOut = async () => {
    $('.shop_slider_wrapper .owl-carousel').owlCarousel({
        loop: false,
        margin: 7,
        dots: false,
        lazyLoad: true,
        responsiveClass: true,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 2,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: false
            }
        }
    })
}
onMounted(() => {
    loadExtensions()
    setTimeout(()=>{loadTimeOut()},1000)

})

</script>
<template>
    <section class="shop">
        <div class="container">
            <div class="shop_content">
                <div class="title flex">
                    <h6><i class='bx bxs-download'></i> {{ languagePack["DOWNLOADL_LOTTOLOF"] }}</h6>
                </div>
                <div class="shop_slider_wrapper">
                    <div class="owl-carousel owl-theme">
                        <ShopView v-for="item of products" :product="item" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.shop_content {
    border: 1px solid rgba(128, 128, 128, 0.137);
    padding: 5px;
    margin: 10px 0px;
}

.shop_slider_wrapper {
    overflow-x: auto;
    max-width: 100%;
    /* Giữ cho cuộn ngang trong phạm vi của container cha */
}

.shop_slider {
    flex-wrap: nowrap;
    overflow-x: scroll;
    margin-bottom: 10px;
    padding: 10px 0px;
}

.shop_slider::-webkit-scrollbar {
    height: 5px;
    background-color: #F5F5F5;
    padding: 0 10px;
}

.shop_slider::-webkit-scrollbar-thumb {
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