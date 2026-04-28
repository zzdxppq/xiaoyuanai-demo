<template>
  <div class="page-card">
    <div class="page-toolbar">
      <div class="search-bar">
        <el-input v-model="kw" placeholder="作品标题 / 作者" clearable style="width: 240px" />
        <el-select v-model="scope" placeholder="分享范围" clearable style="width: 140px">
          <el-option v-for="a in ['全平台公开','仅校内','仅班级','仅好友']" :key="a" :label="a" :value="a" />
        </el-select>
        <el-select v-model="status" placeholder="审核状态" clearable style="width: 140px">
          <el-option v-for="a in ['待审核','已通过','已驳回']" :key="a" :label="a" :value="a" />
        </el-select>
        <el-button type="primary" :icon="Search">查询</el-button>
        <el-button :icon="Refresh">重置</el-button>
      </div>
    </div>

    <el-table :data="shareReviews" stripe border>
      <el-table-column prop="id" label="ID" width="80" />
      <el-table-column prop="workTitle" label="作品标题" min-width="220" />
      <el-table-column prop="author" label="申请人" width="120" />
      <el-table-column prop="shareScope" label="分享范围" width="140">
        <template #default="{ row }">
          <el-tag size="small" :type="row.shareScope === '全平台公开' ? 'danger' : 'info'">{{ row.shareScope }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="applyTime" label="申请时间" width="170" />
      <el-table-column prop="reviewer" label="审核人" width="120" />
      <el-table-column prop="status" label="状态" width="100">
        <template #default="{ row }">
          <el-tag size="small" :type="row.status === '已通过' ? 'success' : (row.status === '已驳回' ? 'danger' : 'warning')">{{ row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="220" fixed="right">
        <template #default>
          <el-button type="primary" link>查看作品</el-button>
          <el-button type="success" link>同意分享</el-button>
          <el-button type="danger" link>拒绝</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      class="pagination"
      background
      layout="total, prev, pager, next"
      :total="86"
      :default-page-size="20"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search, Refresh } from '@element-plus/icons-vue'
import { shareReviews } from '../../data/mock'

const kw = ref('')
const scope = ref('')
const status = ref('')
</script>

<style scoped>
.pagination { margin-top: 16px; justify-content: flex-end; display: flex; }
</style>
