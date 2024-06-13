<script setup>
import { onMounted, ref } from 'vue';
import ShowProductView from '@/components/layouts/sevices/ShowProduct.vue';
import LoadElementView from "@/components/layouts/LoadElement.vue";
import { useRoute } from 'vue-router';

const isLoadForm = ref(false)


const product = ref(null)
const slug = ref('')

const router = useRoute()

const props = defineProps(["product"])

const addOwl = () => {
    $('.product_slider_wrapper .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        lazyLoad: true,
        responsiveClass: true,
        autoplay: false,
        dots: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true
            },
            1000: {
                items: 1,
                nav: true
            }
        }
    })
}

const loadProduct = async () => {
    const productTmep = {
        title: "OneWise - Facebook Marketplace supports",
        app_name: "maketplace_support",
        avata: "",
        slider: "https://inkythuatso.com/uploads/thumbnails/800/2023/03/1-hinh-anh-ngay-moi-hanh-phuc-sieu-cute-inkythuatso-09-13-35-50.jpg,https://vcdn-vnexpress.vnecdn.net/2023/09/21/snapedit-1695287679841-8439-1695287949.png,https://png.pngtree.com/thumb_back/fh260/background/20230511/pngtree-nature-background-sunset-wallpaer-with-beautiful-flower-farms-image_2592160.jpg",
        zip: "#",
        store: "#",
        download: "1.454",
        description: "Schedule automatic posts to Facebook Marketplace. Limit limits when posting on this platform.",
        post: "<div>Đây là nội dung bài viết</div>",

    }
    product.value = productTmep
    setTimeout(() => {
        isLoadForm.value = true
        addOwl()
    }, 500)
}
onMounted(async () => {
    slug.value = router.params.slug
    loadProduct()
})

</script>
<template>
    <LoadElementView v-if="!isLoadForm"/>
    <section class="product" v-if="product" :style="`opacity: ${isLoadForm ? '1':'0'};`">
        <div class="container" >
            <div class="row">
                <div class="left col-xl-5 col-12">
                    <div class="title flex">
                        <h6> <i class='bx bx-chevron-right'></i> Tiện ích</h6>
                    </div>
                    <div class="product_slider_wrapper">
                        <div class="owl-carousel owl-theme">
                            <ShowProductView :image="`https://image.nhandan.vn/Uploaded/2024/unqxwpejw/2023_09_24/anh-dep-giao-thong-1626.jpg`" />
                            <ShowProductView v-for="item of product.slider.split(',')" :image="item" />
                        </div>
                    </div>
                </div>
                <div class="right col-xl-7 col-12">
                    <div class="title">
                        <h3><i class='bx bx-extension'></i><i class='bx bxs-chevron-right'></i> {{ product.title }}</h3>
                    </div>
                    <div class="more">
                        <div class="rate">
                            Đánh giá: <span class="star">
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star-half'></i>
                            </span>
                        </div>
                        <div class="download">
                            <div class="times">
                                <i class='bx bxs-download'></i> {{ product.download }} lượt tải
                            </div>
                        </div>
                    </div>
                    <div class="price">
                        <div class="price-checkout flex">
                            <h4><span style="opacity: 0.7;">Cài đặt:</span> Miễn phí</h4>
                        </div>
                    </div>
                    <div class="action">
                        <a :href="product.zip" target="_blank" class="btn btn-outline-dark">Tải xuống Zip</a>
                        <a :href="product.store" target="_blank" class="btn btn-outline-dark">Cài đặt từ cửa hàng</a>
                    </div>
                    <div class="detail">
                        <h6>Mô tả ngắn:</h6>
                        <p>
                            {{ product.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <section class="post">
            <div class="container">
                <h5>Giới thiệu về {{ product.title }}</h5>
                <div class="content" v-html="product.post">
                </div>
            </div>
        </section>
    </section>
</template>
<style scoped>
.product{
    transition: all 1s;
}
.download {
    padding-left: 20px;
}

.action {
    padding: 20px 0;
}

.btn {
    margin-right: 5px;
}

h4 {
    margin-bottom: 0;
}

.price {
    background: rgba(128, 128, 128, 0.11);
    padding: 10px;
    margin: 10px 0px;
}

.left {
    padding: 0 10px;
    margin: 10px 0px;
}

.right {
    padding: 20px 10px;
    padding-top: 50px;
}

.product_slider_wrapper {
    overflow-x: auto;
    max-width: 100%;
    /* Giữ cho cuộn ngang trong phạm vi của container cha */
}

.product_slider {
    flex-wrap: nowrap;
    overflow-x: scroll;
    margin-bottom: 10px;
    padding: 10px 0px;
}

.product_slider::-webkit-scrollbar {
    height: 5px;
    background-color: #F5F5F5;
    padding: 0 10px;
}

.product_slider::-webkit-scrollbar-thumb {
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

* {
    color: rgb(0, 78, 78);
}

@media only screen and (max-width: 1200px) {
    .right {
        padding-top: 10px;
    }
}

@media only screen and (max-width: 1000px) {
    .right {
        padding-top: 10px;
    }
}

@media only screen and (max-width: 800px) {
    .right {
        padding-top: 10px;
    }
}

@media only screen and (max-width: 450px) {
    .right {
        padding-top: 10px;
    }
}
</style>