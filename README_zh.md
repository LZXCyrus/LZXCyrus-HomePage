# LZXCyrus-HomePage
[English](README.md) | [中文](README_zh.md)


一款采用极简人文主义设计风格打造的现代个人主页，拥有流畅的动态背景、全响应式布局与丝滑的页面切换效果，使用 Vite + React + Tailwind CSS + Framer Motion 构建。

## 特性

- 🌐 **中英文双语切换** - 全局实时语言切换
- 🎨 **极简人文主义设计风格** - 暖米色、赤陶强调色、大量留白
- ✨ **流畅动画** - 页面切换和按钮交互丝滑动画
- 🌊 **动态背景** - 每个页面独立柔和动态背景效果
- 📱 **响应式设计** - 完美适配各种屏幕尺寸
- 🚀 **快速部署** - 支持 GitHub Pages 直接部署

## 页面结构

1. **首页** - Hero 区域、项目预览、技能展示
2. **项目列表页** - 完整项目展示，带技术栈标签
3. **项目详情页** - 单个项目详细信息
4. **关于我页** - 个人介绍、技能、经验时间线
5. **技术博客页** - 文章列表，支持外链跳转

## 技术栈

- **框架**: React 18 + TypeScript
- **构建工具**: Vite 6
- **样式**: Tailwind CSS 3
- **动画**: Framer Motion
- **图标**: Lucide React
- **国际化**: i18next + react-i18next
- **路由**: React Router v6

## 快速开始

### 安装依赖

```bash
# 使用 pnpm（推荐）
pnpm install

# 或使用 npm
npm install

# 或使用 yarn
yarn install
```

### 开发模式

```bash
pnpm dev
```

在浏览器中打开 http://localhost:5173

### 构建生产版本

```bash
pnpm build
```

构建产物将输出到 `dist` 目录。

### 预览生产版本

```bash
pnpm preview
```

## 部署到 GitHub Pages

### 方法一：使用 GitHub Actions（推荐）

1.  Fork 此仓库到你的 GitHub 账号
2.  在仓库设置中启用 GitHub Pages：
   - Settings → Pages → Source → GitHub Actions
3.  推送代码到 `main` 分支，Actions 将自动构建并部署

### 方法二：手动部署

1.  构建项目：

```bash
pnpm build
```

2.  安装 gh-pages 包：

```bash
pnpm add -D gh-pages
```

3.  在 `package.json` 中添加部署脚本：

```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

4.  运行部署命令：

```bash
pnpm deploy
```

### 方法三：使用 dist 文件夹

1.  运行 `pnpm build`
2.  将 `dist` 文件夹内容推送到 `gh-pages` 分支
3.  或下载 `dist` 文件夹内容到本地服务器托管

## 自定义配置

### 1. 修改个人信息

编辑以下文件中的内容：

- `src/i18n/index.ts` - 翻译文本
- `src/data/projects.ts` - 项目数据
- `src/data/blogPosts.ts` - 博客文章数据
- `src/pages/AboutPage.tsx` - 关于我页面内容

### 2. 更换头像

在 `src/pages/AboutPage.tsx` 中找到头像区域，将占位图片替换为你的实际头像：

```tsx
<img
  src="/images/avatar.jpg"
  alt="Profile"
  className="w-72 h-72 rounded-2xl object-cover border-4 border-white shadow-xl"
/>
```

并将头像图片放置在 `public/images/` 目录下。

### 3. 修改颜色主题

编辑 `tailwind.config.js` 中的 Anthropic 配色方案：

```js
colors: {
  anthropic: {
    cream: '#FAF7F2',      // 暖米色背景
    terracotta: '#B4644B', // 赤陶强调色
    taupe: '#8B7D6B',      // 灰褐色次要色
    charcoal: '#2D2926',   // 深灰文字色
    sage: '#9CAF88',      // 鼠尾草绿辅助色
  },
}
```

### 4. 添加真实项目链接

编辑 `src/data/projects.ts` 中的 `liveUrl` 和 `githubUrl` 字段为你的真实项目地址。

### 5. 添加真实博客文章

编辑 `src/data/blogPosts.ts` 中的 `readMoreUrl` 字段为你的文章链接地址。

## 项目结构

```
anthropic-portfolio/
├── public/
│   └── images/          # 静态图片资源
├── src/
│   ├── components/      # React 组件
│   │   ├── AnimatedBackground.tsx  # 动态背景组件
│   │   ├── Footer.tsx            # 页脚组件
│   │   ├── LanguageToggle.tsx    # 语言切换组件
│   │   └── Navbar.tsx            # 导航栏组件
│   ├── data/            # 静态数据
│   │   ├── blogPosts.ts # 博客文章数据
│   │   └── projects.ts  # 项目数据
│   ├── i18n/            # 国际化配置
│   │   └── index.ts     # i18n 配置和翻译
│   ├── pages/           # 页面组件
│   │   ├── AboutPage.tsx       # 关于我页
│   │   ├── BlogPage.tsx        # 博客页
│   │   ├── HomePage.tsx        # 首页
│   │   ├── ProjectDetailPage.tsx # 项目详情页
│   │   └── ProjectsPage.tsx    # 项目列表页
│   ├── App.tsx          # 主应用组件
│   ├── index.css        # 全局样式
│   └── main.tsx         # 入口文件
├── index.html           # HTML 入口
├── package.json         # 项目配置
├── tailwind.config.js   # Tailwind 配置
├── tsconfig.json        # TypeScript 配置
└── vite.config.ts       # Vite 配置
```

## 设计规范

### 配色方案

| 颜色名称 | 色值 | 用途 |
|---------|------|------|
| Cream | #FAF7F2 | 主背景色 |
| Terracotta | #B4644B | 强调色、按钮、链接 |
| Taupe | #8B7D6B | 次要文字、边框 |
| Charcoal | #2D2926 | 主要文字 |
| Sage | #9CAF88 | 辅助色、图表 |

### 字体

- **衬线字体**: Cormorant Garamond - 用于标题、大字号
- **无衬线字体**: Inter - 用于正文、UI 元素

### 动画原则

- 页面切换：淡入 + 上移，400ms ease-out
- 按钮交互：scale 1.05，300ms
- 滚动动画：进入视口时淡入

## 浏览器兼容性

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - 欢迎使用和修改！
