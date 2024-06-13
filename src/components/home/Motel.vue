<script setup>
import { onMounted, ref } from 'vue';
import MotelView from '../layouts/sevices/Motel.vue';
import ExtensionView from '@/components/layouts/products/Extension.vue';

const products = ref([{
    name: 'OneWise - Facebook Marketplace supports',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJsnFzrAxqBYmFc5DH09osDGlhBQEqZfoKOuZB2z6vtw&s',
    short: 'Schedule automatic posts to Facebook Marketplace. Limit limits when posting on this platform',
    price: '8',
    slug: 'sdfsdfsdf'
},
{
    name: 'OneWise - Facebook Marketplace supports',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJsnFzrAxqBYmFc5DH09osDGlhBQEqZfoKOuZB2z6vtw&s',
    short: 'Schedule automatic posts to Facebook Marketplace. Limit limits when posting on this platform',
    price: '8',
    slug: 'sdfsdfsdf'
},
{
    name: 'OneWise - Facebook Marketplace supports',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJsnFzrAxqBYmFc5DH09osDGlhBQEqZfoKOuZB2z6vtw&s',
    short: 'Schedule automatic posts to Facebook Marketplace. Limit limits when posting on this platform',
    price: '8',
    slug: 'sdfsdfsdf'
},
{
    name: 'OneWise - Facebook Marketplace supports',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJsnFzrAxqBYmFc5DH09osDGlhBQEqZfoKOuZB2z6vtw&s',
    short: 'Schedule automatic posts to Facebook Marketplace. Limit limits when posting on this platform',
    price: '8',
    slug: 'sdfsdfsdf'
},
{
    name: 'OneWise - Facebook Marketplace supports',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJsnFzrAxqBYmFc5DH09osDGlhBQEqZfoKOuZB2z6vtw&s',
    short: 'Schedule automatic posts to Facebook Marketplace. Limit limits when posting on this platform',
    price: '8',
    slug: 'sdfsdfsdf'
}


])
onMounted(() => {
    $('.motel_slider_wrapper .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
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
                items: 5,
                nav: false
            }
        }
    })
})

</script>
<template>
    <section class="motel">
        <div class="container">
            <div class="motel_content">
                <div class="title flex">
                    <h6><i class='bx bxs-download'></i> Lượt tải nhiều nhất</h6>
                </div>
                <div class="motel_slider_wrapper">
                    <div class="owl-carousel owl-theme">
                        <MotelView v-for="item of products" :product="item" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.motel_content {
    border: 1px solid rgba(128, 128, 128, 0.137);
    padding: 5px;
    margin: 10px 0px;
}

.motel_slider_wrapper {
    overflow-x: auto;
    max-width: 100%;
    /* Giữ cho cuộn ngang trong phạm vi của container cha */
}

.motel_slider {
    flex-wrap: nowrap;
    overflow-x: scroll;
    margin-bottom: 10px;
    padding: 10px 0px;
}

.motel_slider::-webkit-scrollbar {
    height: 5px;
    background-color: #F5F5F5;
    padding: 0 10px;
}

.motel_slider::-webkit-scrollbar-thumb {
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