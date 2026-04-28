import { createRouter, createWebHashHistory } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    redirect: '/home',
    children: [
      { path: 'home', name: 'home', component: () => import('../views/Home.vue'), meta: { title: '首页' } },

      // 基础管理
      { path: 'basic/user', name: 'basic-user', component: () => import('../views/basic/UserList.vue'), meta: { title: '用户管理' } },
      { path: 'basic/school', name: 'basic-school', component: () => import('../views/basic/SchoolList.vue'), meta: { title: '学校管理' } },
      { path: 'basic/area', name: 'basic-area', component: () => import('../views/basic/AreaList.vue'), meta: { title: '区域管理' } },
      { path: 'basic/role', name: 'basic-role', component: () => import('../views/basic/RoleList.vue'), meta: { title: '角色管理' } },

      // 应用管理
      { path: 'app/list', name: 'app-list', component: () => import('../views/app/AppList.vue'), meta: { title: '应用列表' } },
      { path: 'app/add', name: 'app-add', component: () => import('../views/app/AppAdd.vue'), meta: { title: '添加应用' } },
      { path: 'app/scene', name: 'app-scene', component: () => import('../views/app/SceneList.vue'), meta: { title: '场景列表' } },
      { path: 'app/scene-add', name: 'app-scene-add', component: () => import('../views/app/SceneAdd.vue'), meta: { title: '添加场景' } },
      { path: 'app/model', name: 'app-model', component: () => import('../views/app/ModelList.vue'), meta: { title: '大模型列表' } },
      { path: 'app/model-add', name: 'app-model-add', component: () => import('../views/app/ModelAdd.vue'), meta: { title: '添加大模型' } },

      // 套餐管理
      { path: 'package/list', name: 'package-list', component: () => import('../views/package/PackageList.vue'), meta: { title: '套餐列表' } },
      { path: 'package/add', name: 'package-add', component: () => import('../views/package/PackageAdd.vue'), meta: { title: '添加套餐' } },
      { path: 'package/personal', name: 'package-personal', component: () => import('../views/package/PersonalPackage.vue'), meta: { title: '个人套餐管理' } },
      { path: 'package/group', name: 'package-group', component: () => import('../views/package/GroupRecharge.vue'), meta: { title: '团体套餐充值' } },

      // AI作品
      { path: 'work/review', name: 'work-review', component: () => import('../views/work/WorkReview.vue'), meta: { title: '作品审核' } },
      { path: 'work/share-review', name: 'work-share-review', component: () => import('../views/work/WorkShareReview.vue'), meta: { title: '作品分享审核' } },
      { path: 'work/scene-set', name: 'work-scene-set', component: () => import('../views/work/WorkSceneSet.vue'), meta: { title: '作品场景设置' } }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title} - 校园AI运营后台`
  }
})

export default router
