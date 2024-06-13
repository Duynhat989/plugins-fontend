<script setup>
import { languagePack } from '@/languages';


</script>
<template>
    <section class="search">
        <div class="container">
            <div class="search_content">
                <div class="search-box">
                    <input type="text" class="input" :placeholder="languagePack['YOU_WANT']">
                    <button><i class='bx bx-search'></i></button>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.search{
    margin-bottom: 20px;
}
.food_content{
    padding: 10px;
}
.search-box{
    border: 1px solid rgba(128, 128, 128, 0.452);
    max-width: 400px;
    margin:20px auto;
    border-radius: 10px;
    transition: all 0.5s;
}
.search-box:hover{
    border: 1px solid rgb(255, 255, 255);
    outline: 1px double rgb(0, 78, 78);;
}
button{
    border: none;
    background: none;
    width: 35px;
}
input{
    width: calc(100% - 35px);
    border: none;
    padding: 4px 10px;
    border-radius: 10px;
    outline: none;
}
</style>