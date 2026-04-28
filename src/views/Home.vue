<template>
  <div class="home">
    <div class="welcome-banner">
      <div class="welcome-text">
        <h2>欢迎回来，管理员 👋</h2>
        <p>今天是 {{ today }}，平台运行良好。</p>
      </div>
      <img class="welcome-illu" src="/logo.svg" />
    </div>

    <el-row :gutter="16" class="stat-row">
      <el-col :xs="12" :sm="12" :md="6" v-for="card in stats" :key="card.label">
        <div class="stat-card">
          <div class="icon-wrap" :style="{ background: card.color }">
            <el-icon><component :is="card.icon" /></el-icon>
          </div>
          <div class="meta">
            <div class="label">{{ card.label }}</div>
            <div class="value">{{ card.value }}</div>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="16" class="bottom-row">
      <el-col :xs="24" :md="14">
        <div class="page-card">
          <h3 class="section-title">平台数据概览（近 30 天）</h3>
          <el-table :data="trendData" stripe size="small">
            <el-table-column prop="date" label="日期" width="120" />
            <el-table-column prop="newUsers" label="新增用户" align="right" />
            <el-table-column prop="apiCalls" label="API 调用量" align="right" />
            <el-table-column prop="newWorks" label="新增作品" align="right" />
            <el-table-column prop="revenue" label="充值金额(元)" align="right" />
          </el-table>
        </div>
      </el-col>
      <el-col :xs="24" :md="10">
        <div class="page-card">
          <h3 class="section-title">快捷入口</h3>
          <el-row :gutter="12">
            <el-col :span="12" v-for="link in quickLinks" :key="link.path">
              <div class="quick-link" @click="$router.push(link.path)">
                <el-icon class="quick-icon"><component :is="link.icon" /></el-icon>
                <span>{{ link.label }}</span>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="page-card" style="margin-top: 16px;">
          <h3 class="section-title">最新公告</h3>
          <ul class="notice-list">
            <li v-for="(n, idx) in notices" :key="idx">
              <el-tag size="small" :type="n.type" effect="light">{{ n.tag }}</el-tag>
              <span class="notice-title">{{ n.title }}</span>
              <span class="notice-time">{{ n.time }}</span>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const today = new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })

const stats = [
  { label: '注册用户', value: '14,182', icon: 'User', color: 'linear-gradient(135deg,#366ef4,#5b8cf7)' },
  { label: '接入学校', value: '286', icon: 'OfficeBuilding', color: 'linear-gradient(135deg,#52c41a,#73d13d)' },
  { label: 'AI 作品总数', value: '8,924', icon: 'Picture', color: 'linear-gradient(135deg,#fa8c16,#ffa940)' },
  { label: '本月充值(万元)', value: '127.6', icon: 'Wallet', color: 'linear-gradient(135deg,#722ed1,#9254de)' }
]

const quickLinks = [
  { label: '用户管理', path: '/basic/user', icon: 'User' },
  { label: '应用列表', path: '/app/list', icon: 'Grid' },
  { label: '作品审核', path: '/work/review', icon: 'Document' },
  { label: '套餐列表', path: '/package/list', icon: 'Goods' }
]

const trendData = ref(Array.from({ length: 10 }, (_, i) => {
  const d = new Date(); d.setDate(d.getDate() - i)
  return {
    date: d.toISOString().slice(5, 10),
    newUsers: 80 + (i * 47) % 200,
    apiCalls: (12000 + (i * 3179) % 30000).toLocaleString(),
    newWorks: 30 + (i * 19) % 80,
    revenue: (4000 + (i * 1237) % 12000).toLocaleString()
  }
}))

const notices = [
  { tag: '系统', type: 'primary', title: '校园AI运营后台 v2.3 已上线，新增团体充值功能', time: '2026-04-25' },
  { tag: '运营', type: 'success', title: '4 月 AI 作品大赛报名通道开启', time: '2026-04-20' },
  { tag: '维护', type: 'warning', title: '4 月 28 日凌晨 2:00-4:00 进行系统维护', time: '2026-04-18' },
  { tag: '通知', type: 'info', title: '新增"京师教育模型 v2.1"已开放使用', time: '2026-04-15' }
]
</script>

<style scoped>
.welcome-banner {
  background: linear-gradient(135deg, #366ef4, #6ba3ff);
  color: #fff;
  border-radius: 8px;
  padding: 24px 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  box-shadow: 0 4px 12px rgba(54,110,244,.15);
}
.welcome-text h2 { margin: 0 0 6px; font-size: 22px; }
.welcome-text p { margin: 0; opacity: .85; font-size: 13px; }
.welcome-illu { width: 64px; height: 64px; opacity: .8; }

.stat-row { margin-bottom: 16px; }
.stat-row .el-col { margin-bottom: 12px; }

.bottom-row .el-col { margin-bottom: 12px; }

.quick-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 18px 0;
  background: #f5f7fa;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 12px;
  transition: all .2s;
  font-size: 13px;
  color: #606266;
}
.quick-link:hover {
  background: #ecf3ff;
  color: #366ef4;
  transform: translateY(-2px);
}
.quick-icon { font-size: 22px; }

.notice-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.notice-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px dashed #ebeef5;
  font-size: 13px;
}
.notice-list li:last-child { border-bottom: none; }
.notice-title { flex: 1; color: #303133; }
.notice-time { color: #909399; font-size: 12px; }
</style>
