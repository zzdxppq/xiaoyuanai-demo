<template>
  <div class="page-card">
    <div class="page-toolbar">
      <div class="search-bar">
        <el-input v-model="kw" placeholder="区域名称 / 编码" clearable style="width: 220px" />
        <el-select v-model="lvl" placeholder="级别" clearable style="width: 140px">
          <el-option v-for="a in ['国家','省','市','区']" :key="a" :label="a" :value="a" />
        </el-select>
        <el-button type="primary" :icon="Search">查询</el-button>
        <el-button :icon="Refresh">重置</el-button>
      </div>
      <div>
        <el-button type="primary" :icon="Plus">新增区域</el-button>
      </div>
    </div>

    <el-table :data="areas" stripe border>
      <el-table-column prop="id" label="ID" width="80" />
      <el-table-column prop="code" label="区域编码" width="120" />
      <el-table-column prop="name" label="区域名称" min-width="180" />
      <el-table-column prop="parent" label="上级区域" width="140" />
      <el-table-column prop="level" label="级别" width="100">
        <template #default="{ row }"><el-tag size="small">{{ row.level }}</el-tag></template>
      </el-table-column>
      <el-table-column prop="schoolCount" label="学校数" width="100" align="right" />
      <el-table-column prop="sort" label="排序" width="80" align="right" />
      <el-table-column label="操作" width="200" fixed="right">
        <template #default>
          <el-button type="primary" link>新增下级</el-button>
          <el-button type="primary" link>编辑</el-button>
          <el-button type="danger" link>删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      class="pagination"
      background
      layout="total, prev, pager, next"
      :total="35"
      :default-page-size="20"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search, Refresh, Plus } from '@element-plus/icons-vue'
import { areas } from '../../data/mock'

const kw = ref('')
const lvl = ref('')
</script>

<style scoped>
.pagination { margin-top: 16px; justify-content: flex-end; display: flex; }
</style>
