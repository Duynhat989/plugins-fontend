<script setup>
</script>
<template>
    <section class="item">
        <div class="item_content">
            <div class="image">
                <img src="https://baolamdong.vn/file/e7837c02845ffd04018473e6df282e92/052023/1.com-tam-viet-nam-hap-dan-du-khach-khi-den-da-lat-2_20230529114050.jpg" alt="">
            </div>
            <div class="title">
                <i class='bx bx-bowl-rice'  style='color:rgb(0, 78, 78)'></i> Bánh canh cua thành Vinh
            </div>
            <div class="price">
                <span>Giá tiền:</span> <span>2.000đ</span>
            </div>
            <div class="rate">
                <i class='bx bx-notepad' ></i>: <span class="star">
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star-half'></i>
                </span>
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
.rate{
    font-size: 1em;
    text-align: end;
}
.rate .star{
    color: rgb(245, 160, 62);
    font-size: 0.8em;
}
</style>