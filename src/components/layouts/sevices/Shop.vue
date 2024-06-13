<script setup>
import { onMounted, ref } from 'vue';

const product = ref()
const props = defineProps(["product"])
onMounted(()=>{
    product.value = props.product
})

</script>
<template>
    <section class="item">
        <div class="item_content flex">
            <div class="image">
                <img width="100" height="100" v-if="product" :src="product.avatar" alt="">
            </div>
            <div class="content" v-if="product">
                <div class="title">
                    {{ product.title }}
                </div>
                <div class="rate">
                    Đánh giá: <span class="">
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star-half'></i>
                    </span>
                </div>
                <div class="download">
                    <i class='bx bxs-download' ></i> 1.239 lượt tải
                </div>
            </div>
        </div>
        <div class="opacity flex">
            <div class="opacity_content">
                <div class="show">
                    <i class='bx bx-show-alt'></i> Xem chi tiết
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.item {
    color: rgb(0, 78, 78);
    font-size: 0.9em;
    cursor: pointer;
    position: relative;
    transition: all 1s;
}
.opacity{
    display: none;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(26, 26, 26, 0.699);
    align-items: center;
    justify-content: center;
    transition: all 1s;
}
.opacity_content{
    color: rgb(255, 255, 255);
    font-weight: 600;
    font-size: 1.1em;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px 10px;
    border-radius: 3px;
}
.item:hover .opacity{
    display: flex;
}
.item .item_content {
    padding: 5px;
    width: 100%;
    border: 1px solid rgba(128, 128, 128, 0.24);
}

.image {
    margin-right: 10px;
}

.item .item_content img {
    object-fit: cover;
    width: 100px;
    height: 100px;
}

.title {
    padding: 5px 0px;
}

.rate .star {
    color: rgb(245, 160, 62);
    font-size: 0.8em;
}

@media only screen and (max-width: 1000px) {
    .item .item_content img {
        object-fit: cover;
        width: 60px;
        height: 60px;
    }
    .rate .star {
        color: rgb(245, 160, 62);
        font-size: 0.7em;
    }
    .item{
        font-size: 0.7em;
    }
}
</style>