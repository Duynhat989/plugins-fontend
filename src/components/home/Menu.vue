<script setup>
import { ref } from "vue";
</script>
<template>
    <section class="menu">
        <div class="container">
            <h6><i class='bx bx-brightness-half'></i> Nổi bật</h6>
            <div class="menu_content flex">
                <div class="item">
                    <div class="item_content">
                        <div class="icon">
                            <i class='bx bx-folder-open'></i>
                        </div>
                        <div class="text">
                            Bài đăng
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="item_content">
                        <div class="icon">
                            <i class='bx bx-store-alt' ></i>
                        </div>
                        <div class="text">
                            Quán đặt nhiều
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="item_content">
                        <div class="icon">
                            <i class='bx bx-bowl-hot' ></i>
                        </div>
                        <div class="text">
                            Cơm Bình Dân
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="item_content">
                        <div class="icon">
                            <i class='bx bx-camera' ></i>
                        </div>
                        <div class="text">
                            Chụp ảnh(Checkin)
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="item_content">
                        <div class="icon">
                            <i class='bx bx-lemon' ></i>
                        </div>
                        <div class="text">
                            Đồ chay
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="item_content">
                        <div class="icon">
                            <i class='bx bx-coffee' ></i>
                        </div>
                        <div class="text">
                            Nước & Coffee
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="item_content">
                        <div class="icon">
                            <i class='bx bxs-clinic'></i>
                        </div>
                        <div class="text">
                            Phòng mới cập nhật
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="item_content">
                        <div class="icon">
                            <i class='bx bxs-crown'></i>
                        </div>
                        <div class="text">
                            Phòng đẹp
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>

.item {
    width: calc(100% / 8);
    padding: 5px;
    cursor: pointer;
}
.menu_content{
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1000px;
    margin: auto;
}
.item_content{
    text-align: center;
    padding: 20px 10px;
    /* border: 1px solid gray; */
    /* border-radius: 50%; */
    font-size: 0.8em;
    background: rgb(236, 250, 248);
    border-radius: 10px;
    box-shadow: 2px 2px 2px 1px rgba(218, 216, 216, 0.582);
    transition: all 0.5s;
    height: 120px;
}
.item_content:hover{
    transform: scale(1.03);
}
.item_content .icon{
    font-size: 2em;
}
@media only screen and (max-width: 900px) {
    .item {
        width: calc(100% / 4);
        padding: 5px;
    }
    .text{
        font-size: 0.9em;
    }
}
@media only screen and (max-width: 600px) {
    .item_content{
        height: 110px;
    }
}
</style>