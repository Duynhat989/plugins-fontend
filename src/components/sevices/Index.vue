<script setup>
import { onMounted, ref, computed } from 'vue';
import { useRoute } from 'vue-router'
import LoadElementView from "@/components/layouts/LoadElement.vue";

const product = ref(null)
const route = useRoute()

// Trích xuất slug từ tham số truy vấn
const slug = ref()
const isLoad = ref(false)
document.title = "Product"
onMounted(() => {
    slug.value = route.params.slug
})

</script>
<template>
    <div class="api" v-if="!isLoad">
        <div class="container">
            <div class="api_content">
                API UPDATE...
            </div>
        </div>
    </div>
    <LoadElementView v-else />
</template>
<style scoped>
.api_content{
    text-align: center;
    padding: 50px;
}
</style>