# 旧官网页面盘点

生成日期：2026-07-13

## 盘点目标

本文件作为官网 UI 重构的源站盘点输入。后续重构必须保持页面范围、业务内容、导航逻辑、按钮跳转、表单逻辑不变，只重做 UI 视觉、版式、组件样式、动效和响应式表现。

## 采集说明

- 源站 HTTPS 证书当前已过期；本次仅为源站内容盘点，抓取时跳过 SSL 证书校验。
- 证书修复属于上线/运维问题，不纳入“只改 UI”的页面重构范围，但上线前应单独处理。

## 固定重构约束

- 不新增页面。
- 不新增业务内容。
- 不改原页面文案含义。
- 不改导航、按钮、表单、跳转逻辑。
- 不改产品、解决方案、服务的信息结构。
- 所有视觉改版必须能回查到本盘点中的源站页面。

## 页面范围总表

| 序号 | 页面类型 | 页面名称                       | URL                                            | 抓取状态 | SEO 标题                       |
| -- | ---- | -------------------------- | ---------------------------------------------- | ---- | ---------------------------- |
| 1  | 首页   | 首页                         | https://www.zksctest.com/index.html            | 200  | 中科数测                         |
| 2  | 产品详情 | Wisdom 模糊测试产品详情页           | https://www.zksctest.com/wisdom.html           | 200  | Wisdom 模糊测试 - 中科数测           |
| 3  | 产品详情 | Swift AI 综合模型安全检测平台产品详情页   | https://www.zksctest.com/ai.html               | 200  | Swift AI 综合模型安全检测平台 - 中科数测   |
| 4  | 产品详情 | Swift Code 源代码审计产品详情页      | https://www.zksctest.com/swiftcode.html        | 200  | Swift Code 源代码审计 - 中科数测      |
| 5  | 产品详情 | Wisdom Lens 灰盒模糊测试产品详情页    | https://www.zksctest.com/lens.html             | 200  | Wisdom Lens 灰盒模糊测试 - 中科数测    |
| 6  | 产品详情 | Swift SCA 软件成分分析产品详情页      | https://www.zksctest.com/sca.html              | 200  | Swift SCA 软件成分分析 - 中科数测      |
| 7  | 产品详情 | Swift Pentest 自动化渗透测试产品详情页 | https://www.zksctest.com/swiftpenstest.html    | 200  | Swift Pentest 自动化渗透测试 - 中科数测 |
| 8  | 解决方案 | 网联汽车解决方案页面                 | https://www.zksctest.com/solution-auto.html    | 200  | 网联汽车 - 中科数测                  |
| 9  | 解决方案 | 特种装备解决方案页面                 | https://www.zksctest.com/solution-special.html | 200  | 特种装备 - 中科数测                  |
| 10 | 技术服务 | 技术服务渗透测试页面                 | https://www.zksctest.com/service-penstest.html | 200  | 渗透测试 - 中科数测                  |
| 11 | 公司介绍 | 公司介绍页面                     | https://www.zksctest.com/about.html            | 200  | 公司介绍 - 中科数测                  |

## 页面详情

### 1. 首页

- 页面类型：首页
- URL：https://www.zksctest.com/index.html
- 源站备注：保留首页模块和跳转逻辑
- HTTP 状态：200
- HTML 大小：100414 bytes
- SEO title：中科数测
- SEO description：充分整合集团在低空发展体系、商业航天发展体系及生态协同方面的资源优势，致力于构建星图集团在低空与商业航天领域的安全底座，力争成为全球领先的低空及商业航天网络安全产品与解决方案提供商。
- SEO keywords：代码安全、协议安全、供应链安全、AI安全、第三方测评能力。
- Canonical：未识别

#### 页面模块/内容结构

1. **致力于成为全球领先的 低空与商业航天 网络安全方案提供商**：致力于成为全球领先的 低空与商业航天 网络安全方案提供商 面向低空经济、商业航天、网联汽车、工业控制等领域，提供全栈安全与可信的解决方案。 免费试用 免费试用
2. **合作生态**：合作生态 2 2 3 4 5 6 7 8 9 7 0 5 2 3 4 5 6 8 9 0 % 安全审计平均时间减少 70% 2 2 3 4 5 6 7 8 9 8 0 5 2 3 4 5 6 7 9 0 % 80% 用户在使用我们解决方案后快速修复漏洞和缺陷 2 2 3 4 5 6 7 8 6 9 0 2 3 4 5 6 7 8 9 0 % 90% 用户降低了其整体应用风险
3. **核心安全能力**：核心安全能力 协议安全 针对车载、航天、低空通信等专用私有协议进行安全分析与模糊测试，防御DoS攻击、中间人攻击、重放攻击等通信风险。 智能安全 围绕模型安全、数据安全、算法安全、智能体安全等核心方向构建AI安全保障体系。 供应链安全 识别第三方组件、开源依赖与外部模块的安全性，追踪漏洞来源与版本风险，防止供应链污染与隐患传播。 代码安全 面向多语言、多框架的源代码安全分析，覆盖静态检测、依赖分析与弱点识别，提升软件开发阶段的安全质量。 应用安全 对Web、移动端类应用进行漏洞扫描与渗透测试，防御注入攻击、权限越界与接口风险。 数据安全 聚焦数据来源、存储与共享环节的安全防护，提供隐私合规检测。
4. **核心产品介绍**：核心产品介绍 Wisdom 模糊测试 识别协议中的缺陷和零日漏洞，增强被测对象的安全性、健壮性、稳定性。 Swift AI 综合模型安全检测平台 专为智能应用设计的全方位模型安全检测平台，为组织提供模型应用全生命周期的安全保护。 Swift SCA 软件成分分析 精准检测软件供应链的漏洞与风险，保障组织应用安全与合规。 Wisdom Lens 灰盒模糊测试 基于灰盒测试技术，嵌入DevSecOps流程，自动捕获零日缺陷。 Swift Code 源代码审计 利用多种技术自动识别语义缺陷、安全漏洞和编码规则等问题，适配国内编码标准和国产环境，支持灵活定制。
5. **行业解决方案**：行业解决方案 网联汽车 特种领域 网联汽车信息安全实验室解决方案 方案特点 “工具链+合规”双轮驱动，为汽车主机厂、检测机构、零部件厂商一站式交付覆盖 GB 44495 与 R155 全项检测所需的完整实验能力。 价值优势 工具即合规、一键自动化、开放可扩展、人才体系培养、低成本高收益。 了解更多 了解更多 特种领域网络安全实验解决方案 方案特点 “工具链+合规”双引擎，为研究所、测评中心、装备承制单位交付覆盖脆弱性、渗透性、生存性全指标的自主可控实验能力。 价值优势 工具即合规、自主可控、一键自动化、高扩展架构、低成本高收益。 了解更多 了解更多
6. **关于中科数测**：关于中科数测 中科数测科技有限公司（简称“中科数测”）是中科星图股份有限公司（股票代码：688568）的子公司，具备国家高新技术企业及省级专精特新企业资质。公司依托中科星图集团“一体两翼”发展战略，充分整合集团在低空发展体系、商业航天发展体系及生态协同方面的资源优势，致力于构建星图集团在低空与商业航天领域的安全底座，力争成为全球领先的低空及商业航天网络安全产品与解决方案提供商。 了解更多 了解更多 致力于成为全球领先的低空与商业航天网络安全方案提供商 强大的研发团队, 始终保持创新 150 150员工人数 20% 20%硕士以上学历 60% 60%研发占比 01 2022年 实验室建立，通过CNAS认证，对外提供测评服务 02 2...
7. **成功案例**：成功案例 网联汽车 中科数测固源科技成功中标零跑汽车信息安全漏洞扫描工具采购项目 高等院校 喜讯！中科数测固源科技成功中标西安电子科技大学通讯协议模糊测试漏洞挖掘教学实践平台项目 工业控制 重磅喜讯！中科数测固源科技成功中标国内某头部光伏企业固件漏洞扫描工具采购项目
8. **准备好为您的组织解锁 安全能力 了吗?**：准备好为您的组织解锁 安全能力 了吗? 马上申请30天免费试用 免费试用 免费试用

#### 标题层级

- H1：致力于成为全球领先的 低空与商业航天 网络安全方案提供商
- H2：合作生态
- H2：核心安全能力
- H2：核心产品介绍
- H2：行业解决方案
- H2：与您现有的工具和系统无缝集成
- H2：关于中科数测
- H2：成功案例
- H1：准备好为您的组织解锁 安全能力 了吗?

#### 按钮/链接/跳转

| 类型     | 文字                                                             | 目标                                                          |
| ------ | -------------------------------------------------------------- | ----------------------------------------------------------- |
| 站内页面   | (无文字链接)                                                        | https://www.zksctest.com/index.html                         |
| 产品导航   | Wisdom 模糊测试                                                    | https://www.zksctest.com/wisdom.html                        |
| 产品导航   | Swift AI 综合模型安全检测平台                                            | https://www.zksctest.com/ai.html                            |
| 产品导航   | Swift SCA 软件成分分析                                               | https://www.zksctest.com/sca.html                           |
| 产品导航   | Swift Code 源代码审计                                               | https://www.zksctest.com/swiftcode.html                     |
| 产品导航   | Wisdom Lens 灰盒模糊测试                                             | https://www.zksctest.com/lens.html                          |
| 产品导航   | Swift Pentest 自动化渗透测试                                          | https://www.zksctest.com/swiftpenstest.html                 |
| 站内页面   | 数据标准规范检查系统                                                     | https://www.zksctest.com/datacheck.html                     |
| 站内页面   | 软件质量评估系统                                                       | https://www.zksctest.com/softwareassess.html                |
| 解决方案导航 | 网联汽车                                                           | https://www.zksctest.com/solution-auto.html                 |
| 解决方案导航 | 特种装备                                                           | https://www.zksctest.com/solution-special.html              |
| 站内页面   | 三方测评                                                           | https://www.zksctest.com/service-secas.html                 |
| 站内页面   | 渗透测试                                                           | https://www.zksctest.com/service-penstest.html              |
| 站内页面   | 公司介绍                                                           | https://www.zksctest.com/about.html                         |
| CTA/转化 | 联系我们                                                           | https://www.zksctest.com/contact.html                       |
| CTA/转化 | 免费试用 免费试用                                                      | https://www.zksctest.com/contact.html                       |
| 产品导航   | Wisdom 模糊测试 识别协议中的缺陷和零日漏洞，增强被测对象的安全性、健壮性、稳定性。                  | https://www.zksctest.com/index.html                         |
| 产品导航   | Swift AI 综合模型安全检测平台 专为智能应用设计的全方位模型安全检测平台，为组织提供模型应用全生命周期的安全保... | https://www.zksctest.com/index.html                         |
| 产品导航   | Swift SCA 软件成分分析 精准检测软件供应链的漏洞与风险，保障组织应用安全与合规。                  | https://www.zksctest.com/index.html                         |
| 产品导航   | Wisdom Lens 灰盒模糊测试 基于灰盒测试技术，嵌入DevSecOps流程，自动捕获零日缺陷。            | https://www.zksctest.com/index.html                         |
| 产品导航   | Swift Code 源代码审计 利用多种技术自动识别语义缺陷、安全漏洞和编码规则等问题，适配国内编码标准和国产环境，... | https://www.zksctest.com/index.html                         |
| 站内页面   | 网联汽车                                                           | https://www.zksctest.com/index.html                         |
| 站内页面   | 特种领域                                                           | https://www.zksctest.com/index.html                         |
| CTA/转化 | 了解更多 了解更多                                                      | https://www.zksctest.com/solution-auto.html                 |
| CTA/转化 | 了解更多 了解更多                                                      | https://www.zksctest.com/solution-special.html              |
| CTA/转化 | 了解更多 了解更多                                                      | https://www.zksctest.com/about.html                         |
| 站内页面   | 网联汽车 中科数测固源科技成功中标零跑汽车信息安全漏洞扫描工具采购项目                            | https://www.zksctest.com/index.html                         |
| 站内页面   | 高等院校 喜讯！中科数测固源科技成功中标西安电子科技大学通讯协议模糊测试漏洞挖掘教学实践平台项目               | https://www.zksctest.com/index.html                         |
| 站内页面   | 工业控制 重磅喜讯！中科数测固源科技成功中标国内某头部光伏企业固件漏洞扫描工具采购项目                    | https://www.zksctest.com/index.html                         |
| 外部链接   | 京ICP备15067074号                                                 | https://beian.miit.gov.cn/                                  |
| 外部链接   | CSDN                                                           | https://blog.csdn.net/2501_91003657?spm=1011.2480.3001.5343 |
| 外部链接   | 知乎                                                             | https://www.zhihu.com/                                      |
| 外部链接   | 安全客                                                            | https://www.anquanke.com                                    |
| 外部链接   | 开源中国                                                           | https://www.oschina.net                                     |
| 外部链接   | Freebuf                                                        | https://www.freebuf.com/                                    |

> 另有 3 个链接未在摘要表中展开，后续实现前需按页面复核。

#### 图片/媒体素材

| Alt         | 路径                                                          |
| ----------- | ----------------------------------------------------------- |
| (无 alt)     | https://www.zksctest.com/img/logo.svg                       |
| Right Arrow | https://www.zksctest.com/images/Right-Arrow.svg             |
| (无 alt)     | https://www.zksctest.com/images/Right-Arrow-White.svg       |
| (无 alt)     | https://www.zksctest.com/img/home-banner.png                |
| (无 alt)     | https://www.zksctest.com/images/Home-01-Bg_1Home-01-Bg.avif |
| 清华大学        | https://www.zksctest.com/img/logo/清华大学.png                  |
| 长安大学        | https://www.zksctest.com/img/logo/长安大学.png                  |
| 武汉大学        | https://www.zksctest.com/img/logo/武汉大学.png                  |
| 西安电子科技大学    | https://www.zksctest.com/img/logo/西安电子科技大学.png              |
| 西北工业大学      | https://www.zksctest.com/img/logo/西北工业大学.png                |
| 暨南大学        | https://www.zksctest.com/img/logo/暨南大学.png                  |
| 西安交通大学      | https://www.zksctest.com/img/logo/西安交通大学.png                |
| 浙江大学        | https://www.zksctest.com/img/logo/浙江大学.png                  |
| 重庆大学        | https://www.zksctest.com/img/logo/重庆大学.png                  |
| 北京大学        | https://www.zksctest.com/img/logo/北京大学.png                  |
| 北京航空航天大学    | https://www.zksctest.com/img/logo/北京航空航天大学.png              |
| 长城汽车        | https://www.zksctest.com/img/logo/长城汽车.png                  |
| 中国一汽        | https://www.zksctest.com/img/logo/中国一汽.png                  |
| 赛力斯         | https://www.zksctest.com/img/logo/赛力斯.png                   |
| 比亚迪汽车       | https://www.zksctest.com/img/logo/比亚迪汽车.png                 |
| 奇瑞汽车        | https://www.zksctest.com/img/logo/奇瑞汽车.png                  |
| 北汽集团        | https://www.zksctest.com/img/logo/北汽集团.png                  |
| 中国汽研        | https://www.zksctest.com/img/logo/中国汽研.png                  |
| 中汽中心        | https://www.zksctest.com/img/logo/中汽中心.png                  |
| 国家电网        | https://www.zksctest.com/img/logo/国家电网.png                  |

> 另有 55 个图片资源未在摘要表中展开，后续素材迁移前需复核。

#### 表单/输入状态

- 源 HTML 中未识别到 form 标签；如果页面存在弹窗表单或第三方组件，需要截图/手工补充。

#### 本页不可改动项

- 保留本页页面定位和内容范围。
- 保留本页原有按钮文字和跳转目标。
- 保留本页产品/方案/服务信息结构。
- UI 重构只能调整版式、视觉层级、组件样式、动效和响应式表现。

#### 后续验收关注

- 桌面端完整截图待补充。
- 移动端完整截图待补充。
- 导航展开、hover、弹窗、表单成功/失败状态待补充。

### 2. Wisdom 模糊测试产品详情页

- 页面类型：产品详情
- URL：https://www.zksctest.com/wisdom.html
- 源站备注：保留产品内容与 CTA
- HTTP 状态：200
- HTML 大小：41158 bytes
- SEO title：Wisdom 模糊测试 - 中科数测
- SEO description：Wisdom工具专注于通讯协议安全，提供协议深度分析与漏洞检测，适用于汽车、物联网、工业控制等领域。立即了解产品详情与技术优势。
- SEO keywords：协议安全、网络安全模糊测试,软件漏洞挖掘、模糊测试解决方案、协议模糊测试、蓝牙模糊测试、WIFI模糊测试、IPv4模糊测试、IPv6模糊测试、CAN总线协议模糊测试、文件模糊测试、物联网协议模块、API模糊测试。
- Canonical：未识别

#### 页面模块/内容结构

1. **在黑客攻击之前发现漏洞 Wisdom 守护您的协议安全**：在黑客攻击之前发现漏洞 Wisdom 守护您的协议安全 无需任何协议或模糊测试相关知识开箱即用，轻松识别协议中的缺陷和零日漏洞，增强被测对象的安全性、健壮性、稳定性。 免费试用 免费试用
2. **为什么要使用模糊测试？**：为什么要使用模糊测试？ 在程序开发时尽早发现漏洞 早发现 集成到开发流程中，进行自动测试，在产品上市之前就发现漏洞和安全问题。 黑客挖掘漏洞的主要方式 60%+ 超过60%的软件漏洞利用源于零日缺陷，模糊测试可以在黑客攻击之前发现未知缺陷。 使用成本低见效快 高效 高度自动化，在没有人工干预的情况下持续运行，高效地发现程序中的错误。 发现其他测试方式无法发现的漏洞 价值 黑盒模糊测试更接近系统的真实使用环境，能够发现常规测试方法无法发现的问题。
3. **Wisdom帮助组织快速发现并修复安全缺陷**：Wisdom帮助组织快速发现并修复安全缺陷 数百种协议模板 先进的变异算法 实时监测目标 快速复现漏洞 支持用户自行定义协议结构和字段变异策略，灵活适配各类专有协议场景。 基于自研的变异算法生成高覆盖率测试用例，模拟真实交互行为触发潜在缺陷。 实时监测目标行为变化，自动判断崩溃、异常响应等缺陷迹象，并追踪缺陷来源。 多种方式重放测试用例、回溯交互记录，辅助用户定位问题与验证修复。
4. **Wisdom协议模糊测试以自研智能引擎为核心，在性能、检测覆盖度、可扩展性方面全面领先同类产品**：Wisdom协议模糊测试以自研智能引擎为核心，在性能、检测覆盖度、可扩展性方面全面领先同类产品 国际标准认证 全球首款通过ISO 21434与IEC 62443国际安全标准认证的模糊测试工具，满足高等级安全需求行业的采购要求与合规标准。 高效发现漏洞 创新优选的变异算法，可以在相同时间内，通过更少的测试用例，精准发现更多的真实缺陷。 全面的测试覆盖 覆盖多种变异策略与交互状态模拟，实现对协议测试场景的全覆盖与边界条件的极致探索，全面提升测试深度与广度。 详细的测试报告 每个漏洞都会附带详细证明，包括触发的测试用例、程序的异常监控信息、可复现漏洞的复现包，帮助开发者快速修复漏洞。
5. **Wisdom无需定制开发即可测试您的专有协议**：Wisdom无需定制开发即可测试您的专有协议 可视化协议建模，可以在界面上快速搭建专有协议，基于语义理解的变异方式，根据字段含义自动匹配变异算法，无需配置一键开始测试。 免费试用 免费试用
6. **准备好为您的组织解锁 安全能力 了吗?**：准备好为您的组织解锁 安全能力 了吗? 马上申请30天免费试用 免费试用 免费试用

#### 标题层级

- H1：在黑客攻击之前发现漏洞 Wisdom 守护您的协议安全
- H2：为什么要使用模糊测试？
- H2：Wisdom帮助组织快速发现并修复安全缺陷
- H2：Wisdom协议模糊测试以自研智能引擎为核心，在性能、检测覆盖度、可扩展性方面全面领先同类产品
- H2：Wisdom无需定制开发即可测试您的专有协议
- H2：与您现有的工具和系统无缝集成
- H1：准备好为您的组织解锁 安全能力 了吗?

#### 按钮/链接/跳转

| 类型     | 文字                    | 目标                                                          |
| ------ | --------------------- | ----------------------------------------------------------- |
| 站内页面   | (无文字链接)               | https://www.zksctest.com/index.html                         |
| 产品导航   | Wisdom 模糊测试           | https://www.zksctest.com/wisdom.html                        |
| 产品导航   | Swift AI 综合模型安全检测平台   | https://www.zksctest.com/ai.html                            |
| 产品导航   | Swift SCA 软件成分分析      | https://www.zksctest.com/sca.html                           |
| 产品导航   | Swift Code 源代码审计      | https://www.zksctest.com/swiftcode.html                     |
| 产品导航   | Swift Lens 灰盒模糊测试     | https://www.zksctest.com/lens.html                          |
| 产品导航   | Swift Pentest 渗透测试    | https://www.zksctest.com/swiftpenstest.html                 |
| 站内页面   | 数据标准规范检查系统            | https://www.zksctest.com/datacheck.html                     |
| 站内页面   | 软件质量评估系统              | https://www.zksctest.com/softwareassess.html                |
| 解决方案导航 | 网联汽车                  | https://www.zksctest.com/solution-auto.html                 |
| 解决方案导航 | 特种装备                  | https://www.zksctest.com/solution-special.html              |
| 站内页面   | 三方测评                  | https://www.zksctest.com/service-secas.html                 |
| 站内页面   | 渗透测试                  | https://www.zksctest.com/service-penstest.html              |
| 站内页面   | 公司介绍                  | https://www.zksctest.com/about.html                         |
| CTA/转化 | 联系我们                  | https://www.zksctest.com/contact.html                       |
| CTA/转化 | 免费试用 免费试用             | https://www.zksctest.com/contact.html                       |
| 产品导航   | 数百种协议模板               | https://www.zksctest.com/wisdom.html                        |
| 产品导航   | 先进的变异算法               | https://www.zksctest.com/wisdom.html                        |
| 产品导航   | 实时监测目标                | https://www.zksctest.com/wisdom.html                        |
| 产品导航   | 快速复现漏洞                | https://www.zksctest.com/wisdom.html                        |
| 产品导航   | Wisdom Lens 灰盒模糊测试    | https://www.zksctest.com/lens.html                          |
| 产品导航   | Swift Pentest 自动化渗透测试 | https://www.zksctest.com/swiftpenstest.html                 |
| 外部链接   | 京ICP备15067074号        | https://beian.miit.gov.cn/                                  |
| 外部链接   | CSDN                  | https://blog.csdn.net/2501_91003657?spm=1011.2480.3001.5343 |
| 外部链接   | 知乎                    | https://www.zhihu.com/                                      |
| 外部链接   | 安全客                   | https://www.anquanke.com                                    |
| 外部链接   | 开源中国                  | https://www.oschina.net                                     |
| 外部链接   | Freebuf               | https://www.freebuf.com/                                    |
| 外部链接   | 51CTO                 | https://blog.51cto.com/                                     |
| 外部链接   | 百家号                   | https://baijiahao.baidu.com/builder/theme/bjh/login         |
| 外部链接   | 今日头条                  | https://www.toutiao.com/                                    |

#### 图片/媒体素材

| Alt                                                  | 路径                                                          |
| ---------------------------------------------------- | ----------------------------------------------------------- |
| Website Logo                                         | https://www.zksctest.com/img/logo.png                       |
| Right Arrow                                          | https://www.zksctest.com/images/Right-Arrow.svg             |
| (无 alt)                                              | https://www.zksctest.com/images/Right-Arrow-White.svg       |
| (无 alt)                                              | https://www.zksctest.com/img/wisdom_9.svg                   |
| (无 alt)                                              | https://www.zksctest.com/img/wisdom_7.svg                   |
| (无 alt)                                              | https://www.zksctest.com/img/wisdom_12.svg                  |
| (无 alt)                                              | https://www.zksctest.com/img/wisdom_8.svg                   |
| (无 alt)                                              | https://www.zksctest.com/img/wisdom_10.svg                  |
| (无 alt)                                              | https://www.zksctest.com/img/wisdom_11.svg                  |
| (无 alt)                                              | https://www.zksctest.com/img/wisdom_2.png                   |
| (无 alt)                                              | https://www.zksctest.com/images/Hero-Bg_1Hero-Bg.avif       |
| (无 alt)                                              | https://www.zksctest.com/images/Home-01-Bg_1Home-01-Bg.avif |
| User interface showing two spreadsheet buttons la... | https://www.zksctest.com/img/wisdom_6.png                   |
| User interface showing two spreadsheet buttons la... | https://www.zksctest.com/img/wisdom_5.png                   |
| User interface showing two spreadsheet buttons la... | https://www.zksctest.com/img/wisdom_4.png                   |
| User interface showing two spreadsheet buttons la... | https://www.zksctest.com/img/wisdom_3.png                   |
| (无 alt)                                              | https://www.zksctest.com/img/wisdom_14.svg                  |
| (无 alt)                                              | https://www.zksctest.com/img/wisdom_13.svg                  |
| (无 alt)                                              | https://www.zksctest.com/img/wisdom_15.svg                  |
| (无 alt)                                              | https://www.zksctest.com/img/wisdom_16.svg                  |
| Dashboard screen showing a leads list with names,... | https://www.zksctest.com/img/wisdom_1.png                   |
| (无 alt)                                              | https://www.zksctest.com/img/index_1.png                    |
| (无 alt)                                              | https://www.zksctest.com/img/index_2.png                    |
| (无 alt)                                              | https://www.zksctest.com/img/index_3.png                    |
| (无 alt)                                              | https://www.zksctest.com/img/index_5.png                    |

> 另有 9 个图片资源未在摘要表中展开，后续素材迁移前需复核。

#### 表单/输入状态

- 源 HTML 中未识别到 form 标签；如果页面存在弹窗表单或第三方组件，需要截图/手工补充。

#### 本页不可改动项

- 保留本页页面定位和内容范围。
- 保留本页原有按钮文字和跳转目标。
- 保留本页产品/方案/服务信息结构。
- UI 重构只能调整版式、视觉层级、组件样式、动效和响应式表现。

#### 后续验收关注

- 桌面端完整截图待补充。
- 移动端完整截图待补充。
- 导航展开、hover、弹窗、表单成功/失败状态待补充。

### 3. Swift AI 综合模型安全检测平台产品详情页

- 页面类型：产品详情
- URL：https://www.zksctest.com/ai.html
- 源站备注：保留产品内容与 CTA
- HTTP 状态：200
- HTML 大小：39730 bytes
- SEO title：Swift AI 综合模型安全检测平台 - 中科数测
- SEO description：Swift AI提供全方位的AI安全防护，能够有效检测和防御文本、图像、音频等多模态对抗样本攻击，并对大模型的“幻觉”、“越狱”等问题进行专项评估。同时，它全面分析算法透明度与代码安全，并对智能体开展行为测评，帮助各领域用户在AI应用全周期管控风险、满足合规，构建安全可靠的AI未来。
- SEO keywords：大模型安全检测、大模型安全防御、幻觉攻击、模型越狱、逃逸攻击、投毒攻击、提示词注入、鲁棒性检测、对抗攻击检测、智能体测评、AI供应链安全
- Canonical：未识别

#### 页面模块/内容结构

1. **Swift AI 综合模型安全检测平台**：Swift AI 综合模型安全检测平台 专为智能应用设计的全方位模型安全检测平台，为组织提供模型应用全生命周期的安全保护。 免费试用 免费试用
2. **为什么选择Swift AI？**：为什么选择Swift AI？ 全生命周期模型安全检测 全周期 覆盖训练前、上线前、运行阶段的全链路安全检测体系。 多模态统一风险检测引擎 多模态 统一标准的多模态风险检测引擎，支持文本、图像、音频、视频与大模型。 对齐监管标准的合规评估体系 合规 自动生成AI-BOM、风险报告与审计材料，覆盖国内外21+监管规范。
3. **Swift AI 帮助组织全面了解其模型应用的安全状况，及时发现并修复潜在风险**：Swift AI 帮助组织全面了解其模型应用的安全状况，及时发现并修复潜在风险 供应链风险追踪 多模态对抗提升 LLM安全评测与防护 开源大模型安全优化 自动化检测AI组件、数据与模型资产，进行物料清单管理、溯源追踪、安全评估与防护，识别供应链风险，生成完整AI-BOM与安全追踪报告。 通过对抗样本、可解释性与公平性评估，开展视觉、文本、音频等多模态对抗测试与模型运行监控，提升AI模型鲁棒性与安全性。 基于LLM安全评测与防护体系，结合LLM防火墙、沙箱与RAG防护，实现大模型全链路安全监测与态势可视化管理。 基于开源大模型安全优化框架，开展安全对齐与对抗训练、隐私保护微调及安全知识注入，实现模型韧性防护、持续学习安全与合规评估。
4. **评测覆盖热力图**：评测覆盖热力图 标准化的安全评估能力。Swift AI 基于国家标准体系与自研多模态安全引擎，为组织提供从数据到模型到框架的全链路安全评估。 免费试用 免费试用
5. **准备好为您的组织解锁 安全能力 了吗?**：准备好为您的组织解锁 安全能力 了吗? 马上申请30天免费试用 免费试用 免费试用

#### 标题层级

- H1：Swift AI 综合模型安全检测平台
- H2：为什么选择Swift AI？
- H2：全面覆盖六类主流 AI 模型
- H2：Swift AI 帮助组织全面了解其模型应用的安全状况，及时发现并修复潜在风险
- H2：评测覆盖热力图
- H2：Swift AI 独创技术架构优势
- H2：DevSecOps集成
- H1：准备好为您的组织解锁 安全能力 了吗?

#### 按钮/链接/跳转

| 类型     | 文字                    | 目标                                                          |
| ------ | --------------------- | ----------------------------------------------------------- |
| 站内页面   | (无文字链接)               | https://www.zksctest.com/index.html                         |
| 产品导航   | Wisdom 模糊测试           | https://www.zksctest.com/wisdom.html                        |
| 产品导航   | Swift AI 综合模型安全检测平台   | https://www.zksctest.com/ai.html                            |
| 产品导航   | Swift SCA 软件成分分析      | https://www.zksctest.com/sca.html                           |
| 产品导航   | Swift Code 源代码审计      | https://www.zksctest.com/swiftcode.html                     |
| 产品导航   | Swift Lens 灰盒模糊测试     | https://www.zksctest.com/lens.html                          |
| 产品导航   | Swift Pentest 渗透测试    | https://www.zksctest.com/swiftpenstest.html                 |
| 站内页面   | 数据标准规范检查系统            | https://www.zksctest.com/datacheck.html                     |
| 站内页面   | 软件质量评估系统              | https://www.zksctest.com/softwareassess.html                |
| 解决方案导航 | 网联汽车                  | https://www.zksctest.com/solution-auto.html                 |
| 解决方案导航 | 特种装备                  | https://www.zksctest.com/solution-special.html              |
| 站内页面   | 三方测评                  | https://www.zksctest.com/service-secas.html                 |
| 站内页面   | 渗透测试                  | https://www.zksctest.com/service-penstest.html              |
| 站内页面   | 公司介绍                  | https://www.zksctest.com/about.html                         |
| CTA/转化 | 联系我们                  | https://www.zksctest.com/contact.html                       |
| CTA/转化 | 免费试用 免费试用             | https://www.zksctest.com/contact.html                       |
| 产品导航   | 供应链风险追踪               | https://www.zksctest.com/ai.html                            |
| 产品导航   | 多模态对抗提升               | https://www.zksctest.com/ai.html                            |
| 产品导航   | LLM安全评测与防护            | https://www.zksctest.com/ai.html                            |
| 产品导航   | 开源大模型安全优化             | https://www.zksctest.com/ai.html                            |
| 产品导航   | Wisdom Lens 灰盒模糊测试    | https://www.zksctest.com/lens.html                          |
| 产品导航   | Swift Pentest 自动化渗透测试 | https://www.zksctest.com/swiftpenstest.html                 |
| 外部链接   | 京ICP备15067074号        | https://beian.miit.gov.cn/                                  |
| 外部链接   | CSDN                  | https://blog.csdn.net/2501_91003657?spm=1011.2480.3001.5343 |
| 外部链接   | 知乎                    | https://www.zhihu.com/                                      |
| 外部链接   | 安全客                   | https://www.anquanke.com                                    |
| 外部链接   | 开源中国                  | https://www.oschina.net                                     |
| 外部链接   | Freebuf               | https://www.freebuf.com/                                    |
| 外部链接   | 51CTO                 | https://blog.51cto.com/                                     |
| 外部链接   | 百家号                   | https://baijiahao.baidu.com/builder/theme/bjh/login         |
| 外部链接   | 今日头条                  | https://www.toutiao.com/                                    |

#### 图片/媒体素材

| Alt                                                  | 路径                                                                              |
| ---------------------------------------------------- | ------------------------------------------------------------------------------- |
| Website Logo                                         | https://www.zksctest.com/img/logo.png                                           |
| Right Arrow                                          | https://www.zksctest.com/images/Right-Arrow.svg                                 |
| (无 alt)                                              | https://www.zksctest.com/images/Right-Arrow-White.svg                           |
| (无 alt)                                              | https://www.zksctest.com/img/ai_1.svg                                           |
| (无 alt)                                              | https://www.zksctest.com/img/ai_2.svg                                           |
| (无 alt)                                              | https://www.zksctest.com/img/ai_3.svg                                           |
| (无 alt)                                              | https://www.zksctest.com/img/ai_4.svg                                           |
| (无 alt)                                              | https://www.zksctest.com/img/ai_5.svg                                           |
| (无 alt)                                              | https://www.zksctest.com/img/ai_6.svg                                           |
| Dashboard screen showing a leads list with column... | https://www.zksctest.com/img/ai_7.png                                           |
| Softly lit rolling hills with green grass under a... | https://www.zksctest.com/images/Hero-Bg_1Hero-Bg.avif                           |
| Pixelated, colorful gradient capsule shape transi... | https://www.zksctest.com/images/Home-01-Bg_1Home-01-Bg.avif                     |
| World map represented by gray dots on a black bac... | https://www.zksctest.com/img/ai_8.png                                           |
| User interface showing two spreadsheet buttons la... | https://www.zksctest.com/img/ai_9.png                                           |
| Dashboard screen showing a leads list with names,... | https://www.zksctest.com/img/ai_11.png                                          |
| World map represented by gray dots on a black bac... | https://www.zksctest.com/img/ai_10.png                                          |
| (无 alt)                                              | https://www.zksctest.com/img/index_1.png                                        |
| (无 alt)                                              | https://www.zksctest.com/img/index_2.png                                        |
| (无 alt)                                              | https://www.zksctest.com/img/index_3.png                                        |
| (无 alt)                                              | https://www.zksctest.com/img/index_5.png                                        |
| (无 alt)                                              | https://www.zksctest.com/img/index_4.png                                        |
| Integration Logo Main                                | https://www.zksctest.com/img/index_6.png                                        |
| Digital abstract pixelated pattern with four over... | https://www.zksctest.com/images/Integration-Tools-Bg_1Integration-Tools-Bg.avif |
| Right hand pointing to the right with the index f... | https://www.zksctest.com/images/Right-Hand_1Right-Hand.avif                     |
| Left hand pointing to the left with the index fin... | https://www.zksctest.com/images/Left-Hand_1Left-Hand.avif                       |

> 另有 4 个图片资源未在摘要表中展开，后续素材迁移前需复核。

#### 表单/输入状态

- 源 HTML 中未识别到 form 标签；如果页面存在弹窗表单或第三方组件，需要截图/手工补充。

#### 本页不可改动项

- 保留本页页面定位和内容范围。
- 保留本页原有按钮文字和跳转目标。
- 保留本页产品/方案/服务信息结构。
- UI 重构只能调整版式、视觉层级、组件样式、动效和响应式表现。

#### 后续验收关注

- 桌面端完整截图待补充。
- 移动端完整截图待补充。
- 导航展开、hover、弹窗、表单成功/失败状态待补充。

### 4. Swift Code 源代码审计产品详情页

- 页面类型：产品详情
- URL：https://www.zksctest.com/swiftcode.html
- 源站备注：保留产品内容与 CTA
- HTTP 状态：200
- HTML 大小：44425 bytes
- SEO title：Swift Code 源代码审计 - 中科数测
- SEO description：Swift Code是一款专业的源代码审计和安全检测工具。支持20多种开发语言，自动识别150多种代码文件，自带3000多条检测规则，开放扫描规则源代码，支持用户自定义，提供SCM事件驱动、计划任务、Open API接口等多种CI/CD集成工具，为软件开发全生命周期提供全面的安全检测服务。
- SEO keywords：源代码审计、源代码安全检测、白盒安全测试、SAST安全测试工具
- Canonical：未识别

#### 页面模块/内容结构

1. **Swift Code 源代码审计**：Swift Code 源代码审计 利用多种技术自动识别语义缺陷、安全漏洞和编码规则等问题，适配国内编码标准和国产环境，支持灵活定制。 免费试用 免费试用
2. **产品功能**：产品功能 代码分析 双引擎检测 软件全方位度量 代码克隆检测 根据用户指定的任意内容，自动生成函数间调用关系图、控制流图，代码审计等。 基本检测引擎支持到达值分析、前支配分析、后支配分析、活跃变量分析等；人工智能检测引擎支持代码基因图谱分析、修改影响分析、类继承关系分析、多态分析等。 提供圈复杂度、函数扇入、函数扇出、代码注释率、代码行数、循环嵌套深度、循环数目、面向对象度量集等指标。 精准识别并定位重复代码，减少冗余和潜在缺陷。
3. **支持20多种开发语言**：支持20多种开发语言 免费试用 免费试用
4. **产品优势**：产品优势 精度与效率平衡 采用了多项国际先进静态分析技术，能够进行路径敏感、上下文敏感、对象敏感分析，检测效率达到了平均每小时150万行。 检测类型全面 兼顾了漏洞、缺陷及编码规则等全部类型的检测，全面发现代码中的各类问题。 专业标准符合度高 支持 MISRA 系列、CERT系列、ISO17961、CN-CERT 、 GJB 5369 、GJB 8114 、航天921等质量及安全编码标准。
5. **准备好为您的组织解锁 安全能力 了吗?**：准备好为您的组织解锁 安全能力 了吗? 马上申请30天免费试用 免费试用 免费试用

#### 标题层级

- H1：Swift Code 源代码审计
- H2：产品功能
- H2：支持20多种开发语言
- H2：产品优势
- H2：DevSecOps集成
- H1：准备好为您的组织解锁 安全能力 了吗?

#### 按钮/链接/跳转

| 类型     | 文字                    | 目标                                                          |
| ------ | --------------------- | ----------------------------------------------------------- |
| 站内页面   | (无文字链接)               | https://www.zksctest.com/index.html                         |
| 产品导航   | Wisdom 模糊测试           | https://www.zksctest.com/wisdom.html                        |
| 产品导航   | Swift AI 综合模型安全检测平台   | https://www.zksctest.com/ai.html                            |
| 产品导航   | Swift SCA 软件成分分析      | https://www.zksctest.com/sca.html                           |
| 产品导航   | Swift Code 源代码审计      | https://www.zksctest.com/swiftcode.html                     |
| 产品导航   | Wisdom Lens 灰盒模糊测试    | https://www.zksctest.com/lens.html                          |
| 产品导航   | Swift Pentest 自动化渗透测试 | https://www.zksctest.com/swiftpenstest.html                 |
| 站内页面   | 数据标准规范检查系统            | https://www.zksctest.com/datacheck.html                     |
| 站内页面   | 软件质量评估系统              | https://www.zksctest.com/softwareassess.html                |
| 解决方案导航 | 网联汽车                  | https://www.zksctest.com/solution-auto.html                 |
| 解决方案导航 | 特种装备                  | https://www.zksctest.com/solution-special.html              |
| 站内页面   | 三方测评                  | https://www.zksctest.com/service-secas.html                 |
| 站内页面   | 渗透测试                  | https://www.zksctest.com/service-penstest.html              |
| 站内页面   | 公司介绍                  | https://www.zksctest.com/about.html                         |
| CTA/转化 | 联系我们                  | https://www.zksctest.com/contact.html                       |
| CTA/转化 | 免费试用 免费试用             | https://www.zksctest.com/contact.html                       |
| 产品导航   | 代码分析                  | https://www.zksctest.com/swiftcode.html                     |
| 产品导航   | 双引擎检测                 | https://www.zksctest.com/swiftcode.html                     |
| 产品导航   | 软件全方位度量               | https://www.zksctest.com/swiftcode.html                     |
| 产品导航   | 代码克隆检测                | https://www.zksctest.com/swiftcode.html                     |
| 外部链接   | 京ICP备15067074号        | https://beian.miit.gov.cn/                                  |
| 外部链接   | CSDN                  | https://blog.csdn.net/2501_91003657?spm=1011.2480.3001.5343 |
| 外部链接   | 知乎                    | https://www.zhihu.com/                                      |
| 外部链接   | 安全客                   | https://www.anquanke.com                                    |
| 外部链接   | 开源中国                  | https://www.oschina.net                                     |
| 外部链接   | Freebuf               | https://www.freebuf.com/                                    |
| 外部链接   | 51CTO                 | https://blog.51cto.com/                                     |
| 外部链接   | 百家号                   | https://baijiahao.baidu.com/builder/theme/bjh/login         |
| 外部链接   | 今日头条                  | https://www.toutiao.com/                                    |

#### 图片/媒体素材

| Alt                                                  | 路径                                                          |
| ---------------------------------------------------- | ----------------------------------------------------------- |
| (无 alt)                                              | https://www.zksctest.com/img/logo.svg                       |
| Right Arrow                                          | https://www.zksctest.com/images/Right-Arrow.svg             |
| (无 alt)                                              | https://www.zksctest.com/images/Right-Arrow-White.svg       |
| (无 alt)                                              | https://www.zksctest.com/img/code_1.png                     |
| Pixelated, colorful gradient capsule shape transi... | https://www.zksctest.com/images/Home-01-Bg_1Home-01-Bg.avif |
| (无 alt)                                              | https://www.zksctest.com/img/code_2.png                     |
| (无 alt)                                              | https://www.zksctest.com/img/code_3.png                     |
| (无 alt)                                              | https://www.zksctest.com/img/code_4.png                     |
| (无 alt)                                              | https://www.zksctest.com/img/code_5.png                     |
| (无 alt)                                              | https://www.zksctest.com/img/code_6.png                     |
| (无 alt)                                              | https://www.zksctest.com/img/code_7.png                     |
| (无 alt)                                              | https://www.zksctest.com/img/code_8.png                     |
| (无 alt)                                              | https://www.zksctest.com/img/code_9.png                     |
| (无 alt)                                              | https://www.zksctest.com/img/code_10.png                    |
| Tools Logo                                           | https://www.zksctest.com/img/code_11.png                    |
| Tools Logo                                           | https://www.zksctest.com/img/code_12.png                    |
| Tools Logo                                           | https://www.zksctest.com/img/code_13.png                    |
| (无 alt)                                              | https://www.zksctest.com/img/code_14.png                    |
| Black oval shape with horizontal white stripes on... | https://www.zksctest.com/images/exclude_1exclude.avif       |
| (无 alt)                                              | https://www.zksctest.com/img/code_15.png                    |
| (无 alt)                                              | https://www.zksctest.com/img/code_16.png                    |
| (无 alt)                                              | https://www.zksctest.com/img/code_17.png                    |
| (无 alt)                                              | https://www.zksctest.com/img/index_1.png                    |
| (无 alt)                                              | https://www.zksctest.com/img/index_2.png                    |
| (无 alt)                                              | https://www.zksctest.com/img/index_3.png                    |

> 另有 11 个图片资源未在摘要表中展开，后续素材迁移前需复核。

#### 表单/输入状态

- 源 HTML 中未识别到 form 标签；如果页面存在弹窗表单或第三方组件，需要截图/手工补充。

#### 本页不可改动项

- 保留本页页面定位和内容范围。
- 保留本页原有按钮文字和跳转目标。
- 保留本页产品/方案/服务信息结构。
- UI 重构只能调整版式、视觉层级、组件样式、动效和响应式表现。

#### 后续验收关注

- 桌面端完整截图待补充。
- 移动端完整截图待补充。
- 导航展开、hover、弹窗、表单成功/失败状态待补充。

### 5. Wisdom Lens 灰盒模糊测试产品详情页

- 页面类型：产品详情
- URL：https://www.zksctest.com/lens.html
- 源站备注：保留产品内容与 CTA
- HTTP 状态：200
- HTML 大小：44440 bytes
- SEO title：Wisdom Lens 灰盒模糊测试 - 中科数测
- SEO description：Wisdom Lens专为发现二进制和源代码中的深层漏洞而设计。它通过插桩实时捕获代码覆盖情况，智能引导测试用例触发更多执行路径。结合强大的变异算法，可自动、持续地挖掘崩溃和内存破坏等关键安全缺陷，显著提升漏洞发现效率，是软件开发与安全测试环节中保障软件质量的利器。
- SEO keywords：模糊测试，灰盒模糊，二进制模糊，动态插桩，自动生存测试驱动
- Canonical：未识别

#### 页面模块/内容结构

1. **Wisdom Lens 灰盒模糊测试**：Wisdom Lens 灰盒模糊测试 基于灰盒测试技术，嵌入DevSecOps流程，自动捕获零日缺陷。 免费试用 免费试用
2. **产品功能**：产品功能 覆盖率反馈和优化 测试驱动生成 缺陷挖掘与定位 提供修复建议 支持代码覆盖率反馈和智能优化，提升测试全面性。 对被测对象进行静态分析，基于大模型自动生成测试驱动。 具备自动挖掘和精准定位缺陷的能力，帮助开发者提升代码质量。 生成详细的测试报告，内容涵盖缺陷的类型和触发缺陷的用例；基于大语言模型提供修复建议并自动生成修复代码，提升修复效率。
3. **产品优势**：产品优势 智能化测试用例构建 基于 AI 大模型自动生成高质量的测试用例，提升漏洞检测的覆盖率与准确性。 漏洞自动复现与 PoC 生成 自动生成最小化输入用例和 PoC 脚本，快速验证漏洞可行性，提升复现效率。 可视化报告与根因定位 展示漏洞相关的函数、调用栈和源代码片段，直观定位问题。
4. **准备好为您的组织解锁 安全能力 了吗?**：准备好为您的组织解锁 安全能力 了吗? 马上申请30天免费试用 免费试用 免费试用

#### 标题层级

- H1：Wisdom Lens 灰盒模糊测试
- H2：产品功能
- H2：多语言&多环境支持
- H2：产品优势
- H2：DevSecOps集成
- H1：准备好为您的组织解锁 安全能力 了吗?

#### 按钮/链接/跳转

| 类型     | 文字                    | 目标                                                          |
| ------ | --------------------- | ----------------------------------------------------------- |
| 站内页面   | (无文字链接)               | https://www.zksctest.com/index.html                         |
| 产品导航   | Wisdom 模糊测试           | https://www.zksctest.com/wisdom.html                        |
| 产品导航   | Swift AI 综合模型安全检测平台   | https://www.zksctest.com/ai.html                            |
| 产品导航   | Swift SCA 软件成分分析      | https://www.zksctest.com/sca.html                           |
| 产品导航   | Swift Code 源代码审计      | https://www.zksctest.com/swiftcode.html                     |
| 产品导航   | Wisdom Lens 灰盒模糊测试    | https://www.zksctest.com/lens.html                          |
| 产品导航   | Swift Pentest 自动化渗透测试 | https://www.zksctest.com/swiftpenstest.html                 |
| 站内页面   | 数据标准规范检查系统            | https://www.zksctest.com/datacheck.html                     |
| 站内页面   | 软件质量评估系统              | https://www.zksctest.com/softwareassess.html                |
| 解决方案导航 | 网联汽车                  | https://www.zksctest.com/solution-auto.html                 |
| 解决方案导航 | 特种装备                  | https://www.zksctest.com/solution-special.html              |
| 站内页面   | 三方测评                  | https://www.zksctest.com/service-secas.html                 |
| 站内页面   | 渗透测试                  | https://www.zksctest.com/service-penstest.html              |
| 站内页面   | 公司介绍                  | https://www.zksctest.com/about.html                         |
| CTA/转化 | 联系我们                  | https://www.zksctest.com/contact.html                       |
| CTA/转化 | 免费试用 免费试用             | https://www.zksctest.com/contact.html                       |
| 产品导航   | 覆盖率反馈和优化              | https://www.zksctest.com/lens.html                          |
| 产品导航   | 测试驱动生成                | https://www.zksctest.com/lens.html                          |
| 产品导航   | 缺陷挖掘与定位               | https://www.zksctest.com/lens.html                          |
| 产品导航   | 提供修复建议                | https://www.zksctest.com/lens.html                          |
| 外部链接   | 京ICP备15067074号        | https://beian.miit.gov.cn/                                  |
| 外部链接   | CSDN                  | https://blog.csdn.net/2501_91003657?spm=1011.2480.3001.5343 |
| 外部链接   | 知乎                    | https://www.zhihu.com/                                      |
| 外部链接   | 安全客                   | https://www.anquanke.com                                    |
| 外部链接   | 开源中国                  | https://www.oschina.net                                     |
| 外部链接   | Freebuf               | https://www.freebuf.com/                                    |
| 外部链接   | 51CTO                 | https://blog.51cto.com/                                     |
| 外部链接   | 百家号                   | https://baijiahao.baidu.com/builder/theme/bjh/login         |
| 外部链接   | 今日头条                  | https://www.toutiao.com/                                    |

#### 图片/媒体素材

| Alt                                                  | 路径                                                          |
| ---------------------------------------------------- | ----------------------------------------------------------- |
| (无 alt)                                              | https://www.zksctest.com/img/logo.svg                       |
| Right Arrow                                          | https://www.zksctest.com/images/Right-Arrow.svg             |
| (无 alt)                                              | https://www.zksctest.com/images/Right-Arrow-White.svg       |
| (无 alt)                                              | https://www.zksctest.com/img/lens_13.png                    |
| (无 alt)                                              | https://www.zksctest.com/img/lens_14.png                    |
| Pixelated, colorful gradient capsule shape transi... | https://www.zksctest.com/images/Home-01-Bg_1Home-01-Bg.avif |
| (无 alt)                                              | https://www.zksctest.com/img/lens_9.png                     |
| (无 alt)                                              | https://www.zksctest.com/img/lens_10.png                    |
| (无 alt)                                              | https://www.zksctest.com/img/lens_11.png                    |
| (无 alt)                                              | https://www.zksctest.com/img/lens_12.png                    |
| (无 alt)                                              | https://www.zksctest.com/img/lens_15.png                    |
| (无 alt)                                              | https://www.zksctest.com/img/lens_16.png                    |
| (无 alt)                                              | https://www.zksctest.com/img/lens_17.png                    |
| (无 alt)                                              | https://www.zksctest.com/img/lens_18.png                    |
| (无 alt)                                              | https://www.zksctest.com/img/lens_19.png                    |
| Tools Logo                                           | https://www.zksctest.com/img/lens_20.png                    |
| Tools Logo                                           | https://www.zksctest.com/img/lens_21.png                    |
| Tools Logo                                           | https://www.zksctest.com/img/lens_22.png                    |
| Black oval shape with horizontal white stripes on... | https://www.zksctest.com/images/exclude_1exclude.avif       |
| Ai Chip                                              | https://www.zksctest.com/images/Ai-Chip.svg                 |
| Camera                                               | https://www.zksctest.com/img/lens_23.png                    |
| Predictive Analysis                                  | https://www.zksctest.com/images/Predictive-Analysis.svg     |
| (无 alt)                                              | https://www.zksctest.com/img/index_1.png                    |
| (无 alt)                                              | https://www.zksctest.com/img/index_2.png                    |
| (无 alt)                                              | https://www.zksctest.com/img/index_3.png                    |

> 另有 11 个图片资源未在摘要表中展开，后续素材迁移前需复核。

#### 表单/输入状态

- 源 HTML 中未识别到 form 标签；如果页面存在弹窗表单或第三方组件，需要截图/手工补充。

#### 本页不可改动项

- 保留本页页面定位和内容范围。
- 保留本页原有按钮文字和跳转目标。
- 保留本页产品/方案/服务信息结构。
- UI 重构只能调整版式、视觉层级、组件样式、动效和响应式表现。

#### 后续验收关注

- 桌面端完整截图待补充。
- 移动端完整截图待补充。
- 导航展开、hover、弹窗、表单成功/失败状态待补充。

### 6. Swift SCA 软件成分分析产品详情页

- 页面类型：产品详情
- URL：https://www.zksctest.com/sca.html
- 源站备注：保留产品内容与 CTA
- HTTP 状态：200
- HTML 大小：54700 bytes
- SEO title：Swift SCA 软件成分分析 - 中科数测
- SEO description：固件漏洞挖掘工具是一款强大的二进制反汇编安全评估平台，旨在提供全面的IoT设备固件安全解决方案。我们自动进行二进制固件分析，提供项目数字孪生指纹工程、高度多属性检测引擎、特性自软件组成分析以及基于特征的智能漏洞过滤机制，全面保障您的软件供应链安全。我们支持20多种硬件架构和操作系统、60多种文件格式，能够精确地识别软件中的公开漏洞和潜在的二进制固件未知漏洞。
- SEO keywords：二进制固件分析、固件漏洞扫描、IoT设备固件安全、二进制反汇编安全评估平台、SCA
- Canonical：未识别

#### 页面模块/内容结构

1. **Swift SCA 软件成分分析**：Swift SCA 软件成分分析 精准检测软件供应链的漏洞与风险，保障组织应用安全与合规。 免费试用 免费试用 OSS 在整个软件开发生命周期中采用统一的开源政策 100% 评估源代码和二进制文件中存在的所有依赖 90%+ 大多数代码库中超过90%的代码 来自开源软件 OSS 在整个软件开发生命周期中采用统一的开源政策 50% 使用预构建的策略和最佳实践自动筛除 50%漏洞和风险 70% 安全审计平均时间减少 70%
2. **产品功能**：产品功能 SBOM与资产管理 保障与漏洞管理 网络合规性 安全事件响应 基于上传的二进制文件、源代码及SBOM文件，进行同源检测、相似性检测、许可证检测，生成高精度、完整的 SBOM 与资产清单。支持自动修复、验证及跨团队的审批流程管理。 基于风险数据系统，自动识别并划分产品风险、漏洞和代码缺陷；并将结果与威胁建模、渗透测试和模糊测试相结合，利用人工智能加速修复与缓解。 为 FDA PMA、ISO 21434、CRA 及组织自定义的政策框架，提供合规证据的管理与自动化生成。 持续监测多重威胁源，提供上下文相关的预警信息，并支持调查分析，以确保您的产品在发布后长期保持安全。
3. **支持20多种硬件架构和操作系统、60多种文件格式**：支持20多种硬件架构和操作系统、60多种文件格式 免费试用 免费试用
4. **产品优势**：产品优势 风险主动防御 快速发现、优先级排序并高效缓解最关键的网络风险、合规性违规及供应链威胁，覆盖您的所有产品线。 合规保障 内置的法规策略与细致的安全评估深度结合，快速生成符合监管要求的报告，覆盖 ISO、FDA、UNECE 及 50+ 其他标准。 海量知识库 GitHub/Sourceforge 等开源库；10万+ 二进制/Jar 等闭源库；CVE/CNVD私有漏洞库，支持 GIT、SVN 及文件夹导入。
5. **准备好为您的组织解锁 安全能力 了吗?**：准备好为您的组织解锁 安全能力 了吗? 马上申请30天免费试用 免费试用 免费试用

#### 标题层级

- H1：Swift SCA 软件成分分析
- H2：产品功能
- H2：支持20多种硬件架构和操作系统、60多种文件格式
- H2：产品优势
- H2：DevSecOps集成
- H1：准备好为您的组织解锁 安全能力 了吗?

#### 按钮/链接/跳转

| 类型     | 文字                    | 目标                                                          |
| ------ | --------------------- | ----------------------------------------------------------- |
| 站内页面   | (无文字链接)               | https://www.zksctest.com/index.html                         |
| 产品导航   | Wisdom 模糊测试           | https://www.zksctest.com/wisdom.html                        |
| 产品导航   | Swift AI 综合模型安全检测平台   | https://www.zksctest.com/ai.html                            |
| 产品导航   | Swift SCA 软件成分分析      | https://www.zksctest.com/sca.html                           |
| 产品导航   | Swift Code 源代码审计      | https://www.zksctest.com/swiftcode.html                     |
| 产品导航   | Wisdom Lens 灰盒模糊测试    | https://www.zksctest.com/lens.html                          |
| 产品导航   | Swift Pentest 自动化渗透测试 | https://www.zksctest.com/swiftpenstest.html                 |
| 站内页面   | 数据标准规范检查系统            | https://www.zksctest.com/datacheck.html                     |
| 站内页面   | 软件质量评估系统              | https://www.zksctest.com/softwareassess.html                |
| 解决方案导航 | 网联汽车                  | https://www.zksctest.com/solution-auto.html                 |
| 解决方案导航 | 特种装备                  | https://www.zksctest.com/solution-special.html              |
| 站内页面   | 三方测评                  | https://www.zksctest.com/service-secas.html                 |
| 站内页面   | 渗透测试                  | https://www.zksctest.com/service-penstest.html              |
| 站内页面   | 公司介绍                  | https://www.zksctest.com/about.html                         |
| CTA/转化 | 联系我们                  | https://www.zksctest.com/contact.html                       |
| CTA/转化 | 免费试用 免费试用             | https://www.zksctest.com/contact.html                       |
| 产品导航   | SBOM与资产管理             | https://www.zksctest.com/sca.html                           |
| 产品导航   | 保障与漏洞管理               | https://www.zksctest.com/sca.html                           |
| 产品导航   | 网络合规性                 | https://www.zksctest.com/sca.html                           |
| 产品导航   | 安全事件响应                | https://www.zksctest.com/sca.html                           |
| 外部链接   | 京ICP备15067074号        | https://beian.miit.gov.cn/                                  |
| 外部链接   | CSDN                  | https://blog.csdn.net/2501_91003657?spm=1011.2480.3001.5343 |
| 外部链接   | 知乎                    | https://www.zhihu.com/                                      |
| 外部链接   | 安全客                   | https://www.anquanke.com                                    |
| 外部链接   | 开源中国                  | https://www.oschina.net                                     |
| 外部链接   | Freebuf               | https://www.freebuf.com/                                    |
| 外部链接   | 51CTO                 | https://blog.51cto.com/                                     |
| 外部链接   | 百家号                   | https://baijiahao.baidu.com/builder/theme/bjh/login         |
| 外部链接   | 今日头条                  | https://www.toutiao.com/                                    |

#### 图片/媒体素材

| Alt                                                  | 路径                                                        |
| ---------------------------------------------------- | --------------------------------------------------------- |
| (无 alt)                                              | https://www.zksctest.com/img/logo.svg                     |
| Right Arrow                                          | https://www.zksctest.com/images/Right-Arrow.svg           |
| (无 alt)                                              | https://www.zksctest.com/images/Right-Arrow-White.svg     |
| (无 alt)                                              | https://www.zksctest.com/img/sca_1.png                    |
| (无 alt)                                              | https://www.zksctest.com/img/sca_2.png                    |
| (无 alt)                                              | https://www.zksctest.com/img/sca_3.png                    |
| (无 alt)                                              | https://www.zksctest.com/img/sca_4.png                    |
| (无 alt)                                              | https://www.zksctest.com/img/sca_5.png                    |
| Retro                                                | https://www.zksctest.com/images/Retro_6.svg               |
| Retro SVG                                            | https://www.zksctest.com/images/Retro_5.svg               |
| Be tech Logo                                         | https://www.zksctest.com/images/Be-tech-Logo.svg          |
| Blonde woman in a black blouse standing next to a... | https://www.zksctest.com/images/Client-03_1Client-03.avif |
| Smiling man in a dark blue blazer sitting at a de... | https://www.zksctest.com/images/Client-04_1Client-04.avif |
| (无 alt)                                              | https://www.zksctest.com/img/sca_6.png                    |
| (无 alt)                                              | https://www.zksctest.com/img/sca_7.png                    |
| (无 alt)                                              | https://www.zksctest.com/img/sca_8.png                    |
| (无 alt)                                              | https://www.zksctest.com/img/sca_9.png                    |
| (无 alt)                                              | https://www.zksctest.com/img/sca_10.png                   |
| (无 alt)                                              | https://www.zksctest.com/img/sca_11.png                   |
| (无 alt)                                              | https://www.zksctest.com/img/sca_12.png                   |
| (无 alt)                                              | https://www.zksctest.com/img/sca_13.png                   |
| (无 alt)                                              | https://www.zksctest.com/img/sca_14.png                   |
| Tools Logo                                           | https://www.zksctest.com/img/sca_15.png                   |
| Tools Logo                                           | https://www.zksctest.com/img/sca_16.png                   |
| Tools Logo                                           | https://www.zksctest.com/img/sca_17.png                   |

> 另有 20 个图片资源未在摘要表中展开，后续素材迁移前需复核。

#### 表单/输入状态

- 源 HTML 中未识别到 form 标签；如果页面存在弹窗表单或第三方组件，需要截图/手工补充。

#### 本页不可改动项

- 保留本页页面定位和内容范围。
- 保留本页原有按钮文字和跳转目标。
- 保留本页产品/方案/服务信息结构。
- UI 重构只能调整版式、视觉层级、组件样式、动效和响应式表现。

#### 后续验收关注

- 桌面端完整截图待补充。
- 移动端完整截图待补充。
- 导航展开、hover、弹窗、表单成功/失败状态待补充。

### 7. Swift Pentest 自动化渗透测试产品详情页

- 页面类型：产品详情
- URL：https://www.zksctest.com/swiftpenstest.html
- 源站备注：保留产品内容与 CTA
- HTTP 状态：200
- HTML 大小：50757 bytes
- SEO title：Swift Pentest 自动化渗透测试 - 中科数测
- SEO description：Swift Pentest结合 AI 与黑客技术，打造的一款自动化安全验证产品。 从攻击者的视角出发，为客户提供持续性网络安全验证服务，帮助用户验证网络资产安全性以及网络环境安全控制有效性，提升用户整体网络目标、系统目标的安全性。通过在真实环境中模拟“黑客攻击技战术”动态生成攻击杀伤链，对用户网络进行真实的渗透攻击，逐项排查网络中的脆弱点。
- SEO keywords：自动化渗透测试，渗透测试，漏扫，漏洞扫描，漏洞检测，漏洞验证，攻击利用，资产发现
- Canonical：未识别

#### 页面模块/内容结构

1. **Swift Pentest 自动化渗透测试**：Swift Pentest 自动化渗透测试 结合AI与渗透攻防技术，自动化探析攻击链，优先定位高风险漏洞，化被动防御为主动应对。 免费试用 免费试用 全协议智能探测，支持多种端口探测与协议识别，精准发现资产。 自动化渗透闭环，从发现到利用全自动，支持迭代与横向攻击。 漏洞库全面覆盖，内置超20万漏洞知识，覆盖多类型系统与设备。 灵活场景与扩展，支持自定义场景、模块插件化，适应各类环境。 企业级管控与协同，提供多级权限、审计日志与合规报告输出。 全协议智能探测，支持多种端口探测与协议识别，精准发现资产。 45% Automated workflows cut costs by 45% 25% Retro boosted data a...
2. **产品功能**：产品功能 攻击面识别 漏洞扫描与验证 智能化渗透测试 风险报告生成 支持自动挖掘各种攻击面信息，包括端口服务、WEB指纹、URL、后台登录入口、文件上传入口等。 支持对多种漏洞进行检测，包括系统漏洞、Web应用漏洞等，并对扫描出的漏洞进行验证。 自主分析并探索可能的攻击路径，自动进行多轮攻击尝试与横向渗透。 通过攻击链图的方式直观呈现渗透攻击路径。
3. **产品优势**：产品优势 高精准 内置漏洞验证与利用组件，确保漏洞经过充分验证并可深入利用进行风险检查。 自预警 通过攻击模拟与态势感知联动，主动检测并预警网络资产风险。 低成本 以自动化为主的人机结合模式，降低安全验证的人力依赖与实施成本。
4. **DevSecOps集成**：DevSecOps集成 免费试用 免费试用
5. **准备好为您的组织解锁 安全能力 了吗?**：准备好为您的组织解锁 安全能力 了吗? 马上申请30天免费试用 联系我们 联系我们

#### 标题层级

- H1：Swift Pentest 自动化渗透测试
- H2：产品功能
- H2：产品优势
- H2：DevSecOps集成
- H1：准备好为您的组织解锁 安全能力 了吗?

#### 按钮/链接/跳转

| 类型     | 文字                    | 目标                                                          |
| ------ | --------------------- | ----------------------------------------------------------- |
| 站内页面   | (无文字链接)               | https://www.zksctest.com/index.html                         |
| 产品导航   | Wisdom 模糊测试           | https://www.zksctest.com/wisdom.html                        |
| 产品导航   | Swift AI 综合模型安全检测平台   | https://www.zksctest.com/ai.html                            |
| 产品导航   | Swift SCA 软件成分分析      | https://www.zksctest.com/sca.html                           |
| 产品导航   | Swift Code 源代码审计      | https://www.zksctest.com/swiftcode.html                     |
| 产品导航   | Wisdom Lens 灰盒模糊测试    | https://www.zksctest.com/lens.html                          |
| 产品导航   | Swift Pentest 自动化渗透测试 | https://www.zksctest.com/swiftpenstest.html                 |
| 站内页面   | 数据标准规范检查系统            | https://www.zksctest.com/datacheck.html                     |
| 站内页面   | 软件质量评估系统              | https://www.zksctest.com/softwareassess.html                |
| 解决方案导航 | 网联汽车                  | https://www.zksctest.com/solution-auto.html                 |
| 解决方案导航 | 特种装备                  | https://www.zksctest.com/solution-special.html              |
| 站内页面   | 三方测评                  | https://www.zksctest.com/service-secas.html                 |
| 站内页面   | 渗透测试                  | https://www.zksctest.com/service-penstest.html              |
| 站内页面   | 公司介绍                  | https://www.zksctest.com/about.html                         |
| CTA/转化 | 联系我们                  | https://www.zksctest.com/contact.html                       |
| CTA/转化 | 免费试用 免费试用             | https://www.zksctest.com/contact.html                       |
| 产品导航   | 攻击面识别                 | https://www.zksctest.com/swiftpenstest.html                 |
| 产品导航   | 漏洞扫描与验证               | https://www.zksctest.com/swiftpenstest.html                 |
| 产品导航   | 智能化渗透测试               | https://www.zksctest.com/swiftpenstest.html                 |
| 产品导航   | 风险报告生成                | https://www.zksctest.com/swiftpenstest.html                 |
| CTA/转化 | 免费试用 免费试用             | https://www.zksctest.com/integration.html                   |
| CTA/转化 | 联系我们 联系我们             | https://www.zksctest.com/contact.html                       |
| 外部链接   | 京ICP备15067074号        | https://beian.miit.gov.cn/                                  |
| 外部链接   | CSDN                  | https://blog.csdn.net/2501_91003657?spm=1011.2480.3001.5343 |
| 外部链接   | 知乎                    | https://www.zhihu.com/                                      |
| 外部链接   | 安全客                   | https://www.anquanke.com                                    |
| 外部链接   | 开源中国                  | https://www.oschina.net                                     |
| 外部链接   | Freebuf               | https://www.freebuf.com/                                    |
| 外部链接   | 51CTO                 | https://blog.51cto.com/                                     |
| 外部链接   | 百家号                   | https://baijiahao.baidu.com/builder/theme/bjh/login         |
| 外部链接   | 今日头条                  | https://www.toutiao.com/                                    |

#### 图片/媒体素材

| Alt                                                  | 路径                                                        |
| ---------------------------------------------------- | --------------------------------------------------------- |
| (无 alt)                                              | https://www.zksctest.com/img/logo.svg                     |
| Right Arrow                                          | https://www.zksctest.com/images/Right-Arrow.svg           |
| (无 alt)                                              | https://www.zksctest.com/images/Right-Arrow-White.svg     |
| (无 alt)                                              | https://www.zksctest.com/img/swiftPenstest_2.png          |
| (无 alt)                                              | https://www.zksctest.com/img/swiftPenstest_3.png          |
| (无 alt)                                              | https://www.zksctest.com/img/swiftPenstest_4.png          |
| (无 alt)                                              | https://www.zksctest.com/img/swiftPenstest_5.png          |
| (无 alt)                                              | https://www.zksctest.com/img/swiftPenstest_1.png          |
| Be tech Logo                                         | https://www.zksctest.com/images/Be-tech-Logo.svg          |
| Retro SVG                                            | https://www.zksctest.com/images/Retro_5.svg               |
| Blonde woman in a black blouse standing next to a... | https://www.zksctest.com/images/Client-03_1Client-03.avif |
| Smiling man in a dark blue blazer sitting at a de... | https://www.zksctest.com/img/swiftpenstest_1.png          |
| Retro                                                | https://www.zksctest.com/images/Retro_6.svg               |
| (无 alt)                                              | https://www.zksctest.com/img/swiftPenstest_6.png          |
| (无 alt)                                              | https://www.zksctest.com/img/swiftPenstest_7.png          |
| (无 alt)                                              | https://www.zksctest.com/img/swiftPenstest_8.png          |
| (无 alt)                                              | https://www.zksctest.com/img/swiftPenstest_9.png          |
| Cloud storage                                        | https://www.zksctest.com/images/Cloud-storage.svg         |
| Prices Continue                                      | https://www.zksctest.com/images/Prices-Continue.svg       |
| Databases                                            | https://www.zksctest.com/images/Databases.svg             |
| Integration Logo                                     | https://www.zksctest.com/images/Integration-Logo-04.svg   |
| Tools Logo                                           | https://www.zksctest.com/images/Tools-Logo_4.svg          |
| Integration Logo                                     | https://www.zksctest.com/images/Integration-Logo.svg      |
| Integration Logo                                     | https://www.zksctest.com/images/Integration-Logo-06.svg   |
| Integration Logo 05                                  | https://www.zksctest.com/images/Integration-Logo-05.svg   |

> 另有 12 个图片资源未在摘要表中展开，后续素材迁移前需复核。

#### 表单/输入状态

- 源 HTML 中未识别到 form 标签；如果页面存在弹窗表单或第三方组件，需要截图/手工补充。

#### 本页不可改动项

- 保留本页页面定位和内容范围。
- 保留本页原有按钮文字和跳转目标。
- 保留本页产品/方案/服务信息结构。
- UI 重构只能调整版式、视觉层级、组件样式、动效和响应式表现。

#### 后续验收关注

- 桌面端完整截图待补充。
- 移动端完整截图待补充。
- 导航展开、hover、弹窗、表单成功/失败状态待补充。

### 8. 网联汽车解决方案页面

- 页面类型：解决方案
- URL：https://www.zksctest.com/solution-auto.html
- 源站备注：保留方案内容与页面逻辑
- HTTP 状态：200
- HTML 大小：44189 bytes
- SEO title：网联汽车 - 中科数测
- SEO description：未识别
- SEO keywords：未识别
- Canonical：未识别

#### 页面模块/内容结构

1. **网联汽车 信息安全实验室 解决方案**：网联汽车 信息安全实验室 解决方案 以“工具链+合规”双轮驱动，为汽车主机厂、检测机构、零部件厂商一站式交付覆盖 GB 44495 与 R155 全项检测所需的完整实验能力，助您快速拥有自主可控的信息安全验证中心。 咨询方案 咨询方案
2. **方案概述**：方案概述 围绕 GB 44495-2024《汽车整车信息安全技术要求》与 UNECE R155 法规框架，将固件漏洞扫描平台、Wisdom 模糊测试工具等旗舰产品整合为“交钥匙”级实验室工具链。客户无需外购检测服务，即可在自有实验环境中完成从威胁分析（TARA）到固件、协议、整车、云端的全栈安全验证，实现“法规合规+风险前置”双重目标。 咨询方案 咨询方案
3. **方案组成**：方案组成 OTA与固件安全 固件漏洞扫描平台：自动化拆解 ECU/TCU 固件，生成 SBOM，持续监测 CVE、许可证及加密合规。 通信与协议安全 Wisdom 系列模糊测试机：覆盖 CAN/Ethernet/Bluetooth/Wi-Fi/DOIP/SOME IP等全场景车载协议，支持协议已知漏洞和未知漏洞挖掘。 硬件与芯片安全 侧信道分析台、故障注入台、JTAG/SWD 接口扫描器，满足 R155 对硬件安全启动、密钥存储的验证要求。 整车台架攻防区 实车网关、域控制器接入机柜，一键切换实验室与道路场景；集成无线信号屏蔽、车载以太网流量回放、OTA 升级沙箱。 数据与合规管理 TARA 威胁分析：内置 GB 44495 &...
4. **价值优势**：价值优势 工具即合规 所有工具均通过 CNAS 框架下的比对验证，可直接生成具备认证效力的原始记录与报告。 一键自动化 从固件拆包、SBOM 生成到模糊测试、报告输出全程脚本化，平均缩短 70% 检测周期。 人才体系配套 提供 R155 、GB 44495 测试工程师代教培训路径，帮助信息安全实验室快速通过 CNAS评审。 总拥有成本低 相比外购检测服务，3 年内可为企业节省约 60% 合规支出，并可以支撑多车型并行验证。
5. **业务场景**：业务场景 国标GB44495实验室建设 外部连接安全要求 蜂窝/蓝牙/Wi-Fi/NFC 等多模入口统一接入，支持信号层、协议层、应用层三步入侵检测，提前发现越权接入、中间人、重放等攻击路径。 通信安全要求 覆盖车内总线与车外网络，提供加密一致性、证书有效性与握手鲁棒性验证，确保控车指令、远程诊断、V2X 消息完整可信。 软件升级安全要求 针对 OTA 包、差分包、回滚包进行签名验证、防篡改校验与异常中断恢复测试，保障升级链路不可抵赖、不可降级。 数据安全要求 对车端敏感数据的全生命周期进行加密强度、销毁深度与匿名化效果评估，防止个人信息、密钥素材及行驶数据被逆向还原。 欧盟R155实验室建设 CSMS 技术验证 以 Wisdom...
6. **准备好为您的组织解锁 安全能力 了吗?**：准备好为您的组织解锁 安全能力 了吗? 马上申请30天免费试用 咨询方案 咨询方案

#### 标题层级

- H1：网联汽车 信息安全实验室 解决方案
- H2：方案概述
- H2：方案组成
- H2：价值优势
- H2：业务场景
- H1：准备好为您的组织解锁 安全能力 了吗?

#### 按钮/链接/跳转

| 类型     | 文字                                                             | 目标                                                                 |
| ------ | -------------------------------------------------------------- | ------------------------------------------------------------------ |
| 站内页面   | (无文字链接)                                                        | https://www.zksctest.com/index.html                                |
| 产品导航   | Wisdom 模糊测试                                                    | https://www.zksctest.com/wisdom.html                               |
| 产品导航   | Swift AI 综合模型安全检测平台                                            | https://www.zksctest.com/ai.html                                   |
| 产品导航   | Swift SCA 软件成分分析                                               | https://www.zksctest.com/sca.html                                  |
| 产品导航   | Swift Code 源代码审计                                               | https://www.zksctest.com/swiftcode.html                            |
| 产品导航   | Wisdom Lens 灰盒模糊测试                                             | https://www.zksctest.com/lens.html                                 |
| 产品导航   | Swift Pentest 自动化渗透测试                                          | https://www.zksctest.com/swiftpenstest.html                        |
| 站内页面   | 数据标准规范检查系统                                                     | https://www.zksctest.com/datacheck.html                            |
| 站内页面   | 软件质量评估系统                                                       | https://www.zksctest.com/softwareassess.html                       |
| 解决方案导航 | 网联汽车                                                           | https://www.zksctest.com/solution-auto.html                        |
| 解决方案导航 | 特种装备                                                           | https://www.zksctest.com/solution-special.html                     |
| 站内页面   | 三方测评                                                           | https://www.zksctest.com/service-secas.html                        |
| 站内页面   | 渗透测试                                                           | https://www.zksctest.com/service-penstest.html                     |
| 站内页面   | 公司介绍                                                           | https://www.zksctest.com/about.html                                |
| CTA/转化 | 联系我们                                                           | https://www.zksctest.com/contact.html                              |
| CTA/转化 | 免费试用 免费试用                                                      | https://www.zksctest.com/contact.html                              |
| CTA/转化 | 咨询方案 咨询方案                                                      | https://www.zksctest.com/contact.html                              |
| 解决方案导航 | 外部连接安全要求 蜂窝/蓝牙/Wi-Fi/NFC 等多模入口统一接入，支持信号层、协议层、应用层三步入侵检测，提前发现... | https://www.zksctest.com/solution-auto.html#w-tabs-0-data-w-pane-0 |
| 解决方案导航 | 通信安全要求 覆盖车内总线与车外网络，提供加密一致性、证书有效性与握手鲁棒性验证，确保控车指令、远程诊断、V2X 消息... | https://www.zksctest.com/solution-auto.html#w-tabs-0-data-w-pane-1 |
| 解决方案导航 | 软件升级安全要求 针对 OTA 包、差分包、回滚包进行签名验证、防篡改校验与异常中断恢复测试，保障升级链路不可抵赖、不... | https://www.zksctest.com/solution-auto.html#w-tabs-0-data-w-pane-2 |
| 解决方案导航 | 数据安全要求 对车端敏感数据的全生命周期进行加密强度、销毁深度与匿名化效果评估，防止个人信息、密钥素材及行驶数据被逆向... | https://www.zksctest.com/solution-auto.html#w-tabs-0-data-w-pane-2 |
| 产品导航   | CSMS 技术验证 以 Wisdom 模糊测试平台对整车及零部件进行持续渗透测试，为主机厂 CSMS 审核提供技术证据... | https://www.zksctest.com/solution-auto.html#w-tabs-0-data-w-pane-0 |
| 解决方案导航 | VTA 型式认证抽样 针对 TARA 高风险项（如网关、T-box）进行重点复测，生成认证机构认可的测试报告。        | https://www.zksctest.com/solution-auto.html#w-tabs-0-data-w-pane-1 |
| 解决方案导航 | 供应链安全审查 利用 固件分析技术对第三方固件进行 SBOM 与漏洞比对，帮助 OEM 向审核员展示供应链风险管理过程。   | https://www.zksctest.com/solution-auto.html#w-tabs-0-data-w-pane-2 |
| 外部链接   | 京ICP备15067074号                                                 | https://beian.miit.gov.cn/                                         |
| 外部链接   | CSDN                                                           | https://blog.csdn.net/2501_91003657?spm=1011.2480.3001.5343        |
| 外部链接   | 知乎                                                             | https://www.zhihu.com/                                             |
| 外部链接   | 安全客                                                            | https://www.anquanke.com                                           |
| 外部链接   | 开源中国                                                           | https://www.oschina.net                                            |
| 外部链接   | Freebuf                                                        | https://www.freebuf.com/                                           |
| 外部链接   | 51CTO                                                          | https://blog.51cto.com/                                            |
| 外部链接   | 百家号                                                            | https://baijiahao.baidu.com/builder/theme/bjh/login                |
| 外部链接   | 今日头条                                                           | https://www.toutiao.com/                                           |

#### 图片/媒体素材

| Alt                                                  | 路径                                                          |
| ---------------------------------------------------- | ----------------------------------------------------------- |
| (无 alt)                                              | https://www.zksctest.com/img/logo.svg                       |
| Right Arrow                                          | https://www.zksctest.com/images/Right-Arrow.svg             |
| (无 alt)                                              | https://www.zksctest.com/images/Right-Arrow-White.svg       |
| (无 alt)                                              | https://www.zksctest.com/img/car_1.png                      |
| (无 alt)                                              | https://www.zksctest.com/img/car_2.png                      |
| Pixelated, colorful gradient capsule shape transi... | https://www.zksctest.com/images/Home-01-Bg_1Home-01-Bg.avif |
| (无 alt)                                              | https://www.zksctest.com/img/car_3.png                      |
| Integration SVG                                      | https://www.zksctest.com/img/car_10.png                     |
| (无 alt)                                              | https://www.zksctest.com/images/Cloud-storage.svg           |
| (无 alt)                                              | https://www.zksctest.com/img/car_11.png                     |
| (无 alt)                                              | https://www.zksctest.com/img/car_12.png                     |
| (无 alt)                                              | https://www.zksctest.com/img/car_13.png                     |
| (无 alt)                                              | https://www.zksctest.com/img/car_6.svg                      |
| (无 alt)                                              | https://www.zksctest.com/img/car_8.svg                      |
| (无 alt)                                              | https://www.zksctest.com/img/car_7.svg                      |
| (无 alt)                                              | https://www.zksctest.com/img/car_9.svg                      |
| (无 alt)                                              | https://www.zksctest.com/img/car_14.png                     |
| (无 alt)                                              | https://www.zksctest.com/img/car_15.png                     |
| (无 alt)                                              | https://www.zksctest.com/img/car_16.png                     |
| (无 alt)                                              | https://www.zksctest.com/img/car_17.png                     |
| (无 alt)                                              | https://www.zksctest.com/img/car_4.png                      |
| (无 alt)                                              | https://www.zksctest.com/img/car_5.png                      |
| (无 alt)                                              | https://www.zksctest.com/img/car_18.png                     |
| (无 alt)                                              | https://www.zksctest.com/img/car_19.png                     |
| (无 alt)                                              | https://www.zksctest.com/img/car_20.png                     |

> 另有 7 个图片资源未在摘要表中展开，后续素材迁移前需复核。

#### 表单/输入状态

- 源 HTML 中未识别到 form 标签；如果页面存在弹窗表单或第三方组件，需要截图/手工补充。

#### 本页不可改动项

- 保留本页页面定位和内容范围。
- 保留本页原有按钮文字和跳转目标。
- 保留本页产品/方案/服务信息结构。
- UI 重构只能调整版式、视觉层级、组件样式、动效和响应式表现。

#### 后续验收关注

- 桌面端完整截图待补充。
- 移动端完整截图待补充。
- 导航展开、hover、弹窗、表单成功/失败状态待补充。

### 9. 特种装备解决方案页面

- 页面类型：解决方案
- URL：https://www.zksctest.com/solution-special.html
- 源站备注：保留方案内容与页面逻辑
- HTTP 状态：200
- HTML 大小：34480 bytes
- SEO title：特种装备 - 中科数测
- SEO description：未识别
- SEO keywords：未识别
- Canonical：未识别

#### 页面模块/内容结构

1. **特种领域 网络安全实验 解决方案**：特种领域 网络安全实验 解决方案 以“工具链+合规”双引擎，为研究所、测评中心、装备承制单位交付覆盖脆弱性、渗透性、生存性全指标的自主可控实验能力，一站式打造特种网络安全验证高地。 咨询方案 咨询方案
2. **方案概述**：方案概述 围绕特种领域网络安全实验评价体系，中科数测将自研国产代码静态扫描、固件漏洞挖掘、自主可控模糊测试、硬件侧信道分析等核心工具整合为“交钥匙”级实验平台。客户无需外购检测服务，即可在自有环境中完成从源码、固件、板卡到整机系统的脆弱性发现、渗透验证与生存性评估，实现“风险前置—整改闭环—合规举证”全周期管控。 咨询方案 咨询方案
3. **方案组成**：方案组成 脆弱性发现 多引擎代码扫描平台：二十多种语言包含C/C++、JAVA、汇编一站式静态分析，自动生成缺陷图谱与GJB代码合规报告。 国产固件清点平台：一键拆解 BSP/驱动/FPGA 映像，输出 SBOM 与 CVE 映射，定位过期加密库与硬编码密钥。 渗透性验证 Wisdom 协议模糊测试机：覆盖1553B、CAN-FD、以太网等装备总线，挖掘未知漏洞。 硬件安全测试台：侧信道分析、故障注入、JTAG/SWD 扫描，验证安全启动、密钥存储、防熔断机制能否被绕过。 生存性评估 实装半实物仿真机柜：可注入掉电、强电磁、断链、异常报文洪流，记录装备系统在降级模式下的功能连续性与数据完整性。 攻击后恢复验证模块：模拟恶意更新、固...
4. **价值优势**：价值优势 工具即合规 所有工具通过相关比对验证，可直接生成具备评审效力的原始记录与报告。 自主可控 核心模糊测试引擎与硬件分析模块完全国产化，支持源码级定制，保护核心知识产权。 一键自动化 从源码扫描、固件拆包到模糊测试、故障注入、报告输出全程脚本化，缩短 70% 实验周期。 总拥有成本低 相比外购检测服务，3 年内可节省约 60% 实验支出，并支撑多型装备并行验证。
5. **业务场景**：业务场景 装备脆弱性测试 源码缺陷普查：对等关键软件进行一夜级扫描，定位缓冲区溢出、整数溢出、命令注入等高危缺陷。 固件 SBOM 清点：自动提取装备的第三方组件与许可证，提前发现过期加密库、硬编码密钥。 装备渗透性测试 利用 Wisdom 模糊平台对 1553B、CAN-FD、以太网等装备总线进行测试，验证消息校验、重放保护、访问控制的有效性。 针对数据链等无线通道实施信号层劫持、协议层重放与应用层伪造，考核加密通道与证书链的鲁棒性。 装备生存性测试 通过半实物仿真机柜注入掉电、异常复位、强电磁脉冲，检验装备系统在降级模式下核心功能的连续可用与数据完整性。 模拟恶意更新、固件篡改、配置破坏，评估系统自恢复、日志留存与可信重启动机...
6. **准备好为您的组织解锁 安全能力 了吗?**：准备好为您的组织解锁 安全能力 了吗? 马上申请30天免费试用 咨询方案 咨询方案

#### 标题层级

- H1：特种领域 网络安全实验 解决方案
- H2：方案概述
- H2：方案组成
- H2：价值优势
- H2：业务场景
- H1：准备好为您的组织解锁 安全能力 了吗?

#### 按钮/链接/跳转

| 类型     | 文字                    | 目标                                                          |
| ------ | --------------------- | ----------------------------------------------------------- |
| 站内页面   | (无文字链接)               | https://www.zksctest.com/index.html                         |
| 产品导航   | Wisdom 模糊测试           | https://www.zksctest.com/wisdom.html                        |
| 产品导航   | Swift AI 综合模型安全检测平台   | https://www.zksctest.com/ai.html                            |
| 产品导航   | Swift SCA 软件成分分析      | https://www.zksctest.com/sca.html                           |
| 产品导航   | Swift Code 源代码审计      | https://www.zksctest.com/swiftcode.html                     |
| 产品导航   | Wisdom Lens 灰盒模糊测试    | https://www.zksctest.com/lens.html                          |
| 产品导航   | Swift Pentest 自动化渗透测试 | https://www.zksctest.com/swiftpenstest.html                 |
| 站内页面   | 数据标准规范检查系统            | https://www.zksctest.com/datacheck.html                     |
| 站内页面   | 软件质量评估系统              | https://www.zksctest.com/softwareassess.html                |
| 解决方案导航 | 网联汽车                  | https://www.zksctest.com/solution-auto.html                 |
| 解决方案导航 | 特种装备                  | https://www.zksctest.com/solution-special.html              |
| 站内页面   | 三方测评                  | https://www.zksctest.com/service-secas.html                 |
| 站内页面   | 渗透测试                  | https://www.zksctest.com/service-penstest.html              |
| 站内页面   | 公司介绍                  | https://www.zksctest.com/about.html                         |
| CTA/转化 | 联系我们                  | https://www.zksctest.com/contact.html                       |
| CTA/转化 | 免费试用 免费试用             | https://www.zksctest.com/contact.html                       |
| CTA/转化 | 咨询方案 咨询方案             | https://www.zksctest.com/contact.html                       |
| 外部链接   | 京ICP备15067074号        | https://beian.miit.gov.cn/                                  |
| 外部链接   | CSDN                  | https://blog.csdn.net/2501_91003657?spm=1011.2480.3001.5343 |
| 外部链接   | 知乎                    | https://www.zhihu.com/                                      |
| 外部链接   | 安全客                   | https://www.anquanke.com                                    |
| 外部链接   | 开源中国                  | https://www.oschina.net                                     |
| 外部链接   | Freebuf               | https://www.freebuf.com/                                    |
| 外部链接   | 51CTO                 | https://blog.51cto.com/                                     |
| 外部链接   | 百家号                   | https://baijiahao.baidu.com/builder/theme/bjh/login         |
| 外部链接   | 今日头条                  | https://www.toutiao.com/                                    |

#### 图片/媒体素材

| Alt                                                  | 路径                                                          |
| ---------------------------------------------------- | ----------------------------------------------------------- |
| (无 alt)                                              | https://www.zksctest.com/img/logo.svg                       |
| Right Arrow                                          | https://www.zksctest.com/images/Right-Arrow.svg             |
| (无 alt)                                              | https://www.zksctest.com/images/Right-Arrow-White.svg       |
| (无 alt)                                              | https://www.zksctest.com/img/special_1.png                  |
| (无 alt)                                              | https://www.zksctest.com/img/special_2.png                  |
| Pixelated, colorful gradient capsule shape transi... | https://www.zksctest.com/images/Home-01-Bg_1Home-01-Bg.avif |
| (无 alt)                                              | https://www.zksctest.com/img/special_3.png                  |
| (无 alt)                                              | https://www.zksctest.com/img/special_7.png                  |
| (无 alt)                                              | https://www.zksctest.com/img/special_8.png                  |
| (无 alt)                                              | https://www.zksctest.com/img/special_9.png                  |
| (无 alt)                                              | https://www.zksctest.com/img/special_10.png                 |
| (无 alt)                                              | https://www.zksctest.com/img/car_6.svg                      |
| (无 alt)                                              | https://www.zksctest.com/img/car_8.svg                      |
| (无 alt)                                              | https://www.zksctest.com/img/car_7.svg                      |
| (无 alt)                                              | https://www.zksctest.com/img/car_9.svg                      |
| (无 alt)                                              | https://www.zksctest.com/img/special_4.png                  |
| Wallets                                              | https://www.zksctest.com/images/Wallets.svg                 |
| (无 alt)                                              | https://www.zksctest.com/img/special_11.png                 |
| (无 alt)                                              | https://www.zksctest.com/img/special_5.png                  |
| (无 alt)                                              | https://www.zksctest.com/img/special_12.png                 |
| Check Icon SVG                                       | https://www.zksctest.com/images/Check-Icon.svg              |
| (无 alt)                                              | https://www.zksctest.com/img/special_6.png                  |
| (无 alt)                                              | https://www.zksctest.com/img/special_13.png                 |
| Right hand pointing to the right with the index f... | https://www.zksctest.com/images/Right-Hand_1Right-Hand.avif |
| Left hand pointing to the left with the index fin... | https://www.zksctest.com/images/Left-Hand_1Left-Hand.avif   |

> 另有 5 个图片资源未在摘要表中展开，后续素材迁移前需复核。

#### 表单/输入状态

- 源 HTML 中未识别到 form 标签；如果页面存在弹窗表单或第三方组件，需要截图/手工补充。

#### 本页不可改动项

- 保留本页页面定位和内容范围。
- 保留本页原有按钮文字和跳转目标。
- 保留本页产品/方案/服务信息结构。
- UI 重构只能调整版式、视觉层级、组件样式、动效和响应式表现。

#### 后续验收关注

- 桌面端完整截图待补充。
- 移动端完整截图待补充。
- 导航展开、hover、弹窗、表单成功/失败状态待补充。

### 10. 技术服务渗透测试页面

- 页面类型：技术服务
- URL：https://www.zksctest.com/service-penstest.html
- 源站备注：保留服务内容与咨询路径
- HTTP 状态：200
- HTML 大小：34982 bytes
- SEO title：渗透测试 - 中科数测
- SEO description：未识别
- SEO keywords：未识别
- Canonical：未识别

#### 页面模块/内容结构

1. **渗透测试服务**：渗透测试服务 整车及零部件做渗透测试与安全验证服务模糊测试。 联系我们 联系我们
2. **面向整车及零部件做渗透测试**：面向整车及零部件做渗透测试 通过模拟恶意黑客的攻击方法，来评估整车及零部件是否相对安全。从攻击者的角度出发，对系统的弱点、 技术缺陷或漏洞主动分析。通过渗透测试服务可以验证在当前的安全防护措施下网络、信息系统抵抗入侵者攻击的能力。帮助客户在真实攻击发生前发现漏洞、验证防护效果，构建系统级的安全防御能力。 2 2 3 4 5 6 7 8 9 1 0 8 2 3 4 5 6 7 8 9 2 3 4 5 8 6 7 9 2 0 % 测试覆盖率100% 2 2 3 4 5 6 7 8 9 5 0 2 3 4 5 6 7 8 9 4 1 2 3 4 5 6 7 8 9 0 + 500+测试用例 2 2 3 4 5 6 7 8 9 9 5 2...
3. **服务优势**：服务优势 专业团队 由大赛获奖、实战经验丰富的专家领衔，提供领先的专业技术实力保障。 全流程服务 提供从准备、渗透到加固复测的完整可视化流程，并有专家全程解答陪伴。 高效全面 测试周期快速，内容全面覆盖信息安全的各个层面与系统全生命周期，确保安全实效性。
4. **准备好为您的组织解锁 安全能力 了吗?**：准备好为您的组织解锁 安全能力 了吗? 马上申请30天免费试用 联系我们 联系我们

#### 标题层级

- H1：渗透测试服务
- H2：面向整车及零部件做渗透测试
- H2：服务优势
- H2：检测内容
- H1：准备好为您的组织解锁 安全能力 了吗?

#### 按钮/链接/跳转

| 类型     | 文字                    | 目标                                                          |
| ------ | --------------------- | ----------------------------------------------------------- |
| 站内页面   | (无文字链接)               | https://www.zksctest.com/index.html                         |
| 产品导航   | Wisdom 模糊测试           | https://www.zksctest.com/wisdom.html                        |
| 产品导航   | Swift AI 综合模型安全检测平台   | https://www.zksctest.com/ai.html                            |
| 产品导航   | Swift SCA 软件成分分析      | https://www.zksctest.com/sca.html                           |
| 产品导航   | Swift Code 源代码审计      | https://www.zksctest.com/swiftcode.html                     |
| 产品导航   | Wisdom Lens 灰盒模糊测试    | https://www.zksctest.com/lens.html                          |
| 产品导航   | Swift Pentest 自动化渗透测试 | https://www.zksctest.com/swiftpenstest.html                 |
| 站内页面   | 数据标准规范检查系统            | https://www.zksctest.com/datacheck.html                     |
| 站内页面   | 软件质量评估系统              | https://www.zksctest.com/softwareassess.html                |
| 解决方案导航 | 网联汽车                  | https://www.zksctest.com/solution-auto.html                 |
| 解决方案导航 | 特种装备                  | https://www.zksctest.com/solution-special.html              |
| 站内页面   | 三方测评                  | https://www.zksctest.com/service-secas.html                 |
| 站内页面   | 渗透测试                  | https://www.zksctest.com/service-penstest.html              |
| 站内页面   | 公司介绍                  | https://www.zksctest.com/about.html                         |
| CTA/转化 | 联系我们                  | https://www.zksctest.com/contact.html                       |
| CTA/转化 | 免费试用 免费试用             | https://www.zksctest.com/contact.html                       |
| CTA/转化 | 联系我们 联系我们             | https://www.zksctest.com/contact.html                       |
| 外部链接   | 京ICP备15067074号        | https://beian.miit.gov.cn/                                  |
| 外部链接   | CSDN                  | https://blog.csdn.net/2501_91003657?spm=1011.2480.3001.5343 |
| 外部链接   | 知乎                    | https://www.zhihu.com/                                      |
| 外部链接   | 安全客                   | https://www.anquanke.com                                    |
| 外部链接   | 开源中国                  | https://www.oschina.net                                     |
| 外部链接   | Freebuf               | https://www.freebuf.com/                                    |
| 外部链接   | 51CTO                 | https://blog.51cto.com/                                     |
| 外部链接   | 百家号                   | https://baijiahao.baidu.com/builder/theme/bjh/login         |
| 外部链接   | 今日头条                  | https://www.toutiao.com/                                    |

#### 图片/媒体素材

| Alt                                                  | 路径                                                          |
| ---------------------------------------------------- | ----------------------------------------------------------- |
| (无 alt)                                              | https://www.zksctest.com/img/logo.svg                       |
| Right Arrow                                          | https://www.zksctest.com/images/Right-Arrow.svg             |
| (无 alt)                                              | https://www.zksctest.com/images/Right-Arrow-White.svg       |
| (无 alt)                                              | https://www.zksctest.com/img/penstest_2.png                 |
| (无 alt)                                              | https://www.zksctest.com/img/penstest_3.png                 |
| (无 alt)                                              | https://www.zksctest.com/img/penstest_4.png                 |
| (无 alt)                                              | https://www.zksctest.com/img/penstest_5.png                 |
| (无 alt)                                              | https://www.zksctest.com/img/penstest_6.png                 |
| (无 alt)                                              | https://www.zksctest.com/img/penstest_1.png                 |
| Young woman holding a tablet, looking thoughtfull... | https://www.zksctest.com/img/penstest_7.png                 |
| CDRP                                                 | https://www.zksctest.com/images/CDRP_1.svg                  |
| ISO 27001                                            | https://www.zksctest.com/images/ISO-27001.svg               |
| PCI DSS                                              | https://www.zksctest.com/images/PCI-DSS.svg                 |
| World map represented by gray dots on a black bac... | https://www.zksctest.com/images/service-pt-2000.png         |
| Right hand pointing to the right with the index f... | https://www.zksctest.com/images/Right-Hand_1Right-Hand.avif |
| Left hand pointing to the left with the index fin... | https://www.zksctest.com/images/Left-Hand_1Left-Hand.avif   |
| (无 alt)                                              | https://www.zksctest.com/img/logo.png                       |
| (无 alt)                                              | https://www.zksctest.com/img/code-1.png                     |
| (无 alt)                                              | https://www.zksctest.com/img/code-2.png                     |
| (无 alt)                                              | https://www.zksctest.com/img/code-3.png                     |
| Right Bg Dot                                         | https://www.zksctest.com/images/Right-Bg.svg                |

#### 表单/输入状态

- 源 HTML 中未识别到 form 标签；如果页面存在弹窗表单或第三方组件，需要截图/手工补充。

#### 本页不可改动项

- 保留本页页面定位和内容范围。
- 保留本页原有按钮文字和跳转目标。
- 保留本页产品/方案/服务信息结构。
- UI 重构只能调整版式、视觉层级、组件样式、动效和响应式表现。

#### 后续验收关注

- 桌面端完整截图待补充。
- 移动端完整截图待补充。
- 导航展开、hover、弹窗、表单成功/失败状态待补充。

### 11. 公司介绍页面

- 页面类型：公司介绍
- URL：https://www.zksctest.com/about.html
- 源站备注：保留公司介绍内容
- HTTP 状态：200
- HTML 大小：64121 bytes
- SEO title：公司介绍 - 中科数测
- SEO description：未识别
- SEO keywords：未识别
- Canonical：未识别

#### 页面模块/内容结构

1. **致力于成为全球领先的 低空与商业航天 网络安全方案提供商**：致力于成为全球领先的 低空与商业航天 网络安全方案提供商 联系我们 联系我们 “"中科数测科技有限公司(简称“中科数测”)是中科星图股份有限公司(股票代码:688568)的子公司” 中科数测， 始终保持创新 2 2 3 4 5 6 7 8 9 1 0 2 3 4 5 6 7 8 9 0 2 2 3 4 5 6 7 8 9 0 + 专利和软件著作权 2 2 3 4 5 6 7 8 9 6 0 9 2 3 4 5 6 7 8 9 % 研发人员占比 2 2 3 4 5 6 7 8 9 2 0 2 3 4 5 6 7 8 9 0 % 20%硕士以上学历 2 2 3 4 5 6 7 8 9 1 5 0 2 3 4 5 6 7 8 9 2 2...
2. **关于中科数测**：关于中科数测 中科数测科技有限公司（简称“中科数测”）是中科星图股份有限公司（股票代码：688568）的子公司，具备国家高新技术企业及省级专精特新企业资质。公司依托中科星图集团“一体两翼”发展战略，充分整合集团在低空发展体系、商业航天发展体系及生态协同方面的资源优势，致力于构建星图集团在低空与商业航天领域的安全底座，力争成为全球领先的低空及商业航天网络安全产品与解决方案提供商。 致力于成为全球领先的低空与商业航天网络安全方案提供商 强大的研发团队, 始终保持创新 150 150员工人数 20% 20%硕士以上学历 60% 60%研发占比 01 2022年 实验室建立，通过CNAS认证，对外提供测评服务 02 2023年 中科星图测...
3. **企业文化**：企业文化 创新、融合、奋斗、幸福 60% AI-powered solutions boost efficiency by 60% 幸福 星图发展的归宿 创新 星图发展的灵魂 融合 星图发展的动力 创新 星图发展的灵魂 奋斗 星图发展的途径 45% Automated workflows cut costs by 45% 25% Retro boosted data accuracy by more than 25% 60% AI-powered solutions boost efficiency by 60% 25% Retro boosted data accuracy by more than 25% 25% Retro...
4. **公司分布地区**：公司分布地区 无锡总部 江苏省无锡市经开区雪浪小镇 010-82923621 北京 北京市海淀区中关村壹号F1座7楼 010-82923621 上海 上海市普陀区谈家渡路28号信息商务港8楼 021-52919537 西安 陕西省西安市国家民用航天产业基地 021-52919537
5. **产品或服务常见问题解答**：产品或服务常见问题解答 可以拨打我们的咨询热线：021-52919537 联系我们 联系我们 提供什么解决方案？ 您好，我们提供： 1.低空经济 2.商业航天 3.网联汽车 4.国防军工 5.工业控制 6.智能治疗 7.移动通讯 等相关行业解决方案 你们产品是怎么报价的？ 请问您想咨询哪个产品的报价呢，咨询热线：021-52919537 1、获取 Wisdom 通讯协议安全及兼容性设计验证平台报价 2、获取 Swift AI 综合模型安全检测平台报价 3、获取二进制固件安全检测报价 会提供免费试用吗？ 是的，我们提供30天免费试用 Wisdom 能做什么？ 1.协议漏洞挖掘：内置多年总结下来的独有测试用例，在恶意黑客发现漏洞前提前...
6. **准备好为您的组织解锁 安全能力 了吗?**：准备好为您的组织解锁 安全能力 了吗? 马上申请30天免费试用 联系我们 联系我们

#### 标题层级

- H1：致力于成为全球领先的 低空与商业航天 网络安全方案提供商
- H2：关于中科数测
- H1：企业文化
- H2：荣誉资质
- H2：公司分布地区
- H2：产品或服务常见问题解答
- H1：准备好为您的组织解锁 安全能力 了吗?

#### 按钮/链接/跳转

| 类型     | 文字                                                             | 目标                                                          |
| ------ | -------------------------------------------------------------- | ----------------------------------------------------------- |
| 站内页面   | (无文字链接)                                                        | https://www.zksctest.com/index.html                         |
| 产品导航   | Wisdom 模糊测试                                                    | https://www.zksctest.com/wisdom.html                        |
| 产品导航   | Swift AI 综合模型安全检测平台                                            | https://www.zksctest.com/ai.html                            |
| 产品导航   | Swift SCA 软件成分分析                                               | https://www.zksctest.com/sca.html                           |
| 产品导航   | Swift Code 源代码审计                                               | https://www.zksctest.com/swiftcode.html                     |
| 产品导航   | Wisdom Lens 灰盒模糊测试                                             | https://www.zksctest.com/lens.html                          |
| 产品导航   | Swift Pentest 自动化渗透测试                                          | https://www.zksctest.com/swiftpenstest.html                 |
| 站内页面   | 数据标准规范检查系统                                                     | https://www.zksctest.com/datacheck.html                     |
| 站内页面   | 软件质量评估系统                                                       | https://www.zksctest.com/softwareassess.html                |
| 解决方案导航 | 网联汽车                                                           | https://www.zksctest.com/solution-auto.html                 |
| 解决方案导航 | 特种装备                                                           | https://www.zksctest.com/solution-special.html              |
| 站内页面   | 三方测评                                                           | https://www.zksctest.com/service-secas.html                 |
| 站内页面   | 渗透测试                                                           | https://www.zksctest.com/service-penstest.html              |
| 站内页面   | 公司介绍                                                           | https://www.zksctest.com/about.html                         |
| CTA/转化 | 联系我们                                                           | https://www.zksctest.com/contact.html                       |
| CTA/转化 | 免费试用 免费试用                                                      | https://www.zksctest.com/contact.html                       |
| CTA/转化 | 联系我们 联系我们                                                      | https://www.zksctest.com/contact.html                       |
| 解决方案导航 | 提供什么解决方案？ 您好，我们提供： 1.低空经济 2.商业航天 3.网联汽车 4.国防军工 5.工业控制 6.智能治... | https://www.zksctest.com/about.html                         |
| CTA/转化 | 你们产品是怎么报价的？ 请问您想咨询哪个产品的报价呢，咨询热线：021-52919537 1、获取 Wisdom 通讯... | https://www.zksctest.com/about.html                         |
| CTA/转化 | 会提供免费试用吗？ 是的，我们提供30天免费试用                                       | https://www.zksctest.com/about.html                         |
| CTA/转化 | Wisdom 能做什么？ 1.协议漏洞挖掘：内置多年总结下来的独有测试用例，在恶意黑客发现漏洞前提前捕获问题； 2.协... | https://www.zksctest.com/about.html                         |
| 产品导航   | Swift AI 能做什么？ Swift AI 提供全方位的AI安全防护，能够有效检测和防御文本、图像、音频等多模态对... | https://www.zksctest.com/about.html                         |
| 外部链接   | 京ICP备15067074号                                                 | https://beian.miit.gov.cn/                                  |
| 外部链接   | CSDN                                                           | https://blog.csdn.net/2501_91003657?spm=1011.2480.3001.5343 |
| 外部链接   | 知乎                                                             | https://www.zhihu.com/                                      |
| 外部链接   | 安全客                                                            | https://www.anquanke.com                                    |
| 外部链接   | 开源中国                                                           | https://www.oschina.net                                     |
| 外部链接   | Freebuf                                                        | https://www.freebuf.com/                                    |
| 外部链接   | 51CTO                                                          | https://blog.51cto.com/                                     |
| 外部链接   | 百家号                                                            | https://baijiahao.baidu.com/builder/theme/bjh/login         |
| 外部链接   | 今日头条                                                           | https://www.toutiao.com/                                    |

#### 图片/媒体素材

| Alt                                                  | 路径                                                          |
| ---------------------------------------------------- | ----------------------------------------------------------- |
| (无 alt)                                              | https://www.zksctest.com/img/logo.svg                       |
| Right Arrow                                          | https://www.zksctest.com/images/Right-Arrow.svg             |
| (无 alt)                                              | https://www.zksctest.com/images/Right-Arrow-White.svg       |
| (无 alt)                                              | https://www.zksctest.com/img/about_1.png                    |
| (无 alt)                                              | https://www.zksctest.com/img/about_2.png                    |
| Pixelated, colorful gradient capsule shape transi... | https://www.zksctest.com/images/Home-01-Bg_1Home-01-Bg.avif |
| Stremax Svg                                          | https://www.zksctest.com/img/index_7.svg                    |
| (无 alt)                                              | https://www.zksctest.com/img/1.png                          |
| (无 alt)                                              | https://www.zksctest.com/img/2.png                          |
| (无 alt)                                              | https://www.zksctest.com/img/3.png                          |
| (无 alt)                                              | https://www.zksctest.com/img/4.png                          |
| (无 alt)                                              | https://www.zksctest.com/img/5.png                          |
| Smiling man in a dark blue blazer sitting at a de... | https://www.zksctest.com/images/Client-04_1Client-04.avif   |
| Be tech Logo                                         | https://www.zksctest.com/images/Be-tech-Logo.svg            |
| Retro SVG                                            | https://www.zksctest.com/images/Retro_5.svg                 |
| Blonde woman in a black blouse standing next to a... | https://www.zksctest.com/images/Client-03_1Client-03.avif   |
| (无 alt)                                              | https://www.zksctest.com/img/about_3.svg                    |
| (无 alt)                                              | https://www.zksctest.com/img/about_5.png                    |
| Retro                                                | https://www.zksctest.com/images/Retro_6.svg                 |
| (无 alt)                                              | https://www.zksctest.com/img/about_4.png                    |
| Retro SVG                                            | https://www.zksctest.com/img/about_6.svg                    |
| (无 alt)                                              | https://www.zksctest.com/img/about_7.png                    |
| (无 alt)                                              | https://www.zksctest.com/img/about_8.png                    |
| (无 alt)                                              | https://www.zksctest.com/img/about_9.png                    |
| (无 alt)                                              | https://www.zksctest.com/img/about_10.png                   |

> 另有 8 个图片资源未在摘要表中展开，后续素材迁移前需复核。

#### 表单/输入状态

- 源 HTML 中未识别到 form 标签；如果页面存在弹窗表单或第三方组件，需要截图/手工补充。

#### 本页不可改动项

- 保留本页页面定位和内容范围。
- 保留本页原有按钮文字和跳转目标。
- 保留本页产品/方案/服务信息结构。
- UI 重构只能调整版式、视觉层级、组件样式、动效和响应式表现。

#### 后续验收关注

- 桌面端完整截图待补充。
- 移动端完整截图待补充。
- 导航展开、hover、弹窗、表单成功/失败状态待补充。

## PRD 输入准备结论

当前页面范围已可支持第一版 UI 重构 PRD 的范围定义、约束定义、页面级验收标准编写。正式进入 PRD 前，建议补齐桌面端/移动端截图和关键交互状态截图，以便后续做旧站 vs 新站视觉与逻辑对照验收。
