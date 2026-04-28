# 校园AI运营后台 - 演示版

> 静态演示后台，仅供向客户展示。所有数据为本地 mock，无后端依赖。

## 包含模块（17 个页面）

```
首页 (Dashboard)
基础管理
  ├─ 用户管理       (列表)
  ├─ 学校管理       (列表)
  ├─ 区域管理       (列表)
  └─ 角色管理       (列表)
应用管理
  ├─ 应用管理       (列表 + 添加)
  ├─ 场景管理       (列表 + 添加)
  └─ 大模型         (列表 + 添加)
套餐管理
  ├─ 套餐管理       (列表 + 添加)
  ├─ 个人套餐管理   (列表)
  └─ 团体套餐充值   (列表)
AI作品
  ├─ 作品审核       (列表)
  ├─ 作品分享审核   (列表)
  └─ 作品场景设置   (列表)
```

## 技术栈

- Vue 3 + Vite + Vue Router
- Element Plus 2.7（与原产品同栈，主色 `#366ef4`）
- 静态打包，hash 路由，可丢任意 CDN / Nginx / 静态托管

## 本地开发

```bash
npm install
npm run dev      # http://localhost:5173
```

## 生产打包

```bash
npm run build    # 输出到 dist/
npm run preview  # 本地验证 dist/
```

## 部署

打包后只有一个 `dist/` 目录，约 1.7MB（gzip 后 ~400KB）。

### 方案 1：Nginx

```nginx
server {
    listen 80;
    server_name demo.example.com;
    root /var/www/school-ai-demo;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /assets/ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
```

### 方案 2：Vercel / Netlify / Cloudflare Pages

直接拖 `dist/` 上去，秒部署。无需配置。

### 方案 3：阿里云 OSS / 七牛云 / 腾讯云 COS

把 `dist/` 里的文件全部上传到桶根目录，开启静态网站托管即可。

## 演示要点

- 进入即首页 Dashboard，无登录环节
- 所有"添加"页只展示表单 UI，不提交真实数据
- 所有"删除/编辑/审核"按钮都是 UI 占位，点击无副作用
- 假数据合理（北京几所学校 + 教师/学生姓名 + 真实模型名），可直接给客户看

## 修改清单

- 改主色：`src/styles/main.css` → `--brand-primary`
- 改 Logo：替换 `public/logo.svg`
- 改头部标题：`src/layouts/DefaultLayout.vue` → `校园AI运营后台`
- 改假数据：`src/data/mock.js`
