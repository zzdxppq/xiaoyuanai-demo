<template>
  <div class="page-card">
    <div class="page-toolbar">
      <div class="search-bar">
        <el-input v-model="kw" placeholder="应用名称" clearable style="width: 220px" />
        <el-select v-model="cat" placeholder="分类" clearable style="width: 160px">
          <el-option v-for="a in ['学科教学','学习辅导','素质拓展','管理工具']" :key="a" :label="a" :value="a" />
        </el-select>
        <el-select v-model="status" placeholder="状态" clearable style="width: 120px">
          <el-option label="上架" :value="1" />
          <el-option label="下架" :value="0" />
        </el-select>
        <el-button type="primary" :icon="Search">查询</el-button>
        <el-button :icon="Refresh">重置</el-button>
      </div>
      <div>
        <el-button type="primary" :icon="Plus" @click="$router.push('/app/add')">添加应用</el-button>
      </div>
    </div>

    <el-table :data="apps" stripe border>
      <el-table-column prop="id" label="ID" width="80" />
      <el-table-column prop="name" label="应用名称" min-width="160" />
      <el-table-column prop="category" label="分类" width="120">
        <template #default="{ row }"><el-tag size="small" type="info">{{ row.category }}</el-tag></template>
      </el-table-column>
      <el-table-column prop="model" label="使用模型" width="170" />
      <el-table-column prop="scene" label="关联场景" width="100" align="right" />
      <el-table-column prop="callCount" label="调用量" width="120" align="right">
        <template #default="{ row }">{{ row.callCount.toLocaleString() }}</template>
      </el-table-column>
      <el-table-column prop="status" label="状态" width="90">
        <template #default="{ row }">
          <el-tag size="small" :type="row.status === 1 ? 'success' : 'info'">{{ row.status === 1 ? '上架' : '下架' }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="120" />
      <el-table-column label="操作" width="200" fixed="right">
        <template #default>
          <el-button type="primary" link>编辑</el-button>
          <el-button type="primary" link>调用记录</el-button>
          <el-button type="danger" link>下架</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      class="pagination"
      background
      layout="total, sizes, prev, pager, next, jumper"
      :total="68"
      :page-sizes="[10, 20, 50]"
      :default-page-size="20"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search, Refresh, Plus } from '@element-plus/icons-vue'
import { apps } from '../../data/mock'

const kw = ref('')
const cat = ref('')
const status = ref('')
</script>

<style scoped>
.pagination { margin-top: 16px; justify-content: flex-end; display: flex; }
</style>
