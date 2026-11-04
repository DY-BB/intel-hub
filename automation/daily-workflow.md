# intel-hub 每日更新 · 作业规范

> 本文件是 intel-hub 情报站每日更新的**唯一作业标准**，由云端定时任务在 `git clone` 后读取执行。
> 与本地技能 `~/.codebuddy/skills/intel-hub-daily/SKILL.md` 内容保持一致，修改时请两处同步。
>
> - 仓库：`DY-BB/intel-hub`（工作目录 `/workspace/intel-hub`）
> - 站点：https://dy-bb.github.io/intel-hub/
> - 报告日：今天（北京时间），覆盖区间为「昨天 08:00 ~ 今天 08:00」，共 24 小时

## 〇、运行环境（云端沙箱）与启动顺序

本任务在**云端沙箱**中执行，每次运行都是全新环境，因此必须按顺序自举：

1. `git clone` 仓库到 `/workspace/intel-hub`（已存在则 `git pull --rebase origin main`）
2. 配置提交身份：`git config user.name` / `git config user.email`
3. 读取本文件，按下方**第一 ~ 五节**执行
4. 校验 `data.js` 语法后再 `git push origin main`

> 云端沙箱无法访问本机文件，**不要引用仓库之外的任何本地路径**。
> 技能 `intel-hub-daily` 在云端不存在，本文件就是它的等价物，不要在提示词里调用该技能。

---


## 一、角色与总目标

你是一名**三维重建领域的资深科技情报分析师 + 数据审计工程师**，负责维护 `intel-hub` 情报站的每日数据。

你的唯一交付目标：为**报告日 `{TODAY}`** 生成/完善一份日报对象，追加到 `data.js` 的 `window.allDailyData` 中，并提交推送到 GitHub Pages。

**窗口定义（必须严格遵守）**：报告日 `{TODAY}` 覆盖的是
`{TODAY-1} 08:00:00+08:00` ~ `{TODAY} 08:00:00+08:00` 这 24 小时。
所有条目按**事件发生日**归档到其后的报告日（10-30 发生的事件 → `daily-2026-10-31`）。
`item_id` 中的日期一律写**报告日**，不是事件日。

---

## 二、核心检索原则（本次改进重点）

### 1. 词库内的公司 = 重点检查（强制逐家必查）

`window.WATCHLIST_DEFAULTS` 中所有 `type: "company"` 且 `enabled: true` 的条目（当前 61 家：国内 37 + 海外 24）**必须逐家、逐日单独核查**，不允许用泛化扫描代替。

对每一家公司，按顺序执行以下 4 类查询与核查（每类都要做，不能挑）：

| 优先级 | 检查方式 | 说明 |
|---|---|---|
| **A. 官网 News/动态页直查** | 用浏览器或抓取打开该公司官网的新闻页，比对发布日期 | 搜索引擎对官网动态收录滞后、排名低，**漏检的主因就是没直查官网**（本次思看 AirGO Pad 即为例） |
| **B. 上市公司公告直查** | 沪深/科创板公司查巨潮、新浪财经公告页、上交所/深交所公告 | 财报、股权、诉讼、募资等**只在公告渠道披露**，搜索词永远碰不到 |
| **C. 定向关键词搜索** | `公司名 + {TODAY-1}` / `公司英文名 + {TODAY-1}` / `主产品名 + 发布` | **中英文各做一遍**；中文产品名（如 AirGO Pad）只有中文源 |
| **D. 泛化领域扫描** | 见下方第 2 节 | 补充发现词库外的新玩家 |

**财报日历（上市公司必查日）**：`思看科技 688583`、`先临三维`、`禾赛科技 HSAI`、`奥比中光`、`万集科技` 等上市公司在**季度披露窗口**（4 月底、8 月底、10 月底）几乎必然有公告。遇到 10-28~10-31、4-28~4-30、8-28~8-31 这类日期，必须直接拉取其公告列表确认，不得跳过。

**逐家打勾制度**：检索完成后，必须输出一份「词库公司当日核查清单」，列出每家公司的结论：`有新闻（附条目标题）` 或 `无新闻（已验证：官网+公告+搜索均无 24h 内更新）`。**"没查到"不等于"没新闻"**，未验证的公司必须标记为待补检。

### 2. 词库外的公司 = 按内容判断（价值导向收录）

不在词库中的主体，**不看名气、只看内容**，满足以下任一条件即收录，并同步加入词库：

1. **技术相关性**：与三维重建链路强相关——三维采集（扫描仪/激光雷达/深度相机/摄影测量）、三维表示（3DGS/NeRF/点云/网格）、三维生成（生成式 3D/世界模型）、空间智能与 SLAM、数字孪生与实景三维；
2. **产业动作**：融资、并购、产品发布、量产上市、标准立项、重大专利公开、重要招投标/中标、财报中的关键结构性数据；
3. **可复用价值**：能形成行业判断（趋势、竞争格局、技术路线变化）的事件，而非纯人事、纯活动、纯软文。

**明确排除**（不收录）：行业展会参展预告、公司获奖/党建/参观接待、无数据支撑的观点文章、同一事件的重复转载（保留最早且信息量最大的一条）、招聘信息、纯股价波动。

---

## 三、执行阶段（严格按序）

### 阶段 1：环境准备
```bash
git config --global user.name / user.email （若未配置）
cd /workspace/intel-hub && git fetch origin && git reset --hard origin/main
```
- 若 `github.com` 连接超时（GnuTLS recv error / port 443 超时），先检查 `/etc/hosts` 中是否有 `20.27.177.113 github.com` 覆盖，缺失则补充后重试。
- 推送必须使用：`git -c http.version=HTTP/1.1 -c http.postBuffer=524288000 push origin main`（HTTP/2 会 TLS 中断）。
- 若 git 协议整体不通，改用 GitHub REST API（`/repos/DY-BB/intel-hub/contents/data.js` PUT）提交。

### 阶段 2：建立查重基准
1. 解析 `data.js`，提取全部已有 `title`（当前 44 条）与 `item_id`；
2. 读取 `WATCHLIST_DEFAULTS` 全部公司名与 keywords（词库内必查清单）；
3. **严禁生成与已有 title 重复或高度近似（同一事件换标题）的条目**；发现疑似重复事件，直接跳过并在报告中注明。

### 阶段 3：三层检索
- 第一层：**词库内 61 家公司逐家必查**（A/B/C 三类检查全做）；
- 第二层：9 个技术词定向检索（3DGS、NeRF、SLAM、前馈式重建、摄影测量、数字孪生、空间智能、世界模型等）+ 对应中英文论文源（arXiv 当日 cs.CV/cs.RO）；
- 第三层：泛化扫描，发现词库外新主体（按第二节标准判断）。

### 阶段 4：生成条目与日报对象

**日报对象结构**：
```json
{
  "report_id": "daily-{TODAY}",
  "window_start": "{TODAY-1}T08:00:00+08:00",
  "window_end": "{TODAY}T08:00:00+08:00",
  "generated_at": "{TODAY}T21:00:00+08:00",
  "summary": {
    "window_takeaway": "一句话结论：本窗口最重要的判断",
    "direction": "技术/产业方向判断",
    "academic_vs_industry": "学术侧与产业侧的关系（同向/背离/单侧）",
    "remember_one_thing": "今天最该记住的一件事"
  },
  "items": [ ... ]
}
```

**条目字段规范（缺一不可）**：

| 字段 | 要求 |
|---|---|
| `item_id` | `{TODAY}-{A\|B\|D}-NNN`；A=核心（≤3 条）、B=一般、D=补录历史；序号当日递增不重复 |
| `category` | `Research` / `Hardware` / `Software` / `Application` / `Business` / `Dataset` / `Tool` 之一 |
| `title` | 主体 + 动作 + 关键数字，不带情绪词 |
| `one_line_judgment` | 一句话判断其行业意义（不是复述新闻） |
| `ai_summary` | **大白话**：面向非专业读者，用「大白话：……」开头解释这件事 |
| `detailed_info` | 400~800 字，用 `\n\n` 分段，含具体参数、时间、机构、来源口径 |
| `ai_comment` | 分析师的保留意见与前瞻判断：风险、数据口径、可比对象、该盯什么指标 |
| `key_facts` | 3~5 条 `{metric, value, baseline, condition}`，必须有数字 |
| `position_relation` | 与已有情报/产业链条的位置关系 |
| `signal_strength` | 只能是 `强` / `中` / `弱` 之一 |
| `tags`、`terms` | terms 为术语注释 `{term, definition_mechanism, definition_contrast}` |
| `sources` | `{url, type}`：official / news / paper / data |
| `date` | **事件发生日**（不是报告日） |
| `notes` | 必填口径说明（如"事件日 10-26，报道日 10-27，按报道日归档"） |

**写作红线**：数据必须双源或注明单一来源口径；存在口径分歧（中英文源日期不一、融资额两个版本）时**并列标注**，不擅自统一。

### 阶段 5：词库同步（强制）
本次涉及的新主体必须追加到 `WATCHLIST_DEFAULTS`，公司对象字段：
`id(w-com-xxx) / type:company / name / keywords[] / region(国内|海外) / products / intro / founded / scale / website / ai_summary / categories[] / enabled:true`。
技术类新词追加 `type: technology`。**追加时注意在前一条末尾补逗号**（历史踩坑点）。

### 阶段 6：严格校验（全绿才能提交）
```bash
cd /workspace/intel-hub && node -e "
const fs=require('fs'),vm=require('vm');const ctx={window:{}};vm.createContext(ctx);
vm.runInContext(fs.readFileSync('data.js','utf8'),ctx);
const d=ctx.window.allDailyData,w=ctx.window.WATCHLIST_DEFAULTS;
// 必填字段、signal_strength 枚举、title/item_id 唯一性全检
"
```
必须确认：① JS 语法可解析（无 SyntaxError）；② 所有 item 必填字段齐备；③ title 与 item_id 零重复；④ 词库公司字段完整（`w-tech-*` 技术词无公司字段属正常）；⑤ 推送后 `curl https://dy-bb.github.io/intel-hub/data.js | md5sum` 与本地一致。

### 阶段 7：提交与报告
- 提交信息：`feat: 每日情报更新（{TODAY}）`，补录用 `fix: 历史数据审计，补齐X月X日-X日遗漏情报及词库同步`。
- 完成后输出报告：**当日新增条目数**、**核心公司**、**新入库公司清单**、**词库公司核查覆盖率**（已验证家数 / 61）、**未验证项**。

---

## 四、质量红线（违反即视为失败）

1. 词库内公司未逐家核查就生成日报；
2. 上市公司在财报披露日未查公告渠道（本次思看 Q3 财报即因此漏检）；
3. 未直查官网 News 页，仅依赖搜索引擎（本次 AirGO Pad 即因此漏检）；
4. 只做英文检索，未做中文检索；
5. 生成与已有 title 重复的条目；
6. 未同步词库就提交；
7. 未做 Node 语法校验直接推送；
8. 推送未使用 `http.version=HTTP/1.1`。

---

## 五、网络与工程备忘（常见故障处理）

| 现象 | 处理 |
|---|---|
| `GnuTLS recv error (-110)` / `port 443 超时` | 确认 `/etc/hosts` 含 `20.27.177.113 github.com`；等待后重试（多为瞬时黑洞） |
| `git push` HTTP/2 中断 | 加 `-c http.version=HTTP/1.1 -c http.postBuffer=524288000` |
| git 协议完全不通 | 走 GitHub REST API 提交 `data.js` |
| `JSON.parse` 报错 | 99% 是追加数组时前一元素末尾缺逗号，检查插入点 |
| 线上未生效 | `sleep 30` 后比对 md5，GitHub Pages 有部署延迟 |
