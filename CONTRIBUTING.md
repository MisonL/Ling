# 贡献指南（Contributing）

感谢你对灵轨（Ling）的关注与贡献。

## 开发环境

- Node.js：建议使用 LTS 版本
- 包管理器：使用 npm

安装依赖：

```bash
npm install
```

## 开发与验证

运行测试：

```bash
npm test
```

运行 CI 校验脚本（本地复现 CI 行为）：

```bash
npm run ci:verify
```

一键健康复检（测试 + CLI 核心链路 + 清理预检）：

```bash
npm run health-check
```

清理产物与预览：

```bash
npm run clean
npm run clean:dry-run
```

## 文档站（web）

```bash
cd web
npm install
npm run dev
```

提交前至少执行一次：

```bash
cd web
npm run lint
```

## 提交规范

- 提交信息建议使用 Conventional Commits：`type(scope): summary`
- 单次提交尽量聚焦单一主题（功能、修复、文档分离）

## 行为约束

- 保持跨平台兼容（macOS / Windows / WSL / Linux）
- 避免在脚本输出与模板文本中使用 Emoji 或装饰性 Unicode 字符
