<template>
  <el-container class="app-container">
    <el-header class="app-header">
      <div class="brand">
        <img class="logo" src="/logo.svg" alt="logo" />
        <span class="brand-name">校园AI运营后台</span>
      </div>
      <el-dropdown class="user-menu" trigger="click">
        <span class="user-link">
          <el-avatar :size="28" style="background:#366ef4;color:#fff;">A</el-avatar>
          <span class="user-name">管理员</span>
          <el-icon><ArrowDown /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-header>

    <el-container class="app-body">
      <el-aside class="app-aside" width="200px">
        <el-menu
          :default-active="activeMenu"
          :default-openeds="defaultOpeneds"
          router
          class="side-menu"
          background-color="#1f2d4f"
          text-color="#c5cdd9"
          active-text-color="#ffffff"
        >
          <el-menu-item index="/home">
            <el-icon><HomeFilled /></el-icon>
            <span>首页</span>
          </el-menu-item>

          <el-sub-menu index="basic">
            <template #title>
              <el-icon><Setting /></el-icon>
              <span>基础管理</span>
            </template>
            <el-menu-item index="/basic/user">用户管理</el-menu-item>
            <el-menu-item index="/basic/school">学校管理</el-menu-item>
            <el-menu-item index="/basic/area">区域管理</el-menu-item>
            <el-menu-item index="/basic/role">角色管理</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="app">
            <template #title>
              <el-icon><Grid /></el-icon>
              <span>应用管理</span>
            </template>
            <el-sub-menu index="app-app">
              <template #title>应用管理</template>
              <el-menu-item index="/app/list">应用列表</el-menu-item>
              <el-menu-item index="/app/add">添加应用</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="app-scene">
              <template #title>场景管理</template>
              <el-menu-item index="/app/scene">场景列表</el-menu-item>
              <el-menu-item index="/app/scene-add">添加场景</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="app-model">
              <template #title>大模型</template>
              <el-menu-item index="/app/model">大模型列表</el-menu-item>
              <el-menu-item index="/app/model-add">添加大模型</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>

          <el-sub-menu index="package">
            <template #title>
              <el-icon><Goods /></el-icon>
              <span>套餐管理</span>
            </template>
            <el-sub-menu index="pkg-pkg">
              <template #title>套餐管理</template>
              <el-menu-item index="/package/list">套餐列表</el-menu-item>
              <el-menu-item index="/package/add">添加套餐</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="/package/personal">个人套餐管理</el-menu-item>
            <el-menu-item index="/package/group">团体套餐充值</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="work">
            <template #title>
              <el-icon><Picture /></el-icon>
              <span>AI作品</span>
            </template>
            <el-menu-item index="/work/review">作品审核</el-menu-item>
            <el-menu-item index="/work/share-review">作品分享审核</el-menu-item>
            <el-menu-item index="/work/scene-set">作品场景设置</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>

      <el-container class="content-wrap">
        <el-main class="app-main">
          <el-breadcrumb separator="/" class="breadcrumb">
            <el-breadcrumb-item :to="'/home'">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-if="$route.meta.title && $route.path !== '/home'">{{ $route.meta.title }}</el-breadcrumb-item>
          </el-breadcrumb>
          <router-view />
        </el-main>
        <el-footer class="app-footer">@版权所有 京师数据（北京）教育有限公司</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const activeMenu = computed(() => route.path)
const defaultOpeneds = ['basic', 'app', 'app-app', 'app-scene', 'app-model', 'package', 'pkg-pkg', 'work']
</script>

<style scoped>
.app-container { height: 100vh; }
.app-header {
  background: var(--brand-header-bg);
  color: var(--brand-header-text);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  height: 60px;
  box-shadow: 0 2px 4px rgba(0,0,0,.08);
}
.brand { display: flex; align-items: center; gap: 12px; }
.brand .logo { width: 36px; height: 36px; }
.brand-name { font-size: 18px; font-weight: 600; letter-spacing: 1px; }
.user-link {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: #fff;
}
.user-name { font-size: 14px; }

.app-body { height: calc(100vh - 60px); }
.app-aside {
  background: var(--brand-header-bg);
  overflow-y: auto;
}
.side-menu { border-right: none; }
.side-menu :deep(.el-menu-item.is-active) {
  background-color: rgba(54, 110, 244, .25) !important;
  border-right: 3px solid #366ef4;
}
.side-menu :deep(.el-sub-menu .el-menu) {
  background-color: #18233f !important;
}

.content-wrap { display: flex; flex-direction: column; }
.app-main {
  background: #f0f2f5;
  padding: 16px 20px;
  overflow-y: auto;
}
.breadcrumb { margin-bottom: 14px; }

.app-footer {
  text-align: center;
  background: #f0f2f5;
  color: #909399;
  font-size: 12px;
  height: 40px !important;
  line-height: 40px;
}
</style>
