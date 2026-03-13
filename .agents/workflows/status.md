---
description: 展示 Agent 与项目状态。用于进度跟踪与状态看板。
---

# /status - 状态展示

$ARGUMENTS

---

## 任务

展示当前项目与 Agent 状态。

### 展示内容

1. **项目信息**
   - 项目名称与路径
   - 技术栈
   - 已实现功能

2. **Agent 状态看板**
   - 哪些 Agent 正在运行
   - 哪些任务已完成
   - 待处理的工作项

3. **文件统计**
   - 新创建文件数量
   - 已修改文件数量

4. **预览状态**
   - 服务器是否正在运行
   - URL
   - 健康检查

---

## 输出示例

```
=== 项目状态 ===

 项目：my-ecommerce
 路径：C:/projects/my-ecommerce
 类型：nextjs-ecommerce
 状态：active

 技术栈：
   框架：next.js
   数据库：postgresql
   认证：clerk
   支付：stripe

[OK]  已实现功能（5）：
   - product-listing
   - cart
   - checkout
   - user-auth
   - order-history

⏳ 待处理项（2）：
   - admin-panel
   - email-notifications

 文件统计：已新建 73 个文件，已修改 12 个文件

=== Agent 状态 ===

[OK]  database-architect -> 已完成
[OK]  backend-specialist -> 已完成
[RUN]  frontend-specialist -> 仪表盘组件（60%）
⏳ test-engineer -> 等待中

=== 预览 ===

 URL：http://localhost:3000
 健康状态：OK
```

---

## 技术细节

状态查看使用以下脚本：
- `python .agent/scripts/session_manager.py status`
- `python .agent/scripts/auto_preview.py status`
