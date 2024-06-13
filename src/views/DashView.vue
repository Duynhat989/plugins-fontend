<script setup>
import { onMounted, ref } from 'vue';
import ShowProductView from '@/components/admin/Extens.vue';
const selectedKeys = ref(['1']);
const collapsed = ref(false);
const designLayout = ref(0)
const processThread = ref(0)
const handleChange = async () => {
    processThread.value++
    setInterval(() => {
        processThread.value++
        if (processThread.value > 4) {
            designLayout.value += 1
        }
    }, 3000)
}
const types = ref([
    { title: "echipauto", value: "echipauto" },
    { title: "google", value: "google" }
])
const selectType = ref('echipauto')
onMounted(() => {
})

</script>
<template>
    <div class="main">
        <a-layout style="min-height: calc(100vh - 150px);padding: 10px;">
            <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
                <div class="logo"></div>
                <a-menu v-model:selectedKeys="selectedKeys" style="min-height: 100%;" mode="inline">
                    <a-menu-item key="-1" style="text-align: center;">
                        <RouterLink to="/dash"><i class='bx bx-left-arrow-alt' style="font-size: 2em;margin-top: 10px;"></i></RouterLink>
                        <!-- Trở lại setup -->
                    </a-menu-item>
                    <a-menu-item class="flex" style="padding: 0 !important;position: relative;">
                        <a-select ref="select" v-model:value="selectType" style="width: 100%;position: absolute;top: 2px;left: 0;" @change="handleChange">
                            <a-select-option v-for="item of types" :value="item.value">{{ item.title
                                }}</a-select-option>
                        </a-select>
                    </a-menu-item>
                    <a-menu-item key="1">
                        <label style="margin-right: 10px;font-size: 1.5em;"><i class='bx bx-bot'></i></label>
                        <span v-if="!collapsed">Báo cáo thống kê</span>
                    </a-menu-item>
                    <a-menu-item key="2">
                        <label style="margin-right: 10px;font-size: 1.5em;"><i class='bx bx-user'></i></label>
                        <span v-if="!collapsed">Lịch sử hoạt động</span>
                    </a-menu-item>
                    <hr>
                    <a-menu-item key="3">
                        <label style="margin-right: 10px;font-size: 1.5em;"><i class='bx bx-link-alt'></i></label>
                        <span v-if="!collapsed">Links nguồn</span>
                    </a-menu-item>
                    <a-menu-item key="4">
                        <label style="margin-right: 10px;font-size: 1.5em;"><i class='bx bx-add-to-queue'></i></label>
                        <span v-if="!collapsed">Câu hỏi mẫu</span>
                    </a-menu-item>
                    <a-menu-item key="5">
                        <label style="margin-right: 10px;font-size: 1.5em;"><i class='bx bxs-file-doc'></i></label>
                        <span v-if="!collapsed">Document</span>
                    </a-menu-item>
                    <a-menu-item key="6">
                        <label style="margin-right: 10px;font-size: 1.5em;"><i class='bx bxs-videos'></i></label>
                        <span v-if="!collapsed">Video Data</span>
                    </a-menu-item>
                    <hr>
                    <a-menu-item key="7">
                        <label style="margin-right: 10px;font-size: 1.5em;"><i class='bx bx-slider'></i></label>
                        <span v-if="!collapsed">Giao diện</span>
                    </a-menu-item>
                    <a-menu-item key="8">
                        <label style="margin-right: 10px;font-size: 1.5em;"><i class='bx bx-code-alt'></i></label>
                        <span v-if="!collapsed">Nhúng Widget</span>
                    </a-menu-item>
                </a-menu>
            </a-layout-sider>
            <a-layout>
                <a-layout-header style="background: #fff; padding: 6px;cursor: pointer;">
                    <i style="font-size: 2em;" v-if="collapsed" class='bx bx-right-indent trigger'
                        @click="() => (collapsed = !collapsed)"></i>
                    <i style="font-size: 2em;" v-else class='bx bx-left-indent trigger'
                        @click="() => (collapsed = !collapsed)"></i>
                </a-layout-header>
                <a-layout-content :style="{ padding: '24px', background: '#fff', minHeight: '280px' }">
                    <!-- Quản lý tên miền -->
                    <!-- Trang quản lý -->

                </a-layout-content>
            </a-layout>
        </a-layout>
    </div>
</template>
<style scoped>
.button {
    margin-bottom: 10px;
    display: block;
}

.mtm {
    padding: 30px;
    min-width: 350px;
}

.form-dat {
    text-align: center;
}

#components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
}

.site-layout .site-layout-background {
    background: #fff;
}

* {
    color: rgb(0, 78, 78);
}
</style>