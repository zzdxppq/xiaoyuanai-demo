<template>
  <div class="page-card">
    <div class="page-toolbar">
      <div class="search-bar">
        <el-input v-model="kw" placeholder="学校名称" clearable style="width: 220px" />
        <el-select v-model="area" placeholder="所在区域" clearable style="width: 160px">
          <el-option v-for="a in ['海淀区','朝阳区','东城区','西城区','丰台区','通州区']" :key="a" :label="a" :value="a" />
        </el-select>
        <el-select v-model="level" placeholder="办学层次" clearable style="width: 140px">
          <el-option v-for="a in ['小学','初中','高中','九年一贯制']" :key="a" :label="a" :value="a" />
        </el-select>
        <el-button type="primary" :icon="Search">查询</el-button>
        <el-button :icon="Refresh">重置</el-button>
      </div>
      <div>
        <el-button type="primary" :icon="Plus">新增学校</el-button>
        <el-button :icon="Download">导出</el-button>
      </div>
    </div>

    <el-table :data="schools" stripe border>
      <el-table-column prop="id" label="ID" width="80" />
      <el-table-column prop="name" label="学校名称" min-width="180" />
      <el-table-column prop="area" label="所在区域" width="100" />
      <el-table-column prop="level" label="办学层次" width="120" />
      <el-table-column prop="studentCount" label="在校学生" width="100" align="right" />
      <el-table-column prop="teacherCount" label="教师人数" width="100" align="right" />
      <el-table-column prop="contact" label="联系人" width="100" />
      <el-table-column prop="phone" label="联系电话" width="140" />
      <el-table-column prop="createTime" label="接入时间" width="120" />
      <el-table-column label="操作" width="160" fixed="right">
        <template #default>
          <el-button type="primary" link>查看</el-button>
          <el-button type="primary" link>编辑</el-button>
          <el-button type="danger" link>停用</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      class="pagination"
      background
      layout="total, sizes, prev, pager, next, jumper"
      :total="286"
      :page-sizes="[10, 20, 50]"
      :default-page-size="20"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search, Refresh, Plus, Download } from '@element-plus/icons-vue'
import { schools } from '../../data/mock'

const kw = ref('')
const area = ref('')
const level = ref('')
</script>

<style scoped>
.pagination { margin-top: 16px; justify-content: flex-end; display: flex; }
</style>
