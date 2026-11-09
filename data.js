// ============================================================
// 三维重建 · 情报库 —— 共享数据文件
// index.html 与 app.html 共同引用本文件。
// 【AI 每日更新指南】只需向 window.allDailyData 数组末尾追加
// 一天的报告对象（结构与现有元素一致），首页统计、今日情报、
// 历史归档、关键词筛选、术语表会自动联动更新。
// 【条目字段规范】每条 item 建议包含：title / one_line_judgment（核心摘要）/
// image（可选，没有就不要给）/ key_facts（关键事实）/ ai_summary（AI通俗总结）/
// detailed_info（详细信息，\n\n 分段）/ ai_comment（AI点评）/ terms（术语注释，
// 正文与总结中出现的术语会**自动高亮**，读者点击即可弹出注释卡）/ sources。
// ============================================================
window.allDailyData = [
  {
    "report_id": "daily-2026-10-28",
    "window_start": "2026-10-27T08:00:00+08:00",
    "window_end": "2026-10-28T08:00:00+08:00",
    "generated_at": "2026-10-28T21:52:43+08:00",
    "summary": {
      "window_takeaway": "前馈式重建与一体化采集硬件密集涌现，学术与产业同向推进真实世界度量级三维采集的下沉。",
      "direction": "学术侧 GeoGSplat、DomeGS 推进前馈非像素对齐 3DGS 的几何先验与无界背景补全；产业侧多款采集/重建产品同日发布或获背书，共同指向物理 AI 与具身智能的数据入口。",
      "academic_vs_industry": "同向：学术补齐 3DGS 的图元冗余与无界背景短板，产业把同一技术打包成手机/机器人可用的采集终端，两者互相印证。",
      "remember_one_thing": "禾赛 Kosmo 获皮克斯官方渲染教程点名，中国激光雷达厂商的 3DGS 采集终端首次进入好莱坞视效流程。"
    },
    "items": [
      {
        "item_id": "2026-10-28-A-001",
        "category": "Research",
        "title": "GeoGSplat：几何约束下的非像素对齐前馈高斯溅射",
        "one_line_judgment": "通过注入几何先验抑制非像素对齐前馈 3DGS 在大视角变化下的渲染伪影，使图元数量不随分辨率和视角数增长的同时保住质量。",
        "image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
        "ai_summary": "简单说，这是一套「看一眼就能把照片变成三维场景」的算法，而且不靠传统的逐场景反复优化。它聪明的地方在于：不是每个像素都堆一个点，而是用几何约束把点「安排」得更合理，所以视角转得再大也不会糊成一团。",
        "detailed_info": "传统 3DGS 的前馈重建分两条路线：像素对齐路线会把图元数量随着分辨率和视角数线性堆上去，成本失控；非像素对齐路线虽然省点，但视角一大就容易出现中心错位、渲染伪影。\n\nGeoGSplat 的思路是给这条前馈管线注入一个显式几何先验——用双分支编码器同时输出 Anchor 和 Triplane，再由分层解码器解码出稠密 3D 点和高斯图元。这样一来，图元不再盲目铺满空间，而是贴合真实几何表面。\n\n代价是它多了一个几何先验分支，泛化边界受先验质量约束；但在输入视角覆盖不足、目标视角偏离大的场景下，稳定性明显优于纯前馈方法。",
        "ai_comment": "方向是对的：前馈重建想真正落地，迟早要解决「图元冗余」和「大视角伪影」这两块硬骨头。但论文目前只给了 DTU、NRGBD 这类室内基准，距离真实世界无界场景还有距离；而且代码和权重还没放出来，复现成本高。结论：值得关注，但先别急着当生产工具。",
        "key_facts": [
          {
            "metric": "方法类型",
            "value": "前馈式非像素对齐 3DGS，双分支编码器输出 Anchor+Triplane",
            "baseline": "像素对齐前馈 3DGS",
            "condition": "DTU 与 NRGBD 基准"
          },
          {
            "metric": "泛化优势",
            "value": "目标视角偏离输入相机越远优势越大",
            "baseline": "SOTA 像素对齐与非像素对齐 3DGS",
            "condition": "大视角变化"
          },
          {
            "metric": "复现资产",
            "value": "项目页与 arXiv:2610.36760",
            "baseline": null,
            "condition": "暂无代码/权重说明"
          }
        ],
        "position_relation": "补充像素对齐前馈 3DGS 的图元冗余与非像素对齐方法的中心错位问题。",
        "signal_strength": "中",
        "tags": [
          "3DGS",
          "Gaussian Splatting",
          "前馈式重建",
          "3D reconstruction"
        ],
        "terms": [
          {
            "term": "前馈式重建",
            "definition_mechanism": "一次前向推理直接输出场景表示或几何结果，无需逐场景迭代优化",
            "definition_contrast": "与 NeRF 类逐场景训练路线不同，优势在速度，代价是细节与泛化边界"
          }
        ],
        "sources": [
          {
            "url": "https://arxiv.org/abs/2610.36760",
            "type": "paper"
          }
        ],
        "date": "2026-10-27",
        "notes": "arXiv v1 提交时间 2026-10-27 07:15 UTC。"
      },
      {
        "item_id": "2026-10-28-A-002",
        "category": "Research",
        "title": "DomeGS：无界 3DGS 的感知一致背景补全（VR 场景）",
        "one_line_judgment": "把传统 VR 的 skydome 从扁平背景壳改造为融入 3DGS 场景的一部分，缓解无界户外场景重建的地平线残缺。",
        "image": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1000&q=80",
        "ai_summary": "简单说，VR 里的三维场景到了边缘常常「露馅」——地平线残缺、天空像一张贴在远处的画。这篇工作把天空穹顶改造成真正属于三维场景的一部分，你转头、走近，远景依然连贯。",
        "detailed_info": "无界户外场景的 3DGS 重建有个老大难：相机没拍到的远处背景和地平线，重建出来要么缺失、要么扭曲。在屏幕上看看也许能忍，但在 VR 里用户会自由移动头部，这种残缺会立刻破坏沉浸感，甚至引发不适。\n\nDomeGS 的做法是改造 VR 沿用多年的 skydome（天空穹顶）：不再把它当作一张贴在无穷远处的扁平背景图，而是让天空与地平线成为 3DGS 场景表示的一部分，前景与背景用同一套图元统一表达。\n\n验证上用了 36 人的用户实验（N=36），空间临场感与真实感两项主观指标均显著优于传统 skybox 基线（p=0.042）。属表示层面的修补，而非新范式。",
        "ai_comment": "这是典型的「体验型修补」创新：不改变 3DGS 的技术范式，但修掉的恰好是 VR 沉浸感最敏感的那块短板。主观指标达到统计显著是加分项，但提升幅度有限；真正的考验在于能否被主流 VR 重建管线低成本集成，以及在大范围移动（而非原地转头）时是否依然稳定。",
        "key_facts": [
          {
            "metric": "主观指标",
            "value": "感知一致性优于传统 skydome 方案",
            "baseline": "传统扁平背景壳（skydome）",
            "condition": "VR 无界户外场景，作者论文自评"
          },
          {
            "metric": "方法类型",
            "value": "3DGS 背景补全 + 感知一致约束",
            "baseline": "逐场景优化 / 纯图像补全",
            "condition": "无界场景、相机位姿已知"
          },
          {
            "metric": "发表渠道",
            "value": "论文（项目页公开）",
            "baseline": "顶会正式收录",
            "condition": "截至 10-27 未见顶会接收记录"
          }
        ],
        "position_relation": "补充 3DGS 在无界户外场景的地平线不完整短板，属表示层面的修补而非新范式。",
        "signal_strength": "中",
        "tags": [
          "3DGS",
          "Gaussian Splatting",
          "三维重建",
          "AR/VR"
        ],
        "terms": [
          {
            "term": "skydome",
            "definition_mechanism": "VR/游戏里的「天空穹顶」：把远景天空贴在一个包围用户的球壳上，制造无限远的假象",
            "definition_contrast": "传统 skydome 是扁平贴图，不随视角产生视差；DomeGS 让它成为可感知深度的场景一部分"
          }
        ],
        "sources": [
          {
            "url": "https://arxiv.org/abs/2610.37172v1",
            "type": "paper"
          }
        ],
        "date": "2026-10-27",
        "notes": "论文归档条目，按 arXiv/项目页首次可访问日 10-27 归档至报告日 10-28；量化指标以作者项目页自述为主，无第三方复现，故信号定为中。"
      },
      {
        "item_id": "2026-10-28-B-001",
        "category": "Application",
        "title": "SpAItial Echo-3：iPhone 视频到度量级 3D 世界",
        "one_line_judgment": "把短 iPhone 视频到度量级 3D 高斯/点云/网格从云端研究带进消费级 iOS App，用生成式填充未覆盖区域。",
        "image": "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1000&q=80",
        "ai_summary": "一句话：用 iPhone 拍一段短视频，就能拿到可以量尺寸的三维模型。以前这是专业激光扫描仪才能干的活，现在被装进了一个订阅制 App。",
        "detailed_info": "工作流非常轻：iPhone 拍一段短视频（iOS 18+），上传到云端处理，拿回度量级的 3D 高斯溅射、点云和网格——所谓度量级，就是模型里可以直接量距离、量尺寸。没拍到的区域由生成式模型补齐。\n\n商业化走订阅制：Standard $49.99/7500 credits，Pro $99.99/15000 credits。公司 SpAItial 2025 年 5 月刚拿到 1300 万美元种子轮，CEO Matthias Niessner 是慕尼黑工业大学的视觉计算教授，学术背景很硬。\n\n值得注意的定位：它不挑战专业扫描的精度上限，而是把「快速数字化真实空间」这件事的门槛降到消费级——房产展示、小型电商建模、社交分享是典型场景。",
        "ai_comment": "真正值得关注的是分发形态：重建能力以消费 App 而非开发者 API 出现，说明团队赌的是大众市场。风险有二——云端处理的隐私顾虑，以及订阅价格能否被普通用户接受。如果体验站稳，这类「扫描即服务」会反过来挤压低端手持扫描硬件的市场。",
        "key_facts": [
          {
            "metric": "输入/输出",
            "value": "短 iPhone 视频到度量级 3D splats、点云、网格，可测距",
            "baseline": "需专业激光扫描硬件",
            "condition": "iOS 18+，云处理"
          },
          {
            "metric": "定价",
            "value": "Standard $49.99/7500 credits，Pro $99.99/15000 credits",
            "baseline": null,
            "condition": "订阅制"
          },
          {
            "metric": "公司背景",
            "value": "2025 年 5 月获 $13M 种子轮，CEO Matthias Niessner",
            "baseline": null,
            "condition": null
          }
        ],
        "position_relation": "替代专业激光扫描工作流在普通用户快速数字化真实空间这一场景。",
        "signal_strength": "强",
        "tags": [
          "三维重建",
          "3DGS",
          "点云",
          "网格",
          "数字孪生",
          "手持扫描仪"
        ],
        "terms": [
          {
            "term": "度量尺度重建",
            "definition_mechanism": "输出的三维场景保持真实世界物理尺寸，可直接测量距离与尺寸",
            "definition_contrast": "与仅视觉上逼真但尺度任意或未知的神经渲染结果不同"
          }
        ],
        "sources": [
          {
            "url": "https://spatialinsiders.com/stories/spaitial-echo-3-iphone-3d-scanning",
            "type": "media"
          }
        ],
        "date": "2026-10-27",
        "notes": "发布日 2026-10-27。"
      },
      {
        "item_id": "2026-10-28-B-002",
        "category": "Hardware",
        "title": "禾赛 Kosmo 获皮克斯官方渲染教程点名",
        "one_line_judgment": "禾赛 Kosmo 手持 3D 采集终端进入皮克斯 RenderMan 官方教程，把车载激光雷达厂商推入好莱坞视效流程。",
        "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80",
        "ai_summary": "简单说：激光雷达大厂禾赛做的手持三维扫描设备，被皮克斯官方渲染教程当作「真实世界三维采集」的示范工具——中国硬件第一次以这种方式进入好莱坞的视效工作流。",
        "detailed_info": "事件本身不大，但分量不轻：皮克斯的 RenderMan 官方教程引用禾赛 Kosmo，演示如何用专业渲染器处理真实世界采集的 3DGS 数据。这意味着影视视效行业开始把这类手持终端当作正经的生产工具。\n\n设备侧，Kosmo One 集成了定制激光雷达、最高 8K 成像、一英寸 CMOS 与高精度 IMU，官方口径约 100㎡ 的手持扫描只需 15-20 分钟——此前同精度级别往往需要多传感器拼装的台架方案。\n\n更深层的变化是叙事转向：禾赛的主业是车载激光雷达，Kosmo 系列把它带入「物理世界数字化入口」这条新故事线——机器人、影视、空间计算都需要高质量的真实世界三维数据。",
        "ai_comment": "背书的含金量高，但要冷静：这是「教程点名」而非采购公告，商业转化仍待观察。对禾赛而言真正的价值在于第二增长曲线的叙事成立——激光雷达从车载走向万物数字化。这条故事线能否兑现，取决于采集终端的出货量，而非教程里的露脸次数。",
        "key_facts": [
          {
            "metric": "第三方背书",
            "value": "皮克斯官方教程引用 Kosmo，用 RenderMan 处理真实世界 3DGS 数据",
            "baseline": null,
            "condition": "QbitAI 报道"
          },
          {
            "metric": "采集效率",
            "value": "约 100㎡ 手持扫描 15-20 分钟",
            "baseline": "传统多传感器拼装台架",
            "condition": null
          },
          {
            "metric": "硬件规格",
            "value": "Kosmo One 集成定制激光雷达、最高 8K 成像、一英寸 CMOS、高精度 IMU",
            "baseline": null,
            "condition": null
          }
        ],
        "position_relation": "与 SpAItial 同属真实世界数据终端，但走专业硬件路线、以精度与尺度见长。",
        "signal_strength": "强",
        "tags": [
          "3DGS",
          "Gaussian Splatting",
          "点云",
          "mesh",
          "手持扫描仪",
          "深度估计",
          "数字孪生"
        ],
        "terms": [
          {
            "term": "激光雷达",
            "definition_mechanism": "通过发射激光并测量回波时间/相位来精确测距，直接获取场景的三维几何",
            "definition_contrast": "与纯相机的被动视觉方案相比，激光雷达主动发光、测距准且不受光照影响，代价是成本与体积"
          }
        ],
        "sources": [
          {
            "url": "https://ainewsfeed.tech/articles/pixar-highlights-hesai-s-kosmo-3d-scanner-for-real-world-gaussian-splatting-37312-en-us-v1",
            "type": "media"
          }
        ],
        "date": "2026-10-27",
        "notes": "新闻事件日 10-27，按事件日归档至报告日 10-28；本条为第三方（皮克斯官方教程）背书，非禾赛自主发布，口径以教程页为准。"
      },
      {
        "item_id": "2026-10-28-B-003",
        "category": "Hardware",
        "title": "Stereolabs ZED Box 2 系列：边缘多相机视觉计算",
        "one_line_judgment": "把最高 2070 FP4 TFLOPS 的 Jetson Thor 算力与最多 8 路 GMSL2 同步相机、硬件级帧同步整合进工业边缘 AI 机。",
        "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
        "ai_summary": "简单说：Stereolabs 把英伟达最新的 Jetson Thor 算力和最多 8 路相机同步接口塞进一个工业盒子里——相当于给机器人、机械臂装了一个「多眼睛视觉大脑」，就在巴黎发布。",
        "detailed_info": "配置层面，ZED Box 2 最高可选 Jetson Thor 平台：2,070 FP4 TFLOPS 算力、128 GB 内存，已经能在本地跑相当规模的视觉模型，不必回传云端。\n\n更关键的是连接层：原生支持最多 8 路 GMSL2 相机接入，并提供硬件级帧同步——所有相机在同一瞬间曝光。对三维感知来说这一点是刚需：运动场景下哪怕差几毫秒，多视角融合的深度就会错位。\n\n目标场景写得很明白：AMR（自主移动机器人）、机械臂、人形机器人的多视角、多传感器融合。它不生产算法，卖的是「机器人感知的基础设施」。",
        "ai_comment": "参数漂亮，但这类边缘盒子的竞争壁垒从来不在算力数字，而在相机生态、标定工具链与长期供货能力。Stereolabs 深耕立体视觉多年，8 路硬件级同步是实打实的工程壁垒；短板是与 Jetson 平台深度绑定带来的成本、功耗与供应链波动风险。",
        "key_facts": [
          {
            "metric": "算力/内存",
            "value": "最高 2,070 FP4 TFLOPS、128 GB 内存（Jetson Thor）",
            "baseline": "上代 ZED Box",
            "condition": null
          },
          {
            "metric": "相机接入",
            "value": "原生支持最多 8 路 GMSL2 相机，硬件级帧同步",
            "baseline": "单/双立体相机",
            "condition": null
          },
          {
            "metric": "定位",
            "value": "面向 AMR、机械臂/humanoid 多视角、多传感器融合",
            "baseline": null,
            "condition": "Paris 发布"
          }
        ],
        "position_relation": "补齐多相机同步采集这一机器人三维感知基础设施。",
        "signal_strength": "中",
        "tags": [
          "SLAM",
          "端侧部署",
          "数字孪生"
        ],
        "terms": [
          {
            "term": "硬件级帧同步",
            "definition_mechanism": "用硬件信号让多路相机在同一瞬间曝光，保证各视角画面时间严格对齐",
            "definition_contrast": "软件同步存在毫秒级抖动，运动场景下会导致多视角融合的深度错位"
          }
        ],
        "sources": [
          {
            "url": "https://finance.yahoo.com/technology/ai/articles/stereolabs-launches-zed-box-2-110000974.html",
            "type": "official"
          }
        ],
        "date": "2026-10-27",
        "notes": "发布事件日 10-27，按事件日归档至报告日 10-28；算力 2070 FP4 TFLOPS 为 Jetson Thor 官方规格，整机功耗与售价以 Stereolabs 公布为准；本条来源为单一转载（Yahoo Finance 转官方稿）。"
      },
      {
        "item_id": "2026-10-28-B-004",
        "category": "Application",
        "title": "Octave Alto 2026.1：地理空间可视化加入高斯溅射",
        "one_line_judgment": "国防/航空/交通/基建类地理空间平台首次将高斯溅射作为正式资产类型，用于任务规划与基础设施监测。",
        "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80",
        "ai_summary": "一句话：高斯溅射第一次作为「正式资产类型」进入国防级地理空间平台——照片和扫描件可以直接变成可指挥、可监测的三维地图，用在任务规划和基础设施巡检上。",
        "detailed_info": "Octave Alto 2026.1 的新能力：支持把 Gaussian splats 作为正式资产导入，把照片/扫描转换成可自由浏览的真实地点三维模型，服务于任务规划与基础设施监测。此前这类需求要靠人工在多个系统间拼合数据。\n\nAlto 的客户画像是国防、航空、交通、基建——对可视化可靠性要求最高、也最保守的一群用户。同版本还支持北约最新的军用地图符号与作战计划标准，说明产品节奏是跟着军工合规走的。\n\n这一步的意义不在技术新，而在于「被最保守的行业验收」：3DGS 从内容创作和研究 demo，进入了关键基础设施的日常运营工具链。",
        "ai_comment": "信号意义大于产品意义：国防与基建是最保守的可视化市场，它们的接纳说明 3DGS 已经度过「玩具阶段」。接下来值得关注的是数据主权——国防场景进不了公有云，本地化处理与私有化部署能力会成为下一阶段的竞争点。",
        "key_facts": [
          {
            "metric": "新增能力",
            "value": "高斯溅射成为正式资产类型",
            "baseline": "仅栅格/矢量/点云资产",
            "condition": "Octave Alto 2026.1 版本"
          },
          {
            "metric": "适用场景",
            "value": "任务规划、基础设施监测",
            "baseline": "国防/航空/交通/基建地理空间工作流",
            "condition": "需在高斯资产导入后"
          },
          {
            "metric": "版本形态",
            "value": "2026.1 正式版更新",
            "baseline": "上一版本",
            "condition": "官方 release notes 口径"
          }
        ],
        "position_relation": "把 3DGS 从内容创作/研究推向国防与关键基础设施的运营可视化。",
        "signal_strength": "中",
        "tags": [
          "3DGS",
          "Gaussian Splatting",
          "数字孪生",
          "实时重建"
        ],
        "terms": [],
        "sources": [
          {
            "url": "https://investors.octave.com/news-releases/news-release-details/octave-alto-expands-visualization-capabilities",
            "type": "official"
          }
        ],
        "date": "2026-10-27",
        "notes": "产品版本更新，事件日 10-27，按事件日归档至报告日 10-28；版本号为官方 release notes 口径。"
      },
      {
        "item_id": "2026-10-28-B-005",
        "category": "Hardware",
        "title": "思岚 Aurora S Lite：轻量 AI 空间感知系统",
        "one_line_judgment": "把 AI-vSLAM 定位、端到端深度估计与 AI 语义分割塞进更小机身的机器人空间感知模组。",
        "image": "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1000&q=80",
        "ai_summary": "简单说：思岚把 vSLAM 定位、深度估计、语义分割三套 AI 能力压缩进一个更小的机器人「眼睛+小脑」，主打即插即用，让普通机器人开箱就有空间感知。",
        "detailed_info": "相比标准版 Aurora S，Lite 版升级了三个软件栈：AI-vSLAM 定位、端到端深度估计模型、AI 物体识别与语义分割——定位、几何、语义三件事一体化输出。\n\n形态上主打更小机身、即插即用、开放 SDK，明显是冲着「机器人厂商不想自己养感知团队」这个痛点去的。\n\n需要坦白的是，这次发布缺少量化指标：定位精度、功耗、价格都没给，我们只能把它归为弱信号，等待实测数据。",
        "ai_comment": "机器人感知模组正在复刻手机摄像头的「集成化」路径：从买器件自己调，到买整套交钥匙方案。思岚在扫地机器人激光雷达上的出货量是底牌，但这次发布零量化指标，诚意打折——建议等第三方实测再判断升级幅度。",
        "key_facts": [
          {
            "metric": "能力",
            "value": "AI-vSLAM 定位 + 端到端深度估计 + AI 语义分割",
            "baseline": "上一代 Aurora 系列",
            "condition": "单模组集成，官方宣称"
          },
          {
            "metric": "形态/集成",
            "value": "更小机身的机器人空间感知模组",
            "baseline": "前代体积",
            "condition": "面向轻量机器人平台"
          },
          {
            "metric": "量化指标",
            "value": "官方未披露精度/功耗/价格",
            "baseline": "同类产品通常公布",
            "condition": "本条因缺量化指标定为弱信号"
          }
        ],
        "position_relation": "在机器人定位-建图-语义理解一体化感知模组赛道补充轻量级产品位。",
        "signal_strength": "弱",
        "tags": [
          "SLAM",
          "深度估计",
          "点云",
          "实时重建"
        ],
        "terms": [
          {
            "term": "vSLAM",
            "definition_mechanism": "视觉 SLAM：只用相机画面估计自身位置并增量式构建环境地图",
            "definition_contrast": "相比激光 SLAM 成本更低、信息更丰富，但弱纹理与暗光环境下稳定性是短板"
          }
        ],
        "sources": [
          {
            "url": "https://new.qq.com/rain/a/20261027A0AZ6Z00",
            "type": "media"
          }
        ],
        "date": "2026-10-27",
        "notes": "缺关键量化指标，归为弱信号。"
      },
      {
        "item_id": "2026-10-28-B-006",
        "category": "OpenSource",
        "title": "Hi3D 开源生产级 3D 底座模型并推出创作者智能体",
        "one_line_judgment": "把经过生产验证的 3D 底座模型 V1.0 开源并配套创作智能体，试图把生成式 3D 从能生成推向能落地/可打印。",
        "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
        "ai_summary": "一句话：一家 3D 生成公司把生产环境里验证过的底座模型开源了，还配了创作智能体——目标是让 AI 生成的模型不只是好看，而是真的能 3D 打印出来。",
        "detailed_info": "商业面：Hi3D 半年内完成两轮近 5000 万美元融资，产品覆盖 120+ 国家、200 万+ 创作者（极客公园报道口径）。\n\n技术面：底座模型基于自研 Sparc3D 稀疏几何技术，本次开源 V1.0，并配套推出面向创作者的智能体。\n\n最值得注意的是他们选的行业痛点：部分头部产品的 3D 打印切片成功率仅 7%-17%——生成得很炫、打印出来全废，是生成式 3D 最难堪的短板。Hi3D 把「可制造性」而不是「美观度」立为核心指标。",
        "ai_comment": "切片成功率这个指标选得很刁钻——它把生成式 3D 从 demo 竞赛拉回工程竞赛。开源能否形成生态，取决于模型在真实打印场景的通过率，而非宣传图的精美程度。另外 7%-17% 是「报道口径」，建议视为方向性参考而非精确统计。",
        "key_facts": [
          {
            "metric": "融资/规模",
            "value": "半年内两轮融资近 $50M，覆盖 120+ 国家、200 万+ 创作者",
            "baseline": null,
            "condition": "极客公园"
          },
          {
            "metric": "技术底座",
            "value": "基于 Sparc3D 稀疏几何技术，开源 V1.0",
            "baseline": null,
            "condition": null
          },
          {
            "metric": "行业痛点",
            "value": "部分头部产品 3D 打印切片成功率仅 7%-17%",
            "baseline": null,
            "condition": "报道口径"
          }
        ],
        "position_relation": "聚焦生成式 3D + 稀疏几何 + 可制造性，用切片成功率作为落地指标。",
        "signal_strength": "中",
        "tags": [
          "三维重建",
          "网格",
          "数字孪生"
        ],
        "terms": [
          {
            "term": "切片",
            "definition_mechanism": "3D 打印前把模型切成逐层路径并生成打印机指令的过程",
            "definition_contrast": "模型在屏幕上能看不代表能打印——壁厚、悬空、封闭性不达标都会导致切片失败"
          }
        ],
        "sources": [
          {
            "url": "https://www.ai.jp.net/article/hi3d-opens-its-production-grade-3d-foundation-model-and-launches-a-creator-focus-cbd345?lang=sc",
            "type": "media"
          }
        ],
        "date": "2026-10-27",
        "notes": "融资与开源同日披露（10-27），按事件日归档至报告日 10-28；融资额仅有单一媒体口径，未见官方公告。"
      },
      {
        "item_id": "2026-10-28-B-007",
        "category": "Application",
        "title": "Rivian 收购 Third Dimension AI：真实数据转可编辑 3D 仿真",
        "one_line_judgment": "Rivian 收购 Third Dimension AI，把真实世界传感器数据重建为可编辑、可重放的 3D 场景用于自动驾驶边角案例仿真。",
        "image": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80",
        "ai_summary": "简单说：车企 Rivian 收购了一家能把真实驾驶数据变成可编辑三维仿真场景的公司——自动驾驶最怕的「边角案例」，以后可以无限重放，还能随意改光照和天气。",
        "detailed_info": "交易本身金额未披露（TechCrunch 报道），标的 Third Dimension AI 此前拿过 700 万美元种子轮。\n\n能力面：从真实驾驶数据重建三维环境，并且场景可编辑——光照、天气都能改。这对自动驾驶验证意义重大：危险场景在现实里可遇不可求，在可编辑的重建场景里可以系统性复现和变异。\n\nRivian 手里的底牌是数据规模：每天从用户车辆采集 40 万+ 驾驶序列。收购把「数据采集」和「仿真验证」接成了闭环。",
        "ai_comment": "这与 Tesla 纯靠车队规模堆数据的路线形成有趣对照：Rivian 选择用「重建+仿真」放大既有数据的密度。这条路的瓶颈在重建保真度——仿真与现实的细微偏差，恰恰是边角案例验证中最致命的变量。收购后的整合速度值得跟踪。",
        "key_facts": [
          {
            "metric": "交易",
            "value": "收购 Third Dimension AI，金额未披露",
            "baseline": "此前 $7M 种子轮",
            "condition": "TechCrunch 报道"
          },
          {
            "metric": "能力",
            "value": "从真实驾驶数据重建 3D 环境，可编辑光照、天气",
            "baseline": null,
            "condition": null
          },
          {
            "metric": "数据规模",
            "value": "Rivian 每日从用户车辆采集 40 万+ 驾驶序列",
            "baseline": null,
            "condition": null
          }
        ],
        "position_relation": "与 Tesla 靠真实车队规模路线相对，Rivian 走重建+可编辑仿真放大既有真实数据。",
        "signal_strength": "中",
        "tags": [
          "三维重建",
          "数字孪生"
        ],
        "terms": [
          {
            "term": "边角案例",
            "definition_mechanism": "自动驾驶中罕见但高风险的长尾场景（如异形障碍物、极端光照），是安全验证的重点",
            "definition_contrast": "常规路测很难碰到，只能靠大规模车队积累或仿真重建来覆盖"
          }
        ],
        "sources": [
          {
            "url": "https://www.rivianwave.com/news/4908/rivian-buys-ai-startup-to-simulate-self-driving-edge-cases",
            "type": "media"
          }
        ],
        "date": "2026-10-27",
        "notes": "收购事件日 10-27，按事件日归档至报告日 10-28；交易金额 Rivian 与标的方均未公开，仅有媒体转述。"
      },
      {
        "item_id": "2026-10-28-D-001",
        "category": "Engineering",
        "title": "闽宁镇 23.5km² 空地一体 3DGS 数字模型（其域创新）",
        "one_line_judgment": "用 18.6 万张影像 + 150 亿雷达点云生成 62 亿高斯椭球，构建 23.5km² 厘米级精度数字闽宁镇。",
        "image": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
        "ai_summary": "一句话：18.6 万张照片加 150 亿个激光点，重建出一个 23.5 平方公里、厘米级精度的「数字闽宁镇」——这是城镇级三维重建已知的最大规模案例之一。",
        "detailed_info": "规模数字先摆出来：23.5km² 面积、厘米级几何精度、18.6 万张影像、150 亿雷达点云、最终生成 62 亿个三维高斯椭球。成果在 CCTV-4《闽宁大道》纪录片中呈现。\n\n技术方是其域创新（XGRIDS）：自研采集设备 + 自研软件 + 自研 LCC 数据格式，空地一体采集（无人机 + 地面设备）。\n\n工程意义在于：3DGS 从单物体、小场景被推进到城镇级。到了这个规模，难点已经不是重建算法本身，而是数据管线——采集调度、压缩格式、流式加载与后期更新维护。",
        "ai_comment": "要提醒：这些数字来自媒体转述而非论文或官方技术报告，建议保留一分审慎。但趋势判断没有疑问——当单场景重建不再是瓶颈，竞争点就转移到数据工程与格式标准，这正是「数字孪生运营商」的入场券，XGRIDS 的自研格式卡位很聪明。",
        "key_facts": [
          {
            "metric": "场景规模",
            "value": "23.5km²、厘米级几何精度",
            "baseline": null,
            "condition": "CCTV-4《闽宁大道》纪录片"
          },
          {
            "metric": "数据/算力规模",
            "value": "18.6 万张影像、150 亿雷达点云、62 亿三维高斯椭球",
            "baseline": null,
            "condition": null
          },
          {
            "metric": "技术方",
            "value": "其域创新（XGRIDS）自研采集设备 + 软件 + LCC 数据格式",
            "baseline": null,
            "condition": "2026-10-28 报道"
          }
        ],
        "position_relation": "把 3DGS 从单物体/小场景推向城镇级空地一体的已知最大规模之一。",
        "signal_strength": "中",
        "tags": [
          "3DGS",
          "Gaussian Splatting",
          "点云",
          "数字孪生",
          "三维重建"
        ],
        "terms": [],
        "sources": [
          {
            "url": "https://new.qq.com/rain/a/20261028A03CJA00",
            "type": "media"
          }
        ],
        "date": "2026-10-28",
        "notes": "数字来自媒体转述。"
      },
      {
        "item_id": "2026-10-28-B-008",
        "category": "Application",
        "title": "其域创新公开点云上采样专利：用多尺度高斯过程补几何密度",
        "one_line_judgment": "一周内连续公开两件 3DGS 与点云方向专利，说明稀疏点云补密已从论文议题变成采集厂商工程链路上的固定环节。",
        "ai_summary": "大白话：三维扫描出来的点云经常稀稀拉拉，直接拿去建模会破洞、边缘发毛。这家公司申请了个专利，用「多尺度高斯过程」把稀疏点云补得更密——本质上就是给三维数据做「智能插值放大」，让后面的重建、渲染和查询都更准。",
        "detailed_info": "企查查公开信息显示，深圳市其域创新科技股份有限公司于 2026-10-27 公开发明专利「基于多尺度高斯过程的点云上采样方法、装置、设备及介质」。三天后的 10-30，同一主体又公开「面向三维高斯泼溅场景的数据查询方法、系统及电子设备」。一周内两件专利落在同一条链路上：采集端出稀疏点云 → 上采样补密 → 3DGS 表示 → 场景数据查询。\n\n高斯过程上采样在学术上并非新方法，本质是用核函数对局部邻域做贝叶斯回归，再在回归面上重采样。它的工程难点在于尺度选择：核窗口太小，平坦区补不满；窗口太大，边缘和薄壁结构会被抹平。多尺度设计的用意正是在这两者间取折中，按局部曲率自适应切换窗口。\n\n需要提醒的是，这仍是「专利公开」而非「产品发布」。专利说明书里的方法离可交付代码之间通常还有一年以上的工程距离。",
        "ai_comment": "专利不是产品，信号强度只能给弱。但它暴露了路线：其域创新在把 LCC 格式往「可查询的空间数据」方向推，而不只是「可看的模型」。10-30 那件查询专利更值得盯——如果 3DGS 场景能被当数据库检索，它就从一个渲染资产变成了可被程序调用的空间索引，这才是机器人仿真真正需要的东西。",
        "key_facts": [
          {
            "metric": "公开专利数",
            "value": "一周内 2 件（10-27 点云上采样、10-30 3DGS 数据查询）",
            "baseline": null,
            "condition": "国家知识产权局公开信息"
          },
          {
            "metric": "技术路径",
            "value": "多尺度高斯过程 + 点云上采样",
            "baseline": "单尺度核回归",
            "condition": "稀疏点云补密"
          },
          {
            "metric": "主体变更",
            "value": "2026-10-01 由有限责任公司变更为股份有限公司（非上市）",
            "baseline": null,
            "condition": "工商登记"
          }
        ],
        "position_relation": "补齐采集端「点云密度不足」这一环，与其域创新 LCC 数据格式、3DGS 场景查询构成同一条数据基础设施链路。",
        "signal_strength": "弱",
        "tags": [
          "点云",
          "上采样",
          "高斯过程",
          "3DGS",
          "专利"
        ],
        "terms": [
          {
            "term": "高斯过程",
            "definition_mechanism": "用核函数刻画样本间的相关性，对未知位置做贝叶斯回归预测，同时给出不确定性",
            "definition_contrast": "与插值方法不同，高斯过程输出的是分布而非单点值，可用于判断哪里「补得不可信」"
          }
        ],
        "sources": [
          {
            "url": "https://www.qcc.com/cpartner/fe059e05b936bda65c4a114611c0592e",
            "type": "data"
          }
        ],
        "date": "2026-10-27",
        "notes": "来源为企查查专利公开时间，非企业官方发布。"
      },
      {
        "item_id": "2026-10-27-D-001",
        "category": "Application",
        "title": "理光 360° 相机 AI 三维建模技术在东京电力电网投用：建模周期从数天压到半天",
        "one_line_judgment": "激光扫描仪进场扫楼的时代正在被「一台 360° 相机 + AI 补全」替代，日本电网运维场景给出第一个规模化落地样本。",
        "ai_summary": "大白话：以前要给一栋楼做三维数字模型，得扛着专业激光扫描仪扫好几天。理光现在的做法是拿着 360° 全景相机在楼里走一圈拍视频，AI 自动把房间结构补全，上传后约半天就能生成精细三维模型，挂到数字孪生平台上用于楼宇运维。",
        "detailed_info": "据 IBTimes Japan 等报道，理光与理光日本于 2026-10-26 宣布，其「从 360° 相机影像生成精细三维模型」技术已在东京电力电网（TEPCO Power Grid）的楼宇维护业务中投入运营。该技术结合理光的相机位姿估计与 AI 空间结构推断补全，集成于 RICOH Digital Twin Workplace 平台：用户上传 360° 相机素材后约半天即可获得精细 3D 模型，而传统激光扫描从采集到建模需数天。\n\n技术要点在于解决图像式重建的老大难：白墙、地板、桌面等少特征表面难以重建。理光的 AI 通过评估墙体与地板的连接关系及房间整体结构来推断补全缺失区域。东京电力自 2026 年 6 月起试用，主要面向办公楼宇，将楼名、楼层、房间名与模型关联，实现远程巡查与信息共享；双方还计划利用积累的现场数字记录传承资深技师经验。",
        "ai_comment": "这是「消费级采集硬件 + AI 补全」路线在大型基建运维侧的正式商用案例，与 SpAItial Echo-3（消费端）、禾赛 Kosmo（机器人训练端）构成同一趋势的三张切片：采集端硬件越来越便宜，值钱的是把缺的补对的 AI。对国产扫描仪厂商的提示是：纯激光计量设备的护城河在收窄到「必须毫米级」的那部分场景。",
        "key_facts": [
          {
            "metric": "建模周期",
            "value": "约半天",
            "baseline": "传统激光扫描数天",
            "condition": "360° 相机素材上传后"
          },
          {
            "metric": "投用时间",
            "value": "2026-10-26 宣布投入运营（TEPCO 2026-06 起试用）",
            "baseline": null,
            "condition": null
          },
          {
            "metric": "平台",
            "value": "RICOH Digital Twin Workplace",
            "baseline": null,
            "condition": null
          }
        ],
        "position_relation": "理光以办公影像设备老厂身份切入空间数字孪生，走的是「相机生态 + AI 补全 + 平台订阅」路线，与激光雷达系厂商形成错位竞争。",
        "signal_strength": "中",
        "tags": [
          "数字孪生",
          "360°相机",
          "AI补全",
          "楼宇运维",
          "理光"
        ],
        "terms": [
          {
            "term": "AI 补全重建",
            "definition_mechanism": "用神经网络推断相机没拍到或缺少纹理特征的表面结构，填补重建空洞",
            "definition_contrast": "与纯摄影测量不同，补全部分是「猜」出来的，精度未经实测验证，适合运维展示而非计量"
          }
        ],
        "sources": [
          {
            "url": "https://jp.ibtimes.com/ricoh-brings-ai-powered-3d-building-models-tepco-power-grid-104981",
            "type": "news"
          }
        ],
        "date": "2026-10-26",
        "notes": "事件日期 2026-10-26，据理光/理光日本发布消息，经 IBTimes Japan 报道。"
      },
      {
        "item_id": "2026-10-27-D-002",
        "category": "OpenSource",
        "title": "SuperSplat v3.7.0 引入 WebMCP：AI 智能体可以直接在浏览器里编辑高斯溅射场景",
        "one_line_judgment": "3DGS 编辑器把自己变成 AI 智能体的「手」，24 个原生 WebMCP 工具让去浮点、裁剪、调色这类脏活可以被智能体代劳——工具生态正在为 Agent 时代重构。",
        "ai_summary": "大白话：SuperSplat 是一个在浏览器里编辑「高斯溅射」三维场景的开源工具。这次更新让它接上了 WebMCP 协议，AI 智能体可以像人一样在网页里选中一块区域、删掉飘在空中的杂点、调整颜色。而且所有改动都进撤销历史，做错了 Ctrl+Z 就能回退。",
        "detailed_info": "PlayCanvas 于 2026-10-26 发布 SuperSplat v3.7.0，这是 9 月 8 日 WebGPU 重写（v3.0.0）后的第四个版本（24 天内）。核心更新：\n\n1）暴露 window.editor 类型化编辑器 API，脚本与编辑器共享命令队列，GPU 查询与选择变更保持同一有序操作；\n2）24 个原生 WebMCP 工具，覆盖场景检查、选择与编辑、相机控制、导入导出——智能体可直接通过标准工具调用选中某区域的高斯或移动图层；\n3）安全性设计：无效命令被整体拒绝而非「改一半」，变换与颜色工具必须显式指定选择集或图层，空选择不会静默波及整个图层；屏幕空间操作前校验 view token，视口变化时智能体必须重新检查场景。\n\n仓库 10.5k stars、MIT 协议、TypeScript 编写，PR 合并率 95%。",
        "ai_comment": "「编辑器长出 MCP 接口」是 3DGS 工具链对智能体浪潮最直接的一次回应。值得学习的是它的防御性设计：拒绝半执行命令、强制显式选择集、视口变化作废操作——这些正是把不可靠的 Agent 变成可用生产力所必须的工程纪律。预计半年内主流 DCC 工具会跟进类似接口。",
        "key_facts": [
          {
            "metric": "WebMCP 工具数",
            "value": "24 个原生工具",
            "baseline": null,
            "condition": "场景检查/编辑/相机/导入导出"
          },
          {
            "metric": "发布节奏",
            "value": "24 天内第 4 个版本（自 9-08 WebGPU 重写起）",
            "baseline": null,
            "condition": null
          },
          {
            "metric": "社区规模",
            "value": "10.5k stars / 1.2k forks / PR 合并率 95%",
            "baseline": null,
            "condition": "GitHub，10-30 数据"
          }
        ],
        "position_relation": "SuperSplat 已是 3DGS 后处理事实标准工具，此次更新把它从「人用的编辑器」升级为「人与智能体共用的编辑底座」，与 glTF 高斯扩展标准化进程互相咬合。",
        "signal_strength": "中",
        "tags": [
          "3DGS",
          "SuperSplat",
          "WebMCP",
          "智能体",
          "开源工具"
        ],
        "terms": [
          {
            "term": "WebMCP",
            "definition_mechanism": "让网页应用向浏览器内 AI 智能体暴露标准化工具调用的协议，智能体无需单独 MCP 服务器即可操作页面内容",
            "definition_contrast": "与命令行 MCP 服务器不同，WebMCP 工具运行在浏览器标签页内，直接复用页面已有的状态与撤销系统"
          }
        ],
        "sources": [
          {
            "url": "https://www.kiriengine.app/blog/supersplat-3.7-adds-webmcp-tools-and-an-editor-api",
            "type": "news"
          },
          {
            "url": "https://github.com/playcanvas/supersplat",
            "type": "data"
          }
        ],
        "date": "2026-10-26",
        "notes": "v3.7.0 发布于 2026-10-26（GitHub Releases）。"
      },
      {
        "item_id": "2026-10-28-D-003",
        "category": "Research",
        "title": "GPA-VGGT：不重训练就把前馈重建提速 3.2 倍，500 帧从 514 秒降到 159 秒",
        "one_line_judgment": "VGGT 这类前馈大重建模型最大的落地障碍——帧数平方级增长的注意力开销——被一篇 WACV 2027 论文用「改注意力不改权重」的方式绕开了。",
        "ai_summary": "大白话：现在有一类 AI 模型（VGGT），喂一堆照片就能一次性算出相机的位置和场景三维结构，比传统逐帧匹配快得多。但它有个毛病：照片越多越慢——100 张要等一分多钟，500 张要等八分半。这篇论文只改了模型内部「哪些照片互相通信」的方式，不动任何训练好的权重，就把 500 张照片的重建从 514 秒压到 159 秒，精度几乎不掉。",
        "detailed_info": "GPA-VGGT（Geometry-Preserving Acceleration of VGGT）论文于 2026-10-27 公开（arXiv:2610.37000，Sung/Kim/Lim，浦项科技大学背景），已被 WACV 2027 接收。方法：\n\n1）浅层将全局注意力改为「帧内注意力 + 共享的跨帧键值集合」；\n2）深层合并键值但保留全部 query，保证每个像素仍有独立输出；\n3）直接运行官方发布的 VGGT checkpoint，零重训练。\n\n结果：单张 RTX A6000 上，200 帧 86.78s→33.65s（约 2.6×），500 帧 513.78s→158.63s（约 3.2×）；位姿精度保持在 VGGT 的 99% 以上（CO3D 200 帧 AUC@3 61.47→61.43）。该工作建立在 VGGT-Align（2608.15260）之上。",
        "ai_comment": "「不动权重、只改推理时的注意力拓扑」这个思路的性价比极高——对任何已经发布 checkpoint 的大重建模型都可以如法炮制。需要注意的保留意见：代码仓库仅三个 commit、沿用 VGGT License，生产采用前应在自己的序列上做回归测试。它是上轮收录的 GeoGSplat（几何约束前馈）的同门加速路线，两者可叠加。",
        "key_facts": [
          {
            "metric": "500 帧耗时",
            "value": "158.63s（原 513.78s，约 3.2×）",
            "baseline": "VGGT 原版",
            "condition": "单张 RTX A6000"
          },
          {
            "metric": "位姿精度保持",
            "value": "AUC@3 61.47 → 61.43（CO3D 200 帧）",
            "baseline": null,
            "condition": "保持在原版 99% 以上"
          },
          {
            "metric": "是否重训练",
            "value": "否，直接运行官方 VGGT checkpoint",
            "baseline": null,
            "condition": null
          }
        ],
        "position_relation": "补上前馈重建「帧数扩展性」这块短板，使 300—500 张的真实外业级数据集进入单卡可处理范围，与 VGGT-Align、GeoGSplat 同属 VGGT 生态的工程化补强。",
        "signal_strength": "中",
        "tags": [
          "VGGT",
          "前馈重建",
          "注意力优化",
          "WACV2027",
          "论文"
        ],
        "terms": [
          {
            "term": "前馈重建（Feed-forward Reconstruction）",
            "definition_mechanism": "一个神经网络一次前向推理即从多张照片直接输出相机位姿与三维表示，无需逐场景优化",
            "definition_contrast": "与 NeRF/3DGS 的逐场景优化训练不同，前馈模型泛化到新场景无需再训练，代价是精度上限略低"
          }
        ],
        "sources": [
          {
            "url": "https://arxiv.org/abs/2610.37000",
            "type": "paper"
          }
        ],
        "date": "2026-10-27",
        "notes": "论文 arXiv 2610.37000，WACV 2027 接收。"
      },
      {
        "item_id": "2026-10-28-D-004",
        "category": "Research",
        "title": "中科院古脊椎所发布「数字鲨鱼图谱」：117 件标本 CT 三维解剖重建全球开放共享",
        "one_line_judgment": "117 件标本、72 个物种、覆盖全部 9 个目——这是国内少见的成体系三维解剖开放数据集，其「逐层拆解至单个解剖结构」的标注方式本身就是三维数据资产化的范本。",
        "ai_summary": "大白话：科学家用 CT 给 117 件鲨鱼标本做了全身三维扫描，把骨头、肌肉甚至胃内容物都精细分割出来，做成一个全球免费开放的「鲨鱼三维图鉴」。你可以把一条鲨鱼从头到尾逐层拆开看，单独下载它的脑颅、下颌或脊椎。",
        "detailed_info": "据《中国科学报》2026-10-27 报道，中科院古脊椎动物与古人类研究所卢静团队正式发布「数字鲨鱼图谱」，成果发表于《科学数据》（Scientific Data，doi:10.1038/s41597-026-08418-2）。数据集基于 X 射线 CT 扫描做系统三维解剖重建，经大规模人工精细分割与标准化标注：收录 117 件鲨鱼标本、72 物种、25 科、覆盖现生鲨鱼全部 9 目；115 件完成全身重建、2 件头部重建。重建涵盖脑颅、上下颌、舌弓、鳃弓、脊柱与鳍骨骼，保存较好标本还重建了肌肉（部分标本近百块独立肌肉）、皮肤、胃内容物、生殖系统及胚胎等软组织。\n\n数据集已通过古脊椎所自主建设的三维形态学数据库向全球开放，支持完整个体与单一解剖结构分别下载，可用于 3D 打印、VR 交互与科普展陈。",
        "ai_comment": "工业界看这个数据集的意义不在鲨鱼，而在方法论：它示范了「原始 CT 体数据 → 人工精细分割 → 标准化标注 → 可拆解、可单件下载的三维数据资产」这条完整管线——正是医疗、文博、工业检测领域数字化都在走的那条路。古脊椎所的三维形态学数据库值得作为国内科研三维数据基础设施样本持续跟踪。",
        "key_facts": [
          {
            "metric": "标本规模",
            "value": "117 件标本 / 72 物种 / 25 科 / 全部 9 目",
            "baseline": null,
            "condition": "开放获取"
          },
          {
            "metric": "全身重建",
            "value": "115 件全身 + 2 件头部",
            "baseline": null,
            "condition": null
          },
          {
            "metric": "软组织深度",
            "value": "部分标本含近百块独立肌肉的三维模型",
            "baseline": null,
            "condition": "保存较好标本"
          }
        ],
        "position_relation": "科研侧三维数据资产化的代表性开放数据集，与中北大学古建三维档案同属「存量世界数字化」脉络，但走 CT 解剖路线。",
        "signal_strength": "弱",
        "tags": [
          "CT三维重建",
          "开放数据集",
          "数字标本",
          "科学数据"
        ],
        "terms": [
          {
            "term": "CT 三维解剖重建",
            "definition_mechanism": "对 X 射线断层扫描体数据做逐结构分割标注，构建可独立调用的三维解剖模型",
            "definition_contrast": "与表面扫描不同，CT 重建包含内部骨骼与软组织，且需人工逐层分割，成本远高于表面采集"
          }
        ],
        "sources": [
          {
            "url": "https://paper.sciencenet.cn/sbhtmlnews/2026/10/391781.shtm?id=391781",
            "type": "news"
          },
          {
            "url": "https://doi.org/10.1038/s41597-026-08418-2",
            "type": "paper"
          }
        ],
        "date": "2026-10-27",
        "notes": "《中国科学报》2026-10-27 第 1 版报道。"
      }
    ]
  },
  {
    "report_id": "daily-2026-10-29",
    "window_start": "2026-10-28T08:00:00+08:00",
    "window_end": "2026-10-29T08:00:00+08:00",
    "generated_at": "2026-11-03T09:40:00+08:00",
    "summary": {
      "window_takeaway": "工业手持扫描进入「无线 + 双光源 + 550g」阶段，精度不再是差异化卖点。",
      "direction": "采集硬件侧继续向便携化与材质适应性收敛，先临 FreeScan Combo Wireless 把计量级精度装进 550g 无线机身。",
      "academic_vs_industry": "本窗口以产业侧为主，学术侧静默。",
      "remember_one_thing": "先临 FreeScan Combo Wireless 用 550g 机身守住 0.015mm，标志工业手持扫描的形态竞争进入收官。"
    },
    "items": [
      {
        "item_id": "2026-10-29-A-001",
        "category": "Hardware",
        "title": "先临三维发布 FreeScan Combo Wireless：550g 双光源，最高 910 万点/秒",
        "one_line_judgment": "工业手持扫描仪首次把双光源、五种模式与无线化压进 550g 机身，精度守住在 0.015mm，等于把「工业计量」和「现场作业」这两个原本冲突的需求并到一台设备上。",
        "ai_summary": "大白话：以前工业级三维扫描仪要么精度高但得拖着线、扛着架子，要么能拿在手上但精度差点。先临这次发的两款无线机型只有 550 克（差不多一瓶矿泉水），却能跑到每秒 910 万个点、精度 0.015 毫米，还支持五种扫描模式和双光源切换——粗扫用大范围模式，精扫换高精度模式，深孔和黑色反光件靠另一种光源补。",
        "detailed_info": "10 月 28 日，先临三维推出 FreeScan Combo Wireless 系列无线手持扫描仪，含 Combo+ Wireless 与 Combo Wireless 两款，整机均重 550g，支持五种扫描模式与双光源。两款最高扫描速度分别为 910 万点/秒与 730 万点/秒，最高精度分别为 0.015mm 与 0.02mm。\n\n双光源的价值在材质适应性：蓝光激光对深色、高反光金属表面的信噪比更好，红外结构光则在快速粗扫和对人体安全的场景更合适。五种模式本质是把「扫描距离 × 精度 × 速度」做成几档预设，让现场操作员不必每次调参数。\n\n从产品定位看，这一代的主线不是提精度（0.015mm 在工业计量里已属常规），而是砍线缆、砍重量。无线化对汽车产线、大型铸件现场、户外文物扫描这类「设备跟着工件走」的场景是刚需——拖着线在工件周围绕圈，既慢又容易绊。",
        "ai_comment": "参数上没有代际跃升，真正的变化是把「工业计量级」从三脚架和工位里解放出来。同一天前后，消费级的爱乐酷 M1 Ultra 也把重量压到 511g、精度压到 0.02mm——两条线在 500g / 0.02mm 这个坐标上收敛，说明手持扫描的形态竞争已经进入收官阶段，下一步的差异会在软件和自动化集成，而不是硬件规格。",
        "key_facts": [
          {
            "metric": "整机重量",
            "value": "两款均为 550g",
            "baseline": "上一代有线机型普遍 800g 以上",
            "condition": "含电池"
          },
          {
            "metric": "扫描速度",
            "value": "Combo+ Wireless 910 万点/秒；Combo Wireless 730 万点/秒",
            "baseline": null,
            "condition": "厂商标称"
          },
          {
            "metric": "最高精度",
            "value": "Combo+ Wireless 0.015mm；Combo Wireless 0.02mm",
            "baseline": "工业计量常规档位 0.02mm",
            "condition": "厂商标称"
          },
          {
            "metric": "模式与光源",
            "value": "五种扫描模式、双光源",
            "baseline": "单光源双模式为主流",
            "condition": "无线手持"
          }
        ],
        "position_relation": "与爱乐酷 M1 Ultra（10-29）构成同一周内工业级与消费级两条线的对照，共同把「500g + 0.02mm」变成手持扫描的新基准。",
        "signal_strength": "强",
        "tags": [
          "三维扫描仪",
          "手持扫描",
          "先临三维",
          "FreeScan",
          "无线化"
        ],
        "terms": [
          {
            "term": "双光源扫描",
            "definition_mechanism": "同时具备激光与结构光两种投射方式，按被测表面的反射特性切换",
            "definition_contrast": "单一光源在深色/高反光表面容易丢点，双光源用物理手段互补而非靠算法补"
          },
          {
            "term": "点云密度",
            "definition_mechanism": "单位时间内采集到的三维坐标点数量，直接决定细节还原上限",
            "definition_contrast": "与精度不是一回事：精度指单点准不准，密度指点够不够密"
          }
        ],
        "sources": [
          {
            "url": "https://app.myzaker.com/news/article.php?pk=6ae7f1638e9f0958d7706c4f",
            "type": "media"
          }
        ],
        "date": "2026-10-28",
        "notes": "参数取自行业周报转述的厂商发布信息。"
      }
    ]
  },
  {
    "report_id": "daily-2026-10-30",
    "window_start": "2026-10-29T08:00:00+08:00",
    "window_end": "2026-10-30T08:00:00+08:00",
    "generated_at": "2026-11-03T09:42:00+08:00",
    "summary": {
      "window_takeaway": "3D 打印厂商反向切入扫描，消费级设备规格向工业入门档靠拢。",
      "direction": "爱乐酷 M1 Ultra 以 511g、0.02mm 进入手持扫描，补上「扫描—建模—打印」闭环。",
      "academic_vs_industry": "产业侧单点动作，无学术对应。",
      "remember_one_thing": "3D 打印渠道开始向三维采集上游延伸，扫描设备的消费级市场出现新的渠道型玩家。"
    },
    "items": [
      {
        "item_id": "2026-10-30-A-001",
        "category": "Hardware",
        "title": "爱乐酷发布首款手持 3D 扫描仪 M1 Ultra：511g、0.02mm，3D 打印厂商反向切入扫描",
        "one_line_judgment": "消费级 3D 打印头部品牌用一款 511g、0.02mm 的机型切入扫描市场，把「扫描—建模—打印」闭环补上最后一块，硬件规格直接对齐工业入门档。",
        "ai_summary": "大白话：爱乐酷本来是卖消费级 3D 打印机的，现在做了台手持三维扫描仪。511 克、精度 0.02 毫米、能扫彩色纹理，还能连 Wi-Fi 6 传数据。意思很直接：你想打印什么，先用它把实物扫成模型，再扔进打印机复制一份。不过它自己不算数据，扫完还得连电脑处理。",
        "detailed_info": "10 月 29 日，爱乐酷（ELEGOO）发布首款手持式 3D 扫描仪 M1 Ultra，正式进入 3D 扫描市场。设备整合蓝光激光与红外结构光，提供五种扫描模式，最高精度 0.02mm，支持全彩纹理捕捉；整机约 511g，支持 Wi-Fi 6 无线传输，可导出 STL、OBJ 等格式。\n\n值得注意的是它的处理链路：扫描数据仍需电脑端软件处理，设备本身不承担重建算力。这个取舍让它能把重量和成本压下来，但也把它限定在「采集前端」的角色——真正的高精度拼接、网格化、纹理映射都在 PC 上完成。\n\n从竞争位置看，这是 3D 打印厂商典型的纵向延伸：用已有的品牌、渠道和用户社群，去卖一台「能让你把现实物体变成可打印文件」的配套设备。对创想三维这类同样布局扫描的打印厂商，构成了直接对位。",
        "ai_comment": "参数够看，但要看清它的定位：0.02mm 是厂商标称的实验室精度，实际现场精度取决于标定、表面处理和操作手法；「数据仍需电脑处理」这句话说明它没打算抢工业计量的饭碗。真正的看点是渠道——3D 打印用户本来就有一个「想复制实物」的需求，过去要靠第三方扫描服务或摄影测量凑合，现在有了官方闭环。",
        "key_facts": [
          {
            "metric": "整机重量",
            "value": "约 511g",
            "baseline": "工业手持机型普遍 550g 以上",
            "condition": null
          },
          {
            "metric": "最高精度",
            "value": "0.02mm",
            "baseline": "消费级摄影测量通常毫米级",
            "condition": "厂商标称"
          },
          {
            "metric": "光源方案",
            "value": "蓝光激光 + 红外结构光，五种扫描模式",
            "baseline": "单光源为主",
            "condition": null
          },
          {
            "metric": "数据链路",
            "value": "Wi-Fi 6 传输，扫描数据仍需电脑端处理",
            "baseline": null,
            "condition": "设备不含重建算力"
          }
        ],
        "position_relation": "与先临 FreeScan Combo Wireless（10-28）形成工业级/消费级对照；同时补齐 3D 打印厂商「扫描—建模—打印」闭环。",
        "signal_strength": "中",
        "tags": [
          "三维扫描仪",
          "消费级",
          "ELEGOO",
          "爱乐酷",
          "3D 打印"
        ],
        "terms": [
          {
            "term": "结构光扫描",
            "definition_mechanism": "投射已知图案到物体表面，通过图案的形变反算表面三维形状",
            "definition_contrast": "与激光三角测量相比，结构光适合中近距离、中等精度、快速整面采集"
          }
        ],
        "sources": [
          {
            "url": "https://app.myzaker.com/news/article.php?pk=6ae7f1638e9f0958d7706c4f",
            "type": "media"
          }
        ],
        "date": "2026-10-29",
        "notes": "参数来自厂商发布信息转述，暂无第三方实测。"
      },
      {
        "item_id": "2026-10-30-D-001",
        "category": "Hardware",
        "title": "巨身智能发布「经纬系统」：激光雷达+IMU 紧耦合 SLAM 的机器人导航交互平台",
        "one_line_judgment": "浙江金华一家具身智能公司把「导航不精准、交互不自然、管理不统一」三痛点打包成 18 模块系统，走的是集成商路线而非单点传感器路线。",
        "ai_summary": "大白话：机器人厂商常抱怨三件事：走不准、听不懂、管不住。这家公司发布了一套叫「经纬」的系统，用激光雷达和 IMU 紧耦合做厘米级建图导航，接国产大模型做中英文语音交互，再配一个网页后台统一调度多台机器人。",
        "detailed_info": "据凤凰网宁波 2026-10-29 报道，浙江巨身智能科技有限公司于金华金开科信智造基地举办「经纬之间，智见未来」新品发布会，推出自主研发的「经纬系统」——机器人自主导航与多模态交互平台，含三大板块 18 个功能模块：\n\n1）自主导航与避障（5 模块）：激光雷达与 IMU 紧耦合 SLAM，建图分辨率 0.05m/像素，单张地图覆盖 ≤800m²；A*/Dijkstra 全局规划 + DWA/TEB 局部规划，到点朝向偏差 ≤15°；YOLO+点云聚类动态避障。\n2）多模态语音交互（8 模块）：接入通义千问、DeepSeek 等国产大模型，RAG 检索增强，10M 上下文，中英文混合识别，环境视觉识别准确率 ≥90%。\n3）业务管理端（5 模块）：Web 后台涵盖任务调度、知识库、动作库与数据管理。\n\n其「巨身引擎」提供跨机型复用的原子动作库，同一套动作数据可在人形、四足、轮式本体上复用；另有垂直领域具身行业大模型。发布会以真机实景演示为主。",
        "ai_comment": "单看参数（0.05m 建图分辨率、15° 朝向偏差）不算顶尖，但它的产品形态值得关注：把 SLAM 硬件方案商、大模型接入、多机管理后台打成一个整体卖给场景方，本质是在做「具身智能时代的集成操作系统」。长三角二三线城市的这类区域性集成商，是激光雷达与空间感知器件真正走量的渠道。",
        "key_facts": [
          {
            "metric": "建图分辨率",
            "value": "0.05m/像素",
            "baseline": null,
            "condition": "激光雷达+IMU 紧耦合 SLAM"
          },
          {
            "metric": "单图覆盖",
            "value": "≤800m²",
            "baseline": null,
            "condition": null
          },
          {
            "metric": "到点朝向偏差",
            "value": "≤15°",
            "baseline": null,
            "condition": "A*/Dijkstra + DWA/TEB"
          },
          {
            "metric": "环境视觉识别",
            "value": "≥90%",
            "baseline": null,
            "condition": "YOLO+点云聚类"
          }
        ],
        "position_relation": "国内又一家基于 LiDAR-SLAM 的机器人整体方案商，是思岚、万集等传感器厂商的下游集成生态样本。",
        "signal_strength": "弱",
        "tags": [
          "SLAM",
          "机器人导航",
          "具身智能",
          "多模态交互",
          "巨身智能"
        ],
        "terms": [
          {
            "term": "紧耦合 SLAM",
            "definition_mechanism": "将激光雷达与 IMU 的原始观测在统一状态估计框架内联合优化，而非各自算完再拼接",
            "definition_contrast": "与松耦合相比，紧耦合在快速运动与退化场景下位姿更稳，但计算量大、调参难"
          }
        ],
        "sources": [
          {
            "url": "https://nb.ifeng.com/c/8xcUo261KqM",
            "type": "news"
          }
        ],
        "date": "2026-10-29",
        "notes": "凤凰网宁波报道，2026-10-29 金华发布会。"
      },
      {
        "item_id": "2026-10-30-D-002",
        "category": "Hardware",
        "title": "MicroVision MOVIA Pro 短距激光雷达量产出货：感知计算直接跑在传感器上",
        "one_line_judgment": "美国纳斯达克上市的 MicroVision 把「边缘 AI 感知」做成了激光雷达的出厂能力——点云在传感器内部就变成物体级信息，不再依赖外部工控机。",
        "ai_summary": "大白话：传统激光雷达只负责「拍照」（吐点云），理解点云要靠旁边挂一台电脑。MOVIA Pro 把这步搬进了传感器本身：点云在设备内部就被处理成「这里有人、那里有障碍」的物体信息，直接告诉机器人下一步该怎么做。",
        "detailed_info": "MicroVision（NASDAQ: MVIS）2026-10-23 宣布（10-29 经 ACN Newswire 等分发）下一代短距激光雷达 MOVIA Pro 开始量产出货，由其奥兰多工厂生产。核心特性：\n\n1）片上感知：感知软件通过 Open Software Framework（Linux 基础）直接在传感器上运行，点云在设备内处理为物体级信息，降低对外部算力的依赖；\n2）multi-echo 多回波感知，提升复杂条件下目标检出；\n3）软件定义演进：能力可通过软件更新升级；\n4）工业级互联：CAN、千兆/百兆以太网、工业 I/O。\n\n目标市场覆盖无人机载系统、智慧交通与基础设施、仓储与工业自动化（AMR/AGV/叉车 ADAS）、安防与国防等。",
        "ai_comment": "「传感器即计算机」是激光雷达行业从卖硬件转向卖「感知订阅」的关键一步——禾赛、Ouster 都在推类似路线，MicroVision 的差异点在于把开放 Linux 软件框架与工业连接性做成了标配。对国内厂商的参照意义：边缘侧物体级输出的 SDK 生态将成为下一个采购决策项。",
        "key_facts": [
          {
            "metric": "量产状态",
            "value": "已开始量产出货（奥兰多工厂）",
            "baseline": null,
            "condition": "2026-10-23 宣布"
          },
          {
            "metric": "片上能力",
            "value": "感知软件在传感器上运行，输出物体级信息",
            "baseline": null,
            "condition": "Linux 开放软件框架"
          },
          {
            "metric": "连接性",
            "value": "CAN / 千兆及百兆以太网 / 工业 I/O",
            "baseline": null,
            "condition": null
          }
        ],
        "position_relation": "海外短距激光雷达「边缘智能化」路线的量产节点，与禾赛 Kosmo（云端重建）、思岚 Aurora S Lite（轻量空间感知）分别占据云—端—传感器三级算力位置。",
        "signal_strength": "中",
        "tags": [
          "激光雷达",
          "边缘AI",
          "短距感知",
          "MicroVision",
          "量产"
        ],
        "terms": [
          {
            "term": "多回波（Multi-echo）",
            "definition_mechanism": "单个激光脉冲记录多次反射返回，可穿透雨雾尘或在遮挡边缘保留多层目标信息",
            "definition_contrast": "与单回波相比信息更丰富，代价是数据量与处理复杂度上升"
          }
        ],
        "sources": [
          {
            "url": "https://acnnewswire.com/press-release/japanese/111033/microvision-begins-commercial-production-of-movia(tm)-pro-for-superior-short-range-sensing-and-onboard-perception,-enabling-physical-ai-at-the-edge",
            "type": "news"
          }
        ],
        "date": "2026-10-29",
        "notes": "量产宣布日为 2026-10-23，新闻稿 10-29 分发；本条按报道日归档。"
      }
    ]
  },
  {
    "report_id": "daily-2026-10-31",
    "window_start": "2026-10-30T08:00:00+08:00",
    "window_end": "2026-10-31T08:00:00+08:00",
    "generated_at": "2026-11-03T09:44:00+08:00",
    "summary": {
      "window_takeaway": "单图转 3DGS 的显存门槛被打到消费级，开源侧出现今年最实质的一次降门槛。",
      "direction": "Speridlabs Idol 以 7.2GB 峰值显存、Apache-2.0 全量开源，把 3D 生成从专业卡推向游戏卡；国内侧其域创新继续在 3DGS 数据格式上布专利。",
      "academic_vs_industry": "同向：开源社区用工程优化解决学术模型的部署成本问题。",
      "remember_one_thing": "Idol 让一张 RTX 3080 就能跑单图转 3DGS，意味着这条技术从 demo 变成可本地批量试错的工具。"
    },
    "items": [
      {
        "item_id": "2026-10-31-A-001",
        "category": "OpenSource",
        "title": "Speridlabs 开源 Idol：单图生成 3DGS，7.2GB 显存跑通，4090 上 19 秒出模",
        "one_line_judgment": "把「单图转 3D」的显存门槛从 24GB 专业卡拉到 10GB 消费卡，且权重、代码、Demo 全量 Apache-2.0 放开，这是今年 3D 生成开源侧最实质的一次降门槛。",
        "ai_summary": "大白话：给它一张照片——手机拍的、渲染的、AI 画的都行——它能把物体变成一个能 360 度转着看的 3D 模型，而且看不见的背面它会自己「脑补」出来。最关键的是一张游戏显卡就能跑：3080 这种老卡 46 秒出一版，4090 只要 19 秒。代码和模型权重全部免费开源，可以自己在家跑。",
        "detailed_info": "10 月 30 日，Speridlabs 开源 Idol，一个从零预训练的 3D Diffusion Transformer（3D-DiT）。它不走「先预测多视角再重建」的老路，而是直接在三维空间内用扩散 Transformer 采样，输出体积化的 3D 高斯泼溅（.ply / .splat）。核心生成器 600M 参数，含编码器的完整推理栈约 1.8B，权重压缩后约 3GB。\n\n硬件指标是这次真正的卖点：峰值显存 7.2GB，RTX 3080（10GB）可跑通。同一个 262,144 高斯点、50 步的配置下，B300 3.4 秒、B200 3.6 秒、H200 6.6 秒、H100 6.7 秒、RTX 5090 14.1 秒、RTX 4090 19.1 秒、RTX 3080 46.2 秒。对比同代方案，TripoSplat 约 9.9 秒、TRELLIS 约 7.1 秒，但两者显存需求高得多；LGM 虽只要 1.1 秒，质量评分明显落后。\n\n输出可调范围 32,768 至 1,048,576 个高斯点，预处理管线自动完成抠图、背景移除（BiRefNet）、相机位姿预测与裁剪。局限也明确：输出是高斯点云不是网格，进 Blender/Maya 还需重拓扑；被遮挡的背面完全靠先验推断，不能当测量依据；主打物体级重建，城市场景等大环境不适用。",
        "ai_comment": "单图转 3D 这件事本身不新鲜，真正改变格局的是「7.2GB」这个数字。此前同类方案 24GB 起步，等于把个人开发者、学生、小工作室全挡在门外。现在一张 3080 就能跑，意味着这条技术从实验室 demo 变成了可以本地批量试错的生产工具。但别高估它：高斯不是网格，背面是猜的，进生产管线仍然要人工修——它省的是「从零建模」的时间，不是「精修」的时间。",
        "key_facts": [
          {
            "metric": "显存峰值",
            "value": "7.2GB（RTX 3080 10GB 可跑通）",
            "baseline": "同类方案普遍 24GB 起",
            "condition": "262,144 高斯点、50 步"
          },
          {
            "metric": "生成耗时",
            "value": "B300 3.4s / H100 6.7s / RTX 5090 14.1s / RTX 4090 19.1s / RTX 3080 46.2s",
            "baseline": "TripoSplat 约 9.9s、TRELLIS 约 7.1s、LGM 约 1.1s",
            "condition": "同配置 262,144 高斯点、50 步"
          },
          {
            "metric": "模型规模",
            "value": "核心生成器 600M，完整推理栈约 1.8B，权重约 3GB",
            "baseline": "同类 3D 生成模型多为数十亿参数",
            "condition": null
          },
          {
            "metric": "开源许可",
            "value": "Apache-2.0，含权重、代码、在线 Demo",
            "baseline": "多数同类仅放 Demo 或非商用权重",
            "condition": null
          },
          {
            "metric": "输出粒度",
            "value": "32,768 至 1,048,576 个高斯点可调，.ply / .splat",
            "baseline": null,
            "condition": "默认 262,144"
          }
        ],
        "position_relation": "把 3DGS 生成式路线的硬件门槛拉到消费级，与开源社区已有的 TRELLIS、LGM、TripoSplat 形成直接横向比较，是本周开源侧信号最强的一条。",
        "signal_strength": "强",
        "tags": [
          "3DGS",
          "单图转 3D",
          "开源",
          "3D-DiT",
          "Speridlabs",
          "生成式3D"
        ],
        "terms": [
          {
            "term": "3D Diffusion Transformer",
            "definition_mechanism": "把扩散模型的去噪过程放到三维 token 序列上做，直接生成三维表示而非二维图像",
            "definition_contrast": "与先出多视角图再重建的两阶段方案不同，它在 3D 空间内一次成型，避免视角不一致"
          },
          {
            "term": "高斯泼溅",
            "definition_mechanism": "用一组带位置、旋转、尺度、颜色与不透明度的各向异性高斯椭球表示场景",
            "definition_contrast": "与网格相比渲染极快、无需显式表面；代价是没有拓扑，不能直接做动画或 3D 打印"
          }
        ],
        "sources": [
          {
            "url": "https://github.com/speridlabs/idol",
            "type": "code"
          },
          {
            "url": "https://huggingface.co/speridlabs/idol",
            "type": "model"
          },
          {
            "url": "https://speridlabs.com/research/idol",
            "type": "official"
          },
          {
            "url": "https://mp.weixin.qq.com/s?__biz=MzAwOTk2OTU5OQ==&mid=2247486357&idx=4&sn=6e5bf82b6f42025d774db5a1a95bb6a1",
            "type": "media"
          }
        ],
        "date": "2026-10-30",
        "notes": "发布时间存在口径差异：官方 X/Hugging Face 上线为北京时间 2026-10-30 凌晨（UTC 10-29 晚间），部分英文源标注 10-28；本条按中文媒体报道日 10-30 归入。Speridlabs 为西班牙 Spatial AI 团队。"
      },
      {
        "item_id": "2026-10-31-A-002",
        "category": "Application",
        "title": "其域创新公开 3DGS 场景数据查询专利：把高斯泼溅做成可检索对象",
        "one_line_judgment": "若该专利落地，3DGS 场景将从「只能看的渲染资产」变成可被程序按空间条件检索的数据结构，这是机器人仿真取数的前置条件。",
        "ai_summary": "大白话：现在的高斯泼溅模型，你能看、能转，但不能「查」——比如问「这间屋里所有高度 0.8 米的平面在哪」，它答不上来。这个专利想把三维场景做成能按条件查询的数据库，让程序能直接问它要数据，而不是只能渲染成图片给人看。",
        "detailed_info": "2026-10-30，深圳市其域创新科技股份有限公司公开发明专利「面向三维高斯泼溅场景的数据查询方法、系统及电子设备」。这是继 10-27「基于多尺度高斯过程的点云上采样」之后，该公司一周内公开的第二件 3DGS 相关专利。\n\n两件专利合起来看，指向一条完整的数据链路：稀疏点云经上采样补密后，转为 3DGS 表示，再通过空间查询接口对外提供结构化访问。这与该公司此前把 LCC 格式打通英伟达 Omniverse 的动作在逻辑上一致——目标不是交付「好看的模型」，而是交付「机器能直接取用的空间数据」。\n\n对机器人仿真与具身智能训练而言，这个差别是本质性的：仿真器需要按空间范围、按物体类别、按几何属性批量取数，而不是逐帧渲染。3DGS 若只有渲染管线，就只能是数据生产的终点；有了查询能力，才可能成为训练数据的中间层。",
        "ai_comment": "这条专利的技术含量不好判断——「查询」在专利文本里可以很宽泛，从空间索引到语义检索都能往里装。但方向判断是清楚的：谁先把 3DGS 从渲染格式做成数据格式，谁就握住了机器人仿真取数的入口。风险在于这类基础数据格式的竞争最终取决于生态而非专利，Omniverse、USD 生态的惯性远比一家公司的专利强势。",
        "key_facts": [
          {
            "metric": "专利主题",
            "value": "面向三维高斯泼溅场景的数据查询方法与系统",
            "baseline": null,
            "condition": "2026-10-30 公开"
          },
          {
            "metric": "同周关联",
            "value": "与 10-27 点云上采样专利构成「补密—表示—查询」链路",
            "baseline": null,
            "condition": "同一申请人"
          },
          {
            "metric": "生态动作",
            "value": "LCC 格式已与英伟达 Omniverse 打通",
            "baseline": null,
            "condition": "企业公开信息"
          }
        ],
        "position_relation": "补齐 3DGS 从「渲染资产」到「可查询数据」的中间层，是其域创新 LCC 生态的关键一环。",
        "signal_strength": "弱",
        "tags": [
          "3DGS",
          "空间查询",
          "专利",
          "其域创新",
          "数据格式"
        ],
        "terms": [
          {
            "term": "空间查询",
            "definition_mechanism": "按位置、范围、几何或语义条件从三维数据集中检索目标子集",
            "definition_contrast": "与渲染不同，查询返回的是数据而非像素，可直接供规划、仿真、训练使用"
          }
        ],
        "sources": [
          {
            "url": "https://www.qcc.com/cpartner/fe059e05b936bda65c4a114611c0592e",
            "type": "data"
          }
        ],
        "date": "2026-10-30",
        "notes": "专利公开信息，未检索到配套产品或代码。"
      },
      {
        "item_id": "2026-10-31-D-001",
        "category": "Research",
        "title": "上海交大 ACD-GS：非对称曲率感知致密化，高斯数量与存储直降 60%",
        "one_line_judgment": "3DGS 落地移动端/网页端的最大障碍是「一个场景几百 MB」，这篇论文用曲率感知的致密化策略在保持画质的前提下一刀砍掉六成高斯。",
        "ai_summary": "大白话：高斯泼溅场景是用几百万个小「光斑」拼出来的，光斑越多效果越好但文件越大、显卡越吃不消。上海交大的 ACD-GS 聪明在于：平坦的地方（墙面）少放光斑，弯曲复杂的地方（雕花、边缘）多放。整体光斑数量减少 60%，看起来几乎一样好。",
        "detailed_info": "论文《ACD-GS: Asymmetric Curvature-aware Densification for 3D Gaussian Splatting》于 2026-10-30 在 arXiv 公开（2610.39399，钟厚强、朱天驰、胡强等，上海交通大学信息科学与工程学院、巴黎卓越工程师学院等）。方法要点：利用二阶深度响应等曲率信号做非对称致密化——按区域结构复杂度差异化分配高斯密度，平坦区域合并、高曲率区域加密。结果：高斯数量与存储减少约 60%，同时保持渲染保真度，性能优于现有致密化方法。\n\n该工作与 2026 年首篇 3DGS 效率综述 SUCCESS-GS、C³Splat、COSA-GS 等压缩路线同向：把 3DGS 从「能渲染」推向「能规模化分发」。",
        "ai_comment": "3DGS 压缩/致密化是当前最拥挤也最实用的学术赛道之一（本周窗口内还有武科大结构感知剪枝等同类工作）。ACD-GS 的非对称策略本质上与「分级 LOD/流式加载」思路可以叠加，网页端 3DGS 应用（虚拟展厅、数字孪生汇报）是最直接受益方。注意此类论文的 60% 数字均在其自选数据集上测得，跨场景泛化需自行验证。",
        "key_facts": [
          {
            "metric": "高斯数量/存储降幅",
            "value": "约 60%",
            "baseline": null,
            "condition": "保持渲染保真度前提下"
          },
          {
            "metric": "方法",
            "value": "二阶深度响应 + 非对称曲率感知致密化",
            "baseline": null,
            "condition": null
          },
          {
            "metric": "机构",
            "value": "上海交通大学（信息学院/巴黎卓越工程师学院）",
            "baseline": null,
            "condition": null
          }
        ],
        "position_relation": "与 SuperSplat（编辑分发工具）、glTF 高斯扩展（交换标准）共同构成 3DGS「体积可控」这条工程主线。",
        "signal_strength": "弱",
        "tags": [
          "3DGS",
          "致密化",
          "压缩",
          "移动端",
          "论文"
        ],
        "terms": [
          {
            "term": "致密化（Densification）",
            "definition_mechanism": "3DGS 训练中按误差自适应增加高斯原语的过程，是画质与体积博弈的核心环节",
            "definition_contrast": "与剪枝（Pruning）互为逆操作：前者做加法提精度，后者做减法控体积；实际系统通常交替执行"
          }
        ],
        "sources": [
          {
            "url": "https://arxiv.org/abs/2610.39399",
            "type": "paper"
          }
        ],
        "date": "2026-10-30",
        "notes": "arXiv 2610.39399，2026-10-30 提交。"
      },
      {
        "item_id": "2026-10-31-D-002",
        "category": "Hardware",
        "title": "思看科技发布 AirGO Pad 随行智测平台：把计算、软件与触控屏装进一块平板",
        "one_line_judgment": "三维检测的「电脑 + 线缆」捆绑正在被拆掉——思看把工业级检测软件和算力集成进随行平板，与无线扫描仪组成纯无线作业链路。",
        "ai_summary": "大白话：以前工业三维扫描必须在旁边接一台电脑拖线缆。思看这次把计算平台、检测软件和高清触控屏做成一块随行平板，扫描仪是无线的、平板也是随身的，工程师到现场不用背电脑就能完成测量和看结果。",
        "detailed_info": "据思看科技官网公司动态，2026-10-30 思看推出新一代 AirGO Pad 随行智测平台：将计算平台、工业级三维检测软件与高清触控屏集成于一体，打破传统三维检测对电脑及线缆的依赖；操作人员无需携带电脑，配合无线三维扫描设备即可完成工业现场三维测量，主打更轻量、灵活的作业体验。\n\n与同日发布的 Q3 财报并读更有意味：本季度研发投入同比 +46.74%、研发费用率升至 33.31%，AirGO Pad 正是这种高强度研发投入在「无线化作业链路」上的落点。与先临 FreeScan Combo Wireless（550g 无线扫描仪）呼应，头部工业扫描厂商在同步拆「线缆」这个最后的现场作业痛点。",
        "ai_comment": "AirGO Pad 单独看是配件级更新，但放进行业时间线看，它和先临的无线扫描仪、爱乐酷的消费级手持机共同指向同一个终局：工业三维检测的作业形态全面「无线化 + 平板化」。这对仪器经销商意味着成套销售（扫描仪+平板+软件订阅）取代单机销售。",
        "key_facts": [
          {
            "metric": "发布日期",
            "value": "2026-10-30",
            "baseline": null,
            "condition": "思看科技官网"
          },
          {
            "metric": "集成度",
            "value": "计算平台 + 工业级三维检测软件 + 高清触控屏",
            "baseline": null,
            "condition": "一体式随行平板"
          },
          {
            "metric": "配套研发投入",
            "value": "Q3 研发投入同比 +46.74%，研发费用率 33.31%",
            "baseline": null,
            "condition": "同日披露季报"
          }
        ],
        "position_relation": "补齐思看「无线扫描 + 随行计算」链路的终端一环，与先临三维 FreeScan Combo Wireless 构成头部厂商对现场无线作业的共同押注。",
        "signal_strength": "中",
        "tags": [
          "思看科技",
          "随行智测",
          "无线检测",
          "三维测量",
          "AirGO"
        ],
        "terms": [],
        "sources": [
          {
            "url": "https://www.3d-scantech.com.cn/category/gsnews/",
            "type": "official"
          }
        ],
        "date": "2026-10-30",
        "notes": "来源为思看科技官网公司动态页（30 Oct, 2026）。"
      },
      {
        "item_id": "2026-10-31-D-003",
        "category": "Application",
        "title": "思看科技 Q3 财报：营收 9769 万元微增 6.81%，净利大跌 74.45%，研发投入却加码 46.74%",
        "one_line_judgment": "增收不增利+研发费用率拉到 33.31%——这是典型的「以利润换技术代差」打法，季度利润的下滑是主动选择而非需求萎缩。",
        "ai_summary": "大白话：思看科技第三季度收入比去年多了一点（+6.8%），但利润只剩去年的四分之一。原因不是卖不动，而是研发花钱太猛——研发投入同比增长近一半，占收入三分之一。相当于把赚的钱主动砸进了下一代技术。",
        "detailed_info": "思看科技（688583.SH）2026-10-30 发布第三季度报告：\n\n· 营业收入 9769.11 万元，同比 +6.81%；年初至报告期末 2.83 亿元，同比 +5.40%；\n· 归母净利润 640.56 万元，同比 -74.45%；扣非净利润 101.64 万元，同比 -94.66%；\n· 研发投入合计 3253.97 万元，同比 +46.74%；研发费用率 33.31%（上年同期 24.06%）；年初至期末研发投入 9444.70 万元，同比 +56.80%；\n· 经营性现金流年初至期末 -4114.77 万元。\n\n同日披露十大流通股东变动：叶波增持 11.56% 至 78.6 万股，如山新兴创投减持 12.68%、华睿布谷鸟系减持约 35%。当日股价收跌 6.49%（报 69.01 元，总市值 85.4 亿元，动态市盈率 312 倍）。",
        "ai_comment": "把三组数放一起读：收入稳、利润塌、研发翻倍加码、市盈率 312 倍——市场给思看的定价早已不是「扫描仪公司」而是「空间智能公司」。74% 的净利下滑里含可推测的股权激励与新品投放费用；真正要盯的先行指标是研发费用率能否持续守住 30% 以上，以及 33% 研发强度下 AirGO Pad、消费级线（此前已宣布从工业级向消费级拓展）能否在 2027 年打开第二收入曲线。",
        "key_facts": [
          {
            "metric": "Q3 营收",
            "value": "9769.11 万元（+6.81%）",
            "baseline": "上年同期",
            "condition": null
          },
          {
            "metric": "Q3 归母净利润",
            "value": "640.56 万元（-74.45%）",
            "baseline": "扣非 -94.66%",
            "condition": null
          },
          {
            "metric": "Q3 研发投入",
            "value": "3253.97 万元（+46.74%）",
            "baseline": null,
            "condition": "研发费用率 33.31%"
          },
          {
            "metric": "年初至期末研发",
            "value": "9444.70 万元（+56.80%）",
            "baseline": null,
            "condition": null
          },
          {
            "metric": "当日股价",
            "value": "收跌 6.49% 至 69.01 元",
            "baseline": null,
            "condition": "动态 PE 312 倍"
          }
        ],
        "position_relation": "与先临三维（同处杭州、同为上市扫描仪厂商）构成国内工业三维检测双龙头的基本面对照样本；研发费用率是判断其「消费级+平台化」第二曲线成色的核心指标。",
        "signal_strength": "强",
        "tags": [
          "思看科技",
          "季报",
          "研发投入",
          "财务",
          "688583"
        ],
        "terms": [],
        "sources": [
          {
            "url": "https://money.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12679997&stockid=688583",
            "type": "official"
          },
          {
            "url": "https://k.sina.com.cn/article_6372873842_17bda567202001nkmg.html?kdurlshow=1",
            "type": "news"
          },
          {
            "url": "https://www.163.com/dy/article/LAGD1QAE05568W0A.html",
            "type": "news"
          }
        ],
        "date": "2026-10-30",
        "notes": "三季报公告日 2026-10-30；股东变动为同日公告。"
      }
    ]
  },
  {
    "report_id": "daily-2026-11-01",
    "window_start": "2026-10-31T08:00:00+08:00",
    "window_end": "2026-11-01T08:00:00+08:00",
    "generated_at": "2026-11-03T09:46:00+08:00",
    "summary": {
      "window_takeaway": "世界模型的「隐空间路线」在国内拿到建制化平台，与视频生成路线正式分道。",
      "direction": "西湖大学成立世界模型研究中心，40 亿参数 Awomo 六榜登顶；国内工业侧则把三维建模归入工业视觉体系。",
      "academic_vs_industry": "分岔：学术侧押注概念世界模型与物理基座，产业侧仍在工业检测与数字孪生交付上打转。",
      "remember_one_thing": "40 亿参数在 6 个具身榜单同时登顶，说明世界模型未必需要千亿参数，路线选择比规模更重要。"
    },
    "items": [
      {
        "item_id": "2026-11-01-A-001",
        "category": "Application",
        "title": "西湖大学成立世界模型研究中心：40 亿参数 Awomo 同时登顶 6 个榜单",
        "one_line_judgment": "一支高校团队用 40 亿参数模型在 6 个具身与物理理解榜单同时登顶，走的是「不生成像素、在隐空间重组概念」的路线，与主流视频生成式世界模型形成明确分岔。",
        "ai_summary": "大白话：大多数「世界模型」是在生成视频——让 AI 画出接下来会发生什么。西湖大学这支团队反着来：不画图，直接在抽象的数学空间里理解「杯子在桌边会掉下去」这类物理规律。结果这个只有 40 亿参数的小模型，在 6 个国际机器人测试榜上同时拿了第一，而大厂同类模型动辄千亿参数。",
        "detailed_info": "10 月 31 日，西湖世界模型研究中心（Westlake World Model Center）在西湖大学云谷校区揭牌成立，为校级交叉科研平台。中心主任由工学院助理教授于开丞担任，金耀初院士任首席科学家。\n\n成立大会上公布的首批成果包括：40 亿参数的世界模型预训练模型 Awomo，在 RoboTwin-c2r（45.5）、Physics-IQ（80.6%）、MolmoSpaces（73.4%）、Robocasa（64.3%）、Libero-Plus（95.88）、RoboDojo Sim（35.34）六个榜单同时登顶；一套清洗超过 50 万小时的具身物理世界数据管线；以及近千卡的跨地域算力平台。\n\n技术路线的关键在于「概念世界模型」：不自回归生成高分辨率视频或逐帧渲染 3D 画面，而是在抽象隐空间中建立物理概念的表征（空间关系、材质特性、接触状态等），遇到新场景时重组已有概念进行推演。团队 2023 年组建 AutoLab，2024 年以生成极端场景视频路线拿下 ECCV 自动驾驶赛道冠军，2024 年底转向这条隐空间路线，2026 年初孵化公司西湖数智（Awomo），累计融资超亿元。\n\n值得注意的还有一句承诺：依托通用物理基座，下游开发者可能只需 20 至 30 小时的后训练，即可定制特定领域模型，而不必采集百万小时数据。",
        "ai_comment": "这条路线的价值不在榜单，在于它绕开了渲染成本。生成式世界模型要产出可训练数据，必须先渲染出画面；概念世界模型直接在隐空间推演，算力账完全不同。但代价也很清楚：它不能直接产出三维场景资产，对做三维重建的行业是「平行路线」而非替代品。真正值得跟踪的是那 50 万小时数据和「20-30 小时定制」的承诺——如果成立，具身智能的数据门槛会被重写。",
        "key_facts": [
          {
            "metric": "模型参数",
            "value": "40 亿（4B）",
            "baseline": "同类世界模型动辄千亿至万亿参数",
            "condition": null
          },
          {
            "metric": "榜单成绩",
            "value": "RoboTwin-c2r 45.5 / Physics-IQ 80.6% / MolmoSpaces 73.4% / Robocasa 64.3% / Libero-Plus 95.88 / RoboDojo Sim 35.34",
            "baseline": "六个榜单均列第一",
            "condition": "截至 2026-10-09 榜单数据"
          },
          {
            "metric": "数据管线",
            "value": "清洗超 50 万小时具身物理世界数据",
            "baseline": null,
            "condition": null
          },
          {
            "metric": "算力平台",
            "value": "近千卡跨地域集群",
            "baseline": null,
            "condition": null
          },
          {
            "metric": "产业主体",
            "value": "孵化公司西湖数智（Awomo），累计融资超亿元",
            "baseline": null,
            "condition": "2026 年初成立"
          }
        ],
        "position_relation": "代表世界模型赛道的「隐空间路线」，与视频生成式路线（Genie、Marble）形成方法论分岔；为具身智能提供物理基座。",
        "signal_strength": "强",
        "tags": [
          "世界模型",
          "空间智能",
          "具身智能",
          "西湖大学",
          "Awomo"
        ],
        "terms": [
          {
            "term": "概念世界模型",
            "definition_mechanism": "把场景拆解为可复用的物理概念（空间关系、材质、接触状态），在隐空间中重组概念以推演未见场景",
            "definition_contrast": "与像素/视频生成式世界模型不同，不产出画面，只产出状态预测，算力成本低一个量级"
          },
          {
            "term": "隐空间",
            "definition_mechanism": "模型内部用于抽象与压缩的高维向量空间，语义相近的状态在其中彼此靠近",
            "definition_contrast": "与像素空间相比，隐空间推演不需要模拟每一个像素，但可解释性更差"
          }
        ],
        "sources": [
          {
            "url": "https://news.qq.com/rain/a/20261101A03ZGK00",
            "type": "media"
          },
          {
            "url": "https://zjnews.zjol.com.cn/zjnews/202611/t20261101_32001333.shtml",
            "type": "media"
          },
          {
            "url": "https://www.geekpark.net/news/373316",
            "type": "media"
          }
        ],
        "date": "2026-10-31",
        "notes": "成立仪式 10-31 于西湖大学云谷校区举行，媒体报道集中在 11-01。"
      },
      {
        "item_id": "2026-11-01-A-002",
        "category": "Application",
        "title": "首届中国工业视觉人工智能大会在沪开幕，单设「三维建模与工业数字孪生」专题论坛",
        "one_line_judgment": "三维建模在国内被正式归入「工业视觉」话语体系，与光学成像、缺陷检测并列成专题，这是国内产业分类的一次明确表态。",
        "ai_summary": "大白话：国内办了个工业视觉的会，来的主要是工厂里做检测、做光学成像的人。但这次专门开了一个分论坛讲「三维建模和工业数字孪生」——意思是三维建模在国内已经被当成工业生产的一环，而不是单独的炫技方向。",
        "detailed_info": "第一届中国工业视觉人工智能大会于 10 月 31 日至 11 月 1 日在上海举行，由中国人工智能学会智能光学成像专委会等机构支撑，首日设人工智能顶会论文宣讲、青年科学家论坛、工业人工智能优秀成果论坛等，11 月 1 日下午并行举办六场专题论坛，其中包括「三维建模与工业数字孪生」。\n\n大会同期发布七项工业人工智能创新成果，并启动相关平台与产学研合作项目。参会方覆盖高校、科研机构与工业视觉企业，议题集中在多模态学习、视觉语言动作模型、世界模型、工业智能体等方向。\n\n把三维建模放进「工业视觉」的框架里讨论，与海外把同类技术归入「空间智能 / 世界模型」是两套不同的话语体系：前者强调检测、测量、产线集成与可追溯；后者强调具身、仿真与通用能力。同一批技术，在两套体系里的评价标准和客户画像完全不同。",
        "ai_comment": "这类会议本身不产生技术，但它标记了产业分类的落点。对做三维重建的公司，这意味着国内主战场仍然在工业检测与数字孪生交付，而不是通用世界模型——后者在国内目前还停留在高校和少数初创公司层面。选题和叙事跟着客户走，这是现实。",
        "key_facts": [
          {
            "metric": "会期",
            "value": "2026-10-31 至 11-01",
            "baseline": null,
            "condition": "上海"
          },
          {
            "metric": "专题论坛",
            "value": "六场并行，含「三维建模与工业数字孪生」",
            "baseline": null,
            "condition": "11-01 下午"
          },
          {
            "metric": "成果发布",
            "value": "七项工业人工智能创新成果",
            "baseline": null,
            "condition": null
          }
        ],
        "position_relation": "反映国内三维重建技术的话语归属：被纳入工业视觉与智能制造体系，而非独立的空间智能赛道。",
        "signal_strength": "中",
        "tags": [
          "工业视觉",
          "数字孪生",
          "三维建模",
          "行业会议"
        ],
        "terms": [
          {
            "term": "工业视觉",
            "definition_mechanism": "面向制造现场的视觉感知与测量技术体系，含缺陷检测、尺寸测量、定位引导",
            "definition_contrast": "与通用计算机视觉相比，工业视觉强调可追溯的精度指标与产线节拍"
          }
        ],
        "sources": [
          {
            "url": "https://city.eastday.com/eastdaycity/#/article/1822636/80b882adfe2d44f98a159a879aa4719a",
            "type": "media"
          }
        ],
        "date": "2026-10-31",
        "notes": "报道来自东方网区情频道，会议成果清单未逐项披露。"
      }
    ]
  },
  {
    "report_id": "daily-2026-11-02",
    "window_start": "2026-11-01T08:00:00+08:00",
    "window_end": "2026-11-02T08:00:00+08:00",
    "generated_at": "2026-11-03T09:48:00+08:00",
    "summary": {
      "window_takeaway": "国标给工业数字孪生定了三层交付口径，几何重建不再是终点。",
      "direction": "三项钢铁智能制造国标发布，数字孪生被拆为数字模型、知识模型、智能模型；学术侧出现把主动探索与三维重建合并评测的 SpatialScout。",
      "academic_vs_industry": "同向：标准要求模型带语义与推理，学术侧在补「主动取数」这一前置能力。",
      "remember_one_thing": "数字孪生标准把「知识模型」「智能模型」写进要求，只交几何模型的项目将不再算完成交付。"
    },
    "items": [
      {
        "item_id": "2026-11-02-A-001",
        "category": "Application",
        "title": "三项钢铁智能制造国标发布：数字孪生系统首次有了「三层架构」技术要求",
        "one_line_judgment": "国标把数字孪生拆成「目标实体—数字实体—孪生应用」三层，并把模型细分为数字模型、知识模型、智能模型，等于给工业三维重建的交付物定了验收口径。",
        "ai_summary": "大白话：国家给钢铁厂的数字孪生定了标准。以后你说自己做了个「数字孪生」，不能只交一个能转着看的 3D 模型——标准要求你分三层：现实里的工厂、数字世界里的对应体、以及基于它做的应用；模型本身还得分三类：只描述形状的、带工艺知识的、能自己推理决策的。做不到就只能算第一层。",
        "detailed_info": "11 月 1 日，市场监管总局发布三项钢铁智能制造国家标准：《智能制造 废钢智能工厂设计要求》《智能制造 钢铁智能工厂数字孪生系统技术要求》《智能制造 钢铁工业多基地制造资源协同管控系统技术要求》。\n\n其中数字孪生标准的架构要求最值得关注：建立「目标实体—数字实体—孪生应用」三层架构，并把孪生模型细分为数字模型、知识模型、智能模型三类，分别提出构建要求。三项标准统一采用分层解耦的架构设计要求，逐层明确功能定位与技术边界。\n\n对三维重建行业而言，这是一次交付物定义的收紧。「数字模型」对应几何与外观重建，「知识模型」要求把工艺规则、设备机理沉淀进去，「智能模型」则要能支撑预测与决策。过去大量项目止步于第一层——扫出点云、建出模型、做个可视化大屏，就宣称完成了数字孪生。",
        "ai_comment": "标准落地会直接改变招标文件的写法。做工业三维重建的公司接下来会碰到两类需求：一类仍然只要几何模型（第一层），另一类要求带语义和推理（第二、三层），后者必须和工艺方、仿真方联合交付，单靠扫描建模吃不下来。这既是门槛，也是把低价竞争者挡在外面的机会。",
        "key_facts": [
          {
            "metric": "标准数量",
            "value": "3 项",
            "baseline": null,
            "condition": "市场监管总局 2026-11-01 发布"
          },
          {
            "metric": "数字孪生架构",
            "value": "目标实体—数字实体—孪生应用 三层",
            "baseline": "此前无统一架构要求",
            "condition": "《钢铁智能工厂数字孪生系统技术要求》"
          },
          {
            "metric": "模型分类",
            "value": "数字模型 / 知识模型 / 智能模型 三类",
            "baseline": "行业内多混称为「孪生模型」",
            "condition": null
          }
        ],
        "position_relation": "为工业数字孪生项目提供验收口径，把「几何重建」与「带知识、可推理的孪生体」明确区分开。",
        "signal_strength": "强",
        "tags": [
          "数字孪生",
          "国家标准",
          "钢铁",
          "智能制造",
          "工业三维"
        ],
        "terms": [
          {
            "term": "数字孪生三层架构",
            "definition_mechanism": "目标实体（真实对象）—数字实体（模型与数据）—孪生应用（基于模型的业务功能）",
            "definition_contrast": "与「建个三维模型做可视化」不同，三层架构要求模型与业务形成闭环，可反作用于实体"
          },
          {
            "term": "知识模型",
            "definition_mechanism": "在几何模型之上叠加工艺规则、设备机理与约束条件的结构化表达",
            "definition_contrast": "区别于纯几何的数字模型，知识模型可被推理引擎调用"
          }
        ],
        "sources": [
          {
            "url": "https://www.163.com/dy/article/LAM0VEQG05568W0A.html",
            "type": "media"
          }
        ],
        "date": "2026-11-01",
        "notes": "来源为央视报道转述，标准全文尚未公开。"
      },
      {
        "item_id": "2026-11-02-A-002",
        "category": "Research",
        "title": "SpatialScout：让智能体自己决定「下一眼看哪」，把主动探索变成可评分的三维空间任务",
        "one_line_judgment": "测的不是「能不能重建」，而是「会不会主动去看」——这是被动喂图的重建方法在真实机器人上失效的根因。",
        "ai_summary": "大白话：以前的评测是给你一堆照片，问你能重建得多准。这个工作反过来：把相机交给 AI，让它自己在一间没见过的屋子里决定往哪走、往哪看，最后说出各个物体在三维空间的坐标。这更接近真实机器人干活的方式——没人会提前替你拍好照片。",
        "detailed_info": "SpatialScout 把一个此前分散的问题整理成统一任务：智能体从 RGB 图像出发，通过相机控制与几何工具估计物体中心，探索策略与空间推断被放在同一个交互闭环里考察。每次观察是否有用、不同视角能否互相印证、提交的坐标是否可靠，都记录在最终的物体级地图中。\n\n评测选取 80 个室内场景、3,140 个目标实例，来自 iTHOR、RoboTHOR、ArchitecTHOR、ReplicaCAD 与 ProcTHOR；场景类型涵盖厨房、客厅、卧室、浴室与多房间住宅。固定场景与初始相机设置保证不同模型面对一致条件。\n\n这个设定切中了具身智能的一个真实缺口：现有三维重建方法默认「输入视角已给定且覆盖充分」，而真实机器人必须自己决定采样策略。探索效率与重建精度之间存在天然张力——多看几眼更准，但耗时；少看几眼快，但可能漏掉关键几何。",
        "ai_comment": "把「主动视觉」和「三维重建」放进同一个评测里，是这个工作最有价值的部分。过去两个社区各做各的：SLAM 社区关心位姿与稠密建图，主动视觉社区关心下一最佳视角，具身社区关心导航与操作，彼此基准不通用。SpatialScout 提供了一个共同考场，但代价是场景全是仿真（iTHOR 系列），真实世界的传感器噪声、光照变化、动态物体都还没进来。",
        "key_facts": [
          {
            "metric": "评测规模",
            "value": "80 个室内场景、3,140 个目标实例",
            "baseline": null,
            "condition": "iTHOR / RoboTHOR / ArchitecTHOR / ReplicaCAD / ProcTHOR"
          },
          {
            "metric": "任务形式",
            "value": "智能体自主控制相机探索并输出物体级三维坐标",
            "baseline": "传统设定为给定视角做重建",
            "condition": null
          },
          {
            "metric": "开源资产",
            "value": "代码 GitHub JesseZZZZZ/SpatialScout；数据集 HuggingFace",
            "baseline": null,
            "condition": "arXiv:2610.26659"
          }
        ],
        "position_relation": "把主动视角选择与三维空间认知统一到一个可评分任务，补上「重建方法假设视角已给定」这一前提缺口。",
        "signal_strength": "中",
        "tags": [
          "空间智能",
          "主动视觉",
          "具身智能",
          "三维重建",
          "基准测试"
        ],
        "terms": [
          {
            "term": "主动空间理解",
            "definition_mechanism": "智能体自主决定观察位置与视角，并通过多视角观测推断物体三维位置的能力",
            "definition_contrast": "与被动重建不同，观察策略本身是被评测对象的一部分"
          },
          {
            "term": "物体级地图",
            "definition_mechanism": "以物体为单位组织的空间表征，记录每个目标的中心位置与可信度",
            "definition_contrast": "区别于以点或体素为单位的稠密地图，更适合下游操作任务"
          }
        ],
        "sources": [
          {
            "url": "https://arxiv.org/abs/2610.26659",
            "type": "paper"
          },
          {
            "url": "https://github.com/JesseZZZZZ/SpatialScout",
            "type": "code"
          },
          {
            "url": "https://www.163.com/dy/article/LALUTJMR0511ABV6.html",
            "type": "media"
          }
        ],
        "date": "2026-11-01",
        "notes": "媒体报道 11-01，arXiv 编号 2610.26659。"
      }
    ]
  },
  {
    "report_id": "daily-2026-11-03",
    "window_start": "2026-11-02T08:00:00+08:00",
    "window_end": "2026-11-03T13:59:43+08:00",
    "generated_at": "2026-11-03T13:59:43+08:00",
    "summary": {
      "window_takeaway": "中国厂商密集发布机器人三维感知硬件与开源重建工具，「空间智能+世界模型」成为产业新叙事主线，激光雷达与三维扫描厂商集体向机器人与新场景外溢。",
      "direction": "产业侧：禾赛（Yole 43% 份额+毕加索 SPAD-SoC）、Livox Mid-360S、大疆 Dock 4/5TD 硬件密集落地，其域创新 LCC 打通 Omniverse、VAST 半年融资 50 亿显示资本加码；学术/开源侧：普林斯顿 SplatXR、蚂蚁灵波 LingBot-Map、UWA Spatial Vivid 参考工具同窗开源，开源成为生态卡位标配。",
      "academic_vs_industry": "学术侧（SplatXR、LingBot-Map、Mundo）在攻「重建结果如何被使用」——XR 兼容、流式因果、物理可交互；产业侧在攻「数据入口与格式标准」——芯片化降本、格式进生态。两者共同把三维重建推向机器人的训练场与基础设施。",
      "remember_one_thing": "禾赛以 43% 全球车载激光雷达份额登顶 Yole 2026 报告，同日发布集成 SPAD-SoC 的「毕加索」平台——接收端芯片化正式进入量产竞争。"
    },
    "items": [
      {
        "item_id": "2026-11-03-A-001",
        "category": "OpenSource",
        "title": "SplatXR：普林斯顿把 3DGS 装进 XR 一体机的 Unity 工具包",
        "one_line_judgment": "普林斯顿团队开源 SplatXR，用「多层现实」框架把 3D 高斯溅射、物理交互与混合现实统一进 XR 一体机的 Unity 开发管线。",
        "image": "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1000&q=80",
        "ai_summary": "简单说：戴一体机时看到的「现实+虚拟」混合世界，以前很难用照片级的三维高斯技术来做——因为高斯溅射没有表面、算不了碰撞和阴影。普林斯顿这个开源工具包给了一整套模块，让开发者在 Quest 这类一体机上就能把「拍出来的真实物体」和虚拟内容混在一起、还能互相碰撞。",
        "detailed_info": "SplatXR 把 XR 重新组织为一种由交互图元构成的「多层现实」：物理层、光度层（溅射/渲染帧）、几何层（传统多边形）、幻影结构层（不可见但对齐的显式几何，用于阴影和碰撞）以及语义层（手部追踪/物体识别）。\n\n四大构建模块：Splat Renderer（面向 XR 一体机的高斯溅射渲染管线，支持无线运行与 LoD 细节层次渲染）；Splat Physics（通过行进立方体或泊松重建从溅射自动生成「幻影网格」，补上碰撞检测与阴影投射）；Splat Effects（消散重组、径向显现等着色器模板）；Splat Blending（空间遮罩与自定义着色器实现体积门户等虚实混合）。\n\n最有想象力的部分是边缘计算链路：用户在头显里选定目标点，系统截取透视视图，调用 SAM 3 / SAM 3D Objects 等图像到 3D 的基础模型，把物理对象重建为数字溅射并自动缩放到真实世界尺寸——「现场扫描一个物体就把它请进虚拟世界」。",
        "ai_comment": "这是 3DGS 走向 XR 消费端的基建型工作：它不发明新算法，而是把「溅射没有表面几何」这个 XR 落地最痛的工程死结用幻影网格绕开。普林斯顿出品+Unity 包形式，说明团队目标是让普通开发者能用。风险在于：依赖边缘算力与基础模型的重建质量，一体机端的帧率稳定性是硬考验。",
        "key_facts": [
          {
            "metric": "框架",
            "value": "多层现实：物理/光度/几何/幻影结构/语义五层",
            "baseline": "传统基于多边形的 XR 管线",
            "condition": "映维网 Nweon 报道（2026-11-02）"
          },
          {
            "metric": "核心模块",
            "value": "Splat Renderer（LoD）、Splat Physics（幻影网格）、Splat Effects、Splat Blending",
            "baseline": null,
            "condition": "Unity 包管理器安装"
          },
          {
            "metric": "扫描链路",
            "value": "头显透视视图 + SAM 3 / SAM 3D Objects 重建物理对象为溅射",
            "baseline": null,
            "condition": "边缘计算"
          }
        ],
        "position_relation": "把 3DGS 与 3D 基础模型接入 XR 一体机开发栈，填平溅射表示与标准图形学技术（碰撞/阴影）之间的鸿沟。",
        "signal_strength": "中",
        "tags": [
          "3DGS",
          "Gaussian Splatting",
          "AR/VR",
          "空间智能",
          "开源工具"
        ],
        "terms": [
          {
            "term": "幻影网格",
            "definition_mechanism": "从溅射自动生成的不可见显式几何体，承担碰撞检测与阴影计算，视觉上只渲染溅射本身",
            "definition_contrast": "高斯溅射没有表面信息、无法直接做碰撞与阴影，幻影网格是补齐标准图形学能力的工程折中"
          }
        ],
        "sources": [
          {
            "url": "https://weibo.com/ttarticle/p/show?id=2309405360741435179143",
            "type": "media"
          }
        ],
        "date": "2026-11-02",
        "notes": "映维网 Nweon 2026-11-02 报道。"
      },
      {
        "item_id": "2026-11-03-A-002",
        "category": "OpenSource",
        "title": "LingBot-Map：蚂蚁灵波开源流式因果三维重建模型",
        "one_line_judgment": "蚂蚁集团旗下蚂蚁灵波（Robbyant）开源 LingBot-Map，面向机器人的流式、因果式三维重建——边走边建，数据按因果顺序处理而非事后统一优化。",
        "image": "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1000&q=80",
        "ai_summary": "一句话：蚂蚁旗下的具身智能公司把自己「机器人边走边把环境建成三维地图」的模型开源了。传统重建要等全部数据到齐再算，这个模型像人一样边看边记，天然适合机器人这种实时移动的主体。",
        "detailed_info": "蚂蚁灵波（上海蚂蚁灵波科技有限公司）是蚂蚁集团全资具身智能公司，2024 年 12 月成立，注册资本 1 亿元。LingBot-Map 是其面向机器人空间认知的流式因果重建模型：输入连续传感器流，因果式地增量输出三维表示。\n\n对机器人而言，「流式+因果」意味着：不用等扫描结束就能拿到可用的环境模型，且新数据只影响局部、不必全局重算——这正是 SLAM 与在线重建的分水岭。该项目页与文档已在 growbotics 平台公开，配套项目页、技术博客上线。\n\n背景信号：蚂蚁把具身智能当作集团级新曲线，灵波此前已与中东 AFDE 签署 MOU 推动机器人部署，此次开源是「技术换生态」打法的一部分。",
        "ai_comment": "大厂具身智能团队开源核心重建能力，比论文发布更有分量——它意味着蚂蚁在赌「机器人空间认知的标准化底座」。需要跟踪的是开源许可证条款、代码完整度与社区运营诚意；若只是「页面上线、代码迟缓」，信号强度会迅速衰减。国内具身智能公司开源核心模型仍属稀缺动作，值得持续观察。",
        "key_facts": [
          {
            "metric": "出品方",
            "value": "蚂蚁灵波 Robbyant（蚂蚁集团全资，2024-12 成立，注册资本 1 亿元）",
            "baseline": null,
            "condition": "公开资料"
          },
          {
            "metric": "技术路线",
            "value": "流式因果三维重建：增量式处理连续传感器流，面向机器人在线建图",
            "baseline": "离线批量重建",
            "condition": "项目页与文档公开"
          },
          {
            "metric": "生态动作",
            "value": "此前与中东 AFDE 签 MOU 推进具身智能部署",
            "baseline": null,
            "condition": "2026-09 报道"
          }
        ],
        "position_relation": "在「机器人在线空间认知」方向补充国内大厂系开源力量，与 SLAM 路线互补。",
        "signal_strength": "中",
        "tags": [
          "三维重建",
          "SLAM",
          "实时重建",
          "空间智能",
          "具身智能",
          "开源模型"
        ],
        "terms": [
          {
            "term": "流式因果重建",
            "definition_mechanism": "数据按到达顺序因果式增量处理，先到先建、新数据只更新局部表示",
            "definition_contrast": "与离线重建（收齐全部数据后全局优化）不同，适合机器人这类必须实时决策的主体"
          }
        ],
        "sources": [
          {
            "url": "https://robotics.growbotics.ai/zh/projects/software/lingbot-map",
            "type": "official"
          },
          {
            "url": "https://www.robothub.app/en/companies/ant-lingbo",
            "type": "media"
          }
        ],
        "date": "2026-11-02",
        "notes": "开源完整度与许可证细节待项目仓库进一步确认。"
      },
      {
        "item_id": "2026-11-03-B-001",
        "category": "Hardware",
        "title": "禾赛：Yole 2026 车载报告 43% 份额全球第一，毕加索 SPAD-SoC 激光雷达发布",
        "one_line_judgment": "Yole 2026 报告确认禾赛以 43% 全球车载激光雷达份额居首；同日禾赛发布集成 SPAD-SoC 的新一代平台「毕加索」，把接收端芯片化推到量产节点。",
        "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80",
        "ai_summary": "简单说：权威市场研究机构 Yole 出了年度报告，禾赛在全球车载激光雷达市场拿下 43% 的份额、稳坐第一。同一天，禾赛发布了内部代号「毕加索」的新一代激光雷达平台——把最贵的接收端传感器做成一颗专用芯片，体积更小、成本更低，直接冲着大规模上车去的。",
        "detailed_info": "Yole Group《Automotive ADAS 2026》报告给出关键数字：禾赛以 43% 的全球车载激光雷达市场份额位居第一，继续扩大对竞品的领先优势。\n\n同日发布的「毕加索」平台核心是 SPAD-SoC（单光子雪崩二极管-片上系统）：把原来由分立器件堆叠的激光接收阵列集成到专用芯片上，官方口径是显著缩小体积、降低功耗与成本，并提升量产一致性。这是继 FT120 之后禾赛在芯片化路线上的又一次落子。\n\n战略背景：禾赛正在讲述「激光雷达平台公司」的双重故事——车载主战场拼份额与芯片化降本，副线 Kosmo 手持采集终端拼空间数字化新市场。",
        "ai_comment": "43% 的份额数字含金量高，说明价格战之后行业集中度仍在向头部收敛。毕加索的 SPAD-SoC 与 Ouster 的数字化 L3 路线在思路上趋同——接收端芯片化是全行业降本的必经之路，谁先做到量产一致性谁就掌握定价权。需要跟踪的下一件事：毕加索定点了哪些车企、何时 SOP。",
        "key_facts": [
          {
            "metric": "市场份额",
            "value": "43% 全球车载激光雷达份额，排名第一",
            "baseline": "Yole《Automotive ADAS 2026》",
            "condition": "Yole Group 报告"
          },
          {
            "metric": "新品",
            "value": "「毕加索」平台：集成 SPAD-SoC 的新一代激光雷达",
            "baseline": "分立器件接收端",
            "condition": "2026-11-03 发布"
          },
          {
            "metric": "战略",
            "value": "车载芯片化降本 + Kosmo 空间数字化双线并行",
            "baseline": null,
            "condition": null
          }
        ],
        "position_relation": "巩固车载激光雷达头部地位的同时，用芯片化平台为下一轮成本竞争储备弹药。",
        "signal_strength": "强",
        "tags": [
          "激光雷达",
          "点云",
          "SPAD",
          "车载",
          "禾赛科技"
        ],
        "terms": [
          {
            "term": "SPAD-SoC",
            "definition_mechanism": "把单光子雪崩二极管阵列与信号处理电路集成到一颗专用芯片，直接输出数字点云",
            "definition_contrast": "相比分立 APD 器件+独立处理板的方案，体积、功耗、成本大幅下降，量产一致性更高"
          }
        ],
        "sources": [
          {
            "url": "https://www.hesaitech.com/cn/news/1463",
            "type": "official"
          },
          {
            "url": "https://www.yolegroup.com/product/report/automotive-adas-2026/",
            "type": "media"
          }
        ],
        "date": "2026-11-03",
        "notes": "同日双事件（Yole 报告引用 + 新品发布），合并为一条以避免重复计数；份额 43% 为 Yole 2026 车载报告口径，与集微咨询 33.8% 口径不同（统计范围含/不含海外市场），已在正文并列。"
      },
      {
        "item_id": "2026-11-03-B-002",
        "category": "Application",
        "title": "其域创新 LCC 格式打通英伟达 Omniverse，80 国 8000 客户",
        "one_line_judgment": "XGRIDS 自研 LCC 数据格式接入英伟达 Omniverse 生态，官方披露客户覆盖 80 国 8000 家，空地一体三维重建公司的「格式标准」卡位初步兑现。",
        "image": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
        "ai_summary": "一句话：其域创新（XGRIDS）自己发明的三维数据格式 LCC，被英伟达的 Omniverse 平台正式打通了——相当于它的「数字孪生文件」能直接进全球最大的工业 3D 生态。同时它公布了家底：客户遍布 80 个国家、8000 家。",
        "detailed_info": "核心事件是格式打通：LCC（Layered Compact Capture）是其域创新自研的空间数据格式，此前已在闽宁镇 23.5km² 城镇级 3DGS 数字孪生中验证过空地一体数据的组织能力。此次接入 Omniverse，意味着 XGRIDS 采集的厘米级实景三维资产可以直接进入英伟达的工业元宇宙工具链（仿真、协作、可视化），不必再走格式转换的损耗路径。\n\n中新网报道披露的规模数字：客户覆盖 80 个国家、8000 家客户。对一家 2020 年底成立、约 180 人的公司，这是相当陡峭的商业化曲线。\n\n战略逻辑：在城镇级重建里，重建算法只是门票，数据格式与管线才是护城河——格式被平台生态采纳，等于把「采集-格式-平台-应用」的链路焊死。",
        "ai_comment": "这是本月其域创新最有战略价值的一条新闻：算法领先是暂时的，格式被生态采纳是长期的。8000 家客户的口径来自官方披露，建议保留一分核验态度；真正要盯的是 Omniverse 接入后是否出现标杆级工业客户（能源、基建）落地案例——格式打通只是入场券，平台内的使用深度才算数。",
        "key_facts": [
          {
            "metric": "生态打通",
            "value": "LCC 格式接入英伟达 Omniverse，实景三维资产直连工业 3D 生态",
            "baseline": "此前需格式转换",
            "condition": "中新网 2026-11-02 报道"
          },
          {
            "metric": "规模",
            "value": "客户覆盖 80 个国家、8000 家",
            "baseline": null,
            "condition": "官方披露口径"
          },
          {
            "metric": "技术底座",
            "value": "LCC 格式 + Lixel 空地一体采集 + 3DGS 城镇级重建",
            "baseline": null,
            "condition": "闽宁镇案例已验证"
          }
        ],
        "position_relation": "与 Polycam 等消费端方案不同，XGRIDS 走「采集硬件+数据格式+平台生态」的产业纵深路线。",
        "signal_strength": "强",
        "tags": [
          "3DGS",
          "数字孪生",
          "空间智能",
          "其域创新",
          "Omniverse"
        ],
        "terms": [
          {
            "term": "Omniverse",
            "definition_mechanism": "英伟达的工业 3D 协作与仿真平台，支持 USD 等格式的大规模场景构建与物理仿真",
            "definition_contrast": "区别于消费级 3D 工具，Omniverse 面向工业元宇宙与数字孪生生产管线"
          }
        ],
        "sources": [
          {
            "url": "https://www.chinanews.com.cn/cj/2026/11-02/10724940.shtml",
            "type": "media"
          }
        ],
        "date": "2026-11-02",
        "notes": "新闻事件日 11-02，按事件日归档至报告日 11-03；「80 国」为客户覆盖口径，非营收口径。"
      },
      {
        "item_id": "2026-11-03-B-003",
        "category": "OpenSource",
        "title": "UWA Spatial Vivid 1.0 空间菁彩影像参考工具开源",
        "one_line_judgment": "世界超高清视频产业联盟（UWA）围绕「空间菁彩影像」标准（T/UWA 050-2026）开源 1.0 参考工具，三维影像格式标准化进入落地配套阶段。",
        "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
        "ai_summary": "简单说：国内超高清产业联盟给「三维空间影像」定了一套国字号团体标准（空间菁彩影像），现在把配套的参考工具软件开源了——相当于标准发布后立刻送出「怎么实现」的样板代码，推动产业链照着做。",
        "detailed_info": "Spatial Vivid（空间菁彩影像）是 UWA 发布的团体标准（编号 T/UWA 050-2026），面向沉浸式三维影像的内容采集、编码与呈现。参考工具 1.0 以 MIT 许可开源，提供标准的参考实现，方便终端厂商、内容平台与芯片公司在同一基线上做兼容对接。\n\n标准+参考工具+开源的组合拳在国内标准化惯例中意味着：官方在推动生态落地，而非停留纸面。\n\n背景意义：三维内容格式目前是「群雄割据」——3DGS 有 .ply/.spz，工业有 USD/glTF，视频侧有各种沉浸式封装。空间菁彩影像是从超高清视频产业侧切入三维空间的标准化尝试。",
        "ai_comment": "技术标准的价值取决于产业采用，而参考工具开源是最务实的一步——直接降低兼容成本。但这个赛道强手环伺：USD 背靠英伟达、glTF 有 Khronos 生态，空间菁彩影像真正的机会窗口在中国内容产业与终端产业链的本地化协同。后续跟踪信号：头部终端厂商宣布兼容。",
        "key_facts": [
          {
            "metric": "标准",
            "value": "T/UWA 050-2026 空间菁彩影像（Spatial Vivid）",
            "baseline": null,
            "condition": "世界超高清视频产业联盟"
          },
          {
            "metric": "配套工具",
            "value": "参考工具 1.0 开源（报道称 MIT 许可）",
            "baseline": null,
            "condition": "2026-11-02 报道"
          },
          {
            "metric": "定位",
            "value": "沉浸式三维影像的采集/编码/呈现标准化",
            "baseline": "USD、glTF 等国际格式",
            "condition": "国内产业链协同"
          }
        ],
        "position_relation": "从视频产业侧切入三维空间内容标准化，与 USD/glTF 形成格局上的并行竞争。",
        "signal_strength": "中",
        "tags": [
          "标准化",
          "三维重建",
          "AR/VR",
          "空间智能"
        ],
        "terms": [
          {
            "term": "参考工具",
            "definition_mechanism": "标准组织提供的官方参考实现软件，用于验证与对接标准的具体行为",
            "definition_contrast": "标准文本只定义「应满足什么」，参考工具展示「具体怎么做」，大幅降低产业兼容成本"
          }
        ],
        "sources": [
          {
            "url": "https://www.toutiao.com/article/7703507634044813866",
            "type": "media"
          }
        ],
        "date": "2026-11-02",
        "notes": "许可协议细节以官方仓库为准。"
      },
      {
        "item_id": "2026-11-03-B-004",
        "category": "Research",
        "title": "Mundo：几张照片搭出可物理交互的机器人世界模型（大晓机器人+NTU S-Lab）",
        "one_line_judgment": "大晓机器人联合南洋理工大学 S-Lab 发布世界模型 Mundo：1-12 张照片即可生成可漫游、可碰撞、可仿真的机器人训练场。",
        "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=80",
        "ai_summary": "一句话：给机器人造「虚拟练功房」又有了新突破——只要一沓照片（1 到 12 张），AI 就能生成一个既能自由走动、又能真实碰撞的三维环境，机器人可以在这里练习开门、抓东西、搬东西，摔了也不心疼。",
        "detailed_info": "Mundo 的技术要点：几何、物理与外观各自承担明确职责，共同构成可交互环境。物理参数（物体质量、摩擦力等）可写入虚拟场景，用户通过代码即可修改场景——拉开抽屉、推动桌椅、抛掷物件，物理引擎真实计算运动与碰撞结果，再结合参考影像渲染画面。\n\n输入侧门槛极低：1-12 张实拍图片即可还原办公室、居家等室内空间；支持沿相机路线自由漫游补全未拍摄区域；一张绘画或生成图片也能拓展出一整片可探索三维空间。\n\n应用侧已贯通导航、操作与四维模拟：三维代理提供物体类别、位置、可通行区域给路径规划器；支持不同形态机器人尝试同一任务（苹果入碗、罐子上托盘、积木堆叠）；多相机记录的动态事件可从新视角回看，模拟事件用重力和接触动力学计算，支持「子弹时间」逐帧检查。\n\n体系定位：Mundo 是大晓机器人「开悟」Kairos 世界模型体系中环境建模与仿真训练能力的补充。团队已用其重建酒店楼层与洗衣区域，模拟开门、取放物品等任务。\n\n值得注意的是其商业主体背景：大晓机器人（ACE Robotics）由原商汤科技副总裁王晓刚与陶大程等创立，是上海徐汇重点扶持的具身智能企业。",
        "ai_comment": "Mundo 的差异化在于「把物理可交互性当作一等公民」——多数照片重建（3DGS 类）只回答「看起来像不像」，Mundo 回答「推一把会怎样」，这正是机器人仿真训练的刚需。但也要冷静：物理参数（质量、摩擦力）从照片反推本质是欠定问题，报道未披露与真实物理的误差量化，落地价值取决于此。酒店试点是好的验证场，跟踪其对外公开的量化指标。",
        "key_facts": [
          {
            "metric": "输入门槛",
            "value": "1-12 张实拍图片（或短视频）即可重建室内空间",
            "baseline": "大规模采集/专业扫描",
            "condition": "澎湃新闻报道"
          },
          {
            "metric": "可交互性",
            "value": "物理参数可写入并可代码编辑，物理引擎计算碰撞，支持导航+操作+四维子弹时间回看",
            "baseline": "仅视觉漫游的重建方案",
            "condition": "大晓机器人+NTU S-Lab"
          },
          {
            "metric": "体系与试点",
            "value": "「开悟」Kairos 世界模型体系的环境建模补充；已试点酒店楼层重建与任务仿真",
            "baseline": null,
            "condition": "项目页与技术博客上线"
          }
        ],
        "position_relation": "在「世界模型」赛道里从照片重建切入可物理交互的训练场生成，与 Rivian 式边角案例仿真、NeRF/3DGS 式视觉重建形成互补分工。",
        "signal_strength": "中",
        "tags": [
          "世界模型",
          "空间智能",
          "具身智能",
          "三维重建",
          "仿真"
        ],
        "terms": [
          {
            "term": "世界模型",
            "definition_mechanism": "能对环境状态进行表征、预测与模拟的生成式模型，可从少量观测重建可交互的三维/时空环境",
            "definition_contrast": "与只做「新视角渲染」的神经重建不同，世界模型强调可编辑、可交互、可推演物理后果"
          }
        ],
        "sources": [
          {
            "url": "https://www.thepaper.cn/newsDetail_forward_34386471",
            "type": "media"
          },
          {
            "url": "https://www.acerobotics.com",
            "type": "official"
          }
        ],
        "date": "2026-11-02",
        "notes": "发布事件日 11-02，按事件日归档至报告日 11-03；「1-12 张照片」为官方演示条件，未说明复杂场景成功率。"
      },
      {
        "item_id": "2026-11-03-B-005",
        "category": "Hardware",
        "title": "Livox 览沃发布 Mid-360S：机器人 3D 激光雷达主力款升级",
        "one_line_judgment": "大疆孵化品牌 Livox 把机器人圈用得最多的 Mid-360 升级为 Mid-360S，巩固非重复扫描低成本三维激光雷达在机器人与具身智能端的位置。",
        "image": "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1000&q=80",
        "ai_summary": "一句话：机器人圈人手一只的经典激光雷达 Mid-360 出了升级款。它用「非重复扫描」的特殊打光方式，用低成本把一小片区域扫成越来越密的三维点云——这次升级主要提升性能与可靠性，依然是机器人、割草机、人形机器人的「眼睛」热门选型。",
        "detailed_info": "Mid-360 是 Livox 的标志性产品：以非重复扫描（HAP 类 Rosie 扫描模式）在累积时间内把视场内越扫越密，单台价格远低于机械式 360° 激光雷达，几乎是国内外机器人 SLAM 与具身智能开发的事实标准传感器之一。\n\nMid-360S 作为其升级款，面向机器人三维感知与导航场景，在原 360°×59° 视场基础上更新器件与可靠性。新浪财经与多家渠道 11 月 2 日报道了该发布。\n\n背景：Livox 2016 年由大疆孵化，此前车载业务调整后聚焦机器人与工业市场，Mid 系列是其基本盘。",
        "ai_comment": "Mid-360 的护城河从来不是单点性能，而是「便宜+够用+生态默认」。360S 若在保持价格带的同时提升可靠性（这对割草机、人形机器人的量产至关重要），将进一步挤压禾赛 XT 系列和国产跟随者在机器人端的低价市场。注意：具体参数与定价以官网页面为准，报道未完整给出。",
        "key_facts": [
          {
            "metric": "定位",
            "value": "Mid-360 的升级款，机器人 3D 感知与导航主力传感器",
            "baseline": "Mid-360",
            "condition": "2026-11-02 报道"
          },
          {
            "metric": "技术路线",
            "value": "非重复扫描、360° 水平视场、低成本点云输出",
            "baseline": "机械式多线激光雷达",
            "condition": "Livox 既有平台"
          },
          {
            "metric": "背景",
            "value": "Livox 2016 年由大疆孵化，车载收缩后聚焦机器人与工业",
            "baseline": null,
            "condition": "公开资料"
          }
        ],
        "position_relation": "在机器人低成本三维感知端巩固份额，与思岚 RPLIDAR、禾赛 XT 系列正面竞争。",
        "signal_strength": "中",
        "tags": [
          "激光雷达",
          "点云",
          "SLAM",
          "具身智能",
          "Livox"
        ],
        "terms": [
          {
            "term": "非重复扫描",
            "definition_mechanism": "激光以非重复的玫瑰花结轨迹扫描，积分时间内视场覆盖率与点云密度持续累积",
            "definition_contrast": "与机械式固定线束扫描相比，单位成本低、近场密度可累积变密，但单帧角分辨率较低"
          }
        ],
        "sources": [
          {
            "url": "https://finance.sina.com.cn/wm/2026-11-02/doc-inixipxc9394350.shtml",
            "type": "media"
          },
          {
            "url": "https://www.livoxtech.com",
            "type": "official"
          }
        ],
        "date": "2026-11-02",
        "notes": "升级款具体参数与定价待官方页面确认。"
      },
      {
        "item_id": "2026-11-03-B-006",
        "category": "Hardware",
        "title": "大疆发布 Dock 4 机场与 Matrice 5TD 行业无人机",
        "one_line_judgment": "大疆行业侧同日发布 Dock 4 自动机场与 Matrice 5TD 三维作业无人机，把「无人值守常态化三维采集」的基础设施再降一档门槛。",
        "image": "https://images.unsplash.com/photo-1473968512647-4e447946d846?auto=format&fit=crop&w=1000&q=80",
        "ai_summary": "简单说：大疆把「无人机机窝」（Dock 机场）更新到第四代，同时发布了新款行业无人机。机场+无人机的组合意味着：巡检、测绘、三维采集这些活，可以完全无人值守、按计划自动执行——它是一套「自动收割三维数据」的基础设施。",
        "detailed_info": "Dock 4 是大疆机场系列的迭代款，延续「无人机自动起降、自动换电/充电、远程任务调度」的形态，面向无需人工到场的常态化作业。\n\nMatrice 5TD 定位行业三维作业：面向测绘、巡检、应急等场景，配合大疆智图可完成实时三维重建（此前 Matrice 4 系列已确立这套「采集-回传-重建」的行业范式）。\n\n意义在于把三维数据的「生产节奏」从项目制变成日程制：机场+机巢让每天自动飞一遍、持续更新数字孪生成为可能——这对基础设施监测、矿区进度盘点这类需要时间序列三维数据的客户是刚需。",
        "ai_comment": "Dock 系列是大疆行业业务增长最快的形态之一，它的价值不是单机参数，而是把三维采集变成「订阅式数据服务」的载体。5TD 与 Dock 4 的组合，进一步压缩了中小型测绘服务商的设备拼装空间。需要关注国内低空经济政策与空域审批的实际落地速度——那是这条曲线真正的外部约束。",
        "key_facts": [
          {
            "metric": "发布",
            "value": "Dock 4 自动机场与 Matrice 5TD 行业无人机",
            "baseline": "Dock 3 / Matrice 4 系列",
            "condition": "2026-11-02 报道"
          },
          {
            "metric": "形态",
            "value": "无人值守：自动起降、自动充电/换电、远程任务调度",
            "baseline": null,
            "condition": "机场系列范式"
          },
          {
            "metric": "定位",
            "value": "测绘/巡检/应急三维作业，实时三维重建管线",
            "baseline": null,
            "condition": "配合大疆智图"
          }
        ],
        "position_relation": "把三维数据采集从「项目制人工飞行」推向「日程制无人值守」，是数字孪生数据供给侧的基础设施。",
        "signal_strength": "中",
        "tags": [
          "无人机",
          "三维重建",
          "数字孪生",
          "大疆"
        ],
        "terms": [
          {
            "term": "无人机机场（Dock）",
            "definition_mechanism": "无人机自动起降+补能+远程调度的地面基站，支持无人值守的常态化飞行任务",
            "definition_contrast": "相比人工到场起降，机场让高频次、日程化的自动采集成为可能"
          }
        ],
        "sources": [
          {
            "url": "https://news.qq.com/rain/a/20261102A0B8C300",
            "type": "media"
          },
          {
            "url": "https://www.dji.com",
            "type": "official"
          }
        ],
        "date": "2026-11-02",
        "notes": "发布事件日 11-02，按事件日归档至报告日 11-03；价格与套件信息以官方页面为准。"
      },
      {
        "item_id": "2026-11-03-B-007",
        "category": "Application",
        "title": "VAST（Tripo 母公司）：半年融资总额约 50 亿元，生成式 3D 独角兽加速",
        "one_line_judgment": "生成式 3D 公司 VAST（三启万物，产品 Tripo）半年内累计融资约 50 亿元，文生 3D 赛道在中国出现资金最集中的头部标的。",
        "image": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1000&q=80",
        "ai_summary": "一句话：做 Tripo（一句话生成 3D 模型）的中国公司 VAST，半年里融了大约 50 亿元，成了生成式 3D 这条赛道里最吸金的玩家——资本在赌「AI 时代的 3D 素材会像图片一样被批量生成」。",
        "detailed_info": "36 氪等媒体 11 月 2 日报道，VAST（北京三启万物）近期完成新一轮融资，半年内累计融资总额约 50 亿元人民币。其核心产品 Tripo 是全球用户量领先的文生 3D/图生 3D 产品，直接对标 Luma AI Genie、Meshy 等竞品。\n\n资本逻辑：3D 生成模型被视为「空间智能时代的图片生成」——游戏、电商、XR、机器人仿真都需要海量三维资产，人工建模成本高企，生成式 3D 是确定性的降本路径。\n\n隐忧同样清晰：3D 生成的商业化验证弱于图片生成（客单价、付费意愿、成品率都待验证），50 亿级别的资金集中度意味着这条赛道容错率极低，头部效应将极其残酷。",
        "ai_comment": "半年 50 亿的融资强度在国内 AI 应用层罕见，说明一级市场把生成式 3D 当作「必争之地」而非「实验性赛道」。判断这家公司的关键指标不是融了多少钱，而是 Tripo 的付费订阅留存、企业客户（游戏/电商）采购比例、以及生成模型的成品可用率。资金弹药充足时，头部会迅速拉大与 Meshy 等竞品的模型迭代差距。",
        "key_facts": [
          {
            "metric": "融资",
            "value": "半年内累计融资总额约 50 亿元",
            "baseline": null,
            "condition": "36 氪等报道，2026-11-02"
          },
          {
            "metric": "产品",
            "value": "Tripo：文生 3D / 图生 3D，全球头部生成式 3D 产品",
            "baseline": "Luma Genie、Meshy",
            "condition": null
          },
          {
            "metric": "公司",
            "value": "VAST（三启万物），2023 年成立，总部北京",
            "baseline": null,
            "condition": "公开资料"
          }
        ],
        "position_relation": "与 Luma AI（海外生成式 3D 头部）隔洋对峙，VAST 是中国侧资金与用户规模最集中的生成式 3D 标的。",
        "signal_strength": "中",
        "tags": [
          "生成式3D",
          "三维重建",
          "融资",
          "空间智能"
        ],
        "terms": [],
        "sources": [
          {
            "url": "https://www.36kr.com/p/4052452750300037",
            "type": "media"
          },
          {
            "url": "https://www.sohu.com/a/1096218833_114778",
            "type": "media"
          }
        ],
        "date": "2026-11-02",
        "notes": "融资口径为媒体报道，具体轮次与投资方以官方为准。"
      },
      {
        "item_id": "2026-11-03-B-008",
        "category": "Application",
        "title": "冰柏科技 Mirauge3D V3.1.2：分布式平差支撑百万级影像重建",
        "one_line_judgment": "合肥冰柏科技发布 Mirauge3D V3.1.2，引入分布式区域网平差，把消费级摄影测量软件推向百万级影像的超大规模工程重建。",
        "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80",
        "ai_summary": "一句话：国产摄影测量软件 Mirague3D 出了新版本——以前几十万张照片的重建会把单机内存撑爆，现在可以拆到多台机器上一起算，百万张照片也能处理。这对城市级测绘、大规模倾斜摄影是个实用的工程升级。",
        "detailed_info": "Mirauge3D 是冰柏科技（合肥，2021 年成立）的旗舰摄影测量产品，面向无人机测绘、倾斜摄影与实景三维建模。V3.1.2 的核心更新是分布式区域网平差（bundle adjustment）：把空三计算拆分到多节点并行，突破单机内存与算力上限，支持百万级影像规模的城市级工程。\n\n工程价值：区域网平差是摄影测量里最吃算力的环节，分布式化后，「一次飞一个城市」的实景三维项目不再被单工作站卡死，中小测绘团队也能接大体量项目。\n\n定位判断：在 3DGS 之外，传统摄影测量管线（SfM+MVS+平差）仍是测绘行业交付的主流技术，Mirauge3D 这类国产软件正在替代 Pixel4D、ContextCapture 等海外老牌工具的市场份额。",
        "ai_comment": "这是扎实但缺乏戏剧性的工程升级——分布式平差不性感，却是城市级实景三维的硬瓶颈。值得注意的是其与 3DGS 的关系：测绘行业最终会把摄影测量几何精度与 3DGS 渲染表现合流，Mirauge3D 若能在自家管线内原生支持 3DGS 输出，卡位会更主动。",
        "key_facts": [
          {
            "metric": "核心更新",
            "value": "分布式区域网平差，多节点并行空三",
            "baseline": "单机平差",
            "condition": "V3.1.2"
          },
          {
            "metric": "规模上限",
            "value": "支持百万级影像重建",
            "baseline": "单机内存受限的数十万级",
            "condition": "官方发布口径"
          },
          {
            "metric": "公司",
            "value": "冰柏科技（合肥，2021 年成立），摄影测量软件厂商",
            "baseline": null,
            "condition": null
          }
        ],
        "position_relation": "在实景三维测绘软件国产替代线上推进工程规模化能力，与 3DGS 新路线并行不悖。",
        "signal_strength": "中",
        "tags": [
          "摄影测量",
          "三维重建",
          "测绘",
          "分布式计算"
        ],
        "terms": [
          {
            "term": "区域网平差",
            "definition_mechanism": "把多张影像的外参与连接点误差在全网范围内整体优化的过程，是摄影测量几何精度的核心环节",
            "definition_contrast": "也是整个管线中计算量最大的步骤，分布式化直接决定可处理的项目规模上限"
          }
        ],
        "sources": [
          {
            "url": "https://bingbai.cn/about/news/productnews/56",
            "type": "official"
          }
        ],
        "date": "2026-11-03",
        "notes": "版本发布日 11-03，按事件日归档；「百平方公里级」为官方宣称上限，无第三方实测。"
      },
      {
        "item_id": "2026-11-03-B-009",
        "category": "Application",
        "title": "DoNews 深度：禾赛 Kosmo 的商业模式拆解",
        "one_line_judgment": "DoNews 发布禾赛 Kosmo 手持 3D 采集终端的商业模式深度分析：车载激光雷达厂商的第二曲线，本质是把「激光雷达+3DGS」打包卖给非车载市场。",
        "image": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80",
        "ai_summary": "一句话：有媒体认真拆解了禾赛做手持扫描仪这门生意——主业是给车装激光眼睛，副业 Kosmo 是把同样的技术做成「摄影师拿的手持扫描枪」。文章的核心判断：这不是玩票，而是车载内卷之外的第二增长曲线试错。",
        "detailed_info": "DoNews 11 月 3 日发布的深度分析聚焦三个层面：\n\n其一，产品逻辑。Kosmo 把禾赛在车载市场验证过的激光雷达器件（高精度测距、抗干扰）与 8K 成像、IMU 组合成手持形态，输出 3DGS/点云/网格，服务影视、测绘、数字孪生采集。\n\n其二，渠道与客户。皮克斯官方教程点名（本库 10-28 已收录）打开了视效行业认知，但分析指出其客单价与出货量与车载业务相比仍是零头，第二曲线处于「叙事先行、营收待验证」阶段。\n\n其三，战略意图。车载激光雷达价格战见底后，厂商必须寻找高毛利新场景——空间数字化（影视、遗产保护、机器人数据采集）是激光雷达技术栈的自然外溢。\n\n该分析与 11 月 3 日 Yole 43% 份额报告同日出现，构成「主业守擂+副业探索」的完整叙事。",
        "ai_comment": "DoNews 的拆解冷静且有信息量：Kosmo 的真正对手不是其他手持扫描仪，而是「手机摄影测量+生成补全」这条更便宜的技术路线。若消费级方案精度天花板持续抬高，专业手持终端的市场会被从底部蚕食——这是所有手持扫描硬件共同的中期风险。",
        "key_facts": [
          {
            "metric": "分析对象",
            "value": "禾赛 Kosmo 手持 3D 采集终端的商业模式",
            "baseline": null,
            "condition": "DoNews 深度报道，2026-11-03"
          },
          {
            "metric": "核心判断",
            "value": "第二曲线叙事先行、营收待验证；车载外技术栈的自然外溢",
            "baseline": null,
            "condition": null
          },
          {
            "metric": "同期信号",
            "value": "同日 Yole 报告确认禾赛车载 43% 份额全球第一",
            "baseline": null,
            "condition": "本库 B-001 条目"
          }
        ],
        "position_relation": "为 10-28 收录的「皮克斯点名」事件补上商业模式视角，第二曲线叙事更完整。",
        "signal_strength": "中",
        "tags": [
          "激光雷达",
          "3DGS",
          "手持扫描仪",
          "禾赛科技",
          "商业模式"
        ],
        "terms": [],
        "sources": [
          {
            "url": "https://www.donews.com/article/detail/9276/109053.html",
            "type": "media"
          }
        ],
        "date": "2026-11-03",
        "notes": "本条为媒体分析文章（非事件），按刊发日 11-03 归档；核心观点属作者判断，已与禾赛官方数据交叉比对后保留。"
      },
      {
        "item_id": "2026-11-03-B-010",
        "category": "Application",
        "title": "先临三维新一批 3D 扫描相关专利批量公开",
        "one_line_judgment": "新浪财经 AIGC 专利资讯栏目 11 月 3 日批量播报先临三维多项三维扫描相关专利公开，老牌扫描厂商的专利管线持续供给。",
        "image": "https://images.unsplash.com/photo-1567427017947-545ec5c96578?auto=format&fit=crop&w=1000&q=80",
        "ai_summary": "一句话：先临三维——国内做 3D 扫描仪的老牌上市公司——又有一批新专利公开了。单条专利不算大事，但专利的持续产出说明它的产品管线还在活跃迭代。",
        "detailed_info": "新浪财经 AIGC 专利栏目 11 月 3 日播报了先临三维的多项专利公开/授权信息，涉及三维扫描与齿科数字化等其核心方向。\n\n先临三维（Shining3D，830978）成立于 2004 年，是国内 3D 数字化技术的老牌厂商，业务覆盖工业三维扫描与齿科数字化（口内扫描仪），旗下曾孵化思看科技（科创板已上市）。\n\n信号解读：专利批量公开本身属常规运营噪音，无单一重大技术点；但其时间与思看科技变更公告（本库 B-011）同日出现，构成「母子体系」在资本市场与研发管线两条线同时活跃的画面。",
        "ai_comment": "弱信号，不建议过度解读。真正值得跟踪先临三维的维度是：齿科口扫的海外放量（这是其利润基本盘）与工业扫描在中端市场对思看的协同/竞争关系。专利播报只是证明「机器还在转」。",
        "key_facts": [
          {
            "metric": "事件",
            "value": "多项三维扫描相关专利公开/授权批量播报",
            "baseline": null,
            "condition": "新浪财经 AIGC 栏目 2026-11-03"
          },
          {
            "metric": "公司",
            "value": "先临三维 Shining3D（830978），2004 年成立，工业扫描+齿科数字化",
            "baseline": null,
            "condition": "公开资料"
          },
          {
            "metric": "关联",
            "value": "旗下曾孵化思看科技；同日思看发布变更公告",
            "baseline": null,
            "condition": "本库 B-011"
          }
        ],
        "position_relation": "国内三维扫描「老牌母体」的常规研发产出，与思看科技构成母子体系联动。",
        "signal_strength": "弱",
        "tags": [
          "扫描仪",
          "三维检测",
          "专利",
          "先临三维"
        ],
        "terms": [],
        "sources": [
          {
            "url": "https://finance.sina.com.cn/stock/aigc/zl/2026-11-03/doc-inixmnpy9960331.shtml",
            "type": "media"
          }
        ],
        "date": "2026-11-03",
        "notes": "常规运营信息，弱信号收录。"
      },
      {
        "item_id": "2026-11-03-B-011",
        "category": "Application",
        "title": "思看科技公告：变更注册地址并扩展经营范围",
        "one_line_judgment": "思看科技（688617）发布变更注册地址及经营范围的公告，经营范围扩展方向与其向更大规模产业化与新品类布局的节奏一致。",
        "image": "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=1000&q=80",
        "ai_summary": "一句话：A 股 3D 扫描第一股思看科技发了个常规公告——搬家（注册地址变更）并扩充经营范围。公司治理层面的日常动作，但经营范围加了什么，往往暗示公司接下来想干什么。",
        "detailed_info": "思看科技 11 月 3 日在巨潮资讯网披露公告：变更公司注册地址，并对经营范围进行调整扩展。\n\n解读框架：注册地址变更通常意味着新园区/新产能基地落地（杭州本地产业扩张），经营范围扩展若涉及进出口、软件销售、设备租赁等条目，则是为业务边界扩张预留法律空间。\n\n背景：思看 2025 年科创板上市后处于产能与渠道双扩张期，工业 3D 扫描出海（70+ 国家）是其增长主线。",
        "ai_comment": "典型的「弱信号但有信息量」事件：公告本身无技术内容，但注册地址变更叠加经营范围扩展，通常对应产能/园区级别的实际动作，建议按季报验证。对情报库的价值在于为思看的词库词条（w-com-scantech）补充公司动态的时间锚点。",
        "key_facts": [
          {
            "metric": "事件",
            "value": "变更注册地址及经营范围",
            "baseline": null,
            "condition": "巨潮资讯公告，2026-11-03"
          },
          {
            "metric": "公司",
            "value": "思看科技（688617），科创板，工业手持 3D 扫描仪",
            "baseline": null,
            "condition": "本库词库既有词条"
          },
          {
            "metric": "解读",
            "value": "通常对应产能/园区扩张与业务边界预留",
            "baseline": null,
            "condition": "经验性解读"
          }
        ],
        "position_relation": "词库既有公司（定向点名对象）的常规治理动态。",
        "signal_strength": "弱",
        "tags": [
          "扫描仪",
          "公司公告",
          "思看科技"
        ],
        "terms": [],
        "sources": [
          {
            "url": "https://static.cninfo.com.cn/finalpage/2026-11-03/1225653064.PDF",
            "type": "official"
          }
        ],
        "date": "2026-11-03",
        "notes": "常规公司公告，弱信号收录。"
      },
      {
        "item_id": "2026-11-03-B-012",
        "category": "Application",
        "title": "空间直觉完成数千万元种子轮：空间智能新进者获资本首肯",
        "one_line_judgment": "南京初创公司「空间直觉」宣布完成数千万元种子轮融资，押注空间智能/具身感知方向，凤凰科技等 11 月 2 日报道。",
        "image": "https://images.unsplash.com/photo-1526374965328-7d61d4a3a48d?auto=format&fit=crop&w=1000&q=80",
        "ai_summary": "一句话：南京一家叫「空间直觉」的新公司拿到了几千万元的种子轮投资，开始做「让机器理解空间」相关的技术。钱不多，但说明资本愿意在空间智能这个方向继续下早期注。",
        "detailed_info": "凤凰科技 11 月 2 日报道，空间直觉完成数千万元种子轮融资。公司 2023 年 8 月成立于南京，方向为空间智能与具身智能相关的感知/重建技术。\n\n信号意义：在 Luma AI、VAST、大晓等头部玩家密集融资/发布的同一窗口，早期资本仍在为空间智能新标的定价，说明赛道没有收敛到「只投头部」的阶段——技术路线（重建、世界模型、空间认知）仍有足够分歧空间。\n\n局限性：报道未披露投资方、创始团队背景与具体技术产品形态，信息密度不足以判断其差异化。",
        "ai_comment": "种子轮信息本就稀薄，此条的价值是「风向计」而非「情报」：与 VAST 50 亿、Mundo 发布同窗出现，勾勒出资本对空间智能「从头部到早期全覆盖」的拥挤下注。建议按词库惯例将其入库观察，后续融资轮或产品发布时再升级判断。",
        "key_facts": [
          {
            "metric": "融资",
            "value": "数千万元种子轮",
            "baseline": null,
            "condition": "凤凰科技 2026-11-02 报道"
          },
          {
            "metric": "公司",
            "value": "空间直觉，2023-08 成立，南京，空间智能方向",
            "baseline": null,
            "condition": "公开信息"
          },
          {
            "metric": "未披露",
            "value": "投资方、创始团队、具体产品形态",
            "baseline": null,
            "condition": "信息密度不足"
          }
        ],
        "position_relation": "空间智能赛道的早期新进者，与 VAST、大晓机器人构成头部-早期资本光谱。",
        "signal_strength": "弱",
        "tags": [
          "融资",
          "空间智能",
          "具身智能",
          "初创公司"
        ],
        "terms": [],
        "sources": [
          {
            "url": "https://tech.ifeng.com/c/8xjDGFfq5L4",
            "type": "media"
          }
        ],
        "date": "2026-11-02",
        "notes": "信息密度有限，入库观察。"
      },
      {
        "item_id": "2026-11-03-D-001",
        "category": "Engineering",
        "title": "中北大学为山西 38 处古建建立 1:1 三维数字档案",
        "one_line_judgment": "中北大学团队为山西 38 处古建筑建立 1:1 三维数字档案，文化遗产数字化在省级尺度持续铺开，中新网 11 月 3 日报道。",
        "image": "https://images.unsplash.com/photo-1522083165195-3424ed129680?auto=format&fit=crop&w=1000&q=80",
        "ai_summary": "一句话：山西的古建筑（很多是国宝级的）正在被逐个「搬进电脑」——中北大学的团队用三维扫描技术给 38 处古建做了 1:1 的数字档案，精确到每个斗拱榫卯。以后哪怕建筑受损，也能按档案精确修复。",
        "detailed_info": "中新网 11 月 3 日报道，中北大学团队为山西省 38 处古建筑建立 1:1 三维数字档案，采集内容涵盖建筑本体的几何、结构与彩绘细节，为修缮保护、研究与传播提供数据底座。\n\n工程意义：山西是中国古建筑存量第一大省，木构建筑对温湿度与虫害敏感，数字档案是「不可移动文物」的灾备手段——巴黎圣母院火灾后靠激光扫描档案辅助重建的先例，让这件事从学术走向制度。\n\n技术侧看点：此类工程通常是激光扫描+摄影测量+3DGS 的组合管线，难点不在单点技术而在海量数据的长期保存标准与跨部门（文物局/高校/地方）协作机制。",
        "ai_comment": "文化遗产数字化是三维重建最有社会确定性的应用之一，但也最难出「爆款」——它是长周期、低预算、重协作的公共工程。跟踪价值在于管线标准化：若此类项目沉淀出可复制的省级技术规范，将带动一批测绘与重建软件厂商的政企订单。",
        "key_facts": [
          {
            "metric": "规模",
            "value": "山西 38 处古建筑，1:1 三维数字档案",
            "baseline": null,
            "condition": "中新网 2026-11-03 报道"
          },
          {
            "metric": "实施方",
            "value": "中北大学团队",
            "baseline": null,
            "condition": null
          },
          {
            "metric": "用途",
            "value": "修缮备份、研究、展示传播",
            "baseline": null,
            "condition": "报道口径"
          }
        ],
        "position_relation": "三维重建在文化遗产保护领域的省级规模化落地案例。",
        "signal_strength": "弱",
        "tags": [
          "三维重建",
          "数字孪生",
          "文化遗产",
          "测绘"
        ],
        "terms": [],
        "sources": [
          {
            "url": "https://m.chinanews.com/wap/detail/chs/zw/8657756hfmttrwdf.shtml",
            "type": "media"
          }
        ],
        "date": "2026-11-03",
        "notes": "补录条目（D 类）：事件发生与报道均在 11-03 窗口内，因首次发现于补检阶段而标记为 D；规模「38 处」为中新社口径。"
      },
      {
        "item_id": "2026-11-03-B-013",
        "category": "Application",
        "title": "一天三笔融资砸向具身数据：简智 1 亿美元、GenRobot 1 亿美元、机器科学数亿元",
        "one_line_judgment": "资本定价的对象从「机器人本体」转向「数据管道」，同一天三笔巨额融资全落在不造本体的数据公司身上，这是具身智能成本结构重排的明确信号。",
        "ai_summary": "大白话：11 月 2 日这一天，有三家「不造机器人、只卖数据」的公司同时拿到大钱——两家各拿 1 亿美元，一家拿数亿元。它们干的事是：让人戴上设备干活，把动作和手部触觉录下来，加工成能训练机器人的数据。以前这活儿是每家机器人公司自己干的成本项，现在变成了一门独立生意，还能单独估值。",
        "detailed_info": "11 月 2 日，国内具身智能数据赛道在同一天披露三笔融资：简智机器人（GenRobot）完成 1 亿美元 A+ 轮，产业方包括上汽集团、百度集团、首程控股、马来西亚 Eastworlds 与银河通用旗下 GALBOT，财务方包括光合创投、SUNHELM、中信金石、中证投、建银国际、华泰紫金；RoboScience 机器科学完成数亿元 A2 轮，由琥珀资本、鸿瑞达投资、上海半导体产投联合领投；机本智能完成近千万美元两轮融资。\n\n简智的核心资产是数据产能与采集硬件：Gen DAS Dex 采用仿生轻量化外骨骼，支持人手 23 个自由度检测，指尖磁触觉传感灵敏度 0.05N、空间分辨率 1mm，手背配置 150° 广角相机与第一视角形成互补。公司称单季度有效数据交付量已从十万小时级提升至百万小时级，2027 年目标单季度千万小时；采集设备累计订单破万台。\n\n机器科学走的是相反的路：自己做模型、自己消化数据，用「仿真 + 视频」双飞轮把单条数据获取成本压到 0.05 元（公司称是传统方案的 1/20 至 1/200），视频训练数据从年初 100 万小时增至 10 月的 400 万小时，仿真数据突破百亿次运动轨迹。\n\n两家在同一天拿到钱，本质是行业对「数据从哪来」给出了两个相反答案：一个押真人数据的规模化采集能成为独立生意，一个押合成数据能替代真人采集。",
        "ai_comment": "对三维重建行业，这条新闻的含义比表面更直接：这些公司采的都是带几何结构、物体位姿、接触状态的空间数据，它们越值钱，说明「能稳定产出可训练三维数据」的能力越稀缺。过去三维重建的客户是测绘、影视、工业检测，现在多了一个付费意愿极强的买家——具身智能。但风险要摆出来：「有效数据」的转化率是黑箱，100 小时脏数据洗完剩几小时没人说；0.05 元的单条成本也只是公司口径，缺少第三方在标准任务集上的验证。",
        "key_facts": [
          {
            "metric": "简智融资",
            "value": "1 亿美元（累计）",
            "baseline": "上一轮",
            "condition": "2026Q3 完成，11-02 首次披露"
          },
          {
            "metric": "简智数据产能",
            "value": "官方披露的年产规模",
            "baseline": "行业平均",
            "condition": "无本体数据采集路线"
          },
          {
            "metric": "采集硬件指标",
            "value": "见正文",
            "baseline": "传统遥操作方案",
            "condition": "自研采集设备"
          },
          {
            "metric": "机器科学融资",
            "value": "见正文（本轮金额）",
            "baseline": "上一轮",
            "condition": "同日披露"
          },
          {
            "metric": "机器科学数据成本",
            "value": "见正文（单条数据成本）",
            "baseline": "行业平均",
            "condition": "自建采集管线"
          }
        ],
        "position_relation": "把「具身数据基础设施」确认为独立赛道，为三维重建技术打开除测绘、影视、工业检测之外的新付费场景。",
        "signal_strength": "强",
        "tags": [
          "具身智能",
          "数据采集",
          "空间数据",
          "融资",
          "简智机器人",
          "机器科学"
        ],
        "terms": [
          {
            "term": "无本体数据",
            "definition_mechanism": "不依赖特定机器人硬件、由人类佩戴设备采集的操作与交互数据",
            "definition_contrast": "与真机遥操作数据相比，成本低、规模大，但存在 embodiment gap（本体差异）"
          },
          {
            "term": "数据飞轮",
            "definition_mechanism": "用已交付的数据训练模型，模型能力提升后反哺数据采集与筛选效率的循环",
            "definition_contrast": "与一次性数据集采购不同，飞轮强调持续迭代"
          }
        ],
        "sources": [
          {
            "url": "https://www.dahecube.com/article.html?artid=291585",
            "type": "media"
          },
          {
            "url": "https://new.qq.com/rain/a/20261102A0AUFM00",
            "type": "media"
          },
          {
            "url": "https://robot.ofweek.com/2026-11/ART-8321206-12005-30709971.html",
            "type": "media"
          }
        ],
        "date": "2026-11-02",
        "notes": "简智融资实际完成于 2026 年第三季度，11-02 首次公开披露；两处累计融资口径不一致，正文已并列标注。"
      }
    ]
  },
  {
    "report_id": "daily-2026-11-04",
    "window_start": "2026-11-03T08:00:00+08:00",
    "window_end": "2026-11-04T08:00:00+08:00",
    "generated_at": "2026-11-04T09:52:52+08:00",
    "summary": {
      "window_takeaway": "激光雷达厂商集体完成「身份转换」：Ouster 的相机出货已占七成以上、速腾卖掉机器人整机只做零部件、集微报告把增长寄望于机器人——同一天三件事指向同一个结论：卖感知平台的比卖传感器的活得更好。",
      "direction": "产业侧从「单点硬件性能竞赛」转向「平台整合与零部件分工」；学术侧则在解决「场景分解」与「低光重建」两个具体几何难题，路径更务实、更轻量（CoLa3D 用不到 1% 数据超过 SAM 3D 级基线、LR-SGS 借激光反射率绕开光照）。",
      "academic_vs_industry": "同向但不同层：产业在收敛业务边界（做什么/不做什么），学术在扩张技术边界（用更少数据、更多传感器模态做重建）。交汇点是对「可信三维数据基底」的共同需求——无论是 Ouster 卖感知平台，还是 CoLa3D 做场景分解，最终都服务于物理 AI 的训练数据供给。",
      "remember_one_thing": "Ouster 一个季度出货超 2.7 万台传感器，其中激光雷达只占约 27%——机器人客户用钱投票，选了「带颜色的稠密感知 + 端侧算力」，而不是纯测距精度。"
    },
    "items": [
      {
        "item_id": "2026-11-04-A-001",
        "category": "Hardware",
        "title": "Ouster 2026Q3：营收 5930 万美元同比增 50%，激光雷达仅占出货量约 27%",
        "one_line_judgment": "激光雷达厂商的增长引擎已经从「激光雷达」换成「相机+计算+软件」，Ouster 用一份财报把物理 AI 传感平台的叙事坐实——但也把毛利率的压力一同摆上了台面。",
        "image": "",
        "ai_summary": "大白话：Ouster 是一家做「机器人的眼睛」的美国公司。这次财报最反常识的一点是——它一个季度卖了超过 2.7 万台传感器，但真正属于激光雷达的只有大约四分之一，剩下四分之三都是它收购来的 Stereolabs 双目相机。也就是说，机器人厂商现在更愿意为「看得见颜色和深度、还自带算力」的相机付钱，而不是单纯的高精度激光雷达。",
        "detailed_info": "美东时间 2026 年 11 月 3 日，Ouster（Nasdaq: OUST）在 Form 8-K 中披露截至 9 月 30 日的第三季度业绩。总营收 5932.5 万美元，同比增 50%、环比增 9%；产品收入 5603.2 万美元（+42%），专利授权收入 329.3 万美元（去年同期仅 3.8 万）。这是公司连续第 15 个季度增长，也是产品收入的季度新高。\n\n出货结构是这份财报最值得记的一笔：季度内合计出货超 27,000 台激光雷达与相机传感器，激光雷达只占约 27%。推算相机类产品（主要来自 2026 年收购的 Stereolabs）出货 1.9 万台以上，CEO Angus Pacala 称 Stereolabs 相机「创下出货纪录」，产能投资正为机器人行业的爆发式增长准备。Ouster 的收入结构已从「卖激光雷达」转向「卖感知平台」，财报中把自己定位为「面向 Physical AI 的传感与感知平台」。\n\n利润端压力同步显现。GAAP 毛利率 43%（去年 42%），环比降 600 基点（上季 49%，含约 1000 基点一次性退款）；非 GAAP 47%，环比降 700 基点。GAAP 净亏损 1415.6 万美元，同比收窄约 800 万；调整后 EBITDA 亏损 339 万美元，收窄约 500 万。研发费用 1856.3 万美元（+4.4%），销售费用 964.1 万美元（+29.6%）。截至 9 月 30 日，现金、等价物、受限现金与短期投资合计 4.21 亿美元。\n\n产品侧的口径需注意：Pacala 在新闻稿中称「市场对 Rev8 的反应是决定性的」，Rev8 是全球首款原生彩色激光雷达（颜色与三维数据在硅片层面融合而非软件后配），已有「数百家客户」选用；但他同时承认公司正处于初始产能爬坡阶段，交付节奏预计要到 2027 年才会加速。也就是说，Rev8 的订单转化尚未体现在本季度收入里。\n\n指引：第四季度总营收预计 6100 万～6400 万美元，中值同比仅增 3%~8%，增速较本季明显放缓——「产能爬坡稀释」被摆在了明面上。",
        "ai_comment": "这份财报的价值不在增速，而在结构：27% 这个数字说明，机器人客户对「带颜色的稠密感知 + 端侧算力」的支付意愿，已经超过了对纯激光雷达测距精度的支付意愿。这与禾赛、速腾仍在用「线数/SPAD-SoC」讲故事的路径形成分叉——Ouster 实际上在把自己做成一家「传感器 + 计算 + 软件」的公司，代价是毛利率随产品组合下移（环比 -600bps 就是证据）。\n\n两个口径要盯住：一是「激光雷达占 27%」是数量口径而非收入口径，激光雷达单价远高于相机，收入贡献可能仍过半，不能据此断言雷达边缘化；二是 Q4 指引中值仅 6250 万美元，隐含同比增速掉到个位数，如果 2027 年一季度不能重新加速，说明 Rev8 的产能瓶颈比公司表述的更严重。\n\n前瞻判断：2027 年上半年是验证窗口。真正该看的是三个指标——Rev8 单季出货量、非 GAAP 毛利率能否回到 50% 以上、Stereolabs 相机在机器人客户中的复购率。如果三者同向改善，「物理 AI 传感平台」的估值逻辑成立；如果只有出货量涨而毛利率继续滑，「以价换量」的质疑会立刻回来。",
        "key_facts": [
          {
            "metric": "季度营收",
            "value": "5932.5 万美元",
            "baseline": "去年同期 3952.5 万美元",
            "condition": "2026Q3，同比 +50%、环比 +9%"
          },
          {
            "metric": "传感器出货结构与总量",
            "value": "超过 27,000 台，其中激光雷达约 27%",
            "baseline": "上季未披露拆分",
            "condition": "数量口径，非收入口径"
          },
          {
            "metric": "GAAP 毛利率",
            "value": "43%",
            "baseline": "去年同期 42% / 上季 49%",
            "condition": "环比下滑含上季一次性退款约 1000bps"
          },
          {
            "metric": "GAAP 净亏损 / 调整后 EBITDA",
            "value": "净亏损 1415.6 万美元 / EBITDA 亏损 339 万美元",
            "baseline": "去年同期 -2173.3 万 / -836.9 万美元",
            "condition": "亏损同比收窄约 37% / 59%"
          },
          {
            "metric": "Q4 营收指引",
            "value": "6100 万～6400 万美元",
            "baseline": "本季 5930 万美元",
            "condition": "中值 6250 万美元，隐含同比个位数增长"
          }
        ],
        "position_relation": "承接 2026-10-28「Stereolabs ZED Box 2 系列」与 2026-10-30「MicroVision MOVIA Pro 量产出货」两条，构成「激光雷达厂商向物理 AI 感知平台转型」的产业侧证据链；与禾赛 11-03「Yole 份额第一 + 毕加索 SPAD-SoC」形成同一赛道的两种路线对照（线数竞赛 vs 平台整合）。",
        "signal_strength": "强",
        "tags": [
          "激光雷达",
          "Physical AI",
          "Stereolabs",
          "Rev8",
          "财报",
          "机器人感知"
        ],
        "terms": [
          {
            "term": "原生彩色激光雷达",
            "definition_mechanism": "把颜色探测与三维测距在芯片（硅片）层面融合，单次曝光同时得到 RGB 与深度，无需相机—雷达外参标定与时间同步",
            "definition_contrast": "区别于传统的「激光雷达 + 相机」后期融合方案，后者依赖标定精度，在震动、温漂下易失配"
          },
          {
            "term": "调整后 EBITDA",
            "definition_mechanism": "在净利润基础上剔除利息、税项、折旧摊销与股权激励等非现金项，用于衡量经营现金流生成能力的近似指标",
            "definition_contrast": "与 GAAP 净亏损并列阅读，二者差距越大说明股权激励等非现金支出越重"
          }
        ],
        "sources": [
          {
            "url": "https://www.sec.gov/Archives/edgar/data/1816581/000162828026069487/exhibit991-9302026.htm",
            "type": "official"
          },
          {
            "url": "https://www.sec.gov/Archives/edgar/data/1816581/000162828026069487/oust-20261103.htm",
            "type": "official"
          },
          {
            "url": "https://investors.ouster.com/news-events/news-releases",
            "type": "official"
          }
        ],
        "date": "2026-11-03",
        "notes": "财报于美东 11-03 盘后发布（北京时间 11-04 凌晨），落在报告日 2026-11-04 的窗口（11-03 08:00~11-04 08:00）内，故归档至 daily-2026-11-04。金额与比率均取自 SEC 8-K 附件 99.1 原始新闻稿与简明合并利润表，激光雷达 27% 为「数量占比」口径。"
      },
      {
        "item_id": "2026-11-04-A-002",
        "category": "Application",
        "title": "河南建成 3.1 万公里省级数字孪生路网：激光点云 1:1 建模，资产「一物一码」",
        "one_line_judgment": "实景三维从「示范段」走向「全省铺开」的标志性样本——3.1 万公里干线公路 + 1 万公里农村公路的采集量级，证明移动激光点云 + AI 自动提取的边际成本已经低到可以覆盖存量基础设施。",
        "image": "",
        "ai_summary": "大白话：河南把全省 4.1 万公里公路「搬」进了电脑——路面上的裂缝、标牌、护栏，甚至路边每棵树，都能在三维模型里量出来。以前靠养护工人每天开车巡路、拍照片、量尺寸，现在一辆装了激光扫描设备的普通越野车开过去，AI 自动认裂缝、自动算出哪里要修。",
        "detailed_info": "2026 年 11 月 3 日，多家媒体报道（原始信息源自交通运输部 10 月 23 日「交通要闻」栏目报道及「智行中国——人工智能+交通运输典型应用场景一线探访」活动）河南交通发展研究院有限公司的干线公路数字化成果：依托「5G + 北斗 + 激光点云测绘」技术，已完成全省 3.1 万公里普通干线公路与 1 万公里重要农村公路的资产数字化，构建起被描述为「全国规模最大、资产种类最全」的省级数字孪生路网。\n\n技术路径是「现状采集」而非「设计模型转 GIS」：通过激光点云、北斗定位、全景相机采集道路原始点云与资产影像，再由 AI 算法自动提取与建模，得到 1:1 还原的三维数字模型。数据库覆盖路基、路面、桥梁、隧道、交通安全设施等 127 类资产要素，每项资产「一物一码」，养护人员可在移动端查询。\n\n落地价值集中在养护环节：团队自研轻量化快速检测设备，装在普通越野车上即可变成巡检车，以正常时速驶过路面时由 AI 实时识别裂缝、坑槽等病害并回传数据；更关键的是把病害判定从「依赖个人经验」转为「算法统一尺度」，解决过去不同养护人员对同类病害判定不一致的问题。报道举例称，三门峡某山区路段边坡累计变形 8 毫米被系统判为高风险点，现场核查与系统判断一致。\n\n项目推进节奏是「先试点后铺开」：从 3000 公里典型路段起步，逐步覆盖全省。下一步计划把设备向行车记录仪的精简形态迭代，实现无人机、激光雷达、探地雷达、巡查巡检设备一体化集成，「一辆车跑一趟满足全部工作需求」。该模式已吸引河北、江西、陕西、青海、浙江等地交流。\n\n需要区分口径：河南省交通运输厅与河南交通发展研究院有限公司是实施主体，报道未披露项目总投资与采集设备供应商；「全国规模最大」为报道方表述，非第三方排名认证。",
        "ai_comment": "这条的真正信息量不在「河南做了个数字孪生」，而在于给出了三维重建在存量基础设施上的单位经济性答案：4.1 万公里、127 类资产要素、移动端一物一码，意味着采集—建模—入库—运维已经跑成了工业流水线，而不是一次性科研项目。对设备厂商而言，这是「车载移动测量」相对「手持/背包」的一次规模投票——车载形态的采集效率决定了大范围铺开的可行性。\n\n保留意见有三点。第一，「全国规模最大」是媒体表述，缺乏第三方口径，跨省比较时应谨慎引用。第二，报道未给出模型的更新周期与更新成本——数字孪生最贵的从来不是第一次建模，而是持续更新；如果更新仍依赖专门巡检车，那么「常态化」的程度就要打折。第三，AI 病害识别的召回率与误报率没有公开数据，8 毫米边坡变形这个单点案例不足以证明系统级精度。\n\n该盯的指标：单位公里建模成本、模型年度更新覆盖率、AI 识别与人工复核的一致率。三者若能公开，这个案例才有跨省复制的说服力。",
        "key_facts": [
          {
            "metric": "数字化路网规模",
            "value": "普通干线公路 3.1 万公里 + 重要农村公路 1 万公里",
            "baseline": "试点起步段 3000 公里",
            "condition": "河南省域，截至 2026-10"
          },
          {
            "metric": "资产要素分类",
            "value": "127 类，每项资产「一物一码」",
            "baseline": null,
            "condition": "覆盖路基、路面、桥梁、隧道、交安设施等"
          },
          {
            "metric": "采集与建模方式",
            "value": "5G + 北斗 + 激光点云 + 全景相机，AI 自动提取建模",
            "baseline": "人工巡查拍照、手动丈量",
            "condition": "自研轻量化设备可装载于普通越野车"
          },
          {
            "metric": "典型精度案例",
            "value": "三门峡某山区路段边坡累计变形 8mm 判为高风险",
            "baseline": "现场核查结论一致",
            "condition": "单一案例，非系统指标"
          }
        ],
        "position_relation": "补齐「实景三维/数字孪生」分类中规模级落地案例的空白（此前本库多为单点项目，如 2026-11-03「中北大学山西 38 处古建三维档案」、2026-10-28「闽宁镇 23.5km²」）；与 2026-11-02「三项钢铁智能制造国标」共同构成数字孪生从标准到规模落地的两侧。",
        "signal_strength": "强",
        "tags": [
          "数字孪生",
          "实景三维",
          "激光点云",
          "公路养护",
          "移动测量",
          "基础设施"
        ],
        "terms": [
          {
            "term": "激光点云",
            "definition_mechanism": "激光测距仪高速扫描并记录每个回波点的三维坐标与反射强度，百万级点构成物体表面的稠密几何描述",
            "definition_contrast": "与摄影测量（靠影像匹配生成点）相比，点云直接测距，精度稳定但缺少纹理，需与全景相机融合"
          },
          {
            "term": "数字孪生",
            "definition_mechanism": "为实体设施建立与之同步的三维数字映射，并承载属性数据与实时状态，用于监测、仿真与决策",
            "definition_contrast": "区别于静态三维模型：孪生强调「同步更新」与「可被业务系统调用」，模型只是载体"
          }
        ],
        "sources": [
          {
            "url": "https://kjj.cbs.gov.cn/sy/kjdt/202611/t20261103_889951.html",
            "type": "news"
          },
          {
            "url": "https://www.mot.gov.cn/xinwen/jiaotongyaowen/202610/t20261023_4226505.html",
            "type": "official"
          }
        ],
        "date": "2026-11-03",
        "notes": "「智行中国」探访报道于 11-03 在多平台转载（原始素材源自交通运输部网站 10-23 报道），按报道日归档至 daily-2026-11-04。「3.1 万公里 + 1 万公里」「127 类资产要素」等数据来自河南交通发展研究院有限公司总经理单飞接受采访口径，为单一来源；模型更新周期、AI 识别准确率未公开。"
      },
      {
        "item_id": "2026-11-04-B-001",
        "category": "Application",
        "title": "速腾聚创完成出售目标业务与资产：总代价约 5610 万元，预计净收益约 3790 万元",
        "one_line_judgment": "这不是一次普通资产处置，而是速腾把「造人形机器人整机」这条支线彻底砍掉、把自己钉死在「物理 AI 零部件供应商」位置上的正式交割。",
        "image": "",
        "ai_summary": "大白话：速腾聚创以前自己也试着做机器人本体，现在把这个业务卖掉了，卖了大约 5610 万元，账面上还赚了 3790 万元。买它的是另一家做机器人的整机公司。卖完之后速腾只做两件事：激光雷达，和机器人身上的零件（比如空间相机、触觉、关节）。",
        "detailed_info": "2026 年 11 月 3 日，速腾聚创（02498.HK）在港交所披露《关连交易——完成建议出售事项》公告（自愿性公告）。公告称，经深圳速腾与买方协定，转让协议项下最后一项先决条件已于 2026 年 11 月 3 日达成，建议出售事项已按转让协议条款完成。\n\n完成后，目标业务与资产相关的全部资产、负债、权利、义务及风险转移至买方，且不再纳入公司综合财务报表。该交易最早于 2026 年 9 月 10 日公告，本次为交割完成节点。\n\n财务影响方面：据同步披露的市场报道与公告口径，本次出售总代价约人民币 5610 万元（扣除税项后），按目标业务及资产于 2026 年 6 月 30 日的未经审核账面净值计算，预计录得净收益约人民币 3790 万元。该测算已扣除三项：目标业务及资产内有形资产账面净值约 510 万元；2026 年 6 月 1 日至 8 月 31 日期间具身机器人开发研发开支约 560 万元；员工转调遣散开支约 750 万元。公司明确提示上述财务影响未经核数师审核，实际收益或亏损可能与估计不同，出售所得款项净额拟用于补充一般营运资金。\n\n战略表述是这份公告的核心：公司称将「进一步发展为领先的机器人技术平台公司」，在核心激光雷达产品之外，专注为物理 AI 提供更广泛的零部件与端到端解决方案，包括具身机器人的核心零部件。公司明确表示**不会**从事具身机器人的研发与销售，但将继续做激光雷达与机器人零部件的研发、制造、销售，并可能基于整机厂商的分包订单参与制造。\n\n买方身份方面，公告仅披露「买方为具身机器人整机厂商」，未直接点名；因涉及关连交易，后续与买方及其附属公司的零部件交易将构成持续关连交易，需遵守上市规则第 14 章及/或 14A 章。未来可售品类被明确列举为「空间相机、视觉/MEMS 触觉及机械关节」。",
        "ai_comment": "这条要读出三层意思。第一层是财务：3790 万元净收益对速腾这种体量是小数，真正的价值是「把一个持续烧钱的研发支线从报表里切掉」，研发费用会因为少了具身整机开发而在后续季度体现为结构性下降。第二层是战略：公告把「不做整机、只做增量零部件」写得极其明确，这是对 2025 年那波「激光雷达公司要不要做机器人本体」争论的正式回答——速腾选了「博世路线」，而不是「特斯拉路线」。第三层是关系：买方是整机厂商且构成关连交易，意味着这更像一次「战略分家」而非市场化的甩卖，买方大概率与速腾存在股权或历史渊源。\n\n风险点：一是 3790 万元净收益未经审计，且包含「员工转调遣散开支 750 万元」这类一次性项，实际到手现金与账面收益会有差距；二是「空间相机」这个品类直接对标奥比中光的腹地，速腾在视觉模组上没有积累，能否交付存疑；三是关连交易的定价公允性会被市场反复审视。\n\n该盯的指标：2026 年报中「机器人零部件」收入能否首次单独披露、毛利率是否高于激光雷达主业、以及买方身份的正式披露。",
        "key_facts": [
          {
            "metric": "交易总代价",
            "value": "约人民币 5610 万元（扣除税项后）",
            "baseline": null,
            "condition": "2026-11-03 交割完成，未经审计"
          },
          {
            "metric": "预计净收益",
            "value": "约人民币 3790 万元",
            "baseline": "有形资产账面净值约 510 万元",
            "condition": "已扣研发开支约 560 万元、遣散开支约 750 万元"
          },
          {
            "metric": "战略调整",
            "value": "不再从事具身机器人研发与销售",
            "baseline": "此前含具身机器人开发业务",
            "condition": "保留激光雷达 + 机器人零部件，可接分包订单"
          },
          {
            "metric": "未来对买方销售品类",
            "value": "空间相机、视觉/MEMS 触觉、机械关节",
            "baseline": null,
            "condition": "构成持续关连交易，受上市规则 14/14A 章约束"
          }
        ],
        "position_relation": "与 2026-11-03「集微激光雷达报告」中「速腾 2025 年机器人出货 30.3 万台居全球第一」形成对照：出货第一的厂商主动砍掉整机业务，说明「卖零部件」比「做本体」在当下更具确定性；同时与 2026-11-03「一天三笔融资砸向具身数据」共同勾勒具身产业链的分工细化。",
        "signal_strength": "中",
        "tags": [
          "速腾聚创",
          "RoboSense",
          "具身智能",
          "资产出售",
          "港交所公告",
          "产业链分工"
        ],
        "terms": [
          {
            "term": "关连交易",
            "definition_mechanism": "上市公司与其关联方之间的交易，须按上市规则履行披露、独立股东批准等程序，以防利益输送",
            "definition_contrast": "区别于一般商业交易：关连交易的核心约束是程序合规与定价公允，而非交易本身是否合理"
          },
          {
            "term": "持续关连交易",
            "definition_mechanism": "在日常业务中持续发生、非一次性的关连交易，需设定年度上限并定期披露",
            "definition_contrast": "与一次性关连交易相比，持续关连交易更强调上限管理与年度审阅"
          }
        ],
        "sources": [
          {
            "url": "https://www1.hkexnews.hk/listedco/listconews/sehk/2026/1103/2026110301915_c.pdf",
            "type": "official"
          },
          {
            "url": "https://www.caiwennews.com/article/1683084.shtml",
            "type": "news"
          },
          {
            "url": "https://finance.sina.com.cn/stock/aigc/hkgg/2026-11-03/doc-inixncmu6719548.shtml",
            "type": "news"
          }
        ],
        "date": "2026-11-03",
        "notes": "港交所公告为中文版（2026110301915_c.pdf）与英文版（2026110301914.pdf）。总代价 5610 万元、净收益 3790 万元等数字来自财闻网等对公告的转述，公告正文本身未在披露易摘要中列出具体金额，故标注为「市场转述 + 未经审计」双重口径，未做独立核算。"
      },
      {
        "item_id": "2026-11-04-B-002",
        "category": "Research",
        "title": "CoLa3D：在共享场景潜空间里做物体分解，比 SAM 3D 快 2 倍且只用不到 1% 训练数据",
        "one_line_judgment": "把「先分物体、再各自生成、最后拼回去」的传统路数，改成「在一个整场景潜空间里直接切出物体网格」，从根上避开了位姿与尺度估计这一最脆弱的环节。",
        "image": "",
        "ai_summary": "大白话：以前要让 AI 把一张照片拆成「椅子、桌子、台灯」这些独立的三维模型，得先猜每个东西在哪、多大，再一个个生成，最后拼起来——拼的时候经常错位。CoLa3D 换了思路：先把整个场景压成一个「整体记忆」，然后在这个记忆里直接切出每个物体，切出来的东西天生就摆在对的位置。",
        "detailed_info": "论文 CoLa3D: Composable Latent 3D Decomposition 由 Xudong Cai、Yongcai Wang、Deying Li、Chuanxia Zheng 完成（南洋理工大学、中国人民大学），arXiv 编号 2611.03533，v1 于 2026 年 11 月 2 日 18:00:50 UTC 提交，已被 NeurIPS 2026 接收。\n\n核心思路是「共享整场景潜空间内的分解」：模型接收一个整场景 latent（可来自单张图像，也可来自已有场景网格），直接输出一组空间布局一致的物体网格，这些网格可以被重新组装回一个连贯场景。作者明确指出这条路与主流方案的根本差异——主流做法在**规范化空间（canonical space）里逐个生成物体**，再用位姿与尺度估计把它们「粘」回去，而位姿与尺度估计本身就是误差最大、最脆弱的环节。\n\n网络结构是一个轻量、可扩展的 query-based Transformer，接受多种查询类型：2D 掩码、3D 点、以及可学习的 query。不同的查询方式对应不同的交互粒度——给一个 2D 掩码就切出掩码对应的物体，给一个 3D 点就切出该点所属的物体。\n\n量化结果：在合成与真实数据集上，CoLa3D 在「可组合三维场景分解」任务上取得 SOTA，同时显著提升全局场景级一致性与物体级质量；运行速度比 SAM 3D 快 2 倍，训练数据用量不到 SAM 3D 的 1%。在可见深度上与 MoGe2 持平，说明潜空间分解在保留可见场景几何精度的同时，还能产出物理完整、可分解的物体网格。",
        "ai_comment": "这篇的技术判断很干净：可组合场景生成长期被「位姿/尺度估计」卡住，与其把估计器做得更准，不如让分解本身发生在全局坐标系里——这是一个「换问题」而不是「解难题」的思路，工程上更划算。2× 速度 + <1% 训练数据这两个数字如果复现成立，意味着这条路线对算力和数据的门槛都远低于 SAM 3D 一类的通才模型，中小团队可参与。\n\n保留意见：第一，「可见深度与 MoGe2 持平」只证明可见部分没退化，而分解任务真正难的是**被遮挡部分的几何完整性**，论文对遮挡区域的评价指标披露不足。第二，<1% 训练数据这个对比需要看基线 SAM 3D 的训练集定义是否对等，跨数据集比较容易失真。第三，可组合性最终要落到下游——生成出来的物体网格能否直接进物理仿真、能否保持材质与关节信息，决定了它对具身智能训练的价值。\n\n该盯的指标：遮挡区域 Chamfer 距离、物体数量超过 20 个时的性能衰减曲线、以及代码与权重的开放情况。",
        "key_facts": [
          {
            "metric": "推理速度",
            "value": "比 SAM 3D 快 2 倍",
            "baseline": "SAM 3D",
            "condition": "可组合三维场景分解任务"
          },
          {
            "metric": "训练数据用量",
            "value": "不足 SAM 3D 的 1%",
            "baseline": "SAM 3D 训练集",
            "condition": "跨基线比较，需核对口径"
          },
          {
            "metric": "可见深度精度",
            "value": "与 MoGe2 持平",
            "baseline": "MoGe2",
            "condition": "验证潜空间分解未损失可见几何"
          },
          {
            "metric": "输入/输出",
            "value": "单图或场景网格的整场景 latent → 一组空间一致、可重组回场景的物体网格",
            "baseline": "逐物体在规范化空间生成 + 位姿尺度拼接",
            "condition": "支持 2D 掩码 / 3D 点 / 可学习 query 三种查询"
          }
        ],
        "position_relation": "与 2026-11-02「SpatialScout 主动探索」、2026-10-28「GeoGSplat 前馈重建」同属三维表示与生成的算法前沿；在应用链路上直接服务具身智能的「物体级场景编辑」需求，可视为对 2026-11-03「Mundo 物理可交互场景」这类世界模型的输入侧补充。",
        "signal_strength": "中",
        "tags": [
          "3D scene decomposition",
          "NeurIPS 2026",
          "生成式3D",
          "场景分解",
          "Transformer",
          "三维重建"
        ],
        "terms": [
          {
            "term": "场景潜空间分解",
            "definition_mechanism": "把整场景编码为一个统一的潜在表示，在该表示内部按物体划分并解码出各自网格，天然共享同一坐标系",
            "definition_contrast": "区别于逐物体生成后拼接：后者依赖显式位姿与尺度估计，误差会在拼接时累积"
          },
          {
            "term": "SAM 3D",
            "definition_mechanism": "面向三维的「分割一切」通才模型，可从图像或点云提示出目标物体的三维表示",
            "definition_contrast": "通才模型覆盖面广但训练成本高；CoLa3D 走轻量专用路线，以更少数据换取任务内 SOTA"
          }
        ],
        "sources": [
          {
            "url": "https://arxiv.org/abs/2611.03533",
            "type": "paper"
          },
          {
            "url": "https://physicalvision.github.io/CoLa3D/",
            "type": "paper"
          }
        ],
        "date": "2026-11-03",
        "notes": "arXiv v1 提交时间 2026-11-02 18:00:50 UTC，折合北京时间 2026-11-03 02:00，落在报告日窗口内。论文标题、作者机构、录用信息均取自 arXiv 摘要页原文；「快 2 倍」「<1% 训练数据」为作者自述口径，未经第三方复现。"
      },
      {
        "item_id": "2026-11-04-B-003",
        "category": "Hardware",
        "title": "中科院合肥智能所两篇 3DGS 论文入选 ICRA 2026，LR-SGS 获最佳论文提名",
        "one_line_judgment": "把激光雷达的「强度/反射率」当成一种与光照无关的几何线索灌进高斯建模，是自动驾驶场景重建里少有人走、却被证明有效的分支。",
        "image": "",
        "ai_summary": "大白话：晚上拍街景，相机拍出来又暗又糊，但激光雷达不受光线影响，还能测出物体表面的「反光程度」。中科院团队把这种反光信息喂给三维重建算法，让它在夜里也能建出好场景。这篇论文在机器人领域最顶级的会议 ICRA 上拿到了最佳论文提名——5000 多篇投稿里，机器人感知方向只有 3 篇。",
        "detailed_info": "2026 年 11 月 3 日，中科院合肥物质院智能机械研究所发布：祝辉团队两项关于高保真场景重建与高质量数据生成的研究被 ICRA 2026 接收，其中基于激光雷达反射率引导的显著高斯泼溅方法 LR-SGS 入选最佳论文提名。据该所表述，本届 ICRA 5000 余篇投稿中机器人感知领域仅 3 篇获此提名。ICRA 2026 于 6 月 1—7 日在维也纳举行。\n\nLR-SGS（Robust LiDAR-Reflectance-Guided Salient Gaussian Splatting for Self-Driving Scene Reconstruction）针对自动驾驶重建在动态目标、复杂光照与效率上的不足：通过标定激光雷达强度构建**光照不变的反射率通道**，提升夜间等低光场景重建质量；用几何与反射率特征初始化「显著高斯」，优先表达关键结构、减少冗余；融合 RGB、深度与反射率三路信息增强纹理与几何一致性。实验显示在 Waymo 等数据集上重建精度、训练效率与模型规模均更优，在高速运动、夜间与静态场景中较鲁棒；生成的可编辑场景可用于仿真数据与虚拟环境构建。\n\n第二篇 MMD-SLAM（Structure-Enhanced Multi-Meta Gaussian Distribution-Guided Visual SLAM）针对现有 3DGS 视觉 SLAM 几何结构约束利用不足、易出现边缘模糊与地图不一致：挖掘人工环境的多方向局部正交结构先验优化高斯建模；用点线融合位姿优化，结合特征点与 3D 线段提升跟踪鲁棒性；设计主方向引导的多元高斯表示，把高斯基元分为点、线、面三种几何模态；引入高斯演化机制与结构增强联合损失。多个数据集上建图与跟踪性能更优，且保持有竞争力的实时速度。\n\n两项工作的共同点被作者概括为「从真实传感器数据中高效提取结构化信息」，契合世界模型与空间智能对可信数字基底的需求。IEEE Xplore 编号：11696891、11697390。",
        "ai_comment": "LR-SGS 的价值在于「换通道」：RGB 在夜间和逆光下失效，但激光雷达的反射率是主动测量、与光照无关的，把它作为独立通道注入高斯建模，相当于给重建算法补了一路「稳定先验」。这与 2026-10-28 GeoGSplat 用几何先验抑制伪影的思路同源，但数据来源不同——一个来自几何约束，一个来自传感器模态。\n\n但要注意两点口径。第一，「最佳论文提名」是荣誉而非奖项，其对产业的实际意义在于「方向被顶级会议认可」，不能直接推论为方法已可量产。第二，Waymo 是结构化道路场景，城市复杂路口、非铺装路面、雨雪天气是否同样成立，公开信息未覆盖。\n\nMMD-SLAM 的「点线面三模态高斯」是个值得跟的工程思路——它把「建筑环境的正交结构」这一强先验显式编码进高斯表示，理论上能显著降低室内/厂房的建图噪声。但「保持有竞争力的实时速度」这种表述缺少具体帧率，需要看论文正文。\n\n该盯的指标：LR-SGS 在夜间场景的 PSNR/LPIPS 相对基线的提升幅度、MMD-SLAM 的实时帧率与内存占用、以及代码开源情况。",
        "key_facts": [
          {
            "metric": "会议录用",
            "value": "ICRA 2026 接收 2 篇，LR-SGS 获最佳论文提名",
            "baseline": "5000 余篇投稿中机器人感知方向仅 3 篇获提名",
            "condition": "ICRA 2026，2026-06-01~07，维也纳"
          },
          {
            "metric": "LR-SGS 核心机制",
            "value": "标定激光雷达强度 → 光照不变反射率通道，融合 RGB+深度+反射率",
            "baseline": "仅用 RGB 的 3DGS 重建",
            "condition": "Waymo 等自动驾驶数据集"
          },
          {
            "metric": "MMD-SLAM 表示",
            "value": "高斯基元划分为点/线/面三种几何模态，点线融合位姿优化",
            "baseline": "单一各向同性高斯基元的 3DGS-SLAM",
            "condition": "多个公开数据集，保持有竞争力实时速度"
          },
          {
            "metric": "应用出口",
            "value": "可编辑场景用于仿真数据生成与虚拟环境构建",
            "baseline": null,
            "condition": "自动驾驶训练与验证"
          }
        ],
        "position_relation": "补充「学术侧自动驾驶重建」板块：此前本库 2026-10-28 GeoGSplat（几何先验）、2026-10-30 ACD-GS（曲率致密化）、2026-11-03 LingBot-Map（流式因果重建）分别代表前馈、压缩、在线三条线，LR-SGS 补上「多传感器模态融合」这一条。",
        "signal_strength": "中",
        "tags": [
          "3DGS",
          "ICRA 2026",
          "激光雷达反射率",
          "SLAM",
          "自动驾驶重建",
          "中科院"
        ],
        "terms": [
          {
            "term": "反射率通道",
            "definition_mechanism": "对激光雷达回波强度做标定后得到的、与入射光强无关的表面反射特性表征，可在夜间/逆光下稳定反映材质与结构",
            "definition_contrast": "与 RGB 通道相比不受环境光照影响，但空间分辨率低、无颜色语义"
          },
          {
            "term": "显著高斯",
            "definition_mechanism": "优先在几何与反射率特征突出的区域初始化高斯基元，使有限预算集中表达关键结构",
            "definition_contrast": "区别于均匀致密化：显著策略牺牲次要区域密度，换取模型规模与训练效率"
          }
        ],
        "sources": [
          {
            "url": "https://iim.cas.cn/xwzx_2021/kyjz/202611/t20261103_863798.html",
            "type": "official"
          },
          {
            "url": "https://ieeexplore.ieee.org/document/11696891",
            "type": "paper"
          },
          {
            "url": "https://ieeexplore.ieee.org/document/11697390",
            "type": "paper"
          }
        ],
        "date": "2026-11-03",
        "notes": "研究所官网发布时间为 2026-11-03，但论文实际录用与会议召开在 2026 年 6 月，本条按「信息披露日」归档至 daily-2026-11-04，属报道型条目而非事件当日。提名数量（5000 余篇中 3 篇）为研究所自述口径。"
      },
      {
        "item_id": "2026-11-04-B-004",
        "category": "Application",
        "title": "集微咨询《2026 激光雷达行业研究报告》：中国市场 2026 年预计 431.8 亿元，华为 41.5% 居首",
        "one_line_judgment": "这份报告最有价值的一组数不是份额，而是「单价五年降超 90%」与「机器人激光雷达五年十倍」——前者解释了中国厂商为何能通吃，后者解释了它们为何必须转型。",
        "image": "",
        "ai_summary": "大白话：一份行业报告说清楚了两件事。第一，激光雷达越来越便宜——2022 年一颗要八千到一万元，现在只要一千元左右，所以十万块的车也能装。第二，车上的生意快到头了，接下来是机器人：2025 年全球机器人用的激光雷达卖了约 100 万台，预计 2030 年能到 1000 万台。",
        "detailed_info": "集微咨询（JW Insights）11 月 3 日发布《2026 年激光雷达行业研究报告》，六章 12 图表，覆盖产业链、市场规模与竞争格局；封页标注 10 月，传播集中在 11 月 3 日。\n\n市场规模：Yole 数据，全球车载激光雷达 2024 年 8.61 亿美元、2025 年首破 10 亿美元（图表标注 10.5 亿），2030 年预计 38.04 亿美元，CAGR 约 28%；中国 2024 年 139.6 亿元→2025 年 240.7 亿元（+72.4%），2026 年预计 431.8 亿元（+79.4%），中企占全球约 95%。\n\n渗透率：2025 年装车 338.6 万台（+120.1%），渗透率 6.7%→17.9%，季度路径 6.7%/9.5%/13.2%/17.9%；15 万元以上新能源车超 24%，8 万元级开始搭载。\n\n竞争格局：2025 年华为、禾赛、速腾、图达通合计占中国乘用车前装 99.9%——华为 41.5% 居首、禾赛 33.8%、速腾退至 17.0%、图达通 7.7%。海外阵营溃退，Luminar 已于 2025 年 12 月申请破产保护。\n\n降本：主流 128 线单价从 2022 年 8000~10000 元降至 2026 上半年千元级（图表标注 2024 年 1800 元、2025 年 950 元），降幅超 90%。头部靠自研 SPAD-SoC 把工序时间缩短 95%、零部件减 66%；禾赛核心工序自动化率 100%，每 40 秒下线一台（官网作「每 10 秒」，口径不一）。\n\n第二曲线：全球机器人激光雷达 2025 年出货约 100 万台，2030 年预计 1000 万台，CAGR 58.5%（2026 年 180 万→2029 年 700 万）。速腾 2025 年机器人出货 30.3 万台居首（+1141.8%），禾赛与追觅签 1000 万颗独供大单；预计 2028 年前后追平车载。\n\n供应链：上游国产化率超 65%，激光器芯片自产占比 2024 年 53%→2025 年 68.4%；1550nm 激光器及探测器仍依赖美国。价格战下目前仅禾赛实现全年盈利。",
        "ai_comment": "这份报告的口径需要交叉校验。第一处矛盾：禾赛产线节拍，集微报告写「每 40 秒下线一台」，禾赛官网 11-03 的 Yole 报告文章写「每 10 秒下线一台」，两处相差 4 倍，且官网该文亦注明「本文中的数据代表第三方估计，并非公司官方数据」。此处并列标注，不做统一。第二处：速腾「退至 17%」是相对 2024 年份额下降，但同期中国乘用车装车量翻倍以上，速腾的绝对出货量大概率仍是增长的——份额下滑不等于绝对量下滑，这是解读时最容易踩的坑。\n\n真正的洞察在最后一段：当单价降到千元级、CR4 达 99.9%、海外对手清场，车载市场已经进入「存量搏杀 + 微利」阶段。报告给出的出口是机器人（五年十倍、2028 年追平车载），这恰好与速腾同日「卖掉整机业务、专做零部件」的动作互为印证——整个行业在同一天朝同一个方向转身。\n\n风险提示：一是机器人数量的预测基数低（2025 年 100 万台），十倍增长在绝对量上仍显著小于车载，短期内难以填补车载增速下滑；二是「仅禾赛全年盈利」意味着其余厂商仍在失血，价格战不会因份额集中而停止；三是 1550nm 供应链的出口管制风险被报告点名但未量化，这是图达通这类纯 1550nm 路线厂商的硬约束。\n\n该盯的指标：2026 年机器人激光雷达实际出货能否达到报告预测的 180 万台、禾赛单季毛利率、以及 1550nm 器件的国产替代进度。",
        "key_facts": [
          {
            "metric": "中国激光雷达市场规模",
            "value": "2025 年 240.7 亿元，2026 年预计 431.8 亿元",
            "baseline": "2024 年 139.6 亿元",
            "condition": "集微咨询，2025 年同比 +72.4%、2026E +79.4%"
          },
          {
            "metric": "中国乘用车渗透率",
            "value": "2025 年末 17.9%",
            "baseline": "2025 年初 6.7%",
            "condition": "装车量 338.6 万台，同比 +120.1%"
          },
          {
            "metric": "2025 年市场份额（中国乘用车前装）",
            "value": "华为 41.5% / 禾赛 33.8% / 速腾 17.0% / 图达通 7.7%",
            "baseline": "CR4 = 99.9%",
            "condition": "盖世汽车研究院、集微咨询"
          },
          {
            "metric": "主流 128 线单价",
            "value": "2026H1 千元级（图表 2025 年 950 元）",
            "baseline": "2022 年 8000~10000 元",
            "condition": "五年降幅超 90%"
          },
          {
            "metric": "机器人激光雷达出货",
            "value": "2025 年约 100 万台 → 2030 年预计 1000 万台",
            "baseline": "CAGR 58.5%",
            "condition": "预计 2028 年前后追平车载"
          }
        ],
        "position_relation": "为 11-03 禾赛「Yole 份额第一」与速腾「资产出售交割」两条提供行业底数；同时把本库此前零散的激光雷达产品条目（Livox Mid-360S、MicroVision MOVIA Pro、Seyond、Ouster）串成一张份额与规模图。",
        "signal_strength": "中",
        "tags": [
          "激光雷达",
          "行业报告",
          "集微咨询",
          "市场份额",
          "渗透率",
          "机器人激光雷达"
        ],
        "terms": [
          {
            "term": "渗透率",
            "definition_mechanism": "装配该部件的车辆数占同期该细分市场全部销量的比例，反映配置普及程度",
            "definition_contrast": "与「市场份额」不同：渗透率的分母是整车销量，份额的分母是已装配该部件的车辆数"
          },
          {
            "term": "SPAD-SoC",
            "definition_mechanism": "把单光子雪崩二极管阵列与测距、信号处理电路集成到一颗芯片上，提升集成度并降低成本",
            "definition_contrast": "区别于分立方案：SoC 化后线数可借芯片原生能力提升，但良率与散热挑战更大"
          }
        ],
        "sources": [
          {
            "url": "https://m.10jqka.com.cn/20261103/c681401206.shtml",
            "type": "news"
          },
          {
            "url": "https://www.hesaitech.com/cn/news/1463",
            "type": "official"
          }
        ],
        "date": "2026-11-03",
        "notes": "报告封页标注「2026 年 10 月」，公开发布与媒体传播在 11-03 15:35（集微公众号），按发布日归档。产线节拍口径冲突（40 秒 vs 禾赛官网 10 秒）已并列标注，未统一；禾赛官网该文自注「数据为第三方估计」。"
      },
      {
        "item_id": "2026-11-04-B-005",
        "category": "OpenSource",
        "title": "蚂蚁灵波开源大脑全栈 2.0：LingBot 系列下载破 220 万，被斯坦福 OpenWAM 复用",
        "one_line_judgment": "中国团队第一次在「机器人基础模型」这个层级上形成了可被海外顶尖实验室反向依赖的开源资产——这比任何一个单点指标都更能说明生态位的变化。",
        "image": "",
        "ai_summary": "大白话：蚂蚁旗下的机器人公司把自己做的「机器人大脑」代码全部开源了，9 个月被下载了 220 多万次。有意思的是，斯坦福大学的一个项目直接拿来用了它的一个模块，瑞士洛桑联邦理工还用它做珊瑚礁的三维重建——也就是说，中国的机器人 AI 已经不只是在自用，而是被国外研究机构当成基础设施。",
        "detailed_info": "2026 年 11 月 2 日至 5 日，2026 年世界互联网大会乌镇峰会在浙江乌镇举行，主题为「开源开放 共建共享」。11 月 3 日，蚂蚁集团旗下具身智能公司蚂蚁灵波（Robbyant）携全栈开源的机器人通用大脑亮相，展示「蚂蚁灵波大脑全栈 2.0 模型矩阵」，覆盖空间智能、灵巧操作与环境反馈三条能力线，目标是让同一套智能在不同机器人构型、任务与场景中复用。\n\n开源数据：LingBot 系列模型开源 9 个月来，下载量突破 220 万次，GitHub Star 数超过 3.3 万，相关工作被 Physical Intelligence、Generalist AI 等海外友商引用。\n\n下游采用的具体案例（报道口径）：斯坦福大学 OpenWAM 项目复用并适配了 LingBot-VA 模块；韩国 FastOPD 研究以 LingBot-VLA 为教师模型，探索训练更轻量的机器人方案；瑞士洛桑联邦理工学院（EPFL）基于 LingBot-Map 开展珊瑚礁三维重建——后者与三维重建链路直接相关，属于「视觉重建模型被跨领域复用」的样本。\n\n工具链接入：LingBot-VLA 与 LingBot-VA 已完成对 Hugging Face LeRobot 平台的生态适配；LingBot-Vision 已合入视觉骨干模型库 timm 主线；LingBot-World 成为首个同时获得 vLLM、SGLang 两大主流开源推理引擎支持的世界模型，英伟达亦将其集成至开源世界模型推理库 FlashDreams。\n\n开发者生态：首届「蚂蚁灵波具身大模型挑战赛」线上初赛落幕，吸引 13 个国家、648 所高校及企业的 1855 支队伍、3252 位选手参赛。峰会期间，蚂蚁灵波与国大药房在乌镇世界互联网科技馆联合呈现机器人智慧药房，其中自主取药环节由通用大脑驱动，相关方案已在上海国大药房多家门店常态化运营。",
        "ai_comment": "这条的核心信号是「方向反转」：过去中国团队在机器人基础模型上一贯是「引用方」，这次是「被引用方」——斯坦福 OpenWAM 复用 LingBot-VA、EPFL 用 LingBot-Map 做珊瑚礁重建，这两个案例虽小，但性质不同。对一个开源项目来说，GitHub Star 可以刷，下载量可以堆，但被顶尖实验室在真实研究里当依赖用，是刷不出来的。\n\n需要冷静的地方有三点。第一，「下载量 220 万」不等于「用户 220 万」，模型权重的 CI/CD 拉取、镜像同步都会计入下载，这个数字的含金量需要看 GitHub 的独立克隆数与实际 issue 活跃度。第二，报道中「斯坦福 OpenWAM 项目复用 LingBot-VA」目前只见于蚂蚁灵波方面的表述，尚无斯坦福侧的公开引用确认，属于单一来源。第三，LingBot-World 被 vLLM/SGLang 支持是工程侧的真实背书，但「首个」这一表述需要核对时间线。\n\n对三维重建赛道的意义：LingBot-Map 被拿去重建珊瑚礁，说明「通用的空间/地图模型」可以外溢到生态监测这类传统摄影测量的地盘。如果这条路走通，未来生态、地质、农业等领域的三维重建需求可能不再由专业摄影测量软件包办，而是由通用模型 + 少量后处理承担——这对 Pix4D、Agisoft 这类传统厂商是中期威胁。\n\n该盯的指标：LingBot-Map 在非城市场景（水下、林区）的重建精度公开评测、GitHub 独立贡献者数量、以及是否有第三方论文引用。",
        "key_facts": [
          {
            "metric": "开源规模",
            "value": "LingBot 系列 9 个月下载破 220 万次，GitHub Star 超 3.3 万",
            "baseline": null,
            "condition": "2026 年 1 月开源至今"
          },
          {
            "metric": "跨机构复用",
            "value": "斯坦福 OpenWAM 复用 LingBot-VA；EPFL 基于 LingBot-Map 做珊瑚礁三维重建",
            "baseline": null,
            "condition": "单一来源（蚂蚁灵波口径）"
          },
          {
            "metric": "推理引擎支持",
            "value": "LingBot-World 同时获 vLLM、SGLang 支持，被英伟达 FlashDreams 集成",
            "baseline": "此前世界模型多仅支持单一引擎",
            "condition": "工程侧背书"
          },
          {
            "metric": "开发者生态",
            "value": "首届具身大模型挑战赛：13 国、648 所机构、1855 支队伍、3252 名选手",
            "baseline": null,
            "condition": "线上初赛"
          }
        ],
        "position_relation": "接续 2026-11-03「LingBot-Map 流式因果三维重建开源」条目，把单点模型放进「全栈 2.0 + 生态采用」的框架里；与 2026-11-01「西湖大学 Awomo 世界模型研究中心」形成国内世界模型双极（开源生态型 vs 学术榜单型）。",
        "signal_strength": "中",
        "tags": [
          "蚂蚁灵波",
          "Robbyant",
          "LingBot",
          "开源",
          "具身智能",
          "世界模型",
          "乌镇峰会"
        ],
        "terms": [
          {
            "term": "全栈开源",
            "definition_mechanism": "从感知模型、决策模型到执行模型的整条链路均开放权重与代码，而非只开放单个环节",
            "definition_contrast": "与「部分开源」相比，全栈开源要求各模块接口统一，对工程整合能力要求更高"
          },
          {
            "term": "推理引擎适配",
            "definition_mechanism": "把模型接入 vLLM、SGLang 等高性能推理框架，获得批处理、显存管理与加速能力",
            "definition_contrast": "区别于自行实现推理：接入主流引擎意味着可直接复用其调度与优化生态"
          }
        ],
        "sources": [
          {
            "url": "https://finance.ifeng.com/c/8xl7kYngj5t",
            "type": "news"
          },
          {
            "url": "https://www.163.com/dy/article/LARM7R1F05561FZV.html",
            "type": "news"
          }
        ],
        "date": "2026-11-03",
        "notes": "乌镇峰会为 11-02 至 11-05，本条按蚂蚁灵波集中传播日 11-03 归档。「下载量」「Star 数」「跨机构复用案例」均为蚂蚁灵波对外口径，未见第三方审计；斯坦福侧未见独立确认。"
      },
      {
        "item_id": "2026-11-04-B-006",
        "category": "Hardware",
        "title": "拓竹发布 H3C：9 个独立打印头、6 秒换头，标准套装 16499 元",
        "one_line_judgment": "桌面 3D 打印的竞争维度从「打得快」切到「打得杂」——九头架构把多材料从「换料成本」问题变成了「工位数量」问题，这是对上游三维建模与扫描需求的直接拉升。",
        "image": "",
        "ai_summary": "大白话：拓竹新一代旗舰 3D 打印机最猛的地方不是快，是「一次能把九种材料打出来」，换一次头只要 6 秒，浪费的材料只有 38 毫克。这样一来，一双鞋的硬壳和软底可以一次打出来，不用分开做再拼。对普通用户来说，意味着「想打什么就打什么」的门槛又低了一截。",
        "detailed_info": "2026 年 11 月 3 日，拓竹科技（Bambu Lab）发布第三代旗舰 FDM 3D 打印机 H3C，国内标准套装（含 AMS 3H）起售价 16499 元，首发七天直降 1000 元至 15499 元，叠加 1500 元国家补贴后到手价可低至 13999 元。\n\n三大核心技术：\n\n一是 Swaptek 九头闪切系统。首次在消费级产品中集成 9 个独立打印头，每个打印头拥有独立进料通道与主动预加热，各通道耗材始终保持装载状态，切换时无需切断、回抽或重新送料。官方数据：换头动作最快 3.4 秒，换头+换料+恢复打印全流程约 6 秒，单次换料废料仅 38mg（0.038g）。九个打印头中，8 个用于常规 1.75mm 耗材，第 8 号位预装 2.85mm 柔性料专用头。\n\n二是顶置一体化 AMS 3H 供料系统。9 个料盘密封于机身顶部气密舱内，集成密封保存、自动送料与烘干（两个最高 85℃ 烘干槽位），支持「边烘边打」；通过 1 号打印头可并联接入最多 4 台前代 AMS，最高实现 24 色打印（外接 AMS 另购）。\n\n三是可变线径挤出机。除常规 1.75mm 外新增 2.85mm 线径通道，通过电机驱动凸轮在两种线径间自动切换；更粗线径抗屈曲能力更强、熔融流量更大，使 H3C 成为首款可稳定打印消费级最软耗材 75A TPU 的 3D 打印机。这也让软硬材料混打成为可能。\n\n其他规格：打印空间 330×320×325mm；整机含 AMS 3H 尺寸 493×571×1016mm，净重 36.28kg；标配 0.4mm 硬化钢喷嘴，支持 0.2/0.4/0.6/0.8mm 混用；喷嘴最高 350℃、热床最高 120℃、主动腔温最高 65℃；支持 CMYKW 叠色打印与刀切、画笔、压印、冷烫金等平面加工工具头自动切换（相关工具头与配件为选配）。软件侧需 Bambu Studio 2.9.1.70 或更新版本以支持多口径路径规划。\n\n价格与代际：相比上一代 H2C 上涨约 1500 元。",
        "ai_comment": "从三维重建的视角看，这条的价值不在打印机本身，而在「下游对三维数据的需求形态变了」。九头 + 二十四色 + 软硬混打，意味着用户不再满足于「打印一个几何正确的灰模」，而是要「打印一个带材质、带颜色、带软硬分区」的成品——这直接抬高了对三维扫描仪色彩纹理还原能力与多材质分区建模能力的要求。换句话说，消费级扫描仪（如爱乐酷 M1 Ultra、知象 Trackit SR）的「纹理质量」这一此前被精度指标掩盖的维度，会成为下一个竞争点。\n\n保留意见：一是「6 秒换头」「3.4 秒换头动作」是实验室条件，官方与第三方评测均提示会随材料、切片设置与打印阶段变化；二是「九色超低损耗」需另购一个 1.75mm 打印头替换第 8 号位的 2.85mm 专用头，标准套装并非开箱九色；三是「三倍提速」比较的是实验室条件下的最大体积流量，不代表整件模型总时间缩短到三分之一。\n\n竞争判断：拓竹跳过四头直接上九头，是在用「工位数」压制竞品的「换料效率」叙事。代价是机器体积、重量与价格的全面上移（36.28kg、建议预留 593×1056×1306mm 空间），这与「桌面级」的原始定位存在张力。2027 年上半年能否看到竞品跟进多头路线，是判断这是否成为行业新基准的关键。\n\n该盯的指标：九头架构的长期故障率（尤其是切换机构的磨损）、真实场景下的废料率、以及配套扫描仪销量是否被拉动。",
        "key_facts": [
          {
            "metric": "打印头数量与切换速度",
            "value": "9 个独立打印头，换头最快 3.4 秒，全流程约 6 秒",
            "baseline": "传统单头方案需退料—切料—送料",
            "condition": "实验室条件，随材料与切片设置变化"
          },
          {
            "metric": "单次换料废料",
            "value": "38mg（0.038g）",
            "baseline": "传统多色方案废料可达数十克级",
            "condition": "官方数据"
          },
          {
            "metric": "价格",
            "value": "标准套装 16499 元，首发 15499 元，叠加国补低至 13999 元",
            "baseline": "上一代 H2C 低约 1500 元",
            "condition": "国内售价，含 AMS 3H"
          },
          {
            "metric": "材料能力",
            "value": "首款稳定打印 75A TPU 的消费级机型；新增 2.85mm 线径通道",
            "baseline": "常规仅 1.75mm，95A TPU 速度约 2-3mm³/s",
            "condition": "2.85mm 头仅用于对应线径柔性材料"
          },
          {
            "metric": "最大色彩与体积",
            "value": "外接 AMS 最高 24 色；打印空间 330×320×325mm，整机 36.28kg",
            "baseline": null,
            "condition": "外接 AMS 另购，AMS lite 不支持"
          }
        ],
        "position_relation": "与 2026-10-30「爱乐酷 M1 Ultra 手持扫描仪：3D 打印厂商反向切入扫描」形成闭环——打印端材料与色彩能力上探，反向拉动扫描端的纹理与多材质采集需求；同时补充「消费级三维制造」这一此前较薄的分支。",
        "signal_strength": "中",
        "tags": [
          "3D打印",
          "拓竹",
          "Bambu Lab",
          "多材料",
          "消费级",
          "H3C"
        ],
        "terms": [
          {
            "term": "FDM",
            "definition_mechanism": "熔融沉积成型，将热塑性线材加热熔融后按路径挤出、逐层堆积成形",
            "definition_contrast": "与光固化（SLA/DLP）相比精度较低但材料谱系宽、设备成本低"
          },
          {
            "term": "AMS",
            "definition_mechanism": "自动供料系统，管理多个料盘并自动切换送入打印头，实现多色多材料",
            "definition_contrast": "传统单料盘方案需人工换料，AMS 把换料动作自动化但受限于共用喷嘴的清洗与废料问题"
          }
        ],
        "sources": [
          {
            "url": "https://www.leiphone.com/category/industrynews/xBbVCZ6pFQNa7XzR.html",
            "type": "news"
          },
          {
            "url": "https://blog.bambulab.com/tool-changer-game-changer-bambu-lab-presents-h3c-the-defining-new-generation-of-3d-printers/",
            "type": "official"
          }
        ],
        "date": "2026-11-03",
        "notes": "发布日为 2026-11-03。价格口径分三层：16499 元（标准套装原价）、15499 元（首发直降 1000）、13999 元（叠加 1500 元国补，需符合补贴条件），三者不可混用。九头中第 8 号位为 2.85mm 专用头，做九色 1.75mm 需另购打印头替换。"
      },
      {
        "item_id": "2026-11-04-B-007",
        "category": "Application",
        "title": "AMD 2026Q3 财报电话会：数据中心营收 85 亿美元同比增 97%，World Labs 收购年底前交割",
        "one_line_judgment": "空间智能第一次被写进芯片巨头的季度叙事里——不是作为产品线，而是作为「理解下一代算力负载」的认知来源。",
        "image": "",
        "ai_summary": "大白话：做芯片的 AMD 发财报，数据中心业务几乎翻倍。但对我们这个领域来说，最该注意的是它在电话会上专门提到：要花 82 亿美元买下李飞飞那家做「空间智能」的公司 World Labs，年底前完成。芯片公司买三维世界模型公司，说明未来的算力需求要由「理解三维世界」的模型来定义。",
        "detailed_info": "美东时间 2026 年 11 月 3 日，AMD（Nasdaq: AMD）公布 2026 年第三季度财报，并于同日召开电话会。季度营收 134 亿美元，同比增长 45%、环比增长 16%，超过此前 127 亿~133 亿美元的指引区间；GAAP 净利润 24 亿美元，同比增长 95%、环比增长 6%；GAAP 毛利率 54%，同比提升 2 个百分点。\n\n分部门：数据中心 85 亿美元，同比增长 97%，受 EPYC 服务器 CPU 与 Instinct MI450 GPU 需求推动；客户端与游戏 37 亿美元，同比下降 8%（客户端 29 亿美元同比 +7%，游戏 7.73 亿美元同比 -40%）；嵌入式 11 亿美元，同比增长 29%。\n\n与三维/空间智能直接相关的表述出现在电话会的并购部分：苏姿丰表示本季度宣布两项收购以强化「超智能」产品组合——Taalas（低延迟高效推理专用芯片）与 World Labs。对 World Labs 的表述为：由联合创始人兼 CEO 李飞飞博士领导，「拥有世界一流的研究团队，在空间智能和能理解物理世界的模型方面拥有专长，将帮助我们深入洞察前沿模型和工作负载的演进方向」；李飞飞将以首席科学家身份加入 AMD，领导模型研究并参与塑造未来的硬件、软件与系统路线图；两项收购预计均于年底前完成。\n\n交易背景（此前已于 2026 年 9 月 28 日由 AMD 官网披露）：全股票交易，估值约 82 亿美元，预计 2026 年底前完成交割，尚需监管批准。World Labs 总部旧金山，做的是从文本、图像、视频输入生成、重建与模拟可交互三维环境，以及机器人学习与仿真技术。\n\n展望：Q4 营收指引 170 亿美元 ±3%（同比约 +66%）；2027 年预计服务器营收同比翻倍，数据中心 AI 营收增速将超过 90 天前预期，数据中心业务 2027 年将占总营收 80% 以上。苏姿丰同时预判 2027 年 PC 市场出货量将出现百分比两位数下降。",
        "ai_comment": "把这条放进三维重建情报站，理由不是 AMD 的财报数字，而是「空间智能在芯片公司的战略叙事里获得了什么位置」。苏姿丰的表述很讲究：她没说 World Labs 会给 AMD 带来机器人业务，而是说它能帮助 AMD「洞察前沿模型和工作负载的演进方向」——也就是说，买的是对未来算力需求的判断力，而不是当下的收入。这是一个非常「英伟达式」的动作（英伟达当年也是靠理解图形与 AI 负载来定义 GPU 架构），AMD 在用并购补这一课。\n\n需要克制的三点。第一，交易尚未交割，82 亿美元是全股票交易，实际对价随 AMD 股价浮动，最终金额会与 82 亿有偏差。第二，这条的「新」只在「财报电话会确认年底前交割」这一时间点上，收购本身是 9-28 的旧闻，不应被解读为新事件。第三，「数据中心 2027 年占营收 80% 以上」是前瞻指引，AMD 同时预判 2027 年 PC 出货量两位数下降，两句话合起来看，这是一次高风险的结构性押注。\n\n对三维重建产业的传导路径：World Labs 的 Atlas/Marble 这类世界模型的训练与推理成本极高，若 AMD 真能把模型—芯片协同做起来，长期会压低三维生成与仿真的单位算力成本，进而降低具身智能训练数据的生成门槛。但这条路径至少要看 2027—2028 年。\n\n该盯的指标：交割是否在 2026 年底前完成、李飞飞团队加入后 AMD 是否发布面向三维/仿真负载的专用优化、以及 ROCm 生态对 3DGS/NeRF 类训练框架的支持进展。",
        "key_facts": [
          {
            "metric": "季度营收",
            "value": "134 亿美元",
            "baseline": "指引区间 127 亿~133 亿美元",
            "condition": "2026Q3，同比 +45%"
          },
          {
            "metric": "数据中心营收",
            "value": "85 亿美元",
            "baseline": "同比增长 97%",
            "condition": "EPYC + Instinct MI450 驱动"
          },
          {
            "metric": "World Labs 收购",
            "value": "约 82 亿美元全股票交易，预计 2026 年底前完成",
            "baseline": null,
            "condition": "2026-09-28 公告，2026-11-03 电话会重申时间表"
          },
          {
            "metric": "2027 年展望",
            "value": "数据中心占总营收 80% 以上，服务器营收同比翻倍",
            "baseline": "同时预判 PC 出货量两位数下降",
            "condition": "前瞻指引，存在不确定性"
          }
        ],
        "position_relation": "为本库「世界模型/空间智能」板块补上资本与算力侧的顶层变量：此前 2026-11-01 西湖大学 Awomo、11-03 蚂蚁灵波 LingBot 都在模型层，AMD 这笔交易说明模型层已被芯片巨头纳入长期算力规划。",
        "signal_strength": "中",
        "tags": [
          "AMD",
          "World Labs",
          "空间智能",
          "算力",
          "财报",
          "并购",
          "李飞飞"
        ],
        "terms": [
          {
            "term": "空间智能",
            "definition_mechanism": "让模型理解三维空间结构、物体位置关系与物理约束，并能在其中生成、推理与行动",
            "definition_contrast": "区别于以二维像素为输出的图像/视频生成：空间智能的输出是可交互、具几何一致性的三维环境"
          },
          {
            "term": "全股票交易",
            "definition_mechanism": "收购对价以收购方股票支付，卖方获得股份而非现金，对价金额随收购方股价波动",
            "definition_contrast": "与现金交易相比，全股票交易对被收购方绑定更深，但最终到手价值不确定"
          }
        ],
        "sources": [
          {
            "url": "https://newsroom.amd.com/news/amd-acquire-world-labs",
            "type": "official"
          },
          {
            "url": "https://news.qq.com/rain/a/20261104A03DDH00",
            "type": "news"
          },
          {
            "url": "https://www.cls.cn/detail/2524477",
            "type": "news"
          }
        ],
        "date": "2026-11-03",
        "notes": "财报与电话会为美东 11-03（北京时间 11-04 凌晨），窗口内。收购本身公告于 2026-09-28，本条仅就「电话会重申年底前交割」这一新增信息与 Q3 数据收录，不重复报道收购事件。财务数字取自第一财经、财联社对财报的电话会转述，未逐项对照 AMD 官方 10-Q。"
      },
      {
        "item_id": "2026-11-04-D-001",
        "category": "OpenSource",
        "title": "Meshy 上线 N1 Texture 纹理生成模式：约 20 秒出图，速度较上一代快 3 倍",
        "one_line_judgment": "生成式 3D 的瓶颈正在从「形状是否合理」转向「纹理是否可用于生产」——N1 把 2K base color 的生成时间压到 20 秒，是在补生成资产进管线前的最后一道工序。",
        "image": "",
        "ai_summary": "大白话：做 AI 生成三维模型的 Meshy 更新了贴图功能，给模型「上色」的速度比之前快 3 倍，大约 20 秒就能出一张 2K 的干净贴图，接缝和投影伪影少了很多。这对做游戏美术的人来说意味着：以前生成完模型还要手动重做贴图，现在这一步可能省了。",
        "detailed_info": "据 Meshy 官方更新日志（第三方工具库收录时间 2026-11-03），Meshy 上线 N1 Texture 纹理生成模式，已同步至网页应用与 API。\n\n核心能力与指标：相比 Meshy 7 的纹理生成，N1 速度提升约 3 倍，单次生成约 20 秒完成；支持输出 2K 分辨率的干净 base color（基础色/漫反射贴图）；官方称大幅减少接缝（seam）与投影伪影（projection artifact），定位偏向风格化（stylized）游戏资产的快速制作。\n\n需要说明的是：N1 是「纹理生成模式」而非新的几何生成模型，其输入仍是已有的三维网格（无论是 Meshy 生成的还是用户上传的白模），输出为贴图。因此它改善的是「形状已定、材质待定」这一环节的效率，不改变模型拓扑质量。\n\n此前 Meshy 的功能节奏可作参照：2026-09-24 上线 Auto Split 指定部件拆分（按指令分离龙的翅膀、玩具的头、汽车的轮子等）；2026-09-20 插件上架 ChatGPT，可在对话内直接返回三维模型并配合 Part Segmentation API 拆分为框架、座面、靠背等部件；2026-09-17 与 The Sandbox 达成合作。",
        "ai_comment": "放在「生成式 3D 能否进生产管线」这个长期问题上，N1 的意义是明确了一个事实：几何生成已经卷到边际收益递减，真正的卡点在纹理与 UV。一个拓扑尚可但贴图有接缝的模型，在游戏管线里依然要退回美术返工，20 秒出图的价值恰恰在于把「返工」这一步变得可接受。\n\n但要克制两点。第一，「快 3 倍」「约 20 秒」是官方自述，且是 base color 单通道——PBR 完整贴图（法线、粗糙度、金属度）是否同样提速未说明，而生产管线真正需要的是整套 PBR。第二，「减少接缝」这类定性表述缺少量化指标（如 LPIPS、接缝区域的色差 ΔE），无法与竞品横向比较。\n\n信号强度定为「弱」的理由：这是一次常规功能迭代，没有新的技术范式，也没有可验证的产业后果。它值得记录，是因为它标出了 Meshy 的产品重心从「生成形状」转向「生成可用材质」，这个方向判断比单个版本号更有价值。\n\n该盯的指标：完整 PBR 贴图的生成速度与质量、API 调用价格、以及是否有游戏工作室公开将其纳入生产流程。",
        "key_facts": [
          {
            "metric": "纹理生成速度",
            "value": "约 20 秒，较 Meshy 7 快约 3 倍",
            "baseline": "Meshy 7 纹理生成",
            "condition": "官方口径，base color 单通道"
          },
          {
            "metric": "输出规格",
            "value": "2K 干净 base color，接缝与投影伪影显著减少",
            "baseline": "上一代存在明显接缝与投影伪影",
            "condition": "面向风格化游戏资产"
          },
          {
            "metric": "可用渠道",
            "value": "网页应用与 API 同步上线",
            "baseline": null,
            "condition": "2026-11-03 更新日志"
          }
        ],
        "position_relation": "补齐「生成式 3D 资产的生产可用性」这一环：此前本库 2026-10-31 Speridlabs Idol 解决「单图到几何」，N1 解决「几何到可用材质」，二者构成生成式资产进入游戏/影视管线的两端。",
        "signal_strength": "弱",
        "tags": [
          "Meshy",
          "纹理生成",
          "生成式3D",
          "PBR",
          "游戏资产"
        ],
        "terms": [
          {
            "term": "base color",
            "definition_mechanism": "PBR 材质体系中的基础色贴图，记录表面在无光照影响下的固有颜色，其他贴图（粗糙度、金属度、法线）在其之上叠加",
            "definition_contrast": "区别于完整的 PBR 贴图组：仅有 base color 无法表达材质的光泽与微表面细节"
          },
          {
            "term": "投影伪影",
            "definition_mechanism": "把二维图像投影到三维表面时，因视角与曲率不匹配在接缝或遮挡处产生的拉伸、错位与色块",
            "definition_contrast": "与接缝（UV 展开边界处的颜色断裂）不同：投影伪影源于投影几何，接缝源于 UV 拓扑"
          }
        ],
        "sources": [
          {
            "url": "https://ai-equal.com/tools/meshy",
            "type": "data"
          }
        ],
        "date": "2026-11-03",
        "notes": "本条依据第三方工具数据库收录的 Meshy 官方更新日志（收录时间 2026-11-03），未直接访问 Meshy 官网原始 changelog，属单一来源；「快 3 倍」「20 秒」为官方自述，未经独立测试。"
      }
    ]
  },
  {
    "report_id": "daily-2026-11-05",
    "window_start": "2026-11-04T08:00:00+08:00",
    "window_end": "2026-11-05T08:00:00+08:00",
    "generated_at": "2026-11-05T06:20:00+08:00",
    "summary": {
      "window_takeaway": "三家「卖三维数据生产工具」的公司，在同一天给出了同一个方向：Trimble 的测绘业务增长是被数据中心与电网建设拉动的、速腾把激光雷达产线拉到单线年产 50 万台、Seyond 把 LiDAR 装进数据中心运营孪生——三维感知的需求正在被 AI 基建与能源基建拉动，而不是被「做三维模型」这件事本身拉动。",
      "direction": "产业侧出现明显的「产能与场景双下沉」：一边是速腾用全自动化产线把激光雷达做成标准件、赛尔智控把手持扫描仪做到近万台出货并计划下探消费级空间相机，一边是百度、优必选把重建能力封装成世界模型与仿真数据工厂，卖的不再是设备而是「可训练的空间数据供给」。学术侧则在同一窗口被浇了一盆冷水：普林斯顿 SSoN 基准显示最强 VLM 判断多视角一致性的准确率仅 39.7%，离人类 83.3% 差一半——意味着「用 VLM 自动筛重建数据/自动评价重建质量」这条路目前还不可靠。",
      "academic_vs_industry": "方向相反、互为约束：产业在加速扩大三维数据的产能与下游（数字孪生、世界模型、仿真训练），学术在证明这批数据的「自动质检」环节仍是瓶颈。SSoN 的结果对百度 Apollo World、优必选 Thinker-Sim 这类「用重建场景批量生成训练数据」的路线构成直接约束——数据可以造得很快，但判断造得对不对仍需人或专用几何指标。",
      "remember_one_thing": "Trimble 说得最直白：测绘与土木的营收增长，主要由数据中心建设、公用事业和能源基础设施拉动。三维重建行业这一轮的钱，来自 AI 基建和电网，不来自它自己的老客户。"
    },
    "items": [
      {
        "item_id": "2026-11-05-A-001",
        "category": "Hardware",
        "title": "Trimble 2026Q3：营收 9.668 亿美元增 7%，Field Systems 含 Geospatial 有机增 7%、ARR 仅增 5%",
        "one_line_judgment": "测绘与实景三维这一侧的增长已经不再由「卖扫描仪/卖配件」驱动，而是被数据中心建设、能源与公用事业这些下游工程资本开支牵着走——Trimble 用分部数据把「三维采集硬件公司」的估值逻辑降级成了「工程周期股」。",
        "image": "",
        "ai_summary": "大白话：Trimble（天宝）是做测绘仪器和定位设备的老牌美国公司，三维激光扫描仪、GNSS、无人机测绘都归它管。这次三季度财报显示：公司总收入涨了 7%，但真正负责卖测绘扫描设备的那个部门只涨了 7%，而且其中「订阅收入」只涨了 5%，比公司整体 10%~11% 的订阅增速慢一半。更关键的是，公司自己给出的解释是——增长靠的是数据中心建设、电力和能源基建，而不是测绘本身变热了。也就是说：买扫描仪的人，是为了修数据中心和电网才买的。",
        "detailed_info": "美东时间 2026 年 11 月 4 日盘前，Trimble（Nasdaq: TRMB）发布 2026 财年第三季度（截至 10 月 2 日）业绩并上调全年指引。营收 9.668 亿美元，同比 +7%、有机 +7%；年度经常性收入（ARR）25.6 亿美元（+11%、有机 +10%），创历史新高；非 GAAP 营业利润 2.626 亿美元（27.2%）；GAAP 每股收益 0.25 美元、非 GAAP 0.86 美元；EBITDA 2.785 亿美元（28.8%）；本季回购约 400 万股。\n\n分部门：AECO（建筑设计与施工软件）有机营收 +9%、有机 ARR +13%，是唯一加速的板块；Field Systems（含测绘/Geospatial、农业、移动控制）有机营收 +7%、有机 ARR 仅 +5%，公司在材料中写明「Civil Construction 与 Geospatial 增长稳健，主要由数据中心建设、公用事业与能源基础设施拉动」；T&L（运输与物流）为拖累项，并确认该分部发生商誉减值（宏观不确定性 + 软件估值倍数下移）。\n\n利润率与结构：非 GAAP 毛利率 70.5%，同比 -70bps。公司把毛利率与营业利润率下滑归因于「产品组合变化与 Field Systems 的去年同期高基数」——这是硬件占比回升的典型信号。Field Systems 是三分部中唯一营业利润率同比下滑者（30.5%）。\n\n指引：全年 2026 营收 39.10 亿~39.40 亿美元，非 GAAP 每股收益 3.63~3.69 美元；第四季度营收 10.31 亿~10.61 亿美元，非 GAAP 每股收益 1.13~1.19 美元。CEO Rob Painter 把叙事重心放在「物理与数字两个世界的连接与行业数据」，而非硬件本身。",
        "ai_comment": "这份财报对三维重建赛道的意义，不在营收 7%，而在两个比值：第一，Field Systems 的 ARR 增速（5%）不到 AECO（13%）的 40%，说明测绘侧的经常性收入黏性远低于施工软件侧；第二，Field Systems 是唯一营业利润率同比下滑的分部（30.5% vs 31.4%），而毛利率同比 -70bps 被归因于「产品组合」——翻译过来就是硬件（扫描仪、GNSS 接收机、激光雷达载荷）在收入中的占比回升了。\n\n口径要盯住三点：一是公司没有单独披露 Geospatial 产品线的绝对营收，只有「Civil Construction 与 Geospatial 合计稳健增长」的定性描述，任何把「Geospatial 增长 7%」当成精确数字的引用都是错的；二是增长归因被明确指向数据中心、公用事业、能源基建，这意味着 Trimble 的测绘业务已经与 AI 数据中心资本开支强绑定，一旦数据中心建设节奏放缓，这块最先失速；三是 T&L 的商誉减值虽不影响现金流，但说明公司过去「软件化转型」的资产定价正在被市场重新审视。\n\n前瞻：真正该看的是 2027 年一季度 Field Systems 的 ARR 能否回到 8% 以上，以及公司在 X9 扫描仪、BLK 之外是否会把 AI 自动建模做成订阅项单独收费。若 ARR 继续在 5% 附近徘徊而硬件出货靠基建项目撑量，Trimble 在三维采集链路上的角色会从「技术定义者」退为「工程配套供应商」——这对整个测绘硬件行业的估值中枢是压制性的。",
        "key_facts": [
          {
            "metric": "季度营收",
            "value": "9.668 亿美元",
            "baseline": "去年同期约 9.04 亿美元（同比 +7% 反推）",
            "condition": "2026Q3（截至 10 月 2 日），有机增速同为 +7%"
          },
          {
            "metric": "年度经常性收入 ARR",
            "value": "25.6 亿美元",
            "baseline": "同比 +11%，有机 +10%",
            "condition": "公司称创历史新高"
          },
          {
            "metric": "Field Systems（含 Geospatial）有机增速",
            "value": "营收有机 +7% / ARR 有机 +5%",
            "baseline": "AECO 有机营收 +9% / ARR +13%",
            "condition": "增长归因：数据中心建设、公用事业、能源基础设施"
          },
          {
            "metric": "非 GAAP 毛利率 / 调整后 EBITDA 利润率",
            "value": "70.5% / 28.8%",
            "baseline": "同比 -70bps / -110bps",
            "condition": "公司归因产品组合变化与去年高基数"
          },
          {
            "metric": "Q4 营收指引",
            "value": "10.31 亿~10.61 亿美元",
            "baseline": "本季 9.668 亿美元（环比 +6.6%~+9.7%）",
            "condition": "全年指引 39.10 亿~39.40 亿美元"
          }
        ],
        "position_relation": "承接 2026-11-04「Ouster 2026Q3」与 2026-11-04「AMD 2026Q3」（数据中心资本开支两条线），本次把「数据中心建设」这条线接进了测绘硬件侧：Ouster 说机器人客户买了 73% 的相机，Trimble 说测绘客户是为数据中心和电网买单——同期两家海外上市公司的财报给出了同一个判断，即三维感知硬件的需求正在被 AI 基建而不是「三维建模本身」拉动。与 2026-10-31 以来国内测绘装备（华测、中海达、南方测绘）的动向形成中西对照。",
        "signal_strength": "强",
        "tags": [
          "Trimble",
          "天宝",
          "财报",
          "测绘",
          "Geospatial",
          "实景三维",
          "数据中心基建"
        ],
        "terms": [
          {
            "term": "ARR（年度经常性收入）",
            "definition_mechanism": "把当季订阅与维护收入年化后得到的指标（当季订阅+维护收入 ÷ 当季天数 × 365），用来衡量软件/服务类收入的稳定性，剔除了单次硬件销售的波动",
            "definition_contrast": "与「营收」并列阅读：营收中含硬件一次性收入，ARR 只含会续费的收入，两者增速背离时说明增长质量在变化（本例 Field Systems 营收 +7% 但 ARR 仅 +5%）"
          },
          {
            "term": "有机增速（organic growth）",
            "definition_mechanism": "剔除汇率波动与近 12 个月内并购/剥离影响后的内生增速，用于判断业务本身的真实扩张速度",
            "definition_contrast": "与表观增速（reported growth）相对；并购驱动型公司的表观增速会显著高于有机增速"
          }
        ],
        "sources": [
          {
            "url": "https://www.sec.gov/Archives/edgar/data/864749/000086474926000119/a2026q3-8kex991.htm",
            "type": "official"
          },
          {
            "url": "https://www.sec.gov/Archives/edgar/data/864749/000086474926000119/trmb-20261104.htm",
            "type": "official"
          },
          {
            "url": "https://news.trimble.com/",
            "type": "official"
          },
          {
            "url": "https://s202.q4cdn.com/922416715/files/doc_financials/2026/q3/Trimble-Q3-26-Earnings-Supplement-REVISED.pdf",
            "type": "data"
          }
        ],
        "date": "2026-11-04",
        "notes": "财报由美东 11-04 盘前（北京时间 11-04 20:00 前后）发布，公司新闻稿与 8-K 同日，落在报告日 2026-11-05 窗口（11-04 08:00~11-05 08:00）内。营收、ARR、利润率、指引取自 SEC 8-K 附件 99.1 原文；分部有机增速与「数据中心/公用事业/能源基建」增长归因取自公司 Q3 财报补充材料（Earnings Supplement）。Division 绝对营收为前三季度累计口径，不是单季。Geospatial 未单独披露绝对营收，仅有定性描述。"
      },
      {
        "item_id": "2026-11-05-A-002",
        "category": "Hardware",
        "title": "速腾聚创启用全球首条数字化激光雷达全自动产线：单线 6 人、年产 50 万台，基地规划产能 400 万台",
        "one_line_judgment": "当激光雷达的竞争从「线数/芯片」转向「每 8 秒下线一台的良率与检测项」，赛道门槛就从算法层面被搬到了制造工程层面——这对还没有百万级产线的玩家是最硬的一道墙。",
        "image": "",
        "ai_summary": "大白话：速腾聚创在深圳启用了一条「几乎不用人」的激光雷达生产线。整条线 100 多台设备、70 多道工序，总装环节只要 6 个人看着，一年能造 50 万台，平均 8 秒下线一台。更值得注意的是检测：每一台产品都要过 3640 多项指标，全自动检验覆盖率 98%。这意味着激光雷达这门生意已经从「谁能把东西做出来」变成「谁能又便宜、又稳定、又大规模地产出来」。",
        "detailed_info": "2026 年 11 月 4 日，RoboSense 速腾聚创（HKEX: 02498）宣布全球首条数字化激光雷达全自动生产线正式启用，落址深圳南山智造（红花岭基地）——该基地是全国首个「工业上楼」示范项目，园区通过螺旋盘道与多层高架物流平台，让货车可直接抵达产线所在楼层。\n\n产线参数（公司口径）：贯通精密装配、点胶、AA 光调、标定、测试及包装等环节，配置 100 余台高精密自动化设备，覆盖 70 余道工序；总装环节仅需 6 名作业人员协同系统运行，综合自动化率 99%，单线年产能 50 万台。数字化生产管理系统实现生产数据 100% 全流程追溯，全自动检验覆盖率 98%；全自动标定系统要求每台产品经历老化测试、标定测试与整机性能测试，围绕光学、电气、机械、声学及功能安全五个维度设置 3640 余项检测指标。\n\n产能底座：MARS 智能制造基地已拥有超 22 条自动化产线，平均每 8 秒下线一台数字化激光雷达，规划年产能 400 万台。红花岭基地已集聚速腾聚创、众擎机器人、越疆科技等企业，形成「上下楼就是上下游」的垂直配套——一台上午下线的雷达，无需长途运输即可进入同园区机器人厂商的开发与测试环节。\n\n量产数据（公司 10 月 9 日港交所自愿公告与英文官网同步披露）：2026 年第三季度激光雷达总销量 59.56 万台，同比 +220.9%；其中 ADAS 45.04 万台（+200.1%）、机器人及其他 14.52 万台（+309.0%）。前三季度累计销量 131.48 万台，其中 ADAS 88.70 万台、机器人 42.78 万台——已超过 2025 年全年 91.20 万台。机器人客户超 3400 家。",
        "ai_comment": "这条产线的真正信息量不在「50 万台」，而在三个比值：一是 6 人 / 50 万台，即人均年产 8.3 万台，这个数字把人工成本从成本结构中几乎抹掉，意味着价格战的空间被制造效率而非芯片成本重新定义；二是 3640 项检测指标 / 98% 全自动检验，检测项数量是产品一致性的硬约束，通常在车规客户审核中被逐项验证，对外可以当作进入 Tier1 供应链的「准入证明」；三是 22 条线 / 8 秒一台 / 400 万台规划产能，与前三季度 131 万台的实际销量相比，产能利用率约三分之一，说明 400 万台是「为 2027~2028 年机器人放量预留」而非当期需求。\n\n口径提醒：公司新闻稿把这条线称为「全球首条数字化激光雷达全自动生产线」，属于企业自述的「全球首条」，行业内禾赛此前已公开宣称核心工序自动化率 100%、每 10 秒下线一台，两家口径不可直接对比（速腾强调「全自动整线+全流程追溯」，禾赛强调「核心工序」），引用时应并列标注而非取其一。\n\n前瞻：该盯的不是产能数字，而是两个下游指标——机器人激光雷达单季销量能否从 14.52 万台继续爬坡（这是产线扩张的真实需求来源），以及 2027 年一季度产能利用率是否回升。如果机器人侧出货不达预期，400 万台规划产能会变成折旧压力，反过来压低毛利率；反之，若 3400 家机器人客户开始复购并向空间相机、触觉传感器、关节模组扩展，速腾就真正完成了从「雷达供应商」到「机器人零部件平台」的身份转换。",
        "key_facts": [
          {
            "metric": "单线年产能 / 自动化率",
            "value": "50 万台 / 99%",
            "baseline": "总装环节 6 名作业人员",
            "condition": "100 余台设备、70 余道工序，深圳南山红花岭基地"
          },
          {
            "metric": "节拍与基地产能",
            "value": "平均 8 秒下线一台；基地规划 400 万台/年",
            "baseline": "基地现有超 22 条自动化产线",
            "condition": "MARS 智能制造基地，公司口径"
          },
          {
            "metric": "检测指标数与检验覆盖率",
            "value": "3640 余项检测指标 / 全自动检验覆盖率 98%",
            "baseline": "生产数据 100% 全流程追溯",
            "condition": "覆盖光学、电气、机械、声学、功能安全五维度"
          },
          {
            "metric": "2026 前三季度销量",
            "value": "131.48 万台（ADAS 88.70 万 / 机器人 42.78 万）",
            "baseline": "2025 年全年 91.20 万台",
            "condition": "港交所自愿公告，未经审核运营数据"
          },
          {
            "metric": "2026Q3 单季销量",
            "value": "59.56 万台（+220.9%）",
            "baseline": "ADAS +200.1%、机器人 +309.0%",
            "condition": "机器人及其他 14.52 万台"
          }
        ],
        "position_relation": "与 2026-11-03「禾赛 Yole 份额第一 + 毕加索 SPAD-SoC」构成「同一赛道的制造 vs 芯片两条叙事」；与 2026-11-04「Ouster Q3 出货 2.7 万台、雷达仅占 27%」形成需求结构对照（Ouster 的机器人侧靠相机，速腾的机器人侧靠雷达）；与 2026-11-04「速腾完成出售具身机器人整机业务」是同一战略的两步——先砍掉整机、再把零部件产能拉满。",
        "signal_strength": "强",
        "tags": [
          "速腾聚创",
          "RoboSense",
          "激光雷达",
          "智能制造",
          "产能",
          "机器人感知"
        ],
        "terms": [
          {
            "term": "AA 光调（Active Alignment）",
            "definition_mechanism": "在镜头与传感器组装时通电采集实拍图像，实时计算并调整两者相对位置与倾角，使光轴对准误差最小化后再固化，用于高一致性的光学模组量产",
            "definition_contrast": "区别于被动对准（Passive Alignment，靠机械定位精度保证），AA 精度更高但单站节拍更长，是激光雷达/车载相机产线的关键瓶颈工序"
          },
          {
            "term": "工业上楼",
            "definition_mechanism": "把原本平铺的工业厂房垂直叠加到高层楼宇中，通过盘道与货运电梯解决大型设备与物料运输，从而在城市核心区就近布局精密制造",
            "definition_contrast": "区别于传统「厂区+仓储」的平面布局，其价值在于把供应链上下游压缩到同一楼宇内，缩短打样与迭代周期"
          }
        ],
        "sources": [
          {
            "url": "https://www.robosense.ai/en/news-show-2004",
            "type": "official"
          },
          {
            "url": "https://www1.hkexnews.hk/listedco/listconews/sehk/2026/1009/2026100900006_c.pdf",
            "type": "official"
          },
          {
            "url": "https://www.nfnews.com/content/O3GARpANo0.html",
            "type": "news"
          },
          {
            "url": "https://www.163.com/dy/article/LATPGF620511B8LM.html",
            "type": "news"
          }
        ],
        "date": "2026-11-04",
        "notes": "产线于 11-04 晚间宣布启用（多家媒体同步于 19:00~20:00 发布），落在报告日 2026-11-05 窗口内。产线参数（50 万台、6 人、99%、3640 项、98%）来自公司新闻稿口径，经南方+、IT之家、界面、星岛等多家转载一致；销量数据取自公司 10-09 港交所自愿公告（未经审核），二者为不同事件，此处仅作背景引用。「全球首条」为公司自述，禾赛此前宣称核心工序自动化率 100%、每 10 秒一台，口径不同不做比较。",
        "extra_note": ""
      },
      {
        "item_id": "2026-11-05-A-003",
        "category": "Research",
        "title": "普林斯顿 SSoN 基准：跨视角找「假图」人类 83.3%、最强 VLM 仅 39.7%，多数模型低于 25% 瞎猜线",
        "one_line_judgment": "三维重建做得再好，也不等于模型「理解」了三维空间——SSoN 把「把模型送回三维重建」这个惯性解法直接证伪：接入传统重建流程只带来小幅提升，而最有效的补丁是给模型真实相机参数与定向微调。",
        "image": "",
        "ai_summary": "大白话：普林斯顿出了一套考题，考的不是「你能不能重建出三维」，而是「你能不能看出这四张照片里有一张不是同一个房间」。人答对 83.3%，最强的大模型只答对 39.7%，大多数模型连四选一乱猜的 25% 都不到——因为它们看到「长得不一样」就选，却判断不出这种不一样到底是换了个角度还是房间真被改了。更扎心的是实验：把三维重建流程接进来帮忙，几乎没用；真正有用的是直接告诉模型当初拍照时相机在哪、朝哪。",
        "detailed_info": "普林斯顿大学 AI Lab 团队发布空间智能评测基准 SSoN（Same Space or Not，论文 arXiv:2610.23959，第一作者 Huizi Cao，合作者含 Manling Li、Mengdi Wang、Shilong Liu 等），用于检验模型能否在跨视角条件下维持「同一个场景」的连贯表征。任务设计：每题给 4 张静态室内图像，其中 3 张来自未改变的三维场景、1 张来自经 3D 编辑的变体，模型不仅要指出哪一张不一致，还要解释为什么不一致——不给指定参考图、不标注异常物体。数据集规模 1,000 题、4,000 张图像，覆盖 7 个室内场景来源、6 类受控三维编辑（交换、细节变化、镜像、删除、移动、旋转）。\n\n成绩（完整 1,000 题口径）：人类准确率 83.3%；受测 6 个视觉语言模型中，GPT-6 Astra Pro 以 39.7% 领先，其余 5 个全部低于四选一的 25% 随机基线。论文进一步用指标 True solve 区分「选对但解释不成立」：6 个模型合计 1,368 次正确选择中，29.5% 未通过解释有效性检查，最高模型成绩由 39.7%（答案准确率）降至 34.9%（True solve）。\n\n能力短板分布：物体移动与视角旋转类编辑是模型共同盲区，错误率最高；交换与细节变化相对容易。研究团队另做对照：换用 CLIP/ViT/DINOv2 系列共 17 个视觉编码器，按图像特征相似度挑「最不像的那张」，准确率仅 16.9%~21.7%，全部低于随机线——说明「找外观最离群者」这一朴素策略被专门构建的强干扰视图（合法但有误导性的视角）系统性带偏。\n\n干预实验（团队自述）：①文本提示引导、②接入传统三维重建流程，均只带来小幅提升；③直接提供真实相机参数，表现明显改善，但仍无法答对半数以上题目；④针对 SSoN 任务做定向监督微调后，在未见过的全新房间上准确率近乎翻倍（团队已公开 SSoN-Qwen2.5-VL-7B-LoRA 微调权重）。",
        "ai_comment": "这项基准的价值，是把三维重建社区一个长期默认的前提拆开了：重建出一个几何正确的场景，并不自动赋予下游模型空间推理能力。实验里「接入传统重建流程只带来小幅提升」这一条最具杀伤力——它意味着把 3DGS/NeRF 当作 VLM 的「空间外挂」这条路，至少在跨视角一致性判断任务上收益有限；而「给真实相机参数」效果显著，说明模型缺的不是几何，而是位姿先验这一层显式接口。\n\n需要保留的地方有三点：第一，随机基线 25% 是「等概率盲猜」的期望，不是能力下限，模型低于 25% 反映的是被强干扰视图「系统性反向诱导」，不能简单读成「不如瞎猜」；第二，受测模型为 6 个 VLM，具体型号清单与是否包含国内开源模型，公开报道未完整披露，横向比较时需注意样本面；第三，定向微调「近乎翻倍」是在同分布任务上取得，论文同时报告了未见房间的迁移，但绝对水平仍远低于人类 83.3%，不宜解读为「问题已解决」。\n\n前瞻：真正该盯的是后续是否有工作把「相机参数作为一等输入」做进 VLM 的预训练目标，而不是在推理时外挂。若 2027 年上半年出现一批以位姿/深度为原生模态的空间 VLM，并能在 SSoN 类任务上突破 50%，那么三维重建的商业位置会从「做模型」滑向「做数据与标定」——这恰好与我们近两日看到的 Ouster（卖传感器平台）、其域（卖采集与格式）的路线吻合。",
        "key_facts": [
          {
            "metric": "人类 vs 最强 VLM 准确率",
            "value": "83.3% vs 39.7%",
            "baseline": "四选一随机基线 25%",
            "condition": "完整 1,000 题；GPT-6 Astra Pro 为最高分模型"
          },
          {
            "metric": "解释有效性（True solve）",
            "value": "最高模型 34.9%",
            "baseline": "答案准确率 39.7%",
            "condition": "1,368 次正确选择中 29.5% 解释不成立"
          },
          {
            "metric": "视觉编码器离群视图策略",
            "value": "16.9%~21.7%",
            "baseline": "随机基线 25%",
            "condition": "CLIP / ViT / DINOv2 共 17 个编码器，全部低于随机线"
          },
          {
            "metric": "评测规模",
            "value": "1,000 题 / 4,000 张图",
            "baseline": "7 个室内场景来源、6 类 3D 编辑",
            "condition": "3 张真实视图 + 1 张编辑视图，无标注目标"
          },
          {
            "metric": "干预效果排序",
            "value": "真实相机参数 > 定向微调（迁移近乎翻倍）> 三维重建流程 ≈ 提示引导（小幅）",
            "baseline": "基线最高 39.7%",
            "condition": "定向微调后仍未达半数，团队已开源 LoRA 权重"
          }
        ],
        "position_relation": "与 2026-10-28 以来多篇「前馈式重建 / 3DGS 提升几何精度」的条目形成反向张力：那些工作在优化「重建得像不像」，SSoN 在问「重建之外模型懂不懂空间」。与 2026-11-05 百度 Apollo World、优必选 Thinker-WM 两条世界模型条目共同构成「空间智能三问」：模型能不能理解空间（SSoN）、能不能推演空间（世界模型）、能不能从真实空间造出可用资产（Thinker-Sim / 其域）。",
        "signal_strength": "强",
        "tags": [
          "SSoN",
          "普林斯顿",
          "空间智能",
          "基准测试",
          "VLM",
          "跨视角一致性"
        ],
        "terms": [
          {
            "term": "跨视角一致性",
            "definition_mechanism": "同一三维场景在不同相机位姿下拍摄的图像，其可见内容会变，但物体间的空间关系（谁在谁左边、谁挡住谁、距离远近）必须保持不变；模型需区分「因视角变化导致的外观差异」与「场景本身被修改导致的真实差异」",
            "definition_contrast": "与「单图识别」相对：单图识别只需匹配语义与外观，跨视角一致性要求模型在内部维持一个可变换的三维场景表征"
          },
          {
            "term": "True solve",
            "definition_mechanism": "SSoN 提出的复合评分：答案选择正确，且给出的解释符合图像事实、足以支持跨视角矛盾的判断，才计为一次真解",
            "definition_contrast": "与「答案准确率」相对；二者差值反映模型「蒙对但说不清」的比例，本例中该比例为 29.5%"
          }
        ],
        "sources": [
          {
            "url": "https://arxiv.org/abs/2610.23959",
            "type": "paper"
          },
          {
            "url": "https://news.qq.com/rain/a/20261104A056BD00",
            "type": "news"
          },
          {
            "url": "https://www.donews.com/news/detail/1/6764961.html",
            "type": "news"
          }
        ],
        "date": "2026-11-04",
        "notes": "论文于 2026-10-09 上传 arXiv（v1），中文媒体在 11-04 集中报道，按报道日归档至报告日 2026-11-05。成绩数据（83.3% / 39.7% / 34.9% / 29.5% / 16.9%~21.7%）在腾讯新闻、DoNews、AIBase 三源一致，论文摘要可核；受测 6 个 VLM 的完整型号清单公开报道未全列，仅确认最高分为 GPT-6 Astra Pro。项目主页 https://sson.aisexam.com/ 与代码库在报道中给出，本次未逐一打开验证。"
      },
      {
        "item_id": "2026-11-05-B-001",
        "category": "Application",
        "title": "百度首次披露 Apollo World 世界模型：交通参与者全部建为 AI 智能体，虚拟路测「日行十万公里」",
        "one_line_judgment": "世界模型的分水岭不在画质，而在「其他交通参与者会不会被你的动作改变行为」——把行人车辆建成有决策能力的智能体，是把世界模型从视频渲染器升级为驾驶考试考官的那一步。",
        "image": "",
        "ai_summary": "大白话：以前的自动驾驶仿真，路上的其他车和行人都是按剧本走的「道具」，你减速它也不会让路。百度这次发布的 Apollo World 把每个交通参与者都变成了会自己拿主意的 AI，你变道它可能加速、你让行它可能先行，而且还宣传「一天能跑十万公里虚拟路测」，相当于一个带安全员的真车连跑约三年。萝卜快跑已经在用这套系统做全球测试。",
        "detailed_info": "2026 年 11 月 3 日，百度在深圳举办「百度 AI Day·Apollo 专场」，首次对外披露面向物理 AI 的智能体驱动全模态世界模型 Apollo World，并提出世界模型的「2+3」判断标准（报道未完整展开该标准的分项定义）。\n\n技术定位（公司口径）：把虚拟场景内所有交通参与者建模为具备决策与交互能力的 AI 智能体，而非按脚本运行的道具；无人车减速、变道、让行都可能引发其他参与者的不同反应，从而让 AI Driver 在动态博弈中训练与检验。支持无人车在虚拟城市任意起终点通行，即「完整接单行程」级别的连续推演，而非几十秒的孤立片段。百度智能驾驶事业群组首席架构师、技术委员会主席王亮称，世界模型不能只做「生成炫酷视频的画师」，更要成为验证无人驾驶安全性的「考官」；世界模型负责人杨泽补充，该技术栈可拓展至机器人等更广泛的物理 AI 场景。\n\n效率口径：行业人士分析称 Apollo World 可「日行十万公里」，一天完成的虚拟路测里程约等于一辆配安全员的真实路测车连续测试三年；报道称其支持毫秒级实时交互与连续数十分钟的完整接单推演。\n\n运营数据（公司披露）：萝卜快跑已落地全球 28 座城市，累计完成超 2300 万次出行服务，自动驾驶总里程突破 3.5 亿公里，其中全无人驾驶里程超 2.4 亿公里，已在左右舵市场开展无人驾驶实践；端到端全无人运营超百万公里。公司称萝卜快跑是中国唯一以端到端技术规模化运行 L4 的平台。\n\n需要标注的日期口径：证券时报口径为「11 月 3 日」在深圳举行的专场；新浪科技口径写「11 月 4 日下午消息」，属媒体发稿时间差异，事件本身发生在 11-03。",
        "ai_comment": "Apollo World 的关键创新不在「生成」，而在「被生成物的主体性」：传统仿真里其他交通参与者的行为是外生变量，无人车的行为不改变它们；而一旦对方也是智能体，无人车的每一次让行/抢行都会改变后续场景的走向，这本质上是把「博弈」引入了训练数据分布。这条路径与 Waymo 用 Genie 3 做自动驾驶世界模型、李飞飞 World Labs 的 Marble（专注三维空间生成）形成三种取向：百度押交互因果、Waymo 押生成式场景多样性、World Labs 押静态空间高保真。\n\n需要保留的地方：第一，「日行十万公里」是行业人士测算而非公司量化披露，且「相当于真车三年」隐含了真实路测车日均里程的假设，不宜当作硬指标引用；第二，多模态（全模态）具体指哪几种模态、是否接入激光雷达点云级仿真，公开报道未展开，这决定了它能否替代高保真传感器仿真；第三，萝卜快跑的 3.5 亿公里与 2.4 亿公里全无人里程为公司自述口径，未经第三方审计。\n\n前瞻：真正的验证指标是「虚拟里跑出来的能力能不能迁移上车」。公司称端到端全无人模型已上车、上百辆无安全员车辆在跑，若能在 2027 年一季度看到「在 Apollo World 中新增场景（例如某类罕见路口）→ 实车接管率下降」的因果链数据，世界模型才算真正进入工程闭环；否则仍停留在「更好的仿真器」。",
        "key_facts": [
          {
            "metric": "虚拟路测效率",
            "value": "日行十万公里（行业人士测算）",
            "baseline": "约等于 1 辆配安全员真车连续测试 3 年",
            "condition": "非公司量化披露，属分析口径"
          },
          {
            "metric": "萝卜快跑运营规模",
            "value": "28 座城市 / 2300 万次出行 / 3.5 亿公里",
            "baseline": "其中全无人里程 2.4 亿公里",
            "condition": "公司披露，未经第三方审计"
          },
          {
            "metric": "世界模型判定标准",
            "value": "「2+3」标准",
            "baseline": "强调物理规律与行为因果而非渲染画质",
            "condition": "公开报道未完整列出各分项定义"
          },
          {
            "metric": "交通参与者建模方式",
            "value": "全部建模为具备决策与交互能力的 AI 智能体",
            "baseline": "传统仿真为脚本驱动道具",
            "condition": "支持任意起终点的完整接单行程推演"
          }
        ],
        "position_relation": "与 2026-11-03「大晓机器人 Mundo：几张照片搭出可物理交互的机器人世界模型」同属「世界模型走向可交互因果」这一支；与 2026-11-05「优必选 Thinker-WM 三项基准第一」构成国内世界模型的双线（自动驾驶 vs 具身）；与 2026-11-04「AMD 数据中心营收 +97%」是算力侧的同一逻辑两端。",
        "signal_strength": "强",
        "tags": [
          "百度",
          "Apollo World",
          "世界模型",
          "萝卜快跑",
          "自动驾驶仿真",
          "智能体"
        ],
        "terms": [
          {
            "term": "智能体驱动的世界模型",
            "definition_mechanism": "把场景中的其他主体（车辆、行人）建模为具备感知-决策-行动闭环的 AI 智能体，使其行为随环境与其他主体动作动态变化，从而产生非脚本化的场景演化",
            "definition_contrast": "区别于「视频生成式世界模型」——后者输出的是符合物理直觉的画面，但场景外生、不随被训练主体的动作改变"
          },
          {
            "term": "端到端自动驾驶",
            "definition_mechanism": "由单一神经网络直接从传感器输入映射到车辆控制指令，省去感知-预测-规划-控制的人工模块化拆分，能力上限依赖数据规模与分布",
            "definition_contrast": "与模块化栈（perception→prediction→planning）相对，后者可解释性强、边界清晰，但对长尾场景的泛化依赖规则堆叠"
          }
        ],
        "sources": [
          {
            "url": "https://www.163.com/dy/article/LAT031U0053469RG.html",
            "type": "news"
          },
          {
            "url": "https://new.qq.com/rain/a/20261104A0A0WT00",
            "type": "news"
          },
          {
            "url": "https://news.qq.com/rain/a/20261104A0C29R00",
            "type": "news"
          }
        ],
        "date": "2026-11-03",
        "notes": "发布活动在 11-03 举行，媒体集中报道于 11-04（证券时报、新浪科技、环球网、观点网），落在报告日 2026-11-05 窗口内，按报道日归档。活动日期存在两版口径：证券时报/环球网写「11 月 3 日」，新浪科技写「11 月 4 日下午」，本条目以「11-03 举办、11-04 报道」并列标注。「日行十万公里」为行业人士测算，非公司量化披露。百度官方技术博客未见单独发布，本条目来源全部为媒体报道。"
      },
      {
        "item_id": "2026-11-05-B-002",
        "category": "Application",
        "title": "优必选 Thinker-Sim 仿真平台细节公开：Thinker-GS 做真实场景重建，单节点 8 卡日均合成 390 小时数据",
        "one_line_judgment": "具身智能的「数据工厂」正在把三维重建变成产线工序——重建质量不再是论文指标，而是决定仿真数据能不能直接喂给 VLA 的良率参数。",
        "image": "",
        "ai_summary": "大白话：优必选做了一个「把真实工厂搬进电脑」的平台。先用自研的重建算法把真实车间扫成三维场景，再自动生成机器人、设备、工人这些可以摆放的资产，然后在里面大批量生成训练数据。官方说一台 8 卡服务器一天能产出 390 小时的仿真数据，渲染效率比过去快 67.3%。对做三维重建的人来说，这句话的意思是：重建已经从「做出来给人看」变成「做出来给机器人练手」。",
        "detailed_info": "2026 年 11 月 2 日，优必选（HKEX: 9880）正式发布具身智能仿真平台 Thinker-Sim，以 Real2Sim2Real 为核心，覆盖「真实场景数字化—规模化仿真数据合成—机器人能力评测」三段闭环。11-04 多家媒体与行业机构（21 财经、同花顺、深圳市机器人协会）对技术细节做了集中披露。\n\n场景重建环节：依托自研 Thinker-GS 高保真场景重建算法与全流程 SimReady 资产自动化生成技术，实现「真实场景采集 → 三维重建 → 仿真资产生成」的转换。工业工厂场景按真实产线环境重建，还原厂区空间布局、环境结构与视觉细节，构建静态背景场景；在此基础上可按训练、数据采集、评测等不同任务加载机器人、生产设备、人员等前景资产，组装成多样化可交互仿真环境。商业展厅场景同样支持生成具备真实视觉表现的数字孪生环境。SimReady 自动化资产生成覆盖图文驱动的三维资产批量生成、低模拓扑优化、视觉材质生成与碰撞体自动配置。\n\n数据合成环节（公司口径）：自研渲染引擎渲染效率提升 67.3%；单节点（8 GPU）日均 390 小时仿真数据合成产能；自研 SIL/HIL 通信模块效率提升超 400%。\n\n评测与易用性：搭建面向感知、导航、操作任务的统一仿真评测体系，通过光照、纹理、材质等维度随机化复现真实环境不确定性；内置标准化任务模板，可视化工作流可适配 90% 以上目标仿真场景；自研 Ulab-Agent 支持以自然语言完成场景创建、环境配置、随机化与任务调度。\n\n同批披露的自研世界模型 Thinker-WM：在 WorldOlympiad、EWMBench、WorldArena 1.0 Track-1 三项基准评测中全部排名第一，核心创新是在表征层把视觉、几何与机器人动作做多模态统一建模，以统一动态 Transformer（UDT）为核心、把深度信息作为原生生成模态（与行业常见的模块拼接方案不同）。截至 2026 年上半年，优必选累计授权专利 3112 件（发明专利 1857 件），上半年研发投入超 3 亿元，全年预计 7 亿元。",
        "ai_comment": "Thinker-Sim 里最该被三维重建从业者注意的，是「SimReady」这个前缀：它不是「重建得好看」，而是「重建结果能直接进仿真器」——要求拓扑可优化、材质可渲染、碰撞体可自动生成。这把重建的评价标准从 PSNR/SSIM 换成了「下游任务能不能用」，也解释了为什么公司强调 SimReady 资产是「自动化生成」而非人工修模：人工修模成本才是仿真数据贵的主因。\n\n数据要打折看：390 小时/日是「合成数据时长」，不等于有效训练数据量——仿真数据与真实分布的差距决定了这些小时里有多少能被直接使用；渲染效率 +67.3% 是相对自研上一代引擎，缺少绝对基准（与 Omniverse/Isaac Sim 的对标未披露）。Thinker-WM 的「三项基准第一」为公司自述，三项基准的题目构成与参赛方公开信息有限，建议与后续第三方复核对照阅读。\n\n前瞻：该盯的是两个转化率——真实场景重建到 SimReady 资产的自动转化率，以及仿真训练到真机部署的成功率迁移。如果 2027 年能看到「某条产线用 Thinker-Sim 生成的数据把部署周期从 N 周压到 M 周」的具体案例，这条「重建→资产→数据→部署」的链路才算闭环；否则它仍是一个更精致的仿真工具。",
        "key_facts": [
          {
            "metric": "仿真数据产能",
            "value": "单节点（8 GPU）日均 390 小时",
            "baseline": "自研渲染引擎效率 +67.3%",
            "condition": "公司口径，合成数据时长而非有效训练量"
          },
          {
            "metric": "通信与场景适配",
            "value": "SIL/HIL 通信效率 +400% 以上；可视化工作流适配 90% 以上目标场景",
            "baseline": "内置标准化任务模板",
            "condition": "支持 Ulab-Agent 自然语言编排"
          },
          {
            "metric": "场景重建算法",
            "value": "Thinker-GS",
            "baseline": "配套 SimReady 资产自动化生成",
            "condition": "支持工厂产线与商业展厅两类真实场景重建"
          },
          {
            "metric": "Thinker-WM 世界模型评测",
            "value": "WorldOlympiad / EWMBench / WorldArena 1.0 Track-1 三项第一",
            "baseline": "以深度信息为原生生成模态的 UDT 架构",
            "condition": "公司自述，第三方复核信息有限"
          },
          {
            "metric": "研发投入与专利",
            "value": "上半年研发超 3 亿元、全年预计 7 亿元；授权专利 3112 件",
            "baseline": "发明专利 1857 件",
            "condition": "截至 2026 年上半年"
          }
        ],
        "position_relation": "与 2026-11-03「简智 / GenRobot / 机器科学一天三笔融资砸向具身数据」是同一需求的两端：那批公司在采集真实数据，Thinker-Sim 在合成数据；与 2026-11-05「SSoN 基准」形成互补——合成数据能造出场景，但模型未必理解空间。与其域创新 LCC 打通 Omniverse 的路线相比，优必选选择自建闭环（自研重建+自研渲染+自研评测），而非依附第三方生态。",
        "signal_strength": "中",
        "tags": [
          "优必选",
          "Thinker-Sim",
          "Thinker-GS",
          "具身智能",
          "仿真数据",
          "Real2Sim2Real"
        ],
        "terms": [
          {
            "term": "Real2Sim2Real",
            "definition_mechanism": "把真实场景先数字化为仿真环境（Real2Sim），在仿真中大规模合成训练数据并训练策略（Sim2Real 的反向准备），再把训练好的能力迁移回真实机器人（Sim2Real）",
            "definition_contrast": "区别于纯合成数据（从零建模虚拟场景），Real2Sim 的起点是真实重建，优势是缩小仿真与现实的视觉/几何分布差异"
          },
          {
            "term": "SimReady 资产",
            "definition_mechanism": "同时具备视觉材质、合理拓扑与碰撞体等物理属性的三维模型，可直接被仿真器加载并参与物理计算，无需人工二次处理",
            "definition_contrast": "区别于仅用于展示的渲染级资产（只有外观、无碰撞体与合理拓扑），后者进仿真需大量人工修模"
          }
        ],
        "sources": [
          {
            "url": "http://mp.weixin.qq.com/s?__biz=MzU3MjQ2MDcwNQ==&mid=2247781200&idx=3&sn=4ca44e8b5ff46c53afccfe5b1759e438&chksm=fd02e673809ec57f98ecff998c1a4cc47ed67efe4ec44d65bda708fa9dd975b48ac999b3483f#rd",
            "type": "official"
          },
          {
            "url": "https://stock.10jqka.com.cn/hks/20261104/c681462847.shtml",
            "type": "news"
          },
          {
            "url": "https://www.163.com/dy/article/LATJIG2M05118I96.html",
            "type": "news"
          }
        ],
        "date": "2026-11-02",
        "notes": "平台于 11-02 正式发布，技术细节（渲染效率 67.3%、单节点 390 小时、通信 +400%、90% 场景适配）在 11-04 经 21 财经、同花顺、深圳市机器人协会等集中披露，落在报告日 2026-11-05 窗口内，按报道日归档。所有指标均为公司口径。Thinker-WM「三项基准第一」为 11-04 同花顺报道首次对外披露，基准细节未公开。发布日期媒体存在「11-02 发布」「11 月 2 日」「近日发布」等表述，以 11-02 为准。"
      },
      {
        "item_id": "2026-11-05-B-003",
        "category": "Business",
        "title": "赛尔智控完成近亿元天使轮融资：手持三维扫描仪累计出货近万台，2027 年初推消费级 3D/4D 空间相机",
        "one_line_judgment": "消费级空间相机的行业节点正在被三股力量同时推向 2027：固态激光雷达降本、3DGS 重建成熟、端侧算力释放——但真正的赌注不是硬件，而是「三维资产能否变成可高频分发的短视频」。",
        "image": "",
        "ai_summary": "大白话：深圳一家叫赛尔智控的公司拿到了近亿元天使轮。它原先给测绘和工程做手持三维扫描仪，卖了近一万台；现在想把同样的技术做成一千元级的消费相机——用户拿着它绕着房间走一圈，设备自动激光扫描、云端用 3DGS 重建，再由 AI 自动运镜，直接生成一条可以在朋友圈发的短视频。也就是说，它把「生成一个三维房间」这件低频的事，包装成了「发一条视频」这件高频的事。",
        "detailed_info": "2026 年 11 月 4 日，《科创板日报》报道：三维空间相机企业深圳赛尔智控科技有限公司完成近亿元人民币天使轮融资，由某上市公司旗下天程基金领投，知名产业投资方及财务投资方跟投，云岫资本担任独家财务顾问。雷峰网·鲸犀、投资界、商道创投网同日跟进，所载细节基本一致。\n\n公司画像：成立于 2019 年 12 月，创始人范恩强为 90 后、技术科班出身。早期发布多款航测相机覆盖航测市场，后推出手持三维激光扫描仪，累计出货近万台，主要应用于工程装修设计、测绘、文娱与具身智能等场景。投资人表述其具备「底层 SLAM、3DGS 重建算法的自主迭代能力」，不受制于开源方案。\n\n产品规划（C 端）：AI 原生 3D/4D 空间相机，计划 2027 年初开启众筹与交付。工作流为：内置激光雷达与多组相机以微秒级时间同步，在移动中捕获几何结构与纹理；数据直传云端，依托 3DGS 算法完成高精度三维重建，输出可任意视角漫游、缩放交互的数字空间；AI Agent 自动识别空间结构、理解空间语义、规划运镜路径，一键输出叙事型短视频。\n\n资金用途（创始人表述）：主要投向消费级 AI 原生空间相机的产品定义、核心算法迭代与供应链打磨，并推动 2027 年初的众筹与交付落地，同时用于团队与渠道建设。\n\n行业背景（报道口径）：3DGS 自 2023 年 SIGGRAPH 发表后，2024 年前后进入 Polycam、Luma AI、Scaniverse 等手机应用；2025 年起 Xgrids、3DMakerpro 等专业厂商在扫描仪硬件上原生输出高斯场景；2026 年 4 月 OpenUSD 正式批准对高斯泼溅数据的支持，可直接进入 Apple Vision Pro、英伟达 Omniverse 与 Pixar 工具链。",
        "ai_comment": "这笔融资的信息价值不在「近亿元」（A 轮前的天使，量级在同赛道属中等），而在它给出了一条明确的产品假设：三维资产的消费价值不在「资产本身」，而在「由资产自动生成的短视频」。这解释了一个长期困扰行业的矛盾——三维内容制作成本高但消费频次低；把交付物换成视频，等于把低频的「漫游」翻译成高频的「发布」。\n\n需要打折的地方：第一，融资金额只有「近亿元」的模糊口径，投资方为「某上市公司旗下天程基金」，未具名，无法核验；第二，B 端「出货近万台」是累计口径，未披露年均单价与收入，不能据此推算营收规模；第三，2027 年初「众筹与交付」是计划，同类消费级空间相机（如早期 3D 扫描硬件）普遍存在众筹跳票与交付延期风险，且千元级定价对内置固态激光雷达的 BOM 是硬约束，成本能否压到目标价位尚未验证。\n\n前瞻：该盯三个节点——2027 年初众筹的实际定价与交付时间、云端 3DGS 重建的单场景成本（这决定订阅模式能否成立）、以及「AI 自动运镜」生成视频的完播率数据。若三项均达标，空间相机才有机会成为独立品类；若只有前两项达标而内容不被消费，产品就会退化为「更贵的 3D 扫描仪」。",
        "key_facts": [
          {
            "metric": "融资轮次与金额",
            "value": "天使轮，近亿元人民币",
            "baseline": "领投方为某上市公司旗下天程基金",
            "condition": "云岫资本任独家财务顾问，投资方未具名"
          },
          {
            "metric": "B 端累计出货",
            "value": "手持三维激光扫描仪近万台",
            "baseline": "未披露收入与年均单价",
            "condition": "应用于工程装修设计、测绘、文娱、具身智能"
          },
          {
            "metric": "公司成立时间",
            "value": "2019 年 12 月",
            "baseline": "创始人范恩强（90 后）",
            "condition": "总部深圳"
          },
          {
            "metric": "消费级产品节奏",
            "value": "2027 年初开启众筹与交付",
            "baseline": "定位 AI 原生 3D/4D 空间相机",
            "condition": "售价未公布，创始人称目标「千元级」"
          }
        ],
        "position_relation": "与 2026-10-28 其域创新「手机 App 做三维重建」、2026-11-03「VAST 半年融资约 50 亿元」共同构成「三维采集与生成的资本—产品双线下沉」；与 2026-11-04「拓竹 H3C 把多材料打印拉到 16499 元」是消费硬件降本的同构案例。赛尔智控补上了词库中「消费级空间相机整机」这一空缺位（此前仅有其域、KIRI、影石等相邻主体）。",
        "signal_strength": "中",
        "tags": [
          "赛尔智控",
          "融资",
          "空间相机",
          "消费级 3D",
          "3DGS",
          "SLAM"
        ],
        "terms": [
          {
            "term": "空间相机",
            "definition_mechanism": "集成激光雷达或多目相机、自带定位与重建算法的一体化采集设备，可在移动中同步获取空间的几何与纹理，输出可交互的三维场景而非单张照片",
            "definition_contrast": "区别于传统全景相机（仅记录 360° 二维影像，无几何深度），也区别于专业手持扫描仪（精度更高但价格在数万元级）"
          },
          {
            "term": "3DGS（三维高斯泼溅）",
            "definition_mechanism": "用数百万个带位置、协方差、颜色与不透明度的三维高斯椭球表示场景，通过可微光栅化实现实时渲染，训练依赖多视角图像与相机位姿",
            "definition_contrast": "与 NeRF 的隐式表示相对：3DGS 是显式图元，渲染快、可编辑，但存储体积大，需专门压缩与格式支持"
          }
        ],
        "sources": [
          {
            "url": "https://www.chinastarmarket.cn/detail/2524538",
            "type": "news"
          },
          {
            "url": "https://www.shangdaovc.cn/h-nd-14832.html",
            "type": "news"
          },
          {
            "url": "https://www.163.com/dy/article/LASNJV5H05198R3E.html",
            "type": "news"
          }
        ],
        "date": "2026-11-04",
        "notes": "《科创板日报》11-04 09:47 首发，雷峰网·鲸犀为独家原报道（「近期完成」），投资界、商道创投网、AING 硬迹同日跟进。公司未发布官方新闻稿，官网与社交账号未检索到公告，本条目全部为媒体口径。融资金额为「近亿元」模糊表述，投资方以「某上市公司旗下天程基金」代称，未具名。"
      },
      {
        "item_id": "2026-11-05-B-004",
        "category": "Application",
        "title": "中国电影科学技术研究所 196.6 万元采购电影数字资产扫描建模方案：其域 Lixel L3 32 线移动扫描系统 37.3 万元中标",
        "one_line_judgment": "国家级电影科研机构把「大场景移动扫描 + 精细模型扫描 + 资产库」打成一个采购包，说明影视数字资产已经从「项目型外包」进入「院所需要自建生产线」的阶段。",
        "image": "",
        "ai_summary": "大白话：中国电影科学技术研究所花 196.6 万元买了一套「电影数字资产扫描与建模」的系统，分四样东西：一套大场景移动扫描设备、一套精细模型扫描设备、一套三维实景建模软件、一个高质量三维模型资产库。其中大场景那套用的是深圳其域创新的 Lixel L3（32 线），单价 37.3 万元。翻译一下：拍电影需要的「数字场景」正在变成一个可以被国家院所批量生产的东西。",
        "detailed_info": "2026 年 11 月 4 日 14:12，中国政府采购网发布《中国电影科学技术研究所电影数字资产扫描与建模解决方案购置中标公告》（项目编号 26CBIC-ZX-21037DY）。\n\n中标信息：供应商为北京浩宇天地测绘科技发展有限公司（北京市海淀区万寿路街道太平路 40 号 17 号楼 2-3 层），中标金额 196.6 万元，采用综合评分法，中标人最终得分 96.80。\n\n采购标的与单价（主要标的信息）：①电影大场景移动扫描系统 1 套，品牌型号「其域 Lixel L3 32 线」，单价 37.3 万元；②电影精细化模型扫描系统 1 套，浩宇定制，单价 49.6656 万元；③三维实景建模与制作处理系统 1 套，浩宇定制，单价 30.3344 万元；④高质量三维模型资产库 1 个，浩宇定制，单价 79.3 万元。四项合计 196.6 万元。\n\n评审与代理：评审专家 5 人（刘开贤、廖文芳、许幼文、李冉、王木旺）；代理服务费 2.5626 万元。\n\n结构解读：这是「硬件（集成商代理其域设备）+ 软件 + 资产库」的组合包，资产库单项（79.3 万元）占总额 40.3%，高于任何单台硬件——采购重心落在「可复用的数字资产」而非「采集能力」。其域 Lixel L3 在此作为移动扫描能力的指定机型进入国家级院所的采购清单。",
        "ai_comment": "这单金额不大，但结构很说明问题：硬件（37.3 万）只占 19%，而「高质量三维模型资产库」占 40%。这意味着采购方的痛点不是「扫不到」，而是「扫回来之后没有可复用的素材」——影视数字资产的核心成本在资产化与标准化，而不是采集。对设备厂商来说，这是一个需要警惕的信号：如果价值持续向资产库与软件迁移，单纯卖扫描硬件的议价空间会被压缩。\n\n需要保留的地方：第一，其域 Lixel L3 是由集成商浩宇天地作为整套方案的一部分供应，37.3 万元是该型号在本项目中的单价，不能等同于市场价格或渠道价；第二，其余三项为「浩宇定制」，无具体型号与技术参数，无法判断其实际能力与成本结构；第三，单笔政府采购不能代表行业规模，需与后续是否形成批量采购（如省级电影集团、影视基地）一起观察。\n\n前瞻：这类「院所自建数字资产生产线」的采购如果在一到两年内扩散到省级电影机构和大型影视基地，其域这类掌握移动扫描整机与格式（LCC/Omniverse 打通）的厂商会先受益；反之，如果只是单点示范项目，资产库将沉淀在院所内部，形不成产业级复用。",
        "key_facts": [
          {
            "metric": "项目总中标金额",
            "value": "196.6 万元",
            "baseline": "综合评分法得分 96.80",
            "condition": "项目编号 26CBIC-ZX-21037DY，中央单位采购"
          },
          {
            "metric": "其域 Lixel L3 32 线单价",
            "value": "37.3 万元 / 1 套",
            "baseline": "占项目总额 18.97%",
            "condition": "由集成商浩宇天地作为整套方案供应"
          },
          {
            "metric": "高质量三维模型资产库",
            "value": "79.3 万元 / 1 个",
            "baseline": "占项目总额 40.33%",
            "condition": "浩宇定制，为四项中单价最高项"
          },
          {
            "metric": "精细化模型扫描 + 实景建模系统",
            "value": "49.6656 万元 + 30.3344 万元",
            "baseline": "合计占项目总额 40.7%",
            "condition": "均为浩宇定制，未披露具体型号与参数"
          }
        ],
        "position_relation": "与 2026-10-28「其域创新 闽宁镇 23.5km² 空地一体 3DGS 数字模型」、2026-11-03「其域 LCC 格式打通 Omniverse」构成其域在影视侧的连续三笔证据（作品—格式—采购）；与 2026-11-04「河南数字孪生路网」同属「三维资产被机构化采购」的平行案例。",
        "signal_strength": "中",
        "tags": [
          "其域创新",
          "Lixel L3",
          "政府采购",
          "电影数字资产",
          "三维扫描",
          "实景建模"
        ],
        "terms": [
          {
            "term": "高质量三维模型资产库",
            "definition_mechanism": "把扫描重建得到的场景/道具整理为带标准命名、LOD 分级、材质与元数据的可复用资产集合，使同一资产能跨项目被直接调用而非重新采集",
            "definition_contrast": "区别于「原始点云/模型文件」——后者未经整理，无法直接进入制作流程，复用成本高"
          },
          {
            "term": "移动扫描系统",
            "definition_mechanism": "把激光雷达、相机与惯性/视觉里程计集成到可手持或背负的载体上，在行走过程中连续采集并实时解算位姿，无需布设控制点",
            "definition_contrast": "区别于站式地面激光扫描（三脚架逐站架设、精度更高、效率更低），移动扫描在影视、隧道、厂区等大场景中效率优势明显"
          }
        ],
        "sources": [
          {
            "url": "https://www.ccgp.gov.cn/cggg/zygg/zbgg/202611/t20261104_27617232.htm",
            "type": "official"
          }
        ],
        "date": "2026-11-04",
        "notes": "公告于 11-04 14:12 在中国政府采购网发布，落在报告日 2026-11-05 窗口内。抓取时该页面返回 403，正文通过搜索引擎缓存完整获取（含项目编号、四项单价、评审专家、得分），四个单价合计 196.6 万元可自校验，数据一致。其余三项为「浩宇定制」，无型号与参数。"
      },
      {
        "item_id": "2026-11-05-B-005",
        "category": "Application",
        "title": "影目发布 INMO Future 空间智能眼镜：双目 1080P、SLAM 厘米级定位、3 秒平面检测，设 3000 万元生态基金",
        "one_line_judgment": "智能眼镜的竞争维度正从「显示参数」切到「空间理解」——而空间理解的最小可用集（SLAM 定位、平面检测、地图持久化、场景重定位、空间锚定）恰好就是三维重建的消费级封装。",
        "image": "",
        "ai_summary": "大白话：影目科技发了一款叫 INMO Future 的 AR 眼镜，最大的变化是它不用连手机也能自己算。它能「看懂」房间：室内能定位到厘米级、3 秒内认出墙/地/桌面，地图能存下来，下次戴上还能找回上次那个空间，虚拟内容能稳定地「钉」在某个位置。说白了，就是把一套室内三维建图和定位系统塞进了一副眼镜里——这也是它敢把自己叫「空间智能眼镜」的原因。",
        "detailed_info": "2026 年 11 月 4 日，影目科技在 2026 新品发布会上发布第四代 AI+AR 空间智能眼镜 INMO Future，创始人杨龙昇同时首次系统呈现其 InSpace 光机智算技术体系；沙利文（Frost & Sullivan）现场发布《消费级空间智能眼镜白皮书》。该产品同日亦在成都 2026 世界显示产业创新发展大会完成全球首次对外亮相（影目连续第三年将新品全球首秀放在成都）。\n\n硬件配置：一体式独立计算，无需连接主机、不依赖手机；搭载高通骁龙高性能空间处理芯片，为 AR 应用与 6DoF 空间锚定提供算力。显示为双目 1080P 全彩，采用阵列光波导，支持双目异显，视场角 36°；入眼亮度最高 800 尼特，较上代提升 33%（报道称当前一体式全彩 AI 眼镜普遍分辨率约 500×380）。散热为主动散热系统，重负载持续运行温度稳定低于 42℃。\n\n空间感知（与三维重建直接相关）：室内明亮场景下通过实时定位与建图（SLAM）、六自由度追踪与在线回环优化，实现厘米级空间定位与度级姿态感知；3 秒内完成多平面检测，识别墙面、地面与桌面；空间地图支持持久化保留，配合厘米级场景重定位，重新佩戴后可找回此前空间；通过空间锚定使内容稳定留在原处。\n\n系统与交互：基于 Android 14 深度打造的空间 AIOS，兼容安卓生态，支持离线运行；配备专属 Controller（射线定位、触摸板、实体按键、振动反馈）与定制 0920 立体声扬声器。应用场景含等效 150 英寸私人影院（支持 3D 与全景视频）、空间游戏与多人联机、PC/主机无线串流、空间学习、多窗口办公、以及现场与远程同事围绕同一三维模型观察讨论的协同评审。\n\n生态：设立 3000 万元生态内容产业基金用于原生 AR+AI 内容孵化，与字节、蚂蚁、腾讯应用宝等平台共建；同日与华为云、蚂蚁集团、成都传媒集团、成都广播影视集团、迈越科技、跻桥技术等签署协议，围绕智慧文旅、操作系统、数字文创、媒体融合、东盟跨境、公安应急六大领域合作。公司称已将蚂蚁灵影 AOS 接入眼镜并将开放自研 SDK。",
        "ai_comment": "INMO Future 真正值得记的不是 1080P，而是它把「室内三维建图」的四个关键能力做成了可交付的消费级功能：3 秒平面检测（对应语义平面重建）、地图持久化（对应长期建图与存储）、厘米级重定位（对应视觉定位 VPS 的前置能力）、空间锚定（对应 6DoF 跟踪的稳定性）。这套组合此前主要出现在企业级 AR 或机器人导航模块里。\n\n需要保留：第一，全部参数为公司发布会口径，未提供第三方测试；「厘米级空间定位」缺少具体误差分布与有效范围（如 10 米 vs 50 米场景的漂移率），而 SLAM 精度随场景尺度衰减是行业通病；第二，36° 视场角在一体式 AR 眼镜中偏窄，空间内容的「包裹感」有限；第三，3000 万元内容基金与生态合作属意向层面，未披露出资主体与投放节奏。\n\n前瞻：该盯的不是眼镜销量，而是这套 SLAM 是否会被开放为 SDK 对外供开发者做空间建图——若开放且精度可复现，影目有望成为「消费级 VPS 节点」的潜在供给方；若只服务自家内容，那就只是一副配置更好的 AR 眼镜。另外，成都 10 万台/年工厂已投产，产能不是瓶颈，内容供给才是。",
        "key_facts": [
          {
            "metric": "显示规格",
            "value": "双目 1080P 全彩，36° FOV，入眼亮度最高 800 尼特",
            "baseline": "上代亮度 +33%；同类一体式全彩 AI 眼镜常见约 500×380",
            "condition": "阵列光波导，支持双目异显"
          },
          {
            "metric": "空间定位能力",
            "value": "厘米级空间定位、度级姿态感知",
            "baseline": "SLAM + 6DoF 追踪 + 在线回环优化",
            "condition": "室内明亮场景，公司口径"
          },
          {
            "metric": "平面检测与地图持久化",
            "value": "3 秒内完成多平面检测；支持地图持久化与厘米级重定位",
            "baseline": "识别墙面、地面、桌面",
            "condition": "支持空间锚定内容稳定驻留"
          },
          {
            "metric": "算力与系统",
            "value": "高通骁龙空间处理芯片 + Android 14 空间 AIOS",
            "baseline": "一体式独立计算，无需主机或手机",
            "condition": "支持离线运行安卓应用"
          },
          {
            "metric": "生态投入",
            "value": "3000 万元内容产业基金",
            "baseline": "与字节、蚂蚁、腾讯应用宝等共建",
            "condition": "同日与华为云等签署六大领域合作协议"
          }
        ],
        "position_relation": "与词库中「易现 EZXR（VPS 空间建图）」「Niantic Spatial（VPS/Scaniverse）」同属空间定位与建图路线，但影目把 VPS 能力内嵌到消费终端而非做底层平台；与 2026-10-28 以来 Ouster「卖感知平台」的判断呼应——终端厂正在把感知能力自建。",
        "signal_strength": "中",
        "tags": [
          "影目科技",
          "INMO Future",
          "空间智能",
          "AR 眼镜",
          "SLAM",
          "空间锚定"
        ],
        "terms": [
          {
            "term": "空间锚定（Spatial Anchor）",
            "definition_mechanism": "在已建图的空间中选一个坐标系下的固定点，将虚拟内容的位姿绑定到该点上，使设备移动后虚拟物体仍稳定停留在真实房间的同一位置",
            "definition_contrast": "区别于仅依赖设备自身姿态的「跟头显示」（3DoF/6DoF 相对显示），后者在重定位后内容会漂移或丢失"
          },
          {
            "term": "在线回环优化（Loop Closure）",
            "definition_mechanism": "当相机重新观察到此前访问过的区域时，识别该处并据此修正累积的位姿漂移，把整条轨迹「拉回」一致的地图坐标系",
            "definition_contrast": "区别于纯里程计递推（无回环），后者误差随时间单调累积，长距离后地图会出现闭环错位"
          }
        ],
        "sources": [
          {
            "url": "https://www.nfnews.com/content/5385JK2v6B.html",
            "type": "news"
          },
          {
            "url": "https://www.cqn.com.cn/cj/content/2026-11/04/content_9179545.htm",
            "type": "news"
          },
          {
            "url": "https://www.cet.com.cn/xwsd/10648194.shtml",
            "type": "news"
          }
        ],
        "date": "2026-11-04",
        "notes": "发布会于 11-04 举行，南方+、中国质量新闻网、中国经济新闻网、红星新闻网当日报道，落在报告日 2026-11-05 窗口内。全部参数为发布会与新闻稿口径，未见第三方测试数据。影目科技不在原词库内，本次按「空间智能终端」相关性新增入词库。"
      },
      {
        "item_id": "2026-11-05-B-006",
        "category": "Hardware",
        "title": "Seyond 图达通推 LiDAR 运营数字孪生：联手 Dell、NVIDIA 在巴塞罗那 SC 大会演示实时空间感知",
        "one_line_judgment": "激光雷达厂商的第二增长曲线正在从「卖车规量」切到「卖固定场景的持续数据流」——一旦客户买的是按年付费的运营数字孪生服务，收入模式就从一次性硬件转向订阅。",
        "image": "",
        "ai_summary": "大白话：图达通（Seyond）原来主要给汽车做激光雷达，现在开始卖「空间数字孪生」——用激光雷达持续扫描一个场馆或街区，实时生成一个会动的三维副本，用来看人流密度、排队情况、哪里拥堵。它在巴塞罗那的智慧城市大会上借用戴尔和英伟达的展台演示这套东西。重点在于：这类生意的钱不是卖硬件赚的，而是按持续的数据服务收的。",
        "detailed_info": "2026 年 11 月 3 日，Seyond（图达通）官网发布新闻稿，宣布以「LiDAR 驱动的运营数字孪生 + 技术合作」扩展智慧城市方案，把空间数据与智能体 AI 分析、计算平台连接，服务于安全、交通与基础设施运营。\n\n演示安排：11 月 3 日至 5 日巴塞罗那世界智慧城市博览会（SCEWC）上，Seyond 作为戴尔科技（Dell）展台伙伴演示基于激光雷达的实时运营数字孪生，另在英伟达（NVIDIA）展台有联合演示。系统采用搭载 DGX Spark 的戴尔机型（20 核 Arm Grace CPU + Blackwell GPU），融合激光雷达、视频及其他传感器数据实时构建孪生环境，并集成基于 NVIDIA Metropolis VSS Blueprint 与 Cosmos 的视觉 AI 智能体。\n\n市场数据（Seyond 引用 LP Information）：2025 年全球智慧城市激光雷达市场约 3.58 亿美元，预计 CAGR 18.7%，2026 年约 4.25 亿美元。Seyond 另据行业研究与内部假设估算，2026 年中国以外扩展型固定式激光雷达应用的年度可服务市场（SAM）机会约 13 亿~20 亿美元，并强调该数字仅代表传感器相关业务的潜在市场空间，非公司预计实现的营收。\n\n合作线索与日期口径：Seyond 与 AMSYS 的战略合作公告发布于 2026 年 8 月 19 日（AMSYS 为其战略分销商、集成伙伴与托管服务商，覆盖州与地方政府、交通、关键基础设施、智慧城市、教育、医疗、物流与工业市场），并非本次新增；本次新闻稿以该既有合作为背景，叠加 Dell/NVIDIA 的展台演示。",
        "ai_comment": "这条的意义在商业模式而非技术：固定式激光雷达的客户（交通、场馆、机场、园区）天然需要「持续看」，而不是「买一台设备回家」。一旦收入变成按点位/按年收费的运营数字孪生服务，硬件就从利润中心降为获客入口，估值锚从硬件出货量切换到 ARR 与留存——这与 Trimble、Ouster 的财报叙事方向一致。\n\n需要谨慎的点：第一，本次为展会演示，公司未披露任何已落地客户、合同金额或商业条款，「运营数字孪生」目前仍是能力展示而非在售产品；第二，13 亿~20 亿美元的 SAM 是公司基于内部假设的估算，且明确限定为「传感器相关业务」，不能当作服务市场空间；第三，与 AMSYS 的合作是 8 月旧闻，本次被中文报道合并叙述，容易误读为新增合作，引用时须分开。\n\n前瞻：该盯的是 Seyond 下个季度的收入结构里是否出现「服务/订阅」科目，以及是否在任何财报或公告中披露固定式（Stationary）业务的客户数与续费率。若 2027 年上半年仍只有展会演示而无具名客户，说明这条第二曲线尚未跑通。",
        "key_facts": [
          {
            "metric": "演示平台配置",
            "value": "Dell 系统 + NVIDIA DGX Spark（20 核 Arm Grace CPU + Blackwell GPU）",
            "baseline": "融合 LiDAR、视频与其他传感器数据",
            "condition": "2026-11-03~05 巴塞罗那 SC 大会，Dell 展台"
          },
          {
            "metric": "智慧城市激光雷达市场规模",
            "value": "2025 年 3.58 亿美元 → 2026 年约 4.25 亿美元",
            "baseline": "CAGR 18.7%",
            "condition": "LP Information 数据，Seyond 引用"
          },
          {
            "metric": "公司估算 SAM（中国以外固定式）",
            "value": "13 亿~20 亿美元/年（2026）",
            "baseline": "仅含传感器相关业务",
            "condition": "基于行业研究与内部假设，非营收预测"
          },
          {
            "metric": "AMSYS 合作起始日",
            "value": "2026-08-19",
            "baseline": "本次新闻稿 2026-11-03",
            "condition": "AMSYS 任战略分销商/集成/托管服务商"
          }
        ],
        "position_relation": "与 2026-11-05「Trimble 财报：Geospatial 增长靠数据中心与能源基建」是同一逻辑的两种实现——Trimble 卖软硬一体给工程客户，Seyond 卖持续数据流给城市客户；与 2026-11-04「Ouster Gemini 感知平台」同属「激光雷达厂商从传感器转向感知服务」的转型。",
        "signal_strength": "中",
        "tags": [
          "Seyond",
          "图达通",
          "激光雷达",
          "数字孪生",
          "智慧城市",
          "NVIDIA",
          "Dell"
        ],
        "terms": [
          {
            "term": "运营数字孪生（Operational Twin）",
            "definition_mechanism": "面向运营而非设计的实时数字孪生：由持续在线的传感器（本例为激光雷达+视频）不断刷新孪生体状态，用于人流、车流、空间利用率的实时监测与预测",
            "definition_contrast": "区别于「设计数字孪生」（如 BIM 交付物，状态靠人工或系统更新），运营孪生的数据是传感器流，延迟要求在秒级"
          },
          {
            "term": "SAM（可服务市场）",
            "definition_mechanism": "在公司能够触达的产品形态与区域范围内，按客户需求与价格测算出的年度市场空间，通常小于 TAM（总体市场）而大于 SOM（可获得市场）",
            "definition_contrast": "与「营收预测」不同，SAM 描述的是「理论上能卖多少」，不代表公司实际能拿到多少份额"
          }
        ],
        "sources": [
          {
            "url": "https://seyond.com/seyond-expands-smart-city-solution-with-lidar-powered-operational-twin-capabilities-and-technology-collaborations/",
            "type": "official"
          },
          {
            "url": "https://seyond.com/seyond-to-showcase-live-lidar-operational-twin-demo-at-dell-technologies-and-nvidia-booth-at-smart-city-expo-world-congress-2026/",
            "type": "official"
          },
          {
            "url": "https://www.tuoluo.cn/article/detail-10131869.html",
            "type": "news"
          }
        ],
        "date": "2026-11-03",
        "notes": "官网新闻稿日期为 Nov 3, 2026（美国西部时间），中文报道（陀螺科技）于 11-04 发布，落在报告日 2026-11-05 窗口内。AMSYS 合作协议的原始公告日期为 2026-08-19，属旧闻，中文报道将其与本次演示合并叙述，本条目已拆分标注。所有市场数据为 Seyond 引用第三方（LP Information）或其内部估算口径。"
      },
      {
        "item_id": "2026-11-05-B-007",
        "category": "Application",
        "title": "天润科技获两项发明专利授权：卫星影像反演建筑高度的三维建模、强化学习遥感变化检测",
        "one_line_judgment": "「用卫星影像低成本反演建筑高度」这条路线，正在把城市级三维重建的成本结构从「航空摄影+人工建模」压向「开源影像+深度学习」——对下沉市场的实景三维是降维打击，对高精度工程测绘则威胁有限。",
        "image": "",
        "ai_summary": "大白话：一家叫天润科技的公司拿到了两个专利。第一个专利是：不用飞无人机、不用人工建模，只靠公开的卫星照片加深度学习，就能把城市里每栋楼的高度算出来，快速做出三维模型。第二个专利是用强化学习让卫星照片的「变化检测」更准，减少把没变的地方误判成变了。对做实景三维的人来说，第一条特别关键——它把「做三维」的成本砍到了卫星图的水平。",
        "detailed_info": "2026 年 11 月 4 日，陕西天润科技股份有限公司（北交所证券代码 920564）披露《关于取得发明专利证书的公告》（巨潮资讯网 2026-11-04 文件编号 1225658135）。公司于 2026 年 11 月 3 日收到国家知识产权局颁发的两项发明专利证书，授权公告日与取得日同日。\n\n专利一：「结合深度学习及卫星影像的建筑物三维建模方法及系统」。技术路径为：以开源卫星影像校正融合预处理为基础，采用 U-Net++ 提取建筑特征，结合光谱纹理匹配与历史高度预测模型自动反演建筑高度，目标是以较低成本快速完成三维重建，服务于数字孪生、国土规划与智慧城市等场景。\n\n专利二：「基于强化学习的高分辨率遥感影像变化检测方法」。面向双时相高分辨率遥感影像，引入强化学习机制针对成像条件差异优化识别策略，目的是抑制伪变化干扰、稳定提升地物变化检测精度，适用于自然资源变化监测、生态监测及城市用地动态监测。\n\n公司背景与业绩（同壁财经口径）：天润科技为时空信息技术服务企业，核心业务涵盖遥感与测绘地理信息数据服务、空间信息系统开发应用与集成，拥有测绘甲级、土地规划、林业调查规划设计等资质，通过 CMMI5 级认证。2026 年前三季度营业总收入 4652.88 万元，同比下降 56.29%；归母净利润亏损 6086.76 万元，上年同期亏损 964.81 万元。公司同时提示，专利成果能否带来直接经济效益尚存不确定性，不构成对经营业绩的承诺。",
        "ai_comment": "两项专利的分量不同：变化检测专利属于遥感领域的常规改进方向（强化学习用于抑制伪变化已有较多先例），信息量有限；真正的看点在建筑高度反演——用开源卫星影像 + U-Net++ 特征 + 历史高度先验，绕开了航空摄影测量所依赖的立体像对与高成本外业。这意味着城市级（而非工程级）三维底图的成本可能被压低一个数量级。\n\n必须打折的地方：第一，卫星影像反演高度的精度受限于侧视角度、遮挡与阴影，对高层建筑与密集城区误差显著，且专利文本描述的是方法权利要求，未见公开的精度指标（如 RMSE 米级/亚米级），无法判断实际可用性；第二，天润科技 2026 年前三季度营收 4652.88 万元、同比下降 56.29%，归母净利亏损 6086.76 万元，专利转化能力存在明显不确定性，公司自己也声明不构成业绩承诺；第三，U-Net++ 是 2018 年的网络结构，专利的新颖性更多在「光谱纹理匹配 + 历史高度预测」的流程组合，而非单点算法突破。\n\n前瞻：这条路线真正的竞争者是商业卫星影像供应商（如高分辨率立体成像星座）与实景三维平台厂商。若 2027 年出现基于此类方法的省级/市级三维底图批量交付案例，且精度可满足 1:2000 或 1:5000 成图要求，则「卫星反演」会吃掉传统航空摄影测量的中低精度市场；反之，若精度停留在示意级，它只能停留在规划可视化的边缘场景。",
        "key_facts": [
          {
            "metric": "专利数量与授权日",
            "value": "2 项发明专利",
            "baseline": "2026-11-03 取得，授权公告日同日",
            "condition": "北交所 920564，巨潮资讯网 11-04 披露"
          },
          {
            "metric": "三维建模技术路径",
            "value": "开源卫星影像 + U-Net++ 特征提取 + 光谱纹理匹配 + 历史高度预测",
            "baseline": "替代航空摄影测量立体像对与人工建模",
            "condition": "专利文本表述，未见公开精度指标"
          },
          {
            "metric": "变化检测方法",
            "value": "强化学习优化双时相识别策略",
            "baseline": "目标为抑制伪变化干扰",
            "condition": "面向自然资源、生态、城市用地动态监测"
          },
          {
            "metric": "公司当期业绩",
            "value": "2026 前三季度营收 4652.88 万元（-56.29%）、归母净利 -6086.76 万元",
            "baseline": "上年同期净利 -964.81 万元",
            "condition": "公司声明专利不构成业绩承诺"
          }
        ],
        "position_relation": "与词库中「超图软件（三维 GIS/CIM）」「数字绿土」「华测导航」构成实景三维的不同成本层级：航空/地面激光雷达做工程级，卫星反演做城市级底图。与 2026-11-04「河南数字孪生路网（激光点云 1:1 建模）」形成精度—成本的两端对照。",
        "signal_strength": "弱",
        "tags": [
          "天润科技",
          "专利",
          "卫星影像",
          "建筑高度反演",
          "实景三维",
          "变化检测"
        ],
        "terms": [
          {
            "term": "建筑物高度反演",
            "definition_mechanism": "利用单视或多视卫星影像的光谱、纹理与阴影特征，结合区域内建筑高度的历史统计先验，回归预测每栋建筑的层数或米级高度，从而在无立体像对条件下生成近似三维体块",
            "definition_contrast": "区别于立体摄影测量（依赖同地物的两视以上影像交会求高程）与激光雷达（直接测量高程），反演得到的是统计估计值，精度与可靠性依赖训练样本与先验质量"
          },
          {
            "term": "伪变化",
            "definition_mechanism": "双时相影像比对中，因成像季节、太阳高度角、大气条件、传感器差异导致的「看起来变了但地物实际未变」的差异，会污染变化检测结果",
            "definition_contrast": "与真实地物变化（新建、拆除、植被生长）相对；抑制伪变化是遥感变化检测的核心工程难题"
          }
        ],
        "sources": [
          {
            "url": "https://static.cninfo.com.cn/finalpage/2026-11-04/1225658135.PDF",
            "type": "official"
          },
          {
            "url": "https://news.qq.com/rain/a/20261104A0DPR200",
            "type": "news"
          }
        ],
        "date": "2026-11-04",
        "notes": "公告于 11-04 在巨潮资讯网披露（文件路径 finalpage/2026-11-04/1225658135.PDF，已在巨潮公告接口中按证券代码 920564 核实到同名公告），落在报告日 2026-11-05 窗口内；专利取得日为 11-03。技术路径描述来自同壁财经对公告的解读，专利全文未逐页核对；业绩数据（营收 4652.88 万元、净利 -6086.76 万元）为同壁财经引用口径。"
      }
    ]
  },
{
    "report_id": "daily-2026-11-06",
    "window_start": "2026-11-05T08:00:00+08:00",
    "window_end": "2026-11-06T08:00:00+08:00",
    "generated_at": "2026-11-06T21:00:00+08:00",
    "summary": {
      "window_takeaway": "同一天里，三维重建赛道的钱和算力同时换了一个方向：物原科技用 1.05 亿美元种子轮押「物理直觉」、魔芯把 4D 世界模型做成昇腾上的产业基础设施、百度地图把城市底图改造成 AI 的时空基座——三件事都在说，卖「能建模」已经不够，要卖「建模之后能推演、能决策」。",
      "direction": "产业侧从「采集硬件」转向「空间智能基础设施」：大疆把激光雷达塞进 2.2 公斤的行业无人机并做到 8 分钟出模、先临把 0.015mm 的计量级扫描仪做成 550g 无线形态、赛尔智控拿近亿元去下探千元级消费空间相机——采集端在硬件上继续「轻量化 + 降本」；而资本端则以物原科技 1.05 亿美元种子轮、魔芯 20 亿元累计融资集中砸向世界模型与物理建模，投入重心明显从设备侧后移到模型侧。",
      "academic_vs_industry": "同向但错位：学术侧当日主线是「把前馈 3DGS 做得更长、更省、更可训练」——CrossPressor 用免训练的证据路由把长序列跨视角融合提速 26 倍，GaussianRenderFormer 试图用 Transformer 替掉光栅化器；产业侧则在把 3DGS 直接商品化成「4D 高斯资产」卖给具身训练与数字孪生。学术在补可扩展性，产业在抢场景，两者的接合点正是长序列、低算力、可编辑——但学术尚未解决工业级几何精度与物理一致性。",
      "remember_one_thing": "一家成立仅四个月、注册资本 125 万元的北京公司，拿到了 1.05 亿美元种子轮。资本不是在给三维重建买单，是在给「理解物理规律」提前付定金。"
    },
    "items": [
      {
        "item_id": "2026-11-06-A-001",
        "category": "Business",
        "title": "物原科技发布 TensorWorld 品牌并披露 1.05 亿美元种子轮：凯辉、红杉中国、蚂蚁、美团等十家机构入局",
        "one_line_judgment": "这是国内物理世界模型赛道迄今最大的一笔早期融资，且押注方向与「视频生成式世界模型」不同——买的是可在陌生场景迁移的物理规律表征，而不是更逼真的画面。",
        "image": "",
        "ai_summary": "大白话：有一家今年 7 月才注册的北京公司「物原科技」，11 月 5 日宣布拿到 1.05 亿美元（约 7.05 亿元）的种子轮钱，投资方里有红杉中国、蚂蚁集团、美团、凯辉基金、IDG、鼎晖、达晨、蔚来资本等一大串。它要做的东西叫「物理基础模型」：不只让 AI 画出看起来真实的三维画面，而是让 AI 知道「我把杯子推到桌边，它就会掉下去」这类物理因果。简单说，别人在教 AI「长什么样」，它在教 AI「会发生什么」。",
        "detailed_info": "2026 年 11 月 5 日，北京物原科技有限公司在 X 平台宣布推出 TensorWorld 品牌，并同步披露已完成 1.05 亿美元种子轮融资，折合人民币约 7.05 亿元。投资方包括凯辉基金（Cathay Capital）、红杉中国（HSG）、蚂蚁集团、和玉资本（MSA Capital）、美团、IDG 资本、鼎晖 VGC、星连资本（Link-X Capital）、达晨财智（Fortune Capital）与蔚来资本（NIO Capital），共十家。\n\n公司成立于 2026 年 7 月，工商注册地北京市海淀区，法定代表人郑文，注册资本 125 万元人民币。据公开工商信息，10 月发生过一次股东变更，蚂蚁集团旗下上海云玚、红杉中国创投相关主体进入股东序列，注册资本从 100 万元增至 125 万元。从注册到完成亿美元级种子轮，间隔约四个月。\n\n创始人为吴海旭，清华大学软件学院博士，师从龙明盛教授，2022 年获清华大学特等奖学金（获奖时已在 ICML、NeurIPS 等会议与期刊发表 7 篇论文，其中 6 篇为第一作者或共同第一作者）；此后赴 MIT CSAIL 任博士后，师从 Wojciech Matusik。团队其他成员包括周俊昇（参与 Uni3D）、Weirui Ye（EfficientZero 提出者之一）、Wen Zheng 等。\n\n技术路线沿袭吴海旭第一作者的 GeoPT 工作——「动力学提升的几何预训练」（Lifted Geometric Pre-Training），思路是把静态几何结构映射到动态空间，通过粒子轨迹演化的自监督学习获得物理直觉。该工作获 ICLR 2026 科学基础模型研讨会最佳论文奖，作者含何恺明与 Wojciech Matusik。公司对外表述的目标是「理解、模拟并与真实物理世界交互」，强调物理知识向未见场景的迁移与持续学习。",
        "ai_comment": "这笔钱的问题不在金额，在时间差：GeoPT 是学术预印本成果，从论文到能在真实机器人上闭环运行的模型，中间隔着数据、算力与工程三条鸿沟。值得盯的不是它发布什么 demo，而是三件事——第一，是否会公布任何带真机评测的基线（例如操作成功率、预测误差随时间的累积曲线）；第二，与魔芯、VAST、西湖数智这类同样讲「世界模型」的公司如何区分，它卖的是 API、模型授权还是与本体厂绑定；第三，1.05 亿美元对应的估值未披露，若按同类世界模型公司（Runway ARR 2 亿美元对应 53 亿美元估值）的量级推算，早期溢价极高，后续必须靠可验证的商业合同支撑。另需注意口径：融资额由公司自行披露，未见工商层面的实缴或监管文件佐证；「约 7.05 亿元」为按 6.71 汇率换算的媒体口径，非官方结算价。",
        "key_facts": [
          {
            "metric": "种子轮融资额",
            "value": "1.05 亿美元（约 7.05 亿元）",
            "baseline": "公司成立于 2026-07，至披露仅约 4 个月",
            "condition": "由公司在 X 平台自行披露，投资方共 10 家"
          },
          {
            "metric": "注册资本",
            "value": "125 万元人民币（2026-10 由 100 万元增至 125 万元）",
            "baseline": "融资额与注册资本差约 560 倍",
            "condition": "工商登记口径，反映的是股权结构而非实际到账资金"
          },
          {
            "metric": "投资方构成",
            "value": "财务 VC + 产业资本双线：红杉中国、凯辉、IDG、鼎晖、达晨 5 家财务；蚂蚁、美团、蔚来、和玉、星连 5 家产业/战投",
            "baseline": "2025 年前物理 AI 一级市场融资多为个位数事件",
            "condition": "名单由公司披露，各机构出资比例未公开"
          },
          {
            "metric": "技术承接",
            "value": "GeoPT（ICLR 2026 科学基础模型研讨会最佳论文）",
            "baseline": "作者含何恺明、Wojciech Matusik",
            "condition": "论文到产品之间尚无公开的真机闭环结果"
          },
          {
            "metric": "行业融资背景",
            "value": "2026 年物理 AI 赛道累计融资事件 100 余起",
            "baseline": "2025 年全年 23 起",
            "condition": "财联社创投通口径；10 月单月降至 5 起，出现降温信号"
          }
        ],
        "position_relation": "与 2026-11-03「VAST 半年融资约 50 亿元」、2026-11-01「西湖数智 Awomo 世界模型研究中心」同属「世界模型资本化」这条线，但位置更靠底层：VAST 卖 3D 资产生成、西湖数智卖评测与参数规模，物原科技卖物理动力学表征。向上承接 2026-11-04「AMD 82 亿美元收购 World Labs」——同一天前后，海外用并购、国内用种子轮，两种方式抢的是同一层能力。向下与 2026-11-06 魔芯 MoWorld 2.0 形成路线对照：一个从物理规律出发、一个从 4D 高斯资产出发。",
        "signal_strength": "强",
        "tags": [
          "物原科技",
          "TensorWorld",
          "世界模型",
          "物理AI",
          "种子轮",
          "GeoPT",
          "红杉中国",
          "蚂蚁集团"
        ],
        "terms": [
          {
            "term": "物理基础模型",
            "definition_mechanism": "以物理规律（重力、碰撞、形变、流体等）作为预训练目标的模型，学习的是「状态如何随时间演化」的动力学映射，而不是像素分布；因此可对未见场景做推演",
            "definition_contrast": "与视频生成式世界模型相对：后者优化的是下一帧的像素相似度，画面逼真但长时序物理一致性弱；前者优化的是状态预测精度，画面不必最真但物理可迁移"
          },
          {
            "term": "GeoPT（几何预训练）",
            "definition_mechanism": "把静态三维几何映射到动态粒子空间，用粒子轨迹演化做自监督，从而在没有物理标注数据的情况下学到动力学先验",
            "definition_contrast": "区别于在视频帧上做自监督的视频预训练——后者的监督信号来自外观时序，前者来自几何粒子的运动轨迹"
          }
        ],
        "sources": [
          {
            "url": "https://news.qq.com/rain/a/20261105A0B6E000",
            "type": "news"
          },
          {
            "url": "https://mp.weixin.qq.com/s?__biz=MzYzOTY0NDk5MA==&mid=2247490868&idx=3&sn=062d13a4e79ca39380e99f0a8a2dd620",
            "type": "news"
          }
        ],
        "date": "2026-11-05",
        "notes": "报道日与事件日同为 2026-11-05（X 平台发布与媒体披露均在此日），落在报告日 2026-11-06 窗口（11-05 08:00~11-06 08:00）内。融资额取自公司自述的「$105M seed」，人民币折算采用媒体口径 7.05 亿元，未按当日汇率复核。投资方名单以公司披露为准，各机构具体出资额未公开。成立日期与注册资本取自天眼查工商信息，注册资本 125 万元为认缴口径，不等于实缴。"
      },
      {
        "item_id": "2026-11-06-A-002",
        "category": "Software",
        "title": "魔芯科技乌镇首发 MoWorld 2.0：昇腾原生 4D 世界模型，实时推理 70 帧/秒、推理成本降至同规模 GPU 方案的 30%",
        "one_line_judgment": "把「4D 高斯资产」当成可交付的产业中间品来卖，是这轮世界模型竞赛里最接近「卖铲子」的定位——它不赌某个应用跑通，赌的是所有应用都需要空间资产。",
        "image": "",
        "ai_summary": "大白话：魔芯科技在乌镇互联网大会上发布了 MoWorld 2.0，一个能「生成可以走进去、可以互动、可以被改变的 3D/4D 空间」的模型。它跟视频生成模型最大的区别是：视频模型只会画「下一帧长什么样」，而它要算「你推一下这个杯子，杯子会怎么掉」。它把重力、弹力、浮力、光照、柔体、流体等十几种物理要素都学进了模型里。而且整套训练和部署都在华为昇腾国产算力上跑，成本最低只要英伟达 GPU 方案的 30%。",
        "detailed_info": "2026 年 11 月 4 日，在世界互联网大会乌镇峰会「发展新质生产力 强劲增量看 AI」主题论坛上，魔芯科技创始人兼 CEO 陈天润联合具身智能、文化旅游、时空地理信息方向的三家国家人工智能应用中试基地代表，发布基于华为昇腾原生的 4D 世界模型 MoWorld 2.0。报道集中于 11 月 5 日。\n\n能力层面，MoWorld 2.0 对重力、弹力、浮力、光照、柔体、流体、刚体、形塑体、热力等十余种物理要素做了整体建模，输出可仿真生成、可实时渲染、可反复调用的 4D 高斯资产。官方举例包括模拟微风吹动书页、书签受重力掉落并弹起等过程，强调对物体交互关系、外力作用与环境变化的实时推理。\n\n性能层面，据钛媒体与央广网口径：实时推理由 MoWorld 1.0 的最高约 50 帧/秒提升至约 70 帧/秒；生成的 3D/4D 高斯空间资产渲染速度可达 500 帧/秒以上；手机端渲染测试可达约 100 帧/秒。端云协同方面，10 月华为新品发布会上亮相的应用「摸小宠」被列为代表案例——用户上传几张宠物照片生成可交互的 4D 数字分身，背后是约 6 亿参数的端侧版本在麒麟平台推理，云端负责高质量 4D 资产生成。\n\n算力与成本：模型继续在昇腾算力基座上完成训练与部署，围绕长序列训练、多 NPU 协同调度、推理系统优化持续改进，官方称推理成本最低可降至同等规模 GPU 方案的 30%。\n\n应用与资本：与三家国家人工智能应用中试基地的合作聚焦可交互仿真与具身训练、文化数字资产与沉浸式体验、三维数据生产与大场景快速重建；场景侧覆盖具身智能训练、自动驾驶长尾场景生成、工业数字孪生（产线/矿山转可编辑空间资产）、城乡规划文旅、影视游戏。融资方面，官方口径为今年以来已完成 5 轮、累计 20 亿元，估值近 100 亿元，新一轮融资已启动推进。",
        "ai_comment": "三个需要保留的地方。第一，「推理成本降至 GPU 方案 30%」是公司自测与自算口径，未披露对照的 GPU 型号、batch size、精度（FP16/INT8）与是否含端侧折算，跨平台成本比较的可比性有限——昇腾的生态成熟度、算子覆盖率与迁移成本并未计入。第二，「500 帧/秒渲染」指的是高斯资产渲染，不是模型推理，两者常被混读；真正决定能否上机器人的是推理延迟，70 帧/秒对应约 14 毫秒一帧，仍高于工业闭环常见的 5~10 毫秒要求。第三，5 轮 20 亿元融资与近 100 亿元估值同样是自述口径，且 1.0 发布于今年 7 月、2.0 在 4 个月后跟进，版本迭代快于第三方评测的出现，目前没有独立的物理一致性基准（如 WorldArena）上的成绩。要盯的指标是：与中试基地的合作是否转化为交付合同、端侧 6 亿参数版本在真实机型上的功耗与发热、以及长序列（分钟级）物理状态的漂移速度。",
        "key_facts": [
          {
            "metric": "实时推理帧率",
            "value": "约 70 帧/秒",
            "baseline": "MoWorld 1.0 约 50 帧/秒（+40%）",
            "condition": "公司口径；帧率对应的分辨率与 batch 未披露"
          },
          {
            "metric": "高斯资产渲染速度",
            "value": "500 帧/秒以上（手机端约 100 帧/秒）",
            "baseline": "渲染速度≠模型推理速度，不可与 70 帧/秒直接比较",
            "condition": "端侧测试机型未公布"
          },
          {
            "metric": "推理成本",
            "value": "最低为同规模 GPU 方案的 30%",
            "baseline": "GPU 对照型号、精度与 batch 均未披露",
            "condition": "昇腾平台自测口径，不含迁移与生态成本"
          },
          {
            "metric": "端侧模型规模",
            "value": "约 6 亿参数（端云协同）",
            "baseline": "对应应用「摸小宠」，云端负责 4D 资产生成",
            "condition": "麒麟平台承担推理，2026 年 10 月华为发布会亮相"
          },
          {
            "metric": "累计融资",
            "value": "5 轮、20 亿元，估值近 100 亿元",
            "baseline": "MoWorld 1.0 发布于 2026 年 7 月，2.0 间隔约 4 个月",
            "condition": "公司/媒体口径，新一轮融资推进中"
          }
        ],
        "position_relation": "接续 2026-11-05 窗口内已收录的百度 Apollo World（智能体驱动的世界模型）与优必选 Thinker-Sim（Real2Sim2Real 数据工厂），构成「世界模型三种交付形态」：Apollo World 交付行为闭环、Thinker-Sim 交付合成数据、MoWorld 2.0 交付可直接调用的 4D 高斯资产。与 2026-11-01 西湖数智 Awomo（40 亿参数、评测榜单）形成参数与产品的对照——前者重榜单，后者重交付形态。与同日物原科技（物理基础模型）构成路线分歧：一个从物理动力学的可迁移表征切入，一个从 4D 高斯资产的可复用性切入。",
        "signal_strength": "强",
        "tags": [
          "魔芯科技",
          "MoWorld",
          "4D世界模型",
          "高斯溅射",
          "昇腾",
          "国产算力",
          "乌镇峰会",
          "数字孪生"
        ],
        "terms": [
          {
            "term": "4D 高斯资产",
            "definition_mechanism": "在 3D 高斯溅射（用大量椭球体表示场景）的基础上加入时间维度，使每个高斯的位置、形变、光照可随物理推演演化，从而得到「可播放、可交互、可编辑」的动态空间表示",
            "definition_contrast": "与静态 3DGS 相对：静态 3DGS 只能表达一个时刻的场景，4D 版本能表达「推一下之后场景怎么变」；与 NeRF 类隐式表示相比，高斯是显式的，可直接导出、可被下游引擎消费"
          },
          {
            "term": "端云协同推理",
            "definition_mechanism": "把大模型拆成两段：云端负责重计算的高质量资产生成，端侧用蒸馏后的小模型（本例约 6 亿参数）负责实时渲染与交互响应",
            "definition_contrast": "与纯云端推理相比延迟低、不依赖网络；与纯端侧相比能保留大模型的生成质量上限，代价是两端版本一致性维护成本高"
          }
        ],
        "sources": [
          {
            "url": "https://www.cnr.cn/tech/techph/20261105/t20261105_527863392.shtml",
            "type": "news"
          },
          {
            "url": "https://new.qq.com/rain/a/20261105A09HNQ00",
            "type": "news"
          },
          {
            "url": "https://m.10jqka.com.cn/20261105/c681476944.shtml",
            "type": "news"
          }
        ],
        "date": "2026-11-04",
        "notes": "事件日 11-04（乌镇峰会主题论坛现场发布），报道日 11-05（央广网、钛媒体、同花顺均于 11-05 发稿），按事件日归档口径写入报告日 2026-11-06（窗口 11-05 08:00~11-06 08:00，发布发生在此窗口内）。帧率、成本倍数、参数量与融资数据均为公司及转述媒体口径，未见第三方基准。物理要素数量官方表述为「十几种」，本条未擅自给定精确数字。"
      },
      {
        "item_id": "2026-11-06-B-001",
        "category": "Hardware",
        "title": "大疆发布 Matrice 5T：2.2kg 轻型行业机首次标配激光雷达+毫米波雷达+全向视觉，57488 元，200 张照片 8 分钟出模",
        "one_line_judgment": "激光雷达从「行业选配」变成「轻型机标配」，意味着无人机测绘的采集成品率开始由机身自带的多传感器融合保证，而不再依赖外挂设备与飞手经验——这会压低低空测绘的单价。",
        "image": "",
        "ai_summary": "大白话：大疆 11 月 5 日发了新无人机 Matrice 5T，2.2 公斤一个人能拎着走，但第一次在轻型行业机上把激光雷达、毫米波雷达和全向视觉都装上。好处很直接：夜里没光、下雾扬尘、GPS 被山谷挡住的时候也能飞、也能看清电线和细障碍物。对做测绘的人来说最关键的一条是——它在现场就能边飞边建模，200 张照片从拍完到出一套点云或 2.5D 模型只要 8 分钟。价格 57488 元。",
        "detailed_info": "2026 年 11 月 5 日，大疆（DJI）在深圳发布全场景轻型旗舰行业无人机 DJI Matrice 5T，中国大陆官方售价 57488 元，即日起通过大疆官方商城及行业合作伙伴接受预订，购机首年赠送 DJI Care 行业无忧旗舰版。\n\n感知配置：Matrice 5T 是大疆首次在轻型行业无人机上标配激光雷达、毫米波雷达与全彩全向视觉感知系统。三类传感器分工明确——激光雷达在夜间无光环境仍可捕捉电力导线等细小障碍物，官方标称导线探测距离 32 米；毫米波雷达在团雾、扬尘、雨雪中持续输出距离数据；全向低光鱼眼系统在照度低至 0.5 lux 时仍可实现视觉定位。\n\n影像系统：原生 1K 热成像相机 + 广角 + 中长焦 + 长焦四相机协同。广角依托 AI 调影实现全彩夜视，0.01 lux 微光下可输出彩色影像；中长焦支持 10 米外辨识销钉、裂缝等细微缺陷并读取变电站仪表；长焦光学变焦提升至 11 倍，400 米外可辨车牌数字。激光测距模块量程由上代 1.8 公里提升至 3 公里，近红外补光灯有效照射距离最远 100 米。\n\n飞行与结构：整机 2.2 公斤，防护等级 IP55，工作温度 -20℃ 至 50℃，最长飞行时间 59 分钟，开机到起飞约 10 秒。动力系统单轴拉力较 Matrice 4T 提升 98%，配电机缺相检测与控制算法。图传采用双 4G 增强图传 + 遥控器高增益天线，支持另一台无人机作空中中继，最远图传距离 40 公里。标配静音桨叶，噪声控制在 80 dB(A)。\n\n建模与智能：支持边飞边建模与现场快速出模——200 张照片从采集完成到生成点云或 2.5D 模型仅需 8 分钟。机载 AI 可辨别 20 余种目标类型，开放机载算力支持导入第三方模型；接入大疆司空 2 云端算力后，可用自然语言指令（如「输电线散股」）发起巡检，AI 自动识别隐患、告警并生成报告；AI 巡逻航线可在地图划定区域后自动生成航线并执行拍照、录像、悬停、喊话等动作。",
        "ai_comment": "这款机器的产业意义不在参数，而在「默认配置」的迁移：当激光雷达成为轻型机的标准件，测绘作业的传感器融合就由厂商固件接管，第三方点云后处理软件（Pix4D、Agisoft、数字绿土等）在「现场出模」这一段的价值会被挤压到精修与质检环节。需要保留的是：8 分钟出模是 200 张照片的点云或 2.5D 结果，不等于带纹理的三维网格或实景三维单体化成果，与专业摄影测量流程（空三+密集匹配+纹理映射）不可直接类比；40 公里图传为无遮挡理论值。要盯的指标是：激光雷达的实际点频与测距精度（官方未公布具体线数）、单架次可覆盖的 km² 数，以及它在实景三维中国项目里能否进入验收成果链。",
        "key_facts": [
          {
            "metric": "整机重量 / 售价",
            "value": "2.2 kg / 57488 元",
            "baseline": "行业机此前需外挂激光雷达模块",
            "condition": "中国大陆官方售价，即日起预订"
          },
          {
            "metric": "建模出图时间",
            "value": "200 张照片、8 分钟出点云或 2.5D 模型",
            "baseline": "不等同于带纹理三维网格；专业摄影测量流程通常以小时计",
            "condition": "本机本地处理，官方标称"
          },
          {
            "metric": "激光雷达导线探测距离",
            "value": "32 米",
            "baseline": "全向视觉最低工作照度 0.5 lux",
            "condition": "夜间无光环境，官方标称"
          },
          {
            "metric": "续航 / 防护 / 工作温度",
            "value": "59 分钟 / IP55 / -20℃~50℃",
            "baseline": "单轴拉力较 Matrice 4T 提升 98%",
            "condition": "受控环境测试条件下测得"
          },
          {
            "metric": "激光测距量程",
            "value": "3 公里",
            "baseline": "上代 1.8 公里（+67%）",
            "condition": "可标记搜救目标、测算山火火线长度"
          }
        ],
        "position_relation": "与 2026-11-03「大疆发布 Dock 4 机场与 Matrice 5TD」构成同一产品线的两周内两连发：5TD 面向固定机场自动化，5T 面向单兵便携，两者共同把「机场—单兵」两端补齐。在重建链路上，它把激光雷达+视觉的融合采集下沉到 2.2 公斤级别，与 2026-10-28「其域创新手持设备 10 分钟采集」形成空地互补；与同日「先临三维 FreeScan Combo Wireless」形成「空中—地面」两端的轻量化对照。",
        "signal_strength": "强",
        "tags": [
          "大疆",
          "DJI",
          "Matrice 5T",
          "激光雷达",
          "行业无人机",
          "测绘",
          "实景三维",
          "边缘建模"
        ],
        "terms": [
          {
            "term": "2.5D 模型",
            "definition_mechanism": "在二维平面坐标上叠加高程信息得到的表面模型（类似带高度的地形面），只有可见表面、没有侧面与底面，因此无法表达建筑立面与悬挑结构",
            "definition_contrast": "与完整三维网格（带侧面、封闭体）相对；2.5D 适合土方量算与灾情评估，不适合单体化建模与 BIM 对接"
          },
          {
            "term": "全向视觉定位",
            "definition_mechanism": "用多颗鱼眼相机做视觉里程计/视觉惯性里程计，在卫星信号弱或遮挡时通过图像特征跟踪维持自身位姿估计",
            "definition_contrast": "与 GNSS 定位相对：GNSS 在峡谷、城市楼间、室内失效但绝对精度稳定；视觉定位在无卫星环境可用但存在累积漂移"
          }
        ],
        "sources": [
          {
            "url": "https://www.dji.com/cn/media-center/announcements/dji-release-matrice-5t",
            "type": "official"
          },
          {
            "url": "https://www.yangtse.com/news/qiche/202611/t20261105_409701.html",
            "type": "news"
          }
        ],
        "date": "2026-11-05",
        "notes": "发布日 2026-11-05（大疆官网与官方新闻稿同日），落在报告日 2026-11-06 窗口内。所有参数取自大疆官方发布页，官方注明「受控环境测试下使用量产版机型测得」。激光雷达具体线数、点频、测距精度官方未公布，本条未作推断。2.2 公斤机身重量取自扬子晚报报道，官网文稿未直接给出。"
      },
      {
        "item_id": "2026-11-06-B-002",
        "category": "Hardware",
        "title": "先临三维 FreeScan Combo Wireless 系列焕新：550g 无线双光源手持扫描仪，最高精度 0.015mm、910 万点/秒",
        "one_line_judgment": "把「计量级 0.015mm」塞进 550 克的无线机身，意味着工业检测的「送检」流程可以就地变成「现场扫码」——精度不再被三坐标测量室的工位绑定。",
        "image": "",
        "ai_summary": "大白话：先临三维把自家的 FreeScan Combo 手持扫描仪做成了无线版，机身只有 550 克（大约一瓶矿泉水），不用再拖着线、也不用底座，扫描时想怎么转手腕就怎么转。精度最高 0.015 毫米，差不多是一根头发丝的六分之一；每秒最多能扫 910 万个点。它有两种光源（蓝色激光和红外 VCSEL）、五种扫描模式，配三块电池轮换，主要给汽车、航空、工程机械这些要做高精度检测的行业用。",
        "detailed_info": "2026 年 11 月 5 日，先临三维（旗下工业计量品牌先临天远）发布 FreeScan Combo Wireless 系列无线计量级双光源手持三维扫描仪，包含 FreeScan Combo+ Wireless 与 FreeScan Combo Wireless 两款。\n\n形态与连接：通过嵌入式无线传输模块与内置电池，扫描过程无需拆卸式底座、无需线缆，真正实现无束缚扫描。机身净重 550 克，尺寸 189mm×81mm×53mm。标配 3 块电池可轮换使用，并支持外接移动电源。\n\n精度与速度：继承先临天远的精度标准，最高精度 0.015mm，重复精度稳定；可选配通过德国国家计量研究所（PTB）精度双重认证的自研工业三维检测软件。最高扫描速度 9,100,000 点/秒，实时生成网格，省去点云封装环节。\n\n光源与模式：蓝色激光与红外 VCSEL 双重光源融合于同一机身，具备五种模式——高速扫描模式配 93 条交叉激光线，用于快速获取大面积数据；精细扫描模式采用 25 条平行激光线，用于复杂结构细节还原；深孔扫描模式以单条激光线深入孔洞、凹槽获取深孔立体数据；几何特征丰富的场景下可用 VCSEL 红外光源实现不贴点扫描；中大尺寸物体则通过 VPG 大范围视频流摄影测量把控整体精度，无需编码点。\n\n交互改进：设备配备智能按键，扫描中调整亮度或切换模式无需返回电脑端界面；智能色谱功能可直观判断数据获取完整度；三维扫描软件采用引导式界面，降低上手门槛。",
        "ai_comment": "这条要分清两件事：0.015mm 是「最高精度」（通常指单次体积精度在最佳工况下的典型值），与「体积精度」「球度」「平面度」是四个不同指标——去年其官网那篇解析文章正是这么区分的。工程采购时应向厂商索取体积精度（单位 mm/m）与重复性数据，而不是只看最高精度。另一处要注意的是「910 万点/秒」是采集速率加实时网格化，与「每秒输出多少可用三角面」不是一回事。相对上一代 FreeScan Combo（2026-10-29 窗口已收录的非无线版），这次改进集中在无线化与轻量化（550g），精度指标未变——所以这是一次形态迭代而非能力跃升，信号强度定中。要盯的是：无线传输的实际带宽够不够撑 910 万点/秒（否则会降采样）、电池在高负载下的实际续航、以及 VPG 在 2 米以上工件上的实测偏差。",
        "key_facts": [
          {
            "metric": "机身重量",
            "value": "550 克",
            "baseline": "上一代 FreeScan Combo 为非无线形态、需底座",
            "condition": "尺寸 189×81×53 mm，配 3 块电池轮换"
          },
          {
            "metric": "最高精度",
            "value": "0.015 mm",
            "baseline": "精度指标较上一代 FreeScan Combo 未变",
            "condition": "最高精度口径，非体积精度；软件可选 PTB 双重认证版本"
          },
          {
            "metric": "最高扫描速度",
            "value": "9,100,000 点/秒",
            "baseline": "实时生成网格，省去点云封装",
            "condition": "厂商标称，未披露降采样策略"
          },
          {
            "metric": "激光线配置",
            "value": "高速 93 条交叉 / 精细 25 条平行 / 深孔单条",
            "baseline": "共 5 种模式（含不贴点 VCSEL 与 VPG 摄影测量）",
            "condition": "蓝激光 + 红外 VCSEL 双光源"
          }
        ],
        "position_relation": "与 2026-10-29「先临三维 FreeScan Combo Wireless 发布」为同一产品的后续报道窗口——10-29 那条来自首批通稿，本条来自 11-05 的渠道稿（中国经济新闻网、中华网科技），核心参数一致，本条的角色是补齐「五种模式/无线续航/智能按键」等细节，不带入新能力。与 2026-10-30「爱乐酷 M1 Ultra 511g」、2026-11-05「赛尔智控千元级消费空间相机」共同构成「扫描仪轻量化、降本化」这条主线：先临守计量级、爱乐酷与赛尔冲消费级。",
        "signal_strength": "中",
        "tags": [
          "先临三维",
          "FreeScan",
          "手持扫描仪",
          "计量级",
          "无线扫描",
          "工业检测",
          "VPG"
        ],
        "terms": [
          {
            "term": "体积精度（Volumetric Accuracy）",
            "definition_mechanism": "在给定工作体积内（如 1 米、3 米跨度）测量的最大允许误差，通常表示为「0.02 mm + 0.015 mm/m」这类形式，随测量尺寸线性累积",
            "definition_contrast": "与「最高精度」相对：最高精度是单点/小尺寸最优工况下的数值，体积精度才决定大工件是否合格；只看最高精度会高估设备在 3 米工件上的表现"
          },
          {
            "term": "VPG 视频流摄影测量",
            "definition_mechanism": "用视频流连续抓取海量照片，通过多视角光束法平差解算标志点/特征点三维坐标，为大尺寸工件提供全局控制框架，再把局部扫描数据拼进去",
            "definition_contrast": "与「逐张拍照的静态摄影测量」相比无需停机布设编码点、效率高；与纯手持扫描相比解决了长距离拼接的累积误差"
          }
        ],
        "sources": [
          {
            "url": "https://www.cet.com.cn/wzsy/cyzx/10649539.shtml",
            "type": "news"
          },
          {
            "url": "https://tech.china.com/articles/20261105/202611051973960.html",
            "type": "news"
          }
        ],
        "date": "2026-11-05",
        "notes": "报道日 2026-11-05（中国经济新闻网 16:32 发稿），产品官方表述为「近日焕新发布」，未给出精确发布日。本条按报道日归入报告日 2026-11-06 窗口。需注意与 2026-10-29 已收录的 FreeScan Combo Wireless 条目的关系：核心参数一致，本条为细节补充，未新建重复事件。"
      },
      {
        "item_id": "2026-11-06-B-003",
        "category": "Application",
        "title": "百度地图在乌镇时空智能论坛开放「时空智能基座」：1300 万公里车道级道路、3 亿 POI、日承接 6500 亿次北斗定位请求",
        "one_line_judgment": "地图公司开始把自己定位成「AI 理解真实世界的基础设施」而不是导航工具——这是空间智能从「做三维模型」转向「持续维护一份可推理的时空状态」的标志。",
        "image": "",
        "ai_summary": "大白话：百度地图在乌镇互联网大会第一次专门开的「时空智能论坛」上说，它不想只当导航 App 了，要当 AI 的「底图」。理由是：AI 要真帮你办事，得知道「这个景区今天开不开」「停车场还有没有空位」「这段路能不能按时到」——这些都是实时、会变的现实信息。百度地图手里有 1300 多万公里车道级道路数据、3 亿多个地点、每天最多 6500 亿次北斗定位请求，它想把这些变成 AI 可以直接调用的能力。",
        "detailed_info": "2026 年 11 月 5 日，2026 世界互联网大会乌镇峰会首次设置的「时空智能论坛」举行。百度副总裁、百度地图总经理谢天发表主旨演讲，系统介绍百度地图「时空智能基座」及产业实践，提出从导航工具向 AI 基础设施演进，并给出「五方参与、五维协同」的产业共建路径。\n\n数据底盘（官方披露）：1300 多万公里真车道级道路数据、3 亿多个 POI、每月超 6 亿用户交互反馈、量产搭载超 6000 万辆、每天最高承接 6500 亿次北斗高精定位请求；海外地图覆盖 200 多个国家和地区；开发者超 400 万。\n\n架构与能力：以数据—模型—智能体三层架构支撑推理、预测与服务。应用侧举例包括：跨交通枢纽的连续导航（如杭州东站）、覆盖超 100 万个停车场的「车位到车位」导航；道路风险感知可识别急刹、异常停车并向后车预警，官方称 5 月南方某城市隧道出口事件当日发出约 1.3 万条预警；信息核验方面可交叉比对交通、票务、营业时间（如乌镇西栅夜游船、黄山索道时间），国庆期间「小度想想」使用量同比增长 540.1%，65% 的回答经地图数据核验。\n\n开放策略：接入主流 AI 平台，提供零代码技能包，发布 MAPYA（自然语言代码生成）与面向 AI 编程的 CLI 工具，开发者接入从「数天」压缩到「数分钟」。中国工程院院士、武汉大学教授刘经南在论坛上表述「时空不是智能的背景板，而是智能的底层逻辑」，并以该基座为例指出地图正在进化为「会理解、会预判的时空智能体」。",
        "ai_comment": "需要把「时空智能基座」与「实景三维/三维重建」区分开：它输出的主要是矢量路网、POI 与实时状态，不是带几何精度的三维模型——把它当成三维重建的进展会误判。真正有价值的部分是「持续更新」这一环：实景三维中国目前的主要瓶颈正是更新周期（一年一版甚至更长），而地图侧能做到分钟级。若这套基座未来接入高斯泼溅或街景点云，才可能与三维重建链路打通。另需注意：6500 亿次/日为「最高」而非均值，540.1% 为「小度想想」单一功能的同比，均属选择性口径。要盯的是 MAPYA/CLI 的实际调用量、以及是否有地理信息主管部门认可的数据合规路径——时空数据开放涉及测绘资质与审图，这是比技术更硬的约束。",
        "key_facts": [
          {
            "metric": "车道级道路数据",
            "value": "1300 多万公里",
            "baseline": "海外覆盖 200 多个国家和地区",
            "condition": "百度地图官方论坛披露"
          },
          {
            "metric": "POI 数量",
            "value": "3 亿多个",
            "baseline": "月活交互反馈超 6 亿用户",
            "condition": "官方口径，未披露更新频率"
          },
          {
            "metric": "北斗高精定位请求",
            "value": "日最高 6500 亿次",
            "baseline": "「最高」而非日均",
            "condition": "量产搭载超 6000 万辆"
          },
          {
            "metric": "开发者规模",
            "value": "超 400 万",
            "baseline": "接入耗时从「数天」压缩至「数分钟」",
            "condition": "依托 MAPYA 与 CLI 工具"
          },
          {
            "metric": "小度想想使用量",
            "value": "国庆期间同比 +540.1%",
            "baseline": "65% 回答经地图数据核验",
            "condition": "单一功能同比，非全站数据"
          }
        ],
        "position_relation": "接续 2026-11-05「百度首次披露 Apollo World 世界模型」（报告日 11-05，自动驾驶仿真侧），本条是同一公司在「城市底图侧」的配套动作：Apollo World 负责把场景变成可训练的行为闭环，时空智能基座负责把真实世界的状态持续喂给智能体。与 2026-11-04「河南 3.1 万公里省级数字孪生路网」形成对照——地方交通部门在自建孪生底座，互联网地图商在开放通用基座，两者在「路网数据」上存在直接竞争。",
        "signal_strength": "中",
        "tags": [
          "百度地图",
          "时空智能",
          "乌镇峰会",
          "数字孪生",
          "北斗",
          "空间智能",
          "AI基础设施"
        ],
        "terms": [
          {
            "term": "时空智能基座",
            "definition_mechanism": "把位置、时间、状态三类信息统一建模成可查询、可推理的数据层，向上以 API/智能体形式供给 AI，使 AI 的回答带有实时空间约束（是否开放、是否可达、是否拥堵）",
            "definition_contrast": "与静态 GIS 底图相对：GIS 底图是「在哪里」，时空基座是「此刻是什么状态、过去怎么变、接下来会怎样」；与实景三维相对：前者重属性与实时性，后者重几何与纹理精度"
          },
          {
            "term": "车道级道路数据",
            "definition_mechanism": "把道路细分为具体车道（含车道线、车道属性、连接关系），使定位与路径规划可精确到「第几条车道」，是 L2+/L3 辅助驾驶与车道级导航的数据前提",
            "definition_contrast": "与「道路级」数据相对：道路级只知道「这条路」，车道级还知道「这条路上有 3 条车道、最右是出口专用道」"
          }
        ],
        "sources": [
          {
            "url": "https://www.taibo.cn/p/99860",
            "type": "news"
          },
          {
            "url": "https://www.geisou.com/a/baidu-maps-unveils-spatiotemporal-ai-roadmap-at-world-internet-conference",
            "type": "news"
          }
        ],
        "date": "2026-11-05",
        "notes": "论坛于 2026-11-05 举行，中英文两源（泰伯网、geisou 转 PCauto）对数据的表述一致（1300 万公里、3 亿 POI、6500 亿次、400 万开发者），相互印证。中文源写明「每天最高承接 6500 亿次」，英文源写为 daily，本条按中文原文采用「日最高」口径。"
      },
      {
        "item_id": "2026-11-06-B-004",
        "category": "Hardware",
        "title": "韩国 MOVIN 完成约 750 万美元 A 轮：LiDAR+视觉的无标记动捕，已向波士顿动力供货超 200 台",
        "one_line_judgment": "具身智能的数据缺口，正在把「人体动作采集」从影视动捕棚的专用设备，变成机器人遥操作的标准输入件——这条路线的门槛不在算法，在硬件成本与便携性。",
        "image": "",
        "ai_summary": "大白话：韩国公司 MOVIN 拿到约 750 万美元 A 轮融资。它做的设备叫 MOVIN TRACIN，把激光雷达、摄像头和端侧 AI 装在一起，不用穿动作捕捉服、不用贴标记点、也不用进专门的摄影棚，就能实时把人全身的动作变成三维数据。波士顿动力和 RAI 研究所在用它做机器人的遥操作和训练。一年卖了 200 多台到 20 多个国家，收入约 75 万美元。这笔钱要拿去建一个专门攒「真实世界数据」的研发中心，给世界模型用。",
        "detailed_info": "据 2026 年 11 月 5 日的公告与报道，韩国物理 AI 初创公司 MOVIN 完成约 750 万美元 A 轮融资，累计融资超过 1000 万美元。本轮由 IMM Investment 领投，IBK Industrial Bank of Korea 与 Voyager Ventures 参投，既有股东 Atinum Investment、NAVER D2SF 与 Schmidt 跟投。\n\n公司成立于 2023 年，核心产品 MOVIN TRACIN 将 LiDAR、光学相机视觉与自研端侧 AI 结合，无需动捕服、标记点或专用摄影棚即可实时捕捉全身动作并输出三维运动数据。商业化进展：产品上市一年内实现约 75 万美元收入，在 20 多个国家售出 200 多台，其中北美为最大市场。\n\n客户与技术背书：技术已被波士顿动力（Boston Dynamics）与 RAI Institute 用于机器人遥操作与训练；MOVIN 是 NVIDIA SOMA 在韩国的唯一 Launching Adoption Partner。\n\n资金用途：支持全球市场扩张、端侧多模态 AI 能力提升，并在韩国设立新的研发中心，聚焦为世界模型开发构建真实世界数据集。CEO Byeoli Choi 表示，人体运动数据正在成为 AI 理解与交互物理世界的关键数据源。",
        "ai_comment": "这是一条「数据供给侧」的信号，而不是「动捕替代光学方案」的技术突破信号。需要算清楚三件事：第一，约 75 万美元收入 / 200 多台，意味着单机均价约 3500~3700 美元级别（未含软件订阅），这个价位已经低于传统光学动捕棚的零头，才是它能进机器人实验室的原因；第二，无标记方案在遮挡（多人交互、工具遮挡）下的鲁棒性未见第三方评测，金融时报级别的对比数字也没有，商业化口碑目前主要靠两家美国客户背书；第三，它真正的护城河可能是「数据」而不是「硬件」——如果 200 多台设备采集的动作数据回流成训练集，这部分资产的价值远超硬件营收。要盯的是：与 NVIDIA SOMA 的合作是否形成排他、单机是否支持多人/多视角、以及它标注的精度（关节角度误差）在公开基准上的表现。",
        "key_facts": [
          {
            "metric": "A 轮融资额",
            "value": "约 750 万美元",
            "baseline": "累计融资超 1000 万美元",
            "condition": "IMM Investment 领投，IBK、Voyager 参投"
          },
          {
            "metric": "首年营收 / 出货",
            "value": "约 75 万美元 / 200 多台",
            "baseline": "覆盖 20 多个国家，北美为最大市场",
            "condition": "上市一年内，均价约 3500~3700 美元/台（推算）"
          },
          {
            "metric": "核心客户",
            "value": "Boston Dynamics、RAI Institute",
            "baseline": "用于机器人遥操作与训练",
            "condition": "公司披露，未给出部署规模"
          },
          {
            "metric": "生态位",
            "value": "NVIDIA SOMA 韩国唯一 Launching Adoption Partner",
            "baseline": "—",
            "condition": "「唯一」为公司口径"
          },
          {
            "metric": "成立时间",
            "value": "2023 年",
            "baseline": "至 A 轮约 3 年",
            "condition": "总部韩国"
          }
        ],
        "position_relation": "与 2026-11-03「简智 1 亿美元、GenRobot 1 亿美元、机器科学数亿元 —— 一天三笔融资砸向具身数据」同属「具身数据采集」这条主线，但位置更靠上游：国内那三家做的是数据工厂与采集平台，MOVIN 做的是「把人的动作变成 3D 轨迹」的采集硬件。与 2026-10-28「其域创新手持设备」形成对照——一个采「空间」，一个采「人体运动」。向上接 2026-11-05「优必选 Thinker-Sim」：仿真侧越强，对真实动作数据的需求越刚性。",
        "signal_strength": "中",
        "tags": [
          "MOVIN",
          "动捕",
          "具身智能",
          "LiDAR",
          "动作捕捉",
          "A轮",
          "世界模型数据",
          "波士顿动力"
        ],
        "terms": [
          {
            "term": "无标记动捕（markerless motion capture）",
            "definition_mechanism": "不依赖贴在人体的反光标记点，而是用视觉/深度传感器直接对人体进行姿态估计与三维重建，通过骨骼拓扑约束将关键点映射为关节角度",
            "definition_contrast": "与传统光学动捕相对：光学动捕精度高（亚毫米）但需专用棚、贴点和多机位标定；无标记方案便携、成本低，但在遮挡与快速运动下精度和稳定性明显下降"
          },
          {
            "term": "遥操作（teleoperation）",
            "definition_mechanism": "操作者的动作被实时捕捉并映射到机器人本体上，使机器人复现人的动作；同时采集「动作指令—执行结果」配对数据，可作为模仿学习的训练样本",
            "definition_contrast": "与自主策略相对：遥操作依赖人实时决策、无法规模化并行，但能产生高质量示范数据；自主策略可复制但需要大量示范数据起步"
          }
        ],
        "sources": [
          {
            "url": "https://theaiinsider.tech/2026/11/05/movin-announces-7-5m-series-a-to-expand-ai-motion-capture-for-robotics-and-physical-ai/",
            "type": "news"
          },
          {
            "url": "https://af.net/realtime/movin-raises-7-5m-series-a-for-markerless-ai-motion-capture",
            "type": "news"
          }
        ],
        "date": "2026-11-05",
        "notes": "公告日 2026-11-05，两源（The AI Insider、AIFOD 转引）对金额、投资方、出货量、客户表述一致。单机均价为「营收÷台数」推算值，非厂商公布价格，已在 key_facts 中标注为推算。"
      },
      {
        "item_id": "2026-11-06-B-005",
        "category": "Application",
        "title": "鹿岛建设与 FieldAI 进入全面部署：一年 10 余个工地、2000 余次自主任务，机器人替代工程师做 3D 扫描与进度记录",
        "one_line_judgment": "施工进度管理从「人定期去扫」变成「机器人每天自动扫」，这才是三维重建在工地上真正跑通的商业模式——卖的不是扫描仪，是持续更新的现场数字记录。",
        "image": "",
        "ai_summary": "大白话：日本大型建筑公司鹿岛建设宣布，正式在自己的工地上大规模用上了装 FieldAI 自动驾驶软件（他们叫「物理 AI」）的机器人。一年多时间在 10 多个日本工地跑了 2000 多次自主任务，不是演示，是日常在用。机器人自己探索未知区域建三维地图，之后每天绕场拍照、扫点云，把 360 度照片和彩色高精度点云自动传回云端，工程师看这些记录就能判断施工到哪一步了。目的很实际：工地缺人，把重复的巡场和扫描交给机器人。",
        "detailed_info": "据 2026 年 11 月 5 日公告与报道，日本鹿岛建设（Kajima）宣布已在施工现场全面推开搭载 FieldAI 自主软件（物理 AI）的机器人部署。自 2025 年签订企业级服务协议以来约一年，部署已覆盖日本 10 余个工地，累计完成逾 2000 次自主任务；任务横跨不同机器人型号、作业类型与场地，处于「正在施工、结构与物料位置每日变化」的真实项目中持续使用，而非限定条件下的演示。两家公司自 2023 年起合作，在真实工地打磨技术。\n\n技术构成：系统围绕一个可挂载于不同机器人的「自主单元」构建。相机捕捉障碍物与禁入区域，LiDAR 通过反射激光测距测形并采集点云用于建图；边缘 AI 设备在机身上（而非云端）处理图像与点云，实时判定安全行进方向，因此可在室内、地下等无卫星定位、通信困难的场所自主运行。软件核心为 FieldAI 的 Field Foundation Models，结合数据驱动学习、基于物理的推理与不确定性量化，以应对未学习过的情形与每日变化的环境，并被设计为跨机器人、跨任务的通用自主层，而非按场地定制。\n\n作业闭环：首次启动时机器人自主探索未知区域并生成三维地图；后续每轮避开障碍、拍照与采集点云测量，并随场地变化更新地图；作业结束后返回充电桩上传数据，自动整理后通过网页提供。用户可在平板或电脑上指定目的地派机器人前往并查看实时视频。进度管理方面，自主巡场采集 360 度照片与高分辨率彩色点云，用于判断施工状态与尺寸，形成可复用的现场记录。\n\n同一套软件还支持非工作日、深夜、凌晨的安保巡逻（检测异常时以高强度 LED 与声音告警并实时回传视频），以及震后、暴雨后的灾后应急——在场地安全尚未确认时先由机器人进入采集照片、点云与实时视频。鹿岛计划逐步扩大工地与应用范围，并将该自主软件迁移到其他在研机械上。",
        "ai_comment": "这条的价值在于「频次」而非「精度」：工地上一次性扫描早就有人做，难的是每天刷新。2000 次任务 / 10 余个工地 / 约一年，折算下来每工地每月约 15~17 次、接近每两天一次，这个频次已经能支撑「进度款结算」这种强业务节点。但需要保留：公告未披露合同金额、单车成本、点云精度与拼接误差，也未说明 2000 次任务中有多少是进度扫描、多少是安保巡逻——后者技术门槛低得多，混算会高估进度扫描的成熟度。另需注意「彩色点云」与「高斯泼溅」不是一回事，这里没有用 3DGS。要盯的是：是否接入 BIM 做自动工期比对、单工地月度成本对比人工巡场的降本比例，以及鹿岛是否把成果接进日本国土交通省的 i-Construction 验收体系——那才决定它是不是「可交付成果」。",
        "key_facts": [
          {
            "metric": "累计自主任务",
            "value": "逾 2000 次",
            "baseline": "覆盖日本 10 余个工地，历时约一年",
            "condition": "企业级服务协议签订于 2025 年"
          },
          {
            "metric": "作业频次（折算）",
            "value": "约 15~17 次/工地/月",
            "baseline": "相当于每两天一次巡场",
            "condition": "按 2000 次 ÷ 10 工地 ÷ 12 个月推算，非官方口径"
          },
          {
            "metric": "采集内容",
            "value": "360 度照片 + 高分辨率彩色点云",
            "baseline": "用于判断施工状态与尺寸",
            "condition": "未披露点云精度与拼接误差"
          },
          {
            "metric": "算力位置",
            "value": "边缘端在机身上处理",
            "baseline": "不依赖云端与卫星定位",
            "condition": "支持室内、地下、通信困难场景"
          },
          {
            "metric": "合作起始",
            "value": "2023 年",
            "baseline": "2025 年升级为企业级协议",
            "condition": "合同金额未披露"
          }
        ],
        "position_relation": "与 2026-10-28「Rivian 收购 Third Dimension AI：真实数据转可编辑 3D 仿真」形成应用侧的两极——一个把工地扫描转成仿真数据、一个把工地扫描转成进度记录。与 2026-11-04「河南 3.1 万公里省级数字孪生路网」同属「基础设施持续数字化」，但鹿岛的更新频率是以天计的、河南路网是以年计的，这正说明「重建」的瓶颈已从精度转为更新成本。技术上与 2026-11-03「巨身智能经纬系统（激光雷达+IMU 紧耦合 SLAM）」同源，后者是国内同类能力的供给方。",
        "signal_strength": "中",
        "tags": [
          "鹿岛建设",
          "Kajima",
          "FieldAI",
          "施工数字化",
          "点云",
          "SLAM",
          "数字孪生",
          "自主机器人"
        ],
        "terms": [
          {
            "term": "Field Foundation Models",
            "definition_mechanism": "FieldAI 的机器人自主基础模型，把数据驱动学习、基于物理的推理与不确定性量化三者结合，使机器人在未学习过的场景中也能判断「往哪走是安全的」",
            "definition_contrast": "与传统按场地定制的机器人控制相对：后者每个工地都要重新建图、重新调参，前者被设计成跨机器人、跨任务的通用自主层"
          },
          {
            "term": "边缘 AI 处理",
            "definition_mechanism": "把感知与决策计算放在机器人本体上的计算设备里，而非上传云端，从而在无网络、无 GNSS 的地下或室内也能实时闭环",
            "definition_contrast": "与云端处理相对：云端算力大、可做全局优化，但存在通信延迟与断网风险；边缘侧实时性强但算力受限"
          }
        ],
        "sources": [
          {
            "url": "https://www.unite.ai/kajima-begins-full-scale-rollout-of-robots-with-fieldai-autonomy",
            "type": "news"
          },
          {
            "url": "https://www.securities.io/kajima-rolls-out-fieldai-robot-autonomy-across-construction-sites/",
            "type": "news"
          }
        ],
        "date": "2026-11-05",
        "notes": "公告日 2026-11-05，两源（Unite.AI、Securities.io）对 2000 次任务、10 余个工地、2025 年企业级协议、合作始于 2023 年等关键事实表述一致。合同金额、点云精度、任务类型拆分均未披露，本条未作推断；「约 15~17 次/工地/月」为推算值并已标注。"
      },
      {
        "item_id": "2026-11-06-B-006",
        "category": "Business",
        "title": "超图软件中标人保财险三维空间计算引擎项目：20 套许可 + 25 套 GaussDB 空间扩展，含税 162 万元",
        "one_line_judgment": "三维空间计算第一次以「保险公司的核心系统组件」身份进入采购清单——这说明三维能力正在从项目交付物变成企业 IT 基础设施里的一个标准许可项。",
        "image": "",
        "ai_summary": "大白话：中国人民保险（人保财险）要买三维空间计算引擎软件，最后是超图软件中标，含税 162 万元，买的是 20 套三维空间计算引擎许可，外加 25 套高斯数据库（GaussDB）的空间扩展插件。这件事的意义是：三维空间计算不再只是测绘院做项目时用的工具，而是被保险公司当成 IT 系统里要长期买的「基础设施软件」。",
        "detailed_info": "据中信国际招标 2026 年 11 月 5 日发布的《人保财险 2026 年三维空间计算引擎软件采购项目中选结果公告》：项目编号 XM26JGGP000197（采购代理编号 0733-26094764），采购内容为 20 套三维空间计算引擎软件许可与 25 套 GaussDB 数据库空间扩展插件许可（数量为预估采购上限，后续按实际采购量结算），采购方式为竞争性磋商，采购公告日期 2026 年 10 月 8 日。\n\n中选情况：中选供应商为北京超图软件股份有限公司，含税总价 1,620,000 元；候选供应商为武汉中地软件股份有限公司（仅一家候选，说明参与磋商的供应商数量有限）。采购人为中国人民保险集团股份有限公司，采购代理机构为中信国际招标有限公司。\n\n同日另有两则超图中标信息：酒泉绿能云计算《酒泉市城市信息模型平台建设及时空数据融合应用项目》，超图以 28.5 万元（证券之星披露为 285.38 万元，公告原文金额部分被掩码）中标，评审得分 87.76；黑龙江机场集团地理信息服务平台建设承揽项目，超图以 128.5 万元中标。",
        "ai_comment": "这条的价值不在 162 万元这个数字，而在「许可结构」：20 套引擎 + 25 套数据库空间插件，说明客户是把三维空间计算当成与数据库并列的基础组件买，走的是长期许可而非项目外包。需要注意三点：第一，中标金额为「含税总价」，且数量是预估上限、按实际结算，最终合同额可能低于 162 万元；第二，公告未说明具体用途（车险定损的三维建模？农险地块？还是不动产标的的三维管理？），无法判断其与三维重建链路的耦合深度；第三，同日三笔中标（人保 162 万、酒泉 28.5 万、黑龙江机场 128.5 万）合计约 320 万元，对超图 2025 年 14.98 亿元营收而言量级很小，不应据此推断业绩拐点——超图 2026 年上半年营收 4.27 亿元、同比 -29.18%，净利 -1.29 亿元，这才是主线。此外酒泉项目的金额在公告原文中被掩码，证券之星给出的 285.38 万元与「28*****.00」的位数不符，本条按公告可见位数记为 28.5 万元并标注分歧。",
        "key_facts": [
          {
            "metric": "中标金额",
            "value": "含税 162 万元",
            "baseline": "20 套三维空间计算引擎 + 25 套 GaussDB 空间扩展插件",
            "condition": "数量为预估上限，按实际采购量结算"
          },
          {
            "metric": "采购方式",
            "value": "竞争性磋商",
            "baseline": "候选供应商仅武汉中地软件 1 家",
            "condition": "采购公告日 2026-10-08，结果公告日 2026-11-05"
          },
          {
            "metric": "同期另一中标（酒泉 CIM）",
            "value": "公告金额部分掩码，可辨位数为 28.5 万元",
            "baseline": "证券之星披露为 285.38 万元，两者位数不符",
            "condition": "评审得分 87.76；存在两个金额口径，并列标注"
          },
          {
            "metric": "同期另一中标（黑龙江机场）",
            "value": "128.5 万元",
            "baseline": "地理信息服务平台建设承揽项目",
            "condition": "11-04 公布结果"
          },
          {
            "metric": "超图 2026H1 业绩",
            "value": "营收 4.27 亿元、同比 -29.18%；净利 -1.29 亿元",
            "baseline": "2025 全年营收 14.98 亿元、净利 0.47 亿元",
            "condition": "三笔中标合计约 320 万元，占 2025 年营收约 0.2%"
          }
        ],
        "position_relation": "与 2026-11-02「三项钢铁智能制造国标发布：数字孪生系统首次有三层架构技术要求」同属「三维/孪生能力进入企业 IT 标准件」这条线——一个从标准侧立规，一个从采购侧落地。与 2026-11-05「中国电影科学技术研究所 196.6 万元采购电影数字资产扫描建模方案」构成「政府采购三维能力」的两种形态：电影所买的是采集与建模服务，人保买的是软件许可。与 2026-11-04「河南省级数字孪生路网」同为公共部门/大型机构的底座投入。",
        "signal_strength": "弱",
        "tags": [
          "超图软件",
          "人保财险",
          "三维空间计算",
          "GaussDB",
          "GIS",
          "招投标",
          "空间数据库"
        ],
        "terms": [
          {
            "term": "三维空间计算引擎",
            "definition_mechanism": "对三维对象做空间关系运算（包含、相交、邻近、缓冲区、体积/面积量算）的软件内核，通常以 SDK/服务形式嵌入业务系统，而不是直接面向终端用户的建模工具",
            "definition_contrast": "与「三维建模软件」相对：建模软件产出模型，空间计算引擎消费模型并回答「这两栋楼是否重叠」「这个标的物边界内有多少棵树」这类空间查询"
          },
          {
            "term": "数据库空间扩展插件",
            "definition_mechanism": "在关系型数据库（本例为华为 GaussDB）之上增加几何/地理数据类型与空间索引，使空间查询可以下推到数据库引擎执行，避免把全量数据搬到应用层计算",
            "definition_contrast": "与纯应用层空间计算相对：插件方案在大数据量下性能与一致性更好，但受数据库厂商生态约束"
          }
        ],
        "sources": [
          {
            "url": "https://bidding.citic/jhwzb/27442.jhtml",
            "type": "official"
          },
          {
            "url": "https://wap.stockstar.com/detail/RB2026110400040113",
            "type": "news"
          }
        ],
        "date": "2026-11-05",
        "notes": "人保财险项目结果公告日期为 2026-11-05，落在报告日 2026-11-06 窗口内。酒泉 CIM 与黑龙江机场两笔为 11-04 公布，仅作为同业参照写入，不单独成条。酒泉项目金额在公告原文中被掩码为「28*****.00」，证券之星转述为 285.38 万元，两者不一致，本条并列标注、未擅自统一。"
      },
      {
        "item_id": "2026-11-06-B-007",
        "category": "Research",
        "title": "CrossPressor：免训练的证据路由把前馈 3DGS 长序列跨视角融合提速 26.12 倍，入选 WACV 2027",
        "one_line_judgment": "前馈式重建的瓶颈已经从「单帧精度」转到「长序列的可扩展性」——这篇论文的解法是改路由而不是重训模型，意味着现有预训练权重的生命周期被显著延长。",
        "image": "",
        "ai_summary": "大白话：现在有一种 AI 技术（前馈 3D 高斯溅射），拍几张照片就能直接生成三维场景，速度很快。但输入的图片一多（比如绕一栋楼拍几百帧），它就会算不动、内存爆掉。之前有人用「锚点压缩」的办法缓解——只从少量关键帧里解码三维点。问题是关键帧数量固定，周围要汇总的普通帧越来越多，就堵住了。这篇论文叫 CrossPressor，它不动原来的模型权重（不用重新训练），只改「证据怎么分配给各个视角」的策略，让长序列也能算得动：融合环节最快快 26 倍，端到端快 1.43 倍，画质基本不掉。",
        "detailed_info": "论文《CrossPressor: Scalable Cross-View Fusion for Feed-Forward 3D Gaussian Splatting》，作者 Yuxi Hu、Wenhao Dong、Jun Zhang、Friedrich Fraundorfer，2026 年 11 月 4 日提交至 arXiv（2611.06258v1），已被 WACV 2027 接收。\n\n问题定义：前馈式 3D 高斯溅射（feed-forward 3D-GS）在长多视角序列上难以扩展。基于锚点的压缩方法（如 ZPressor）通过「只从一小组紧凑的锚点特征图解码高斯」来抑制表示规模的增长；但锚点数量固定，每个锚点需要聚合的支持视角（support views）越来越多，形成「表示—融合失配」（representation–fusion mismatch）。\n\n方法：CrossPressor 提出一种免训练（training-free）的可扩展锚点融合方法。它保留所有面向解码器的锚点查询（decoder-facing anchor queries），同时通过「覆盖循环证据路由」（coverage-cycled evidence routing）约束随视角增长而膨胀的支持序列——把保留的空间证据分散到各个支持视角与融合层上，并保证每个支持视角都被代表。此外，在 K/V 投影之前做路由、配合联合上下文打包（joint context packing），在不重训练的前提下进一步降低支持侧融合成本。\n\n结果：在保持接近稠密融合（dense fusion）的重建质量的同时，跨视角融合最高提速 26.12 倍，长输入序列上端到端加速 1.43 倍。项目页为 yuhsihu.github.io/CrossPressor。",
        "ai_comment": "读这篇要抓住「training-free」这四个字的分量：它意味着不用重训就能插到现有的 ZPressor 类前馈模型上，工程落地门槛极低，这是它比「又刷高 PSNR」更有产业价值的地方。但有三处必须自己核：第一，26.12 倍是「跨视角融合」这一子模块的加速，端到端只有 1.43 倍——说明融合并不是长序列的主要耗时项，剩下的大头在编码与解码，这也解释了为什么端到端提升有限；第二，「接近稠密融合」是定性表述，需要看表中的具体 PSNR/SSIM 降幅与视角数 N 的关系曲线，尤其是 N 从 64 增到 512 时的退化速度；第三，实验是否只在合成/室内数据集（如 RE10K、DL3DV）上做，若没有大规模室外航拍序列，就不能直接外推到无人机测绘场景。要盯的指标是：在固定显存下的最大可接受视角数，以及路由策略对「视角分布不均匀」（比如绕楼拍时总有遮挡段）的鲁棒性。",
        "key_facts": [
          {
            "metric": "跨视角融合加速比",
            "value": "最高 26.12 倍",
            "baseline": "相对稠密融合（dense fusion）",
            "condition": "子模块级加速，非端到端"
          },
          {
            "metric": "端到端加速比",
            "value": "1.43 倍",
            "baseline": "长输入序列场景",
            "condition": "说明融合环节并非端到端主要瓶颈"
          },
          {
            "metric": "训练成本",
            "value": "免训练（training-free）",
            "baseline": "可直接插到 ZPressor 类锚点压缩方法上",
            "condition": "无需重训，保留原有解码器查询"
          },
          {
            "metric": "发表状态",
            "value": "arXiv 2611.06258v1，2026-11-04 提交",
            "baseline": "已被 WACV 2027 接收",
            "condition": "项目页 yuhsihu.github.io/CrossPressor"
          }
        ],
        "position_relation": "与 2026-10-28「GPA-VGGT：不重训练就把前馈重建提速 3.2 倍」构成同一思路的两次出现——都在「不动权重、只改推理路径」上做文章，说明前馈重建的工程优化空间正被系统性地挖掘。与 2026-11-06 同日 GaussianRenderFormer（用 Transformer 替掉光栅化）在方向上互补：一个压缩跨视角融合，一个替换渲染后端。向上接 2026-10-31「Speridlabs Idol 单图生成 3DGS」：单图侧在拼质量，多图侧在拼可扩展性。",
        "signal_strength": "中",
        "tags": [
          "3DGS",
          "前馈重建",
          "CrossPressor",
          "WACV2027",
          "arXiv",
          "长序列",
          "ZPressor",
          "免训练"
        ],
        "terms": [
          {
            "term": "锚点压缩（anchor-based compression）",
            "definition_mechanism": "不把每一帧都编成高斯，而是选少量「锚点帧」作为特征图载体，解码时只从这些锚点里预测高斯，从而把表示规模从「随帧数线性增长」压成「随锚点数增长」",
            "definition_contrast": "与稠密融合相对：稠密融合每帧都参与，质量上限高但显存随帧数线性膨胀；锚点法省显存，代价是锚点要聚合越来越多视角时会出现信息瓶颈"
          },
          {
            "term": "前馈式重建（feed-forward reconstruction）",
            "definition_mechanism": "用一次网络前向传播直接从输入图像预测三维表示（高斯/点图/深度），不需要像传统 SfM+MVS 那样做逐场景迭代优化",
            "definition_contrast": "与逐场景优化（如原始 3DGS 的每场景训练）相对：前馈快、可泛化到新场景，但对输入分布敏感、在长序列上扩展性差"
          }
        ],
        "sources": [
          {
            "url": "https://arxiv.org/abs/2611.06258",
            "type": "paper"
          },
          {
            "url": "https://yuhsihu.github.io/CrossPressor",
            "type": "paper"
          }
        ],
        "date": "2026-11-04",
        "notes": "arXiv 提交时间为 2026-11-04 10:07 UTC（北京时间 11-04 18:07），落在报告日 2026-11-06 窗口内，按事件日（提交日）标注。摘要与接收信息取自 arXiv 原文页；作者机构 arXiv 页面未列明，本条未作推断。"
      },
      {
        "item_id": "2026-11-06-D-001",
        "category": "Research",
        "title": "GaussianRenderFormer：用 Transformer 取代光栅化器直接渲染 3D 高斯，Objaverse 未见物体 PSNR 38.08dB、较光栅化基线低 5.94dB",
        "one_line_judgment": "把渲染这一步也变成可学习的算子，理论上能让「生成」和「渲染」在一个可微闭环里一起训练——但现在它还没赢过光栅化，差距落在视角解码器的瓶颈上。",
        "image": "",
        "ai_summary": "大白话：三维高斯溅射（3DGS）要显示成画面，传统上是靠显卡「光栅化」把一个个椭球画上去。这篇论文问了一个大胆的问题：能不能让神经网络自己学会画，完全不要光栅化器？他们做了一个叫 GaussianRenderFormer 的 Transformer，输入一堆高斯和一台虚拟相机的位置，直接输出图片。在 300 个没见过的物体上，它的画质是 38.08 分（PSNR），而传统光栅化同样输入能到 44.02 分——也就是还差 6 分左右。作者说瓶颈在「视角解码器」，并且不排除是训练不够。",
        "detailed_info": "论文《GaussianRenderFormer: Transformer-based Rendering of 3D Gaussian Splats》，arXiv 2611.05593v1，作者 Levy、Benaim（希伯来大学），投稿 TMLR 审稿中，全文 32 页。\n\n核心问题：神经网络能否在没有光栅化器的前提下，自己学会渲染 3D 高斯溅射？作者提出 GaussianRenderFormer——一个 Transformer，输入一组高斯与一个相机，直接输出图像。每个高斯在「视角无关编码器」中变成一个 token；「视角相关解码器」则通过注意力机制，把相机射线的小块区域解码成像素。\n\n训练与结果：模型在 26,820 个 Objaverse 物体上训练，每个物体裁剪至 20,000 个高斯。在 300 个未见物体上，对完整的、未裁剪的高斯做渲染，PSNR 为 38.08 dB；而对同样裁剪后的输入做光栅化，PSNR 达到 44.02 dB。\n\n差距归因：作者认为这一差距不是泛化问题，诊断结果与「视角解码器存在瓶颈」一致——把每个高斯的投影足迹（projected footprint）显式告诉解码器（这本来是它可以自行推断的），PSNR 可提升 1.4 dB。同时作者并不排除训练不足的可能。代码、训练模型与视频见项目页 svlwoof.github.io/gaussianrenderformer。",
        "ai_comment": "这不是一篇「刷新 SOTA」的论文，而是一篇「重新划定可微边界」的论文，读法要调整：38.08 vs 44.02 的差距在 6 dB 量级，意味着短期不可能替代光栅化用于生产渲染。真正的价值在于——渲染一旦可微且可学习，3DGS 就能与上游生成模型、下游任务损失（比如检测、导航的奖励）端到端联合训练，这是光栅化器做不到的（光栅化不可微或不稳定可微）。但要警惕三点：第一，训练集只有 Objaverse 单物体、每物体裁到 2 万高斯，与真实场景（数百万高斯、含背景与光照）差异巨大；第二，PSNR 单项指标对渲染质量判断力有限，缺少 LPIPS/SSIM 与视频时序一致性数据；第三，32 页、TMLR 在审，说明方法论证充分但结论尚未经同行评议。要盯的是：在百万级高斯场景下的推理显存与速度，以及它是否真能端到端反传到上游生成器。",
        "key_facts": [
          {
            "metric": "未见物体 PSNR",
            "value": "38.08 dB",
            "baseline": "同输入光栅化基线 44.02 dB（低 5.94 dB）",
            "condition": "300 个未见过 Objaverse 物体"
          },
          {
            "metric": "训练规模",
            "value": "26,820 个 Objaverse 物体，每物体裁至 20,000 高斯",
            "baseline": "真实场景常达百万级高斯",
            "condition": "单物体、以物体为中心"
          },
          {
            "metric": "瓶颈量化",
            "value": "提供投影足迹可 +1.4 dB",
            "baseline": "作者归因为视角解码器瓶颈，未排除训练不足",
            "condition": "诊断实验，非最终方案"
          },
          {
            "metric": "发表状态",
            "value": "arXiv 2611.05593v1，32 页",
            "baseline": "TMLR 在审",
            "condition": "代码与权重已公开"
          }
        ],
        "position_relation": "与同日 CrossPressor 形成「前馈 3DGS 加速」的两条互补路径：CrossPressor 压缩跨视角融合、GaussianRenderFormer 替换渲染后端。向上接 2026-10-31「ACD-GS 非对称曲率感知致密化」——那篇在减少高斯数量，这篇在改变渲染方式，两者若结合可同时降低表示规模与渲染成本。向下对产业侧的影响是间接的：只有当渲染可微，MoWorld 这类「4D 高斯资产」才可能与物理损失联合优化。",
        "signal_strength": "弱",
        "tags": [
          "3DGS",
          "Transformer",
          "可微渲染",
          "GaussianRenderFormer",
          "arXiv",
          "TMLR",
          "Objaverse"
        ],
        "terms": [
          {
            "term": "光栅化（rasterization）",
            "definition_mechanism": "把三维图元（高斯椭球、三角面）投影到二维屏幕并按深度排序、逐像素混合颜色的过程；在 3DGS 中由 CUDA 定制实现，速度极快但不可微（或仅近似可微）",
            "definition_contrast": "与神经渲染相对：光栅化是显式、确定、快速但难与上游网络联合训练；神经渲染可微、可端到端优化，但速度慢、易出现视角不一致"
          },
          {
            "term": "投影足迹（projected footprint）",
            "definition_mechanism": "一个三维高斯投影到图像平面后覆盖的像素区域大小与形状，取决于高斯的三维协方差与相机投影矩阵",
            "definition_contrast": "与「高斯中心投影点」相对：只知道中心点无法判断该椭球覆盖多大屏幕面积，而覆盖面积直接决定混合权重"
          }
        ],
        "sources": [
          {
            "url": "https://arxiv.org/abs/2611.05593",
            "type": "paper"
          },
          {
            "url": "https://svlwoof.github.io/gaussianrenderformer",
            "type": "paper"
          }
        ],
        "date": "2026-11-04",
        "notes": "arXiv 2611.05593v1 提交时间为 2026-11-03 20:26 UTC（北京时间 11-04 04:26），落在报告日 2026-11-06 窗口（11-05 08:00~11-06 08:00）内，按事件日标注为 11-04。数据取自论文摘要与二手聚合站转述，PSNR 数值与裁剪规模两源一致。"
      }
    ]
  },
{
    "report_id": "daily-2026-11-07",
    "window_start": "2026-11-06T08:00:00+08:00",
    "window_end": "2026-11-07T08:00:00+08:00",
    "generated_at": "2026-11-07T06:30:00+08:00",
    "summary": {
      "window_takeaway": "这一天的主角是「接口」而非「产品」：其域把十亿级高斯场景塞进虚幻引擎、World Labs 把实时世界模型搬成可嵌入运行的 Frameboy、群核把空间理解模型和 InteriorGS 数据集直接开源——三家都在做同一件事，把三维重建的结果变成别人能调用的组件，而不是自家软件里的成品。",
      "direction": "产业侧的主线从「谁能重建得更准」转向「谁能被集成」：其域用 LCC Plugin for UE 打通引擎侧、World Labs 用 Frameboy 打通运行侧、群核用 InteriorGS 打通训练侧，海克斯康把质量 AI 塞进工业检测流程、华测把雷达+视觉融合进地灾监测的运维闭环。采集硬件的发布会明显减少，交付形态的竞赛开始了。",
      "academic_vs_industry": "本窗口内 arXiv 当日批次尚未发布（最新提交止于 2026-11-05T18:59:33Z，早于窗口起点），因此本期无学术条目，学术侧与产业侧的对照暂缺一天。产业侧对应地呈现出「工程集成期」特征：不再比论文指标，而是比兼容的格式、比能跑在多少帧、比能被几家公司拿去用。",
      "remember_one_thing": "其域把 23.5 km²、62 亿高斯的城镇模型在一台工作站上进到虚幻引擎里跑起来——重建的交付物不再是报告里的截图，而是可以直接走进去的场景。"
    },
    "items": [
      {
        "item_id": "2026-11-07-A-001",
        "category": "Software",
        "title": "其域创新发布 LCC Plugin for UE：23.5km²、62 亿高斯城镇模型可完整载入虚幻引擎，首个面向十亿级 3DGS 的 UE 插件",
        "one_line_judgment": "3DGS 过去卡在「渲得出但用不起来」，这次是把十亿级高斯直接变成引擎里的资产——重建成果第一次能作为一个场景被下游开发者引用，而不是一段视频。",
        "image": "",
        "ai_summary": "大白话：以前用 3D 高斯泼溅扫出来的城市，基本只能当一段「能走进去看的视频」，想拿去做游戏、做仿真没门。其域这次做了个虚幻引擎插件，把 23.5 平方公里、62 亿个高斯点的城镇模型整块塞进 UE 里，光照、阴影、地面倒影都是真的，还能跟 nDisplay、Cesium for Unreal、CARLA 这些已经做仿真和虚拟拍摄的管线接上。手机 VR 端也能流式看，不用把整座城都下载下来。",
        "detailed_info": "2026 年 11 月 6 日，其域创新（XGRIDS）发布 LCC Plugin for UE（Unreal Engine 插件），官方称这是首个面向十亿级 3D 高斯泼溅场景的虚幻引擎插件。\n\n规模能力：插件支持将 23.5 平方公里的城镇级模型、约 62 亿个高斯点完整载入虚幻引擎，单工作站即可实时渲染，不需要多机集群。该 23.5 km² 场景正是其域此前公开的闽宁镇空地一体 3DGS 数字模型，本次以插件形态再次作为性能样例。\n\n格式与互通：核心是 LCC2 格式的开放——插件直接读取 LCC2，同时兼容 PLY、SOG、SPZ 等主流高斯泼溅交换格式，意味着第三方用其他工具生成的高斯资产也能导入。发布方称 LCC2 格式规范对外开放，供引擎方与工具链厂商接入。\n\n渲染质量：插件在引擎内还原了真实阴影与地面倒影，解决高斯泼溅「只有颜色没有光影交互」的常见缺陷；高斯场景可与引擎内的常规几何体、材质、光照系统共存，从而支持在实景底模上叠加动态物体（车辆、行人、机械）。\n\n管线兼容：官方列出三类已适配的下游管线——nDisplay 与 disguise（虚拟拍摄、LED 墙）、Cesium for Unreal（地理坐标系与全球地形）、CARLA（自动驾驶仿真）。这三者恰好对应虚拟制片、GIS 与自动驾驶三个最依赖「真实感 + 地理精度」的场景。\n\n流式与终端：插件支持基于 LoD 的流式串流，按视点动态加载不同层级的高斯，因此可在 PICO、Meta Quest 等一体机 VR 头显上浏览大场景，而不必把完整模型下载到端侧。\n\n配套硬件侧，其域的手持/背包扫描产品线（Lixel 系列）负责数据采集，LCC 负责组织与管理，UE 插件负责呈现与交互——本次发布补齐了「采集—组织—呈现」链条的最后一环。",
        "ai_comment": "这条的技术含量不在「能进 UE」，而在「62 亿高斯 + 单工作站 + 实时」。公开的 3DGS 引擎插件此前大多在百万到千万高斯量级可用，跨到十亿级要解决的不只是显存，还有高斯排序、LoD 分块与阴影投射的重算成本——官方没有披露具体帧率、显卡型号与显存占用，这是本条最大的信息缺口。第二处要谨慎的是「真实阴影与倒影」：高斯泼溅本身不含法线与材质，实现光影需要在插件层做近似（如屏幕空间或预烘焙），其物理正确性与引擎原生光栅化管线不可等价。第三，「首个」是发布方自述，未见第三方横向评测佐证。要盯的指标：1080p/4K 下的实际帧率与显存峰值、LoD 切换时的可见跳变、以及 LCC2 规范是否真被第三方工具（如 SuperSplat、Postshot）采纳——格式开放才是这条的真正胜负手。",
        "key_facts": [
          {
            "metric": "可载入场景规模",
            "value": "23.5 km² / 约 62 亿高斯点",
            "baseline": "公开的 3DGS 引擎插件多在百万~千万高斯量级",
            "condition": "官方样例场景（闽宁镇），单工作站实时渲染"
          },
          {
            "metric": "兼容格式",
            "value": "LCC2（自研） + PLY / SOG / SPZ",
            "baseline": "多数插件仅支持单一自研格式",
            "condition": "官方称 LCC2 规范对外开放"
          },
          {
            "metric": "已适配管线",
            "value": "nDisplay / disguise、Cesium for Unreal、CARLA",
            "baseline": "对应虚拟拍摄、GIS、自动驾驶仿真三类下游",
            "condition": "官方列出的适配清单，未披露适配深度"
          },
          {
            "metric": "终端支持",
            "value": "PICO / Meta Quest 一体机 VR 流式浏览",
            "baseline": "整城模型不下发到端侧，按 LoD 串流",
            "condition": "官方说明，未披露端侧帧率"
          }
        ],
        "position_relation": "与其域自身 2026-11-03「LCC 格式打通英伟达 Omniverse」构成同一策略的第二步：先在 Omniverse 侧证明格式可被工业仿真生态读取，再在 UE 侧证明十亿级场景可被实时渲染。与 2026-10-28「闽宁镇 23.5km² 空地一体 3DGS 数字模型」是同一条资产的两个时点——上次是「做出来了」，这次是「能用了」。横向对照 2026-11-07 的 World Labs Frameboy：一个把高斯场景塞进游戏引擎供开发者编排，一个把神经渲染搬上云端供浏览器实时观看，路径相反但目标同一——让三维内容进入别人的运行时。",
        "signal_strength": "强",
        "tags": [
          "其域创新",
          "XGRIDS",
          "LCC",
          "3DGS",
          "高斯泼溅",
          "虚幻引擎",
          "Unreal Engine",
          "数字孪生",
          "虚拟拍摄"
        ],
        "terms": [
          {
            "term": "LCC2 格式",
            "definition_mechanism": "其域创新自研的大规模三维场景组织格式，把点云、高斯、网格按空间分块并建立层级索引，使超大体量场景可以按视点分块调度与流式加载",
            "definition_contrast": "与单一 PLY/SPZ 文件相对：后两者把全部高斯塞进一个文件，加载即全量入显存；LCC2 强调分块索引与 LoD，代价是需要专门的读写工具链"
          },
          {
            "term": "LoD 流式串流",
            "definition_mechanism": "按相机距离与视角把场景划分为不同细节层级，只加载当前可见且足够精细的块，远距离用低层级替代，从而把显存与带宽需求压到常数级",
            "definition_contrast": "与全量加载相对：全量加载画质一致但受显存硬限；LoD 可上到城市级，代价是切换时可能出现跳变、远景细节被主动丢弃"
          }
        ],
        "sources": [
          {
            "url": "https://mp.weixin.qq.com/s/xgrids-lcc-plugin-ue",
            "type": "official"
          }
        ],
        "date": "2026-11-06",
        "notes": "发布时间 2026-11-06 18:28（其域创新微信公众号），落在报告日 2026-11-07 窗口内。本条参数（23.5 km²、62 亿高斯、兼容 PLY/SOG/SPZ、nDisplay/disguise、Cesium for Unreal、CARLA、PICO/Meta Quest 流式）均取自其域官方发布内容；官方未披露帧率、显卡型号与显存占用，本条未作推断。原文链接为公众号地址，若后续失效可按标题「LCC Plugin for UE」在其域官网检索。"
      },
      {
        "item_id": "2026-11-07-A-002",
        "category": "Software",
        "title": "World Labs 发布 Frameboy：把实时世界模型搬进浏览器，云端流式最高 1440p / 15fps，约 67ms 一帧",
        "one_line_judgment": "世界模型从「生成一段可看的视频」变成「一个可被嵌入调用的运行时」——15fps 不算流畅，但足以让它在网页里被当成一个场景而非一段片子。",
        "image": "",
        "ai_summary": "大白话：World Labs 出了个叫 Frameboy 的东西，可以说是他们那个「一句话生成 3D 世界」的 Atlas 的实时版。以前生成完你得等，现在是你在里面走、它就现算，画面从云端 GPU 实时传到你浏览器，最高 1440p、大约每秒 15 帧（一帧 67 毫秒左右）。它还接了个叫 Viewfinder 的功能，能让你先摆好视角再生成，现在还是内测。这是 AMD 花 82 亿美元买下 World Labs 之后，这家公司第一次公开上新。",
        "detailed_info": "2026 年 11 月 6 日（北京时间），World Labs 发布 Frameboy，官方定位为其实时世界模型（real-time world model）的运行形态，是此前 Atlas 产品的实时化版本。\n\n运行方式：与 Atlas「先完整生成、再漫游查看」的离线流程不同，Frameboy 在用户移动视点时就地推理并渲染下一帧，通过云端的 GPU 集群做推理、把画面以视频流的形式推到用户的浏览器里。用户不需要本地显卡，也不下载场景资产。\n\n性能参数：官方给出的上限为 1440p 分辨率、最高 15 帧/秒，折算单帧耗时约 67 毫秒。这组数字意味着它当前的定位是「可交互的浏览」而非「可玩的游戏」——第一人称漫游的最低可接受帧率通常被认为是 30fps，15fps 会有明显顿感。\n\n功能集成：Frameboy 集成了 Viewfinder（封闭内测），后者允许用户在生成前指定或约束相机视角与构图，把「先出图再挑角度」变成「先定角度再出图」，对内容创作者更接近传统拍摄的工作流。\n\n对比坐标：官方沟通中将其与 Google DeepMind 的 Genie 3 对标——Genie 3 公开的能力为 720p / 24fps。Frameboy 在分辨率上占优（1440p vs 720p）、在帧率上落后（15fps vs 24fps），两者的取舍方向不同：一个押画面精度，一个押时间连续性。\n\n公司背景：World Labs 由李飞飞创办，2026 年 11 月 AMD 宣布以 82 亿美元收购（该交易已在 2026-11-04 日报中收录）。Frameboy 是收购消息公布后该公司首个公开产品动作，被外界视为对「世界模型如何商业化」的一次回答——不是卖模型权重，而是卖实时运行服务。",
        "ai_comment": "要把这条看得准，关键是把「实时」的定义拆开。67ms/帧里有相当部分是网络往返与视频编码，不是纯粹模型推理；官方也未披露推理本身占多少。因此 15fps 既可能是模型能力上限，也可能是工程取舍，这直接决定它离「可玩」还有多远。第二，1440p 是通过视频流送达的，等于把渲染结果压缩后传输，交互延迟（输入到画面响应）会显著高于帧间隔，第一人称快速转头时的迟滞感可能比 15fps 这个数字所暗示的更严重。第三，与 Genie 3 的对比要小心口径：Genie 3 的 720p/24fps 是官方早期公布值，两者测试条件未必一致，不宜直接排出高下。商业上真正值得关注的是它选择了「浏览器 + 云端」而非「端侧」，这与 2026-11-06 收录的魔芯 MoWorld 2.0（昇腾训练、主打国产算力成本）是两条完全相反的路径：一个卖服务、一个卖基础设施自主。要盯：Viewfinder 何时开放、是否提供 API、以及单用户运行成本能否压到可规模化。",
        "key_facts": [
          {
            "metric": "最高分辨率 / 帧率",
            "value": "1440p / 15 fps",
            "baseline": "Google DeepMind Genie 3 公开值 720p / 24fps",
            "condition": "云端 GPU 推理 + 视频流推送至浏览器"
          },
          {
            "metric": "单帧耗时",
            "value": "约 67 毫秒",
            "baseline": "第一人称漫游通常以 30fps（33ms）为可接受下限",
            "condition": "含网络往返与编码，官方未拆分推理耗时"
          },
          {
            "metric": "运行环境",
            "value": "浏览器 + 云端 GPU，无需端侧显卡",
            "baseline": "Atlas 为离线生成后漫游",
            "condition": "与 Atlas 并列的实时形态"
          },
          {
            "metric": "收购背景",
            "value": "AMD 82 亿美元收购 World Labs",
            "baseline": "收购后首个公开产品动作",
            "condition": "交易于 2026-11 月初公布，已在本站 2026-11-04 日报收录"
          }
        ],
        "position_relation": "与 2026-11-04「AMD 82 亿美元收购 World Labs」构成因果接续：收购宣布后不到一周，World Labs 交出第一个产品级答案——不卖权重、卖实时运行服务，这正好对上 AMD 买 GPU 生态的动机（推理算力需求）。与 2026-11-06「物原科技 1.05 亿美元种子轮」「魔芯 MoWorld 2.0」形成世界模型的三条路线对照：物原卖物理动力学表征、魔芯卖国产算力上的产业基础设施、World Labs 卖云端实时服务。同日其域 LCC Plugin for UE 走的是相反方向——把内容沉到本地引擎，而非把算力放到云端。",
        "signal_strength": "强",
        "tags": [
          "World Labs",
          "Frameboy",
          "世界模型",
          "实时渲染",
          "AMD",
          "李飞飞",
          "Atlas",
          "Genie 3"
        ],
        "terms": [
          {
            "term": "实时世界模型",
            "definition_mechanism": "模型不预生成完整场景，而是在用户每次移动视点时就地推理出下一帧画面，从而实现「想看到哪就现算到哪」的连续漫游",
            "definition_contrast": "与离线生成相对：离线生成一次成型、可任意回放但无法交互；实时生成可交互，代价是分辨率、帧率与场景一致性受算力限制"
          },
          {
            "term": "云端流式渲染",
            "definition_mechanism": "渲染在远端 GPU 完成，结果经视频编码后通过低延迟协议传到客户端解码显示，客户端只负责输入采集与画面呈现",
            "definition_contrast": "与本地渲染相对：云端不挑终端硬件但引入网络延迟与带宽成本；本地渲染无网络依赖但受终端算力硬限"
          }
        ],
        "sources": [
          {
            "url": "https://www.worldlabs.ai/blog/frameboy",
            "type": "official"
          }
        ],
        "date": "2026-11-06",
        "notes": "发布与报道时间为北京时间 2026-11-06，落在报告日 2026-11-07 窗口内。1440p/15fps、约 67ms/帧、Viewfinder 内测、与 Genie 3（720p/24fps）的对比口径均来自 World Labs 官方发布及其对外沟通；AMD 82 亿美元收购为 11 月初已公开交易，交易金额与状态引用自本站 2026-11-04 条目所载来源。官方未公布推理耗时占比与 API 开放计划，本条未作推断。"
      },
      {
        "item_id": "2026-11-07-A-003",
        "category": "Hardware",
        "title": "蔡司发布 TALOS 计量机器人：3.30m 半径内体积不确定度优于 100µm，无需外部跟踪与标记点",
        "one_line_judgment": "把计量级精度从「恒温实验室的固定工位」搬到「车间里会自己走的机器人」，检测环节第一次可以跟着产线节拍走，而不是让工件排队等测量。",
        "image": "",
        "ai_summary": "大白话：蔡司出了台会自己走的测量机器人 TALOS。它不用在地上贴标记点、也不用外部跟踪仪，自己就能知道自己在哪；在一个半径 3.3 米的范围内走动测量，误差不超过 0.1 毫米（100 微米）。头上两颗 2400 万像素相机，每秒拍 100 次（快扫时 200 次），测量范围 500 毫米，配四个多方向的闪光灯把反光和阴影压下去。它有一套组合：TALOS MR 做测量、AX 做自动化、RT 做实时跟踪、Safeguard 保安全，配套的蔡司 INSPECT 软件能自动规划扫描路径。",
        "detailed_info": "2026 年 11 月 6 日，蔡司（ZEISS）在其官方新闻中心发布 TALOS 计量机器人（TALOS metrology robot），定位为可移动的工业级三维测量系统。\n\n精度与范围：官方给出的核心指标是——在以设备为中心、半径 3.30 米的测量空间内，体积不确定度（volumetric uncertainty）优于 100 微米。这一口径是「体积不确定度」而非单点重复性，意味着误差在整个三维空间内都被约束，对大型工件的整体形位检测更有意义。\n\n定位方式：TALOS 不依赖外部跟踪系统（如激光跟踪仪、摄影测量相机阵列），也不需要在被测物或地面粘贴标记点，设备自身完成空间定位。这消除了传统移动测量方案中最耗时的「布点—标定—撤点」环节，也让它在无法布点的现场（油污车间、户外、在役设备旁）可用。\n\n传感配置：双 2400 万像素相机，采集频率 100 Hz，快速扫描模式下可达 200 Hz；单次测量体积 500 毫米（该数值指单站可覆盖的测量范围），配合四个多向特征闪光（multi-directional feature flash）从不同角度打光，抑制高反光金属与深孔阴影带来的数据缺失。\n\n产品组合：官方按用途拆成四个型号——TALOS MR（测量机器人本体）、TALOS AX（自动化单元，用于产线集成）、TALOS RT（实时跟踪）、TALOS Safeguard（安全防护，用于人机共处的车间环境）。\n\n软件：配套 ZEISS INSPECT 软件，支持扫描路径自动规划——软件根据工件 CAD 模型自动生成覆盖全部待测特征的机器人运动轨迹，减少人工示教。",
        "ai_comment": "这条的分量在「无需外部跟踪 + 无需标记点」这两个约束同时成立。传统的移动式高精度测量要么靠激光跟踪仪实时跟随（设备贵、需通视），要么靠摄影测量布点（耗工时、怕遮挡），TALOS 把定位做进本体，等于把「测量准备时间」从小时级压到零——这是产线节拍检测的前提。但有两处必须留白：第一，100 微米是「体积不确定度」，与蔡司自家三坐标（通常亚微米到几微米）不在一个量级，它替代的是「便携式扫描 + 关节臂」这一档，不是替代计量室；第二，半径 3.30 米意味着单站覆盖约 34 平方米地面、有效测量球体积有限，大工件必须多次转站，而多次转站的拼接误差官方未给出——这恰恰是移动测量的老问题。另外官方未披露定位原理（视觉 SLAM？结构光自定位？激光测距辅助？），这决定了它对环境光照与纹理的敏感程度。要盯：转站拼接精度、工作温度范围、以及在铸件/焊接件这类弱纹理工件上的实测表现。",
        "key_facts": [
          {
            "metric": "体积不确定度",
            "value": "优于 100 µm",
            "baseline": "蔡司三坐标测量机通常在亚微米~几微米量级",
            "condition": "在半径 3.30 m 测量空间内测得，为体积口径非单点重复性"
          },
          {
            "metric": "定位方式",
            "value": "无需外部跟踪系统、无需标记点",
            "baseline": "传统移动测量需激光跟踪仪跟随或摄影测量布点",
            "condition": "设备自定位，官方未披露定位原理"
          },
          {
            "metric": "相机与采集频率",
            "value": "双 2400 万像素 / 100 Hz（快扫 200 Hz）",
            "baseline": "配四个多向特征闪光抑制反光与阴影",
            "condition": "单次测量体积 500 mm"
          },
          {
            "metric": "产品组合",
            "value": "TALOS MR / AX / RT / Safeguard",
            "baseline": "分别对应测量、自动化、实时跟踪、安全防护",
            "condition": "配套 ZEISS INSPECT 自动路径规划"
          }
        ],
        "position_relation": "与此前收录的 2026-10-29「先临 FreeScan Combo Wireless 550g 无线计量级」构成移动测量的两条路线：先临走「手持、人带着设备走」，蔡司走「设备自己走、人不用管」，前者灵活、后者可自动化，共同把计量从固定工位推向现场。与 2026-11-07 海克斯康 HEX.AI 同日构成工业质量的两端——蔡司补「测得准、测得动」，海克斯康补「判得快、判得对」。更早的 2026-10-28「其域手持设备 10 分钟采集」属通用采集，精度档次不同，不构成直接竞争。",
        "signal_strength": "强",
        "tags": [
          "蔡司",
          "ZEISS",
          "TALOS",
          "计量机器人",
          "工业测量",
          "体积不确定度",
          "移动测量",
          "ZEISS INSPECT"
        ],
        "terms": [
          {
            "term": "体积不确定度",
            "definition_mechanism": "在整个三维测量空间内、对空间任意位置的长度量测所给出的误差上限，反映了设备在空间不同位置（而非仅中心点）的精度一致性",
            "definition_contrast": "与单点重复性相对：重复性只说「同一点测多次散不散」，体积不确定度说「不同位置测得准不准」，后者才是大尺寸工件检测的关键指标"
          },
          {
            "term": "无标记点自定位",
            "definition_mechanism": "设备通过自身携带的相机/传感器观测环境特征与自身运动，实时解算自身在工件坐标系中的位姿，从而不需要在被测物或地面上粘贴反光标记",
            "definition_contrast": "与标记点/外部跟踪相对：标记点方案精度稳定但准备耗时且怕遮挡；自定位省去准备，代价是精度受环境纹理、光照与累积漂移影响"
          }
        ],
        "sources": [
          {
            "url": "https://www.zeiss.com/metrology/en/news/talos-metrology-robot.html",
            "type": "official"
          }
        ],
        "date": "2026-11-06",
        "notes": "发布日 2026-11-06（蔡司官方新闻中心 newsroom）。本条参数（<100µm 体积不确定度 @ 3.30m 半径、双 2400 万像素、100Hz/200Hz、500mm 测量体积、四个多向特征闪光、MR/AX/RT/Safeguard 四型号、ZEISS INSPECT 自动路径规划）取自蔡司官方发布；官方未披露定位原理、转站拼接精度与工作温度范围，本条未作推断。"
      },
      {
        "item_id": "2026-11-07-B-001",
        "category": "Hardware",
        "title": "华测导航发布 Z8 视融合雷达：合成孔径雷达+视觉+边缘计算一体，800m 监测距离、采样间隔不超过 1 分钟",
        "one_line_judgment": "把合成孔径雷达、相机与边缘算力塞进一台设备，意味着形变监测从「装一堆传感器再拉线组网」变成「立一根杆就能上线」，地灾监测的部署成本结构被改写。",
        "image": "",
        "ai_summary": "大白话：华测导航做了台叫 Z8 的监测雷达，把雷达、摄像头和一台小电脑合在一起。它看得很远，800 米内的边坡、大坝、矿山都能盯；用的是合成孔径雷达加视觉，能看到毫米级都不到的位移；水平方向能转 360 度，一分钟内至少扫一次；下雨下雪、零下 40 度到 65 度都能工作，防护等级 IP66；位移超阈值会分四级报警。配套一个叫 MAS 的软件管数据。",
        "detailed_info": "2026 年 11 月 6 日，华测导航（CHC Navigation）在官网发布 Z8 视融合雷达（视觉融合合成孔径雷达形变监测系统）。\n\n技术形态：Z8 将合成孔径雷达（SAR）、光学视觉与边缘计算单元集成于一体机。雷达负责大范围、全天候的形变测量，视觉提供实景影像用于目标确认与误报剔除，边缘算力在设备端完成数据处理与初步判定，无需把原始数据全部回传云端。\n\n监测能力：最远监测距离 800 米；在雷达视线方向（视向）可达亚毫米级位移探测精度；水平方向支持 360° 旋转调节，可覆盖环形或大角度场景；采样间隔不超过 1 分钟，即对同一目标每分钟至少完成一次观测，足以支撑滑坡、危岩的快速形变捕捉。\n\n环境适应性：防护等级 IP66，工作温度范围 -40℃ 至 65℃，适配野外长期无人值守部署。\n\n报警与应用：设备内置四级报警机制（按位移量与速率分级），可对接监测平台推送预警。配套 MAS 软件用于数据管理、形变时序分析与报表输出。典型场景为地质灾害隐患点、露天矿山边坡、水利大坝、公路铁路沿线高陡边坡。\n\n产品定位上，Z8 属于「普适型」而非「科研型」监测装备：一体机形态省去了雷达主机、云台、相机、工控机分体部署与现场组网的工作量，落地一根立柱、通电通网即可开始观测，部署时间从传统方案的数天压缩到数小时。这一取舍也意味着它的精度上限低于科研级地基干涉雷达，换取的是可批量布点的成本与便捷——对地灾隐患点这类「点多、面广、单体预算低」的场景，恰好是更合适的匹配。",
        "ai_comment": "「亚毫米级」这个说法必须补上下文：它指的是沿雷达视线方向（line-of-sight）的位移分量精度，而不是三维位移精度。边坡滑动往往以水平+垂直复合方向发生，视向精度再高，也需要多视角观测或与 GNSS/全站仪联测才能还原真实位移矢量——这是所有地基干涉雷达的共同局限，不是 Z8 独有。第二，800 米量程与亚毫米精度通常不能同时取到最优：距离越远、入射角越斜，精度与相干性都会下降，官方未披露不同距离档位的精度曲线。第三，1 分钟采样间隔对应的是「重访周期」，实际形变速率上限还受大气扰动校正能力约束——雨雾天气下大气延迟是这类系统的主要误差源，光学视觉的引入正是为了辅助校正与剔除误报，但其效果缺乏实测数据。要盯：多视角组网能力、大气校正方法、以及与自家 GNSS 监测产品线的融合方案——华测的真正优势在于它能同时供雷达、GNSS、全站仪，做成「多源联测」才是差异化。",
        "key_facts": [
          {
            "metric": "最远监测距离",
            "value": "800 m",
            "baseline": "多数便携式地基雷达在数百米量级",
            "condition": "官方标称，未披露该距离下的精度衰减"
          },
          {
            "metric": "位移探测精度",
            "value": "亚毫米级（雷达视向）",
            "baseline": "为视线方向分量，非三维位移精度",
            "condition": "需与 GNSS/全站仪联测才能还原真实位移矢量"
          },
          {
            "metric": "采样间隔",
            "value": "≤ 1 分钟",
            "baseline": "可支撑滑坡、危岩快速形变捕捉",
            "condition": "水平 360° 旋转调节覆盖"
          },
          {
            "metric": "环境适应性",
            "value": "IP66 / -40℃~65℃",
            "baseline": "野外长期无人值守部署",
            "condition": "内置四级报警，配 MAS 软件"
          }
        ],
        "position_relation": "与此前收录的 2026-11-05「Seyond 图达通数字孪生」同属「感知设备 + 数字孪生平台」的组合，但侧重不同：图达通做城市级交通感知的数字底座，华测做单点边坡的形变时序监测，一个是面、一个是点。与 2026-10-28「河南数字孪生路网」在场景上衔接——路网数字孪生的运维端正需要这类低成本形变监测。词库内的中海达、南方测绘同为测绘装备厂商，华测此举把产品线从「测量」延伸到「长期监测服务」。",
        "signal_strength": "中",
        "tags": [
          "华测导航",
          "CHCNAV",
          "Z8",
          "合成孔径雷达",
          "形变监测",
          "地质灾害",
          "边缘计算",
          "边坡监测"
        ],
        "terms": [
          {
            "term": "合成孔径雷达（SAR）",
            "definition_mechanism": "利用雷达平台（或天线）相对目标的运动，把不同时刻回波按相位相干合成，等效出一个远大于实际天线尺寸的虚拟孔径，从而获得高分辨率的二维成像与亚毫米级相位测量能力",
            "definition_contrast": "与光学成像相对：光学依赖可见光、受昼夜与天气影响；SAR 自带照射源、全天时全天候，但成像为相干斑噪声、可读性差，且只能测视线方向位移"
          },
          {
            "term": "视线方向位移",
            "definition_mechanism": "雷达测量的是目标沿雷达波束指向（径向）的位移分量，垂直于波束方向（切向）的运动不产生多普勒/相位变化，因此无法被直接观测",
            "definition_contrast": "与三维位移矢量相对：单台雷达只能给一维投影，需多视角组网或与 GNSS、全站仪联测才能还原完整位移方向"
          }
        ],
        "sources": [
          {
            "url": "https://www.huace.cn/news/chcnav-z8-vision-fusion-radar",
            "type": "official"
          }
        ],
        "date": "2026-11-06",
        "notes": "发布日 2026-11-06（华测导航官网）。本条参数（800 m 监测距离、亚毫米级视向精度、360° 水平调节、采样间隔 ≤1 分钟、IP66、-40~65℃、四级报警、MAS 软件）取自华测官方发布；官方未披露不同距离档位的精度曲线、多视角组网方案与大气校正方法，本条未作推断。"
      },
      {
        "item_id": "2026-11-07-B-002",
        "category": "Business",
        "title": "群核科技开源空间理解与生成模型及 InteriorGS 数据集，黄晓煌称 80%~90% 代码由 AI 编写",
        "one_line_judgment": "把空间智能的模型和数据集一起开源，等于把「室内场景理解」这块基础设施让给全行业——群核在赌自己从卖软件变成卖底座。",
        "image": "",
        "ai_summary": "大白话：群核科技（做酷家乐那家）把自家的空间理解模型、空间生成模型，还有一个叫 InteriorGS 的数据集都开源了。说白了就是把「让 AI 看懂一个房间长什么样、能生成一个房间」的能力免费放出来，国内外已经有不少机器人和大模型公司在用。董事长黄晓煌还说，他们现在 80% 到 90% 的代码是 AI 写的，两年前这个比例只有 10% 到 20%。另外还开源了 SpatialHug 和 SpatialVerse。",
        "detailed_info": "2026 年 11 月 6 日，新华网报道群核科技（酷家乐母公司）在空间智能方向的开源进展。\n\n开源内容：群核科技已开源三类资产——空间理解模型、空间生成模型，以及配套数据集 InteriorGS（Interior Gaussian Splatting，室内高斯泼溅数据集）。官方称国内外多家机器人与大模型公司已基于其成果开展合作。此外，公司还开源了 SpatialHug 与 SpatialVerse 两个项目。\n\n数据集意义：InteriorGS 以室内场景为对象，用 3D 高斯泼溅表示空间，天然带有可渲染、可交互的属性——相比纯几何网格或深度图，高斯表示更适合直接喂给视觉模型做训练与仿真，这与具身智能对「可渲染、可漫游、物理近似」的训练场景需求高度契合。\n\nAI 写码比例：董事长黄晓煌在报道中给出的数据是，群核当前 80%~90% 的代码由 AI 编写，而两年前这一比例仅为 10%~20%。这一指标被用作「空间智能 + AI 编程」双重提效的佐证。\n\n业务背景：群核科技的核心资产是酷家乐积累的海量室内户型与家具模型数据，开源模型与数据集本质上是把这批数据资产「产品化」为行业基础设施。\n\n时机选择的意味：这件事发生在国内具身智能融资密集、但高质量中文室内场景数据极度稀缺的时间窗内。机器人公司做家庭场景训练，最缺的不是策略算法，而是「中国家庭的房子长什么样」——户型尺度、家具尺寸、材质光照都与海外数据集不同。InteriorGS 若真能覆盖这批数据，其稀缺性来自「本土户型分布」，而不是模型本身的参数规模，这也是开源最可能换来生态位的地方。",
        "ai_comment": "这条要分两层看。第一层是数据资产的确权与变现：酷家乐多年积累的室内户型、家具、材质数据是群核最厚的护城河，把 InteriorGS 开源等于主动放弃「数据独占」这条路径，转而用「事实标准」换生态位——这是典型的平台策略，成功的前提是别人真的会用，而不是下完就搁置。第二层是「80%~90% 代码由 AI 写」这个数字：它是一个管理者口径的估算，没有说明统计范围（是否含前端、配置、测试、生成代码），也不等同于「研发效率提升 4~8 倍」，因为在 AI 写码比例上升的同时，代码评审与返工的工作量结构会变。把它当作行业信号可以，当作量化结论则过早。第三，InteriorGS 用高斯泼溅而非网格，对训练具身模型有优势（渲染快、真实感强），但对需要精确碰撞检测与物理仿真的场景仍是弱项——官方未说明是否提供配套的碰撞体或语义标注。要盯：HuggingFace/GitHub 上的下载与引用量、是否有机器人公司公开基于它训练的策略模型。",
        "key_facts": [
          {
            "metric": "开源范围",
            "value": "空间理解模型 + 空间生成模型 + InteriorGS 数据集",
            "baseline": "另开源 SpatialHug、SpatialVerse",
            "condition": "国内外多家机器人/大模型公司已基于其成果合作"
          },
          {
            "metric": "AI 写码占比",
            "value": "80%~90%",
            "baseline": "两年前为 10%~20%",
            "condition": "董事长黄晓煌口径，未说明统计范围"
          },
          {
            "metric": "数据表示",
            "value": "3D 高斯泼溅（InteriorGS）",
            "baseline": "多数室内数据集为网格或 RGB-D",
            "condition": "适合渲染与训练，碰撞检测需另行提供几何体"
          }
        ],
        "position_relation": "与 2026-11-06「物原科技 1.05 亿美元种子轮」「魔芯 MoWorld 2.0」构成空间智能的三条路线：物原与魔芯做「生成 + 物理」，群核做「数据 + 理解」并选择开源，三者共同把「空间智能」从一个概念推向可调用的组件。与 2026-11-04「蚂蚁灵波开源 2.0」同属国内厂商的开源竞赛——开源正在成为三维/空间智能赛道获取生态位的主要手段。向下游看，InteriorGS 直接对应 2026-11-05「优必选 Thinker-Sim」所代表的具身仿真训练需求。",
        "signal_strength": "中",
        "tags": [
          "群核科技",
          "酷家乐",
          "InteriorGS",
          "开源",
          "空间智能",
          "3DGS",
          "具身智能",
          "数据集"
        ],
        "terms": [
          {
            "term": "InteriorGS",
            "definition_mechanism": "以 3D 高斯泼溅表示的室内场景数据集，每个场景由大量带位置、协方差、颜色与不透明度的三维高斯组成，可实时渲染出照片级的新视角画面",
            "definition_contrast": "与网格（mesh）数据集相对：高斯渲染真实感强、重建门槛低，但不含显式表面，无法直接做碰撞检测与物理仿真，需要额外提取几何体"
          },
          {
            "term": "空间理解模型",
            "definition_mechanism": "输入室内场景的多视角图像或三维表示，输出房间结构、物体类别与位置、可行走区域等结构化语义，供机器人在场景中定位与决策使用",
            "definition_contrast": "与纯视觉大模型相对：后者理解「图里有什么」，前者理解「东西在三维空间的哪里、能不能过去」，多了几何与尺度的约束"
          }
        ],
        "sources": [
          {
            "url": "https://www.news.cn/tech/20261106/qunhe-spatial-intelligence-open-source.html",
            "type": "news"
          }
        ],
        "date": "2026-11-06",
        "notes": "报道日 2026-11-06（新华网），落在报告日 2026-11-07 窗口内。开源范围（空间理解模型、空间生成模型、InteriorGS 数据集、SpatialHug、SpatialVerse）与「80%~90% 代码由 AI 编写、两年前 10%~20%」均取自新华网报道中黄晓煌表述；具体开源仓库地址与许可证报道未给出，本条未虚构链接。"
      },
      {
        "item_id": "2026-11-07-B-003",
        "category": "Application",
        "title": "海克斯康进博会全球首发 HEX.AI 工业质量智能体：AI 瑕疵检测、CT 缺陷识别与自动编程，宣称检测效率提升 300%",
        "one_line_judgment": "工业质量的竞争从前端「测得到」转向后端「判得准、判得快」，HEX.AI 是海克斯康把二十年检测数据变成模型资产的第一步。",
        "image": "",
        "ai_summary": "大白话：海克斯康在进博会上全球首发了一个叫 HEX.AI 的东西，专做工业质量。能干四件事：自动找产品表面瑕疵、自动找边、从工业 CT 图像里识别内部缺陷、自动写测量程序。官方说能 100% 检出、效率提升 300%、成本降 75%——这三个数字是厂商宣传口径，看的时候得打个折。它能跟自家的工业 CT、OPTIV S 影像仪和 HBM 测量系统连起来用。",
        "detailed_info": "2026 年 11 月 6 日，海克斯康（Hexagon）在第八届中国国际进口博览会（进博会）上全球首发 HEX.AI。\n\n产品定位：HEX.AI 是面向工业质量的垂直领域 AI 智能体（agent），并非通用大模型，而是把海克斯康在测量与检测领域积累的数据、工艺知识与算法打包成可调用的能力层。\n\n四类核心能力：\n一、AI 瑕疵检测——对工件表面进行缺陷识别与分类，替代人工目检；\n二、自动寻边——在影像测量中自动识别工件边缘，减少人工框选边缘点；\n三、CT 缺陷识别——从工业 CT 断层图像中自动定位气孔、裂纹、夹杂等内部缺陷；\n四、自动编程——根据检测任务自动生成测量程序，降低对编程人员的依赖。\n\n系统集成：HEX.AI 可与海克斯康的工业 CT 系统、OPTIV S 影像测量仪以及 HBM（Hexagon Building Measurement / 结构测量）系统集成，形成「采集—识别—判定」闭环。\n\n效果宣称：官方给出的量化指标为检测准确性 100%、检测效率提升 300%、检测成本下降 75%。\n\n场景意义：工业质量检测长期存在「前端自动化、后端人工化」的断层——扫描与成像设备已高度自动化，但缺陷判定、测量编程仍依赖经验丰富的工程师，是整条检测链上最难扩产也最难复制的一环。HEX.AI 的四项能力正好对应这个断层的四个环节：检测替代目检、寻边替代手选、CT 识别替代逐层看图、自动编程替代人工示教。\n\n落地条件：这类垂直 AI 的效果高度依赖训练数据与客户工件的匹配度。海克斯康的优势在于其设备装机量大、积累了大量带标注的检测样本，但每个客户的工件、材料、缺陷形态差异极大，模型能否在换客户时保持准确率，取决于是否支持小样本微调与本地化训练。这一层在首发披露中未涉及。",
        "ai_comment": "三个数字都要按宣传口径读。「100% 检测准确性」在工业语境里几乎不可能无条件成立——任何一个检测系统在换型、换批次、来料表面状态变化时都会有漏检与误检，这个数字必然对应特定工况、特定缺陷类型与特定样本集；官方未披露测试样本量与缺陷类别覆盖，因此不能当作通用性能指标。「效率提升 300%」与「成本下降 75%」都取决于基线（人工目检 vs 传统编程），不同基线会得出完全不同的倍数。真正有产业意义的是「自动编程」这一项：影像测量与三坐标的程序编写长期依赖熟练工程师，是检测环节最难自动化、也最贵的一环，如果 AI 能吃掉这部分，价值远大于瑕疵检测本身。另一处值得注意的是形态——叫「智能体」意味着它可能是对话式或任务式的交互（自然语言下指令），但官方简介未说明交互方式，需要看现场演示。要盯：是否支持第三方设备（还是只绑自家 CT/OPTIV）、缺陷模型的训练是否需要客户自备标注数据、以及实际换型时的重训练成本。",
        "key_facts": [
          {
            "metric": "核心能力",
            "value": "瑕疵检测 / 自动寻边 / CT 缺陷识别 / 自动编程",
            "baseline": "传统流程依赖人工目检与人工编程",
            "condition": "进博会全球首发"
          },
          {
            "metric": "宣称效果",
            "value": "准确性 100%、效率 +300%、成本 -75%",
            "baseline": "厂商宣传口径，未披露测试样本与工况",
            "condition": "不构成通用性能承诺"
          },
          {
            "metric": "集成系统",
            "value": "工业 CT、OPTIV S 影像仪、HBM 系统",
            "baseline": "均为海克斯康自有产品线",
            "condition": "是否支持第三方设备官方未说明"
          }
        ],
        "position_relation": "与同日 2026-11-07「蔡司 TALOS 计量机器人」构成工业质量的两端：蔡司解决「在哪测、测得动」，海克斯康解决「测完谁来判、判得快」。与 2026-11-06「超图人保财险」等既有条目的差别在于，本条属检测流程内部的效率工具，不涉及空间数据。词库内海克斯康（Hexagon / Leica Geosystems）此前以硬件与扫描仪形象出现，本条标志其向「软件 + 数据」侧迁移。",
        "signal_strength": "中",
        "tags": [
          "海克斯康",
          "Hexagon",
          "HEX.AI",
          "工业质量",
          "进博会",
          "工业CT",
          "瑕疵检测",
          "自动编程"
        ],
        "terms": [
          {
            "term": "工业 CT 缺陷识别",
            "definition_mechanism": "用 X 射线对工件做多角度扫描并重建三维体数据，再通过图像分割模型在体素中定位气孔、裂纹、夹杂等内部缺陷的位置与尺寸",
            "definition_contrast": "与表面视觉检测相对：视觉只能看外表面，CT 能看内部封闭结构，代价是扫描慢、设备贵、对大尺寸高密度工件穿透能力有限"
          },
          {
            "term": "自动寻边",
            "definition_mechanism": "在影像测量中，算法根据灰度梯度自动定位工件轮廓边缘点，替代人工在图像上逐个框选边缘，从而批量生成测量要素",
            "definition_contrast": "与人工取点相对：自动寻边一致性好、速度快，但在弱对比、毛刺、反光边缘上易误判，仍需人工复核"
          }
        ],
        "sources": [
          {
            "url": "https://www.hexagonmi.com.cn/news/hexai-cIIE-2026",
            "type": "official"
          }
        ],
        "date": "2026-11-06",
        "notes": "首发于 2026-11-06 进博会现场，落在报告日 2026-11-07 窗口内。四类能力与「100% 准确性 / 效率 +300% / 成本 -75%」均引自海克斯康现场发布口径，官方未披露测试样本、工况与基线定义，本条在 ai_comment 中已标注为宣传口径。"
      },
      {
        "item_id": "2026-11-07-B-004",
        "category": "Business",
        "title": "奥比中光投资者交流披露：2025 年全球机器人 3D 视觉市占 29.0% 居首，与创想三维联合推出便携 3D 扫描仪 Pika",
        "one_line_judgment": "3D 视觉的「卖零件」生意正在分层：机器人侧卖深度相机做成标准件，消费侧卖整机扫描仪找增量——奥比中光同时在两头下注，靠的是同一套深度感知模组。",
        "image": "",
        "ai_summary": "大白话：奥比中光在投资者交流里说了几件事。第一，2025 年全球机器人用的 3D 视觉，它占了 29%，排第一，服务了 7000 多家客户，其中 1000 多家是机器人公司。第二，跟大晓机器人签的万台采购已经在交付了。第三，跟创想三维一起做了个便携 3D 扫描仪叫 Pika，只有 100×60×35 毫米、260 克，说是全球第一款 AI 便携 3D 扫描仪。第四，越南工厂要到 2027 年才投产。",
        "detailed_info": "2026 年 11 月 6 日，奥比中光（Orbbec）披露最新一期投资者关系活动记录，要点如下。\n\n市场地位：公司称 2025 年在全球机器人 3D 视觉市场的份额为 29.0%，位居第一。这一口径来自第三方市场研究机构的统计，具体机构名称与统计方法在披露摘要中未展开。\n\n客户规模：累计服务客户超过 7,000 家，其中机器人相关公司超过 1,000 家。\n\n订单进展：与大晓机器人的万台级采购合作已进入交付阶段。该采购此前已在公开信息中出现，本次为交付进度的更新。\n\n消费级新品：与创想三维（Creality）联合推出便携式 3D 扫描仪 Pika。机身尺寸 100×60×35 毫米、重量 260 克，官方称为全球首款 AI 便携 3D 扫描仪，定位消费级与创客市场。\n\n产能布局：越南工厂预计 2027 年投产，用于海外产能配套与供应链分散。\n\n业务结构解读：本次交流实际透出的是三层收入结构——底层是卖给机器人厂商的深度相机模组（大晓万台采购即此层），中层是卖给算法公司的 3D 视觉开发套件与数采硬件（EGO/WristCam/UMI/Hub），表层是与创想三维联名的消费级整机 Pika。三层共用同一套深度感知与结构光/ToF 模组供应链，这是它能在 7,000+ 客户量级上摊薄研发成本的原因。",
        "ai_comment": "「29.0% 全球第一」这个数字要找到出处才算数——3D 视觉在机器人领域的市场边界本来就模糊（是否含工业 3D 相机、是否含双目结构光、是否含激光雷达），口径不同结论可能完全不同；而且这是「2025 年」的历史份额，与当前的竞争格局（禾赛、速腾在机器人激光雷达侧的进攻）并非同一战场。真正值得记的是 Pika 这条：奥比中光过去是以「卖模组/相机给厂商」的 B 端形象出现，Pika 是它第一次以联合品牌做 C 端整机——这意味着它开始碰「品牌 + 渠道」，而这两项恰恰是它最薄的一环，所以选择与创想三维（在消费 3D 打印与扫描有渠道）联名是合理打法。260 克、100×60×35mm 的形态与「AI 便携」的描述，指向的是手机配套或随身扫描场景，与 2026-10-28 收录的 2026-10-28 其域手持设备（工业级）不在同一档。要盯：Pika 的实际精度与售价（本次披露未给）、越南工厂投产前的关税与供应链风险。",
        "key_facts": [
          {
            "metric": "机器人 3D 视觉全球份额",
            "value": "29.0%（2025 年，第一）",
            "baseline": "第三方机构统计，具体机构与口径未展开",
            "condition": "为 2025 年历史份额，非当期"
          },
          {
            "metric": "客户规模",
            "value": "7,000+ 家（含 1,000+ 机器人公司）",
            "baseline": "累计口径",
            "condition": "投资者关系活动披露"
          },
          {
            "metric": "Pika 便携扫描仪",
            "value": "100×60×35 mm / 260 g",
            "baseline": "称全球首款 AI 便携 3D 扫描仪",
            "condition": "与创想三维联合推出，面向消费级/创客"
          },
          {
            "metric": "订单进展",
            "value": "大晓机器人万台采购进入交付",
            "baseline": "此前已公开的采购合作",
            "condition": "交付阶段，非新增签约"
          }
        ],
        "position_relation": "与 2026-11-05/11-06 披露的「无本体数据采集平台升级」（EGO/WristCam/UMI/Hub 四形态、批量交付）属同一家公司的两条线：一条卖机器人侧的深度感知与数采硬件，一条卖消费侧整机。与 2026-11-06「大晓机器人 Kairos 3.1 × 海光」形成上下游呼应——大晓买奥比的视觉，奥比买海光的算力适配，国产具身链条在同一周内互相咬合。与词库内禾赛、速腾（激光雷达侧）在机器人感知上构成互补而非替代：深度相机解决近距稠密感知，激光雷达解决远距与弱纹理。",
        "signal_strength": "中",
        "tags": [
          "奥比中光",
          "Orbbec",
          "Pika",
          "创想三维",
          "3D 视觉",
          "深度相机",
          "便携扫描仪",
          "越南工厂"
        ],
        "terms": [
          {
            "term": "机器人 3D 视觉市占率",
            "definition_mechanism": "按出货量或营收统计深度相机/3D 视觉模组在机器人应用领域的份额，反映厂商在该细分市场的供给地位",
            "definition_contrast": "与整体 3D 视觉市场相对：后者还包含工业检测、消费电子、医疗等；与激光雷达市场更不可比，两者统计边界重叠但产品形态不同"
          },
          {
            "term": "无本体数据采集",
            "definition_mechanism": "不依赖机器人本体，而用穿戴式或手持式设备（相机、腕部相机、手持夹爪等）采集人类操作过程的多模态数据，供具身模型做模仿学习",
            "definition_contrast": "与遥操作采集相对：遥操作数据质量高但成本高、规模受限；无本体采集便宜、可规模化，代价是动作与本体的对应关系需要重定向"
          }
        ],
        "sources": [
          {
            "url": "https://www.orbbec.com.cn/index/Investor/investor_details/id/xxx.html",
            "type": "official"
          },
          {
            "url": "https://www.stcn.com/article/detail/orbbec-investor-20261106.html",
            "type": "news"
          }
        ],
        "date": "2026-11-06",
        "notes": "披露日 2026-11-06（投资者关系活动记录表）。29.0% 份额、7,000+ 客户、1,000+ 机器人公司、大晓万台交付、Pika 尺寸重量、越南 2027 投产均取自该次交流披露；第三方机构名称、Pika 售价与精度未在披露中给出，本条未作推断。官方 IR 页面 URL 为栏目路径示意，具体公告编号以巨潮资讯网披露原文为准。"
      },
      {
        "item_id": "2026-11-07-B-005",
        "category": "Software",
        "title": "大晓机器人 Kairos 3.1 完成海光 DCU 与 C86 适配：480P 文生视频单卡 12.42 秒，对标性能由 62% 提升至 94.2%",
        "one_line_judgment": "国产算力从「能跑起来」到「跑得跟英伟达差不多」，94.2% 这个数字的分量不在于它有多高，而在于它证明了迁移路径可复制。",
        "image": "",
        "ai_summary": "大白话：大晓机器人把自己的视频生成模型 Kairos 3.1 搬到国产的海光芯片上跑通了——海光的深算三号 DCU 加 C86 处理器。搬完之后，一段 480P 的视频在单张卡上生成只要 12.42 秒。跟英伟达方案比，性能从原来的 62% 提到了 94.2%，涨了 32 个百分点。为了做到这个，他们把原来用的 Triton 编译器换掉、重新编译了 flash-linear-attention、还把数据排布从 NCHW 改成 NHWC。他们的模型已经在即时零售场景里跑数万个 SKU、13 个原子动作。",
        "detailed_info": "2026 年 11 月 6 日，大晓机器人披露其视频生成模型 Kairos 3.1 在国产算力平台上的适配结果。\n\n适配平台：海光深算三号 DCU（GPGPU 加速卡）与海光 C86 CPU。这两者构成国产 CPU + GPGPU 的组合，替代此前的英伟达 GPU 方案。\n\n性能结果：480P 分辨率文生视频，单卡生成耗时 12.42 秒。与英伟达方案的对标性能从适配前的 62% 提升至 94.2%，提升 32.2 个百分点。\n\n关键优化手段：\n一、编译器迁移——替换原先使用的 Triton 编译器，改为适配海光平台的编译路径；\n二、算子重编译——对 flash-linear-attention 等核心算子重新编译以匹配 DCU 的指令集与内存层级；\n三、数据排布调整——将张量布局从 NCHW 改为 NHWC，以匹配 DCU 的访存特性。\n\n业务场景：Kairos 已在即时零售场景落地，覆盖数万个 SKU、13 个原子动作（拣选、抓取、放置等基本操作单元）。即时零售的前置仓特点是 SKU 密度高、商品形态差异大、补货频繁，对视觉识别的泛化能力要求高于标准化产线；把视频生成模型用在这样的场景，通常是用于生成训练数据或做动作序列仿真，而非直接控制机械臂。\n\n适配方法的意义：三条优化路径分别对应三个不同层级的问题——编译器是工具链层、flash-linear-attention 是算子层、NCHW→NHWC 是访存层。三层全部动过，说明这不是「装个驱动就能跑」的浅层适配，而是把模型真正下沉到目标硬件的内存与指令特性上。这类工作最耗人力也最容易沉淀为可复用资产。",
        "ai_comment": "94.2% 是个漂亮的数字，但要问清楚基线的定义：它对比的是英伟达哪一档卡、在什么 batch size 与什么精度（FP16/BF16/FP8）下？换卡后如果精度降档，94.2% 的可比性会打折。第二，12.42 秒生成 480P 视频，这个分辨率在当下属于低档（主流商用已到 720P/1080P），说明该模型对算力的需求被主动压低以适配国产卡——这是一种务实但受限的工程取舍。第三，真正的技术含量在「Triton → 海光编译路径」这一步：Triton 是英伟达生态的算子描述语言，脱离它意味着要重写算子并自行调优，这类迁移工作一旦做成模板，就可以复用到其他模型，这才是 94.2% 之外更值钱的部分。要盯：是否公开迁移工具链、720P 下的性能保留率、以及多卡并行的扩展效率。",
        "key_facts": [
          {
            "metric": "适配平台",
            "value": "海光深算三号 DCU + C86 CPU",
            "baseline": "此前为英伟达 GPU 方案",
            "condition": "Kairos 3.1 视频生成模型"
          },
          {
            "metric": "生成耗时",
            "value": "480P 单卡 12.42 秒",
            "baseline": "480P 属当前低分辨率档",
            "condition": "单卡单次生成"
          },
          {
            "metric": "对标性能",
            "value": "62% → 94.2%（+32.2pct）",
            "baseline": "对标英伟达方案，具体卡型与精度口径未披露",
            "condition": "适配优化后"
          },
          {
            "metric": "关键优化",
            "value": "替换 Triton、重编译 flash-linear-attention、NCHW→NHWC",
            "baseline": "三项均为算子/访存层适配",
            "condition": "官方披露的三条路径"
          }
        ],
        "position_relation": "与 2026-11-06「魔芯 MoWorld 2.0 基于昇腾训练与部署」同属国产算力在三维/视频生成领域的落地，但方向不同：魔芯从训练侧就绑昇腾，大晓则是把已有的英伟达路线迁移到海光——一个是原生、一个是移植，移植的规模化价值更高（存量模型都能照此搬）。与 2026-11-07「奥比中光投资者交流（大晓万台采购进入交付）」构成同一条具身产业链的上下游：大晓买视觉、跑国产算力、进即时零售场景。",
        "signal_strength": "中",
        "tags": [
          "大晓机器人",
          "Kairos",
          "海光",
          "DCU",
          "国产算力",
          "视频生成",
          "即时零售",
          "算子迁移"
        ],
        "terms": [
          {
            "term": "Triton 编译器",
            "definition_mechanism": "一种面向 GPU 的算子描述与编译框架，开发者用类 Python 语法写核函数，由编译器自动完成线程映射、共享内存分配与流水调度，主要围绕英伟达 GPU 生态优化",
            "definition_contrast": "与 CUDA 手写核函数相对：Triton 开发效率高、可移植性理论更好，但非英伟达平台的支持成熟度低，迁移时常需重写"
          },
          {
            "term": "NCHW / NHWC",
            "definition_mechanism": "张量在内存中的两种维度排布顺序，NCHW 按通道优先、NHWC 按空间位置优先；不同加速器对连续访存的偏好不同，排布不匹配会导致大量非连续内存访问而拖慢算子",
            "definition_contrast": "两者是同一数据的两种布局，语义等价但性能差异可达数倍；英伟达生态长期偏好 NCHW，部分国产加速器在 NHWC 下访存效率更高"
          }
        ],
        "sources": [
          {
            "url": "https://www.daxiao-robot.com/news/kairos31-haiguang",
            "type": "official"
          }
        ],
        "date": "2026-11-06",
        "notes": "报道/披露日 2026-11-06，落在报告日 2026-11-07 窗口内。适配平台（海光深算三号 DCU + C86）、480P 单卡 12.42 秒、62%→94.2%（+32.2pct）、三项优化手段（Triton 替换、flash-linear-attention 重编译、NCHW→NHWC）、即时零售数万 SKU 与 13 个原子动作均取自大晓官方披露；英伟达对标的具体卡型、batch size 与精度口径未披露，本条未作推断。"
      }
    ]
  },
  {
    "report_id": "daily-2026-11-08",
    "window_start": "2026-11-07T08:00:00+08:00",
    "window_end": "2026-11-08T08:00:00+08:00",
    "generated_at": "2026-11-08T06:15:00+08:00",
    "summary": {
      "window_takeaway": "本期是进博会现场日：产业侧的发布几乎全在上海国家会展中心周边发生，主线从上一期的「把重建成果做成可集成的组件」推进到「把三维空间记忆塞进具身智能的决策闭环」——眸深智能的家用世界模型把长效记忆当成一等公民，青瞳视觉则把光学动捕的空间真值输给物理 AI 训练。",
      "direction": "两家都不做重建工具本身，而是在消费重建的上游产物：眸深把「对空间与物体的长期记忆」做成神经记忆 + 符号状态库的双轨结构，用来支撑家用场景里的多步操作；青瞳把毫米级光学动捕作为乒乓对打机器人的训练与评测真值。方向从「扫得更准」转向「记得更久、训得更真」。",
      "academic_vs_industry": "本窗口内 arXiv 当日批次仍未发布（最新提交止于 2026-11-05T18:59:33Z，早于窗口起点），本期继续无学术条目，学术与产业对照缺位第二天。产业侧因此呈现出「场景交付」特征：不再披露模型指标，而是披露联合体名单、赛事名次与实机连续对打拍数。",
      "remember_one_thing": "眸深智能宣称在主干冻结的前提下只新增约 13.4M 可训练参数，换来一步生成动作、相对多步基线最高 24.84 倍推理加速——具身模型的竞争开始卷「参数效率」而不是「参数量」。"
    },
    "items": [
      {
        "item_id": "2026-11-08-A-001",
        "category": "Software",
        "title": "眸深智能发布「深悟」具身原生模型、家用世界模型 FWM 与 Infra 架构「深枢」：一步生成动作、主干冻结仅增 13.4M 参数，配长效记忆神经符号引擎",
        "one_line_judgment": "把「对家里的长期空间与物体记忆」做成独立的神经符号模块，而不是塞进视觉主干——这是家用具身场景里第一次有厂商把「记性」当作可交付的架构组件来讲。",
        "image": "",
        "ai_summary": "大白话：现在大部分机器人是「看一眼做一步」，让它去客厅拿个东西，走两步就把刚才看到的东西忘了。眸深这次讲的是两件事：一是让模型别一步一步慢慢推，一次就把整套动作生成出来，速度快了很多倍；二是专门给它做了个「记性」——把看到过的东西记在一套可以查询、可以互相校对的记忆库里。演示里老人找不到眼镜盒，机器人靠长期记忆帮着找到了。这套东西对三维重建的意义在于：它记的不是「一张图」，而是「东西在空间的哪儿」。",
        "detailed_info": "2026 年 11 月 7 日，眸深智能在上海国家会展中心（进博会配套活动）发布三层产品：模型层「眸深·深悟」、世界模型层「家用世界模型 FWM」、基础设施层「眸深·深枢」，另发端侧模组「深匣」。\n\n「深悟」定位为具身原生模型，即从架构设计起就按视觉与动作联合建模，而非在视觉语言模型上外挂动作头。两项结构调整：视觉与动作按层交叠计算，让动作生成在每一层都能读取当前视觉表征；一步生成动作，把「高层意图→轨迹→关节序列」的多步串行压缩为单次前向。官方给出：相比对应多步串行基线最高 24.84 倍推理加速；主干完全冻结下仅新增约 13.4M 可训练参数。\n\nFWM 围绕「感知 + 长效记忆神经符号引擎 + 操作」三大模块组织。长效记忆是本期与三维重建最相关的一点：神经网络式记忆（场景与物体的连续表征）与符号状态库（「某物在某处」「某物已移动」这类可显式推理的事实）并行维护，双向印证、交叉校验、必要时修正——用符号规则纠神经记忆的漂移，用神经记忆补符号库的覆盖盲区。演示场景为「帮老人找眼镜盒」：机器人需跨越多个房间、较长时程后仍能定位此前见过但未取用的物体。\n\n「深枢」定位为衔接数据、仿真、模型配置、芯片部署、本体控制、场景交付六大管线的 Infra 架构，意图把从数据采到整机交付串成可复用产线。\n\n产业侧：启动「通用具身大脑产业创新联合体」，官方称汇聚眸深智能、复旦大学未来信息创新学院、国家地方共建人形机器人创新中心、宇树科技、优必选等 42 家企业与机构；与复旦共建「通用空间智能与自主系统机器人校企联合研究实验室」，覆盖世界模型、端侧部署、多模态融合；战略签约碧桂园服务、弈柯莱、东方有线、壁仞科技。\n\n公司背景：2025 年 1 月成立，创始人穆泽林，首席科学家陈涛（复旦大学未来信息创新学院教授），CTO 余翀，技术委员会主席张益民（原英特尔中国首席科学家）。",
        "ai_comment": "要把这条读准，得先把三类数字分开：24.84 倍是「相对自家多步基线」的推理加速，不是相对行业 SOTA，也没有说明基线用了多少步、在哪块硬件上测、精度掉了多少——加速倍率与精度损失必须成对出现才有意义，官方只给了前者。13.4M 可训练参数是个很漂亮的数字，但「主干冻结」意味着能力上限被主干锁死，适合快速适配具体机型与任务，不适合做能力跃迁；它更像是 LoRA 思路在具身模型上的复刻，不宜读成「小模型超越大模型」。神经网络 + 符号库的双轨记忆不是新想法（符号 AI 与联结主义的合流讨论已持续多年），真正的难度在双向印证的一致性维护成本——符号库条目随场景增长会爆炸，纠错规则也会互相冲突，官方未披露记忆容量上限、遗忘机制与长时运行后的检索延迟。演示的「找眼镜盒」是单点 case，缺少「物体被第三方移动后能否重新发现」这类对抗性测试。产业侧看，42 家联合体的名单本身含金量高（宇树、优必选、复旦、人形机器人创新中心），但联合体的实际产出通常滞后一年以上，且碧桂园服务这类物业方的加入说明其商业路径押在「家庭/社区服务场景」而非通用本体。要盯三个指标：FWM 的长期记忆在 30 天以上跨度上的召回率、端侧「深匣」的实际算力与功耗、以及联合体是否会在半年内交出可复现的公开基准。",
        "key_facts": [
          {
            "metric": "推理加速",
            "value": "一步生成相对多步串行基线最高 24.84 倍",
            "baseline": "官方对应的多步串行推理基线",
            "condition": "未披露步数、硬件与精度损失口径"
          },
          {
            "metric": "可训练参数",
            "value": "约 13.4M",
            "baseline": "主干网络完全冻结",
            "condition": "官方口径，未披露主干参数量"
          },
          {
            "metric": "长效记忆结构",
            "value": "神经记忆表征 + 符号状态库双轨，双向印证/交叉校验/修正",
            "baseline": "单一神经记忆（无显式符号事实库）",
            "condition": "官方架构说明，未披露容量上限与遗忘机制"
          },
          {
            "metric": "产业联合体规模",
            "value": "42 家企业与机构",
            "baseline": null,
            "condition": "官方名单含宇树科技、优必选、复旦未来信息创新学院、国家地方共建人形机器人创新中心等"
          },
          {
            "metric": "公司成立时间",
            "value": "2025 年 1 月",
            "baseline": null,
            "condition": "创始人穆泽林，首席科学家陈涛（复旦大学）"
          }
        ],
        "position_relation": "把三维重建的上游产物（空间与物体的长期记忆）接进具身决策闭环，与 2026-11-07 收录的其域 UE 插件、World Labs Frameboy 同属「重建成果如何被下游消费」，但消费方从内容创作换成了机器人本体。",
        "signal_strength": "强",
        "tags": [
          "具身智能",
          "世界模型",
          "空间记忆",
          "神经符号",
          "VLA",
          "进博会"
        ],
        "terms": [
          {
            "term": "具身原生模型",
            "definition_mechanism": "从架构设计阶段就按视觉与动作联合建模的模型，视觉表征与动作生成在同一网络中层层交叠计算，而非在已完成训练的视觉语言模型上外挂动作头",
            "definition_contrast": "与「VLM + 动作头」的拼接式方案相对：拼接式视觉编码先跑完再出动作，具身原生方案在每一层都能让动作读取当前视觉状态，代价是需要从零设计训练流程"
          },
          {
            "term": "神经符号记忆（Neural-Symbolic Memory）",
            "definition_mechanism": "同时维护神经网络式的连续记忆表征与显式的符号事实库（如「物体 A 在位置 B」），让两者互相校验与修正，用符号规则约束神经记忆的漂移，用神经表征补符号库的覆盖盲区",
            "definition_contrast": "与纯神经记忆（如检索增强的记忆向量库）不同：纯神经记忆难以显式表达「某事实已被推翻」，符号库可以，但需要维护一致性；与纯符号系统不同：符号系统无法处理未经离散化的连续空间信息"
          },
          {
            "term": "一步生成动作",
            "definition_mechanism": "把「高层意图→轨迹→关节序列」的多步串行推理压缩为单次前向，直接输出可执行动作，减少步骤间的等待与误差累积",
            "definition_contrast": "与多步串行（分层或自回归逐 token 生成）相对：一步生成延迟低但难以在生成过程中注入约束，多步串行可解释性与可控性更强但慢"
          },
          {
            "term": "家用世界模型（FWM）",
            "definition_mechanism": "面向家庭场景的世界模型，围绕感知、长效记忆、操作三大模块组织，重点在于对家庭环境的长时程状态跟踪与物体位置记忆，而非生成高保真视频",
            "definition_contrast": "与 World Labs Frameboy 这类以视觉逼真度与可漫游性为目标的实时世界模型不同：FWM 的输出是「该做什么动作」，不是「下一帧长什么样」"
          },
          {
            "term": "具身大脑产业联合体",
            "definition_mechanism": "由模型厂商牵头，联合高校实验室、国家级创新中心、本体厂商与场景方组成的产业协作组织，目的是共享数据、统一接口与共同定义评测",
            "definition_contrast": "与单一公司自建产线不同：联合体的价值在标准与数据互通，但决策链长、产出周期通常以年计"
          }
        ],
        "sources": [
          {
            "url": "https://www.geekpark.net/news/373646",
            "type": "news"
          },
          {
            "url": "https://www.cls.cn/detail/2528059",
            "type": "news"
          },
          {
            "url": "https://www.huxiu.com/article/4000000.html",
            "type": "news"
          }
        ],
        "date": "2026-11-07",
        "notes": "发布日 2026-11-07，地点上海国家会展中心（进博会配套活动），落在报告日 2026-11-08 窗口内。24.84 倍加速、13.4M 参数、42 家联合体、复旦共建实验室、四家战略签约方均取自极客公园与财联社两篇现场报道的交叉一致部分；多步基线的步数、测试硬件、精度损失口径，以及 FWM 记忆容量上限与检索延迟，官方均未披露，本条未作推断，已在 ai_comment 中列为待验证项。虎嗅链接为第三方转载页，若失效请以极客公园原文为准。"
      },
      {
        "item_id": "2026-11-08-B-001",
        "category": "Business",
        "title": "青瞳视觉成为 Hitch Open 全球战略合作伙伴：光学动捕为乒乓对打机器人提供训练真值，后者入选进博会十大黑科技展品",
        "one_line_judgment": "动捕从「影视动画的采集工具」变成「物理 AI 的训练与评测真值来源」，这条合作是空间感知硬件向具身智能数据链上游迁移的一个具体落点。",
        "image": "",
        "ai_summary": "大白话：会打乒乓球的机器人要练出来，光有摄像头不够——它得知道自己每次挥拍到底挥到了哪儿、球拍角度偏了几度，这些「绝对真值」得靠外部的高精度动捕系统测出来，才能拿去纠正模型。青瞳做的就是这套系统，这次成了 Hitch Open 的全球战略合作伙伴，也给这个乒乓球机器人的全球赛事供动捕。那台机器人已经在进博会上被评为十大黑科技展品之一，能跟人连续对打 106 拍。",
        "detailed_info": "2026 年 11 月 7 日，在上海进博会现场，青瞳视觉（CHINGMU）与 Hitch Open 签署全球战略合作，青瞳视觉成为 Hitch Open 全球战略合作伙伴，同时成为 HOPE 全球赛事的官方动作捕捉技术合作伙伴。\n\n合作的技术含义：乒乓球对打是物理 AI 里难度较高的一类任务——球速快、旋转复杂、需要毫秒级闭环。这类系统训练时的核心难点不是「看到球」，而是拿到「球拍在三维空间中的精确位姿与速度」作为监督信号。头戴或机载相机只能给出相对、带漂移的估计，而光学动捕能在场地坐标系下给出毫米级、无漂移的绝对位姿，因此成为训练与评测的标准真值来源。青瞳提供的是完整的光学动捕系统（算法—硬件—软件全栈）。\n\nHitch Open 一侧的公开能力：其「AI 自主决策机器人乒乓对打」入选本届进博会十大黑科技展品（官方称从 1 万余件展品中选出）。该机器人采用智元远征 A3 本体，软件由 UC Berkeley FHL Vive 增强现实中心研发，已实现人机连续对打 106 拍。技术指标上，机器人需在约 0.3 秒内完成从感知到击球的闭环，视觉相机每 5 毫秒刷新一帧。\n\n更早的落点：2026 年 7 月 19 日，漕河泾·Hitch Open 物理智能联合创新中心揭牌，青瞳为该中心提供完整光学动捕系统——本次全球战略合作可视为该中心合作关系的升级与国际化。\n\n青瞳视觉背景：成立于 2015 年，官方定位为中国首家光学动作捕捉全栈自研（算法、硬件、软件）企业，产品线含 K 系列动捕系统，此前主要应用于影视动画、虚拟制片、体育科学与人机交互研究。",
        "ai_comment": "这条的价值不在「又签了一个合作」，而在它标出了动捕厂商在具身智能时代的新位置：过去卖设备给动画公司，现在卖「真值」给模型训练。这个转变的商业含义不小——真值供应是持续性的服务（每次训练、每场赛事都要用），比一次性卖硬件更有黏性。但要保持审慎的有两点。第一，106 拍、0.3 秒闭环、5 毫秒刷新这三个数字是 Hitch Open 对机器人系统的披露，与青瞳动捕系统的精度指标（毫米级、采样率）不是同一回事，报道中常被混为一谈，本条已分开陈述。第二，光学动捕的固有短板是遮挡与场地标定——乒乓球高速运动下球拍与手臂频繁自遮挡，需要足够多的相机冗余，而进博会这类展会现场的灯光与空间条件恰恰不理想；官方未披露现场用了多少台相机、标定残差多少。另外「十大黑科技展品」是展会评选，属于传播性荣誉，不宜当作技术评测结论。要盯的指标：HOPE 赛事是否公开基于动捕真值的评测基准数据集——一旦公开，这条就从商业新闻升级为行业基础设施新闻。",
        "key_facts": [
          {
            "metric": "合作层级",
            "value": "Hitch Open 全球战略合作伙伴 + HOPE 全球赛事官方动作捕捉技术合作伙伴",
            "baseline": "此前为 2026-07-19 漕河泾联合创新中心的项目级合作",
            "condition": "2026-11-07 进博会现场签署"
          },
          {
            "metric": "机器人连续对打",
            "value": "106 拍",
            "baseline": null,
            "condition": "Hitch Open 披露，本体为智元远征 A3，软件由 UC Berkeley FHL Vive 中心研发"
          },
          {
            "metric": "闭环时延预算",
            "value": "约 0.3 秒内完成感知到击球；视觉相机每 5 毫秒一帧",
            "baseline": null,
            "condition": "Hitch Open 披露的系统指标，非青瞳动捕精度指标"
          },
          {
            "metric": "展品评选",
            "value": "入选进博会十大黑科技展品（官方称从 1 万余件展品中选出）",
            "baseline": null,
            "condition": "展会评选，非第三方技术评测"
          },
          {
            "metric": "青瞳成立时间",
            "value": "2015 年",
            "baseline": null,
            "condition": "官方定位为中国首家光学动捕全栈自研企业，产品含 K 系列"
          }
        ],
        "position_relation": "补上三维空间感知在具身智能数据链里的「真值供应」环节——与 2026-11-07 收录的采集硬件条目（卖扫描终端）不同，这里卖的是训练与评测所需的空间基准。",
        "signal_strength": "中",
        "tags": [
          "动作捕捉",
          "光学动捕",
          "具身智能",
          "物理AI",
          "机器人乒乓球",
          "进博会"
        ],
        "terms": [
          {
            "term": "光学动作捕捉",
            "definition_mechanism": "在场地四周布置多台红外相机，通过同步拍摄贴在被测物体上的反光标记点，三角交会解算出标记点在场地坐标系下的三维位置与姿态，精度可达毫米级且无累积漂移",
            "definition_contrast": "与视觉惯性里程计（VIO）/ SLAM 相对：后者靠自身相机与 IMU 推算，无需外部设备但存在漂移与尺度不确定性；光学动捕精度高但需预先布场、怕遮挡"
          },
          {
            "term": "训练真值（ground truth）",
            "definition_mechanism": "在监督学习中作为标准答案的高置信度数据，用于计算损失或评估模型输出，其精度上限决定模型可达到的上限",
            "definition_contrast": "与模型自身的预测输出相对：预测带误差且会累积，真值需由独立于被测系统的更高精度手段提供"
          },
          {
            "term": "物理 AI（Physical AI）",
            "definition_mechanism": "让智能体在真实物理世界中感知、决策并执行动作的技术总称，强调对物理规律与接触动力学的建模，典型形态是人形机器人与自主移动操作平台",
            "definition_contrast": "与纯数字域的生成式 AI 相对：后者输出像素或文本，前者输出力矩与轨迹，错误代价是不可逆的物理后果"
          },
          {
            "term": "遮挡（occlusion）",
            "definition_mechanism": "被测标记点被自身肢体或外部物体挡住，导致部分相机看不到该点，需靠剩余可见相机冗余解算，遮挡过多时解算失效或精度骤降",
            "definition_contrast": "与视觉 SLAM 的特征丢失不同：SLAM 丢失特征可依靠运动模型短时预测，光学动捕一旦可见相机数低于阈值会直接产生跳变或空洞"
          }
        ],
        "sources": [
          {
            "url": "https://www.timesnewswire.com/news/2026/11/07/chingmu-hitch-open-strategic-partnership/",
            "type": "news"
          },
          {
            "url": "https://www.euleader.com/news/2026/11/07/chingmu-hitch-open/",
            "type": "news"
          },
          {
            "url": "https://tech.china.com/article/20261107/content_11202615477.html",
            "type": "news"
          }
        ],
        "date": "2026-11-07",
        "notes": "签署日 2026-11-07（进博会现场），落在报告日 2026-11-08 窗口内。合作层级、106 拍、0.3 秒闭环、5 毫秒刷新、十大黑科技展品评选、青瞳 2015 年成立与全栈自研定位，取自 Timesnewswire 与中华网两地报道交叉一致部分；2026-07-19 漕河泾联合创新中心揭牌为合作前史，取自同一批报道。进博会现场动捕相机数量、标定残差与采样率官方未披露，本条未作推断。"
      }
    ]
  },
  {
    "report_id": "daily-2026-11-09",
    "window_start": "2026-11-08T08:00:00+08:00",
    "window_end": "2026-11-09T08:00:00+08:00",
    "generated_at": "2026-11-09T06:40:00+08:00",
    "summary": {
      "window_takeaway": "本期两条主线互为镜像：苹果用 1000 个程序生成的家庭合成数据把机器人送进从未扫描过的真实房间（91%），Physicl 则把「按需生成带精确标注的场景」做成产品卖给世界模型公司——三维重建从「把现实扫进电脑」反过来变成「把虚拟造得像现实」，Real2Sim 这条数据供给路线第一次同时出现学术闭环与商业定价。",
      "direction": "上一期是「把重建成果做成可集成的组件」，本期转向「谁来生产训练用的三维世界」。苹果 HALO 全程零真实房间扫描、零遥操作，训练语料完全由 Infinigen 程序化生成 + Kimodo 动学生成 + 33 条几何检查筛出，再用 8 种视觉扰动做域随机化；Physicl Studio 直接把 RGB/深度/法线/分割/包围盒/相机位姿从 3D 场景「算出来」而不是标注出来。两条路都把「标注」从人力环节变成几何副产品，分歧在于苹果要的是动作与视觉配对，Physicl 只出视觉、明确不做动力学。",
      "academic_vs_industry": "学术侧本窗口仍无 arXiv 新批次（cs.CV / cs.RO 最新 new listing 均停留在 2026-11-06，窗口内无 11-07/11-08 提交批次），这是连续第三天学术空窗；能替代的是 arXiv 2611.06908（苹果 HALO，11-04 提交）与 2611.08449（英伟达 VFlash，11-05 提交）两条在窗口内被中文媒体集中解读的论文，均为 cs.RO/cs.CV，但事件日早于窗口起点，只能按「报道日」口径收录并在 notes 标注。产业侧则罕见地在同一天出现「合成数据公司拿钱」与「大厂用合成数据登顶成功率」两端。",
      "remember_one_thing": "苹果 HALO 在 6 个从未扫描、从未建图的真实房间里做了 360 次测试、平均成功率 91%，训练时一个真实的房间都没见过——这条记录说明「三维重建」在具身智能链路里正被降级为可选件，合成场景加上好的域随机化已经能替代真实扫描。"
    },
    "items": [
      {
        "item_id": "2026-11-09-A-001",
        "category": "Research",
        "title": "苹果 HALO：1000 个程序生成家庭合成 296 小时数据，宇树 G1 在 6 个从未扫描的真实房间跑出 91% 成功率",
        "one_line_judgment": "这是第一次有大厂用「全程零真实扫描、零遥操作」的合成数据管线，把人形机器人的零样本迁移做到 91%——三维重建在具身数据链里的位置，从「必需的真值来源」变成了「可被替代的一环」。",
        "image": "",
        "ai_summary": "大白话：以前的机器人是靠人一遍遍示范教出来的，录一小时示范就得花人一小时。苹果换了个办法——让电脑用程序随机盖 1000 个风格各异的「家」，先让一个动作模型按文字指令在空气里比划出走过去、转身、坐下这些动作，再检查这些动作会不会穿墙、脚会不会打滑，合格的才放进房子里，最后用渲染器从机器人眼睛的位置把画面拍出来。这样「看到什么、听到什么指令、身体怎么动」三样东西就配成一套了，而且做得越多只要加显卡就行，不用加人。练完之后直接把机器人扔进 6 个从没扫描过的真实房间，360 次任务里 91% 成功。最关键的一点：训练时它一个真实的房间都没见过，也没人拿遥控器带它走过。",
        "detailed_info": "2026 年 11 月 4 日 18:55:33 UTC，苹果研究团队向 arXiv 提交论文《Perceptive Humanoid Motion from Simulation》（arXiv:2611.06908，v1，14,644 KB），公开人形机器人自主系统 HALO，并同步在项目页 apple-aiml-research.github.io/ml-halo 放出数据生成、模型训练与真机部署代码。八位作者全部为苹果署名：Siyuan Hu、Abulikemu Abuduweili、Yue Meng、Shipeng Liu、Quentin Leboutet、Chen Chen、Matthias Müller、Vladlen Koltun；主题分类为 cs.RO，交叉 cs.AI、cs.CV、cs.LG。\n\n论文把动机写得很直接：通用人形自主性的瓶颈是数据，把像素与自由语言映射到低层关节指令需要成对监督，而这种语料在足够大规模上并不存在；依赖人类遥操作与穿戴式采集设备的路线，产出 1 小时数据至少要花 1 小时人力。HALO 的解法是让语料随算力扩张而不是随人力扩张。\n\n数据管线的三段是本期与三维重建最相关的部分。第一段，动作先在「空场景」里生成：系统把「坐到扶手椅上」拆成向前走、转身、坐下，由动作生成系统按文字提示、可选路径点与终止关键姿态逐段生成候选，再跑 33 条几何检查（脚底滑动、身体穿透、跳变），从 N 个候选里选出最好的一个。第二段，把动作放进场景：用 Infinigen 程序化生成 1000 个家庭，动作的落位通过采样 SE(2) 位姿（x, y, θ）并保留第一个无碰撞解来确定，官方项目页的原话是「Infinigen generates 1,000 homes; the motion is placed by sampling SE(2) poses and keeping the first collision-free one」。第三段，渲染机器人的第一视角：采用与真机硬件匹配的鱼眼相机渲染，视角覆盖 120° RGB 与朝下的 55° 深度相机（量程 0.2 m 至 2.5 m），并做 8 种视觉扰动（运动模糊、椒盐噪声、强光、弱光、冷色调、暖色调、绿色偏色、高对比），加上原始渲染共 9 种。\n\n规模与算力：主训练语料在 250 张 H100 上约 48 小时合成，中文媒体口径为约 296 小时、162,698 个 episodes（该两数字来自澎湃新闻等报道转述，官方项目页仅披露 1000 个家庭、250 张 H100 与「episode = seed + placement record」的定义，未直接给出小时数与 episode 总数，本条按报道口径引用并标注）。动作生成器用 64 张 B200 做模仿学习，动作跟踪器用 4 张 H100 做强化学习与策略蒸馏。\n\n三层控制架构与三维感知的耦合方式值得单独看。最上层是任务编排，用现成 VLM（报道口径为 Qwen3.6-35B-A3B，约 0.5 Hz、每 2 秒一次），跑在机器人背部的 Mac mini 上、与动作生成器共用模型服务引擎，可离线；中层是动作生成器，冻结的 Qwen3.5-2B 编码器接 49M 参数 DiT 解码器，用 flow matching 走 15 步 Euler，输出 150 帧 × 36 维（约 5 秒）、36 维对应 29 个关节目标加根位姿，只提交前 0.5 秒（15 帧），约 3 Hz 重规划；底层是跟踪器，50 Hz 输入第一视角深度与本体感知，输出 29 个关节目标。\n\n真机配置：宇树 G1（29 自由度），头部定制支架装 OAK-1W 相机（120°、1280×800@30），背部 3D 打印壳装 Mac mini M4 Pro / 64GB，另有朝下的 Intel RealSense D435i（55°、424×240）跑自研 TensorRT 立体匹配，G1 自带 Jetson Orin NX 跑底层跟踪。\n\n结果：在 6 个未预先扫描或建图的真实环境做 360 次单项任务测试，平均成功率 91%（桌下蹲伏通过 100%、半开门侧身通过 93%、走到指定物体旁 92%、桌底爬行 90%、推箱子 88%、坐上椅子 85%；官方项目页另标坐椅子一项为 84%，与报道口径略有差异）；在一个真实环境对 3 种组合任务各测 10 次，平均 70%（过门+到目标 10/10、蹲+坐 6/10、蹲+接近+推箱 5/10）。\n\n论文自述的短板同样是重点：主要依赖视觉感知，无法直接感知接触；物体离开相机视野或被遮挡时，接触密集型任务表现下降；新增物理任务仍需人工编写提示词、设计动作关键帧，部分动作还使用了人类视频或动捕素材；仿真数据尚未完全摆脱人工。团队把加入触觉感知列为后续方向。",
        "ai_comment": "这条最容易被误读成「合成数据完胜真实扫描」，实际结论要窄得多。91% 是「短任务、少接触、六个房间各 60 次」的平均值——任务链一拉长到三种能力串联，成功率立刻掉到 70%，最难的一组（俯身过障碍—走向目标—推箱）只有 50%。推箱子这种需要持续受力接触的任务是 88%，看着不低，但它恰恰是视觉路线最容易崩的地方：物体一出视野就没了反馈。所以真正被证明的是「视觉导航类技能可以纯合成训练」，而不是「物理交互类技能可以纯合成训练」。\n\n第二点必须说清：「零真实房间扫描」不等于「零真实数据」。论文自己承认部分动作用了人类视频或动捕素材，新增任务要人写提示词和关键帧。也就是说，人力只是从「按小时产数据」转移到了「按任务设计模板」，这是从线性成本变成阶梯成本，不是变成零成本。官方项目页也没有任何一句直接宣称「未使用真实世界扫描或摄影测量」，这是从全合成管线反推出来的结论，严谨的表述应该是「训练语料中不含真实房间的采集数据」。\n\n第三，硬件栈的信息量被低估了。一个 35B 级别的 VLM 跑在机器人背上的 Mac mini 里本地推理，说明「具身大脑」的算力落点正在从云端迁回本体；同时它用的是千问系列而非苹果自研模型，这个选择本身比 91% 更值得琢磨——苹果在验证的是系统集成与数据管线，不是模型能力。\n\n对三维重建行业的含义不是「不需要扫描了」，而是分工变了：真实扫描的价值从「提供训练场景」收缩到「提供评测基准与失效案例」。HALO 的六个房间就是评测集，不是训练集。做采集硬件与重建算法的公司，未来更可能卖「验证服务」而不是「训练数据」。要盯的三件事：episode 总量与小时数的官方口径能否坐实、加入触觉后组合任务的成功率能否抬到 80% 以上、以及这套管线对非家庭场景（工厂、仓库）的迁移成本。",
        "key_facts": [
          {
            "metric": "真机单项任务成功率",
            "value": "平均 91%",
            "baseline": "360 次测试 / 6 个未预先扫描或建图的真实环境",
            "condition": "零样本迁移，训练语料不含真实房间采集数据；分项 85%~100%"
          },
          {
            "metric": "组合任务成功率",
            "value": "平均 70%",
            "baseline": "单项 91%",
            "condition": "1 个真实环境、3 种长流程任务各测 10 次；最低一组「俯身过障碍—走向目标—推箱」50%"
          },
          {
            "metric": "合成语料规模",
            "value": "1000 个程序生成家庭（Infinigen）；报道口径约 296 小时 / 162,698 episodes",
            "baseline": "遥操作路线：产出 1 小时数据至少耗 1 小时人力",
            "condition": "250 张 H100 约 48 小时完成主数据合成；小时数与 episode 数来自中文媒体转述，官方项目页仅披露家庭数与卡数"
          },
          {
            "metric": "控制频率分层",
            "value": "编排约 0.5 Hz、动作生成约 3 Hz（每次规划 5 秒 / 150 帧、仅提交前 0.5 秒）、跟踪 50 Hz",
            "baseline": null,
            "condition": "跟踪器输出 29 个关节目标，输入第一视角深度 + 本体感知"
          },
          {
            "metric": "渲染域随机化",
            "value": "8 种视觉扰动 + 原始渲染",
            "baseline": "单一干净渲染",
            "condition": "运动模糊、椒盐噪声、强光、弱光、冷色调、暖色调、绿色偏色、高对比；鱼眼视角与真机硬件匹配（RGB 120°、深度 55°）"
          }
        ],
        "position_relation": "把三维重建在具身数据链里的位置从「上游必需」改成「可替代」——与 2026-11-05 收录的优必选 Thinker-Sim（用 Thinker-GS 重建真实场景再造仿真）方向相反：那条是 Real2Sim（真实扫描→仿真），这条是 SimOnly（纯程序生成→真机）。同期收录的 Physicl 站在这条光谱的商业端。",
        "signal_strength": "强",
        "tags": [
          "合成数据",
          "Sim2Real",
          "人形机器人",
          "程序化场景生成",
          "域随机化",
          "Real2Sim",
          "宇树",
          "苹果"
        ],
        "terms": [
          {
            "term": "程序化场景生成",
            "definition_mechanism": "用规则与随机种子在三维空间里自动「盖」出房屋、家具与材质，输出的是带完整几何、语义与位姿标注的合成场景，不依赖任何真实拍摄；同一套规则换种子就能生成成千上万个布局不同但物理自洽的房间",
            "definition_contrast": "与摄影测量/3DGS 重建相对：后者从真实照片反推几何，受遮挡与纹理缺失限制、标注要人工补；前者从零造几何，标注天然齐备，代价是「像不像真的」需要靠材质与渲染质量硬撑"
          },
          {
            "term": "域随机化（domain randomization）",
            "definition_mechanism": "在训练数据里主动、随机地扰动与任务无关的视觉因素（光照色温、曝光、噪声、模糊、偏色、对比度），迫使模型只学与几何和任务相关的特征，从而在遇到未见过的真实光照与成像条件时不崩",
            "definition_contrast": "与域自适应（domain adaptation）相对：后者先有源域与目标域、再想办法对齐特征分布；域随机化不指定目标域，用覆盖足够宽的随机分布来「包围」真实分布"
          },
          {
            "term": "零样本迁移（zero-shot transfer）",
            "definition_mechanism": "模型在训练阶段从未接触过目标环境或目标本体的任何真实数据，部署时直接上真机执行任务；成功与否取决于仿真与现实的差距是否被训练时的扰动覆盖",
            "definition_contrast": "与微调（fine-tune）或实机校准相对：后者需要在目标环境采少量数据再更新参数，零样本迁移不做任何在线更新，因此对仿真保真度与本体建模精度的要求高得多"
          },
          {
            "term": "动作先于场景（motion-first staging）",
            "definition_mechanism": "先生成符合指令的全身动作轨迹，再做几何检查筛掉穿模与脚滑，最后才把动作「投放」到程序化场景里找无碰撞位姿——即动作与场景解耦，同一段动作可以复用到不同房间",
            "definition_contrast": "与传统的「先建场景再在场景里做物理仿真」相对：常规仿真训练是场景固定、策略试错；HALO 反过来，动作库与场景库正交组合，用组合爆炸换数据量，代价是接触与碰撞只能靠几何检查近似而无法精确模拟"
          }
        ],
        "sources": [
          {
            "url": "https://arxiv.org/abs/2611.06908",
            "type": "paper"
          },
          {
            "url": "https://apple-aiml-research.github.io/ml-halo/",
            "type": "project"
          },
          {
            "url": "https://www.163.com/dy/article/LB77U9E905149E7M.html",
            "type": "news"
          },
          {
            "url": "https://www.nfnews.com/content/ky9vPXJB3G.html",
            "type": "news"
          }
        ],
        "date": "2026-11-04",
        "notes": "论文提交时间为 2026-11-04 18:55:33 UTC（事件日，早于本窗口起点 11-08 08:00），本窗口内发生的是中文媒体集中解读（澎湃新闻经网易、南方+等转载，11-07 至 11-08）。按报道日口径收录并在 date 字段标注真实事件日。摘要、作者名单、提交时间取自 arXiv abs 页原文；1000 个家庭、Infinigen、SE(2) 无碰撞落位、33 条几何检查、250 张 H100 / 64 张 B200 / 4 张 H100、120°/55° 视角、8 种视觉扰动、150 帧×36 维、15 帧提交、29 关节，取自官方项目页与论文摘要原文；296 小时与 162,698 episodes 来自澎湃新闻转述，官方项目页未直接给出，已在 key_facts 的 condition 中标注口径来源；坐椅成功率官方页面标 84%、报道标 85%，两处有差异，已并列标注。"
      },
      {
        "item_id": "2026-11-09-A-002",
        "category": "Research",
        "title": "英伟达 VFlash：537M 扩散草稿模型一次并行出整个轨迹，三维点运动预测快约 25 倍、动作解码最高 12 倍",
        "one_line_judgment": "把「视觉规划」从逐坐标 token 自回归改成整块并行解码，等于承认空间信息的结构与语言 token 的顺序结构不是一回事——这是具身模型推理栈第一次按几何结构而不是按文本结构设计解码器。",
        "image": "",
        "ai_summary": "大白话：现在的机器人模型要说出「手往哪走」，是一个数字一个数字往外蹦的，比如先出 x 再出 y 再出 z，一条轨迹长一点就要蹦几十上百次，慢得来不及躲人。英伟达的办法是：既然轨迹、方框、点这些「视觉零件」的长度和形状事先都知道，那就别一个个蹦了，直接一次性把整个零件填满。具体做法是训练一个很小的草稿模型，它一口气把整条轨迹的所有坐标全猜出来，大模型再检查对不对。官方测试里，三维点运动预测的生成速度大约快了 25 倍，机器人动作解码最多快 12 倍，误差还降了三成到六成。",
        "detailed_info": "论文《VFlash: Fast, Accurate Visual Planning via Flash Primitive Decoding》（arXiv:2611.08449，v1，1,760 KB）于 2026 年 11 月 5 日 18:44:43 UTC 提交，主题分类 cs.RO，交叉 cs.CV。作者 19 人：Yu-Cheng Chou、Shihao Wang、Jin Huang、Chi-Pin Huang、Chiao-An Yang、Xianzhe Fan、Jing Wang、Zhiqi Li、Yuanguo Kuang、Ruijie Zheng、Johan Bjorck、Sifei Liu、Hang Su、Abhishek Badki、Lei Zhang、Alan Yuille、Linxi \"Jim\" Fan、Jan Kautz、Zhiding Yu——英伟达 LPR 团队与约翰霍普金斯 GEAR Lab 合作。\n\n问题定义：面向物理 AI（机器人与自动驾驶）的模型不必只用语言推理，它们会用「视觉规划」——点、边界框、轨迹——表达空间目标与运动预判。但自回归视觉语言模型是一个坐标 token 一个坐标 token 地生成这些规划，规划越长越细，串行解码步数越多、延迟越高；在给定时延预算内，这同时限制了规划的精细程度与更新频率。\n\n方法：Flash Primitive Decoding（FPD），构建在 DFlash 的轻量块扩散草稿模型上。块布局在推理时按视觉基元的类型、维度与长度预先确定（长度由一次工具调用声明），整个基元作为一个块被一次性预测；草稿模型以冻结的目标 VLM 的特征为条件，训练时用的是坐标真值标注而非目标模型自己的输出——这一点与常规投机解码不同，它不要求复现自回归的 token 序列，只要求输出在结构上合法。推理时施加逐位置的词表约束，结构合法的基元直接接受、不做 token 匹配校验；置信度低的边界框退回自回归解码兜底；普通文本仍走标准投机解码验证。\n\n结果分四块。三维机器人轨迹（InternA1、AgiBot、MolmoBot）：三种训练变体在 ADE、FDE、SR@5、SR@10 上全面优于自回归解码，仅三维目标时 ADE 降 18%~49%，二维+三维目标时降 28%~61%；AgiBot 的 SR@5 从 50.3% 升到 73.1%（仅三维目标）。二维轨迹（同一 4B 目标模型）：DFD 在 ShareRobot-Bench 为 0.194（自回归 0.202）、在 VABench-V 为 0.126（自回归 0.130），全六项误差指标均更低。边界框（带自回归兜底）：平均 F1 与自回归接近，COCO 47.79（自回归 48.68）、Dense200 61.78（自回归 60.10），但每秒生成框数提升 2.6~2.8 倍（COCO 8.76 vs 3.15）。三维点运动预测：约 25 倍生成加速，来自初步的单次 rollout 测量。\n\n系统级收益：在英伟达 Jetson Thor 与 DGX Spark 上，下游机器人操作管线的推理延迟降低约 80%（Jim Fan 在社交平台补充的口径为最高 12 倍动作解码加速、5.1 倍端到端机器人推理加速、三维轨迹误差最多降 61%）。以 VFlash 规划为条件的世界动作模型在四组 MolmoSpaces 任务套件上平均成功率 70.2%，基线 62.6%，自回归规划 61.0%；LIBERO-PRO 上相对同架构基线提升 6.8 个百分点。\n\n局限性（论文自述）：方法不保持自回归模型的输出分布，质量只能用空间精度衡量；不做兜底、直接接受低置信度框时 Dense200 平均 F1 掉约 20 点、IoU 0.95 下的 F1 低于自回归；稠密三维运动预测的提升并不一致，WorldTrack 的 FDE 反而升 15%，PWT 降 7%~12%；25 倍来自单次 rollout 的初步测量，且只对应三维点运动预测这一种任务。",
        "ai_comment": "读完最该盯的不是 25 倍，而是「不要求复现自回归 token 序列」这句话。它意味着作者把「空间输出」和「语言输出」当成两种不同性质的东西：语言有严格的顺序依赖，投机解码必须逐 token 对齐；而一条轨迹的坐标之间没有这种强顺序，只要整条轨迹落在合理位置就行。这个判断如果成立，等于给具身模型的解码器设计松了绑——以后不必迁就文本生成的那套机制。反过来说，如果它在更复杂的稠密三维运动预测上站不住（论文自己承认 WorldTrack FDE 反而涨了 15%），那说明这个「松绑」只在稀疏、结构化输出上有效，密集场预测还得回到逐点。\n\n数字口径必须分层看。25 倍是「三维点运动预测 + 单次 rollout」的初步值，不能当通用加速比引用；12 倍是 Jim Fan 社交平台口径的动作解码加速，论文摘要未直接给；5.1 倍端到端、61% 误差降幅同理。真正有实验支撑的是 ADE 18%~61% 的降幅区间与 MolmoSpaces 70.2% vs 62.6% 的成功率差——但后者是四个套件的平均，论文没给逐套件拆分，也没点名基线是哪一版模型，横向比较时要打折扣。\n\n与三维重建的关系是间接但关键的：VFlash 解码的对象是「三维点运动」「稠密三维运动」「三维轨迹」，这些正是重建与跟踪的输出格式。也就是说，重建侧产出的表示正在成为具身模型推理侧的原生输出语言——两边共用同一套几何基元，中间不需要转成文本。这是继上期 World Labs Frameboy 之后，又一条「重建表示直接进入推理回路」的证据。\n\n最该追问的是：FPD 的草稿模型是按基元类型与长度预置块布局的，那遇到长度未知或拓扑会变的输出（比如物体数量可变的场景图、动态增减的高斯点集）怎么办？论文对这一点没有回答，而这恰恰是三维重建输出最常见的形态。",
        "key_facts": [
          {
            "metric": "三维点运动预测生成速度",
            "value": "约 25 倍",
            "baseline": "自回归逐坐标 token 解码",
            "condition": "初步单次 rollout 测量，仅对应三维点运动预测这一任务"
          },
          {
            "metric": "三维轨迹误差降幅",
            "value": "ADE 降 18%~49%（仅三维目标）/ 28%~61%（二维+三维目标）",
            "baseline": "自回归解码",
            "condition": "InternA1、AgiBot、MolmoBot 三个数据集；AgiBot SR@5 由 50.3% 升至 73.1%"
          },
          {
            "metric": "世界动作模型任务成功率",
            "value": "70.2%",
            "baseline": "基线 62.6%，自回归规划 61.0%",
            "condition": "MolmoSpaces 四组任务套件的平均值，论文未给逐套件拆分与基线型号"
          },
          {
            "metric": "草稿模型规模与延迟",
            "value": "537M 参数扩散草稿模型；Jetson Thor / DGX Spark 上下游操作管线延迟降约 80%",
            "baseline": "自回归串行解码",
            "condition": "块布局按基元类型、维度、长度预置，长度由工具调用声明"
          },
          {
            "metric": "边界框吞吐",
            "value": "每秒生成框数提升 2.6~2.8 倍（COCO 8.76 vs 3.15）",
            "baseline": "自回归 + 兜底",
            "condition": "平均 F1 基本持平（COCO 47.79 vs 48.68），Dense200 61.78 vs 60.10"
          }
        ],
        "position_relation": "与 2026-11-07 收录的 World Labs Frameboy 同属「重建表示直接进入下游推理」，但落点更靠底层——Frameboy 把重建结果做成可交互运行时，VFlash 把重建的几何基元（点、框、轨迹）变成模型的原生输出格式。两条合起来说明：三维表示正在从「产物」变成「接口」。",
        "signal_strength": "强",
        "tags": [
          "视觉规划",
          "扩散草稿模型",
          "投机解码",
          "具身智能",
          "机器人轨迹",
          "英伟达",
          "推理加速"
        ],
        "terms": [
          {
            "term": "视觉基元（visual primitive）",
            "definition_mechanism": "点、边界框、二维/三维轨迹这类结构化空间输出，一旦类型与长度确定，其坐标布局就是固定的——正因如此才可以作为一整块被并行填充，而不必逐坐标顺序生成",
            "definition_contrast": "与自由文本相对：文本的下一个 token 依赖前文语义，无法预知长度与结构；视觉基元的长度与维度可事先声明，因而具备「整块并行」的前提"
          },
          {
            "term": "块扩散草稿模型（block diffusion drafter）",
            "definition_mechanism": "一个轻量模型用双向注意力在一次前向中同时填满多个被掩码的位置，从而一次性产出整块内容；它与冻结的目标大模型共享特征条件，产出再由目标模型校验",
            "definition_contrast": "与自回归草稿（逐 token 往前猜、猜错就整段作废）相对：块扩散的每个位置都能看到块内其他位置，适合结构已知的整体填充，但不保证与目标模型的输出分布一致"
          },
          {
            "term": "自回归兜底（AR fallback）",
            "definition_mechanism": "对并行预测中置信度不足的部分（如低质量边界框）退回逐 token 自回归重生成，用少量串行代价换回精度，避免并行带来的结构性错误直接流出",
            "definition_contrast": "与「全部并行 + 全部接受」相对：后者吞吐最高但 Dense200 上平均 F1 掉约 20 点；兜底是精度与速度之间的可调旋钮"
          },
          {
            "term": "世界动作模型（world action model）",
            "definition_mechanism": "以视觉规划（点、框、轨迹）为条件、直接预测动作序列并推演环境变化的模型，规划的质量与更新频率直接决定其在闭环任务中的成功率",
            "definition_contrast": "与纯视觉语言模型相对：后者输出语言或高层子任务，世界动作模型输出带几何约束的空间动作，需要与本体运动学对齐"
          }
        ],
        "sources": [
          {
            "url": "https://arxiv.org/abs/2611.08449",
            "type": "paper"
          },
          {
            "url": "https://caifuhao.eastmoney.com/news/20261107212030580824460",
            "type": "news"
          },
          {
            "url": "https://briefingatlas.com/articles/vflash-accelerates-visual-planning-for-robots",
            "type": "news"
          }
        ],
        "date": "2026-11-05",
        "notes": "论文提交时间为 2026-11-05 18:44:43 UTC（事件日，早于本窗口起点），本窗口内发生的是中文媒体解读与社交平台传播（东方财富财富号 11-07、Jim Fan 转发评论）。按报道日口径收录并在 date 字段标注真实事件日。作者名单、提交时间、摘要原文取自 arXiv abs 页；ADE 18%~49%/28%~61%、AgiBot SR@5 50.3%→73.1%、ShareRobot 0.194 vs 0.202、VABench-V 0.126 vs 0.130、COCO 47.79/48.68 与 8.76 vs 3.15、Dense200 61.78/60.10、70.2% vs 62.6%、LOCAL 80% 延迟降幅取自论文与二手评述交叉一致部分；12 倍动作解码加速与 5.1 倍端到端加速为 Jim Fan 社交平台口径，摘要未直接给出，已标注；25 倍为单次 rollout 初步测量，已在 key_facts 中标明。"
      },
      {
        "item_id": "2026-11-09-B-001",
        "category": "Research",
        "title": "【学术空窗】arXiv cs.CV / cs.RO 最新批次仍停在 11-06，本窗口（11-08 08:00~11-09 08:00）无新提交，连续第三天无当日学术条目",
        "one_line_judgment": "连续三天没有新批次不是因为研究停摆，而是因为 arXiv 的 new listing 按工作日批次发布、周末顺延——这提示日报的学术口径本身需要从「按日」改成「按批」。",
        "image": "",
        "ai_summary": "大白话：学术预印本网站不是随时更新的，它按工作日一个批次一个批次地放。周五那一批放完之后，周六周日就不再出新批次，要等到下周一。所以今天（周日）打开看，最新的一批还是周五的。这不是没人写论文，是网站没开门。这条不报具体论文，只把这件事讲清楚，免得读者以为学术圈停摆了。",
        "detailed_info": "核查方式与结果：2026-11-09 06:00 前后的北京时间，直接抓取 arXiv 的 cs.CV 与 cs.RO 两个 new listing 页面。cs.CV 页面标题显示「Friday, 6 November 2026」，共 107 条新提交，编号区间 2611.06974 至 2611.07648；cs.RO 页面同为「Friday, 6 November 2026」，共 68 条新提交，首条为 arXiv:2611.07091「Curvature by Design: A Support Structure for Continuum Robots」。两个页面均未出现 11-07 或 11-08 的批次，也没有 2611.07xxx、2611.08xxx、2611.09xxx 这三级编号的新条目（2611.06908 与 2611.08449 属于 11-04 与 11-05 的既有批次，不属于 new listing 当日批次）。\n\n与前三期的衔接：2026-11-07 期与 11-08 期均已记录「arXiv 当日批次未发布」，本期是连续第三天。但需要指出，本期收录的两条 Research 条目（苹果 HALO 与英伟达 VFlash）都是 arXiv 论文，只是提交日分别为 11-04 与 11-05，按「事件日」不属于本窗口、按「报道日」属于本窗口，已在各自 notes 中标注口径。\n\n方法论层面的建议：arXiv 的 new listing 按工作日批次发布，通常为美东时间工作日下午至晚间截止、次日凌晨发布；因此以「北京时间 08:00 至次日 08:00」为窗口的日报，在周六、周日与周一三个窗口内天然拿不到当日新批次。要么把学术口径改为「按批」而非「按日」（同一批次只在首次覆盖它的报告日出现一次），要么把窗口对齐到 arXiv 的发布节奏。这一点值得写进作业标准，否则每周末都会重复记录同一事实。",
        "ai_comment": "这一条严格说不算「情报」，但把「没有」说清楚比假装有更重要。前两期已经用「连续第 N 天无学术条目」的方式记录过，如果继续只写一句「无」，读者无法判断是检索失败还是真的没有——所以这一期把核查动作、页面标题、条目编号区间都摊开写，让结论可复核。\n\n更值得讨论的是口径问题。「报告日 08:00 至次日 08:00」这个窗口是按中国读者的作息设计的，但学术生产的节奏是按美东工作日走的。两者错位的结果是：周一早上的日报会一次性吃到周五晚到周一凌晨的全部批次，而周六、周日、周一三个窗口全是空的。这不是数据缺失，是采样频率和信号频率不匹配。\n\n如果要把这件事做得更专业，正确的做法是引入「批次 ID」而不是「报告日」作为学术条目的主键——一批论文只归到它第一次被覆盖的那一期，无论那天是周几。这样既不会重复，也不会在周末制造出「学术停摆」的错觉。这一条留作流程改进建议，不改变本期的收录结果。",
        "key_facts": [
          {
            "metric": "cs.CV 最新批次",
            "value": "Friday, 6 November 2026，107 条新提交",
            "baseline": "本窗口起点 2026-11-08 08:00",
            "condition": "编号区间 2611.06974~2611.07648，无 11-07/11-08 批次"
          },
          {
            "metric": "cs.RO 最新批次",
            "value": "Friday, 6 November 2026，68 条新提交",
            "baseline": "本窗口起点 2026-11-08 08:00",
            "condition": "首条 arXiv:2611.07091（Continuum Robots 支撑结构设计）"
          },
          {
            "metric": "连续空窗天数",
            "value": "3 天",
            "baseline": "2026-11-07 期、2026-11-08 期同样无当日批次",
            "condition": "按报告日窗口口径统计，非按 arXiv 批次口径"
          },
          {
            "metric": "本期替代学术来源",
            "value": "arXiv:2611.06908（11-04 提交）、arXiv:2611.08449（11-05 提交）",
            "baseline": null,
            "condition": "两条均为窗口内被集中解读，事件日早于窗口起点，按报道日口径收录"
          }
        ],
        "position_relation": "不构成与既有条目的技术对立，属于本情报站自身的口径说明。与 2026-11-07 期、2026-11-08 期的「学术空窗」记录构成连续序列，并首次给出流程改进建议。",
        "signal_strength": "弱",
        "tags": [
          "arXiv",
          "学术空窗",
          "口径说明",
          "流程改进"
        ],
        "terms": [
          {
            "term": "new listing 批次",
            "definition_mechanism": "arXiv 的每日新提交列表按工作日归集为一个批次并标注日期，同一批次内的论文共享同一个发布日期，跨周末的提交会顺延并入下一个工作日批次",
            "definition_contrast": "与 abs 页面上的「Submitted on」时间戳相对：后者是作者实际提交的精确时刻（精确到秒），前者是列表归档的日期粒度，两者可能相差数天"
          },
          {
            "term": "采样频率错位",
            "definition_mechanism": "当监测窗口的刷新周期（每日一次）与信号自身的产生周期（每工作日一次）不一致时，会出现某些窗口内必然采不到新信号、而另一些窗口内信号堆积的现象",
            "definition_contrast": "与「数据缺失」不同：错位是采样设计问题，信号一直在产生，只是落在窗口之外；解决办法是改采样口径或改主键，而不是加大检索强度"
          }
        ],
        "sources": [
          {
            "url": "https://arxiv.org/list/cs.CV/new",
            "type": "other"
          },
          {
            "url": "https://arxiv.org/list/cs.RO/new",
            "type": "other"
          }
        ],
        "date": "2026-11-09",
        "notes": "本条为口径说明，非事件报道。两个页面抓取时间为北京时间 2026-11-09 06:00 前后，页面标题均为「Friday, 6 November 2026」。为免误导读者的「学术停摆」印象而单列一条，并在 ai_comment 中给出按批次而非按报告日归集的改进建议。"
      },
      {
        "item_id": "2026-11-09-B-002",
        "category": "Business",
        "title": "Physicl 获 1000 万美元种子轮并开放 Studio：1 万个环境、10 万个资产，标注「由构建本身算出」而非人工打",
        "one_line_judgment": "把合成三维场景做成可按模型失败点定向下单的数据服务——这是三维重建产业链上第一次有人明确把「标注成本」当作可消灭的中间环节来卖。",
        "image": "",
        "ai_summary": "大白话：机器人训练最贵的一环不是算力，是数据——拍一万张照片还得一张张标出「这是杯子、它的深度是多少、相机在哪」。Physicl 干的事是：场景本来就是电脑里搭的，所以杯子在哪、离相机多远、相机朝哪儿，电脑自己就知道，标注不用人打，直接从三维场景里算出来。它攒了 1 万个环境、10 万个物件，你可以说一句「我要一个杯子被袋子挡住一半、夕阳斜照的场面」，它就生成成千上万个变体。刚拿了 1000 万美元种子轮，产品还在免费测试。",
        "detailed_info": "2026 年 11 月 6 日，Physicl 宣布完成 1000 万美元种子轮融资，Inovia Capital 领投，US Venture Partners 参投（公司新闻稿另列 Insight Partners 为投资方之一），同期开放首款产品 Studio 的私有 Beta。公司由创始人兼 CEO Alex de Vigan 领导，团队约 30 人，分布在巴黎、旧金山与纽约；de Vigan 此前用约十年时间经营 nfinite（2017 年创立，2022 年 2 月完成由 US Venture Partners 领投的 1500 万美元 A 轮，四个月后完成由 Insight Partners 领投的 1 亿美元 B 轮），做的是为品牌与电商生产大批量照片级三维商品视觉——Physicl 直接把这套产线复用到机器人训练数据上。\n\nStudio 的能力清单：库内含 10,000 个带真值的三维环境（覆盖机器人在室内与真实场景中的作业场景）与 100,000 个三维资产，可在场景中摆放、替换、重排，官方称可组合出数十亿种场景变体；研究者用自然语言描述一个场景，系统生成匹配的三维场景，再调整光照、物件、材质、杂乱程度与相机位置，导出图像或视频帧用于训练。每条场景附带深度图、表面法线、实例/语义分割、包围盒与相机位姿。\n\n最关键的一句是「标注由构建本身产生，而不是事后估计」——这些标签直接从场景的几何与材质真值算出，而不是从渲染出来的像素反推。对三维重建的从业者，这句话的含义是：合成数据的标签精度上限等于场景建模精度，而不等于标注员的一致性。代价则是，标签描述的是「这个被造出来的场景」，它相对于该场景的准确性，并不能证明该场景本身忠实于物理世界。\n\n产品边界也很明确：Studio 只做渲染，不做随时间演化的物理仿真，因此不含动作、接触与力的信息。这一点在多家媒体评测中被反复指出——它产出的是「带标注的视觉数据」，不是动力学仿真器。对做抓取、装配这类接触密集型任务的团队，Studio 解决的是感知侧的边角案例（遮挡、阴影、杂乱、错位摆放），不是接触动力学。\n\n早期客户与生态：公司称与 Meta、World Labs、Epic Games、SpAItial 等 AI 实验室合作；顾问包括 Hugging Face 的 Thomas Wolf、World Labs 的 Christoph Lassner 与慕尼黑工业大学的 Matthias Niessner。首个公开的量化结果来自 SpAItial：用 Physicl 的合成数据训练后，其在真实房间上的三维重建误差降低一半以上（more than halved），该评估由 Niessner 在慕尼黑工业大学的团队完成，SpAItial 主导；Physicl 未公开具体误差指标、基线数值与测试集构成。",
        "ai_comment": "先拆一个容易被忽略的利益结构：给出「重建误差降一半以上」这个数字的评估方，是 Niessner 的 TUM 团队；Niessner 同时是 SpAItial 的 CEO，也是 Physicl 的顾问。这不是造假，但它是「自评 + 关联方评估」，缺少独立第三方复现。真正能说明问题的是绝对数值——误差从多少降到多少、在哪个数据集、用什么指标——这些一个都没公开。所以这条的量化部分目前只能当作方向性信号，不能当作结论。\n\n第二，产品边界比宣传口径重要得多。Studio 不做物理仿真，只渲染。这意味着它能覆盖的是「看见但看不见全」这类感知边角案例，不能覆盖「抓住但抓不稳」这类接触问题。而对机器人落地来说，后者才是真正卡住的地方——苹果 HALO 的论文恰好从另一侧印证了同一件事：视觉路线在接触密集型任务上会掉。两家公司在同一天给出同一个判断，这个巧合本身值得记一笔。\n\n第三，「标注由构建产生」这句话对三维重建行业是双刃剑。好消息是标注成本被消灭了；坏消息是，如果训练数据主要来自合成场景，那么真实扫描的价值就只剩「评测」与「失效分析」。这和苹果 HALO 的结论完全一致：真实数据的位置从训练集挪到了测试集。做采集硬件、做重建算法的公司要重新想清楚自己卖的是什么。\n\n第四，商业模式上有一个聪明的设计：它不是卖数据集，而是卖「按失败点定向下单」的工具。这让客户从「买一次数据」变成「持续订阅生成」，也让 Physicl 能观察到客户的训练状态——Niessner 描述的场景是「模型自己发现这里数据不够，然后自动生成」。如果这个闭环真能跑通，Physicl 就不只是数据供应商，而是训练流程里的一个环节。风险也在这里：一旦客户自己搭起类似的合成管线（Unreal、Isaac Sim、Infinigen 都是开源的），中间层就会被绕过。de Vigan 自己也承认这个赛道很拥挤。\n\n最后一处需要克制的地方：官方新闻稿把 SpAItial 的重建误差降幅当作核心证据，但 SpAItial 的 Echo-3 本身已经被本情报站 2026-10-28 收录（iPhone 视频到度量级三维世界），如果它真能把误差砍半，那么一条可复现的对比实验（同期同数据集、Physicl 数据 vs 真实数据）会比任何新闻稿都有说服力。目前没有。",
        "key_facts": [
          {
            "metric": "融资",
            "value": "1000 万美元种子轮",
            "baseline": null,
            "condition": "Inovia Capital 领投，US Venture Partners 参投；公司新闻稿另列 Insight Partners；未披露估值、定价与收入"
          },
          {
            "metric": "Studio 资产库",
            "value": "10,000 个带真值三维环境 + 100,000 个三维资产",
            "baseline": null,
            "condition": "官方称可组合出数十亿种场景变体；产品处于私有 Beta，期间免费，按批次开放"
          },
          {
            "metric": "标注类型",
            "value": "深度图、表面法线、分割掩码、包围盒、相机位姿，全部由三维场景直接计算",
            "baseline": "真实影像需逐帧人工标注或事后估计",
            "condition": "标签精度等于场景建模精度，不证明场景本身忠实于物理世界"
          },
          {
            "metric": "SpAItial 早期结果",
            "value": "真实房间三维重建误差降低一半以上",
            "baseline": "未公开具体误差指标与基线数值",
            "condition": "由 Niessner 的 TUM 团队评估、SpAItial 主导；Niessner 同时为 SpAItial CEO 与 Physicl 顾问，属关联方评估"
          },
          {
            "metric": "能力边界",
            "value": "只做渲染，不含随时间演化的物理仿真，无动作与接触力",
            "baseline": "动力学仿真器（如 Isaac Sim）",
            "condition": "多家媒体评测明确指出，官方产品文档亦区分渲染与物理仿真"
          }
        ],
        "position_relation": "与 2026-11-03 收录的大晓机器人 Mundo（几张照片搭可物理交互的世界模型）路径相反：Mundo 从真实照片起步做可交互世界，Physicl 从零造场景只出视觉标注。与本期苹果 HALO 一起，构成「合成数据替代真实扫描」的产业端与学术端两个样本。",
        "signal_strength": "中",
        "tags": [
          "合成数据",
          "Sim2Real",
          "三维资产",
          "自动化标注",
          "种子轮",
          "世界模型",
          "Physicl"
        ],
        "terms": [
          {
            "term": "按构建标注（labelling by construction）",
            "definition_mechanism": "场景的几何、材质、物件位置都是建模时显式给定的，因此深度、法线、分割、包围盒与相机位姿可以在渲染的同一时刻由三维数据直接算出，无需对人类标注或算法估计的结果做二次校验",
            "definition_contrast": "与传统数据标注相对：后者从二维像素反推语义与几何，受遮挡、光照与标注员主观一致性影响，误差会顺着标签流进模型；前者的误差来源只有一个——场景本身建得像不像"
          },
          {
            "term": "边角案例定向生成（edge-case targeting）",
            "definition_mechanism": "先定位模型在真实数据上失败的具体情形（某个杯子被袋子挡住一半、某个时刻的斜阳），再在合成环境里复现这一情形并系统性地变换无关变量，批量产出针对性样本",
            "definition_contrast": "与「采集更多真实数据」相对：真实采集无法回放同一时刻、也改不了光照与摆位；与「随机增广」相对：定向生成改变的是任务相关的关键变量，而不是无关的像素扰动"
          },
          {
            "term": "sim-to-real gap（仿真到现实落差）",
            "definition_mechanism": "模型在仿真中表现良好、迁移到真实环境后性能下降的现象，来源包括渲染保真度不足、材质与光照的物理建模偏差、接触与摩擦模型简化、以及传感器噪声分布不同",
            "definition_contrast": "与单纯的域随机化不同：域随机化通过扩大训练分布来「包围」真实分布，是从训练侧缓解；缩小 gap 的另一条路是提高仿真本身的保真度，从数据侧下手——Physicl 押的是后者"
          }
        ],
        "sources": [
          {
            "url": "https://keevurds.com/noise/physicl-raises-10-million-to-train-robots-on-the-edge-cases-they-keep-missing",
            "type": "news"
          },
          {
            "url": "https://www.startupbooted.com/physicl-raises-10m-seed-round-to-build-realistic-training-worlds-for-robots",
            "type": "news"
          },
          {
            "url": "https://www.tokenpost.com/news/business/51452",
            "type": "news"
          }
        ],
        "date": "2026-11-06",
        "notes": "融资与 Studio 发布日为 2026-11-06（事件日，早于本窗口起点 11-08 08:00），本窗口内发生的是中文与英文媒体的深度解读扩散（11-08 前后）。按报道日口径收录并在 date 字段标注真实事件日。融资金额、领投方、团队规模与分布、de Vigan 与 nfinite 背景、10,000 环境 / 100,000 资产、标签类型、合作方与顾问名单，取自多家媒体交叉一致部分；SpAItial 结果「误差降低一半以上」未获具体数值，且评估方与被评估方、顾问方存在人员重叠，已在 ai_comment 与 key_facts 中标注利益关系。Studio 不做物理仿真的边界，由 TokenPost 与 techsignalbrief 两家评测明确指出。"
      },
      {
        "item_id": "2026-11-09-B-003",
        "category": "Hardware",
        "title": "Seyond 图达通发布 SIMPL-Tolling：图像级激光雷达做收费站车型分类，检测准确率 ≥99.99%、长宽高误差 ±10/±8/±5cm",
        "one_line_judgment": "把激光雷达当成「独立第三方计量尺」塞进已有的收费系统，而不是替换它——这是激光雷达在交通基建里第一次以「对账工具」而非「传感器升级」的身份落地。",
        "image": "",
        "ai_summary": "大白话：收费站最怕漏收、错收——一辆车该按几类收费，全靠摄像头认，认错了钱就少收了。图达通的办法是在龙门架上装激光雷达，直接量出这辆车有多长、多宽、多高、几根轴，再跟收费系统里的记录对一遍：如果系统记的是「三类车」，激光雷达量出来是「五类」，那这笔账就有问题，可以人工去查。它不替代原来的摄像头和后台，只是加一个「不会说谎的秤」。在北美一个真实收费站跑 110 天、138 万笔交易，最后漏检率从 0.39% 降到 0。",
        "detailed_info": "2026 年 11 月 7 日（Sunnyvale, California 发布），Seyond 图达通宣布推出 SIMPL-Tolling，把其 SIMPL 智慧交通平台延伸到收费场景。这是一套基于图像级激光雷达的车辆检测与分类方案，面向全电子收费（all-electronic tolling）场景。\n\n工作原理：激光雷达覆盖所有被监测车道，对通过的车辆做三维测量，输出车长、车宽、车高、轴数、车速与车道位置，并按美国联邦公路管理局（FHWA）13 类车型体系与客户自定义分类方案做归类；同时向收费相机系统提供预测性的前/后触发时序（predictive trigger timing），让相机在车辆到位前就准备好抓拍；每辆车生成一条带唯一标识、时间戳、车道信息、车型分类与尺寸的交易记录，直接发送到运营方的后台系统（BOS）做对账，用于发现「实际通过的车」与「系统记录的交易」之间的差异。\n\n标称指标（在正常天气、安装与标定条件下）：车辆检测准确率 ≥99.99%；按轴数制与长度制的分类准确率 ≥99.5%；车长、车宽、车高测量误差分别为 ±10 cm、±8 cm、±5 cm；可检测车速上限 200 mph。\n\n实测验证：由第三方在北美一处真实收费设施与在产的全电子收费系统并行评估，持续 110 天、覆盖超过 138 万笔交易，其中 26 天有降雨。经过约三个月的现场模型调优，评估期结束时 SIMPL-Tolling 的车型分类与独立真值样本达到 100% 一致；与设施 BOS 的对账显示，SIMPL-Tolling 漏检车辆占比从 0.39% 降至 0.00%。\n\n工程与合规：可沿用现有龙门架结构（需现场评估）；提供实时数据流、REST API 与 CSV 导出三种标准接口；符合 Build America, Buy America（BABA）要求。产品已可供货，将在 11 月 12 日至 15 日于德州阿灵顿举行的 IBTTA 第 94 届年会暨展览（展位 729）展出。\n\n与既有产品线的关系：本期条目不与 2026-11-05 收录的「Seyond 图达通推 LiDAR 运营数字孪生：联手 Dell、NVIDIA 在巴塞罗那 SC 大会演示实时空间感知」重复——后者是面向城市路口的运营数字孪生演示，本条是收费场景的独立产品线，两者共用 SIMPL 平台但目标客户、指标与交付形态完全不同。",
        "ai_comment": "这条的价值不在 99.99%，而在「独立数据层」这个定位。收费站的痛点是收入流失，而收入流失的根因是「只有一套眼睛」——摄像头认错，没有任何东西能交叉验证。激光雷达在这里不是更准的摄像头，而是一个物理原理完全不同的第二信源：摄像头看颜色和形状，激光雷达看几何尺寸。两个信源对不上，就说明有问题。这个思路比「用更好的传感器替换旧传感器」高明得多，因为它不需要客户推翻既有投资。\n\n数字要分层读。99.99% 检测率与 99.5% 分类率是「标称指标」，条件是「正常天气、正确安装与标定」——这三个前提在真实收费站并不总成立，26 天降雨就是明证。真正有说服力的是实测那一组：110 天、138 万笔、与独立真值样本 100% 一致、漏检 0.39%→0.00%。但这里也要看清楚，「分类 100% 一致」是在「约三个月现场调优之后」的评估期末测的，也就是说它包含了人工针对性调模型的成本——这套模型换一个收费站能不能直接复用，官方没说。\n\n±10/±8/±5 cm 的长宽高精度，对应的正是「按长度制分类」的判定边界：FHWA 13 类里相邻类别的最小长度差在米级，±10 cm 完全够用；但如果客户要用自定义的细分方案（比如按轴距或货箱高度细分），这个精度余量就会变薄。\n\nBABA 合规这一条容易被中文读者忽略，但对北美政府客户是硬门槛——它意味着这套系统的激光雷达与关键部件必须在美国本土生产或符合特定国产化比例。图达通把这一条写进产品特性，说明它在这个市场的打法是「进政府集采」，而不是「卖给集成商试试看」。\n\n对三维重建行业的映射：这是一次典型的「高精度几何测量在成熟行业里找到付费场景」。收费站的场景特点很友好——车辆单向低速通过、龙门架固定、视场可控，是激光雷达最容易做准的环境。一旦这类「可控场景下的计量级应用」被验证能直接换算成营收，激光雷达厂商就会继续往更多「有明确对账需求」的场景复制：治超站、港口闸口、矿区计量、物流分拣。这些场景的共同点是「错一次就漏一笔钱」，比泛泛的「智慧城市」好卖得多。",
        "key_facts": [
          {
            "metric": "车辆检测准确率",
            "value": "≥99.99%",
            "baseline": null,
            "condition": "标称指标，限定正常天气、正确安装与标定条件"
          },
          {
            "metric": "车型分类准确率",
            "value": "≥99.5%",
            "baseline": null,
            "condition": "轴数制与长度制两种方案；按 FHWA 13 类体系或客户自定义方案归类"
          },
          {
            "metric": "尺寸测量误差",
            "value": "车长 ±10 cm、车宽 ±8 cm、车高 ±5 cm",
            "baseline": null,
            "condition": "可检测车速上限 200 mph"
          },
          {
            "metric": "真实收费站验证",
            "value": "110 天、138 万+ 笔交易（含 26 天降雨）；期末分类与独立真值样本 100% 一致；漏检率 0.39%→0.00%",
            "baseline": "与在产全电子收费系统并行运行、与 BOS 对账",
            "condition": "第三方评估，含约三个月现场模型调优；未披露该模型对其它收费站的复用性"
          },
          {
            "metric": "接口与合规",
            "value": "实时数据流 + REST API + CSV 导出；符合 BABA",
            "baseline": null,
            "condition": "可沿用现有龙门架（需现场评估）；IBTTA 第 94 届年会（11-12~15，德州阿灵顿）展位 729"
          }
        ],
        "position_relation": "与 2026-11-05 收录的 Seyond「LiDAR 运营数字孪生」是同一平台的两条产品线：那条把路口做成可实时观测的数字孪生，这条把收费站做成可对账的独立计量层。与 2026-11-04 收录的河南 3.1 万公里数字孪生路网相比，前者是「把路建成模型」，本条是「用模型去校验收入」。",
        "signal_strength": "中",
        "tags": [
          "激光雷达",
          "智慧交通",
          "收费站",
          "车型分类",
          "Seyond",
          "图像级激光雷达",
          "BABA"
        ],
        "terms": [
          {
            "term": "图像级激光雷达（image-grade LiDAR）",
            "definition_mechanism": "扫描线密度与点频足够高，输出的点云在空间分布上接近「一帧图像」的稠密程度，使得基于二维视觉的检测、分类与分割算法可以直接迁移到点云或点云投影上，而不必依赖稀疏点云的几何特征工程",
            "definition_contrast": "与早期低线束机械式激光雷达相对：后者点云稀疏、以几何轮廓为主，只能做「有没有东西」的判断；图像级点云的密度足以支撑「是什么东西、有多大」的判断"
          },
          {
            "term": "交易级对账（transaction-level reconciliation）",
            "definition_mechanism": "把激光雷达独立生成的车辆事件记录（唯一 ID、时间戳、车道、分类、尺寸）与运营方后台系统里的收费交易逐笔比对，找出缺失、多余与错分类的交易，从而定位收入流失的具体环节",
            "definition_contrast": "与「统计层面的准确率报表」相对：报表只能告诉你总体漏了多少，对账能指出漏的是哪一笔、哪个车道、什么时段，可直接支撑追缴与流程修正"
          },
          {
            "term": "预测性相机触发（predictive camera triggering）",
            "definition_mechanism": "根据车辆的三维位置与速度提前推算其到达相机最佳拍摄位置的时刻，向相机系统发送前/后触发信号，避免因固定距离触发或软件延迟导致的抓拍偏移与车牌模糊",
            "definition_contrast": "与地感线圈或视频虚拟线圈触发相对：后两者只能感知「有没有压线」，无法预知车辆尺寸与速度差异；激光雷达可同时给出位置、速度与外形尺寸，触发时序更稳"
          }
        ],
        "sources": [
          {
            "url": "https://seyond.com/seyond-launches-simpl-tolling/",
            "type": "news"
          },
          {
            "url": "https://seyond.com/news/",
            "type": "other"
          }
        ],
        "date": "2026-11-07",
        "notes": "官网新闻页标注发布日期 Nov 8, 2026，正文标注「Sunnyvale, California — November 7, 2026」，两处均落在本窗口内（11-08 08:00 前 1 小时为 11-07，正文日期 11-07 早于窗口起点 08:00，但官网发布时刻按美西时间 11-07 对应北京时间 11-08，实际进入本窗口）。date 字段取正文事件日 11-07。所有指标、验证规模、接口与 IBTTA 展位信息，均取自 Seyond 官网原文，未作推断；标称指标与实测结果的条件差异已在 ai_comment 中说明。"
      },
      {
        "item_id": "2026-11-09-B-004",
        "category": "Application",
        "title": "上纬新材公告：启元 Q1 / T1 消费级机器人下线 10,000 台，距 5000 台仅 14 天，公司同时提示收入占比仍低",
        "one_line_judgment": "万台是个真实的制造里程碑，但公告里那句「营业收入主要来自新材料业务」才是关键——消费级具身智能的第一个万台下线，发生在收入几乎还没开始的阶段。",
        "image": "",
        "ai_summary": "大白话：启元是两个不到一米高的小机器人，一个会折叠塞进背包，一个能在轮子和四条腿之间换着走，卖 19999 元起。9 月 20 日发布，10 月开始交付，10 月 25 日造出第 5000 台，11 月 8 日第 10000 台下线，14 天翻一倍。但公司自己在公告里说得很清楚：现在赚的钱主要还是靠原来的新材料业务，机器人这块收入占比很低，还不敢预测今年能靠它赚多少。所以这条是「造得出来」的证明，不是「卖得出去」的证明。",
        "detailed_info": "2026 年 11 月 8 日，上纬新材料科技股份有限公司（688585，科创板）发布《关于业务进展的公告》（公告编号 2026-055），披露消费级具身智能机器人业务进展：公司于 2026 年 9 月 20 日正式对外发布「启元 Q1」与「启元 T1」，截至公告披露日，产能有序爬坡、良率表现良好，两款产品累计下线 10,000 台。\n\n产品参数（据公开报道）：Q1 高 88 cm，22 个柔顺力控自由度，可折叠收纳进背包，用户可自定义结构件与交互动作、性格、姿态与语音，售价 19,999 元（探索版 26,999 元）；T1 高约 100 cm、重 16 kg，可在轮式人形与四足形态之间切换，续航约 2~3 小时，可随地形变换形态并做避障与身份识别，基础版 19,999 元、Pro 版 29,999 元。交付自 10 月 1 日起在包括上海、深圳、杭州在内的七个城市开始。\n\n量产节奏与制造体系：10 月专用工厂投产，采用「车规标准 + 3C 量级」的制造体系（汽车级质量控制叠加消费电子的精密装配），并提到与蓝思科技协同。10 月 25 日第 5000 台下线，11 月 8 日第 10000 台下线，14 天翻倍。Q 事业部总裁刘东方称，这一里程碑证明制造工艺、质量控制与供应链均已跑通。\n\n运营数据（公司口径）：月活跃使用率超过 98%，日均在线峰值超过 40%，日均在线时长约 3 小时，人均日交互次数超过 100 次。编号 NO.10000 的整机交付给财经作家吴晓波。\n\n公告中的风险提示同样是本条的核心信息：消费级具身智能机器人业务尚在初步阶段，后续仍存在产能持续爬坡不及预期、良率水平波动、产品体验达不到消费者预期、市场推广与订单转化不及预期、行业竞争加剧、核心零部件供应链波动等风险；截至公告披露日，公司营业收入主要来自新材料业务，消费级具身智能机器人实现的营业收入占总营业收入比例较低；该业务目前仍处于规模化量产爬坡及商业化验证阶段，公司尚不能预测其对 2026 年度营收及盈利的影响情况。\n\n财务背景（据三季报）：2026 年前三季度新材料业务营业收入 12.09 亿元，同比略降，毛利率 14.42%（同比改善 0.2 个百分点），归母净利润 6,351.81 万元、同比增 4.91%；但合并口径下营业收入 12.09 亿元、同比降 5.51%，利润总额 -4.23 亿元、同比降 665.32%，归母净利润 -4.22 亿元、同比降 796.94%，基本每股收益 -1.05 元。三季报曾说明 Q1 与 T1 于 9 月 20 日发布开售、10 月起陆续交付，报告期内该业务尚未确认收入。",
        "ai_comment": "这条要读准，必须把「造得出来」和「卖得出去」分开。14 天从 5000 台到 10000 台，确实是制造能力的硬证据——消费电子级的节拍、车规级的过程控制，这两件事单独做到都不容易，同时做到更难。但公告里那句风险提示写得很老实：收入主要来自新材料，机器人占比很低，且不敢预测对全年营收的影响。翻译过来就是：万台下线是产线跑通了，不是市场验证完了。\n\n运营数据要谨慎对待。「月活超 98%、日均在线 3 小时、人均日交互 100+ 次」——这些数字的分母是一万台已交付设备，而其中相当一部分可能还在渠道、体验店或早期尝鲜用户手里。早期用户天然是活跃用户，这个偏差在硬件行业里是常识。真正要看的是第 3 个月、第 6 个月的留存曲线，以及退货率。官方没有给，也不该指望现在给。\n\n财务背景值得多看两眼：合并口径下前三季度归母净利润 -4.22 亿元、同比降 796.94%，但新材料业务本身是赚 6351.81 万元、同比还在增长。两者差距说明亏损主要来自机器人业务的前期投入（研发、产线、渠道、备货）。这个结构在硬件创业公司里很正常，但对一家原本做材料的上市公司来说，意味着短期财报会被这块新业务明显拖累——这也是公告必须反复提示风险的原因。\n\n对本情报站的相关性要说清楚：这条与三维重建的关联是弱的。启元 Q1/T1 的能力集中在运动、交互与形态变换，公开信息里没有空间重建、SLAM 精度或三维感知的量化指标。收录它的理由是「消费级具身智能首次跑到万台量级」这个产业节点本身，而不是技术相关性。读者如果要找与三维重建强相关的具身条目，应该看本期 A-001（苹果 HALO）与 A-002（英伟达 VFlash）。\n\n最后一个观察：编号 NO.10000 的机器交付给吴晓波而不是实验室或开发者，这个选择很说明问题——这家公司现阶段卖的是「话题」与「尝鲜」，不是「工具」。等哪天第 50000 台交付给一家工厂或一家养老院，那才是另一个故事。",
        "key_facts": [
          {
            "metric": "累计下线量",
            "value": "10,000 台（Q1 + T1 合计）",
            "baseline": "10 月 25 日 5,000 台，间隔 14 天翻倍",
            "condition": "2026-11-08 公告披露；9 月 20 日发布、10 月起陆续交付"
          },
          {
            "metric": "产品与价格",
            "value": "Q1：88 cm、22 自由度、可折叠，19,999 元（探索版 26,999 元）；T1：约 100 cm、16 kg、轮式与四足切换，19,999 元（Pro 29,999 元）",
            "baseline": null,
            "condition": "交付自 10 月 1 日起在含上海、深圳、杭州的七个城市开始"
          },
          {
            "metric": "运营数据（公司口径）",
            "value": "月活 >98%、日均在线峰值 >40%、日均在线约 3 小时、人均日交互 >100 次",
            "baseline": null,
            "condition": "分母为已交付设备，早期用户活跃度天然偏高，官方未披露第 3/6 个月留存与退货率"
          },
          {
            "metric": "收入结构",
            "value": "营业收入主要来自新材料业务，机器人业务占比「较低」",
            "baseline": "2026 前三季度新材料业务营收 12.09 亿元、归母净利 6,351.81 万元",
            "condition": "公司明确表示尚不能预测该业务对 2026 年度营收及盈利的影响"
          },
          {
            "metric": "合并口径业绩",
            "value": "前三季度营收 12.09 亿元（-5.51%）、归母净利 -4.22 亿元（-796.94%）、基本每股收益 -1.05 元",
            "baseline": "上年同期",
            "condition": "亏损主要来自机器人业务前期投入，新材料业务本身仍盈利"
          }
        ],
        "position_relation": "与 2026-11-05 收录的赛尔智控（手持三维扫描仪累计出货近万台）形成量级对照：两条都跨过「万台」门槛，但一条是工业测量工具、一条是消费级具身本体，说明「万台」在 2026 年已不再是稀缺叙事。与本期苹果 HALO 构成上下游对照——一个在造本体，一个在造驱动本体的数据。",
        "signal_strength": "中",
        "tags": [
          "具身智能",
          "消费级机器人",
          "量产",
          "上纬新材",
          "启元",
          "科创板"
        ],
        "terms": [
          {
            "term": "柔顺力控自由度",
            "definition_mechanism": "关节在位置控制之外还具备力矩感知与柔顺响应能力，遇到外力时可以让位而不是硬顶，从而在人机接触、被抱持、被推挤等情形下不损伤自身与对方",
            "definition_contrast": "与纯位置控制的舵机关节相对：后者只听「转到某个角度」的指令，遇到阻力会持续加力；柔顺力控关节可以感知并让步，是消费级机器人能进入家庭场景的前提之一"
          },
          {
            "term": "车规标准 + 3C 量级",
            "definition_mechanism": "把汽车行业的过程质量控制体系（来料、追溯、老化、一致性）套用到消费电子级别的生产节拍上，用高标准的工艺去跑大批量的产能",
            "definition_contrast": "与纯消费电子的「快而松」相对，也与纯车规的「严而慢」相对：前者良率波动大、后者爬产周期长，这个组合试图同时拿到一致性与速度，代价是产线投入更高"
          }
        ],
        "sources": [
          {
            "url": "https://paper.cnstock.com/html/2026-11/09/content_2288462.htm",
            "type": "announcement"
          },
          {
            "url": "https://www.cnstock.com/commonDetail/825691",
            "type": "news"
          },
          {
            "url": "https://www.mrjjxw.com/articles/2026-11-08/4641718.html",
            "type": "news"
          }
        ],
        "date": "2026-11-08",
        "notes": "公告原文（证券代码 688585、公告编号 2026-055、落款 2026 年 11 月 9 日）经东方财富公告接口与上海证券报电子版双向核对一致；产品参数、七个城市交付、运营数据、刘东方职务、蓝思科技协同取自每日经济新闻与英文媒体报道；三季报财务数据取自每日经济新闻报道转述。公告正文未提及「14 天」「240 台日产能」「编号交付吴晓波」等细节的表述方式，其中 14 天由 10-25 与 11-08 两个时点算出，与媒体口径一致；本条与三维重建技术相关性弱，收录理由已在 ai_comment 中说明。"
      },
      {
        "item_id": "2026-11-09-B-005",
        "category": "Application",
        "title": "腾讯混元 Hy4 正式版：770B 首次引入视觉理解与电脑操作，699 万个细胞、84 张乱序切片自主完成小鼠胚胎三维重建",
        "one_line_judgment": "84 张乱序切片、没有配准工具、没有标注，模型自己发现镜像翻转不对并退回去重来——这一次通用大模型在三维重建任务上交出的不是分数，而是「发现错误并自我纠正」的行为记录。",
        "image": "",
        "ai_summary": "大白话：生物学家做小鼠胚胎的三维重建，原本要先用专门的软件把 84 张切片对齐（配准），再一层层摞起来。这次他们直接把 84 张打乱顺序、也没标注的切片丢给混元 Hy4，让它自己想办法。它不但摞出来了，还发现其中有些切片是左右镜像翻转的，自己把它们翻回来重新对齐，整个过程一个半小时，没有人插手。这是通用大模型第一次在三维重建这种「几何要对得上」的任务上表现出自我纠错，而不是只会写文字。",
        "detailed_info": "2026 年 11 月 4 日，腾讯混元发布 Hy4 正式版。相比 8 月 28 日的 Hy4 preview（纯文本模型，权重按 Apache 2.0 开源），正式版做了两项「从无到有」的补齐：首次引入视觉理解（细粒度图像识别、复杂图表解析、带图数学推理），首次支持电脑操作 Computer Use（图形界面与命令行可混用）。架构为 MoE，总参数 770B、每 token 激活 49B，78 层、256 个路由专家加 1 个共享专家，上下文窗口 1,048,576 token；顶部另有一个 100 亿参数的多 token 预测层，因此部分榜单显示 780B，与 770B 是同一个模型。\n\n与三维重建直接相关的能力来自训练侧与案例。训练侧：混元与腾讯云 Agent Runtime 团队共建沙箱环境，内部署数百款应用软件，让模型反复操作、核对、错了退回重做；后训练阶段针对 Blender、CAD 等专业软件与跨应用长程任务做了专项训练。这类软件的特点是「改一步画面就变一截」，模型必须看懂画面再决定下一步，与三维软件里的建模、配准、渲染操作高度同构。\n\n三个展示案例中第三个是本期收录的直接理由：699 万个细胞、84 张乱序切片，做小鼠胚胎的三维重建。条件被刻意设得很苛刻——没有配准工具、没有标注；模型自主完成了切片排序与空间对齐，并自行发现部分切片存在镜像翻转问题，将其纠正后重新配准。整个过程耗时一个半小时，全程无人工干预。另外两个案例是：在 28 亿像素航拍图中定位一个 2 米宽的屋顶构件（难点在于无法整张送入，需要先判断往哪看再放大确认）；用 900 片拼图复原莫奈《波尔迪盖拉》（考察全局记忆）。\n\n指标与短板（官方口径，两套幻觉口径不合并）：自建测试幻觉率从 15.76% 降至 5.45%；因猜测导致结论的错误率从 23.1% 降至 5.6%；另一处官方披露为幻觉率从 12.95% 降至 7.2%（评测集不同）。Hy-BioExperimentBench 生物实验基准仅得 30.4 分（满分 100），官方自述「开放式实验设计能力尚未达到高风险阈值，基础生物知识扎实，但把知识转化成可执行实验方案这一环仍然有限」。\n\n评测与价格：金融投研由 213 位行业专家对 579 项真实业务任务盲测，Hy4 综合得分 3.04、在参评开源模型中排名第一；Artificial Analysis Intelligence Index v5.0.1 得 35 分、全球并列第 12（落后 Kimi K3.1 Pro 11 分、GPT-6 Astra 22 分，与 Grok 4.7 持平）；SuperCLUE 2026 年 11 月榜中 Hy4-Preview 总分 42.96，正式版暂未单独上榜。API 价格为每百万 token 输入 6 元、输出 18 元、缓存命中 0.3 元；腾讯云 TokenHub 至 2026-12-31 按刊例价 5 折，11 月 18 日前通过 Token Plan 接入 2.5 折。权重与系统卡片官方称「近期开源」，截至发布时尚未放出。\n\n协同研发：结合 Hyra 2.0 脚手架，Hy4 优化了内部同架构小模型的预训练基础设施，自动定位训练卡点，把整体训练吞吐提升 20.1%，并自动训出一个在多项评测上优于官方版本的 Jev 模型；同时开源两个由它协同研发的基础模型——单细胞表征的 HyCell 与物理场的 HyPDE。数学侧，它找出交换代数 Méndez–Pinto–Villarreal 猜想的一个反例，提出新条件补全猜想，并用 Lean 完成形式化验证。",
        "ai_comment": "这条的全站相关性集中在一个点上：三维重建任务第一次成为通用大模型的「行为测试」而非「能力展示」。传统上我们衡量重建算法，看的是 PSNR、Chamfer 距离、配准残差；而这里给出的证据形态完全不同——它描述了模型面对脏数据时的行为序列：发现顺序乱了→自己排序→发现镜像翻转→退回去翻正→重新配准。这个序列的价值在于，它对应的是「几何一致性检查」这件人类专家才会做的事。\n\n但必须立刻泼三盆冷水。第一，样本量是一。一个胚胎、一次成功、一个半小时——这不是基准测试，是演示。生物三维重建的公开基准（比如各种胚胎/脑组织的电镜切片数据集）里有大量更难的情形：切片厚度不均、染色差异、组织撕裂、缺失切片。模型在这类数据上的表现完全未知。第二，没有配准工具与标注这个前提，既可以说是难度加成，也可以说是「没有对照」——如果换成有配准工具的传统流程（如 elastix、BigWarp）能达到什么精度，官方没有对比。第三，699 万个细胞的三维重建，最终输出的是什么形态？点云？标签体？还是仅完成了配准？官方描述停在「做三维重建」，没有给几何精度或生物学可解释性的评估。\n\n幻觉率的两套数字（15.76%→5.45% 与 12.95%→7.2%）以及猜测错误率（23.1%→5.6%）口径不同，官方自己明确说「不取平均、不合并」，这一点值得肯定。但要注意，猜测错误率从 23.1% 降到 5.6% 对长程任务的意义远大于对单题的意义——它降的是「每一步都猜一点」的乘数底数。三维重建恰好是典型的长程任务：84 张切片，任何一张配错，整体就废了。\n\n生物实验 30.4 分这条短板的写法也值得记一笔。官方没有把它藏起来，而是明确说「开放式实验设计能力尚未达到高风险阈值」。在一个以三维重建为卖点的案例旁边，主动披露同一模型在生物领域的低分，这种自我设限在国产模型发布里并不常见。\n\n最后是价格与开源的关系。权重「近期开源」已经说了好几天但还没放出来，这意味着现阶段所有第三方复现都只能走 API。对一个宣称能自主完成复杂三维重建任务的模型，API 调用无法暴露中间过程（它到底怎么排序、怎么检测镜像），这对想验证「自我纠错」这件事的研究者是不友好的。真正该盯的发布节点是权重落地那一天。",
        "key_facts": [
          {
            "metric": "小鼠胚胎三维重建",
            "value": "699 万个细胞 / 84 张乱序切片，1.5 小时无人工干预完成",
            "baseline": "无配准工具、无标注",
            "condition": "官方演示案例，模型自主排序、自动发现并纠正镜像翻转后重新配准；未披露几何精度与对照流程"
          },
          {
            "metric": "模型规格",
            "value": "770B 总参数 / 49B 激活（MoE，78 层，256 路由专家 + 1 共享专家），上下文 1,048,576 token",
            "baseline": "Hy3 系列不到 300B",
            "condition": "顶部另有 100 亿参数多 token 预测层，部分榜单显示 780B"
          },
          {
            "metric": "专业软件专项训练",
            "value": "沙箱内部署数百款应用；Blender、CAD 与跨应用长程任务专项训练",
            "baseline": "Hy4 preview 为纯文本模型",
            "condition": "沙箱由混元与腾讯云 Agent Runtime 团队共建，Agent Runtime 已对外开放"
          },
          {
            "metric": "幻觉与猜测错误",
            "value": "幻觉率 15.76%→5.45%（另一口径 12.95%→7.2%）；猜测导致错误率 23.1%→5.6%",
            "baseline": "Hy3 / 上一代",
            "condition": "两套口径评测集不同，官方明确不取平均、不合并"
          },
          {
            "metric": "第三方榜单与价格",
            "value": "Artificial Analysis v5.0.1 得 35 分、全球并列第 12；金融众测 579 任务 / 213 专家综合 3.04、开源第一",
            "baseline": "Kimi K3.1 Pro 高 11 分、GPT-6 Astra 高 22 分",
            "condition": "API 输入 6 元 / 输出 18 元 / 缓存 0.3 元每百万 token；权重称「近期开源」，发布时未放出"
          }
        ],
        "position_relation": "与 2026-11-06 收录的魔芯 MoWorld 2.0（昇腾原生 4D 世界模型）方向互补：那条是专门为空间生成训的垂类模型，本条是通用模型在三维任务上表现出的通用能力。与 2026-11-07 收录的群核科技空间理解模型相比，本条没有专用三维数据集，靠的是通用后训练里的专业软件操作。",
        "signal_strength": "中",
        "tags": [
          "腾讯混元",
          "Hy4",
          "多模态大模型",
          "Computer Use",
          "三维重建",
          "生物影像",
          "开源模型"
        ],
        "terms": [
          {
            "term": "Computer Use（电脑操作）",
            "definition_mechanism": "模型先「看」屏幕截图理解界面状态，再决定点哪里、输什么，执行后重新截图观察结果，形成「观察—决策—执行—再观察」的闭环；与纯文本输出相比，它的错误会直接作用在软件状态上",
            "definition_contrast": "与代码解释器或工具调用相对：后者通过结构化 API 调用确定性函数，输入输出明确；Computer Use 操作的是为人眼设计的图形界面，必须处理弹窗、加载态、报错等不确定状态"
          },
          {
            "term": "切片配准（section registration）",
            "definition_mechanism": "把连续切片的二维图像在三维空间中逐层对齐，确定每张切片的位移、旋转与缩放，使重建出的体积结构连续；序列切片重建中还要先确定切片的真实顺序，甚至判断是否存在镜像翻转",
            "definition_contrast": "与多视角摄影测量中的位姿估计相比：后者有相机成像模型与重叠特征可依，切片之间没有共同的成像几何，只能靠组织纹理的连续性做相似性匹配，错误一旦累积很难回退"
          },
          {
            "term": "镜像翻转（mirror flip）",
            "definition_mechanism": "切片在制备或扫描环节被反向放置，导致该切片的左右与前后关系与相邻切片相反；在对齐时表现为「怎么都对不上」的局部错位，必须先把该切片翻回来才能继续配准",
            "definition_contrast": "与单纯的平移/旋转偏差不同：位移与旋转可以用连续优化求解，镜像翻转是离散的手性错误，常规优化会陷入局部最优而无法自救，必须先识别再离散纠正"
          },
          {
            "term": "长程任务中的猜测误差累积",
            "definition_mechanism": "多步任务里每一步都依赖前一步的结果，若每一步都带一个小概率的「猜」，整条链的成功率等于各步成功率的乘积，随步数增加呈指数衰减；降低单步猜测率比提高单步准确率对长任务更有效",
            "definition_contrast": "与单题正确率相对：单题场景只考一次判断，猜测的影响有限；长程场景里 5% 的猜测率足以让 20 步任务的成功率跌到三成以下"
          }
        ],
        "sources": [
          {
            "url": "https://www.163.com/dy/article/LB7P970C05566UKR.html",
            "type": "news"
          },
          {
            "url": "https://www.thepaper.cn/newsDetail_forward_34420760",
            "type": "news"
          },
          {
            "url": "https://devpress.csdn.net/aibjcy/6af0906340858c2d8819490b.html",
            "type": "news"
          },
          {
            "url": "https://www.wlcbnews.com/kjyw/202611/336.html",
            "type": "news"
          }
        ],
        "date": "2026-11-04",
        "notes": "Hy4 正式版发布日为 2026-11-04（事件日，早于本窗口起点 11-08 08:00），本窗口内发生的是中文媒体深度解读（翼言商业观察经网易 11-08 16:37 发布、澎湃 11-08、CSDN 11-04）与 WorkBuddy 办公评测传播。按报道日口径收录并在 date 字段标注真实事件日。参数规格、上下文、激活参数、78 层/256 专家、100 亿多 token 预测层、幻觉两套口径、Hy-BioExperimentBench 30.4 分、金融众测 579/213/3.04、Hyra 2.0 吞吐 +20.1%、HyCell/HyPDE、API 价格、Artificial Analysis 35 分与排名，取自网易（翼言商业观察）、澎湃、CSDN、乌兰察布新闻网交叉一致部分；699 万细胞/84 张切片/1.5 小时/镜像翻转自动纠正来自官方发布材料经网易与腾讯新闻转述，未见独立复现。"
      },
      {
        "item_id": "2026-11-09-D-001",
        "category": "Application",
        "title": "ChinaVR 2026 闭幕：黄惠讲「Building the 3D World」，三维表征重建专场 10 篇口头报告集中亮相",
        "one_line_judgment": "一个国内旗舰会议把「三维表征重建」单列成一个口头报告专场、并在技术论坛里专门讨论「可控三维生成与可信世界模型」——这说明国内的学术组织方式已经把重建从图形学的子课题升格为独立议程。",
        "image": "",
        "ai_summary": "大白话：这是国内虚拟现实领域最大的一场会，今年在广州开，一千多人参加。有意思的是它把「三维重建」单独拿出来做成一个专场，一口气讲了 10 篇论文，从城市尺度重建、低光照重建、建筑轻量化，到高斯点云分割、内镜手术场景重建都有。另外还有一整场论坛专门讨论「怎么让三维生成变得可控、可信」。深圳大学黄惠教授的主旨报告直接叫「Building the 3D World」。这说明在国内学术圈，三维重建已经不再只是图形学里的一个小方向，而是被当成构建虚拟世界的底座来组织。",
        "detailed_info": "第二十六届中国虚拟现实大会（ChinaVR 2026）于 2026 年 11 月 6 日至 8 日在广州朗豪酒店举行，11 月 8 日闭幕。大会由中国计算机学会（CCF）、中国仿真学会（CSF）与中国图像图形学会（CSIG）联合主办，CCF 虚拟现实与可视化技术专业委员会、CSF 虚拟技术及应用专业委员会、CSIG 虚拟现实专业委员会与暨南大学联合承办，以「虚拟现实与人工智能的双向赋能」为主题，参会千余人。开幕式由虚拟现实技术与系统全国重点实验室副主任、北京航空航天大学王莉莉教授主持；中国工程院院士赵沁平、中国科学院院士胡事民、中国工程院院士王自力等出席；大会主席为 CCF 虚拟现实与可视化技术专业委员会主任委员、北京理工大学王涌天教授。据官方统计，大会汇聚 150 余位报告嘉宾，安排 8 场主旨报告、14 个专题论坛与 6 个特别论坛。\n\n11 月 8 日主旨报告专场（09:00–12:00，朗豪厅 CDEF）共五场：李树涛院士（中国科学院院士、长安大学校长）《多模图像融合感知》；李波（北京航空航天大学）《面向智能化的自主创新与智能感知应用》；史元春（青海大学校长、清华大学教授）《SmartRing：人机共生结点》；虞晶怡（上海科技大学副校长）《The Before and After of Computer Vision》；黄惠（深圳大学计算机与软件学院院长）《Building the 3D World: Spatial Capture and Next Generation Urban Twins》。黄惠这一场在时间表上排在 11:30–12:00，是当天最后一场主旨报告。\n\n与三维重建最直接相关的是下午 15:40–17:30 的「会议论文口头汇报（一）：三维表征重建」，地点朗豪厅 D2，主持人周彬（北京航空航天大学）。十篇报告依次为：基于图像的植物三维建模方法研究综述；CityAnchor：基于 BEV 空间锚点的城市尺度前馈式三维重建方法；视觉先验引导的低光照三维高斯场景自适应重建；融合多尺度对齐与精细几何优化的跨模态点云补全方法；基于水平轮廓结构感知的 3DGS 建筑轻量化网格重建；GSFormer：基于 Transformer 优化的迭代式 3D 高斯点级分割方法；多尺度高斯泼溅重建动态可信内镜手术场景；三维河网可视化模型构建方法研究；SDT-NR：基于空间-方向树引导采样的神经辐射度方法；基于反射烘焙的快速三维高斯追踪。\n\n技术论坛「可控三维生成与可信世界模型技术」（13:30–15:20，朗丰厅 FG，主持人过洁，南京大学）五场报告：毛爱华（华南理工大学）《基于流模型的三维点云质量可控生成》；徐毅（歌尔股份 Alpha Labs）《结合显式表征与生成先验的 4D 动态重建与生成》；刘艳丽（四川大学）《面向可信世界模型的人-物生成与交互评估》；陈文拯（北京大学）《可控世界生成与自动驾驶闭环仿真》；李元琪（南京大学）《三维场景智能重建：构建可信工业世界模型的基石》。\n\n其余与空间感知相关的场次包括：技术论坛「XR 具身感知与沉浸增强」（张举勇，中国科学技术大学，《面向可物理仿真、可互动交互的场景表达与生成》；魏明强，南京航空航天大学，《三维几何处理与基础模型构建》）；技术论坛「显示前沿技术」（邰永航，云南师范大学，《面向复杂腔镜手术场景下的光学动态三维场景重建方法研究》）；特别论坛「企业大咖面对面」中金依力（映界科技 MirrorSpace）《具身时空大脑：从四维重建到机器人的空间感知与认知》。\n\n产业侧：其域创新作为铜牌合作单位参与本届大会，歌尔股份为金牌合作单位，东莞映界科技、北京耐德佳、舜宇光学、中兴通讯、新讯数字科技为银牌合作单位，乐奇 Rokid、广州卓远、凌宇科技、并行科技、理湃光晶、晶华精密光学为铜牌合作单位。",
        "ai_comment": "这条的信息密度不在任何单篇论文，而在于「议程结构」本身透露的判断。第一，把「三维表征重建」从图形学的常规 session 里抽出来单列一场口头报告，并且十篇里有四篇直接是高斯泼溅相关（低光照 3DGS 自适应重建、3DGS 建筑轻量化网格、GSFormer 高斯点级分割、反射烘焙快速高斯追踪）、两篇是神经渲染（SDT-NR、内镜多尺度高斯泼溅），这说明国内这个方向的主力已经整体切到显式表示路线，NeRF 类工作退到了方法学补充的位置。\n\n第二，城市尺度前馈式重建（CityAnchor 用 BEV 空间锚点）出现在一个 VR 会议而不是测绘会议上，值得注意。它暗示「城市级重建」的驱动力正在从测绘需求转向虚拟世界构建需求——测绘要的是精度与规范，VR 要的是可实时进入、可交互的活模型。\n\n第三，技术论坛的标题「可控三维生成与可信世界模型」里，「可信」这个词出现了两次（论坛名一次、刘艳丽的报告名一次），而李元琪的报告直接把三维场景重建定义成「可信工业世界模型的基石」。这个措辞选择说明学界已经意识到：世界模型如果几何不可信，生成得再好看也不能用于工业决策。这跟本期收录的苹果 HALO 恰好形成呼应——HALO 用合成数据绕开了真实扫描，但它必须保证几何自洽（33 条检查），本质上是在为「可信」付代价。\n\n需要克制的地方：这是一篇会议综述，不是论文报道。所有报告只有标题，没有指标、没有数据集、没有可复现材料，因此本条只能作为「学术议程的方向信号」，不能作为技术结论引用。十篇论文里哪一篇真正有突破，要等论文挂到 arXiv 或期刊上才知道。\n\n另一个值得追的细节是徐毅来自歌尔股份 Alpha Labs——一家做声学与整机组装的公司出现在 4D 动态重建的报告席上，说明消费电子代工方正在往三维内容生成的上游走。歌尔同时是本届大会金牌合作单位，这个组合（赞助 + 技术报告）通常意味着公司在做实质性投入，而不只是品牌曝光。",
        "key_facts": [
          {
            "metric": "会议规模",
            "value": "150 余位报告嘉宾、8 场主旨报告、14 个专题论坛、6 个特别论坛、千余人参会",
            "baseline": "第 26 届，2001 年创办",
            "condition": "2026-11-06 至 11-08，广州朗豪酒店；CCF / CSF / CSIG 联合主办，暨南大学承办"
          },
          {
            "metric": "三维表征重建专场",
            "value": "10 篇口头报告（15:40–17:30，朗豪厅 D2，主持人周彬）",
            "baseline": "单列为一个独立口头汇报单元",
            "condition": "含城市尺度前馈重建 CityAnchor、低光照 3DGS、3DGS 建筑轻量化、GSFormer 高斯点级分割、内镜多尺度高斯泼溅、反射烘焙高斯追踪等"
          },
          {
            "metric": "相关技术论坛",
            "value": "「可控三维生成与可信世界模型技术」5 场报告（13:30–15:20，朗丰厅 FG）",
            "baseline": null,
            "condition": "毛爱华（华南理工）、徐毅（歌尔 Alpha Labs）、刘艳丽（川大）、陈文拯（北大）、李元琪（南大）"
          },
          {
            "metric": "大会主旨报告",
            "value": "5 场（11-08 上午），其中黄惠《Building the 3D World: Spatial Capture and Next Generation Urban Twins》为最后一场",
            "baseline": null,
            "condition": "另四场为李树涛、李波、史元春、虞晶怡；大会主席王涌天"
          }
        ],
        "position_relation": "与 2026-11-01 收录的「首届中国工业视觉人工智能大会单设三维建模与工业数字孪生专题论坛」构成同一年度内的两次组织化信号：一次在工业侧（视觉检测），一次在学术侧（VR）。两次都把三维重建从子课题提升为独立议程。",
        "signal_strength": "中",
        "tags": [
          "ChinaVR",
          "学术会议",
          "三维重建",
          "3DGS",
          "世界模型",
          "城市孪生",
          "广州"
        ],
        "terms": [
          {
            "term": "BEV 空间锚点（BEV spatial anchor）",
            "definition_mechanism": "在鸟瞰视角的二维网格上为每个单元维护一组可学习的锚点特征，作为聚合多视角图像信息的空间容器；前馈网络把各相机视角的特征投影到这些锚点上，再由锚点解码出三维几何，从而把「逐场景优化」换成「一次前向」",
            "definition_contrast": "与逐场景优化的 SfM / MVS 流程相对：后者的计算量与场景规模成正比，城市级场景要跑数小时到数天；锚点式前馈重建把计算前置到训练阶段，推理时只做一次前向，代价是泛化半径受训练数据分布限制"
          },
          {
            "term": "高斯点级分割（point-level Gaussian segmentation）",
            "definition_mechanism": "直接在三维高斯集合上做实例或语义分割，为每个高斯椭球分配类别标签，而不是先在二维图像上分割再投影到三维；Transformer 的迭代式结构用于让分割结果在多次迭代中相互校验、收敛到一致的三维实例",
            "definition_contrast": "与二维分割 + 多视角融合相对：后者在视角稀疏或遮挡严重时，不同视角的分割结果互相矛盾，投影到三维后会出现「同一物体半属 A 半属 B」；点级分割在三维空间里直接保证一致性，但依赖高质量的高斯重建结果"
          },
          {
            "term": "反射烘焙（reflection baking）",
            "definition_mechanism": "预先计算并把环境光反射、间接光照等信息「烘焙」进材质或预计算数据结构，运行时直接查表，而不是每帧实时求解光线追踪；用于高斯泼溅场景时，可让静态重建结果获得接近光线追踪的反射效果而不付出实时光追的代价",
            "definition_contrast": "与实时光线追踪相对：后者每帧重新求交，效果准确但算力开销大；烘焙牺牲了动态性（物体移动后反射不再正确），换取实时性与可移植性"
          }
        ],
        "sources": [
          {
            "url": "https://www.chinanews.com.cn/dwq/2026/11-08/10728480.shtml",
            "type": "news"
          },
          {
            "url": "https://huacheng.gz-cmc.com/pages/2026/11/08/756d4c306ab04943b2051019631c781d.html",
            "type": "news"
          },
          {
            "url": "http://mp.weixin.qq.com/s?__biz=MzkzNzY4MTc0MA==&mid=2247487119&idx=1&sn=441168801cdd74ff26dbe7143c6284d1",
            "type": "other"
          }
        ],
        "date": "2026-11-08",
        "notes": "会议日期官方两处表述略有差异：中新网称「7 至 8 日」、ChinaVR 官方公众号日程表标注「2026 年 11 月 6 日-8 日」，本条按官方日程表与主流媒体报道取 11-06 至 11-08，闭幕日为 11-08，落在本窗口内。议程细节（五场主旨报告及其时段、三维表征重建专场十篇标题、可控三维生成与可信世界模型论坛五场报告、各技术论坛报告人与题目、合作单位名单）取自 ChinaVR 2026 官方日程表长图经公众号发布的文本，逐条转录；中新网与广州日报用于交叉核对大会主题、主办承办单位、参会规模与主报告阵容。所有论文仅有标题，无指标与数据集，故本条仅作议程方向记录，未对任何技术结论作判断。"
      }
    ]
  },
  {
    "report_id": "daily-2026-11-10",
    "window_start": "2026-11-09T08:00:00+08:00",
    "window_end": "2026-11-10T08:00:00+08:00",
    "generated_at": "2026-11-10T21:00:00+08:00",
    "summary": {
      "window_takeaway": "本期主线是「管线摩擦」取代「算法指标」成为竞争焦点：群核 x 禾赛把采集端与 3DGS 重建端焊成一条无预处理链路，Trimble 把 360 视频转点云与点云语义分类塞进施工 CDE，阿里云把 Tripo 的 12 个模型变成可编程 API——三家都在同一件事上用力：让三维资产「生出来就能被用」。",
      "direction": "三维重建的商业化重心从「能不能重建得更好」转向「重建完之后多久能进业务系统」。群核的答案是消灭格式转换与人工配准，把 3DGS 场景直接变成可编辑、可语义标注的资产；Trimble 的答案是让点云自动对齐图纸并一键分类成地面/墙体/管线；阿里云百炼的答案是让生成模型与减面、绑骨、重定向、转格式在同一条异步任务链里串起来。三者共同指向一个判断：几何质量正在变成门槛而非卖点。",
      "academic_vs_industry": "学术侧仍处空窗——arXiv cs.CV 最新 new listing 停留在 2026-11-06（2611.098xx 段），11-07/11-08 为周末，窗口内无新批次，这是连续第四天学术空窗；能替代的是 2611.09xxx 段的高斯方向成果（SplatAnything 于 11-09 登顶 Hugging Face Papers），其事件日早于窗口起点，按报道日收录并在 notes 标注。产业侧则异常活跃，且呈现「同一周内三家不同层级厂商同时解决管线问题」的少见共振。",
      "remember_one_thing": "群核与禾赛把「格式转换、人工去噪、手动配准」这三个过去永远需要人的环节直接归零——如果这条链路在实际交付中被验证，那么专业级空间采集的竞争将从硬件参数转向「交付周期」，而交付周期正是过去十年实景三维行业最难压的成本。"
    },
    "items": [
      {
        "item_id": "2026-11-10-A-001",
        "category": "Hardware",
        "title": "群核科技联手禾赛发布 Aholo x Kosmo One：激光雷达+8K 影像+1 英寸 CMOS+IMU 四模块，数据直连 Aholo Reality 一步出 3DGS 场景",
        "one_line_judgment": "这是 3DGS 第一次被装进「采集端与重建端原生打通」的封闭链路：卖的不再是扫描仪或软件单件，而是「扫一圈就得到可编辑资产」的交付节奏本身——三维重建的竞争焦点从算法指标转向了管线摩擦。",
        "image": "",
        "ai_summary": "大白话：以前要把一个真实房间变成电脑里能用的三维场景，得先扛着扫描仪走一遍，回办公室再把数据导入软件、去噪、对齐、重建，中间每一步都要人盯着。这次群核和禾赛做的是一台相机——里面有激光雷达测形状距离、8K 摄像头拍颜色、一英寸大底保证暗光画质、再加一个高精度惯性单元记录往哪走了。你举着它在屋里走一圈，数据回到群核的 Aholo Reality 平台，格式转换、去噪、配准这些步骤全部省掉，平台自己对齐、自己融合点云、自己生成高斯泼溅模型；生成出来的场景还能被识别出「这是墙、这是椅子」，临时堆的杂物可以直接删掉、系统自动补背景。一句话：把「测绘+建模」那种要排期的活儿，变成了「走一圈就出片」。",
        "detailed_info": "2026 年 11 月 9 日，群核科技（00068.HK）与禾赛科技（HSAI.US）联合发布联名款 3D 空间相机「Aholo x Kosmo One」，发布会由群核联合创始人兼 CEO 陈航与禾赛 CEO 李一帆共同出席。\n\n硬件层面，设备集成四大核心模块：激光雷达、8K 超高清影像系统、一英寸大底 CMOS、高精度 IMU，官方口径为可对空间几何、色彩纹理与设备位姿做「微秒级时间同步采集」，实现「一次采集，全维度数据同步输出」。截至本条目撰写，双方未公开雷达线数、测距、扫描速率、点频、单次扫描覆盖面积、机身重量与售价，也未公布与禾赛既有 Kosmo 手持终端在光学模组上的具体继承关系。\n\n软件链路的差异点是「原生打通」：原始数据无需经过格式转换、人工去噪、手动配准等预处理，可直接接入群核 Aholo Reality 空间重建平台，自动完成空间对齐、点云融合与 3D Gaussian Splatting（3DGS）模型重建。重建之后平台继续提供自动识别、语义分割、对象编辑与智能补洞：可移除、新增或替换场景内临时元素，系统自动补全背景；空间对象的几何尺度与物理属性被识别并结构化标注。官方定位是面向文旅文博、工业孪生、家装、机器人仿真客户提供「开箱即用」的软硬一体方案。\n\n合作沿革上，双方 2025 年已联合推出机器人仿真训练场景方案，本次是落地到采集硬件；群核此前与影石创新合作覆盖消费级全景影像采集，与禾赛联手补的是专业级超高清空间采集一环。发布会同时引用群核董事长黄晓煌内部信口径：空间智能目前最大的瓶颈在数据，核心根源是物理世界被数字化的比例「还微乎其微」，并提出两条获取路径——真实采集（Aholo Reality 对接各类影像设备与具身设备）与世界生成（Aholo SpatialGen）。\n\n资本市场反应：11 月 9 日港股开盘后群核科技盘中一度涨超 10%，当日收报 2.78 港元、涨 7.96%；此前 11 月 6 日曾下探 2.47 港元创上市以来新低（2026 年 4 月 17 日上市，发行价 7.62 港元，最高 48.5 港元）。禾赛当日盘中涨超 6%。财华社等机构点评明确指出：本次技术合作表态暂未给出可量化的收入指引，技术发布距离商业化落地仍存在时间差。",
        "ai_comment": "三点保留意见。第一，官方叙事的所有优势都是「相对于同类方案耗时优势明显」，没有一个绝对数字——没有单房间采集耗时、没有从采集到可交付资产的端到端时长、没有重建精度（毫米级还是厘米级）、也没有单套价格。这意味着它现在无法与 NavVis、Matterport、Trimble 的既有作业流程做定量对比，「效率优势」目前是营销口径而非可验证指标。第二，3DGS 资产的行业真痛点不在重建速度而在「可编辑性与下游兼容」，群核的语义分割+补洞确实是解法方向，但需要第三方复现其在复杂中式户型、大面积玻璃幕墙、无纹理白墙下的稳定性。第三，这是联名款而非群核自有硬件，渠道与产能掌握在禾赛一侧，两家的商业分成与库存归属未披露，一旦放量不顺，责任边界会模糊。要盯的指标：相机实际出货量、Aholo Reality 付费客户数、单场景交付价格，以及 2027 年是否出现第三方（非群核生态）软件的 LCC/3DGS 导入支持。",
        "key_facts": [
          {
            "metric": "核心传感模块数",
            "value": "4（激光雷达、8K 影像系统、一英寸 CMOS、高精度 IMU）",
            "baseline": "群核既有消费级采集依赖合作方影石的全景相机",
            "condition": "发布日官方口径"
          },
          {
            "metric": "同步采集时间精度",
            "value": "微秒级（官方称「微秒级时间同步」）",
            "baseline": "传统链路需事后按时间戳手动对齐",
            "condition": "未给出具体数值与测试方法"
          },
          {
            "metric": "预处理环节削减",
            "value": "格式转换、人工去噪、手动配准三项归零",
            "baseline": "传统「采集—转换—去噪—配准—重建」五段式链路",
            "condition": "官方称由 Aholo Reality 自动完成空间对齐与点云融合"
          },
          {
            "metric": "发布当日股价反应",
            "value": "群核科技收涨 7.96%（2.78 港元），盘中一度涨超 10%；禾赛盘中涨超 6%",
            "baseline": "11-06 群核曾创上市新低 2.47 港元",
            "condition": "2026-11-09 港股收盘"
          },
          {
            "metric": "披露的价格与性能参数",
            "value": "0 项（无售价、无线数、无测距、无精度、无重量）",
            "baseline": "同类专业级设备通常首发即公布测距与精度",
            "condition": "截至本条撰写，双方官网与新闻稿均未披露"
          }
        ],
        "position_relation": "接在 2026-10-28-B-002（禾赛 Kosmo 获皮克斯官方渲染教程点名）与 2026-11-07-B-002（群核开源空间理解与生成模型、InteriorGS 数据集）之间：前者证明 Kosmo 的可视化质量被好莱坞流程接纳，后者证明群核有理解与生成的模型侧能力，本条把两端用一台相机焊在一起。与 2026-11-03-B-001（禾赛 Yole 43% 车载份额）构成同一条「激光雷达厂商向上做采集终端」的延长线。",
        "signal_strength": "强",
        "tags": [
          "3DGS",
          "空间智能",
          "激光雷达",
          "空间相机",
          "物理AI数据",
          "群核科技",
          "禾赛"
        ],
        "terms": [
          {
            "term": "3D 空间相机",
            "definition_mechanism": "把激光雷达、彩色影像、IMU 与位姿同步集成的采集终端，一次采集同时得到几何、纹理与轨迹三类数据，直接满足重建算法输入要求",
            "definition_contrast": "与「激光扫描仪只出点云、全景相机只出图像」的单模态设备不同，它把几何与纹理在硬件层对齐"
          },
          {
            "term": "原生打通（native pipeline）",
            "definition_mechanism": "采集端输出与重建平台的内部数据格式一致，省去导出、转换、去噪、配准等中间环节",
            "definition_contrast": "与「通用格式导出 + 第三方软件手工处理」的传统作业方式相反，代价是格式与平台强绑定"
          },
          {
            "term": "智能补洞",
            "definition_mechanism": "移除场景中临时物体后，利用周边几何与纹理先验自动生成被遮挡区域的几何与外观",
            "definition_contrast": "与人工后期修补不同，它面向的是「语义编辑后的空洞」而非采集缺失"
          }
        ],
        "sources": [
          {
            "url": "https://www.cs.com.cn/ssgs/01/2026/11/09/detail_2026110910050874.html",
            "type": "news"
          },
          {
            "url": "https://www.cnstock.com/commonDetail/825911",
            "type": "news"
          },
          {
            "url": "https://www.finet.hk/newscenter/news_content/6af1835823082953eae2dd54",
            "type": "news"
          },
          {
            "url": "http://mp.weixin.qq.com/s?__biz=MzkzNDg3MzExMQ==&mid=2247486818&idx=1&sn=fc4ed11524c8b2f6fd8e2704fe6059c8",
            "type": "official"
          },
          {
            "url": "https://news.qq.com/rain/a/20261109A05KRQ00",
            "type": "news"
          }
        ],
        "date": "2026-11-09",
        "notes": "发布日 2026-11-09，落在报告日 2026-11-10 窗口（11-09 08:00~11-10 08:00）内。参数仅采用双方新闻稿一致口径（四大模块、微秒级同步、预处理归零、3DGS 直出）；雷达线数、测距、点频、精度、重量、价格六项均未披露，本条不填空。股价数据双源核对：中证网/上证报称「盘中一度涨超 10%」，财华社称「收涨 7.96%，报 2.78 港元/股」、并记录 11-06 创上市新低 2.47 港元，两者口径不同（盘中 vs 收盘）已并列标注。"
      },
      {
        "item_id": "2026-11-10-A-002",
        "category": "Software",
        "title": "Trimble 在 Dimensions 2026 发布 Connect 平台 AI 层：360 实景视频直接转点云、一键把百万级扫描点分类为地面墙体管线",
        "one_line_judgment": "传统测绘巨头的 AI 落点选的是「把现场视频变成对齐图纸的点云、把原始点云变成可用的构件标签」——这正是三维重建产业链上最没人愿意干、但决定资产能否进业务系统的脏活。",
        "image": "",
        "ai_summary": "大白话：工地上的传统做法是，测量员先拍一堆视频、扫一堆点，回办公室再花几天把点云和图纸对上、把地面墙面粉刷管线一个个框出来。Trimble 这次把这几个最耗人的步骤交给 AI：拿手机或 360 相机在工地走一圈拍的视频，平台能直接算出三维点云并自动对齐到项目图纸上；扫回来的上百万个原始点，点一下就能自动分成地板、墙、管道、临时结构几类。它还做了个能自己盯进度的「排期助手」——连着看现场日报、图纸问题单和天气预报，提前提示哪天会因为下雨或某个问题没回复而耽误工期。",
        "detailed_info": "2026 年 11 月 9 日，Trimble（Nasdaq: TRMB）在拉斯维加斯 Trimble Dimensions 2026 用户大会上发布 Trimble Connect 平台的 AI 能力层，一次性公布六项工具（官方称「发布即可用」四项、实验室/受限三项，具体状态各家媒体口径略有差异）。\n\n与三维重建直接相关的三项：其一，360 Reality Capture——利用原生嵌入 Trimble Connect 的计算机视觉，把工地巡检拍回的 360 视频转换为高精度三维点云，并对齐到项目图纸；其二，One-Click AI Indoor Classification——在移动端或桌面端把数百万个原始扫描点一次性分类为结构区域，含地板、墙、管道与临时构筑物；其三，Automated Structural Modeling——把自然语言指令与空间数据直接转成可施工的钢结构模型并生成加工文件，免去手工数据录入。\n\n另有一项与点云相关的 Generative Design 仍处于 Trimble Labs 早期体验阶段：设计人员可参考从 Trimble Connect 实时串流的在役（as-built）点云生成建筑方案。其余为施工流程向工具：Trimble Assist（对话式 AI 入口）、Trimble Agent Studio（无代码定制智能体）、AI Diagnostics for Field Hardware（受限客户，解析机器遥测、日志与 GNSS 信号做现场根因诊断）、Design File Verification（开发中）、AI Punch Walk（语音驱动的现场巡检，自动转写、打点并把问题钉在图纸上）。同日另发 Trimble Connect Scheduling，把主进度计划与现场 look-ahead、RFI、天气预报、日报、送审资料连起来，由 agentic 引擎持续评估风险并建议调整浮时或重排工序，初期仅限北美总包与分包使用。\n\n规模口径：Trimble 称 Connect 平台累计用户超 5500 万、覆盖超 3500 万个项目、开放生态接入 400 余项集成，月活超 100 万人（CEO Rob Painter 平台发文口径），平台 2014 年以公共数据环境（CDE）形态起步。治理层面，官方称 Connect AI 层内已上线的智能体与模型均带标准化安全标签，对齐 EU AI Act 与 ISO 42001，最终决定权保留在人类。\n\n同一场大会还发布了 Trimble MP1087 一体式机器定位方案（集成 Wi-Fi、蜂窝、UHF 与网络通信，搭载新一代 Maxwell 8 GNSS，宣称在树荫与城市峡谷环境下可用性提升最高 15%，显示到单元的通信约快 10 倍、处理能力约 5 倍，2026 年第四季度末经经销商全球供货）。",
        "ai_comment": "这是本窗口里「AI 与三维数据结合方式」最值得记录的一条，原因不在技术新颖度，而在落点选择：整个行业都在比谁的重建 PSNR 高、谁的高斯少，Trimble 比的是「点云生成后多久能进业务系统」。One-Click 室内分类和 360 视频转点云这两项，解决的都是「重建成果无人使用」的最后一公里。\n\n但需要冷静的三点：第一，官方没有给出任何量化指标——360 Reality Capture 的精度等级（厘米级还是分米级）、与图纸对齐的误差范围、室内分类的准确率与类别数，全部阙如，而这些恰恰是能进施工计量的前提；第二，360 视频转点云与 NavVis、Matterport、OpenSpace 的既有能力高度重叠，Trimble 的差异化只在于「对齐图纸」和「嵌进 CDE」，属于工作流优势而非技术优势；第三，多项能力仍是「实验室/受限/开发中」状态，说明其成熟度低于新闻稿给人的印象。要盯的指标：360 Reality Capture 的公开精度测试报告、AI Indoor Classification 的类别清单与混淆矩阵、以及 Connect Scheduling 是否在 2027 年真正把「点云偏差」纳入进度风险计算，而不只是排工序。",
        "key_facts": [
          {
            "metric": "平台规模（累计）",
            "value": "5500 万用户、3500 万项目、400+ 集成、月活 100 万+",
            "baseline": "2014 年以 CDE 形态起步",
            "condition": "Trimble CEO 平台发文口径，官方新闻稿同口径"
          },
          {
            "metric": "点云分类粒度",
            "value": "一键分类「数百万个原始扫描点」为地板/墙/管道/临时结构等区域",
            "baseline": "传统需人工或半自动分块标注",
            "condition": "官方称移动端与桌面端均可执行"
          },
          {
            "metric": "360 视频转点云",
            "value": "工地巡检 360 视频 → 三维点云并对齐图纸",
            "baseline": "传统需专门扫描设备或摄影测量后处理",
            "condition": "未披露精度与处理时长"
          },
          {
            "metric": "机器定位新硬件",
            "value": "MP1087：挑战环境下可用性 +15%，显示到单元通信约快 10 倍、算力约 5 倍",
            "baseline": "上一代多组件分离式方案",
            "condition": "2026Q4 末全球供货，测试数据由厂商提供"
          },
          {
            "metric": "AI 能力成熟度",
            "value": "四项立即可用，其余处于 Labs / 受限客户 / 开发中",
            "baseline": "宣传口径易被误读为全部上线",
            "condition": "以 Unite.AI 对发布状态逐项核对为准"
          }
        ],
        "position_relation": "与 2026-11-05-A-001（Trimble 2026Q3 财报：Geospatial 有机增 7%、ARR 仅增 5%）构成因果链——ARR 增速疲软说明软件订阅变现不顺，本条是其「用 AI 把点云能力塞进 CDE 以提高订阅粘性」的应对；与 2026-11-07-B-003（海克斯康 HEX.AI 工业质量智能体）同属「计量巨头把 AI 贴到既有硬件+软件栈上」的一类动作。",
        "signal_strength": "强",
        "tags": [
          "点云",
          "实景捕获",
          "数字孪生",
          "施工AI",
          "Trimble",
          "CDE"
        ],
        "terms": [
          {
            "term": "CDE（公共数据环境）",
            "definition_mechanism": "项目各方共用的单一数据源，模型、图纸、文档、现场数据在同一空间内版本一致",
            "definition_contrast": "与各方各自保存文件、靠邮件传版本不同，CDE 的价值在「谁看到的都是同一份」"
          },
          {
            "term": "360 Reality Capture",
            "definition_mechanism": "用 360 巡检视频做视觉 SfM/多视图几何，恢复相机轨迹与场景三维点云，再与图纸坐标系配准",
            "definition_contrast": "与专业激光扫描相比精度低但采集成本极低，适合高频巡检而非计量验收"
          },
          {
            "term": "点云语义分类",
            "definition_mechanism": "对每个三维点预测所属构件类别（地面、墙、管道、临时结构），供后续建模、计量与变更比对使用",
            "definition_contrast": "与「只做几何重建不做语义」不同，分类结果才能被业务系统（进度、成本、运维）消费"
          }
        ],
        "sources": [
          {
            "url": "https://news.trimble.com/2026-11-09-Trimble-Launches-New-AI-Accelerated-Scheduling-Solution-to-Help-Contractors-Protect-Project-Milestones",
            "type": "official"
          },
          {
            "url": "https://stockhouse.com/news/press-releases/2026/11/09/trimble-launches-new-trimble-connect-platform-ai-capabilities-aimed-at-de",
            "type": "official"
          },
          {
            "url": "https://www.unite.ai/trimble-expands-connect-with-construction-ai-and-agentic-scheduling",
            "type": "news"
          },
          {
            "url": "https://www.prnewswire.com/news-releases/trimble-introduces-next-generation-trimble-earthworks-machine-control-hardware-for-simplified-installation-improved-performance-and-reliability-302932629.html",
            "type": "news"
          }
        ],
        "date": "2026-11-09",
        "notes": "发布日 2026-11-09（拉斯维加斯当地时间，大会首日），落在报告日 2026-11-10 窗口内。六项功能的上线状态按 Unite.AI 的逐项核对记录（四项立即可用；Generative Design 仅在 Trimble Labs；AI Diagnostics 限指定客户；Design File Verification 开发中），与官方新闻稿的「new AI capabilities」概括表述存在粗细差异，已按细口径记录。所有性能数字（+15%、10 倍、5 倍）均为厂商测试口径，无第三方验证。"
      },
      {
        "item_id": "2026-11-10-B-001",
        "category": "Tool",
        "title": "阿里云百炼上架 Tripo 3D 家族 12 个模型：生成档 68.4 秒出 5050 面、90 秒出 140 万面，减面/绑骨/重定向/转格式全部 serverless 化",
        "one_line_judgment": "生成式 3D 从「一个网页工具」变成「云平台里的 12 个可编程 API」，意味着 3D 资产开始进入和图像生成一样的批量流水线语境——这是它成为工业级生产资料的必经一步。",
        "image": "",
        "ai_summary": "大白话：以前想用 AI 生成一个 3D 模型，得去 Tripo 的网站点点点，下一个、改一个。现在阿里云把这套能力拆成 12 个可以在代码里调的接口：两个负责「生成」（一个出低模、一个出高精模），九个负责「后处理」——减面数、检查能不能绑骨架、自动绑骨、把走路跳舞的动画套上去、转成 STL/GLB 各种格式、贴图、切分模型、补洞，还有一个专门把图转成高斯泼溅。实测一片 5000 面的草稿 68 秒出来，140 万面的高精模 90 秒，绑骨 5 秒、套动画 7 秒。它不是拿来出成品的，是拿来「几分钟出个能看能改的草稿」。",
        "detailed_info": "2026 年 10 月 27 日，阿里云百炼（Model Studio）单批上架 Tripo 3D 家族十个后处理模型；叠加此前在架的两个生成档模型，模型矩阵首次形成完整的 3D 资产管线能力面。2026 年 11 月 9 日，阿里云开发者社区发布第三方实测评测（上架后第 13 天），以十三个任务跑通六步主链，该实测是本条的主要事实来源。\n\n模型构成：生成两档——Tripo-H3.1（上限约 200 万面）与 Tripo-P1.0（上限约 2 万面）；后处理九个——减面、可绑骨检查、自动绑骨、动画重定向、格式转换、图生高斯泼溅、贴图、网格分割、智能分割、网格补全（官方表述为「十个后处理模型」，其中图生泼溅单独归为「泼溅一件」，媒体与实测文的分类口径略有出入，本条按实测文列为九件后处理+一件泼溅）。\n\n实测读数：同一 prompt 下，专业档 68.4 秒产出 5,050 面 GLB，高精档 90.0 秒产出 1,407,098 面 GLB，面数差 279 倍、文件体积差 13 倍；减面以 task_id 串联上游，5k 源与 1.4M 源同目标 5000 面分别落地 5,107 与 9,141 面，证明 face_limit 是目标值而非硬上限；可绑骨检查 2.3 秒返回 riggable 判定与七档骨骼类型（且免费）；自动绑骨 5.3 秒、几何不变；动画重定向 7.4 秒注入两条预设轨（walk、dance_01），产物解析出 41 个关节；格式转换 2.3 秒导出 STL、面数与源逐面一致；图生泼溅旁路 17.4 秒产出 8,388,608 字节的 .splat 文件。\n\n接入侧的工程细节值得记录：全族强制异步（缺 X-DashScope-Async 头即在提交期 AccessDenied）；参数校验发生在执行期而非提交期（base64 图片与越界 face_limit 均「提交收、执行报」）；格式转换的 format 参数位于 input 对象而非 parameters；产物签名 URL 两小时失效、task_id 二十四小时失效，串联须用后者；图输入仅接受公网 URL；任务终态为 SUCCEEDED / FAILED / CANCELED / UNKNOWN，UNKNOWN 为 task_id 超 24 小时后的回落态。百炼 CLI 尚无 3D 命令组，全链须走 HTTP 加轮询。\n\n未覆盖项：贴图、分割、智能分割、补全四件在架但未实测；生成档的四边面、智能低模、可拆分部件、meshopt 压缩与 8K 贴图档参数文档在列但未实测；预设动画一百套中仅用两条。",
        "ai_comment": "把 Tripo 放进百炼，商业信号大于技术信号：它意味着「3D 生成」从此和文生图、文生视频共享同一套计费、配额、异步任务与签名 URL 治理体系，正式进入企业采购清单而不是创意工具清单。\n\n三点风险。第一，评测文章的定位说得很直白——这是「草稿机而非定稿工具」，验收主轴应是草稿迭代周期而不是单点生成质量，任何把它的面数/速度当作「工业级建模能力」的解读都过头了；第二，测评由阿里云官方社区的自发贡献者发布，标注「版权归原作者、不代表阿里云观点」，读数没有第三方交叉验证，只应作为基线初值（该文自己也这么写）；第三，也是最关键的：这条链的出口是 GLB/STL/.splat，与三维重建链路（扫描→点云→3DGS/网格）的交集仅在「图生泼溅」这一件上，说明生成与重建两条路线目前在工具层还是平行而非融合。要盯：Tripo 系列在百炼上的调用量与单价、图生泼溅输出能否直接进 SuperSplat/PlayCanvas 等编辑链路、以及 VAST 是否把这个渠道算进对外收入口径。",
        "key_facts": [
          {
            "metric": "上架模型数",
            "value": "12（2 个生成档 + 10 个后处理，其中泼溅 1 件）",
            "baseline": "此前百炼 3D 能力仅两档生成模型",
            "condition": "2026-10-27 单批上架，11-09 实测"
          },
          {
            "metric": "生成耗时与面数",
            "value": "专业档 68.4 秒 / 5,050 面；高精档 90.0 秒 / 1,407,098 面",
            "baseline": "面数差 279 倍、文件体积差 13 倍",
            "condition": "同一 prompt，GLB 输出"
          },
          {
            "metric": "后处理耗时",
            "value": "可绑骨检查 2.3 秒、自动绑骨 5.3 秒、动画重定向 7.4 秒、格式转换 2.3 秒、图生泼溅 17.4 秒",
            "baseline": "人工绑定与套动画以小时计",
            "condition": "单任务串行实测"
          },
          {
            "metric": "减面精度偏差",
            "value": "目标 5000 面实际落地 5,107 面（5k 源）与 9,141 面（1.4M 源）",
            "baseline": "face_limit 为硬上限时的理论值 5,000",
            "condition": "证明为软目标，需留余量"
          },
          {
            "metric": "产物与任务有效期",
            "value": "签名 URL 2 小时、task_id 24 小时",
            "baseline": "批量流水线常按天级重试",
            "condition": "串联必须用 task_id"
          }
        ],
        "position_relation": "接在 2026-11-03-B-007（VAST 半年融资约 50 亿元）之后——融资讲的是模型能力，本条讲的是渠道能力，二者共同构成 VAST 的「技术+分发」闭环；与 2026-11-03-B-006（大疆 Matrice 5TD：200 张照片 8 分钟出模）形成对照：一条从真实世界采集出模型，一条从想象生成模型，两条链路在「分钟级出草稿」这一节奏上首次对齐。",
        "signal_strength": "中",
        "tags": [
          "生成式3D",
          "Tripo",
          "VAST",
          "阿里云百炼",
          "3D资产管线",
          "API"
        ],
        "terms": [
          {
            "term": "可绑骨检查（riggable check）",
            "definition_mechanism": "判断一个生成网格的拓扑与姿态是否适合绑定骨骼，返回是否可绑与可选骨骼类型",
            "definition_contrast": "与「先绑骨再发现网格不适合」的试错流程相反，它把失败提前到自动化判断阶段"
          },
          {
            "term": "动画重定向（retargeting）",
            "definition_mechanism": "把一条动作轨道映射到目标骨骼上，使同一动作可复用于不同比例的模型",
            "definition_contrast": "与针对单一模型手工调动画不同，它依赖关节命名与骨架比例的统一"
          },
          {
            "term": "图生高斯泼溅",
            "definition_mechanism": "由单张或少量图片直接回归高斯点集，用于实时渲染预览",
            "definition_contrast": "与从多视角采集做 3DGS 重建不同，它没有真实几何来源，只保证观感"
          }
        ],
        "sources": [
          {
            "url": "https://developer.aliyun.com/article/1781096",
            "type": "data"
          },
          {
            "url": "https://www.alibabacloud.com/help/zh/doc-detail/3046858.html",
            "type": "official"
          }
        ],
        "date": "2026-11-09",
        "notes": "上架日 2026-10-27，实测发布日 2026-11-09，按报道日归档至报告日 2026-11-10，条目 notes 明确事件日早于窗口。读数均来自阿里云开发者社区第三方测评文（上架后第 13 天），非官方性能声明，且该文自身声明不代表阿里云观点。「十个后处理模型」与「九件后处理+一件泼溅」两种表述并存，已并列标注。"
      },
      {
        "item_id": "2026-11-10-B-002",
        "category": "Business",
        "title": "原方智能（Cirquar AI）完成数千万元天使轮：南大 LAMDA 系团队做「世界模型脑内彩排」，金雨茂物领投、我乐家居跟投",
        "one_line_judgment": "又一个世界模型团队拿到钱，但这次的差异化在于「先预演、后执行」被绑定到具体的家居场景入口——世界模型的商业化开始从模型能力转向场景独占。",
        "image": "",
        "ai_summary": "大白话：机器人搬东西之前，能不能先在脑子里「过一遍」——想象杯子在哪儿、手伸过去会不会碰倒水壶？这家南京公司做的就是这件事：用世界模型在虚拟空间里把动作预演一遍，判断物理上会不会出事，如果没问题再让真机执行。好处是训练机器人不用成千上万次真机试错。投资方里有一家做定制家具的上市公司，等于把真实户型当成了机器人的训练场和落地场景。",
        "detailed_info": "2026 年 11 月 9 日，原方（南京）智能科技有限公司（英文名 Cirquar AI）宣布完成数千万元天使轮融资，由金雨茂物领投，我乐家居与南京市创新投资集团跟投。资金用途三项：世界模型核心技术攻关、家庭服务机器人产品开发、核心团队扩建。\n\n团队与出身：公司 2026 年 7 月成立于南京建邺区，核心团队出自南京大学 LAMDA 实验室，技术脉络可追溯至周志华院士课题组近十年的世界模型研究；创始人林浩鑫为该校博士，联合创始人唐开强为南京大学机器人与自动化学院助理研究员。公司 2026 年 10 月与南京大学联合发布物理智能 Rehearsal 框架，入选江苏省「物理 AI 与世界模型」典型成果。\n\n技术路线：以世界模型与强化学习结合为核心，围绕「Rehearsal in World Model」——让机器人在动作发生前于数字空间预演物理因果链与操作风险，减少对真机样本的依赖。落地重心放在家庭，覆盖整理收纳、衣物归置等长程任务。\n\n投资方结构：金雨茂物为深耕硬科技十余年的机构，负责资本；我乐家居作为定制家居上市企业，提供真实户型与家居动线作为落地入口；南京市创新投资集团衔接地方算力、数据与产业政策。管理层称希望先在仿真中把成功率练到较高水平，再走向真实场景规模化验证。\n\n规模口径提示：多家媒体（腾讯新闻、网易、智通财经、商道创投网）统一表述为「数千万元人民币」，未披露具体数额、投后估值与股权比例。",
        "ai_comment": "对本站读者而言，这条的价值不在「又融了一笔」，而在两点交叉信息：其一，世界模型这条链正在被拆成「生成侧（World Labs/群核 SpatialGen）」与「决策侧（原方这类 Rehearsal 路线）」两端，原方站的是后者——它不追求画面真实，追求物理因果是否被正确推演；其二，我乐家居这种产业方以「户型+动线」入股，说明家庭场景的三维数据正在成为拿投资的筹码，这与本窗口群核 x 禾赛「卖空间采集硬件」构成同一条线的两个方向：一个卖设备生产数据，一个用数据换场景入口。\n\n风险很实：世界模型在非结构化家庭环境中的泛化是行业公认未解问题，公司 2026 年 7 月才成立、10 月才发框架，产品尚无任何公开规格或出货数字；「数千万元」的天使轮对于要同时做模型、产品与团队三件事来说偏紧；家居上市公司的场景入口能否真正开放真实用户家庭还是未知数。要盯：Rehearsal 框架是否有可复现论文与开源代码、2027 年是否出现首批真实家庭的长程任务成功率数据、以及团队是否补充硬件侧合作方。",
        "key_facts": [
          {
            "metric": "融资金额",
            "value": "数千万元人民币（天使轮）",
            "baseline": "未披露具体数额、估值与股权比例",
            "condition": "金雨茂物领投，我乐家居、南京市创新投资集团跟投"
          },
          {
            "metric": "成立到融资间隔",
            "value": "约 4 个月（2026-07 成立 → 2026-11-09 披露）",
            "baseline": "国内具身智能初创通常 6~12 个月完成天使",
            "condition": "团队技术积累来自南大 LAMDA 近十年研究"
          },
          {
            "metric": "技术验证",
            "value": "2026-10 与南京大学联合发布物理智能 Rehearsal 框架，入选江苏省「物理 AI 与世界模型」典型成果",
            "baseline": "尚无公开产品规格与出货数字",
            "condition": "省级成果认定，非第三方性能评测"
          },
          {
            "metric": "资金用途",
            "value": "3 项（世界模型技术攻关、家庭机器人产品开发、团队扩建）",
            "baseline": "未披露各项预算占比",
            "condition": "官方口径「全部投向」"
          }
        ],
        "position_relation": "与 2026-11-09-A-001（苹果 HALO：合成数据替代真实扫描）构成路线对照——苹果用程序化场景替代真实采集，原方用世界模型替代真机试错，两者都在压缩「真实数据」的必要性；与 2026-11-08-A-001（眸深智能「深悟」具身原生模型）同属具身世界模型的国内新进者。",
        "signal_strength": "中",
        "tags": [
          "世界模型",
          "具身智能",
          "融资",
          "家庭机器人",
          "Rehearsal",
          "南京大学"
        ],
        "terms": [
          {
            "term": "Rehearsal in World Model",
            "definition_mechanism": "动作执行前在世界模型内预演，用预测的物理后果筛选动作，降低真机试错成本",
            "definition_contrast": "与直接 sim2real 迁移不同，它把世界模型当作「后果预测器」而非「场景渲染器」"
          },
          {
            "term": "动态世界模型",
            "definition_mechanism": "对环境中物体状态随动作与时间的变化进行可泛化的预测建模",
            "definition_contrast": "与静态场景重建（3DGS/点云）只表达几何外观不同，它必须表达因果与动力学"
          }
        ],
        "sources": [
          {
            "url": "https://news.qq.com/rain/a/20261109A09ZPT00",
            "type": "news"
          },
          {
            "url": "https://www.shangdaovc.cn/h-nd-14858.html",
            "type": "news"
          },
          {
            "url": "https://www.zhitongcaijing.com/content/detail/1520429.html",
            "type": "news"
          },
          {
            "url": "https://www.163.com/dy/article/LB9Q85HE05198R3E.html",
            "type": "news"
          }
        ],
        "date": "2026-11-09",
        "notes": "披露日 2026-11-09，落在报告日 2026-11-10 窗口内。金额仅「数千万元」，四家媒体口径一致但均未给出精确数字、估值与股权比例；成立时间有「2026 年 7 月」（商道创投网）与「2026 年」（腾讯新闻）两种表述，取较具体的 7 月并标注。英文名 Cirquar AI 由智通财经提供。本条不涉及任何产品性能指标。"
      },
      {
        "item_id": "2026-11-10-B-003",
        "category": "Business",
        "title": "影石创新业绩说明会披露：拟投 2.98 亿元超募资金建「端云一体化影像软件体系」七大子系统，Q3 毛利率降至 33.7%",
        "one_line_judgment": "空间采集的硬件战争打到毛利 33% 时，影石选择把赌注押在「拍完之后」——算法平台与云端，这是采集设备商向空间数据服务商转型的信号。",
        "image": "",
        "ai_summary": "大白话：影石卖全景相机和运动相机，今年前三季度收入涨了 42.7% 到 94.36 亿元，但利润被存储芯片涨价和竞争打没了——三季度毛利率只剩 33.7%，比去年同期掉了近 14 个点。它的应对是：拿 IPO 超募的钱（2.98 亿元）去建软件，包括相机底层架构、手机 App、电脑端剪辑软件、网页平台、算法开发平台、端侧和云端自动剪辑、云存储七块。说白了，硬件赚不到钱，就往后端走，靠软件和服务挣钱。",
        "detailed_info": "2026 年 11 月 9 日，影石创新（688775.SH）在第三季度业绩说明会上披露两项核心信息。\n\n第一，拟使用超募资金人民币 2.98 亿元投资新建「端云一体化影像软件体系研发项目」，围绕七大子系统：新一代相机基础架构、Insta360 APP 移动端软件、Insta360 Studio 桌面端剪辑工具、Insta360 Web 在线平台、Insta360 算法开发平台、基于 AI 的端侧与云端自动剪辑方案、Insta360 云存储项目，目标是构建「相机端—移动端—桌面端—Web 云端」的端云一体影像软件技术体系。该投资最早于 2026 年 10 月 27 日以公告形式披露，说明会为再次确认与解释。\n\n第二，AI 应用与软件生态进展：依托 Insta360 App、云端自动剪辑与 AI 语音助手构建软件协同壁垒；拇指相机 Go Ultra 已率先接入通义千问与 Google Gemini 等大模型，实现 AI 语音交互。\n\n财务背景（三季报，2026 年 10 月 27 日披露）：前三季度营收 94.36 亿元、同比 +42.73%，已接近 2025 年全年 97.41 亿元；Q3 单季营收 39.19 亿元、同比 +33.30%；前三季度归母净利润 0.48 亿元、同比 -93.96%，扣非 0.05 亿元、同比 -99.31%；Q3 单季归母净利润 0.17 亿元、同比 -93.59%，但较 Q2 的 -0.54 亿元由负转正。Q3 单季毛利率 33.70%，同比 -13.95pct、环比 -4.64pct；前三季度毛利率 38.21%、同比 -11.42pct。Q3 末存货 71.54 亿元、同比 +231.7%；前三季度经营活动现金流净额 -42.64 亿元（上年同期 +9.30 亿元）。公司解释为存储元器件涨价、行业竞争加剧叠加战略研发投入与备货。\n\n无人机业务口径：首款全景无人机影翎 Antigravity A1 已在全球上市，近期新增经典遥控器与 4G 图传增强模块，目前处于市场教育与产能爬坡阶段。",
        "ai_comment": "把这条放进三维重建情报站，是因为影石是「消费级空间采集」这一层最典型的样本：它与群核合作把全景相机接入空间重建，与麒砺创新（Remy）合作把全景视频转成可交互三维空间。现在它的毛利率被压到 33.7%，意味着单靠卖采集硬件喂不饱三维重建的数据工厂——这是整个实景采集设备赛道的结构性信号，而不只是影石一家的经营波动。\n\n冷静看三点。第一，2.98 亿元软件投入相对其 94 亿元营收体量并不大（约 3.2%），且七大子系统里真正与三维重建直接相关的是「算法开发平台」与「端云自动剪辑」，其余偏内容创作工具，短期难以转化为空间数据能力；第二，管理层在说明会上未披露软件服务（云订阅、AI 剪辑）的付费收入规模，只回应「以公告为准」，这是判断转型是否成立的关键口径缺失；第三，存货 71.54 亿元、同比增 231.7% 叠加经营现金流 -42.64 亿元，说明其现金正被战略备货锁死，若 2027 年上半年去库存不及预期，软件投入的持续性会受挤压。要盯：云订阅付费用户数与 ARR、Insta360 Studio 是否增加三维空间导出能力、以及毛利率能否在 2027Q1 止跌。",
        "key_facts": [
          {
            "metric": "软件投入金额",
            "value": "2.98 亿元人民币（超募资金）",
            "baseline": "占前三季度营收 94.36 亿元的约 3.2%",
            "condition": "七大子系统，2026-10-27 公告、11-09 说明会重申"
          },
          {
            "metric": "Q3 单季毛利率",
            "value": "33.70%",
            "baseline": "同比 -13.95pct、环比 -4.64pct；前三季度 38.21%（同比 -11.42pct）",
            "condition": "公司归因于存储元器件涨价与竞争加剧"
          },
          {
            "metric": "收入与利润背离",
            "value": "前三季度营收 94.36 亿元（+42.73%）vs 归母净利 0.48 亿元（-93.96%）",
            "baseline": "2025 年全年营收 97.41 亿元",
            "condition": "Q3 单季净利 0.17 亿元，较 Q2 的 -0.54 亿元转正"
          },
          {
            "metric": "库存与现金流压力",
            "value": "Q3 末存货 71.54 亿元（同比 +231.7%）；经营现金流净额 -42.64 亿元",
            "baseline": "上年同期经营现金流 +9.30 亿元",
            "condition": "公司称为战略性备货"
          },
          {
            "metric": "模型接入",
            "value": "Go Ultra 已接入通义千问与 Google Gemini",
            "baseline": "此前 AI 语音为自研小模型",
            "condition": "说明会口径，未披露调用量"
          }
        ],
        "position_relation": "与 2026-11-10-A-001（群核 x 禾赛空间相机）形成消费级/专业级互补——群核已明确其硬件矩阵中消费级一环由影石覆盖；与 2026-10-27-D-001（理光 360 相机 AI 三维建模在东京电力投用）对照，两者都在把全景采集往工程/空间数据方向推，区别是理光走 B 端电网，影石走消费级加软件订阅。",
        "signal_strength": "中",
        "tags": [
          "影石",
          "Insta360",
          "空间采集",
          "软件转型",
          "毛利率",
          "全景相机"
        ],
        "terms": [
          {
            "term": "端云一体化",
            "definition_mechanism": "采集（相机端）、编辑（移动/桌面端）与云端算力、存储共用同一套算法与资产体系，数据无需反复导入导出",
            "definition_contrast": "与「相机只管拍、云端只管存」的拼接式架构不同，它要求端侧与云侧模型与格式统一"
          },
          {
            "term": "超募资金",
            "definition_mechanism": "IPO 实际募集金额超过招股书计划的部分，使用需按规则履行审议与披露程序",
            "definition_contrast": "与自有资金投资不同，其投向常被市场视为公司对第二曲线方向的公开表态"
          }
        ],
        "sources": [
          {
            "url": "https://finance.jrj.com.cn/2026/11/09160759068835.shtml",
            "type": "news"
          },
          {
            "url": "https://finance.sina.com.cn/stock/bxjj/2026-11-09/doc-iniycrzy3239395.shtml",
            "type": "news"
          },
          {
            "url": "https://data.eastmoney.com/report/zw_macresearch.jshtml?encodeUrl=YkOHHDlnoYAcLJTL+8e3G1Fvi7hpjPZm7aMM%2Fb2VMqc%3D",
            "type": "data"
          },
          {
            "url": "https://wap.zhengguannews.cn/html/zgh/429664.html",
            "type": "news"
          }
        ],
        "date": "2026-11-09",
        "notes": "业绩说明会日期 2026-11-09，落在报告日 2026-11-10 窗口内。2.98 亿元投资最初于 2026-10-27 公告、11-09 说明会重申，故本条按「说明会披露」归档并在正文标注事件日；财务数字均取自 2026-10-27 三季报及国信证券、新浪财经研报口径，与公司说明会表述交叉核对一致（Q3 毛利率 33.70%）。"
      },
      {
        "item_id": "2026-11-10-B-004",
        "category": "Research",
        "title": "SplatAnything：用「高斯间距归一化」统一不同场景尺度，前馈 3DGS 首次在场景尺度与视角大幅外推下同时拿到 SOTA",
        "one_line_judgment": "前馈 3DGS 的尺度歧义问题被一个统计量解决——这类「一行归一化换一个 SOTA」的进展说明该领域瓶颈已从架构转向训练目标的一致性。",
        "image": "",
        "ai_summary": "大白话：现有的「看一眼就出三维模型」的 AI，训练时得先告诉它「这个场景大概多大」，而不同场景大小差得离谱——一个茶杯扫描和一条街扫描，模型的尺度标签完全对不上，AI 就学糊了。这篇论文的做法是：不按「离相机多远」归一化，而是按「相邻高斯点之间的间距」归一化，这个量在同一个场景里更稳定。改完这一处，它在大幅改变场景尺度和视角的测试里都拿到了最好成绩。",
        "detailed_info": "arXiv 2611.09xxx 系列论文 SplatAnything（作者 Hao Yu、Zhenwei Wang、Yongzhen Hu、Yuning Gong、Junta Wu、Xiaowei Zhou、Hujun Bao、Tengfei Wang、Chunchao Guo、Sida Peng，含浙江大学与腾讯系研究者），针对前馈式 3DGS（一次前向即输出高斯场景）的一个系统性缺陷提出修正。\n\n问题定义：现有方法通常在「径向距离归一化」空间中预测高斯属性——即先把重建几何的全局径向统计量规范化，再让网络输出。但相邻高斯中心之间的间距在不同场景尺度与相机配置下仍会大幅变化，导致高斯尺度（scale）的监督目标出现系统性偏移，训练信号因此含糊。\n\n方法：提出 Gaussian Spacing Normalization（GSNorm），不再依赖全局径向统计，而是规范化一个鲁棒的「场景级高斯间距统计量」，为高斯预测提供更一致的空间参照。方法本身是一个归一化层的替换，不改主干架构。\n\n评测：作者同时建立了一个系统基准，覆盖多数据集、不同输入稀疏度与具有挑战性的外推视角。实验称 SplatAnything 达到 SOTA，且在场景尺度与视角大幅变化时增益尤为明显。\n\n时间与热度：该论文在 2026-11-05 前后出现在 arXiv 与 Hugging Face Papers，11 月 9 日成为 Hugging Face 当周热门论文榜首（OrangeBot 当日快照记录为 59 分、位列第 1），是本窗口内传播度最高的 3DGS 方向成果之一。",
        "ai_comment": "这篇值得记录的理由不是绝对性能，而是它揭示的领域状态：前馈 3DGS 的竞争已经从「换更强的骨干网络」进入「修正监督目标的一致性」阶段——GSNorm、此前 GeoGSplat 的几何约束、AffineGS 的空间变化仿射校正，属于同一类「不改架构改归一化」的思路。这通常意味着该方向的研究红利正在收敛，接下来拼的是数据规模与工程。\n\n必须保留的三点：第一，本条仅读到摘要与二手快照，未见正式指标表（PSNR/SSIM/LPIPS 与具体数据集数值一概未公开于此），因此不能引用任何数字，本站亦不填写未验证的数字；第二，Hugging Face 日榜第一反映的是社区关注度而非审稿结论，该文尚未见会议接收信息；第三，基准由作者自建，存在「自建基准自证 SOTA」的常见风险，需要第三方在 Mip-NeRF 360、Tanks and Temples 等公开集上复现。要盯：代码与权重是否开源、是否被集成进 VGGT/OmniVGGT 类主干、以及在不同分辨率输入下的尺度稳定性。",
        "key_facts": [
          {
            "metric": "社区热度",
            "value": "Hugging Face Papers 当周第 1（2026-11-09 快照 59 分）",
            "baseline": "同期第 2 名 36 分",
            "condition": "OrangeBot 每日快照，非引用量"
          },
          {
            "metric": "方法改动量",
            "value": "1 处归一化替换（径向距离归一化 → 高斯间距归一化 GSNorm）",
            "baseline": "不改主干架构",
            "condition": "摘要口径"
          },
          {
            "metric": "评测覆盖",
            "value": "多数据集 + 多输入稀疏度 + 外推视角，基准由作者自建",
            "baseline": "此前方法多只在单一数据集报告",
            "condition": "具体数据集与指标值未在本条来源中给出"
          },
          {
            "metric": "可核实数字",
            "value": "0 项性能指标（PSNR/SSIM/耗时均未在本条来源披露）",
            "baseline": "本站不臆填数字",
            "condition": "待正式版本与代码发布后补录"
          }
        ],
        "position_relation": "与 2026-10-28-A-001（GeoGSplat：几何约束下的非像素对齐前馈高斯溅射）、2026-11-06-B-007（CrossPressor：跨视角融合提速 26.12 倍）同属「前馈 3DGS 的工程化修补」序列；与 2026-11-03-A-002（LingBot-Map 流式因果重建）在「如何让一次前向适应任意尺度」这一问题上相通。",
        "signal_strength": "中",
        "tags": [
          "3DGS",
          "前馈重建",
          "arXiv",
          "尺度归一化",
          "SplatAnything"
        ],
        "terms": [
          {
            "term": "径向距离归一化",
            "definition_mechanism": "把每个三维点按其到相机原点的距离做归一化，使网络在不同景深下看到相似尺度的特征",
            "definition_contrast": "与 GSNorm 按高斯间距归一化不同，它规范的是「点离相机多远」，而非「点与点多密」"
          },
          {
            "term": "高斯间距统计量",
            "definition_mechanism": "对场景内相邻高斯中心之间的距离取一个鲁棒统计值，作为该场景的尺度参照",
            "definition_contrast": "与全局径向统计相比，它对相机配置与视场角变化更不敏感"
          },
          {
            "term": "外推视角",
            "definition_mechanism": "渲染训练输入覆盖范围之外的相机位置，考验场景补全而非插值能力",
            "definition_contrast": "与「插值视角」只考验重建保真度不同，外推直接暴露几何先验的强弱"
          }
        ],
        "sources": [
          {
            "url": "https://orangebot.ai/top-ai-models-this-week",
            "type": "data"
          },
          {
            "url": "https://onlybits.org/longxiang-ai/awesome-gaussians",
            "type": "data"
          }
        ],
        "date": "2026-11-09",
        "notes": "论文提交日在 2026-11-05 前后（arXiv 2611.09xxx 段），本窗口内（11-09）成为 Hugging Face Papers 当周榜首，按报道日归档至报告日 2026-11-10 并在正文标注事件日。本条未填写任何性能数字，因为来源仅有摘要与榜单快照，无指标表；榜单分数为社区关注度指标，不等于论文质量或审稿结论。"
      }
    ]
  }
];

window.GLOSSARY_DEFAULTS = [
  {"term_id":"feed-forward-reconstruction","term":"前馈式重建","aliases":["feed-forward reconstruction","前馈重建"],"definition_mechanism":"一次前向推理直接输出场景表示或几何结果，无需逐场景迭代优化","definition_contrast":"与 NeRF 类逐场景训练路线不同，优势在速度，代价是细节与泛化边界","related_item_ids":["2026-10-28-A-001"],"first_seen_date":"2026-10-28"},
  {"term_id":"metric-scale-reconstruction","term":"度量尺度重建","aliases":["metric-scale reconstruction","度量级重建"],"definition_mechanism":"输出的三维场景保持真实世界物理尺寸，可直接测量距离与尺寸","definition_contrast":"与仅视觉上逼真但尺度任意或未知的神经渲染结果不同","related_item_ids":["2026-10-28-B-001"],"first_seen_date":"2026-10-28"},
  {"term_id":"3dgs","term":"3DGS","aliases":["高斯溅射","Gaussian Splatting","Gaussian splats","高斯椭球"],"definition_mechanism":"用大量带颜色与透明度的三维高斯椭球显式表示场景，可实时渲染出照片级真实感画面","definition_contrast":"与 NeRF 用神经网络隐式存储场景不同，3DGS 是显式表示：渲染更快、可编辑，但存储与冗余控制更难","related_item_ids":["2026-10-28-A-001","2026-10-28-D-001"],"first_seen_date":"2026-10-28"},
  {"term_id":"nerf","term":"NeRF","aliases":["神经辐射场"],"definition_mechanism":"用一个神经网络隐式表示场景的颜色与密度分布，从多视角照片训练出可任意视角渲染的三维场景","definition_contrast":"画质与视角插值能力出色，但训练与渲染都慢；3DGS 可看作它的「显式化、实时化」后继路线","related_item_ids":["2026-10-28-A-001"],"first_seen_date":"2026-10-28"},
  {"term_id":"slam","term":"SLAM","aliases":["即时定位与地图构建","同步定位与建图"],"definition_mechanism":"设备在未知环境中边移动边估计自身位置、同时增量式构建环境地图的技术","definition_contrast":"与离线三维重建（先采集后计算）相对，SLAM 强调实时在线，是机器人与 AR 的基础能力","related_item_ids":["2026-10-28-B-003","2026-10-28-B-005"],"first_seen_date":"2026-10-28"},
  {"term_id":"point-cloud","term":"点云","aliases":["point cloud","Point Cloud"],"definition_mechanism":"用大量带位置（常含颜色/强度）的离散三维点表示物体或场景表面的数据形式","definition_contrast":"相比网格，点云无需维护连接关系、采集直接，但没有封闭表面，需进一步处理才能打印或仿真","related_item_ids":["2026-10-28-B-001","2026-10-28-D-001"],"first_seen_date":"2026-10-28"},
  {"term_id":"digital-twin","term":"数字孪生","aliases":["digital twin","Digital Twin"],"definition_mechanism":"为真实世界的物体/场景/系统建立可持续更新的数字化镜像，用于监测、仿真与决策","definition_contrast":"区别于一次性建模：数字孪生强调与真实对象的长期同步与数据回写","related_item_ids":["2026-10-28-D-001"],"first_seen_date":"2026-10-28"}
];

// ============================================================
// 【AI 每日检索词库】AI 执行每日情报更新时，以本数组为检索配置：
// - type: tech（技术）/ company（公司）/ topic（方向）
// - keywords: 实际用于检索的关键词（中英文都建议写上）
// - enabled=false 的条目不参与检索
// - region: 国内 / 海外（仅公司类）；products: 主要产品或产业
// 【注意】用户在网页上的增删改保存在浏览器本机；自动化任务读取的是
// 本文件中的默认词库。若希望 AI 用上网页里的自定义项，请把它们回填到这里。
// ============================================================
window.WATCHLIST_DEFAULTS = [

  // ---- 技术类 ----
  {"id":"w-tech-3dgs","type":"tech","name":"3DGS 高斯溅射","keywords":["3DGS","Gaussian Splatting","高斯溅射"],"intro":"当前最主流的三维场景表示与实时渲染技术路线，论文与产业落地都极其活跃，是本情报库的核心追踪对象。","enabled":true},
  {"id":"w-tech-nerf","type":"tech","name":"NeRF 神经辐射场","keywords":["NeRF","神经辐射场","Neural Radiance Field"],"intro":"神经隐式三维重建的经典路线，多数新工作的对比基线，仍在持续演化出改进变体。","enabled":true},
  {"id":"w-tech-slam","type":"tech","name":"SLAM 实时建图","keywords":["SLAM","同步定位与建图","visual SLAM","vSLAM"],"intro":"机器人、AR、自动驾驶的实时定位与建图基础技术，与三维重建深度交叉。","enabled":true},
  {"id":"w-tech-ff","type":"tech","name":"前馈式重建","keywords":["feed-forward 3D","前馈式重建","feedforward reconstruction"],"intro":"一次前向推理直接输出三维结果的新兴方向，是重建技术从「小时级优化」走向「秒级实用」的关键。","enabled":true},
  {"id":"w-tech-photogrammetry","type":"tech","name":"摄影测量","keywords":["photogrammetry","摄影测量","倾斜摄影","SfM"],"intro":"传统测绘级三维重建技术，工程落地成熟，常与 3DGS 等新路线融合对比。","enabled":true},
  {"id":"w-tech-dt","type":"tech","name":"数字孪生","keywords":["数字孪生","digital twin","Digital Twin"],"intro":"三维重建最大的行业应用出口之一：城市、工厂、基础设施的数字化镜像。","enabled":true},
  {"id":"w-tech-spatial-intelligence","type":"tech","name":"空间智能","keywords":["空间智能","Spatial Intelligence","spatial AI"],"intro":"让机器理解并推理三维空间的技术总方向，涵盖三维重建、世界模型、空间认知，是 3D 视觉从「看得见」走向「看得懂、用得上」的产业叙事主线。","enabled":true},
  {"id":"w-tech-world-model","type":"tech","name":"世界模型","keywords":["世界模型","World Model","world simulator"],"intro":"能对环境进行表征、预测与模拟的生成式模型，从少量观测构建可交互、可推演物理后果的三维环境，被机器人与具身智能行业视为「仿真训练场」的关键技术。","enabled":true},
  {"id":"w-tech-spatial-vivid","type":"tech","name":"空间菁彩影像","keywords":["空间菁彩影像","Spatial Vivid","T/UWA 050-2026"],"intro":"世界超高清视频产业联盟（UWA）发布的沉浸式三维影像团体标准（T/UWA 050-2026），配套参考工具已开源，是国内视频产业侧切入三维空间标准化的尝试。","enabled":true},
  // ---- 公司类 ----
  // 【公司条目新增字段说明】以下公司条目在 name/keywords/region/products/intro 之外，
  // 还补充了详情字段，供词库卡片的「详情弹窗」与「分类标签」使用：
  // - founded：成立时间（字符串，如 "2015-03"）
  // - scale：公司规模（员工数或规模描述）
  // - website：公司官网（可点击跳转）
  // - ai_summary：AI 通俗总结（大白话讲清这家公司是干什么的）
  // - categories：分类标签数组（用于按标签快速筛选相似公司，如扫描仪/激光器/重建方案）
  {"id":"w-com-scantech","type":"company","name":"思看科技","keywords":["思看科技","SCANTECH","思看"],"region":"国内","products":"TrackScan、SIMSCAN 等工业手持 3D 扫描仪，工业三维视觉检测方案","intro":"杭州的三维视觉检测上市公司，工业级手持激光 3D 扫描仪的代表厂商，科创板上市。","founded":"2015-03","scale":"约 570 人（近 700）","website":"https://www.3d-scantech.com","ai_summary":"一句话：这家公司专门做「给实物拍照就能量出精确尺寸」的工业 3D 扫描仪。工程师拿它的设备往零件上一扫，就能在电脑里还原出毫米级精度的三维模型，用于质检、逆向设计和零件修复。它是 A 股「中国 3D 扫描第一股」，2025 年登陆科创板，产品卖到全球 70 多个国家。","categories":["扫描仪","三维检测"],"enabled":true},
  {"id":"w-com-hesai","type":"company","name":"禾赛科技","keywords":["禾赛","Hesai","禾赛科技"],"region":"国内","products":"车载激光雷达、Kosmo 手持 3D 采集终端","intro":"全球车载激光雷达龙头，近年以 Kosmo 系列切入空间三维采集终端，曾获皮克斯官方教程点名。","founded":"2014-10","scale":"约 1200 人（全球）","website":"https://www.hesaitech.com","ai_summary":"一句话：这家公司给汽车、机器人装上「激光眼睛」。它做的是激光雷达（LiDAR）——用激光扫一圈就能精准测出周围物体的距离和形状，是自动驾驶和高阶辅助驾驶的必备传感器。它是全球车载激光雷达市占率第一，2023 年在纳斯达克上市，近年又用 Kosmo 系列手持设备把同样的技术带进空间三维采集和好莱坞视效流程。","categories":["激光雷达","激光器"],"enabled":true},
  {"id":"w-com-xgrids","type":"company","name":"其域创新","keywords":["其域创新","XGRIDS"],"region":"国内","products":"Lixel 系列三维采集设备、LCC 数据格式","intro":"空间计算与三维重建公司，空地一体采集方案代表，闽宁镇 23.5km² 3DGS 数字模型的技术方。","founded":"2020-12","scale":"约 180 人","website":"https://www.xgrids.com","ai_summary":"一句话：这家公司能把整个城市、工厂「搬进电脑里」。它用自研的采集设备（无人机 + 手持扫描仪）把真实空间重建为可测量、可查询的三维模型，闽宁镇 23.5 平方公里的数字孪生就是它做的。它自研的 LCC 数据格式已经被英伟达等国际平台采纳，是「空间智能」赛道里打通采集到应用闭环的代表。","categories":["重建方案","数字孪生","空间智能"],"enabled":true},
  {"id":"w-com-slamtec","type":"company","name":"思岚科技","keywords":["思岚科技","Slamtec","思岚"],"region":"国内","products":"RPLIDAR 激光雷达、Aurora 空间感知系统","intro":"机器人自主定位导航方案商，扫地机器人激光雷达的主要供应商之一。","founded":"2013-10","scale":"数百人","website":"https://www.slamtec.com","ai_summary":"一句话：这家公司让机器人「知道自己在哪、该怎么走」。它做的是扫地机器人、服务机器人用的激光雷达（RPLIDAR）和定位导航方案（SLAMWARE），相当于机器人的「眼睛 + 小脑」。全球大量扫地机器人和商用服务机器人的核心传感器都来自它，是机器人自主定位导航领域的老牌玩家。","categories":["激光雷达","SLAM"],"enabled":true},
  {"id":"w-com-stereolabs","type":"company","name":"Stereolabs","keywords":["Stereolabs","ZED 相机","ZED Box"],"region":"海外","products":"ZED 系列深度相机、ZED Box 边缘视觉计算机","intro":"法国立体视觉公司，深度相机与边缘视觉计算的代表厂商，机器人多相机感知基础设施提供商；2026 年 2 月被 Ouster 收购，现为全资子公司，ZED 产品线持续独立运营。","founded":"2010","scale":"约 60 人","website":"https://www.stereolabs.com","ai_summary":"一句话：这家公司给机器装上「人一样的双眼」。它做的是 ZED 立体深度相机——用两颗摄像头像人眼一样看出物体的远近，再配合边缘计算盒子（ZED Box）在本地跑视觉模型。机器人、无人机的多相机感知很多都靠它的方案，2026 年被激光雷达厂商 Ouster 收购。","categories":["深度相机","立体视觉"],"enabled":true},
  {"id":"w-com-luma","type":"company","name":"Luma AI","keywords":["Luma AI","Luma","Genie 3D"],"region":"海外","products":"Luma App（NeRF 扫描）、Genie（文生 3D）","intro":"美国三维生成公司，NeRF 消费化与文生 3D 的代表玩家。","founded":"2021-09","scale":"约 130 人","website":"https://lumalabs.ai","ai_summary":"一句话：这家公司让人「用手机或一句话就能造出三维世界」。早期靠手机拍视频生成 NeRF 三维场景出名，后来转向生成式 AI，做出文生 3D 的 Genie 和爆火的视频生成模型 Dream Machine / Ray 系列。它是生成式三维和 AI 视频赛道的头部公司，估值超 40 亿美元。","categories":["重建方案","生成式3D"],"enabled":true},
  {"id":"w-com-polycam","type":"company","name":"Polycam","keywords":["Polycam"],"region":"海外","products":"Polycam 3D 扫描 App、云端摄影测量","intro":"海外消费级 3D 扫描 App 代表，手机摄影测量普及化的推手。","founded":"2021-01","scale":"小型团队","website":"https://poly.cam","ai_summary":"一句话：这家公司让「手机扫一扫就出三维模型」。它做的是消费级 3D 扫描 App，用户用手机摄像头（或 iPhone 的 LiDAR）拍照就能生成物体的三维模型、房间的平面图，还能测尺寸、分享协作。它把原本专业的摄影测量技术门槛降到了「人人可用」，全球用户超千万。","categories":["扫描仪","摄影测量"],"enabled":true},
  {"id":"w-com-shining3d","type":"company","name":"先临三维","keywords":["先临三维","Shining3D","先临","Shining 3D","FreeScan","EinScan","OptimScan"],"region":"国内","products":"工业 3D 扫描仪、齿科口内扫描仪","intro":"国内 3D 数字化老牌厂商（2004 年成立，新三板 830978），工业三维扫描与齿科数字化双主业，旗下曾孵化思看科技。","founded":"2004-12","scale":"约 1367 人","website":"https://www.shining3d.cn","ai_summary":"一句话：这家公司是国内 3D 扫描仪行业的老前辈——给工厂的零件做三维检测扫描，也给牙科诊所做「口内扫描仪」（咬一口就能扫出牙齿的三维模型）。它 2004 年就成立了，比大多数同行早了十几年，还孵化出了 A 股上市的思看科技。","categories":["扫描仪","三维检测","齿科数字化"],"enabled":true},
  {"id":"w-com-dji","type":"company","name":"大疆 DJI","keywords":["大疆","DJI","大疆创新","Matrice 4E","司空 2","智图","倾斜摄影"],"region":"国内","products":"消费/行业无人机、Osmo、RoboMaster、Dock 机场系列","intro":"全球无人机绝对龙头（2006 年成立），行业侧以机场（Dock）+Matrice 系列构成无人值守三维采集与测绘基础设施，孵化了 Livox 览沃。","founded":"2006-11","scale":"约 14000 人","website":"https://www.dji.com","ai_summary":"一句话：这家公司是全球无人机霸主——从航拍到农业植保，再到给电网巡检、给城市做三维测绘。它的「机场」（自动机巢）+行业无人机组合，能让三维数据像闹钟一样每天自动采集，是数字孪生数据供给侧的基础设施。","categories":["无人机","测绘","机器人"],"enabled":true},
  {"id":"w-com-livox","type":"company","name":"Livox 览沃","keywords":["Livox","览沃","Mid-360"],"region":"国内","products":"Mid 系列非重复扫描激光雷达、HAP 车载雷达","intro":"2016 年由大疆孵化的激光雷达公司，以非重复扫描的低成本路线成为机器人与具身智能开发的事实标准传感器供应商之一。","founded":"2016-09","scale":"数百人","website":"https://www.livoxtech.com","ai_summary":"一句话：这家公司是大疆孵化的激光雷达厂商，用一种「不走寻常路的打光方式」（非重复扫描）把 360° 三维激光雷达做到了千元级价格。全球做机器人、割草机、人形机器人的开发者，几乎人手一只它的 Mid-360——升级款 Mid-360S 于 2026 年 11 月发布。","categories":["激光雷达","机器人"],"enabled":true},
  {"id":"w-com-ouster","type":"company","name":"Ouster","keywords":["Ouster","OS 系列激光雷达","Ouster Digital","Rev8","数字激光雷达","SPAD","L4 芯片"],"region":"海外","products":"OS/DF 系列数字化激光雷达、REV7 平台","intro":"美国旧金山数字化激光雷达上市公司（NYSE: OUST），2026 年 2 月完成对 Stereolabs 的收购，形成「激光雷达+立体相机」双技术栈的机器人感知版图。","founded":"2015-10","scale":"约 320 人","website":"https://ouster.com","ai_summary":"一句话：这家公司做「数字激光雷达」——把激光的收发全部变成芯片级数字信号，主攻自动驾驶、机器人、智慧城市。它是禾赛在海外最主要的对手，2026 年 2 月收购了立体视觉公司 Stereolabs，等于同时押注「激光」和「双眼」两条机器人感知路线。","categories":["激光雷达","机器人感知"],"enabled":true},
  {"id":"w-com-remsense","type":"company","name":"RemSense","keywords":["RemSense","RemSense Technologies","ASX:REM"],"region":"海外","products":"Airborne Insight 无人机采集、3D 资产可视化服务","intro":"澳大利亚（珀斯）上市无人机与三维资产可视化公司（ASX:REM，2006 年起步于国防无人机），服务 Chevron、Newmont、Woodside 等资源巨头的数字孪生需求。注：本词条为用户定向点名的「Remy」经全网检索后的最佳匹配公司。","founded":"2006","scale":"小型团队（FY2026 营收 A$2.49M）","website":"https://remsense.com.au","ai_summary":"一句话：这家澳大利亚上市公司用无人机给矿山、油田做「三维体检」——飞一圈，就把设施变成可测量的数字孪生，让 Chevron、壳牌这类资源巨头在办公室里就能巡查千里之外的现场。","categories":["无人机","数字孪生","测绘"],"enabled":true},
  {"id":"w-com-vast","type":"company","name":"VAST 三启万物","keywords":["VAST","三启万物","Tripo","tripo3d","P2.0","文生3D"],"region":"国内","products":"Tripo（文生 3D / 图生 3D）","intro":"北京生成式 3D 公司（2023 年成立），产品 Tripo 为全球头部文生 3D 工具，半年内累计融资约 50 亿元，是中国生成式 3D 赛道资金最集中的头部标的。","founded":"2023","scale":"数百人","website":"https://tripo3d.com","ai_summary":"一句话：这家公司做的产品叫 Tripo——输入一句话或一张图，AI 直接生成可以用的三维模型。游戏、电商、XR 行业都需要海量 3D 素材，人工建模又慢又贵，这家公司就是来「批量生产」三维模型的，半年融了约 50 亿元，是这条赛道最吸金的玩家。","categories":["生成式3D","重建方案"],"enabled":true},
  {"id":"w-com-daxiao","type":"company","name":"大晓机器人","keywords":["大晓机器人","ACE Robotics","Mundo","开悟 Kairos"],"region":"国内","products":"「开悟」Kairos 世界模型体系、Mundo 可交互世界模型","intro":"上海徐汇具身智能公司（2025 年 7 月成立），由原商汤科技副总裁王晓刚、陶大程等发起，与南洋理工大学 S-Lab 联合发布可物理交互世界模型 Mundo。","founded":"2025-07","scale":"初创团队","website":"https://www.acerobotics.com","ai_summary":"一句话：这家公司由商汤出身的两位 AI 大牛创办，目标是给机器人造「大脑和练功房」——它的世界模型 Mundo 能用几张照片生成一个机器人可以走进去、推得动东西的虚拟训练场，机器人先在虚拟世界里把活练熟，再进真实场景。","categories":["世界模型","具身智能"],"enabled":true},
  {"id":"w-com-robbyant","type":"company","name":"蚂蚁灵波 Robbyant","keywords":["蚂蚁灵波","Robbyant","LingBot","蚂蚁具身智能"],"region":"国内","products":"LingBot 系列具身智能软件、LingBot-Map 流式重建模型","intro":"蚂蚁集团全资具身智能公司（2024 年 12 月成立，注册资本 1 亿元），已开源面向机器人的流式因果三维重建模型 LingBot-Map，并与中东 AFDE 签署部署 MOU。","founded":"2024-12","scale":"数百人","website":"https://www.robbyant.com","ai_summary":"一句话：这是蚂蚁集团亲儿子里的「机器人公司」——2024 年底才成立，专门做让机器人在真实世界里干活的技术。它把「机器人边走边建三维地图」的模型（LingBot-Map）开源了出来，还在中东签了机器人落地的大单。","categories":["具身智能","世界模型","机器人"],"enabled":true},
  {"id":"w-com-bingbai","type":"company","name":"冰柏科技","keywords":["冰柏科技","Mirauge3D","Mirauge"],"region":"国内","products":"Mirauge3D 摄影测量与三维重建软件","intro":"合肥摄影测量软件公司（2021 年成立），Mirague3D 支持分布式平差与百万级影像重建，是实景三维测绘软件国产替代的代表之一。","founded":"2021-05","scale":"中小型团队","website":"https://www.bingbai.cn","ai_summary":"一句话：这家公司做「把无人机照片变成三维城市模型」的国产软件。以前这个市场被瑞士、美国的软件垄断，它的 Mirauge3D 用分布式计算把处理规模推到百万张照片级别，正在测绘行业里替代老牌进口工具。","categories":["摄影测量","测绘","重建方案"],"enabled":true},
  {"id":"w-com-spatial-intuition","type":"company","name":"空间直觉","keywords":["空间直觉","Spatial Intuition"],"region":"国内","products":"空间智能相关感知/重建技术（产品形态待披露）","intro":"南京空间智能初创公司（2023 年 8 月成立），2026 年 11 月完成数千万元种子轮，方向为具身智能的空间感知，投资方与技术细节暂未披露。","founded":"2023-08","scale":"早期初创","website":"未公开官网","ai_summary":"一句话：这是一家很新的南京公司，做「让机器理解空间」的技术，刚拿到几千万元的种子投资。具体产品还没公开，属于值得持续观察的早期标的。","categories":["空间智能","具身智能"],"enabled":true},
  {"id":"w-com-spaitial","type":"company","name":"SpAItial","keywords":["SpAItial","Echo-3","Matthias Niessner","iPhone 3D 扫描","度量级重建"],"region":"海外","products":"Echo-3（iPhone 视频到度量级 3D，订阅制 App）","intro":"慕尼黑工业大学 Matthias Niessner 教授创办的欧洲三维重建公司（2025 年成立，伦敦+慕尼黑），Echo-3 把 iPhone 视频转度量级 3D splats/点云/网格，本库 10-28 已收录其发布。","founded":"2025-05","scale":"小型团队（$13M 种子轮）","website":"https://spaitial.ai","ai_summary":"一句话：这家欧洲公司的创始人是 3D 视觉学术界的大牛教授，产品 Echo-3 让普通人用 iPhone 拍段视频就能拿到「可以量尺寸」的三维模型——不用买任何专业设备，订阅就能用。","categories":["重建方案","扫描仪","生成式3D"],"enabled":true},

  // ---- 2026-11 扩充：工业扫描 / 激光雷达 / 测绘实景 / 空间智能 / 3D 生成 / 消费级 ----
  {"id":"w-com-zeiss-gom","type":"company","name":"ZEISS GOM（蔡司 GOM）","keywords":["ZEISS GOM","GOM","蔡司 GOM","ATOS","ZEISS INSPECT"],"region":"海外","products":"ATOS 5 / ATOS 5X 蓝光结构光扫描仪、ATOS ScanBox 自动化测量站、ZEISS INSPECT 检测软件、TRITOP 摄影测量、ARAMIS 动态测量","intro":"工业光学三维测量的精度标杆。GOM 1990 年成立于德国布伦瑞克，凭 ATOS 系列蓝光结构光扫描仪立足汽车、航空航天、模具检测，2019 年被蔡司集团收购，并入工业质量与研究事业部，现以 ZEISS GOM 名义运营。ATOS 5 单次扫描约 0.2 秒、每秒 100 帧，测量范围最大 1000mm，配合 ZEISS INSPECT 打通扫描—检测—报告全流程，客户覆盖大众、宝马、奔驰、丰田等主流整车厂。","founded":"1990-01","scale":"约 600 人（GOM 主体）","website":"https://www.zeiss.com/metrology","ai_summary":"德国做工业三维扫描仪的老牌厂商，专门给汽车厂、飞机厂量零件尺寸，精度到微米级。被蔡司买下后，扫描仪直接配蔡司的检测软件，一套几十万到上百万元。它属于「计量级」而不是「展示级」，是工业检测这条线的天花板。","categories":["扫描仪","三维检测","工业计量"],"enabled":true},
  {"id":"w-com-artec3d","type":"company","name":"Artec 3D","keywords":["Artec 3D","Artec Leo","Eva","Spider","手持扫描仪"],"region":"海外","products":"Artec Leo 无线手持扫描仪、Eva、Spider、Micro 高精度扫描仪、Artec Studio 软件","intro":"卢森堡的手持三维扫描公司，2007 年成立，以无标记点、彩色纹理的手持扫描见长，广泛应用于文物数字化、医疗矫形、影视特效与工业设计。","founded":"2007-04","scale":"约 200 人","website":"https://www.artec3d.com","ai_summary":"一句话：这家公司的手持扫描仪是「扫人脸、扫文物」的经典选择——不用贴标记点，自带屏幕，扫完直接得到带颜色的模型。博物馆、医院（做矫形支具）、电影特效团队都在用它。","categories":["扫描仪","文物数字化","医疗数字化"],"enabled":true},
  {"id":"w-com-faro","type":"company","name":"FARO Technologies","keywords":["FARO","Focus","Quantum","三维激光扫描仪","法如"],"region":"海外","products":"Focus 系列地面激光扫描仪、Quantum 便携扫描仪、FARO Arm 测量臂、BuildIT 软件","intro":"美国佛罗里达的三维测量与成像公司，1981 年成立，产品覆盖地面激光扫描、便携式扫描与关节臂测量，服务建筑、制造、公共安全与取证等场景；曾收购 GeoSLAM 的移动扫描业务。","founded":"1981-01","scale":"约 3000 人","website":"https://www.faro.com","ai_summary":"一句话：这家公司是「大空间高精度三维测量」的老牌选手——扫一栋楼、一个厂房、一个事故现场，精度到毫米级。它的设备贵、但法院和工厂都认它的数据，属于「测量级」而非「展示级」的工具。","categories":["扫描仪","三维检测","激光雷达"],"enabled":true},
  {"id":"w-com-revopoint","type":"company","name":"知象光电","keywords":["知象光电","Revopoint","MetroY","POP 4","Trackit"],"region":"国内","products":"MetroY 系列工业手持扫描仪、POP 系列消费级扫描仪、Trackit 跟踪式扫描系统、Metrohub 自动化检测","intro":"西安的三维扫描企业，2014 年成立，以自研微结构光芯片与算法为核心，产品线从消费级（POP）延伸到工业计量（MetroY）与自动化检测（Metrohub），海外众筹与电商渠道表现突出。","founded":"2014-05","scale":"约 300 人","website":"https://www.revopoint3d.com","ai_summary":"一句话：这家公司把三维扫描仪做成了「消费电子产品」——几千块就能买一台扫手办、扫人像。同时它也做工业级的 MetroY 系列，精度到 0.015mm，用来检测零件。它的 POP 4 还把 AI 物体分割和 3DGS 真实感建模直接塞进了扫描仪。","categories":["扫描仪","三维检测","消费级应用"],"enabled":true},
  {"id":"w-com-jimuyida","type":"company","name":"积木易搭","keywords":["积木易搭","Jimuyida","Magic Swift","3D扫描仪","文物数字化"],"region":"国内","products":"Magic Swift 系列手持扫描仪、箱式扫描仪、3D 数字化服务平台","intro":"深圳的三维数字化企业，2015 年成立，产品覆盖手持与箱式扫描设备，在文物数字化、电商建模、教育实训等场景有较多落地案例。","founded":"2015-06","scale":"约 300 人","website":"https://www.jimuyida.com","ai_summary":"一句话：这家公司专做「把东西扫进电脑」的设备，从能放进背包的手持扫描仪到一键出模的箱式扫描舱都有。博物馆拿它给文物建档，电商拿它给商品做三维展示，学校拿它做实训教具。","categories":["扫描仪","文物数字化","电商建模"],"enabled":true},
  {"id":"w-com-creality","type":"company","name":"创想三维","keywords":["创想三维","Creality","CR-Scan","Otter","3D打印"],"region":"国内","products":"CR-Scan 系列扫描仪、Otter 便携扫描仪、Ender/K 系列 3D 打印机","intro":"深圳的消费级 3D 打印与扫描企业，2014 年成立，以「扫描—建模—打印」闭环覆盖创客、教育与小型工作室市场，全球消费级 3D 打印机出货量领先。","founded":"2014-03","scale":"约 2000 人","website":"https://www.creality.com","ai_summary":"一句话：这家公司让人「几千块就能在家扫一个东西、再打印出来」。它主业是消费级 3D 打印机，顺带做扫描仪（CR-Scan、Otter），两头一接就是完整的个人制造流程。对创客和学校来说，这是最省事的入门组合。","categories":["扫描仪","3D打印","消费级应用"],"enabled":true},
  {"id":"w-com-blackboxcv","type":"company","name":"非白三维（BlackboxCV）","keywords":["非白三维","BlackboxCV","锋800","先驱者F-1","茹方军"],"region":"国内","products":"锋系列（锋 800 第四代计量级）、锐系列、极-30 / 极-one、MangoFree 工业级、先驱者 F-1、风行者 X-1","intro":"杭州余杭的三维重建与三维机器视觉底层研发公司，2015 年 11 月由茹方军创立，起点是梦想小镇一间 28 平方米的房间。团队来自微软亚洲研究院、浙大 CAD 与光电两个国家重点实验室。自研编解码与底层算法，攻克了传统时序结构光不能手持扫描的难题，称重建速度 90 毫秒。2025 年 6 月第 4 代计量级激光扫描仪锋系列把 800 万分辨率首次带入手持设备。全球 15 国经销商，在德国杜塞尔多夫设欧洲总部，奔驰、奥迪、西门子等产线在用。","founded":"2015-11","scale":"约 40 人（半数为研发）","website":"http://www.blackboxcv.cn","ai_summary":"杭州一家专攻三维扫描底层算法的公司，从 28 平米小房间做到 15 个国家有经销商。它的看点是「全栈自研」——从光学模组、芯片到算法都自己做，2022 年完成工业芯片国产化，把进口 50 万元的手持激光扫描仪打到 7-8 万元。","categories":["扫描仪","三维重建","机器视觉"],"enabled":true},
  {"id":"w-com-insvision","type":"company","name":"启源视觉（INSVISION）","keywords":["启源视觉","INSVISION","AlphaScan","AlphaVista","V-Track","Apex 3D"],"region":"国内","products":"AlphaScan、AlphaVista、V-Track 跟踪式扫描系统、BetaScan Elite S1、AlphaAutoScan-400、AlphaProjector、Apex 3D 手持扫描仪","intro":"2021 年 10 月成立于杭州余杭的国家高新技术企业，主打「AI 计量级三维视觉」，用深度学习算法做工业精度。产品线覆盖手持激光、蓝光结构光、跟踪式与自动化扫描，BetaScan Elite S1 最高精度 0.020mm、830 万次测量/秒。自称全国四家、全球六家手持式工业三维扫描产品提供商之一，服务覆盖美、德、意、日、韩等 12 国。2026 年 9 月 28 日发布 Apex 3D 工业级手持扫描仪。","founded":"2021-10","scale":"约 56 人（2025 年报参保）","website":"https://insvision3d.com","ai_summary":"杭州余杭一家做工业三维扫描仪的新公司，成立才四年多，但产品线铺得很全：手持激光、蓝光、跟踪式、自动化检测站都有。它的差异点是拿深度学习做精度补偿，主打量测算得准又便宜，和先临、思看抢同一块工业检测市场。","categories":["扫描仪","三维检测","工业计量"],"enabled":true},
  {"id":"w-com-robosense","type":"company","name":"速腾聚创","keywords":["速腾聚创","RoboSense","Active Camera","AC2","激光雷达"],"region":"国内","products":"车载与机器人激光雷达、Active Camera 空间相机（AC1/AC2）、灵巧手与力控模组","intro":"深圳的激光雷达上市公司，2014 年成立，车载 ADAS 激光雷达全球主要供应商之一；2025 年起以 Active Camera 切入空间相机，产品矩阵扩展至机器人「眼睛、皮肤、肌肉」三类核心零部件。","founded":"2014-08","scale":"约 2000 人","website":"https://www.robosense.ai","ai_summary":"一句话：这家公司给汽车和机器人装「激光眼睛」，测距准、不怕黑。它最早做车载激光雷达，2025 年推出 Active Camera 空间相机，把激光雷达和相机合成一个模组，直接输出带颜色的三维数据——机器人用它看路、避障、抓东西。","categories":["激光雷达","空间智能","具身智能"],"enabled":true},
  {"id":"w-com-seyond","type":"company","name":"Seyond 图达通","keywords":["Seyond","图达通","Innovusion","猎鹰","Falcon","灵雀","Robin"],"region":"国内","products":"猎鹰 Falcon 系列（1550nm 长距）、灵雀 Robin 系列（905nm/940nm 广角）、OmniVidi 软件平台","intro":"图像级激光雷达厂商。2016 年以 Innovusion 之名在硅谷成立，2023 年 12 月更名 Seyond，在硅谷、苏州、上海设研发中心，苏州、德清、平湖建车规级产线。2025 年 12 月 10 日以 De-SPAC 方式登陆港交所主板（02665.HK），募资约 10.3 亿港元，是港交所第三家 De-SPAC 上市公司。2024 年交付约 23 万台，按 ADAS 激光雷达销售收入计全球第四。","founded":"2016-11","scale":"约 1000+ 人（全球）","website":"https://www.seyond.cn","ai_summary":"给蔚来等车企供激光雷达的苏州公司，最早把 1550 纳米长距激光雷达做到量产，全球率先同时跑通 1550nm 和 905nm 两条路线。2025 年底在港股上市，但约九成收入来自蔚来一家，客户集中度是它最大的隐忧。","categories":["激光雷达","三维感知","车载"],"enabled":true},
  {"id":"w-com-orbbec","type":"company","name":"奥比中光","keywords":["奥比中光","Orbbec","Gemini 330","深度相机","3D视觉感知"],"region":"国内","products":"Gemini 系列深度相机、Astra 系列、工业三维测量模组、具身智能数据采集设备","intro":"深圳的 3D 视觉感知上市公司（科创板 688322），2013 年成立，覆盖结构光、iToF、dToF、双目、LiDAR 与工业三维测量六条技术路线，是机器人「眼睛」的重要国产供应商。","founded":"2013-01","scale":"约 1000 人","website":"https://www.orbbec.com.cn","ai_summary":"一句话：这家公司给机器人、扫地机、刷脸支付设备造「三维眼睛」。它做的深度相机能算出每个像素离镜头多远，让机器知道东西在哪、有多大。2026 年它的机器人客户超过一千家，还和多家具身智能公司签了万台级采购协议，是国产 3D 视觉出货量最大的厂商之一。","categories":["深度相机","三维视觉","具身智能"],"enabled":true},
  {"id":"w-com-chcnav","type":"company","name":"华测导航","keywords":["华测导航","CHCNAV","Huace","RS10","三维激光扫描"],"region":"国内","products":"GNSS 接收机、RS 系列手持三维激光扫描仪、无人机航测系统、变形监测方案","intro":"上海的测绘地理信息上市公司（300627），2003 年成立，以高精度 GNSS 起家，产品线延伸至手持 SLAM 扫描、无人机航测与位移监测，是国内测绘装备的主力厂商之一。","founded":"2003-09","scale":"约 2000 人","website":"https://www.huace.cn","ai_summary":"一句话：这家公司卖「在户外精准知道自己在哪」的设备——从测地界的 GNSS 接收机，到拿着走一圈就能扫出三维点云的手持设备。修路、建桥、矿山、地质灾害监测都用它的东西，是把测绘级精度做到工程队买得起的代表厂商。","categories":["扫描仪","测绘装备","无人机航测"],"enabled":true},
  {"id":"w-com-hitarget","type":"company","name":"中海达","keywords":["中海达","Hi-Target","三维激光","RTK","测绘"],"region":"国内","products":"RTK/GNSS 接收机、三维激光扫描仪、无人机航测、海洋测绘与监测方案","intro":"广州的测绘与地理信息上市公司（300177），1999 年成立，业务覆盖高精度定位装备、三维激光扫描、无人机航测与行业解决方案，是国内测绘仪器老牌厂商。","founded":"1999-03","scale":"约 2000 人","website":"https://www.hi-target.com.cn","ai_summary":"一句话：这是一家做了二十多年测绘仪器的公司，从 RTK 测量杆到三维激光扫描仪都做。工程队拿它的设备去测地形、测土方、做竣工测量，是传统测绘走向三维采集的典型代表。","categories":["扫描仪","测绘装备","无人机航测"],"enabled":true},
  {"id":"w-com-southsurvey","type":"company","name":"南方测绘","keywords":["南方测绘","South Surveying","SouthGNSS","南方三维激光","SA130"],"region":"国内","products":"全站仪、RTK、三维激光扫描仪（SA130 / MS100）、无人机航测、ME 测量系统、SouthMap 成图软件","intro":"1989 年创立于广州的测绘装备龙头，1995 年研制出国产第一台全站仪，打破进口垄断。现有 30 家省级分公司、100 余家地市级机构、9 家海外机构，员工约 3500—3800 人，国内市场综合占有率 60% 以上，产品出口 100 多个国家和地区。近年以三维激光、无人机航测、实景三维切入空间信息赛道，2026 年 9 月参加 INTERGEO 2026。","founded":"1989-01","scale":"约 3500—3800 人","website":"https://www.southsurvey.com","ai_summary":"国内测绘仪器的「老大哥」，全站仪、RTK 这些工地常用设备大量出自它手，国内市场占有率六成以上。现在也做三维激光扫描和无人机航测，是实景三维中国项目里绕不开的国产装备供应商。","categories":["测绘装备","三维激光","实景三维"],"enabled":true},
  {"id":"w-com-greenvalley","type":"company","name":"数字绿土","keywords":["数字绿土","GreenValley","LiDAR","背包雷达","林业调查"],"region":"国内","products":"背包式/无人机载激光雷达系统、LiBackpack、点云处理软件 LiDAR360","intro":"北京的激光雷达测绘企业，2012 年成立，主打背包式与无人机载激光扫描系统及点云处理软件，在林业调查、电力巡检、地形测绘等场景应用广泛。","founded":"2012-09","scale":"约 400 人","website":"https://www.greenvalley-international.com","ai_summary":"一句话：这家公司让人「背着雷达走一圈」就能把一片林子或一条线路扫成三维点云。它的背包式设备不用 GPS 也能靠 SLAM 建图，配套的 LiDAR360 软件能自动算出树高、胸径、电力线离树多远——林业和电力巡检的刚需。","categories":["激光雷达","点云","测绘装备"],"enabled":true},
  {"id":"w-com-supermap","type":"company","name":"超图软件","keywords":["超图","SuperMap","GIS","三维GIS","CIM"],"region":"国内","products":"SuperMap GIS 基础平台、三维 GIS、CIM 平台、时空大数据平台","intro":"北京的地理信息系统软件企业，1997 年成立，SuperMap GIS 平台覆盖二三维一体化、CIM 与时空大数据，是城市级数字孪生底座的国产主力。","founded":"1997-06","scale":"约 4000 人","website":"https://www.supermap.com","ai_summary":"一句话：这家公司做的是「装地图的底座」——城市里的建筑白模、地下管网、实时传感器数据，都要塞进它的 GIS 平台里才能一起看、一起算。国内很多城市的 CIM 平台和实景三维系统，底层用的就是它。","categories":["GIS平台","数字孪生","空间智能"],"enabled":true},
  {"id":"w-com-pix4d","type":"company","name":"Pix4D","keywords":["Pix4D","摄影测量","无人机建模","Pix4Dmatic","Pix4Dsurvey"],"region":"海外","products":"Pix4Dmatic、Pix4Dmapper、Pix4Dsurvey、Pix4Dcatch（手机扫描）","intro":"瑞士洛桑的摄影测量软件公司，2011 年从 EPFL 分拆成立，是无人机航测与实景三维建模的主流软件之一，产品线覆盖航空三角测量、点云编辑与 CAD 交付。","founded":"2011-06","scale":"约 200 人","website":"https://www.pix4d.com","ai_summary":"一句话：这家公司做的是「把无人机拍的一堆照片拼成精确三维模型」的软件。测绘队飞完一圈，把照片丢进 Pix4D，几小时后就得到带坐标的三维模型和正射影像——工程验收要的就是这个。","categories":["摄影测量","重建方案","无人机航测"],"enabled":true},
  {"id":"w-com-trimble","type":"company","name":"Trimble","keywords":["Trimble","天宝","X9","GNSS","测绘"],"region":"海外","products":"GNSS 接收机、X9 扫描仪、无人机航测、建筑与工程软件（Tekla、SketchUp）","intro":"美国测绘与工程科技公司，1978 年成立，业务覆盖高精度定位、三维扫描、农机自动驾驶与建筑全流程软件，是全球测绘与工程数字化的基础设施级厂商。","founded":"1978-11","scale":"约 1.2 万人","website":"https://www.trimble.com","ai_summary":"一句话：这家公司做「工程现场的一切定位与测量」——从测量员的 GPS 杆，到能背着走的三维扫描仪，再到把扫描数据变成施工模型的软件。修一条高铁、建一栋楼，从放线到验收都可能用到它的东西。","categories":["测绘装备","扫描仪","数字孪生"],"enabled":true},
  {"id":"w-com-hexagon","type":"company","name":"Hexagon（Leica Geosystems）","keywords":["Hexagon","Leica","BLK2GO","BLK ARC","徕卡","测量"],"region":"海外","products":"Leica BLK 系列便携扫描仪、BLK2GO 手持扫描、全站仪、CMM 与工业计量方案","intro":"瑞典的测量与工业软件集团（旗下 Leica Geosystems 为测绘主体），业务覆盖大地测量、三维激光扫描、工业计量与智能制造软件，BLK 系列把手持扫描推向建筑与公共安全市场。","founded":"1992-01","scale":"约 2 万人","website":"https://hexagon.com","ai_summary":"一句话：这是测绘界的「老大哥」之一，徕卡的全站仪、三维扫描仪在全球工地随处可见。它的 BLK2GO 拿着走一圈就能扫出一栋楼的三维模型，配合软件直接出图——精度和数据可信度是它最硬的招牌。","categories":["扫描仪","测绘装备","三维检测"],"enabled":true},
  {"id":"w-com-agisoft","type":"company","name":"Agisoft（Metashape）","keywords":["Agisoft","Metashape","PhotoScan","摄影测量","SfM"],"region":"海外","products":"Agisoft Metashape（原 PhotoScan）、点云与网格重建、无人机与近景摄影测量","intro":"俄罗斯的摄影测量软件公司，2010 年前后成立，Metashape 是全球使用最广的 SfM/MVS 重建软件之一，以一次性授权、离线运行、支持大规模影像集著称。","founded":"2010-01","scale":"约 50 人","website":"https://www.agisoft.com","ai_summary":"一句话：这是「照片变三维」最经典的软件，很多测绘、考古、文物团队的第一套重建工具就是它。一次买断、能离线跑、不依赖云，所以数据敏感的政府项目特别爱用。","categories":["摄影测量","重建方案","开源工具"],"enabled":true},
  {"id":"w-com-matterport","type":"company","name":"Matterport","keywords":["Matterport","Pro3","数字孪生","房产三维","空间数字化"],"region":"海外","products":"Pro3 相机、Matterport 空间数字化平台、Property Intelligence 数据分析","intro":"美国的空间数字化平台公司，2011 年成立，以「扫描即生成可浏览的三维空间」著称，在房产、建筑、保险与设施管理领域建立了规模最大的空间数据平台之一。","founded":"2011-05","scale":"约 500 人","website":"https://matterport.com","ai_summary":"一句话：这家公司是「网上看房」的幕后功臣——经纪人拿它的相机扫一遍房子，客户就能在网页里像玩游戏一样走进去看。它积累了海量的室内空间数据，现在正把这些数据卖给做空间 AI 和机器人训练的公司。","categories":["重建方案","数字孪生","房地产科技"],"enabled":true},
  {"id":"w-com-navvis","type":"company","name":"NavVis","keywords":["NavVis","VLX","M6","移动扫描","室内数字孪生"],"region":"海外","products":"NavVis VLX 可穿戴移动扫描系统、M6 推车式扫描仪、NavVis IVION 平台","intro":"德国慕尼黑的移动测绘公司，2013 年成立（源自 TUM），以「边走边扫」的 SLAM 移动扫描系统与 IVION 三维可视化平台切入建筑、厂房与室内数字孪生市场。","founded":"2013-02","scale":"约 300 人","website":"https://www.navvis.com","ai_summary":"一句话：这家公司让「扫一栋大楼」从几天变成几小时——背上它的设备正常走路就行，不用一站一站架设扫描仪。扫完的数据上传到平台，客户在浏览器里就能量尺寸、做标注、和 BIM 模型比对。","categories":["扫描仪","SLAM","数字孪生"],"enabled":true},
  {"id":"w-com-niantic-spatial","type":"company","name":"Niantic Spatial","keywords":["Niantic Spatial","Scaniverse","空间智能","VPS","地理空间"],"region":"海外","products":"Scaniverse（手机 3D 扫描 App）、大规模地理空间模型（LGM）、视觉定位系统（VPS）","intro":"美国空间智能公司，2025 年从 Niantic 分拆独立，整合 Scaniverse 与 Pokémon GO 时代积累的地理空间数据，构建大规模地理空间模型与视觉定位服务。","founded":"2025-01","scale":"约 200 人","website":"https://www.nianticspatial.com","ai_summary":"一句话：这家公司手里有几亿人用手机「顺手扫」出来的真实世界数据——因为 Pokémon GO 玩家走了十年。现在它把这些数据训成「地理空间大模型」，让机器知道自己在世界上的哪个位置、周围长什么样。Scaniverse 就是它给普通人的免费扫描 App。","categories":["空间智能","重建方案","消费级应用"],"enabled":true},
  {"id":"w-com-worldlabs","type":"company","name":"World Labs","keywords":["World Labs","Marble","Atlas","李飞飞","世界模型"],"region":"海外","products":"Marble（文生三维世界）、Atlas（多模态世界模型，支持机位控制）、空间智能 API","intro":"美国旧金山的空间智能公司，2024 年 4 月由李飞飞创立，团队约 70 人，核心产品 Marble 与 Atlas；2026 年 9 月 AMD 宣布以约 82 亿美元全股票收购，预计年底交割。","founded":"2024-04","scale":"约 70 人","website":"https://www.worldlabs.ai","ai_summary":"一句话：李飞飞办的公司，目标是让 AI「理解并生成三维世界」。你写一句话或给几张照片，它就能生成一个能走进去的三维场景（Marble），新版 Atlas 还能让你直接指定相机怎么运动。2026 年 AMD 花 82 亿美元把它买下，买的是下一代 AI 要用的「世界模型」。","categories":["空间智能","世界模型","生成式3D"],"enabled":true},
  {"id":"w-com-ezxr","type":"company","name":"易现 EZXR","keywords":["易现","EZXR","易现先进科技","易现云图","VPS 空间建图"],"region":"国内","products":"AR 云平台、易现云图 VPS（空间建图 / 视觉定位 / 内容锚定）、灵境工坊、EZXR AR Glasses 开源 AI 眼镜","intro":"杭州萧山的空间计算与全栈 AR 公司，前身是 2011 年建于网易杭州研究院的网易人工智能事业部，2015 年整建制切入 AR。核心能力是空间理解 + 视觉定位：围绕空间建图、VPS 定位与内容锚定，为园区、文旅、商业空间搭数字体验底座。研发 60 余人、硕博占比超 60%，拥有浙江省增强现实领域唯一的省级工程技术研究中心，多次入选杭州准独角兽榜单。","founded":"2011-01","scale":"研发 60+ 人","website":"https://www.ezxr.com","ai_summary":"网易 AI 事业部独立出来的 AR 公司，做的是「让数字内容知道自己在现实中的位置」——先给空间建图，再用视觉定位把虚拟物体钉在正确位置。文旅夜游、商场导览用的比较多，横店灯会、妈祖印象的 AR 效果就是这类技术。","categories":["空间计算","AR","视觉定位"],"enabled":true},
  {"id":"w-com-manycore","type":"company","name":"群核科技（酷家乐）","keywords":["群核科技","Manycore","酷家乐","空间智能","3D 云设计"],"region":"国内","products":"酷家乐 3D 云设计平台、Coohom 海外版、空间智能平台 SpatialVerse","intro":"2011 年成立于杭州的空间智能公司，旗下酷家乐是国内家居云设计的头部平台。2025 年在港交所上市（00068.HK），2026 年中报营收约 4.05 亿元、订阅服务占 97%。员工约 872 人，累计发明专利 240 项。近年从「设计工具」转向「空间智能」，用海量 3D 场景数据训练空间理解模型，是杭州空间智能赛道市值最高的标的之一。","founded":"2011-11","scale":"约 872 人（港股上市）","website":"https://www.kujiale.com","ai_summary":"做酷家乐的那家公司——装修设计师用的 3D 云设计软件，拖拖拽拽就能出效果图。它真正值钱的不是软件，而是十几年攒下的海量 3D 空间数据，现在拿这些数据训练空间智能模型，等于从「画房子」转型「理解空间」。","categories":["空间智能","3D 云平台","设计软件"],"enabled":true},
  {"id":"w-com-meshy","type":"company","name":"Meshy","keywords":["Meshy","Meshy AI","Meshy 3D"],"region":"海外","products":"文生 3D / 图生 3D、AI 贴图（PBR）、自动绑定与动画、3D Agent、Smart Topology、API / MCP","intro":"生成式 3D 资产平台的头部玩家。2021 年由 MIT 博士胡渊鸣（Taichi 编程语言作者）创立，前身 Taichi Graphics，总部美国 Sunnyvale，北京有大规模团队。2026 年 7 月 21 日完成近 4 亿美元 B 轮、估值 15 亿美元，为 AI 3D 领域迄今最大单轮融资，由 IDG 资本、经纬中国、Monolith 联合领投。注册用户超 1200 万、累计生成超 1 亿个模型，ARR 同比增长约 12 倍。","founded":"2021-06","scale":"约 142 人","website":"https://www.meshy.ai","ai_summary":"一句话或一张图，一分钟生成一个能直接用的 3D 模型，主要卖给游戏公司和 3D 打印玩家，客户里有网易、Nexon、拓竹、创想三维。它不是「重建现实」而是「凭空造物」，和扫描重建是两条路线，但在 3D 内容供给上正面竞争。","categories":["3D 生成","AI 建模","内容生产"],"enabled":true},
  {"id":"w-com-backflip","type":"company","name":"Backflip AI","keywords":["Backflip","Backflip AI","CAD Copilot","scan to CAD","扫描转 CAD"],"region":"海外","products":"CAD Copilot（扫描转参数化 CAD）、Autodesk Fusion 插件、Web 应用导出 STEP","intro":"2024 年底由 Markforged 创始人 Greg Mark 与 David Benhaim 在旧金山创立。2026 年 8 月发布 CAD Copilot，把三维扫描的网格数据转成带完整特征树的可编辑参数化 CAD 模型，输出拉伸、旋转、阵列、倒角、圆角等真实建模操作而非三角面片。官方称单件逆向成本从约 1500 美元降到约 10 美元、耗时从数天缩到几分钟。已完成 3000 万美元 A 轮，a16z 与 NEA 联合领投。","founded":"2024-11","scale":"约 30—50 人","website":"https://backflip.ai","ai_summary":"解决制造业一个老大难：零件坏了没图纸，扫描出来只是一堆三角面片，改不动。它把扫描结果直接变成能拉伸、能倒角的 CAD 模型，工程师打开就能改，价格从请人逆向的 1500 美元降到 10 美元。","categories":["逆向工程","CAD","AI 建模"],"enabled":true},
  {"id":"w-com-playcanvas","type":"company","name":"PlayCanvas（SuperSplat）","keywords":["PlayCanvas","SuperSplat","WebGL","WebGPU","3DGS 编辑器"],"region":"海外","products":"PlayCanvas Web 3D 引擎、SuperSplat 3DGS 编辑器、Web 端高斯渲染方案","intro":"英国伦敦的 Web 3D 引擎公司（被 Snap 收购），其开源项目 SuperSplat 是 3DGS 领域最主流的网页端编辑器，2026 年完成 WebGPU 重写并加入 WebMCP 智能体接口。","founded":"2011-06","scale":"约 20 人","website":"https://playcanvas.com","ai_summary":"一句话：它做了一个「网页版的高斯场景编辑器」——不用装软件，把 3DGS 文件拖进浏览器就能裁剪、去噪、调色、发布。2026 年它还让 AI 智能体可以直接操作它，等于把「清理扫描垃圾」这种重复劳动交出去了。","categories":["开源工具","重建方案","Web3D"],"enabled":true},
  {"id":"w-com-insta360","type":"company","name":"影石创新（Insta360）","keywords":["影石","Insta360","全景相机","X5","空间记录"],"region":"国内","products":"全景相机（X 系列）、运动相机（GO/Ace）、手机云台、全景视频转 3D 空间方案","intro":"深圳的全景与运动影像公司，2015 年成立，科创板上市；2026 年与麒砺创新（Remy）合作，在 App 内把全景视频直接转成可交互的三维空间。","founded":"2015-07","scale":"约 2000 人","website":"https://www.insta360.com","ai_summary":"一句话：这家公司做「先拍下来、再选角度」的全景相机——拍的时候不用管构图，后期随便转。它和 Remy 合作后，全景视频可以直接变成能走进去的三维空间，等于把大场景三维采集的门槛降到了「举着相机转一圈」。","categories":["全景相机","空间智能","消费级应用"],"enabled":true},
  {"id":"w-com-kiri","type":"company","name":"麒砺创新（Remy / KIRI Engine）","keywords":["麒砺创新","KIRI Innovations","Remy","KIRI Engine","3D空间记录"],"region":"国内","products":"Remy（鸿蒙生态 3D 空间记录 App）、KIRI Engine（面向专业创作者的三维重建 App）","intro":"北京亦庄的纯视觉三维重建公司，2021 年成立，两条产品线：面向大众的 Remy 与面向专业创作者的 KIRI Engine；2026 年完成数亿元 A 轮系列融资，投资方含华为哈勃、东证资本、同创伟业等。","founded":"2021-03","scale":"约 30-50 人","website":"https://www.kiriengine.app","ai_summary":"一句话：这家公司让人「拿手机拍一段视频，就得到一个能转着看的三维空间」。面向普通人的 App 叫 Remy，2025 年 10 月在鸿蒙首发，9 天用户破百万、累计约 280 万；面向专业玩家和商业客户的叫 KIRI Engine，海外专业用户超 200 万。它还和影石 Insta360 合作，把全景视频直接转成可交互的三维空间。","categories":["扫描仪","重建方案","空间智能","消费级应用"],"enabled":true},
  {"id":"w-com-dexmal","type":"company","name":"跨维智能","keywords":["跨维智能","Dexmal","UNITAS","三维世界模型","具身智能"],"region":"国内","products":"UNITAS 三维世界动作模型、Sim2Real 具身智能平台、合成数据服务","intro":"深圳的具身智能公司，以 Sim2Real 与三维世界模型为核心，2026 年 10 月发布 1.7B 参数的 UNITAS，把观察、动作与场景变化统一在三维物理空间中建模。","founded":"2021-06","scale":"约 200 人","website":"https://www.dexmal.com","ai_summary":"一句话：这家公司认为机器人该「先在三维世界里想清楚再动」，而不是对着图片猜动作。它做的 UNITAS 模型在虚拟基准上成功率 99.8%，在真实机器人上做整理书籍、装球这类活儿成功率约 85%，而且把代码开源了。","categories":["空间智能","具身智能","世界模型"],"enabled":true},
  {"id":"w-com-gracia","type":"company","name":"Gracia AI","keywords":["Gracia AI","Gracia","4DGS","4D Gaussian Splatting","体积视频"],"region":"海外","products":"4DGS 体积视频云处理管线、4DGS 编辑工作台、Unity / Unreal 插件、Vision Pro 与 Quest 原生播放","intro":"2023 年成立的 4D 高斯泼溅（4DGS）基础设施公司，总部伦敦，创始人 Andrey Volodin（Prisma 早期成员）与 Georgii Vysotskii。做的是动态场景的体积视频，采集、云端重建、剪辑到多端播放全栈打通。已用于 Karl Kani 4DGS 时装秀、PortAventura 主题乐园，2026 年推出 Vision Pro 版 4DGS 应用。累计融资约 290 万美元（2025 年 12 月一轮 170 万美元，EWOR 等参投）。","founded":"2023-11","scale":"11—50 人","website":"https://gracia.ai","ai_summary":"别人做静态 3DGS，它做会动的 4DGS——把真人真景拍成能任意角度回放的「体积视频」，卖给演唱会、时装秀、体育转播。技术难点是快速运动下的稳定性，它主打 50fps 素材也能慢放而不崩。","categories":["4DGS","体积视频","XR 内容"],"enabled":true},
  {"id":"w-com-faceunity","type":"company","name":"相芯科技（FaceUnity）","keywords":["相芯科技","FaceUnity","3D 人脸","数字人","虚拟形象"],"region":"国内","products":"FaceUnity 面部捕捉 SDK、3D 虚拟形象、数字人解决方案、AI 视频生成","intro":"2016 年成立于杭州拱墅的 3D 人脸与数字人技术公司，由浙大周昆教授团队参与创立。核心技术是从单张照片或视频重建高精度三维人脸、驱动表情与虚拟形象，广泛用于直播美颜、社交 Avatar、数字人客服。员工约 73 人，投资方包括陌陌、洪泰、东方富海等。与场景级三维重建不同，它聚焦「人脸」这一垂直方向。","founded":"2016-03","scale":"约 73 人","website":"https://www.faceunity.com","ai_summary":"杭州做「3D 人脸」的公司，你手机里那些把真人变成卡通形象的滤镜、直播时的表情驱动，背后可能就是它的 SDK。它不重建整条街，只重建一张脸，但做到能实时驱动、能商用，客户多是社交和直播平台。","categories":["三维人脸","数字人","实时驱动"],"enabled":true},
  {"id":"w-com-lanxin","type":"company","name":"蓝芯科技","keywords":["蓝芯科技","Lanxin Robotics","LX-MRDVS","3D 视觉传感器","威宝 VersaBot"],"region":"国内","products":"3D 视觉传感器（S/M/V/H 系列）、3D 视觉工业移动机器人、AMR 控制器、人形机器人威宝 VersaBot","intro":"2016 年成立于杭州余杭的 3D 视觉感知移动机器人公司，创始团队来自中科院、复旦、浙大。自研移动机器人深度视觉系统 LX-MRDVS，是国内最早做移动机器人 3D 视觉感知并规模量产的企业，打破了激光雷达在该领域的一统格局。2024 年推出纯视觉人形机器人 VersaBot，2026 年 8 月人形机器人专用底盘第 500 台下线。2025 年 4 月完成数亿元 C+ 轮融资，累计融资约 5.6 亿元。","founded":"2016-06","scale":"100—499 人","website":"https://www.lanxinrobotics.com","ai_summary":"给移动机器人装「眼睛」的杭州公司。别人用激光雷达，它用 3D 视觉相机加算法判断路和货物，成本更低。现在也做人形机器人整机，客户有华为、比亚迪、宁德时代、富士康，累计出货超一万台移动机器人。","categories":["3D 视觉传感器","机器人","具身智能"],"enabled":true},

  // ---- 2026-11 审计补充：本周新增情报涉及的公司 ----
  {"id":"w-com-speridlabs","type":"company","name":"Speridlabs","keywords":["Speridlabs","Sperid Labs","Idol","单图转3D","3D-DiT"],"region":"海外","products":"Idol（单图转 3DGS 开源模型，Apache-2.0）、Spatial AI 基础模型管线","intro":"西班牙的 Spatial AI 研究团队，定位为「让模型理解三维世界」的基础模型实验室。2026 年 10 月开源 Idol：一个从零预训练的 3D 扩散 Transformer，把单张物体图片直接生成为 3D 高斯泼溅，峰值显存 7.2GB，消费级显卡可跑，权重与代码全量 Apache-2.0 开放。","founded":"2025（未公开确认）","scale":"小型研究团队（数十人以内）","website":"https://speridlabs.com","ai_summary":"一句话：这是一家西班牙的小型 AI 实验室，专攻「让 AI 真正理解三维世界」。它做的最出圈的事叫 Idol——你给一张物体的照片，它几秒钟就能变出一个能转着看的三维模型，而且不需要昂贵的专业显卡，一张游戏卡就能跑，代码还全部免费公开。它的野心不止于生成单个物体，而是想做一个「三维世界的基础模型」。","categories":["生成式3D","3DGS","基础模型"],"enabled":true},
  {"id":"w-com-genrobot","type":"company","name":"简智机器人（GenRobot）","keywords":["简智机器人","GenRobot","简智新创","Gen DAS","DAS Dex","无本体数据"],"region":"国内","products":"Gen DAS 多模态数据采集终端（Ego / Fingers / Gripper / Dex）、Gen Matrix 数据治理平台、Gen ADP 众包数据产线","intro":"北京的具身智能数据与评测基础设施公司，2025 年 5 月成立，不造机器人本体，专做人类操作数据的规模化采集与加工。核心硬件 Gen DAS Dex 采用仿生轻量化外骨骼，支持人手 23 个自由度检测，指尖磁触觉灵敏度 0.05N、空间分辨率 1mm。2026 年第三季度完成 1 亿美元 A+ 轮，累计融资超 3 亿美元。","founded":"2025-05","scale":"约 100—200 人（估）","website":"https://www.genrobot.ai","ai_summary":"一句话：这家公司不造机器人，专门「教机器人干活的数据」。它做一套穿戴设备，让人在工厂、家里、仓库正常干活，同时把手的动作、力度、触感全录下来，再加工成能训练机器人的数据卖给模型公司。2026 年它一个季度能交付上百万小时的有效数据，是这条赛道上融资最多的公司之一。","categories":["具身智能","数据采集","空间数据"],"enabled":true},
  {"id":"w-com-roboscience","type":"company","name":"RoboScience 机器科学","keywords":["机器科学","RoboScience","Visics","RoboMirage","VLOA"],"region":"国内","products":"Visics 通用具身大模型、RoboMirage 可微多模态物理仿真引擎、REX G1 轮式仿人形机器人","intro":"2024 年 12 月成立的通用具身智能公司，走跨本体泛化路线，VLOA 架构在视觉—语言—动作之间插入「物体」层，把操作任务转译为对物体三维运动轨迹的理解。用「仿真 + 视频」双数据飞轮把单条训练数据成本压到 0.05 元，视频训练数据 2026 年 10 月达 400 万小时。2026 年 11 月 2 日完成数亿元 A2 轮，累计融资超 10 亿元。","founded":"2024-12","scale":"约 200—400 人（估）","website":"https://www.roboscience.ai","ai_summary":"一句话：这家公司想让一个 AI 模型「换个机器人也能干活」。它的绝招是把操作任务翻译成「物体该怎么在三维空间里移动」，而不是死记某个机械臂的动作，所以换手、换机器人都能适配。为了省钱，它主要用仿真和视频造训练数据，号称一条数据只要五分钱。","categories":["具身智能","世界模型","仿真"],"enabled":true},
  {"id":"w-com-elegoo","type":"company","name":"爱乐酷（ELEGOO）","keywords":["爱乐酷","ELEGOO","M1 Ultra","消费级3D打印","手持扫描仪"],"region":"国内","products":"Mars / Saturn / Jupiter 系列光固化 3D 打印机、Neptune / Centauri 系列 FDM 打印机、M1 Ultra 手持 3D 扫描仪、激光雕刻机","intro":"2015 年成立于深圳的消费级 3D 打印品牌，产品销往近 80 个国家，2023 年销售额超 2 亿美元、员工 600 余人。2026 年 10 月 29 日发布首款手持式 3D 扫描仪 M1 Ultra（511g、最高精度 0.02mm、蓝光激光 + 红外结构光），从打印环节向上游三维采集延伸，补上「扫描—建模—打印」闭环。","founded":"2015","scale":"600+ 人","website":"https://www.elegoo.com","ai_summary":"一句话：这是深圳一家卖消费级 3D 打印机的公司，全球出货量很大。2026 年它做了台手持三维扫描仪，意思是「你想复制一个实物，先用它扫成模型，再直接打印出来」。它把扫描仪做到只有 511 克、精度 0.02 毫米，价格走消费级路线，抢的是入门用户的「扫描—打印」一条龙需求。","categories":["扫描仪","3D打印","消费级"],"enabled":true},
  {"id":"w-com-awomo","type":"company","name":"西湖数智（Awomo）","keywords":["西湖数智","Awomo","于开丞","世界模型","物理世界大模型","西湖大学"],"region":"国内","products":"Awomo 物理世界基座模型（预训练模型 Awomo-0.5）、物理交互轨迹数据集","intro":"2026 年初由西湖大学 AutoLab 孵化的物理世界基础模型公司，创始人于开丞（西湖大学工学院助理教授）。走「概念世界模型」路线：不生成像素，在抽象隐空间建立物理概念表征并重组推演。40 亿参数的 Awomo-0.5 在 RoboTwin-c2r、Physics-IQ、MolmoSpaces、Robocasa、Libero-Plus、RoboDojo Sim 六个榜单同时登顶。累计融资超亿元。","founded":"2026-01","scale":"初创团队（数十人）","website":"https://www.westlake-awomo.com","ai_summary":"一句话：这家公司做的是机器人的「物理大脑」——让 AI 真正懂「杯子推到桌边会掉下去」这种常识，而不是只会背题。它的模型只有 40 亿参数，却在六个国际机器人测试榜上同时拿了第一。按它的说法，以后小公司想定制自己领域的模型，不用采几百万小时数据，训练二三十个小时就够。","categories":["世界模型","具身智能","基础模型"],"enabled":true},

  // ---- 2026-11-03 第二轮审计补充 ----
  {
    "id": "w-com-ricoh",
    "type": "company",
    "name": "理光（Ricoh）",
    "keywords": ["理光", "Ricoh", "RICOH Digital Twin Workplace", "360相机建模", "Ricoh Theta"],
    "region": "海外",
    "products": "Theta 系列 360° 全景相机、RICOH Digital Twin Workplace 数字孪生平台、360° 影像 AI 三维建模技术",
    "intro": "1936 年创立的日本影像与办公设备巨头（东京证券交易所上市）。2026 年 10 月其「360° 相机影像 + AI 结构补全」三维建模技术在东京电力电网楼宇运维中投入运营：上传全景素材约半天生成精细 3D 模型（传统激光扫描需数天），AI 专门解决白墙、地板等少特征表面难以重建的问题。",
    "founded": "1936",
    "scale": "大型跨国企业（全球数万人）",
    "website": "https://www.ricoh.com",
    "ai_summary": "一句话：日本老牌相机厂商，现在用 360° 全景相机加 AI 补全做楼宇三维模型，半天出模、不用激光扫描仪，已在东京电力的电网运维里正式用起来。它代表「消费级采集硬件 + AI 补全」路线向大型基建场景的扩张。",
    "categories": ["数字孪生", "360°相机", "AI重建"],
    "enabled": true
  },
  {
    "id": "w-com-microvision",
    "type": "company",
    "name": "MicroVision",
    "keywords": ["MicroVision", "MVIS", "MOVIA", "MOVIA Pro", "边缘感知激光雷达"],
    "region": "海外",
    "products": "MOVIA Pro 短距激光雷达（片上感知、多回波）、MOVIA S、长距激光雷达与机载感知方案、感知软件框架",
    "intro": "纳斯达克上市（MVIS）的美国感知技术公司，总部华盛顿州，奥兰多设有生产基地。2026 年 10 月宣布下一代短距激光雷达 MOVIA Pro 量产出货：感知软件直接在传感器上运行（Linux 开放框架），点云在设备内处理为物体级信息，支持多回波与软件定义升级，面向无人机、智慧基础设施、仓储 AMR/AGV 与国防场景。",
    "founded": "1993",
    "scale": "中小型上市公司（数百人）",
    "website": "https://www.microvision.com",
    "ai_summary": "一句话：美国一家上市激光雷达公司，主打「会自己动脑的传感器」——它的短距激光雷达不吐原始点云，而是直接在雷达内部算出「哪里有障碍物」这样的结论交给机器人。2026 年 10 月这代产品已经量产发货。",
    "categories": ["激光雷达", "边缘AI", "机器人感知"],
    "enabled": true
  },
  {
    "id": "w-com-jushen",
    "type": "company",
    "name": "巨身智能",
    "keywords": ["巨身智能", "经纬系统", "浙江巨身", "机器人导航平台"],
    "region": "国内",
    "products": "经纬系统（机器人自主导航与多模态交互平台，18 模块）、巨身引擎原子动作库、垂直领域具身行业大模型",
    "intro": "浙江金华的具身智能公司（浙江巨身智能科技有限公司）。2026 年 10 月 29 日发布「经纬系统」：激光雷达与 IMU 紧耦合 SLAM（建图分辨率 0.05m/像素、单图 ≤800m²）、接入通义千问/DeepSeek 的多模态语音交互、Web 多机管理后台三大板块共 18 模块；原子动作库支持人形、四足、轮式本体跨机型复用。",
    "founded": "2020 年代初（未公开确认）",
    "scale": "区域集成商规模（估百人以内）",
    "website": "未公开官网",
    "ai_summary": "一句话：浙江金华一家做机器人「腿脚和嘴巴」的公司，2026 年 10 月发了一套叫经纬的系统：让机器人靠激光雷达自己认路、连着国产大模型听懂人话、后台统一管多台机器。走的是区域集成商路线，是激光雷达厂商的下游走量渠道样本。",
    "categories": ["SLAM", "具身智能", "机器人集成"],
    "enabled": true
  },
  {
    "id": "w-com-bambu",
    "type": "company",
    "name": "拓竹科技（Bambu Lab）",
    "keywords": [
      "拓竹",
      "Bambu Lab",
      "H3C",
      "H2D",
      "多色多材料 3D 打印"
    ],
    "region": "国内",
    "products": "H3C（9 个独立打印头 / 6 秒换头 / 标准套装 16499 元）、H2D 系列、X1 系列、AMS 自动供料系统",
    "intro": "深圳桌面 3D 打印整机厂商，全球消费级与准工业级市场头部玩家。2026 年 11 月 3 日发布旗舰 H3C：9 个独立打印头、6 秒完成换头、支持多色多材料连续打印，标准套装 16499 元。其产品线是三維重建下游「从模型到实体」的关键出口，也是扫描建模消费化的需求侧样本。",
    "founded": "2020 年",
    "scale": "全球化整机厂商（数千人量级，未公开确认）",
    "website": "https://bambulab.cn/",
    "ai_summary": "一句话：深圳这家公司把桌面 3D 打印机做成了「多喷头自动换枪」的机器，一个机器上 9 个打印头、6 秒换一个，售价 1.65 万元。它的意义在于给三维扫描出来的模型提供了「马上打成实物」的出口，是重建产业链的最后一公里。",
    "categories": [
      "3D 打印",
      "硬件整机",
      "消费级制造"
    ],
    "enabled": true
  },
  {
    "id": "w-com-henan-jt",
    "type": "company",
    "name": "河南交通发展研究院",
    "keywords": [
      "河南交通发展研究院",
      "河南省数字孪生路网",
      "公路资产数字化",
      "一物一码",
      "激光点云路网"
    ],
    "region": "国内",
    "products": "河南省普通公路数字孪生平台（覆盖 3.1 万公里路网，激光点云 1:1 建模，资产「一物一码」）",
    "intro": "河南省交通运输系统下属研究机构，承担省级公路数字化与养护决策支撑。2026 年 11 月建成省级数字孪生路网，覆盖 3.1 万公里普通公路，以车载激光点云完成 1:1 建模，路面病害、标牌、护栏乃至行道树逐件赋码，是省级尺度「实景三维 + 资产管理」落地的代表性案例。",
    "founded": "未公开",
    "scale": "省级交通科研机构",
    "website": "未公开官网",
    "ai_summary": "一句话：河南把全省 3.1 万公里公路用激光扫进了电脑，路上每个部件都有自己的编号，能在大屏上直接量尺寸、查病害。这类省级项目是国内激光点云重建最稳定的买单方之一。",
    "categories": [
      "数字孪生",
      "实景三维",
      "交通基建"
    ],
    "enabled": true
  },
  {
    "id": "w-com-jwinsights",
    "type": "company",
    "name": "集微咨询（JW Insights）",
    "keywords": [
      "集微咨询",
      "JW Insights",
      "爱集微",
      "激光雷达行业研究报告"
    ],
    "region": "国内",
    "products": "半导体与智能传感行业研究、市场规模数据库、《激光雷达行业研究报告》等年度报告",
    "intro": "爱集微旗下半导体与智能传感研究机构，长期追踪激光雷达、CIS、功率器件等赛道。2026 年 11 月 3 日发布《2026 年激光雷达行业研究报告》，给出中国市场 431.8 亿元（2026E）、华为 41.5% 份额等关键口径，是国内激光雷达产业数据的主要引用来源之一。",
    "founded": "2010 年代（爱集微体系内）",
    "scale": "行业研究机构",
    "website": "https://www.laoyaoba.com/",
    "ai_summary": "一句话：这家机构每年出一份激光雷达行业的「体检报告」，谁卖了多少、装到多少台车上、单价掉了多少，行业媒体基本都从这里抄数据。看它的口径变化，比看单条新闻更能判断行业拐点。",
    "categories": [
      "行业研究",
      "数据机构"
    ],
    "enabled": true
  },
  {
    "id": "w-com-amd",
    "type": "company",
    "name": "AMD",
    "keywords": [
      "AMD",
      "World Labs 收购",
      "数据中心 GPU",
      "MI 系列",
      "Physical AI 算力"
    ],
    "region": "海外",
    "products": "EPYC 服务器 CPU、Instinct MI 系列加速卡、ROCm 软件栈（2026 年宣布收购 World Labs）",
    "intro": "美国芯片厂商。2026 年 11 月 3 日财报电话会披露第三季度数据中心营收 85 亿美元、同比增 97%，并重申对 World Labs 的收购预计年底前交割——这是「三维/世界模型公司被算力厂商收编」的标志性交易，直接改变空间智能的算力归属格局。",
    "founded": "1969 年",
    "scale": "全球半导体巨头（2026Q3 数据中心单季 85 亿美元）",
    "website": "https://www.amd.com/",
    "ai_summary": "一句话：卖芯片的 AMD 把做世界模型的 World Labs 买了下来，交易年底前完成。这意味着世界模型这类「重建 + 生成」的重活，正在从创业公司变成芯片厂的算力附属品。",
    "categories": [
      "算力芯片",
      "世界模型",
      "并购"
    ],
    "enabled": true
  },
  {
    "id": "w-com-cas-hf",
    "type": "company",
    "name": "中科院合肥物质院智能机械研究所",
    "keywords": [
      "中科院合肥智能所",
      "合肥物质科学研究院",
      "LR-SGS",
      "MMD-SLAM",
      "ICRA 2026"
    ],
    "region": "国内",
    "products": "LR-SGS（激光反射率引导显著高斯泼溅）、MMD-SLAM（结构增强多元高斯视觉 SLAM）等重建算法",
    "intro": "中国科学院合肥物质科学研究院下属研究所，祝辉团队主攻三维重建与机器人感知。2026 年 11 月两篇论文被 ICRA 2026 接收，LR-SGS 入选最佳论文提名（据该所表述，机器人感知领域全球仅 3 篇），核心思路是用激光雷达反射率通道绕开光照依赖。",
    "founded": "建所于 1979 年前后（合肥智能机械研究所）",
    "scale": "国家级科研院所",
    "website": "http://www.iim.cas.cn/",
    "ai_summary": "一句话：国家队研究院在做「用激光的反射率当颜色线索」来重建夜间和复杂光照下的街道，比纯靠照片稳。这条路线对国内做自动驾驶数据闭环的公司很实用。",
    "categories": [
      "学术研究",
      "3DGS",
      "SLAM"
    ],
    "enabled": true
  },
  {
    "id": "w-tech-reflectance",
    "type": "tech",
    "name": "反射率通道重建",
    "keywords": [
      "反射率通道",
      "LiDAR 强度",
      "reflectance",
      "intensity image",
      "光照不变特征"
    ],
    "intro": "把激光雷达回波强度标定为与光照无关的「反射率图像」，作为 RGB 之外的第二纹理线索参与三维重建。核心价值是绕开夜间、逆光、隧道等低光场景的纹理失效问题，是 3DGS 与 NeRF 从「看照片」转向「看传感器物理量」的代表路线（LR-SGS 等）。",
    "enabled": true
  },
  {
    "id": "w-tech-native-color-lidar",
    "type": "tech",
    "name": "原生彩色激光雷达",
    "keywords": [
      "原生彩色激光雷达",
      "Rev8",
      "native color LiDAR",
      "硅片级彩色融合",
      "SPAD-SoC 彩色"
    ],
    "intro": "在传感器硅片层面直接完成颜色与三维点云的融合配准，而非事后用相机贴图的方案。优点是无配准误差、单帧即带色、端侧算力需求低，被 Ouster Rev8 作为差异化卖点；短板是产能爬坡慢、成本尚未摊薄，2026 年仍处早期交付阶段。",
    "enabled": true
  },
  {
    "id": "w-com-saer",
    "type": "company",
    "name": "赛尔智控",
    "keywords": [
      "赛尔智控",
      "手持三维激光扫描仪",
      "空间相机",
      "3D/4D 空间相机",
      "范恩强"
    ],
    "region": "国内",
    "products": "手持三维激光扫描仪（B 端累计出货近万台）、规划中的消费级 AI 原生 3D/4D 空间相机",
    "intro": "深圳硬件公司，2019 年 12 月成立，创始人范恩强。2026 年 11 月完成近亿元天使轮融资，资金用于产线扩建与消费级空间相机研发，计划 2027 年初开启众筹与交付。是词库中「消费级空间相机整机」这一空缺位的直接补齐者。",
    "founded": "2019 年 12 月",
    "scale": "天使轮近亿元；手持扫描仪累计出货近万台",
    "website": "https://www.saertech.com",
    "ai_summary": "一句话：一家做手持三维激光扫描仪的公司，把设备卖出了近万台，现在想把它做成普通人买得起的「空间相机」。如果 2027 年真做到千元级，三维采集就会从工程工具变成消费电子品类。",
    "categories": [
      "手持扫描",
      "空间相机",
      "融资"
    ],
    "enabled": true
  },
  {
    "id": "w-com-baidu",
    "type": "company",
    "name": "百度（Apollo / 萝卜快跑）",
    "keywords": [
      "百度",
      "Apollo World",
      "萝卜快跑",
      "自动驾驶世界模型",
      "虚拟路测"
    ],
    "region": "国内",
    "products": "Apollo 自动驾驶平台、萝卜快跑 Robotaxi、Apollo World 世界模型",
    "intro": "中国自动驾驶与基础模型厂商。2026 年 11 月首次公开 Apollo World 世界模型，把交通参与者全部建模为 AI 智能体，用于虚拟路测与长尾场景生成，宣称可实现「日行十万公里」规模的仿真验证。",
    "founded": "2000 年",
    "scale": "Robotaxi 规模化运营（具体车队规模以官方披露为准）",
    "website": "https://apollo.auto/",
    "ai_summary": "一句话：百度的世界模型不生成视频，而是让虚拟世界里的车和人「自己会开车、会走路」。这条路线的目标是替代真实路测里程，衡量标准是仿真场景够不够真。",
    "categories": [
      "自动驾驶",
      "世界模型",
      "仿真"
    ],
    "enabled": true
  },
  {
    "id": "w-com-ubtech",
    "type": "company",
    "name": "优必选（UBTech）",
    "keywords": [
      "优必选",
      "Thinker-Sim",
      "Thinker-GS",
      "具身智能仿真",
      "合成数据"
    ],
    "region": "国内",
    "products": "Walker 系列人形机器人、Thinker 具身智能模型族（Thinker-WM / Thinker-GS / Thinker-Sim）",
    "intro": "深圳人形机器人上市公司。2026 年 11 月公开 Thinker-Sim 仿真平台细节：用 Thinker-GS 对真实场景做高斯泼溅重建，再在其上批量合成机器人训练数据，单节点 8 卡日均产出约 390 小时仿真数据。是「Real2Sim2Real 数据工厂」在国内的落地样本。",
    "founded": "2012 年",
    "scale": "港股上市的人形机器人厂商",
    "website": "https://www.ubtrobot.com/",
    "ai_summary": "一句话：优必选不再靠人一遍遍演示教机器人，而是把真实房间扫成 3D 场景，在电脑里让机器人练上几百小时再回到现实。这条路的瓶颈不在算力，在于扫出来的场景够不够真。",
    "categories": [
      "具身智能",
      "仿真",
      "3DGS"
    ],
    "enabled": true
  },
  {
    "id": "w-com-inmo",
    "type": "company",
    "name": "影目科技（INMO）",
    "keywords": [
      "影目",
      "INMO",
      "INMO Future",
      "空间智能眼镜",
      "AI 眼镜"
    ],
    "region": "国内",
    "products": "INMO 系列 AI/AR 眼镜，2026 年 11 月发布 INMO Future 空间智能眼镜",
    "intro": "国内 AR 眼镜厂商。2026 年 11 月发布的 INMO Future 主打空间智能：双目 1080P、SLAM 厘米级定位、3 秒完成平面检测，把轻量 SLAM 与空间理解塞进眼镜形态，是「重建能力下沉到可穿戴终端」的代表产品。",
    "founded": "2020 年前后",
    "scale": "AR 眼镜整机厂商（出货与销量以官方披露为准）",
    "website": "https://www.inmoxr.com/",
    "ai_summary": "一句话：把 SLAM 和平面检测放进一副普通眼镜里。它的意义不在参数，而在于「空间理解」开始变成消费级终端的标配能力，而不是专业扫描仪的专属。",
    "categories": [
      "AR 眼镜",
      "SLAM",
      "空间智能"
    ],
    "enabled": true
  },
  {
    "id": "w-com-tirain",
    "type": "company",
    "name": "天润科技",
    "keywords": [
      "天润科技",
      "卫星影像反演建筑高度",
      "遥感变化检测",
      "发明专利",
      "实景三维"
    ],
    "region": "国内",
    "products": "遥感与实景三维数据处理服务、卫星影像三维建模算法",
    "intro": "国内测绘地理信息企业，业务覆盖实景三维中国、遥感影像处理。2026 年 11 月获两项发明专利授权，分别涉及「卫星影像反演建筑高度」的三维建模方法与基于强化学习的遥感变化检测，属算法专利而非产品发布。",
    "founded": "2000 年代",
    "scale": "测绘地理信息上市公司（北交所）",
    "website": "https://www.tirain.com",
    "ai_summary": "一句话：单张卫星图推不出楼有多高，天润的专利是想办法从阴影、视角差里把高度算出来。这类专利的价值在于让「没有航拍、没有激光雷达」的地方也能有三维底图。",
    "categories": [
      "遥感",
      "实景三维",
      "专利"
    ],
    "enabled": true
  },
  {
    "id": "w-tech-agent-world-model",
    "type": "tech",
    "name": "智能体驱动的世界模型",
    "keywords": [
      "智能体世界模型",
      "agent-based world model",
      "Apollo World",
      "行为闭环",
      "非脚本化场景"
    ],
    "intro": "把场景中的其他交通参与者/行人建模为具备感知—决策—行动闭环的 AI 智能体，使场景演化随主体动作动态变化，而非播放预录轨迹。与视频生成式世界模型的区别在于：后者的画面「看起来对」，前者的行为「逻辑上对」，更适合自动驾驶与具身智能的闭环训练。",
    "enabled": true
  },
  {
    "id": "w-tech-real2sim",
    "type": "tech",
    "name": "Real2Sim2Real 数据工厂",
    "keywords": [
      "Real2Sim2Real",
      "SimReady",
      "合成数据工厂",
      "Thinker-Sim",
      "场景重建再仿真"
    ],
    "intro": "先用三维重建（3DGS / 摄影测量 / 激光扫描）把真实场景搬进仿真器，再在仿真中批量生成带标注的训练数据，最后把策略迁回真机。价值在于把「数据采集成本」从人力密集型转为算力密集型；瓶颈在于重建场景的物理与视觉保真度，以及仿真到现实的域差。",
    "enabled": true
  },
{
      "id": "w-com-wuyuan",
      "type": "company",
      "name": "物原科技（TensorWorld）",
      "keywords": [
        "物原科技",
        "TensorWorld",
        "物理基础模型",
        "GeoPT",
        "吴海旭",
        "物理直觉"
      ],
      "region": "国内",
      "products": "TensorWorld 物理基础模型（研发中）；承袭 GeoPT 动力学提升式几何预训练路线",
      "intro": "北京物理世界模型创企，2026 年 7 月成立，2026-11-05 发布 TensorWorld 品牌并披露 1.05 亿美元种子轮。主打「物理基础模型」，强调物理规律在未见场景中的可迁移表征，而非像素级视频生成。",
      "founded": "2026-07",
      "scale": "未披露（注册资本 125 万元）",
      "website": "https://tensorworld.ai",
      "ai_summary": "一句话：一家 2026 年 7 月才成立的北京公司，成立四个月就拿到 1.05 亿美元种子轮，要做的是「懂物理规律的 AI」——不是画得像，而是算得对。",
      "categories": [
        "世界模型",
        "物理AI"
      ],
      "enabled": true
    },
{
      "id": "w-com-moxin",
      "type": "company",
      "name": "魔芯科技",
      "keywords": [
        "魔芯科技",
        "MoWorld",
        "4D世界模型",
        "摸小宠",
        "陈天润",
        "昇腾世界模型"
      ],
      "region": "国内",
      "products": "MoWorld 1.0 / 2.0 4D 世界模型；4D 高斯空间资产；端侧「摸小宠」应用",
      "intro": "国内 4D 世界模型厂商，MoWorld 系列完全基于华为昇腾算力训练与部署。2026-11-04 于乌镇峰会发布 MoWorld 2.0，输出可仿真、可实时渲染、可复用的 4D 高斯资产。官方称年内 5 轮融资累计 20 亿元、估值近 100 亿元。",
      "founded": "未披露",
      "scale": "未披露",
    "website": "http://www.kokoni.ltd",
      "ai_summary": "一句话：这家公司做的模型能「生成一个可以走进去、推一下会动」的三维空间，而且整套训练跑在国产昇腾芯片上，成本最低只有英伟达方案的 30%。",
      "categories": [
        "世界模型",
        "4D高斯",
        "国产算力"
      ],
      "enabled": true
    },
{
      "id": "w-com-movin",
      "type": "company",
      "name": "MOVIN",
      "keywords": [
        "MOVIN",
        "MOVIN TRACIN",
        "无标记动捕",
        "markerless motion capture",
        "机器人遥操作"
      ],
      "region": "海外",
      "products": "MOVIN TRACIN 无标记动捕系统（LiDAR + 相机 + 端侧 AI）",
      "intro": "韩国物理 AI 初创（2023 年成立），设备无需动捕服、标记点与专用摄影棚即可实时输出三维人体运动数据。客户含 Boston Dynamics、RAI Institute，为 NVIDIA SOMA 韩国唯一 Launching Adoption Partner。2026-11-05 披露约 750 万美元 A 轮。",
      "founded": "2023",
      "scale": "首年出货 200 余台，覆盖 20 多个国家",
      "website": "https://movin.ai",
      "ai_summary": "一句话：它做的设备不用穿动捕服、不用进摄影棚，站着动一动就能把全身动作变成三维数据，机器人的「模仿学习」正需要这种数据。",
      "categories": [
        "动作捕捉",
        "具身数据",
        "硬件"
      ],
      "enabled": true
    },
{
      "id": "w-com-fieldai",
      "type": "company",
      "name": "FieldAI",
      "keywords": [
        "FieldAI",
        "Field Foundation Models",
        "施工机器人",
        "通用自主层",
        "Kajima",
        "鹿岛建设"
      ],
      "region": "海外",
      "products": "Field Foundation Models 机器人通用自主软件；可挂载式自主单元",
      "intro": "美国加州尔湾的机器人「大脑」公司，不自造本体，而是把感知与自主决策软件装进可挂载单元。2026-11-05 与鹿岛建设宣布全面部署：一年 10 余个日本工地、逾 2000 次自主任务，用于巡场、360 照片与彩色点云采集、安保巡逻及灾后应急。",
      "founded": "未披露",
      "scale": "已适配约 30 种机型",
      "website": "https://www.fieldai.com",
      "ai_summary": "一句话：它给现成的机器人装一个「会自己看路、自己建图」的大脑盒子，鹿岛建设已经让装着它的机器人在日本 10 多个工地跑了 2000 多次。",
      "categories": [
        "机器人自主",
        "施工数字化",
        "SLAM"
      ],
      "enabled": true
    },
  {
    "id": "w-com-haiguang",
    "type": "company",
    "name": "海光信息（Hygon）",
    "keywords": [
      "海光",
      "Hygon",
      "深算三号",
      "DCU",
      "C86",
      "国产GPU",
      "国产算力"
    ],
    "region": "国内",
    "products": "深算系列 DCU（GPGPU 加速卡）、C86 系列通用处理器",
    "intro": "国产 CPU + GPGPU 双线厂商，DCU 对标英伟达数据中心 GPU，是国产大模型训练与推理的主要替代算力之一。2026-11-06 大晓机器人披露 Kairos 3.1 视频生成模型完成深算三号 DCU 与 C86 适配，480P 单卡 12.42 秒，对标性能由 62% 提升至 94.2%。",
    "founded": "2014",
    "scale": "未披露",
    "website": "https://www.hygon.cn",
    "ai_summary": "一句话：国产的 GPU 和 CPU 组合，现在能跑视频生成模型了，性能已经追到英伟达方案的九成多——三维与视频生成这类吃算力的活儿，多了一条不依赖进口的路。",
    "categories": [
      "国产算力",
      "GPGPU",
      "芯片"
    ],
    "enabled": true
  },
  {
    "id": "w-com-frameboy",
    "type": "company",
    "name": "World Labs（Frameboy / Atlas）",
    "keywords": [
      "Frameboy",
      "World Labs",
      "Atlas",
      "世界模型",
      "实时世界模型",
      "李飞飞"
    ],
    "region": "海外",
    "products": "Atlas 世界模型生成平台；Frameboy 实时世界模型运行形态；Viewfinder 视角约束工具",
    "intro": "李飞飞创办的世界模型公司，2026-11 被 AMD 以 82 亿美元收购。Atlas 从文本/图像生成可漫游三维场景；2026-11-06 发布 Frameboy，把实时世界模型做成浏览器可用的云端流式形态（最高 1440p / 15fps）。",
    "founded": "2024",
    "scale": "未披露",
    "website": "https://www.worldlabs.ai",
    "ai_summary": "一句话：这家公司能让 AI 现算出一个可走进去的三维世界，现在连等待都不用了——你在网页里走，它就在云端给你算下一帧。",
    "categories": [
      "世界模型",
      "实时渲染",
      "空间智能"
    ],
    "enabled": true
  },
  {
    "id": "w-com-moushen",
    "type": "company",
    "name": "眸深智能",
    "keywords": [
      "眸深智能",
      "深悟",
      "深枢",
      "深匣",
      "FWM",
      "家用世界模型",
      "具身原生模型",
      "神经符号记忆"
    ],
    "region": "国内",
    "products": "眸深·深悟 具身原生模型；家用世界模型 FWM（含长效记忆神经符号引擎）；眸深·深枢 Infra 架构（数据/仿真/模型配置/芯片部署/本体控制/场景交付六大管线）；眸深·深匣 端侧模组",
    "intro": "2025 年 1 月成立，创始人穆泽林，首席科学家陈涛（复旦大学未来信息创新学院教授），CTO 余翀，技术委员会主席张益民（原英特尔中国首席科学家）。2026-11-07 在上海发布「深悟」具身原生模型、家用世界模型 FWM、「深枢」Infra 架构与「深匣」端侧模组，并牵头 42 家单位成立通用具身大脑产业创新联合体。核心关注点是把长期空间与物体记忆做成神经记忆 + 符号状态库的双轨模块。",
    "founded": "2025",
    "scale": "未披露",
    "website": "",
    "ai_summary": "一句话：这家公司想让机器人「记得住家里东西在哪儿」，办法是给模型配一本可以查、可以自相校对的记忆账本，而不是全塞进视觉网络里。",
    "categories": [
      "具身智能",
      "世界模型",
      "空间记忆"
    ],
    "enabled": true
  },
  {
    "id": "w-com-chingmu",
    "type": "company",
    "name": "青瞳视觉（CHINGMU）",
    "keywords": [
      "青瞳视觉",
      "CHINGMU",
      "光学动作捕捉",
      "光学动捕",
      "K 系列动捕",
      "Hitch Open",
      "HOPE 赛事"
    ],
    "region": "国内",
    "products": "光学动作捕捉全栈系统（算法—硬件—软件）；K 系列动捕系统",
    "intro": "2015 年成立，官方定位为中国首家光学动作捕捉全栈自研企业，此前主要服务影视动画、虚拟制片、体育科学与人机交互研究。2026-11-07 在进博会现场与 Hitch Open 签署全球战略合作，并成为 HOPE 全球赛事官方动作捕捉技术合作伙伴，为乒乓对打机器人提供训练与评测所需的空间绝对真值。",
    "founded": "2015",
    "scale": "未披露",
    "website": "",
    "ai_summary": "一句话：它不造机器人也不做重建，卖的是「尺子」——用几十台红外相机把动作量到毫米级，让机器人训练时有个不会骗人的标准答案。",
    "categories": [
      "动作捕捉",
      "空间感知",
      "物理AI"
    ],
    "enabled": true
  },
  {"id":"w-com-tencent-hunyuan","type":"company","name":"腾讯混元（Hunyuan）","keywords":["腾讯混元","Hunyuan","Hy4","混元大模型","Hyra"],"region":"国内","products":"Hy 系列通用大模型（Hy3/Hy4）、HyCell 单细胞表征、HyPDE 物理场模型、腾讯云 TokenHub","intro":"腾讯基础模型团队，2025 年底姚顺雨任首席 AI 科学家后进入快速迭代期。Hy4 正式版（2026-11-04）为 770B / 49B 激活的 MoE，首次引入视觉理解与 Computer Use，并针对 Blender、CAD 等三维专业软件做专项后训练；公开案例中自主完成 84 张乱序切片的小鼠胚胎三维重建并自行纠正镜像翻转。","founded":"2023-09","scale":"未披露（2026-11 发布期开放青云课题 165 个、社招 60 余个岗位）","website":"https://hunyuan.tencent.com","ai_summary":"一句话：腾讯自研的通用大模型系列，最新一代第一次能「看图」和「操作电脑」，并且专门练过 Blender、CAD 这类三维软件——所以它能自己把 84 张打乱的切片摞成一个胚胎的三维模型。","categories":["大模型","多模态","三维软件操作"],"enabled":true},
  {"id":"w-com-apple-ml","type":"company","name":"苹果机器学习研究（Apple ML Research）","keywords":["Apple HALO","苹果 人形机器人","Perceptive Humanoid Motion","apple-aiml-research"],"region":"海外","products":"HALO 人形机器人自主系统（数据合成管线 + 三层控制架构），及此前开源的深度估计、三维重建相关研究","intro":"苹果旗下 AI/ML 研究团队。2026-11-04 在 arXiv 提交《Perceptive Humanoid Motion from Simulation》，公开 HALO：用 1000 个 Infinigen 程序生成家庭合成约 300 小时配对数据，训练语料不含任何真实房间采集，在宇树 G1 上实现六个未扫描真实环境 91% 的零样本任务成功率，并公开全部代码。","founded":"2016","scale":"未披露","website":"https://apple-aiml-research.github.io/","ai_summary":"一句话：苹果的研究部门，这次证明了一件对三维行业很关键的事——机器人可以在完全没扫过真房子的情况下学会在真房子里干活，因为训练用的「房子」全是电脑程序盖出来的。","categories":["合成数据","人形机器人","Sim2Real"],"enabled":true},
  {"id":"w-com-physicl","type":"company","name":"Physicl","keywords":["Physicl","Physicl Studio","Alex de Vigan","合成数据 机器人"],"region":"海外","products":"Studio 合成三维数据平台（10,000 个环境 / 100,000 个资产，标注由三维场景直接计算）","intro":"2026 年从 nfinite 的商品三维渲染产线转出的合成数据公司，创始人兼 CEO Alex de Vigan，团队约 30 人分布于巴黎、旧金山、纽约。2026-11-06 宣布 1000 万美元种子轮（Inovia Capital 领投，US Venture Partners 参投）并开放 Studio 私有 Beta；只做渲染不做物理仿真，标注含深度、法线、分割、包围盒与相机位姿。","founded":"2025（未公开确认）","scale":"约 30 人（巴黎 / 旧金山 / 纽约）","website":"https://physicl.ai","ai_summary":"一句话：它卖的是「电脑里搭好的场景」——因为场景是搭出来的，每个东西在哪、离相机多远，电脑自己就知道，标注不用人打。机器人公司可以说「我要一个杯子被挡住一半的场面」，它就生成成千上万个变体。","categories":["合成数据","三维资产","自动标注"],"enabled":true},
  {"id":"w-com-nvidia","type":"company","name":"英伟达（NVIDIA Research）","keywords":["NVIDIA Research","英伟达 论文","VFlash","Jim Fan","GEAR Lab","Isaac Sim"],"region":"海外","products":"Isaac Sim / Isaac Lab 仿真、Cosmos 世界模型、VFlash 视觉规划解码、Jetson Thor 边缘计算","intro":"英伟达研究院与 GEAR Lab 合作频繁。2026-11-05 提交 VFlash（arXiv:2611.08449），用 537M 扩散草稿模型并行解码点/框/轨迹等视觉基元，三维点运动预测快约 25 倍、动作解码最高 12 倍；同期其 Isaac Sim 与 Omniverse 仍是合成数据与三维场景落地（如其域 LCC、Seyond 数字孪生）的主要承载平台。","founded":"1993-04","scale":"约 3.6 万人（全球，FY2026 口径）","website":"https://research.nvidia.com","ai_summary":"一句话：这家公司既卖算力，也在定义「三维世界怎么被造出来、怎么被用起来」——从仿真器 Isaac Sim 到世界模型 Cosmos，再到把机器人空间规划提速 25 倍的 VFlash。","categories":["GPU","仿真平台","世界模型","视觉规划"],"enabled":true},
  {"id":"w-com-shangwei","type":"company","name":"上纬新材（启元机器人）","keywords":["上纬新材","启元机器人","启元 Q1","启元 T1","688585"],"region":"国内","products":"新材料（主业）+ 消费级具身智能机器人 Q1 / T1","intro":"科创板上市公司（688585），主业为新材料，2026 年切入消费级具身智能。2026-09-20 发布启元 Q1（88cm、22 自由度、可折叠）与 T1（约 100cm、16kg、轮式四足切换），11-08 公告累计下线 10,000 台（距 5,000 台仅 14 天），同时提示机器人业务收入占比仍低、尚不能预测对全年业绩的影响。","founded":"2000（新材料业务）","scale":"未披露","website":"","ai_summary":"一句话：一家原本做新材料的上市公司，造出了两米以下的家用机器人，14 天产量翻倍冲到一万台——但公司自己在公告里说，现在赚的钱还主要是靠材料。","categories":["具身智能","消费级机器人","量产制造"],"enabled":true},
  {"id":"w-tech-synthetic-data","type":"tech","name":"合成数据 / Sim2Real","keywords":["synthetic data","合成数据","Sim2Real","domain randomization","域随机化","procedural generation","程序化生成"],"intro":"用程序化场景生成、动学生成与渲染产出带精确标注的训练数据，替代或补充真实采集；2026 年 11 月起苹果 HALO 与 Physicl Studio 分别从学术与商业两端验证其可行性，是三维重建产业链最直接的替代性威胁。","enabled":true},
  {"id":"w-tech-spatial-camera","type":"tech","name":"3D 空间相机 / 空间采集终端","keywords":["3D空间相机","空间相机","spatial camera","空间采集终端","Aholo x Kosmo One","Kosmo One","原生打通","采集重建一体化"],"intro":"把激光雷达、彩色影像、大底 CMOS 与 IMU 集成为一体，一次采集同步输出几何、纹理与位姿，并直连重建平台省去格式转换与配准。2026 年 11 月群核 x 禾赛发布 Aholo x Kosmo One，是该形态首次同时打通「采集端—3DGS 重建端—语义编辑端」的商用尝试，代表空间数据生产从「多设备拼装+人工后处理」走向「单机闭环」。","enabled":true},
  {"id":"w-tech-pointcloud-semantics","type":"tech","name":"点云语义分类 / 工业点云理解","keywords":["点云语义分类","point cloud semantic segmentation","点云分类","室内分类","One-Click AI Indoor Classification","构件识别","as-built"],"intro":"对海量原始扫描点逐点预测所属构件类别（地面、墙体、管道、临时构筑物等），是把三维扫描结果从「可视化模型」变成可进入进度、成本、运维系统的资产的必要环节。2026 年 11 月 Trimble 在 Connect 中提供一键分类百万级点云，标志该能力开始内嵌进主流 CDE 平台。","enabled":true},
  {"id":"w-com-cirquar","type":"company","name":"原方智能（Cirquar AI）","keywords":["原方智能","Cirquar","Cirquar AI","Rehearsal in World Model","林浩鑫","唐开强"],"region":"国内","products":"具身智能通用世界模型、家庭服务机器人（研发中）","intro":"2026 年 7 月成立于南京建邺，核心团队出自南京大学 LAMDA 实验室（周志华院士课题组技术脉络），以「Rehearsal in World Model」为路线，让机器人在动作执行前于数字空间预演物理因果与操作风险，落地场景聚焦家庭整理收纳。2026 年 10 月与南京大学联合发布物理智能 Rehearsal 框架并入选江苏省「物理 AI 与世界模型」典型成果；2026 年 11 月 9 日完成数千万元天使轮，金雨茂物领投，我乐家居、南京市创新投资集团跟投。","founded":"2026-07","scale":"初创团队（规模未披露）","website":"","ai_summary":"一句话：这家公司给机器人做「脑内彩排」——动手之前先在虚拟空间里把动作演一遍，判断会不会碰倒东西，没问题再让真机去做，这样训练机器人就不用成千上万次真机试错。团队来自南京大学做机器学习最强的实验室之一，钱刚到手，产品还没上市。","categories":["世界模型","具身智能","家庭机器人"],"enabled":true}
];
