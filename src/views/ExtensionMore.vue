<script setup>
import { onMounted, ref, computed } from 'vue';
import { useRoute } from 'vue-router'
import LoadElementView from "@/components/layouts/LoadElement.vue";
import ExtensionView from '@/components/product/Extension.vue';

const product = ref(null)
const route = useRoute()

// Trích xuất slug từ tham số truy vấn
const slug = ref()
const isLoad = ref(true)

const types = ref([
  { title: "Tất cả", value: "" },
  { title: "Extension", value: "extension" },
  { title: "Phần mềm", value: "soft" }
])
const selectType = ref("")
const folders = ref([
  { title: "Tất cả", value: "" },
  { title: "Facebook", value: "facebook" },
  { title: "Tiktok", value: "tiktok" },
  { title: "Amazon", value: "amazon" },
  { title: "Khác", value: "orther" }
])
const selectFolder = ref("")
const browers = ref([
  { title: "Tất cả", value: "" },
  { title: "Chrome", value: "chrome" },
  { title: "Firefox", value: "firefox" }
])
const selectBrower = ref("")

const handleChange = async () => {

}

onMounted(() => {
  isLoad.value = false
  slug.value = route.params.slug
})
</script>
<template>
  <div class="filter">
    <div class="container">
      <div class="filter_content">
        <h6>Bộ lọc tiện ích chrome</h6>
        <div class="filter_show flex">
          <div class="item">
            <label>Thể loại</label>
            <a-select ref="select" v-model:value="selectType" style="width: 120px" @change="handleChange">
              <a-select-option v-for="item of types" :value="item.value">{{ item.title }}</a-select-option>
            </a-select>
          </div>
          <div class="item">
            <label>Nền tảng</label>
            <a-select ref="select" v-model:value="selectFolder" style="width: 120px" @change="handleChange">
              <a-select-option v-for="item of folders" :value="item.value">{{ item.title }}</a-select-option>
            </a-select>
          </div>
          <div class="item">
            <label>Trình duyệt</label>
            <a-select ref="select" v-model:value="selectBrower" style="width: 120px" @change="handleChange">
              <a-select-option v-for="item of browers" :value="item.value">{{ item.title }}</a-select-option>
            </a-select>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container" v-if="!isLoad">
    <ExtensionView />
  </div>
  <LoadElementView v-else />
</template>
<style scoped>
.ant-select {
  min-width: 190px;
}

.filter_content {
  padding: 10px;
}

.filter_show {
  flex-wrap: wrap;
}

label {
  display: block;
  min-width: 200px;
}
</style>