<script setup>
import { onMounted, ref } from 'vue';
import ShowProductView from '@/components/layouts/sevices/ShowProduct.vue';

const product = ref()
const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        name: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
    },
    {
        title: 'Action',
        key: 'action',
    },
];
const data = [
    {
        id: '1',
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        id: '2',
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        id: '3',
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher', 'teacher'],
    },
];
const activeKey = ref('1');
onMounted(() => {
})

</script>
<template>
    <section class="manager">
        <div class="container">
            <div class="manager_content">
                <h6>I. Trang quản lý</h6>
                <a-tabs v-model:activeKey="activeKey">
                    <a-tab-pane key="1">
                        <template #tab>
                            <span>
                                <i class='bx bx-outline'></i>
                                Quản lý license
                            </span>
                        </template>
                        <div class="view">
                            <a-table :columns="columns" :data-source="data">
                                <template #headerCell="{ column }">
                                    <template v-if="column.key === 'name'">
                                        <span>
                                            <i class='bx bx-leaf'></i>
                                            Name
                                        </span>
                                    </template>
                                </template>
                            </a-table>
                        </div>
                    </a-tab-pane>
                    <a-tab-pane key="2">
                        <template #tab>
                            <span>
                                <i class='bx bx-history' ></i>
                                Lịch sử thanh toán
                            </span>
                        </template>
                        <div class="view">
                            View 2
                        </div>
                    </a-tab-pane>
                    <a-tab-pane key="3">
                        <template #tab>
                            <span>
                                <i class='bx bx-message-square-detail' ></i>
                                Tạo Tickit hỗ trợ
                            </span>
                        </template>
                        <div class="view">
                            View 3
                        </div>
                    </a-tab-pane>
                </a-tabs>
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