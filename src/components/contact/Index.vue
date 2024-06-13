<script setup>
import { languagePack } from '@/languages';



</script>
<template>
    <div class="container">
        <h5>{{ languagePack["CONNECT_DEV"] }}</h5>
        <br>
        <h6>{{ languagePack["SOCIAL_NETWORK"] }}</h6>
        <ul class="list">
            <li class="list_item"><a target="_blank" href="#"><i class='bx bxl-facebook-circle' ></i> Facebook</a></li>
            <li class="list_item"><a target="_blank" href="#"><i class='bx bxl-twitter' ></i> Twitter</a></li>
            <li class="list_item"><a target="_blank" href="#"><i class='bx bxl-telegram' ></i> Telegram</a></li>
            <li class="list_item"><a target="_blank" href="#"><i class='bx bxl-whatsapp' ></i> Whatsapp</a></li>
        </ul>
        <br>
        <h6>{{ languagePack["CONNECT_TIKCKIT"] }}</h6>
        <ul class="list">
            {{ languagePack["UPDATING"] }}
        </ul>
    </div>
</template>
<style scoped>
.list_item{
    padding: 10px;
}
*{
    color: rgb(0, 78, 78);
}
</style>