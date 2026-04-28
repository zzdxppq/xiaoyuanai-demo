<template>
  <div class="page-card">
    <div class="page-toolbar">
      <div class="search-bar">
        <el-input v-model="kw" placeholder="学校名称" clearable style="width: 240px" />
        <el-select v-model="pkg" placeholder="套餐类型" clearable style="width: 180px">
          <el-option v-for="a in ['班级套餐','校园套餐 (小)','校园套餐 (大)','区域套餐']" :key="a" :label="a" :value="a" />
        </el-select>
        <el-date-picker v-model="dateRange" type="daterange" range-separator="-" start-placeholder="充值开始" end-placeholder="充值结束" style="width: 280px" />
        <el-button type="primary" :icon="Search">查询</el-button>
        <el-button :icon="Refresh">重置</el-button>
      </div>
      <div>
        <el-button type="primary" :icon="Plus">新增充值</el-button>
        <el-button :icon="Download">导出</el-button>
      </div>
    </div>

    <el-row :gutter="12" style="margin-bottom: 16px;">
      <el-col :span="6">
        <div class="kpi-card"><div class="lbl">本月充值学校</div><div class="val">28</div></div>
      </el-col>
      <el-col :span="6">
        <div class="kpi-card"><div class="lbl">本月充值金额</div><div class="val">¥ 127.6 万</div></div>
      </el-col>
      <el-col :span="6">
        <div class="kpi-card"><div class="lbl">活跃团体账户</div><div class="val">186</div></div>
      </el-col>
      <el-col :span="6">
        <div class="kpi-card"><div class="lbl">即将到期</div><div class="val" style="color:#fa8c16;">12</div></div>
      </el-col>
    </el-row>

    <el-table :data="groupRecharges" stripe border>
      <el-table-column prop="id" label="订单 ID" width="100" />
      <el-table-column prop="school" label="充值学校" min-width="180" />
      <el-table-column prop="packageName" label="套餐" width="160">
        <template #default="{ row }"><el-tag size="small" type="warning">{{ row.packageName }}</el-tag></template>
      </el-table-column>
      <el-table-column prop="amount" label="单价(元)" width="100" align="right">
        <template #default="{ row }">{{ row.amount.toLocaleString() }}</template>
      </el-table-column>
      <el-table-column prop="count" label="数量" width="80" align="right" />
      <el-table-column prop="totalUsers" label="覆盖人数" width="110" align="right" />
      <el-table-column prop="operator" label="操作员" width="100" />
      <el-table-column prop="rechargeTime" label="充值时间" width="170" />
      <el-table-column prop="status" label="状态" width="90">
        <template #default><el-tag size="small" type="success">成功</el-tag></template>
      </el-table-column>
      <el-table-column label="操作" width="160" fixed="right">
        <template #default>
          <el-button type="primary" link>详情</el-button>
          <el-button type="primary" link>开发票</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search, Refresh, Plus, Download } from '@element-plus/icons-vue'
import { groupRecharges } from '../../data/mock'

const kw = ref('')
const pkg = ref('')
const dateRange = ref(null)
</script>

<style scoped>
.kpi-card { background:#fff; padding:16px 18px; border-radius:6px; box-shadow:0 1px 4px rgba(0,0,0,.04); }
.kpi-card .lbl { color:#909399; font-size:13px; margin-bottom:6px; }
.kpi-card .val { font-size:22px; font-weight:600; color:#303133; }
</style>
