# Android 平台指南（Android Platform Guidelines）

> Material Design 3 要点、Android 设计惯例、Roboto 排版与原生模式。
> **做 Android 必读。**

---

## 1. Material Design 3 哲学

### 核心设计原则（Core Material Principles）

```
MATERIAL AS METAPHOR：
+-- 表面存在于 3D 空间
+-- 光影定义层级
+-- 动效提供连续性
+-- 大胆、图形化、有意图的设计

ADAPTIVE DESIGN：
+-- 响应设备能力
+-- 一套 UI 覆盖所有形态
+-- 动态颜色来自壁纸
+-- 针对用户个性化

ACCESSIBLE BY DEFAULT：
+-- 大触控目标
+-- 清晰视觉层级
+-- 语义色
+-- 动效尊重偏好
```

### Material 价值（Material Design Values）

| 价值 | 实现方式 |
|------|----------|
| **Dynamic Color** | 颜色随壁纸/偏好变化 |
| **Personalization** | 用户个性化主题 |
| **Accessibility** | 内建无障碍能力 |
| **Responsiveness** | 适配所有屏幕 |
| **Consistency** | 统一设计语言 |

---

## 2. Android 排版（Android Typography）

### Roboto 字体家族

```
Android 系统字体：
+-- Roboto：默认无衬线
+-- Roboto Flex：可变字体（API 33+）
+-- Roboto Serif：衬线替代
+-- Roboto Mono：等宽
+-- Google Sans：Google 产品（需授权）
```

### Material 字号体系（Material Type Scale）

| Role | Size | Weight | Line Height | Usage |
|------|------|--------|-------------|-------|
| **Display Large** | 57sp | Regular | 64sp | 首屏大字、Splash |
| **Display Medium** | 45sp | Regular | 52sp | 大标题 |
| **Display Small** | 36sp | Regular | 44sp | 中标题 |
| **Headline Large** | 32sp | Regular | 40sp | 页面标题 |
| **Headline Medium** | 28sp | Regular | 36sp | 分区标题 |
| **Headline Small** | 24sp | Regular | 32sp | 子分区 |
| **Title Large** | 22sp | Regular | 28sp | 对话框、卡片 |
| **Title Medium** | 16sp | Medium | 24sp | 列表、导航 |
| **Title Small** | 14sp | Medium | 20sp | Tab、次级标题 |
| **Body Large** | 16sp | Regular | 24sp | 主体内容 |
| **Body Medium** | 14sp | Regular | 20sp | 次级内容 |
| **Body Small** | 12sp | Regular | 16sp | 注释 |
| **Label Large** | 14sp | Medium | 20sp | 按钮、FAB |
| **Label Medium** | 12sp | Medium | 16sp | 导航标签 |
| **Label Small** | 11sp | Medium | 16sp | 标签、徽标 |

### 可缩放像素（sp）

```
sp = Scale-independent pixels

sp 会随以下变化自动缩放：
+-- 用户字号偏好
+-- 屏幕密度
+-- 无障碍设置

规则：文字必须用 sp，其他布局用 dp。
```

### 字重使用（Font Weight Usage）

| 字重 | 场景 |
|------|------|
| Regular (400) | 正文、展示 |
| Medium (500) | 按钮、标签、强调 |
| Bold (700) | 很少用，只做强强调 |

---

## 3. Material 颜色系统（Material Color System）

### 动态颜色（Material You）

```
Android 12+ 动态颜色：

用户壁纸 -> 颜色抽取 -> App 主题

你的 App 会自动适配：
+-- Primary（主色）
+-- Secondary（辅色）
+-- Tertiary（强调色）
+-- Surface（表面色）
+-- 全部语义色调整

规则：应实现动态颜色以提供个性化体验。
```

### 语义颜色角色（Semantic Color Roles）

```
Surface Colors：
+-- Surface -> 主背景
+-- SurfaceVariant -> 卡片/容器
+-- SurfaceTint -> 高度覆盖
+-- InverseSurface -> Snackbar/tooltip

On-Surface Colors：
+-- OnSurface -> 主文本
+-- OnSurfaceVariant -> 次级文本
+-- Outline -> 边框、分割线
+-- OutlineVariant -> 更弱分割线

Primary Colors：
+-- Primary -> 关键操作、FAB
+-- OnPrimary -> 主色上的文本
+-- PrimaryContainer -> 低强调容器
+-- OnPrimaryContainer -> 容器文本

Secondary/Tertiary 同理
```

### 错误/警告/成功色

| 角色 | Light | Dark | 用途 |
|------|-------|------|------|
| Error | #B3261E | #F2B8B5 | 错误/破坏性 |
| OnError | #FFFFFF | #601410 | 错误文本 |
| ErrorContainer | #F9DEDC | #8C1D18 | 错误背景 |

### 暗色主题（Dark Theme）

```
Material Dark Theme：

+-- Background：#121212（默认非纯黑）
+-- Surface：#1E1E1E/#232323 等（按高度）
+-- Elevation：高度越高，叠加越亮
+-- 降低饱和度
+-- 必须检查对比度

Elevation overlays（暗色）：
+-- 0dp -> 0% overlay
+-- 1dp -> 5% overlay
+-- 3dp -> 8% overlay
+-- 6dp -> 11% overlay
+-- 8dp -> 12% overlay
+-- 12dp -> 14% overlay
```

---

## 4. Android 布局与间距（Android Layout & Spacing）

### 布局网格（Layout Grid）

```
Android 使用 8dp 基线网格：

间距使用 8dp 倍数：
+-- 4dp：组件内部（半步）
+-- 8dp：最小间距
+-- 16dp：标准间距
+-- 24dp：区块间距
+-- 32dp：大间距

边距：
+-- Compact（手机）：16dp
+-- Medium（小平板）：24dp
+-- Expanded（大屏）：24dp+ 或多栏
```

### 响应式布局（Responsive Layout）

```
Window Size Classes：

COMPACT（< 600dp）：
+-- 手机竖屏
+-- 单列布局
+-- 底部导航

MEDIUM（600-840dp）：
+-- 平板/折叠屏
+-- 可考虑双列
+-- Navigation rail 可用

EXPANDED（> 840dp）：
+-- 大屏平板/桌面
+-- 多列布局
+-- Navigation drawer
```

### Canonical Layouts

| 布局 | 场景 | Window Class |
|------|------|--------------|
| **List-Detail** | 邮件、消息 | Medium, Expanded |
| **Feed** | 社交、新闻 | All |
| **Supporting Pane** | 参考内容 | Medium, Expanded |

---

## 5. Android 导航模式（Android Navigation Patterns）

### 导航组件（Navigation Components）

| 组件 | 场景 | 位置 |
|------|------|------|
| **Bottom Navigation** | 3-5 顶层入口 | 底部 |
| **Navigation Rail** | 平板/折叠屏 | 左侧竖栏 |
| **Navigation Drawer** | 多入口/大屏 | 左侧抽屉 |
| **Top App Bar** | 当前上下文/操作 | 顶部 |

### Bottom Navigation

```
+-------------------------------------+
|                                     |
|         Content Area                |
|                                     |
+-------------------------------------+
|                          | <- 80dp height
| Home   Search  FAB   Saved  Profile|
+-------------------------------------+

规则：
+-- 3-5 个入口
+-- 图标：Material Symbols（24dp）
+-- 文本：必须显示（无障碍）
+-- 激活态：填充图标 + 指示 pill
+-- Badge：用于通知
+-- FAB 可嵌入（可选）
```

### Top App Bar

```
类型：
+-- Center-aligned：Logo 类应用
+-- Small：紧凑，可滚动隐藏
+-- Medium：标题 + 操作，折叠
+-- Large：大标题，折叠为小

+-------------------------------------+
|     App Title               ⋮  | <- 64dp (small)
+-------------------------------------+
|                                     |
|         Content Area                |
+-------------------------------------+

操作：最多 3 个 icon，更多放溢出菜单（⋮）
```

### Navigation Rail（平板）

```
+-------+-----------------------------+
|  ≡    |                             |
|       |                             |
|     |                             |
| Home  |       Content Area          |
|       |                             |
|     |                             |
|Search |                             |
|       |                             |
|     |                             |
|Profile|                             |
+-------+-----------------------------+

宽度：80dp
图标：24dp
文本：在图标下方
FAB：可置顶
```

### 返回导航（Back Navigation）

```
Android 提供系统返回：
+-- Back 按钮（三键导航）
+-- Back 手势（边缘滑动）
+-- Predictive back（Android 14+）

你的 App 必须：
+-- 正确处理返回（pop stack）
+-- 支持预测性返回动画
+-- 不可劫持返回行为
+-- 丢弃未保存内容前必须确认
```

---

## 6. Material 组件（Material Components）

### Buttons

```
按钮类型：

+----------------------+
|    Filled Button     |  <- 主操作
+----------------------+

+----------------------+
|    Tonal Button      |  <- 次操作（更弱）
+----------------------+

+----------------------+
|   Outlined Button    |  <- 三级操作
+----------------------+

    Text Button           <- 最低强调

高度：
+-- Small：40dp（空间受限）
+-- Standard：40dp
+-- Large：56dp（与 FAB 接近）

最小触控目标：48dp（视觉更小也必须补足）
```

### Floating Action Button（FAB）

```
FAB 类型：
+-- Standard：56dp 直径
+-- Small：40dp 直径
+-- Large：96dp 直径
+-- Extended：图标 + 文本

位置：右下，距离边缘 16dp
高度：悬浮于内容之上

+-------------------------------------+
|                                     |
|         Content                     |
|                                     |
|                              +----+ |
|                              |  | | <- FAB
|                              +----+ |
+-------------------------------------+
|       Bottom Navigation             |
+-------------------------------------+
```

### Cards

```
Card 类型：
+-- Elevated：阴影
+-- Filled：背景色
+-- Outlined：描边

Card 结构：
+-------------------------------------+
|           Header Image              | <- 可选
+-------------------------------------+
|  Title / Headline                   |
|  Subhead / Supporting text          |
+-------------------------------------+
|      [ Action ]    [ Action ]       | <- 可选操作
+-------------------------------------+

圆角：12dp（M3 默认）
Padding：16dp
```

### Text Fields

```
类型：
+-- Filled：有背景填充 + 下划线
+-- Outlined：全边框

+-------------------------------------+
|  Label                              | <- 聚焦时浮到上方
|  ________________________________________________
|  |     Input text here...          | <- 前后图标
|  ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
|  Supporting text or error           |
+-------------------------------------+

高度：56dp
Label：placeholder -> 顶部
Error：红色 + 图标 + 文本
```

### Chips

```
类型：
+-- Assist：快速动作（导航/拨打）
+-- Filter：筛选切换
+-- Input：实体标签（Tag/联系人）
+-- Suggestion：推荐

+---------------+
|   Filter   |  <- 高度 32dp，圆角 8dp
+---------------+

状态：未选/选中/禁用
```

---

## 7. Android 特有模式（Android-Specific Patterns）

### Snackbars

```
位置：底部，位于导航上方
时长：4-10 秒
操作：一个可选文字按钮

+-------------------------------------------------+
|  Archived 1 item                    [ UNDO ]    |
+-------------------------------------------------+

规则：
+-- 简短信息，尽量单行
+-- 最多 2 行
+-- 仅 1 个动作（文字，不用图标）
+-- 可滑动关闭
+-- 不叠加，队列显示
```

### Bottom Sheets

```
类型：
+-- Standard：可交互内容
+-- Modal：遮罩背景

Modal Bottom Sheet：
+-------------------------------------+
|                                     |
|        (Scrim over content)         |
|                                     |
+=====================================+
|  -----  (Drag handle, optional)     |
|                                     |
|        Sheet Content                |
|                                     |
|        Actions / Options            |
|                                     |
+-------------------------------------+

圆角：28dp（顶部）
```

### Dialogs

```
类型：
+-- Basic：标题 + 内容 + 操作
+-- Full-screen：复杂编辑（移动端）
+-- 日期/时间选择
+-- 确认对话框

+-------------------------------------+
|              Title                  |
|                                     |
|       Supporting text that          |
|       explains the dialog           |
|                                     |
|           [ Cancel ]  [ Confirm ]   |
+-------------------------------------+

规则：
+-- 居中显示
+-- 背后 Scrim
+-- 最多 2 个操作，右侧对齐
+-- 破坏性操作可置左
```

### Pull to Refresh

```
Android 使用 SwipeRefreshLayout 模式：

+-------------------------------------+
|         ○ (Spinner)                 | <- 圆形进度
+-------------------------------------+
|                                     |
|         Content                     |
|                                     |
+-------------------------------------+

Spinner：Material 圆形指示
位置：顶部居中，下拉随内容移动
```

### Ripple Effect

```
所有可点元素必须有 Ripple：

按下 -> Ripple 从触点扩散
抬起 -> Ripple 完成后淡出

颜色：
+-- 亮色背景：黑色 12% 透明
+-- 暗色背景：白色 12% 透明
+-- 有色背景：保证对比度

这是 Android 体验的强制要求。
```

---

## 8. Material Symbols

### 使用指南（Usage Guidelines）

```
Material Symbols：Google 图标库

样式：
+-- Outlined：默认，最常见
+-- Rounded：更柔和
+-- Sharp：更锐利

变量字体轴：
+-- FILL：0（描边）到 1（填充）
+-- wght：100-700（字重）
+-- GRAD：-25 到 200（强调）
+-- opsz：20/24/40/48（光学尺寸）
```

### 图标尺寸（Icon Sizes）

| 尺寸 | 场景 |
|------|------|
| 20dp | 密集 UI / 内联 |
| 24dp | 标准（最常用） |
| 40dp | 大触控目标 |
| 48dp | 强调/独立图标 |

### 状态（States）

```
Icon 状态：
+-- Default：全不透明
+-- Disabled：38% 透明
+-- Hover/Focus：容器高亮
+-- Selected：填充 + tint

Active vs Inactive：
+-- Inactive：Outlined
+-- Active：Filled + indicator
```

---

## 9. Android 无障碍（Android Accessibility）

### TalkBack 要求

```
每个交互元素必须：
+-- contentDescription（是什么）
+-- 正确语义（button/checkbox 等）
+-- 状态说明（selected/disabled）
+-- 逻辑分组

Jetpack Compose：
Modifier.semantics {
    contentDescription = "Play button"
    role = Role.Button
}

React Native：
accessibilityLabel="Play button"
accessibilityRole="button"
accessibilityState={{ disabled: false }}
```

### 触控目标尺寸

```
必须：48dp × 48dp 最小

即使视觉更小：
+-- 图标：24dp 视觉，48dp 触控
+-- 复选框：20dp 视觉，48dp 触控
+-- 用 padding 补足

目标间距：至少 8dp
```

### 字体缩放

```
Android 支持字体缩放：
+-- 85%（更小）
+-- 100%（默认）
+-- 115%、130%、145%...
+-- 最多 200%

规则：UI 必须在 200% 下可用。
使用 sp 单位，避免固定高度。
```

### Reduce Motion

```kotlin
// 检查动效偏好
val reduceMotion = Settings.Global.getFloat(
    contentResolver,
    Settings.Global.ANIMATOR_DURATION_SCALE,
    1f
) == 0f

if (reduceMotion) {
    // 禁用或减少动画
}
```

---

## 10. Android 检查清单（Android Checklist）

### 每个 Android 页面前

- [ ] 使用 Material 3 组件
- [ ] 触控目标 ≥ 48dp
- [ ] 所有可点元素有 Ripple
- [ ] Roboto 或 Material 字号体系
- [ ] 语义色（支持动态颜色）
- [ ] 返回导航正确

### Android 发布前

- [ ] 暗色主题已测试
- [ ] 动态颜色已测试（支持时）
- [ ] 所有字号测试（200%）
- [ ] TalkBack 已测试
- [ ] Predictive back 已实现（Android 14+）
- [ ] Edge-to-edge（Android 15+）
- [ ] 不同尺寸设备测试（手机/平板）
- [ ] 导航符合平台惯例（返回/手势）

---

> **记住（Remember）**：Android 用户期待 Material Design 体验。无视 Material 的自定义设计会显得“异类且不可靠”。以 Material 组件为基础，再有意识地定制。
