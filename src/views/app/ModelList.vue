<template>
  <div class="page-card">
    <div class="page-toolbar">
      <div class="search-bar">
        <el-input v-model="kw" placeholder="模型名称" clearable style="width: 220px" />
        <el-select v-model="provider" placeholder="提供方" clearable style="width: 160px">
          <el-option v-for="a in ['京师数据','OpenAI','Anthropic','百度','阿里','深度求索']" :key="a" :label="a" :value="a" />
        </el-select>
        <el-select v-model="type" placeholder="类型" clearable style="width: 160px">
          <el-option v-for="a in ['通用大模型','教育垂直','图像生成','语音合成','OCR 识别']" :key="a" :label="a" :value="a" />
        </el-select>
        <el-button type="primary" :icon="Search">查询</el-button>
        <el-button :icon="Refresh">重置</el-button>
      </div>
      <div>
        <el-button type="primary" :icon="Plus" @click="$router.push('/app/model-add')">添加大模型</el-button>
      </div>
    </div>

    <el-table :data="models" stripe border>
      <el-table-column prop="id" label="ID" width="60" />
      <el-table-column prop="name" label="模型名称" min-width="180" />
      <el-table-column prop="provider" label="提供方" width="120" />
      <el-table-column prop="type" label="模型类型" width="120">
        <template #default="{ row }"><el-tag size="small">{{ row.type }}</el-tag></template>
      </el-table-column>
      <el-table-column prop="context" label="上下文" width="100" align="center" />
      <el-table-column prop="price" label="计费" width="160" />
      <el-table-column prop="appCount" label="关联应用" width="100" align="right" />
      <el-table-column prop="status" label="状态" width="90">
        <template #default="{ row }">
          <el-tag size="small" :type="row.status === 1 ? 'success' : 'info'">{{ row.status === 1 ? '启用' : '停用' }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="接入时间" width="120" />
      <el-table-column label="操作" width="220" fixed="right">
        <template #default>
          <el-button type="primary" link>编辑</el-button>
          <el-button type="primary" link>测试</el-button>
          <el-button type="danger" link>停用</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search, Refresh, Plus } from '@element-plus/icons-vue'
import { models } from '../../data/mock'

const kw = ref('')
const provider = ref('')
const type = ref('')
</script>
