<script setup>
import { onMounted, ref, reactive, toRaw } from 'vue';
const formState = reactive({
    name: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
});
const onSubmit = () => {
    console.log('submit!', toRaw(formState));
};
const labelCol = {
    style: {
        width: '150px',
    },
};
const wrapperCol = {
    span: 14,
};
//-----------------------------
function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}
const previewVisible = ref(false);
const previewImage = ref('');
const previewTitle = ref('');
const fileList = ref([
]);
const handleCancel = () => {
    previewVisible.value = false;
    previewTitle.value = '';
};
const handlePreview = async file => {
    if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
    }
    previewImage.value = file.url || file.preview;
    previewVisible.value = true;
    previewTitle.value = file.name || file.url.substring(file.url.lastIndexOf('/') + 1);
};
</script>
<template>
    <section class="jobs">
        <div class="container">
            <div class="manager_content">
                <h6>I. Gửi yêu cầu phần mềm</h6>
                <div class="form-send">
                    <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
                        <a-form-item label="Đề xuất tên dự án">
                            <a-input v-model:value="formState.name" placeholder="Đề xuất tên dự án"/>
                        </a-form-item>
                        <a-form-item label="E-mail liên hệ:">
                            <a-input v-model:value="formState.name" placeholder="E-mail liên hệ"/>
                        </a-form-item>
                        <a-form-item label="Số điện thoại:">
                            <a-input v-model:value="formState.name" placeholder="Số điện thoại"/>
                        </a-form-item>
                        <a-form-item label="Yêu cầu nhanh">
                            <a-switch v-model:checked="formState.delivery" />
                        </a-form-item>
                        <a-form-item label="Nền tảng">
                            <a-checkbox-group v-model:value="formState.type">
                                <a-checkbox value="1" name="type">Facebook</a-checkbox>
                                <a-checkbox value="2" name="type">Tiktok</a-checkbox>
                                <a-checkbox value="3" name="type">Youtube</a-checkbox>
                                <a-checkbox value="4" name="type">Google</a-checkbox>
                                <a-checkbox value="5" name="type">Khác</a-checkbox>
                            </a-checkbox-group>
                        </a-form-item>
                        <a-form-item label="Một số hình ảnh">
                            <div class="clearfix">
                                <a-upload v-model:file-list="fileList"
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76" list-type="picture-card"
                                    @preview="handlePreview">
                                    <div v-if="fileList.length < 8">
                                        <plus-outlined />
                                        <div style="margin-top: 8px">Upload</div>
                                    </div>
                                </a-upload>
                                <a-modal :open="previewVisible" :title="previewTitle" :footer="null"
                                    @cancel="handleCancel">
                                    <img alt="example" style="width: 100%" :src="previewImage" />
                                </a-modal>
                            </div>
                        </a-form-item>
                        <a-form-item label="Video(nếu có): ">
                            <a-input v-model:value="formState.fieldA" placeholder="video url" />
                        </a-form-item>
                        <a-form-item label="Mô tả chi tiết(*):">
                            <a-textarea rows="8" v-model:value="formState.desc" />
                        </a-form-item>
                        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
                            <a-button type="primary" @click="onSubmit">Gửi đi</a-button>
                            <a-button style="margin-left: 10px">Hủy</a-button>
                        </a-form-item>
                    </a-form>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.manager {
    margin-top: 10px;
}

* {
    color: rgb(0, 78, 78);
}
</style>