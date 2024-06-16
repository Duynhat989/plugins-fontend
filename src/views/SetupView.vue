<script setup>
import { onMounted, ref } from 'vue';
import ShowProductView from '@/components/admin/Extens.vue';
const selectedKeys = ref(['1']);
const collapsed = ref(false);
const designLayout = ref(0)
const processThread = ref(0)
const websiteProccess = async () => {
    processThread.value++
    setInterval(() => {
        processThread.value++
        if(processThread.value > 4){
            designLayout.value +=1
        }
    }, 3000)
}
onMounted(() => {
})

</script>
<template>
    <div class="main">
        <a-layout style="min-height: calc(100vh - 150px);padding: 10px;">
            <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
                <div class="logo"></div>
                <a-menu v-model:selectedKeys="selectedKeys" style="min-height: 100%;" mode="inline">
                    <a-menu-item key="1">
                        <label style="margin-right: 10px;font-size: 1.5em;"><i class='bx bx-bot'></i></label>
                        <span v-if="!collapsed">Advise Bot</span>
                    </a-menu-item>
                    <hr>
                    <a-menu-item key="2">
                        <label style="margin-right: 10px;font-size: 1.5em;"><i class='bx bx-user'></i></label>
                        <span v-if="!collapsed">Tài khoản</span>
                    </a-menu-item>
                    <a-menu-item key="3">
                        <label style="margin-right: 10px;font-size: 1.5em;"><i class='bx bx-money'></i></label>
                        <span v-if="!collapsed">Bảng giá</span>
                    </a-menu-item>
                    <a-menu-item key="4">
                        <label style="margin-right: 10px;font-size: 1.5em;"><i class='bx bx-support'></i></label>
                        <span v-if="!collapsed">Hỗ trợ</span>
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
                    <div class="layout-domain" v-if="designLayout == 0">
                        <div class="layout-domain__content">
                            <div class="form-dat">
                                <div class="button">
                                    <button class="btn btn-outline-primary mtm" @click="designLayout = 1">Thêm
                                        website</button>
                                </div>
                                <RouterLink class="button" :to="{ name: 'plugin_show', params: { slug: 'echipauto' } }">
                                    <button class="btn btn-outline-secondary mtm"><i class='bx bx-calendar-week'></i>
                                        Echipauto.com</button>
                                </RouterLink>
                                <RouterLink class="button" :to="{ name: 'plugin_show', params: { slug: 'echipauto' } }">
                                    <button class="btn btn-outline-secondary mtm"><i class='bx bx-calendar-week'></i>
                                        Echipauto.com</button>
                                </RouterLink>
                                <RouterLink class="button" :to="{ name: 'plugin_show', params: { slug: 'echipauto' } }">
                                    <button class="btn btn-outline-secondary mtm"><i class='bx bx-calendar-week'></i>
                                        Echipauto.com</button>
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                    <div class="layout-add" v-if="designLayout == 1">
                        <div class="layout-add__content">
                            <div class="form-dat">
                                <h3>Thêm Trang Web</h3>
                                <div class="input">
                                    <input type="text" class="form-control"
                                        style="max-width: 600px;margin: auto;margin-bottom: 10px;"
                                        placeholder="Nhập đường dẫn website">
                                    <button class="btn btn-outline-secondary" @click="websiteProccess()"><i class='bx bx-plus'></i> Thêm đường
                                        dẫn</button>
                                </div>
                                <div class="proccess"
                                    style="width: 100%; max-width: 700px;margin: auto;margin-top: 10px;">
                                    <div class="thread-1 flex">
                                        <i class='bx bxs-label' style="font-size: 2em;opacity: 0.7;"
                                            v-if="processThread == 0"></i>
                                        <i class='bx bx-label bx-fade-left' style="font-size: 2em;opacity: 0.7;"
                                            v-if="processThread == 1"></i>
                                        <i class='bx bx-check-circle' style="font-size: 2em;opacity: 0.7;"
                                            v-if="processThread > 1"></i>
                                        <hr style="width: calc(100vw - 10px);margin-left: 5px;">
                                    </div>
                                    <div class="th-detail" style="text-align: start;padding: 0 10px;">
                                        <h6>Tự động khai thác liên kết</h6>
                                        <p>Hệ thống của chúng tôi sẽ tự động quét trang web của bạn và thu thập mọi liên
                                            kết quan trọng, giúp nắm bắt cấu trúc trang web toàn diện mà không cần phải
                                            thực hiện thủ công.</p>

                                    </div>
                                </div>
                                <div class="proccess"
                                    style="width: 100%; max-width: 700px;margin: auto;margin-top: 10px;">
                                    <div class="thread-1 flex">
                                        <i class='bx bxs-label' style="font-size: 2em;opacity: 0.7;"
                                            v-if="processThread <= 1"></i>
                                        <i class='bx bx-label bx-fade-left' style="font-size: 2em;opacity: 0.7;"
                                            v-if="processThread == 2"></i>
                                        <i class='bx bx-check-circle' style="font-size: 2em;opacity: 0.7;"
                                            v-if="processThread > 2"></i>
                                        <hr style="width: calc(100vw - 10px);margin-left: 5px;">
                                    </div>
                                    <div class="th-detail" style="text-align: start;padding: 0 10px;">
                                        <h6>Trích xuất dữ liệu</h6>
                                        <p>Dựa trên dữ liệu đã thu thập, hệ thống của chúng tôi sẽ tự động xây dựng nhân
                                            vật cho bot, đảm bảo phù hợp với nội dung trang web và đáp ứng đúng nhu cầu
                                            của người dùng.</p>

                                    </div>
                                </div>
                                <div class="proccess"
                                    style="width: 100%; max-width: 700px;margin: auto;margin-top: 10px;">
                                    <div class="thread-1 flex">
                                        <i class='bx bxs-label' style="font-size: 2em;opacity: 0.7;"
                                            v-if="processThread <= 2"></i>
                                        <i class='bx bx-label bx-fade-left' style="font-size: 2em;opacity: 0.7;"
                                            v-if="processThread == 3"></i>
                                        <i class='bx bx-check-circle' style="font-size: 2em;opacity: 0.7;"
                                            v-if="processThread > 3"></i>
                                        <hr style="width: calc(100vw - 10px);margin-left: 5px;">
                                    </div>
                                    <div class="th-detail" style="text-align: start;padding: 0 10px;">
                                        <h6>Tự động xây dựng tính cách cho bot</h6>
                                        <p>Các công cụ thu thập dữ liệu tiên tiến của chúng tôi sẽ tự động truy cập từng
                                            liên kết, trích xuất thông tin liên quan từ trang web của bạn, giúp trợ lý
                                            ảo có đủ kiến thức để hỗ trợ chính xác sau này.</p>

                                    </div>
                                </div>
                                <div class="proccess"
                                    style="width: 100%; max-width: 700px;margin: auto;margin-top: 10px;">
                                    <div class="thread-1 flex">
                                        <i class='bx bxs-label' style="font-size: 2em;opacity: 0.7;"
                                            v-if="processThread <= 3"></i>
                                        <i class='bx bx-label bx-fade-left' style="font-size: 2em;opacity: 0.7;"
                                            v-if="processThread == 4"></i>
                                        <i class='bx bx-check-circle' style="font-size: 2em;opacity: 0.7;"
                                            v-if="processThread > 4"></i>
                                        <hr style="width: calc(100vw - 10px);margin-left: 5px;">
                                    </div>
                                    <div class="th-detail" style="text-align: start;padding: 0 10px;">
                                        <h6>Huấn luyện</h6>
                                        <p>Bot sẽ được đào tạo tự động dựa trên dữ liệu đã thu thập, giúp bot hiểu câu
                                            hỏi của người dùng và đưa ra câu trả lời hỗ trợ hữu ích mà không cần can
                                            thiệp từ con người.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </div>
</template>
<style scoped>
.button {
    display: block;
    max-width: 580px;
    margin: auto;
    margin-bottom: 10px;
}

.mtm {
    padding: 30px;
    min-width: 100%;
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