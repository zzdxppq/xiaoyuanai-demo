<template>
  <div class="page-card">
    <div class="page-toolbar">
      <div class="search-bar">
        <el-input v-model="kw" placeholder="场景名称" clearable style="width: 240px" />
        <el-select v-model="status" placeholder="状态" clearable style="width: 120px">
          <el-option label="启用" :value="1" />
          <el-option label="停用" :value="0" />
        </el-select>
        <el-button type="primary" :icon="Search">查询</el-button>
        <el-button :icon="Refresh">重置</el-button>
      </div>
      <div>
        <el-button type="primary" :icon="Plus">添加作品场景</el-button>
      </div>
    </div>

    <el-table :data="workScenes" stripe border>
      <el-table-column prop="id" label="ID" width="80" />
      <el-table-column prop="name" label="场景名称" width="180" />
      <el-table-column prop="desc" label="场景描述" min-width="280" />
      <el-table-column prop="workCount" label="作品数" width="100" align="right" />
      <el-table-column prop="sort" label="排序" width="80" align="right" />
      <el-table-column prop="status" label="状态" width="90">
        <template #default="{ row }">
          <el-switch :model-value="row.status === 1" />
        </template>
      </el-table-column>
      <el-table-column prop="updateTime" label="更新时间" width="120" />
      <el-table-column label="操作" width="240" fixed="right">
        <template #default>
          <el-button type="primary" link>编辑</el-button>
          <el-button type="primary" link>管理作品</el-button>
          <el-button type="danger" link>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search, Refresh, Plus } from '@element-plus/icons-vue'
import { workScenes } from '../../data/mock'

const kw = ref('')
const status = ref('')
</script>
