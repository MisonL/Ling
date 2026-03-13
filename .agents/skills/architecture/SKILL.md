---
name: architecture
description: Architectural decision-making framework（架构决策框架）。Requirements analysis（需求分析）、trade-off evaluation（权衡评估）、ADR documentation（架构决策记录）。Use when making architecture decisions or analyzing system design（用于架构决策与系统设计分析）。
allowed-tools: Read, Glob, Grep
---

# Architecture Decision Framework（架构决策框架）

> "Requirements drive architecture. Trade-offs inform decisions. ADRs capture rationale."（需求驱动架构，权衡决定结论，ADR 记录依据。）

##  Selective Reading Rule（选择性阅读规则）

**Read ONLY files relevant to the request（仅阅读与请求相关的文档）！** Check the content map, find what you need（查阅内容地图，找到所需信息）。

| File（文件） | Description（描述） | When to Read（阅读时机） |
| ---- | ---- | -------- |
| `context-discovery.md` | Questions to ask, project classification（提问列表、项目分类） | Starting architecture design（开始架构设计） |
| `trade-off-analysis.md` | ADR templates, trade-off framework（ADR 模板、权衡分析框架） | Documenting decisions（记录决策） |
| `pattern-selection.md` | Decision trees, anti-patterns（决策树、反模式） | Choosing patterns（选择模式） |
| `examples.md` | MVP, SaaS, Enterprise examples（示例） | Reference implementations（参考实现） |
| `patterns-reference.md` | Quick lookup for patterns（模式速查） | Pattern comparison（模式对比） |

---

##  Related Skills（相关技能）

| Skill（技能） | Use For（用途） |
| ------------ | ---- |
| `@[skills/database-design]` | Database schema design（数据库模式设计） |
| `@[skills/api-patterns]` | API design patterns（API 设计模式） |
| `@[skills/deployment-procedures]` | Deployment architecture（部署架构） |

---

## Core Principle（核心原则）

**"Simplicity is the ultimate sophistication."（至简即至繁）**

- Start simple（从简单开始）。
- Add complexity ONLY when proven necessary（仅在必要时增加复杂性）。
- You can always add patterns later（随时可补充模式）。
- Removing complexity is MUCH harder than adding it（移除复杂性远比增加难）。

---

## Validation Checklist（验证检查清单）

Before finalizing architecture（最终确定架构之前）：

- [ ] **Requirements clearly understood（需求已清晰理解）。**
- [ ] **Constraints identified（约束条件已明确）。**
- [ ] **Each decision has trade-off analysis（每项决策有权衡分析）。**
- [ ] **Simpler alternatives considered（已考虑更简单替代方案）。**
- [ ] **ADRs written for significant decisions（重大决策已编写 ADR）。**
- [ ] **Team expertise matches chosen patterns（团队能力与模式匹配）。**

---
