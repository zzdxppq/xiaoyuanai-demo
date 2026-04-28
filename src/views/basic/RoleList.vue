<template>
  <div class="page-card">
    <div class="page-toolbar">
      <div class="search-bar">
        <el-input v-model="kw" placeholder="角色名 / 编码" clearable style="width: 240px" />
        <el-select v-model="status" placeholder="状态" clearable style="width: 120px">
          <el-option label="启用" :value="1" />
          <el-option label="禁用" :value="0" />
        </el-select>
        <el-button type="primary" :icon="Search">查询</el-button>
        <el-button :icon="Refresh">重置</el-button>
      </div>
      <div>
        <el-button type="primary" :icon="Plus">新增角色</el-button>
      </div>
    </div>

    <el-table :data="roles" stripe border>
      <el-table-column prop="id" label="ID" width="80" />
      <el-table-column prop="code" label="角色编码" width="160" />
      <el-table-column prop="name" label="角色名称" width="160" />
      <el-table-column prop="desc" label="角色描述" min-width="220" />
      <el-table-column prop="userCount" label="用户数" width="100" align="right" />
      <el-table-column prop="status" label="状态" width="90">
        <template #default="{ row }">
          <el-switch :model-value="row.status === 1" />
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="120" />
      <el-table-column label="操作" width="220" fixed="right">
        <template #default>
          <el-button type="primary" link>分配权限</el-button>
          <el-button type="primary" link>编辑</el-button>
          <el-button type="danger" link>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search, Refresh, Plus } from '@element-plus/icons-vue'
import { roles } from '../../data/mock'

const kw = ref('')
const status = ref('')
</script>
