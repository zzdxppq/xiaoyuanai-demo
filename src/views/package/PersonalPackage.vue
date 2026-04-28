<template>
  <div class="page-card">
    <div class="page-toolbar">
      <div class="search-bar">
        <el-input v-model="kw" placeholder="用户姓名 / 手机号" clearable style="width: 240px" />
        <el-select v-model="pkg" placeholder="所购套餐" clearable style="width: 180px">
          <el-option v-for="a in ['基础版','标准版','专业版','年度专业版']" :key="a" :label="a" :value="a" />
        </el-select>
        <el-select v-model="status" placeholder="状态" clearable style="width: 140px">
          <el-option label="使用中" :value="1" />
          <el-option label="已过期" :value="2" />
        </el-select>
        <el-date-picker v-model="dateRange" type="daterange" range-separator="-" start-placeholder="开始" end-placeholder="结束" style="width: 280px" />
        <el-button type="primary" :icon="Search">查询</el-button>
        <el-button :icon="Refresh">重置</el-button>
      </div>
      <div>
        <el-button :icon="Download">导出</el-button>
      </div>
    </div>

    <el-table :data="personalPackages" stripe border>
      <el-table-column prop="id" label="订单 ID" width="100" />
      <el-table-column prop="user" label="用户" width="120" />
      <el-table-column prop="phone" label="手机号" width="140" />
      <el-table-column prop="packageName" label="套餐名称" width="140">
        <template #default="{ row }"><el-tag size="small">{{ row.packageName }}</el-tag></template>
      </el-table-column>
      <el-table-column prop="amount" label="金额(元)" width="100" align="right" />
      <el-table-column prop="startTime" label="开始日期" width="120" />
      <el-table-column prop="endTime" label="到期日期" width="120" />
      <el-table-column prop="remainTokens" label="剩余 Tokens" width="120" align="right" />
      <el-table-column prop="status" label="状态" width="100">
        <template #default="{ row }">
          <el-tag size="small" :type="row.status === 1 ? 'success' : 'danger'">{{ row.status === 1 ? '使用中' : '已过期' }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180" fixed="right">
        <template #default>
          <el-button type="primary" link>详情</el-button>
          <el-button type="primary" link>赠送 Tokens</el-button>
          <el-button type="danger" link>退款</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      class="pagination"
      background
      layout="total, sizes, prev, pager, next, jumper"
      :total="2186"
      :page-sizes="[20, 50, 100]"
      :default-page-size="20"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search, Refresh, Download } from '@element-plus/icons-vue'
import { personalPackages } from '../../data/mock'

const kw = ref('')
const pkg = ref('')
const status = ref('')
const dateRange = ref(null)
</script>

<style scoped>
.pagination { margin-top: 16px; justify-content: flex-end; display: flex; }
</style>
