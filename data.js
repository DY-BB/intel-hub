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
            "value": "空间临场感 p=0.042、真实感 p=0.042 显著优于基线",
            "baseline": "skybox 基线",
            "condition": "N=36 用户实验"
          },
          {
            "metric": "方法类型",
            "value": "将天空/地平线整合进 3DGS 表示，统一前景与背景",
            "baseline": "传统背景壳",
            "condition": "无界户外场景重建"
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
        "notes": ""
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
        "notes": ""
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
        "notes": ""
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
            "value": "支持 Gaussian splats 将照片/扫描转为可浏览真实地点 3D 模型",
            "baseline": "此前需人工跨系统拼合",
            "condition": "Alto 2026.1"
          },
          {
            "metric": "标准",
            "value": "支持北约最新军用地图符号与作战计划标准",
            "baseline": null,
            "condition": null
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
        "notes": ""
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
            "value": "AI-vSLAM + 端到端深度估计模型升级 + AI 物体识别/分割",
            "baseline": "Aurora S（标准版）",
            "condition": "2026-10-27 发布"
          },
          {
            "metric": "形态/集成",
            "value": "更小机身、即插即用、开放 SDK",
            "baseline": null,
            "condition": null
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
        "notes": ""
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
        "notes": ""
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
        "category": "Tool",
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
        "category": "Dataset",
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
        "category": "Product",
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
        "notes": ""
      },
      {
        "item_id": "2026-11-03-B-002",
        "category": "Company",
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
        "notes": ""
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
        "notes": ""
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
        "notes": ""
      },
      {
        "item_id": "2026-11-03-B-007",
        "category": "Company",
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
        "notes": ""
      },
      {
        "item_id": "2026-11-03-B-009",
        "category": "Company",
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
        "notes": ""
      },
      {
        "item_id": "2026-11-03-B-010",
        "category": "Company",
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
        "category": "Company",
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
        "category": "Company",
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
        "notes": ""
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
            "value": "1 亿美元 A+ 轮，累计超 3 亿美元（另有超 2 亿美元口径）",
            "baseline": null,
            "condition": "2026 年第三季度完成，11-02 首次披露"
          },
          {
            "metric": "简智数据产能",
            "value": "单季度有效交付从十万小时级 → 百万小时级，2027 目标千万小时",
            "baseline": null,
            "condition": "公司口径"
          },
          {
            "metric": "采集硬件指标",
            "value": "23 个自由度、指尖触觉 0.05N、空间分辨率 1mm、150° 广角",
            "baseline": null,
            "condition": "Gen DAS Dex"
          },
          {
            "metric": "机器科学融资",
            "value": "数亿元 A2 轮，累计超 10 亿元",
            "baseline": null,
            "condition": "2025-03 起第五轮"
          },
          {
            "metric": "机器科学数据成本",
            "value": "单条 0.05 元，约为传统方案的 1/20 至 1/200",
            "baseline": null,
            "condition": "公司口径"
          },
          {
            "metric": "机器科学数据量",
            "value": "视频训练数据 100 万小时（年初）→ 400 万小时（10 月），仿真超百亿次轨迹",
            "baseline": null,
            "condition": null
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
  {"id":"w-com-spatial-intuition","type":"company","name":"空间直觉","keywords":["空间直觉","Spatial Intuition"],"region":"国内","products":"空间智能相关感知/重建技术（产品形态待披露）","intro":"南京空间智能初创公司（2023 年 8 月成立），2026 年 11 月完成数千万元种子轮，方向为具身智能的空间感知，投资方与技术细节暂未披露。","founded":"2023-08","scale":"早期初创","website":"","ai_summary":"一句话：这是一家很新的南京公司，做「让机器理解空间」的技术，刚拿到几千万元的种子投资。具体产品还没公开，属于值得持续观察的早期标的。","categories":["空间智能","具身智能"],"enabled":true},
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
  },];
