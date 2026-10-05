/**
 * ParkPro Technology - Complete I18N Internationalization Engine
 * Supports seamless real-time switching between English, 简体中文,
 * Español, Français, Deutsch, العربية, Русский, Português, 日本語.
 * Persists selection in localStorage and synchronizes across all pages.
 */

(function () {
  'use strict';

  const translations = {
    en: {
      // Top bar & utility
      top_address: "Room 409, 4th Floor, Qinghu Hengbo Innovation Industrial Park, Longhua District, Shenzhen, Guangdong Province",
      top_whatsapp: "WhatsApp: +86 15677223292",
      badge_oem: "OEM/ODM Available",
      badge_export: "Export Standard CE / FCC",
      badge_factory: "Export Direct Factory",
      
      // Header & Navigation
      company_title: "Shenzhen ParkPro Technology (帕格泊科技)",
      nav_home: "Home",
      nav_solutions: "Solutions",
      nav_products: "Products & Hardware",
      nav_cloud: "Cloud Platform",
      nav_scenarios: "Airport & Mall Cases",
      nav_about: "About Us",
      nav_contact: "Contact",
      btn_get_price: "Get Best Price",
      btn_contact_factory: "Contact Factory",
      btn_quick_rfq: "Quick RFQ",
      btn_get_design: "Get Solution Design",
      search_placeholder: "Search systems...",

      // Page Banner (index.html)
      banner_badge: "Global Solution Showcase | Turnkey Export Engineering",
      banner_title: "Turnkey Overseas Parking Service System: Automated Fee Collection & Ultrasonic Guidance",
      banner_desc: "Engineered specifically for international commercial plazas, international airports, municipal transit hubs, and smart parking garages. Integrating ticket dispensers, barcode validators, manual cashier POS, LPR cameras, and real-time cloud management.",

      // Breadcrumbs
      bc_home: "Home",
      bc_solutions: "Solutions & Cases",
      bc_current: "Overseas Parking Service & Fee Management System",

      // Sidebar (index.html)
      sidebar_title_sections: "Solution Sections",
      side_nav_1: "1. Project Overview & Background",
      side_nav_2: "2. Dual System Architectures",
      side_nav_3: "3. Smart Entry Station (Dispenser)",
      side_nav_4: "4. Smart Exit Station (Validator)",
      side_nav_5: "5. Cashier POS Workstation",
      side_nav_6: "6. Cloud & Cashier Software",
      side_nav_7: "7. Airport & Mall Scenarios",
      side_nav_8: "8. Technical Specifications",
      side_nav_9: "9. Request Official Quotation",
      sidebar_title_sales: "Overseas Sales Team",
      status_online: "Online",
      sales_name: "Jade Huang",
      sales_role: "Overseas Project Director",
      btn_inquire_jade: "Inquire with Jade via WhatsApp",
      card_guarantee_title: "ParkPro Export Guarantee",
      card_guarantee_desc: "CE, FCC, RoHS certified. Standard 3-year warranty with 24/7 overseas engineering remote dispatch.",

      // Section 1: Overview
      sec1_title: "1. Project Overview & Export Engineering Background",
      sec1_p1: "As smart transportation infrastructure accelerates worldwide, modern commercial plazas, international airports, and multi-tier public car parks demand parking management systems that deliver extreme reliability, high vehicle throughput, and multi-currency automated cashier processing.",
      sec1_p2: "Shenzhen ParkPro Technology Co., Ltd. (深圳市帕格泊科技有限公司) presents this turnkey overseas parking solution based on proven industrial architecture, drawing on benchmark engineering patterns similar to Jutai intelligent access controls. By integrating robust ticket barcode dispensers, motorized validators, dual-loop vehicle presence sensors, and intuitive cloud telemetry, ParkPro ensures frictionless parking revenue collection across global markets.",
      overview_box1_title: "High Throughput Rate",
      overview_box1_desc: "Sub-second barcode issuance and rapid barrier opening keep vehicle queues moving even during peak rush hours.",
      overview_box2_title: "Multi-Currency Ready",
      overview_box2_desc: "Customizable currency symbols (USD, EUR, SAR, AED, GBP, AUD, etc.) with flexible tax and tariff calculations.",
      overview_box3_title: "Offline Fallback Safe",
      overview_box3_desc: "Distributed hardware logic maintains local ticket issuance and verification even if internet connectivity drops.",
      overview_box4_title: "Turnkey Engineering",
      overview_box4_desc: "Complete package including dispensers, validators, POS terminals, guidance sensors, LED displays, and barrier gates.",

      // Section 2: Architectures
      sec2_title: "2. Dual System Architectures: Central Payment vs Exit Lane Payment",
      sec2_intro: "To meet diverse site layouts, labor costs, and operational habits in different overseas territories, ParkPro provides two standardized system workflows:",
      arch1_title: "Architecture A: Central Cashier / Pay-on-Foot Station Workflow",
      arch1_desc: "Recommended for high-traffic shopping centers, airports, and major transit hubs to eliminate exit lane congestion.",
      arch1_step1_title: "Step 1: Vehicle Approaches Entry Lane",
      arch1_step1_desc: "Vehicle triggers ground loop 1. Driver presses button; thermal barcode ticket prints within 0.8 seconds containing entry timestamp, unique encrypted barcode, and lane ID.",
      arch1_step2_title: "Step 2: Barrier Gate Opens & Auto-Closes",
      arch1_step2_desc: "Barrier arm rises automatically. Vehicle drives past loop 2; barrier arm descends safely. Anti-smashing loop ensures vehicle safety.",
      arch1_step3_title: "Step 3: Central Payment at Cashier Counter",
      arch1_step3_desc: "Before returning to vehicle, customer hands ticket to central cashier. Cashier barcode scanner reads ticket; PC displays parking duration and fee. Customer pays via cash, card, or QR code. Cashier marks ticket 'PAID' with 15-minute grace exit period.",
      arch1_step4_title: "Step 4: Unimpeded Exit Validation",
      arch1_step4_desc: "Driver inserts ticket into Exit Station validator. Barcode scanner confirms 'PAID' within grace period, swallows ticket, opens barrier gate, and updates cloud records.",
      arch2_title: "Architecture B: Direct Exit Lane Cashier / Automatic Payment Workflow",
      arch2_desc: "Suitable for medium-to-small commercial garages, hotel valet lots, or facilities where central walking payment is impractical.",

      // Section 3 & 4: Stations
      sec3_title: "3. Smart Entry Station (Ticket Dispenser PK-ENT800)",
      sec3_desc: "The entry station terminal operates 24/7 outdoors under harsh climatic conditions (-30°C to +75°C). Features industrial-grade thermal ticket cutter, Mifare/ID RFID reader for monthly parkers, 7-inch LED prompt display, and VOIP intercom.",
      sec4_title: "4. Smart Exit Station (Ticket Validator PK-EXT800)",
      sec4_desc: "Equipped with high-precision omnidirectional 1D/2D barcode imaging scanner, motorized ticket retractor/swallower, and multi-tone voice synthesizer guidance.",

      // Section 5 & 6: POS & Software
      sec5_title: "5. Central Cashier POS Workstation & Hardware Peripherals",
      sec5_desc: "Ergonomic operator station designed for cashier booths and customer service desks. Includes thermal receipt printer, desktop omnidirectional barcode scanner, cash drawer, and fee customer display screen.",
      sec6_title: "6. Central Cloud & Local Server Management Software",
      sec6_desc: "Unified web-based management suite supporting multi-level operator permissions, dynamic tariff rules, vehicle search, blacklisting, and automated accounting export.",

      // Section 7: Scenarios
      sec7_title: "7. Specialized Application Scenarios & Global Case Profiles",
      sec7_intro: "Our systems are specifically customized to address the operational demands of distinct overseas parking environments:",
      tab_airport: "✈️ International Airports",
      tab_mall: "🏬 Commercial Plazas & Malls",
      tab_garage: "🏢 Municipal Multi-Level Garages",
      scenario_airport_title: "International Airport Terminal Parking Solution",
      scenario_airport_desc: "Airports experience intense peak traffic surges, mixed vehicle categories (taxis, ride-shares, long-term travelers, VIP shuttles), and high security demands.",
      scenario_mall_title: "Mega Commercial Shopping Mall & Plaza Solution",
      scenario_mall_desc: "Designed for rapid entry during weekend rushes, seamless merchant shopping receipt fee discounts, and multi-currency credit card integration.",
      scenario_garage_title: "Municipal Multi-Story Garage & Ultrasonic Space Guidance",
      scenario_garage_desc: "Maximizes stall utilization through high-accuracy ultrasonic occupancy sensors and vibrant overhead green/red indicators paired with directional corridor LED screens.",

      // Section 8: Specs
      sec8_title: "8. Complete System Technical Specifications",
      th_component: "Component / Module",
      th_model: "Model / Code",
      th_specs: "Key Technical Specifications",
      th_cert: "Compliance",

      // Section 9: RFQ
      sec9_title: "9. Request Official Quotation & Project Technical Proposal",
      sec9_desc: "Our senior overseas project team based in Shenzhen will evaluate your site drawings, recommend optimal lane hardware configurations, and provide competitive factory FOB/CIF pricing within 24 hours.",
      form_name: "Full Name",
      form_email: "Work Email",
      form_phone: "WhatsApp / Phone",
      form_company: "Company & Country",
      form_project_type: "Project Facility Type",
      form_message: "Project Requirements & Lane Details",
      btn_submit_rfq: "SUBMIT OFFICIAL RFQ INQUIRY",
      toast_success: "✓ Thank you! Your RFQ has been received. Our overseas engineer will reply within 24 hours.",
      char_counter_label: "Characters:",

      // Footer
      footer_about_desc: "Leading Chinese manufacturer & exporter of intelligent overseas parking revenue management systems, automatic ticket dispensers, barrier gates, and ultrasonic space guidance.",
      footer_solutions: "Solutions",
      footer_hardware: "Hardware",
      footer_contact: "Contact Us",
      footer_rights: "© 2026 Shenzhen ParkPro Technology Co., Ltd. (深圳市帕格泊科技有限公司). All Rights Reserved.",
      footer_subtext: "Designed for International Engineering & Smart Mobility Infrastructure."
    },

    zh: {
      // 顶部信息与快捷栏
      top_address: "深圳市龙华区清湖恒博创新产业园4楼409室",
      top_whatsapp: "WhatsApp / 电话：+86 15677223292",
      badge_oem: "支持 OEM/ODM 定制",
      badge_export: "国际标准 CE / FCC 认证",
      badge_factory: "源头制造外贸工厂",

      // 导航与头部
      company_title: "深圳市帕格泊科技有限公司 (ParkPro)",
      nav_home: "首页",
      nav_solutions: "解决方案",
      nav_products: "产品与硬件",
      nav_cloud: "云平台管理",
      nav_scenarios: "机场与商场案例",
      nav_about: "关于我们",
      nav_contact: "联系我们",
      btn_get_price: "获取最优报价",
      btn_contact_factory: "联系工厂",
      btn_quick_rfq: "快速询价",
      btn_get_design: "获取方案设计",
      search_placeholder: "搜索系统或产品...",

      // 页面 Banner
      banner_badge: "全球出海解决方案展示 | 一站式交钥匙工程",
      banner_title: "出海一站式智能停车服务系统：自动化收费管理与超声波车位引导",
      banner_desc: "专为国际大型商业广场、海外国际机场、市政交通枢纽与多层立体停车场量身定制。高度集成条码取票机、电动验票机、人工中央收费POS、车牌识别摄像机及云端实时管理平台。",

      // 面包屑
      bc_home: "首页",
      bc_solutions: "解决方案与案例",
      bc_current: "海外停车服务与收费管理系统",

      // 侧边栏导航
      sidebar_title_sections: "方案章节索引",
      side_nav_1: "1. 项目概况与背景",
      side_nav_2: "2. 双系统架构设计",
      side_nav_3: "3. 智能入口取票系统",
      side_nav_4: "4. 智能出口验票系统",
      side_nav_5: "5. 人工中央收费工作站",
      side_nav_6: "6. 云平台与收费软件",
      side_nav_7: "7. 机场与商场定制方案",
      side_nav_8: "8. 核心技术规格参数",
      side_nav_9: "9. 获取官方项目报价",
      sidebar_title_sales: "海外销售支持团队",
      status_online: "在线服务",
      sales_name: "Jade Huang (黄经理)",
      sales_role: "海外项目拓展总监",
      btn_inquire_jade: "通过 WhatsApp 立即咨询",
      card_guarantee_title: "帕格泊出口品质保障",
      card_guarantee_desc: "通过 CE、FCC、RoHS 国际认证。提供3年标准硬件质保及24/7海外远程技术支持工程师对接。",

      // 第1节：项目概况
      sec1_title: "1. 项目概况与海外工程背景",
      sec1_p1: "随着全球智慧交通基础设施升级，现代海外大型商业综合体、国际机场及市政停车场对管理系统的工业级稳定性、高峰期通行吞吐量及多币种自动化收费提出了严苛要求。",
      sec1_p2: "深圳市帕格泊科技有限公司凭借深厚的硬件研发与制造积累，参照行业领先的技术方案（类似捷泰智能出入口管理），推出了这套专为海外市场量身定制的停车服务系统。融合条码取票、电动验票、双地感线圈车辆检测及智能云端管理，为全球客户提供稳定高效、防漏费的出海停车解决方案。",
      overview_box1_title: "超高车流通行率",
      overview_box1_desc: "0.8秒极速条码打印出票与快速升杆道闸，即便在早晚高峰与节假日也能保障车道绝对畅通。",
      overview_box2_title: "全面支持多国货币",
      overview_box2_desc: "可灵活配置美元、欧元、沙特里亚尔、阿联酋迪拉姆、英镑等多国货币符号及阶梯计费与税费规则。",
      overview_box3_title: "断网离线容灾保护",
      overview_box3_desc: "采用分布式微控制器架构，即便外部网络中断，本地终端仍可脱机正常发票、验票与计费放行。",
      overview_box4_title: "一站式整套交付",
      overview_box4_desc: "提供含入口机、出口机、中央POS、超声波探头、室内外LED引导屏及道闸在内的全套工程硬件。",

      // 第2节：双系统架构
      sec2_title: "2. 双系统架构设计：中央预缴费模式 vs 出口直缴模式",
      sec2_intro: "针对不同海外国家的人力成本、场地规划及驾驶员使用习惯，帕格泊提供两种国际标准化系统流程：",
      arch1_title: "架构 A：中央收费处 / 场内预缴费模式（推荐大型商场、国际机场）",
      arch1_desc: "强烈推荐用于车流量极大的商场购物中心、机场航站楼及交通枢纽，实现出口车道零停留极速通行。",
      arch1_step1_title: "步骤 1：车辆驶入入口车道取票",
      arch1_step1_desc: "车辆压过入口地感线圈1，司机按键取票，工业热敏机0.8秒内吐出印有进场时间、唯一加密条码及车道信息的纸票。",
      arch1_step2_title: "步骤 2：道闸极速开启与安全防砸",
      arch1_step2_desc: "道闸自动升杆，车辆驶过防砸地感线圈2后道闸平稳下落，双线圈防砸互锁确保人车万无一失。",
      arch1_step3_title: "步骤 3：中央收费前台完成缴费",
      arch1_step3_desc: "取车前司机至中央收费台出示纸票，桌面条码枪扫码后PC端秒级算出停车时长与金额，支持现金、刷卡或扫码。缴费后系统赋予15分钟出场宽限期。",
      arch1_step4_title: "步骤 4：出口验票机吞票快速放行",
      arch1_step4_desc: "司机驱车至出口插票，验票机核验处于已缴费宽限期内自动吞入纸票，道闸升起放行，数据实时回传云端。",
      arch2_title: "架构 B：出口车道直接收费模式（适合中小型停车场）",
      arch2_desc: "适用于中小型写字楼、酒店代客泊车及进出通道紧凑、无需步行场内预缴费的海外物业场景。",

      // 第3与第4节：进出口终端
      sec3_title: "3. 智能入口取票系统 (Ticket Dispenser PK-ENT800)",
      sec3_desc: "室外全天候工业级设计，适应 -30°C 至 +75°C 恶劣户外环境。配备大容量工业热敏切刀出票机、月租车 Mifare/ID 刷卡读头、7寸全视角高亮显示屏及紧急对讲按钮。",
      sec4_title: "4. 智能出口验票系统 (Ticket Validator PK-EXT800)",
      sec4_desc: "配备高灵敏全向一维/二维码激光影像扫描器、电动收票/吞票机械构件，以及多语言真人语音引导合成器。",

      // 第5与第6节：收费与软件
      sec5_title: "5. 人工中央收费工作站与周边配套设备",
      sec5_desc: "为收费岗亭与服务台打造的人体工程学操作台。包含小票打印机、桌面全向条码扫描台、智能钱箱及双面客户金额显示屏。",
      sec6_title: "6. 中央云平台与本地收费管理软件",
      sec6_desc: "统一B/S架构Web管理端，支持多级操作员权限、自定义收费费率规则、车辆进出图片回溯、黑白名单及财务报表一键导出。",

      // 第7节：典型案例
      sec7_title: "7. 典型应用场景与海外定制方案",
      sec7_intro: "系统根据不同海外停车运营场景进行了针对性软硬件优化：",
      tab_airport: "✈️ 国际机场航站楼",
      tab_mall: "🏬 商业综合体与大型商场",
      tab_garage: "🏢 市政多层立体停车场",
      scenario_airport_title: "国际机场航站楼智慧停车方案",
      scenario_airport_desc: "针对机场极端早晚高峰、复杂车辆类型（出租车、网约车、长租旅客、VIP接驳车）及高安全防卫等级量身优化。",
      scenario_mall_title: "大型商业综合体与购物中心方案",
      scenario_mall_desc: "专为周末节假日客流高峰设计，支持商户购物小票扫码抵扣减免停车费、会员积分兑换及外卡POS支付集成。",
      scenario_garage_title: "市政多层立体车库与超声波车位引导",
      scenario_garage_desc: "借助高精度超声波车位探测器与醒目的红绿指示灯，结合各层通道LED分流屏，极大提升车位周转率与找位体验。",

      // 第8节：参数表
      sec8_title: "8. 核心系统软硬件技术参数",
      th_component: "产品组件 / 模块",
      th_model: "产品型号",
      th_specs: "核心技术参数与指标",
      th_cert: "国际认证标准",

      // 第9节：询价
      sec9_title: "9. 获取官方工程方案与项目报价",
      sec9_desc: "位于深圳的帕格泊资深海外工程团队将仔细评估您的现场图纸，推荐最优车道配置，并在24小时内提供最具竞争力的原厂 FOB / CIF 报价单。",
      form_name: "您的姓名",
      form_email: "企业电子邮箱",
      form_phone: "WhatsApp / 联系电话",
      form_company: "公司名称及所在国家",
      form_project_type: "项目场所类型",
      form_message: "项目具体需求与车道数量",
      btn_submit_rfq: "立即提交询价需求",
      toast_success: "✓ 感谢您的垂询！我们已收到您的项目需求，海外技术团队将在24小时内与您联系。",
      char_counter_label: "已输入字符：",

      // 页脚
      footer_about_desc: "中国领先的海外智能停车收费系统源头制造与出口商，专注于自动取票机、道闸出入口控制与超声波车位引导技术。",
      footer_solutions: "解决方案",
      footer_hardware: "硬件设备",
      footer_contact: "联系我们",
      footer_rights: "© 2026 深圳市帕格泊科技有限公司 (Shenzhen ParkPro Technology Co., Ltd.). 保留所有权利。",
      footer_subtext: "专为国际工程与智慧出行基础设施打造。"
    },

    es: {
      top_address: "Habitación 409, 4to Piso, Parque Industrial de Innovación Qinghu Hengbo, Longhua, Shenzhen, China",
      top_whatsapp: "WhatsApp: +86 15677223292",
      badge_oem: "OEM/ODM Disponible",
      badge_export: "Norma de Exportación CE / FCC",
      badge_factory: "Fábrica Directa de Exportación",
      company_title: "Shenzhen ParkPro Technology (帕格泊科技)",
      nav_home: "Inicio",
      nav_solutions: "Soluciones",
      nav_products: "Productos y Hardware",
      nav_cloud: "Plataforma en la Nube",
      nav_scenarios: "Casos de Aeropuertos y Centros Comerciales",
      nav_about: "Nosotros",
      nav_contact: "Contacto",
      btn_get_price: "Obtener Mejor Precio",
      btn_contact_factory: "Contactar Fábrica",
      btn_quick_rfq: "Cotización Rápida",
      btn_get_design: "Diseño de Solución",
      search_placeholder: "Buscar sistemas...",
      banner_badge: "Ingeniería de Exportación Llave en Mano",
      banner_title: "Sistema Inteligente de Estacionamiento en el Extranjero: Cobro Automatizado y Guiado Ultrasónico",
      banner_desc: "Diseñado para plazas comerciales, aeropuertos internacionales y estacionamientos multinivel. Integra dispensadores de tickets, validadores, POS de cajero y gestión en la nube.",
      bc_home: "Inicio",
      bc_solutions: "Soluciones",
      bc_current: "Sistema de Control de Estacionamiento",
      sidebar_title_sections: "Índice de la Solución",
      side_nav_1: "1. Descripción del Proyecto",
      side_nav_2: "2. Arquitecturas del Sistema",
      side_nav_3: "3. Estación de Entrada",
      side_nav_4: "4. Estación de Salida",
      side_nav_5: "5. Estación de Cajero POS",
      side_nav_6: "6. Software en la Nube",
      side_nav_7: "7. Escenarios de Aeropuertos y Malls",
      side_nav_8: "8. Especificaciones Técnicas",
      side_nav_9: "9. Solicitar Cotización",
      sidebar_title_sales: "Equipo de Ventas Global",
      status_online: "En Línea",
      sales_name: "Jade Huang",
      sales_role: "Directora de Proyectos Internacionales",
      btn_inquire_jade: "Contactar a Jade por WhatsApp",
      card_guarantee_title: "Garantía de Exportación ParkPro",
      card_guarantee_desc: "Certificación CE, FCC, RoHS. 3 años de garantía con soporte técnico remoto 24/7.",
      tab_airport: "✈️ Aeropuertos Internacionales",
      tab_mall: "🏬 Centros Comerciales y Malls",
      tab_garage: "🏢 Garajes Municipales",
      form_name: "Nombre Completo",
      form_email: "Correo Corporativo",
      form_phone: "WhatsApp / Teléfono",
      form_company: "Empresa y País",
      form_project_type: "Tipo de Proyecto",
      form_message: "Requisitos del Proyecto y Carriles",
      btn_submit_rfq: "ENVIAR SOLICITUD DE COTIZACIÓN",
      toast_success: "✓ ¡Gracias! Su solicitud ha sido recibida. Responderemos en 24 horas.",
      char_counter_label: "Caracteres:",
      footer_solutions: "Soluciones",
      footer_hardware: "Hardware",
      footer_contact: "Contacto",
      footer_rights: "© 2026 Shenzhen ParkPro Technology Co., Ltd. Todos los derechos reservados.",
      footer_subtext: "Diseñado para Infraestructura Internacional de Movilidad Inteligente."
    },

    fr: {
      top_address: "Bureau 409, 4e Étage, Parc Industriel Qinghu Hengbo, Longhua, Shenzhen, Chine",
      top_whatsapp: "WhatsApp: +86 15677223292",
      badge_oem: "OEM/ODM Disponible",
      badge_export: "Norme Export CE / FCC",
      badge_factory: "Usine d'Exportation Directe",
      company_title: "Shenzhen ParkPro Technology (帕格泊科技)",
      nav_home: "Accueil",
      nav_solutions: "Solutions",
      nav_products: "Produits & Matériel",
      nav_cloud: "Plateforme Cloud",
      nav_scenarios: "Aéroports & Centres Commerciaux",
      nav_about: "À Propos",
      nav_contact: "Contact",
      btn_get_price: "Obtenir le Meilleur Prix",
      btn_contact_factory: "Contacter l'Usine",
      btn_quick_rfq: "Devis Rapide",
      btn_get_design: "Conception de Solution",
      search_placeholder: "Rechercher des systèmes...",
      banner_badge: "Ingénierie Clé en Main pour l'Export",
      banner_title: "Système de Gestion de Stationnement Intelligent : Péage Automatique & Guidage Ultrasonique",
      banner_desc: "Conçu pour les centres commerciaux, aéroports internationaux et parkings publics. Intègre distributeurs de tickets, valideurs, POS caissier et gestion cloud.",
      bc_home: "Accueil",
      bc_solutions: "Solutions",
      bc_current: "Système de Stationnement",
      sidebar_title_sections: "Sommaire de la Solution",
      side_nav_1: "1. Présentation du Projet",
      side_nav_2: "2. Architectures Système",
      side_nav_3: "3. Borne d'Entrée",
      side_nav_4: "4. Borne de Sortie",
      side_nav_5: "5. Station Caisse POS",
      side_nav_6: "6. Logiciel Cloud",
      side_nav_7: "7. Cas Aéroports & Centres Commerciaux",
      side_nav_8: "8. Spécifications Techniques",
      side_nav_9: "9. Demander un Devis",
      sidebar_title_sales: "Équipe Commerciale Export",
      status_online: "En Ligne",
      sales_name: "Jade Huang",
      sales_role: "Directrice des Projets Internationaux",
      btn_inquire_jade: "Contacter Jade sur WhatsApp",
      card_guarantee_title: "Garantie Export ParkPro",
      card_guarantee_desc: "Certifié CE, FCC, RoHS. Garantie 3 ans avec assistance technique à distance 24/7.",
      tab_airport: "✈️ Aéroports Internationaux",
      tab_mall: "🏬 Centres Commerciaux",
      tab_garage: "🏢 Parkings Municipaux",
      form_name: "Nom Complet",
      form_email: "Email Professionnel",
      form_phone: "WhatsApp / Téléphone",
      form_company: "Société & Pays",
      form_project_type: "Type de Projet",
      form_message: "Détails du Projet & Nombre de Voies",
      btn_submit_rfq: "ENVOYER LA DEMANDE DE DEVIS",
      toast_success: "✓ Merci ! Votre demande a été reçue. Réponse sous 24 heures.",
      char_counter_label: "Caractères :",
      footer_solutions: "Solutions",
      footer_hardware: "Matériel",
      footer_contact: "Contact",
      footer_rights: "© 2026 Shenzhen ParkPro Technology Co., Ltd. Tous droits réservés.",
      footer_subtext: "Conçu pour l'Ingénierie Internationale & la Mobilité Intelligente."
    },

    ar: {
      top_address: "الغرفة 409، الطابق الرابع، مجمع تشينغهو هينغبو للابتكار، لونغهوا، شنتشن، الصين",
      top_whatsapp: "واتساب: 8615677223292+",
      badge_oem: "متوفر تصنيع OEM / ODM",
      badge_export: "معايير التصدير الدولية CE / FCC",
      badge_factory: "مصنع تصدير مباشر",
      company_title: "شنتشن بارك برو للتكنولوجيا (帕格泊科技)",
      nav_home: "الرئيسية",
      nav_solutions: "الحلول",
      nav_products: "المنتجات والمعدات",
      nav_cloud: "منصة السحابة",
      nav_scenarios: "حالات المطارات والمراكز التجارية",
      nav_about: "من نحن",
      nav_contact: "اتصل بنا",
      btn_get_price: "احصل على أفضل سعر",
      btn_contact_factory: "اتصل بالمصنع",
      btn_quick_rfq: "طلب تسعير سريع",
      btn_get_design: "تصميم الحل",
      search_placeholder: "البحث في الأنظمة...",
      banner_badge: "حلول تصدير متكاملة وجاهزة للتشغيل",
      banner_title: "نظام إدارة مواقف السيارات الذكي: تحصيل الرسوم الآلي والإرشاد بالموجات فوق الصوتية",
      banner_desc: "مصمم خصيصاً للمراكز التجارية والمطارات الدولية ومواقف السيارات متعددة الطوابق. دمج أجهزة إصدار التذاكر وأجهزة التحقق ونقاط البيع والإدارة السحابية.",
      bc_home: "الرئيسية",
      bc_solutions: "الحلول",
      bc_current: "نظام إدارة المواقف",
      sidebar_title_sections: "أقسام الحل",
      side_nav_1: "1. نظرة عامة على المشروع",
      side_nav_2: "2. هيكلية النظام الثنائية",
      side_nav_3: "3. محطة الدخول الذكية",
      side_nav_4: "4. محطة الخروج الذكية",
      side_nav_5: "5. نقطة بيع المحاسب",
      side_nav_6: "6. برامج السحابة",
      side_nav_7: "7. سيناريوهات المطارات والمولات",
      side_nav_8: "8. المواصفات الفنية",
      side_nav_9: "9. طلب عرض سعر رسمي",
      sidebar_title_sales: "فريق المبيعات الدولي",
      status_online: "متصل الآن",
      sales_name: "Jade Huang",
      sales_role: "مديرة المشاريع الدولية",
      btn_inquire_jade: "تواصل مع Jade عبر واتساب",
      card_guarantee_title: "ضمان جودة ParkPro",
      card_guarantee_desc: "معتمد من CE و FCC و RoHS. ضمان لمدة 3 سنوات ودعم فني عن بعد على مدار الساعة.",
      tab_airport: "✈️ المطارات الدولية",
      tab_mall: "🏬 المراكز التجارية والمولات",
      tab_garage: "🏢 المواقف البلدية متعددة الطوابق",
      form_name: "الاسم الكامل",
      form_email: "البريد الإلكتروني للعمل",
      form_phone: "واتساب / الهاتف",
      form_company: "الشركة والدولة",
      form_project_type: "نوع المشروع",
      form_message: "تفاصيل المشروع وعدد المسارات",
      btn_submit_rfq: "إرسال طلب التسعير الرسمي",
      toast_success: "✓ شكراً لك! تم استلام طلبك وسيقوم مهندسنا بالرد خلال 24 ساعة.",
      char_counter_label: "الحروف:",
      footer_solutions: "الحلول",
      footer_hardware: "المعدات",
      footer_contact: "اتصل بنا",
      footer_rights: "© 2026 Shenzhen ParkPro Technology Co., Ltd. جميع الحقوق محفوظة.",
      footer_subtext: "مصمم للبنية التحتية الذكية والنقل الدولي."
    },

    de: {
      top_address: "Raum 409, 4. Stock, Qinghu Hengbo Innovation Industrial Park, Longhua, Shenzhen, China",
      top_whatsapp: "WhatsApp: +86 15677223292",
      badge_oem: "OEM/ODM Verfügbar",
      badge_export: "Exportstandard CE / FCC",
      badge_factory: "Direkte Exportfabrik",
      company_title: "Shenzhen ParkPro Technology (帕格泊科技)",
      nav_home: "Startseite",
      nav_solutions: "Lösungen",
      nav_products: "Produkte & Hardware",
      nav_cloud: "Cloud-Plattform",
      nav_scenarios: "Flughafen- & Einkaufszentrum-Fälle",
      nav_about: "Über Uns",
      nav_contact: "Kontakt",
      btn_get_price: "Besten Preis Anfordern",
      btn_contact_factory: "Fabrik Kontaktieren",
      btn_quick_rfq: "Schnelle Anfrage",
      btn_get_design: "Lösungsdesign",
      search_placeholder: "Systeme durchsuchen...",
      banner_badge: "Schlüsselfertige globale Exportlösung",
      banner_title: "Intelligentes Parkservice-System für Übersee: Automatische Gebührenerfassung & Ultraschall-Leitsystem",
      banner_desc: "Speziell für Einkaufszentren, internationale Flughäfen und städtische Parkhäuser entwickelt. Integration von Ticketspendern, Entwertern, Kassen-POS und Cloud-Management.",
      bc_home: "Startseite",
      bc_solutions: "Lösungen",
      bc_current: "Parkraummanagementsystem",
      sidebar_title_sections: "Lösungsabschnitte",
      side_nav_1: "1. Projektübersicht",
      side_nav_2: "2. Systemarchitekturen",
      side_nav_3: "3. Einfahrtsstation",
      side_nav_4: "4. Ausfahrtsstation",
      side_nav_5: "5. Kassenarbeitsplatz",
      side_nav_6: "6. Cloud-Software",
      side_nav_7: "7. Flughafen- & Mall-Szenarien",
      side_nav_8: "8. Technische Daten",
      side_nav_9: "9. Angebot Anfordern",
      sidebar_title_sales: "Internationales Vertriebsteam",
      status_online: "Online",
      sales_name: "Jade Huang",
      sales_role: "Leiterin Internationale Projekte",
      btn_inquire_jade: "Jade via WhatsApp kontaktieren",
      card_guarantee_title: "ParkPro Exportgarantie",
      card_guarantee_desc: "CE, FCC, RoHS zertifiziert. 3 Jahre Garantie mit 24/7 Remote-Support.",
      tab_airport: "✈️ Internationale Flughäfen",
      tab_mall: "🏬 Einkaufszentren",
      tab_garage: "🏢 Städtische Parkhäuser",
      form_name: "Vollständiger Name",
      form_email: "Geschäftliche E-Mail",
      form_phone: "WhatsApp / Telefon",
      form_company: "Unternehmen & Land",
      form_project_type: "Projekttyp",
      form_message: "Projektanforderungen & Fahrspuren",
      btn_submit_rfq: "OFFIZIELLES ANGEBOT ANFORDERN",
      toast_success: "✓ Vielen Dank! Ihre Anfrage ist eingegangen. Wir antworten innerhalb von 24 Stunden.",
      char_counter_label: "Zeichen:",
      footer_solutions: "Lösungen",
      footer_hardware: "Hardware",
      footer_contact: "Kontakt",
      footer_rights: "© 2026 Shenzhen ParkPro Technology Co., Ltd. Alle Rechte vorbehalten.",
      footer_subtext: "Entwickelt für internationale Smart-Mobility-Infrastruktur."
    },

    ru: {
      top_address: "Офис 409, 4-й этаж, Инновационный технопарк Цинху Хэнбо, Лунхуа, Шэньчжэнь, Китай",
      top_whatsapp: "WhatsApp: +86 15677223292",
      badge_oem: "OEM / ODM Доступно",
      badge_export: "Экспортный стандарт CE / FCC",
      badge_factory: "Прямой экспортный завод",
      company_title: "Shenzhen ParkPro Technology (帕格泊科技)",
      nav_home: "Главная",
      nav_solutions: "Решения",
      nav_products: "Продукция и оборудование",
      nav_cloud: "Облачная платформа",
      nav_scenarios: "Кейсы: Аэропорты и ТЦ",
      nav_about: "О нас",
      nav_contact: "Контакты",
      btn_get_price: "Узнать лучшую цену",
      btn_contact_factory: "Связаться с заводом",
      btn_quick_rfq: "Быстрый запрос",
      btn_get_design: "Проект решения",
      search_placeholder: "Поиск систем...",
      banner_badge: "Комплексные экспортные решения под ключ",
      banner_title: "Интеллектуальная система управления парковками: Автоматический сбор оплаты и ультразвуковая навигация",
      banner_desc: "Разработано для торговых центров, международных аэропортов и многоуровневых парковок. Включает диспенсеры билетов, валидаторы, кассовые POS и облачное управление.",
      bc_home: "Главная",
      bc_solutions: "Решения",
      bc_current: "Система управления парковкой",
      sidebar_title_sections: "Разделы решения",
      side_nav_1: "1. Обзор проекта",
      side_nav_2: "2. Архитектура системы",
      side_nav_3: "3. Стойка въезда",
      side_nav_4: "4. Стойка выезда",
      side_nav_5: "5. Рабочее место кассира",
      side_nav_6: "6. Облачное ПО",
      side_nav_7: "7. Сценарии: Аэропорты и ТРЦ",
      side_nav_8: "8. Технические характеристики",
      side_nav_9: "9. Запросить КП",
      sidebar_title_sales: "Международный отдел продаж",
      status_online: "Онлайн",
      sales_name: "Jade Huang",
      sales_role: "Руководитель международных проектов",
      btn_inquire_jade: "Написать Jade в WhatsApp",
      card_guarantee_title: "Гарантия ParkPro",
      card_guarantee_desc: "Сертификация CE, FCC, RoHS. Гарантия 3 года и круглосуточная удаленная техподдержка.",
      tab_airport: "✈️ Международные аэропорты",
      tab_mall: "🏬 Торгово-развлекательные центры",
      tab_garage: "🏢 Городские многоуровневые паркинги",
      form_name: "Полное имя",
      form_email: "Рабочий Email",
      form_phone: "WhatsApp / Телефон",
      form_company: "Компания и страна",
      form_project_type: "Тип объекта",
      form_message: "Требования к проекту и количество полос",
      btn_submit_rfq: "ОТПРАВИТЬ ЗАПРОС НА КП",
      toast_success: "✓ Спасибо! Ваш запрос принят. Наш инженер свяжется с вами в течение 24 часов.",
      char_counter_label: "Символов:",
      footer_solutions: "Решения",
      footer_hardware: "Оборудование",
      footer_contact: "Контакты",
      footer_rights: "© 2026 Shenzhen ParkPro Technology Co., Ltd. Все права защищены.",
      footer_subtext: "Создано для глобальной интеллектуальной инфраструктуры."
    },

    pt: {
      top_address: "Sala 409, 4º Andar, Parque Industrial Qinghu Hengbo, Longhua, Shenzhen, China",
      top_whatsapp: "WhatsApp: +86 15677223292",
      badge_oem: "OEM/ODM Disponível",
      badge_export: "Padrão de Exportação CE / FCC",
      badge_factory: "Fábrica Direta de Exportação",
      company_title: "Shenzhen ParkPro Technology (帕格泊科技)",
      nav_home: "Início",
      nav_solutions: "Soluções",
      nav_products: "Produtos e Hardware",
      nav_cloud: "Plataforma em Nuvem",
      nav_scenarios: "Casos de Aeroportos e Shoppings",
      nav_about: "Sobre Nós",
      nav_contact: "Contato",
      btn_get_price: "Melhor Cotação",
      btn_contact_factory: "Falar com a Fábrica",
      btn_quick_rfq: "Cotação Rápida",
      btn_get_design: "Projeto de Solução",
      search_placeholder: "Pesquisar sistemas...",
      banner_badge: "Engenharia de Exportação Turnkey",
      banner_title: "Sistema Inteligente de Estacionamento: Cobrança Automatizada e Guia Ultrassônico",
      banner_desc: "Desenvolvido para shopping centers, aeroportos internacionais e garagens públicas. Integra emissores de tickets, validadores, POS e gestão em nuvem.",
      bc_home: "Início",
      bc_solutions: "Soluções",
      bc_current: "Sistema de Controle de Estacionamento",
      sidebar_title_sections: "Seções da Solução",
      side_nav_1: "1. Visão Geral",
      side_nav_2: "2. Arquiteturas do Sistema",
      side_nav_3: "3. Estação de Entrada",
      side_nav_4: "4. Estação de Saída",
      side_nav_5: "5. Estação de Caixa POS",
      side_nav_6: "6. Software em Nuvem",
      side_nav_7: "7. Cenários: Aeroportos e Shoppings",
      side_nav_8: "8. Especificações Técnicas",
      side_nav_9: "9. Solicitar Cotação",
      sidebar_title_sales: "Equipe de Vendas Global",
      status_online: "Online",
      sales_name: "Jade Huang",
      sales_role: "Diretora de Projetos Internacionais",
      btn_inquire_jade: "Falar com Jade no WhatsApp",
      card_guarantee_title: "Garantia de Exportação ParkPro",
      card_guarantee_desc: "Certificado CE, FCC, RoHS. Garantia de 3 anos com suporte técnico remoto 24/7.",
      tab_airport: "✈️ Aeroportos Internacionais",
      tab_mall: "🏬 Shopping Centers",
      tab_garage: "🏢 Garagens Municipais",
      form_name: "Nome Completo",
      form_email: "E-mail Corporativo",
      form_phone: "WhatsApp / Telefone",
      form_company: "Empresa e País",
      form_project_type: "Tipo de Projeto",
      form_message: "Requisitos e Número de Vias",
      btn_submit_rfq: "ENVIAR SOLICITAÇÃO DE COTAÇÃO",
      toast_success: "✓ Obrigado! Recebemos sua solicitação e responderemos em até 24 horas.",
      char_counter_label: "Caracteres:",
      footer_solutions: "Soluções",
      footer_hardware: "Hardware",
      footer_contact: "Contato",
      footer_rights: "© 2026 Shenzhen ParkPro Technology Co., Ltd. Todos os direitos reservados.",
      footer_subtext: "Projetado para Infraestrutura de Mobilidade Inteligente."
    },

    ja: {
      top_address: "中国広東省深圳市竜華区清湖恒博創新産業園4階409室",
      top_whatsapp: "WhatsApp: +86 15677223292",
      badge_oem: "OEM/ODM 対応可能",
      badge_export: "国際輸出基準 CE / FCC 認証",
      badge_factory: "直営輸出メーカー",
      company_title: "深圳市帕格泊科技有限公司 (ParkPro)",
      nav_home: "ホーム",
      nav_solutions: "ソリューション",
      nav_products: "製品・ハードウェア",
      nav_cloud: "クラウド管理",
      nav_scenarios: "空港・商業施設導入事例",
      nav_about: "会社概要",
      nav_contact: "お問い合わせ",
      btn_get_price: "見積りを依頼する",
      btn_contact_factory: "工場へ直接問い合わせ",
      btn_quick_rfq: "迅速見積り",
      btn_get_design: "設計提案を受ける",
      search_placeholder: "システムを検索...",
      banner_badge: "グローバル向けターンキーソリューション",
      banner_title: "海外向けスマートパーキングシステム：自動料金収受＆超音波満空誘導",
      banner_desc: "大型商業施設、国際空港、立体駐車場向けに設計。発券機、精算機、POSレジ、車番認識カメラ、クラウド管理を統合。",
      bc_home: "ホーム",
      bc_solutions: "ソリューション",
      bc_current: "海外駐車場管理システム",
      sidebar_title_sections: "ソリューション目次",
      side_nav_1: "1. プロジェクト概要",
      side_nav_2: "2. デュアルシステム構成",
      side_nav_3: "3. 入口自動発券機",
      side_nav_4: "4. 出口自動精算機",
      side_nav_5: "5. 有人中央精算POS",
      side_nav_6: "6. クラウド管理ソフト",
      side_nav_7: "7. 空港・商業施設事例",
      side_nav_8: "8. 主要技術仕様",
      side_nav_9: "9. 公式見積り依頼",
      sidebar_title_sales: "海外営業サポート",
      status_online: "オンライン対応中",
      sales_name: "Jade Huang (黄)",
      sales_role: "海外プロジェクト統括ディレクター",
      btn_inquire_jade: "WhatsAppで直接相談",
      card_guarantee_title: "ParkPro 品質保証",
      card_guarantee_desc: "CE、FCC、RoHS認証取得。標準3年保証＆24時間年中無休のリモート技術サポートを提供。",
      tab_airport: "✈️ 国際空港ターミナル",
      tab_mall: "🏬 大型ショッピングモール",
      tab_garage: "🏢 市営立体駐車場",
      form_name: "お名前",
      form_email: "企業用メールアドレス",
      form_phone: "WhatsApp / お電話番号",
      form_company: "会社名および国名",
      form_project_type: "施設タイプ",
      form_message: "プロジェクト要件およびレーン数",
      btn_submit_rfq: "見積り依頼を送信",
      toast_success: "✓ ありがとうございます。お問い合わせを受け付けました。24時間以内に技術担当者よりご連絡いたします。",
      char_counter_label: "文字数：",
      footer_solutions: "ソリューション",
      footer_hardware: "ハードウェア",
      footer_contact: "お問い合わせ",
      footer_rights: "© 2026 Shenzhen ParkPro Technology Co., Ltd. 無断転載を禁じます。",
      footer_subtext: "国際交通インフラとスマートモビリティのために設計。"
    }
  };

  const LANG_LABELS = {
    en: '🇺🇸 English',
    zh: '🇨🇳 简体中文',
    es: '🇪🇸 Español',
    fr: '🇫🇷 Français',
    de: '🇩🇪 Deutsch',
    ar: '🇦🇪 العربية',
    ru: '🇷🇺 Русский',
    pt: '🇵🇹 Português',
    ja: '🇯🇵 日本語'
  };

  let currentLang = 'en';

  function getTranslation(key, lang) {
    lang = lang || currentLang;
    if (translations[lang] && translations[lang][key] !== undefined) {
      return translations[lang][key];
    }
    if (translations['en'] && translations['en'][key] !== undefined) {
      return translations['en'][key];
    }
    return null;
  }

  function applyLanguage(lang) {
    if (!translations[lang]) lang = 'en';
    currentLang = lang;
    try {
      localStorage.setItem('parkpro_lang', lang);
    } catch (e) {}

    document.documentElement.lang = lang;
    if (lang === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }

    // 1. Translate all data-i18n elements
    const i18nElements = document.querySelectorAll('[data-i18n]');
    i18nElements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = getTranslation(key, lang);
      if (val !== null) {
        el.innerHTML = val;
      }
    });

    // 2. Translate placeholders
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = getTranslation(key, lang);
      if (val !== null) {
        el.placeholder = val;
      }
    });

    // 3. Translate titles
    const titleElements = document.querySelectorAll('[data-i18n-title]');
    titleElements.forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      const val = getTranslation(key, lang);
      if (val !== null) {
        el.title = val;
      }
    });

    // 4. Update language selectors across the page
    updateLanguageSelectorUI(lang);

    // 5. Fire custom event for any other listeners
    window.dispatchEvent(new CustomEvent('parkpro_language_changed', { detail: { lang } }));
  }

  function updateLanguageSelectorUI(lang) {
    const labelSpan = document.getElementById('currentLangLabel');
    if (labelSpan) {
      labelSpan.textContent = LANG_LABELS[lang] || '🇺🇸 English';
    }

    const dropdown = document.getElementById('langDropdown');
    if (dropdown) {
      const links = dropdown.querySelectorAll('a[data-lang]');
      links.forEach(link => {
        if (link.getAttribute('data-lang') === lang) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  }

  function initI18N() {
    let savedLang = 'en';
    try {
      savedLang = localStorage.getItem('parkpro_lang') || 'en';
    } catch (e) {}

    // Attach click listeners to language dropdown items
    document.addEventListener('click', function (e) {
      const target = e.target.closest('a[data-lang]');
      if (target) {
        e.preventDefault();
        const selectedLang = target.getAttribute('data-lang');
        if (selectedLang) {
          applyLanguage(selectedLang);
          const dropdown = document.getElementById('langDropdown');
          if (dropdown) dropdown.classList.remove('show');
        }
      }
    });

    // Language Dropdown Toggle
    const langSelector = document.getElementById('langSelector');
    const langDropdown = document.getElementById('langDropdown');

    if (langSelector && langDropdown) {
      langSelector.addEventListener('click', function (e) {
        e.stopPropagation();
        langDropdown.classList.toggle('show');
      });

      document.addEventListener('click', function (e) {
        if (!langSelector.contains(e.target)) {
          langDropdown.classList.remove('show');
        }
      });
    }

    applyLanguage(savedLang);
  }

  // Expose API globally
  window.ParkProI18N = {
    setLanguage: applyLanguage,
    getLanguage: () => currentLang,
    t: getTranslation,
    init: initI18N
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18N);
  } else {
    initI18N();
  }
})();
