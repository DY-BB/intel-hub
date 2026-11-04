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
  },,
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
    "website": "",
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
    "website": "",
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
  }
];
