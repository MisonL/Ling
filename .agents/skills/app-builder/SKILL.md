---
name: app-builder
description: App Builder（应用构建编排器）主编排器。根据自然语言请求创建全栈应用，确定项目类型、选择技术栈并协调智能体。
allowed-tools: Read, Write, Edit, Glob, Grep, Bash, Agent
---

# App Builder - 应用构建编排器

> 分析用户请求，确定技术栈，规划结构，并协调智能体执行。

##  选择性阅读规则

**只阅读与当前请求相关的文件！** 先查看内容地图，再读取所需文档。

| File（文件） | Description（描述） | When to Read（阅读时机） |
| --- | --- | --- |
| `project-detection.md` | 关键词矩阵、项目类型检测 | 开始新项目 |
| `tech-stack.md` | 2026 默认技术栈及替代方案 | 选择技术时 |
| `agent-coordination.md` | 智能体流水线、执行顺序 | 协调多智能体协作时 |
| `scaffolding.md` | 目录结构、核心文件 | 创建项目结构时 |
| `feature-building.md` | 功能分析、错误处理 | 在现有项目中添加功能时 |
| `templates/SKILL.md` | **Project templates（项目模板）** | 为新项目搭建脚手架时 |

---

##  模板（13）

用于新项目快速脚手架搭建。**只读取匹配模板！**

| Template（模板） | Tech Stack（技术栈） | When to Use（适用场景） |
| --- | --- | --- |
| [nextjs-fullstack](templates/nextjs-fullstack/TEMPLATE.md) | Next.js + Prisma | Full-stack（全栈）Web 应用 |
| [nextjs-saas](templates/nextjs-saas/TEMPLATE.md) | Next.js + Stripe | SaaS（软件即服务）产品 |
| [nextjs-static](templates/nextjs-static/TEMPLATE.md) | Next.js + Framer | Landing page（落地页） |
| [nuxt-app](templates/nuxt-app/TEMPLATE.md) | Nuxt 3 + Pinia | Vue（前端框架）全栈应用 |
| [express-api](templates/express-api/TEMPLATE.md) | Express + JWT | REST API（接口服务） |
| [python-fastapi](templates/python-fastapi/TEMPLATE.md) | FastAPI | Python API（Python 接口） |
| [react-native-app](templates/react-native-app/TEMPLATE.md) | Expo + Zustand | Mobile app（移动端应用） |
| [flutter-app](templates/flutter-app/TEMPLATE.md) | Flutter + Riverpod | Cross-platform（跨平台）移动端 |
| [electron-desktop](templates/electron-desktop/TEMPLATE.md) | Electron + React | Desktop app（桌面端应用） |
| [chrome-extension](templates/chrome-extension/TEMPLATE.md) | Chrome MV3 | Browser extension（浏览器扩展） |
| [cli-tool](templates/cli-tool/TEMPLATE.md) | Node.js + Commander | CLI（命令行）应用 |
| [monorepo-turborepo](templates/monorepo-turborepo/TEMPLATE.md) | Turborepo + pnpm | Monorepo（单仓多包） |

---

##  相关智能体

| Agent（智能体） | 角色 |
| --- | --- |
| `project-planner` | 任务拆解、依赖图构建 |
| `frontend-specialist` | UI（用户界面）组件、页面 |
| `backend-specialist` | API（接口）、业务逻辑 |
| `database-architect` | 数据结构（Schema）、迁移 |
| `devops-engineer` | 部署、预览 |

---

## 使用示例

```
用户：“做一个带照片分享和点赞功能的 Instagram 克隆”

App Builder（应用构建编排器）过程：
1. 项目类型：Social Media App（社交媒体应用）
2. 技术栈：Next.js + Prisma + Cloudinary + Clerk
3. 创建计划：
   +- Database schema（数据库结构）：users, posts, likes, follows
   +- API routes（API 路由）：12 个 endpoints（端点）
   +- Pages（页面）：feed, profile, upload
   +- Components（组件）：PostCard, Feed, LikeButton
4. 协调智能体
5. 汇报进度
6. 启动预览
```
