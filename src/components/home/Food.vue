<script setup>
import { onMounted } from 'vue';
import FoodView from '../layouts/products/Food.vue';

onMounted(() => {
    $('.food_slider_wrapper .owl-carousel').owlCarousel({
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
    <section class="food">
        <div class="container">
            <div class="food_content">
                <div class="title flex">
                    <h6><i class='bx bx-bowl-hot' ></i> Món ăn được đánh giá cao</h6>
                    <a class="more" href="$"><span style="font-size: 13px;"> Xem nhiều hơn </span><i
                            class='bx bxs-chevron-right'></i></a>
                </div>
                <div class="food_slider_wrapper">
                    <div class="owl-carousel owl-theme">
                        <FoodView />
                        <FoodView />
                        <FoodView />
                        <FoodView />
                        <FoodView />
                        <FoodView />
                        <FoodView />
                        <FoodView />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.food_content {
    border: 1px solid rgba(128, 128, 128, 0.137);
    padding: 5px;
    margin: 10px 0px;
}

.food_slider_wrapper {
    overflow-x: auto;
    max-width: 100%;
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