<template>
  <div class="page-card">
    <div class="page-toolbar">
      <div class="search-bar">
        <el-input v-model="search.keyword" placeholder="姓名 / 账号 / 手机号" clearable style="width: 240px" />
        <el-select v-model="search.role" placeholder="角色" clearable style="width: 140px">
          <el-option label="全部" value="" />
          <el-option v-for="r in ['超级管理员','校长','教师','学生','家长']" :key="r" :label="r" :value="r" />
        </el-select>
        <el-select v-model="search.status" placeholder="状态" clearable style="width: 120px">
          <el-option label="启用" :value="1" />
          <el-option label="禁用" :value="0" />
        </el-select>
        <el-button type="primary" :icon="Search">查询</el-button>
        <el-button :icon="Refresh">重置</el-button>
      </div>
      <div>
        <el-button type="primary" :icon="Plus">新增用户</el-button>
        <el-button :icon="Upload">批量导入</el-button>
        <el-button :icon="Download">导出</el-button>
      </div>
    </div>

    <el-table :data="users" stripe border>
      <el-table-column type="selection" width="48" />
      <el-table-column prop="id" label="ID" width="80" />
      <el-table-column prop="account" label="账号" width="120" />
      <el-table-column prop="name" label="姓名" width="120" />
      <el-table-column prop="phone" label="手机号" width="140" />
      <el-table-column prop="school" label="所属学校" />
      <el-table-column prop="role" label="角色" width="120">
        <template #default="{ row }">
          <el-tag size="small">{{ row.role }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="状态" width="90">
        <template #default="{ row }">
          <el-switch :model-value="row.status === 1" />
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="170" />
      <el-table-column label="操作" width="180" fixed="right">
        <template #default>
          <el-button type="primary" link>编辑</el-button>
          <el-button type="primary" link>重置密码</el-button>
          <el-button type="danger" link>删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      class="pagination"
      background
      layout="total, sizes, prev, pager, next, jumper"
      :total="142"
      :page-sizes="[10, 20, 50, 100]"
      :default-page-size="20"
    />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { Search, Refresh, Plus, Upload, Download } from '@element-plus/icons-vue'
import { users } from '../../data/mock'

const search = reactive({ keyword: '', role: '', status: '' })
</script>

<style scoped>
.pagination { margin-top: 16px; justify-content: flex-end; display: flex; }
</style>
