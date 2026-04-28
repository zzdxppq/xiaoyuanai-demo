<template>
  <div class="page-card">
    <div class="page-toolbar">
      <div class="search-bar">
        <el-input v-model="kw" placeholder="作品标题 / 作者" clearable style="width: 240px" />
        <el-select v-model="type" placeholder="作品类型" clearable style="width: 140px">
          <el-option v-for="a in ['文本','图片','音频','视频']" :key="a" :label="a" :value="a" />
        </el-select>
        <el-select v-model="status" placeholder="审核状态" clearable style="width: 140px">
          <el-option v-for="a in ['待审核','已通过','已驳回']" :key="a" :label="a" :value="a" />
        </el-select>
        <el-date-picker v-model="dateRange" type="daterange" range-separator="-" start-placeholder="提交开始" end-placeholder="提交结束" style="width: 280px" />
        <el-button type="primary" :icon="Search">查询</el-button>
        <el-button :icon="Refresh">重置</el-button>
      </div>
    </div>

    <el-tabs v-model="activeTab" class="status-tabs">
      <el-tab-pane label="全部 (124)" name="all" />
      <el-tab-pane label="待审核 (38)" name="pending" />
      <el-tab-pane label="已通过 (76)" name="approved" />
      <el-tab-pane label="已驳回 (10)" name="rejected" />
    </el-tabs>

    <el-table :data="works" stripe border>
      <el-table-column type="selection" width="48" />
      <el-table-column prop="id" label="ID" width="80" />
      <el-table-column prop="title" label="作品标题" min-width="200" />
      <el-table-column prop="author" label="作者" width="120" />
      <el-table-column prop="school" label="所属学校" width="140" />
      <el-table-column prop="app" label="使用应用" width="160" />
      <el-table-column prop="type" label="类型" width="80">
        <template #default="{ row }"><el-tag size="small">{{ row.type }}</el-tag></template>
      </el-table-column>
      <el-table-column prop="submitTime" label="提交时间" width="160" />
      <el-table-column prop="status" label="状态" width="100">
        <template #default="{ row }">
          <el-tag size="small" :type="row.status === '已通过' ? 'success' : (row.status === '已驳回' ? 'danger' : 'warning')">{{ row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200" fixed="right">
        <template #default>
          <el-button type="primary" link>预览</el-button>
          <el-button type="success" link>通过</el-button>
          <el-button type="danger" link>驳回</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="batch-bar">
      <el-button>批量通过</el-button>
      <el-button>批量驳回</el-button>
      <el-pagination
        background
        layout="total, prev, pager, next"
        :total="124"
        :default-page-size="20"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search, Refresh } from '@element-plus/icons-vue'
import { works } from '../../data/mock'

const kw = ref('')
const type = ref('')
const status = ref('')
const dateRange = ref(null)
const activeTab = ref('all')
</script>

<style scoped>
.status-tabs { margin: 8px 0 12px; }
.batch-bar { display:flex; justify-content:space-between; align-items:center; margin-top:16px; gap:12px; }
</style>
