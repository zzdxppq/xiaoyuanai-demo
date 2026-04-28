<template>
  <div class="page-card">
    <div class="page-toolbar">
      <div class="search-bar">
        <el-input v-model="kw" placeholder="场景名称" clearable style="width: 220px" />
        <el-select v-model="cat" placeholder="分类" clearable style="width: 160px">
          <el-option v-for="a in ['教学场景','学习场景','管理场景','德育场景']" :key="a" :label="a" :value="a" />
        </el-select>
        <el-button type="primary" :icon="Search">查询</el-button>
        <el-button :icon="Refresh">重置</el-button>
      </div>
      <div>
        <el-button type="primary" :icon="Plus" @click="$router.push('/app/scene-add')">添加场景</el-button>
      </div>
    </div>

    <el-table :data="scenes" stripe border>
      <el-table-column prop="id" label="ID" width="80" />
      <el-table-column prop="name" label="场景名称" min-width="160" />
      <el-table-column prop="category" label="场景分类" width="120">
        <template #default="{ row }"><el-tag size="small" type="warning">{{ row.category }}</el-tag></template>
      </el-table-column>
      <el-table-column prop="appCount" label="关联应用数" width="120" align="right" />
      <el-table-column prop="promptVersion" label="Prompt 版本" width="130" />
      <el-table-column prop="status" label="状态" width="90">
        <template #default="{ row }">
          <el-tag size="small" :type="row.status === 1 ? 'success' : 'info'">{{ row.status === 1 ? '启用' : '停用' }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="120" />
      <el-table-column label="操作" width="220" fixed="right">
        <template #default>
          <el-button type="primary" link>编辑</el-button>
          <el-button type="primary" link>关联应用</el-button>
          <el-button type="danger" link>停用</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      class="pagination"
      background
      layout="total, prev, pager, next"
      :total="42"
      :default-page-size="20"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search, Refresh, Plus } from '@element-plus/icons-vue'
import { scenes } from '../../data/mock'

const kw = ref('')
const cat = ref('')
</script>

<style scoped>
.pagination { margin-top: 16px; justify-content: flex-end; display: flex; }
</style>
