<template>
  <div class="page-card">
    <div class="page-toolbar">
      <div class="search-bar">
        <el-input v-model="kw" placeholder="套餐名称" clearable style="width: 220px" />
        <el-select v-model="target" placeholder="适用对象" clearable style="width: 140px">
          <el-option label="个人" value="个人" />
          <el-option label="团体" value="团体" />
        </el-select>
        <el-select v-model="status" placeholder="状态" clearable style="width: 120px">
          <el-option label="启用" :value="1" />
          <el-option label="停用" :value="0" />
        </el-select>
        <el-button type="primary" :icon="Search">查询</el-button>
        <el-button :icon="Refresh">重置</el-button>
      </div>
      <div>
        <el-button type="primary" :icon="Plus" @click="$router.push('/package/add')">添加套餐</el-button>
      </div>
    </div>

    <el-table :data="packages" stripe border>
      <el-table-column prop="id" label="ID" width="60" />
      <el-table-column prop="name" label="套餐名称" min-width="160" />
      <el-table-column prop="target" label="适用对象" width="100">
        <template #default="{ row }">
          <el-tag size="small" :type="row.target === '个人' ? 'primary' : 'warning'">{{ row.target }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="price" label="价格(元)" width="110" align="right" />
      <el-table-column prop="period" label="周期" width="80" align="center" />
      <el-table-column prop="tokenLimit" label="Tokens 配额" width="160" />
      <el-table-column prop="appCount" label="可用应用" width="120" align="center" />
      <el-table-column prop="userLimit" label="用户上限" width="100" align="right" />
      <el-table-column prop="sales" label="销量" width="100" align="right">
        <template #default="{ row }">{{ row.sales.toLocaleString() }}</template>
      </el-table-column>
      <el-table-column prop="status" label="状态" width="80">
        <template #default="{ row }">
          <el-switch :model-value="row.status === 1" />
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200" fixed="right">
        <template #default>
          <el-button type="primary" link>编辑</el-button>
          <el-button type="primary" link>销售记录</el-button>
          <el-button type="danger" link>下架</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search, Refresh, Plus } from '@element-plus/icons-vue'
import { packages } from '../../data/mock'

const kw = ref('')
const target = ref('')
const status = ref('')
</script>
