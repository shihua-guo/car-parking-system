/**
 * ParkPro Technology - Complete I18N Internationalization Engine
 * Full-fidelity translation between English, 简体中文, Español, Français,
 * Deutsch, العربية, Русский, Português, and 日本語.
 * Persists selection in localStorage and synchronizes across all pages.
 */

(function () {
  'use strict';

  // 1. Core Key-Value Dictionary
  const translations = {
    en: {
      top_address: "Room 409, 4th Floor, Qinghu Hengbo Innovation Industrial Park, Longhua District, Shenzhen, Guangdong Province",
      top_whatsapp: "WhatsApp: +86 15677223292",
      badge_oem: "OEM/ODM Available",
      badge_export: "Export Standard CE / FCC",
      badge_factory: "Export Direct Factory",
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
      banner_badge: "Global Solution Showcase | Turnkey Export Engineering",
      banner_title: "Turnkey Overseas Parking Service System: Automated Fee Collection & Ultrasonic Guidance",
      banner_desc: "Engineered specifically for international commercial plazas, international airports, municipal transit hubs, and smart parking garages. Integrating ticket dispensers, barcode validators, manual cashier POS, LPR cameras, and real-time cloud management.",
      bc_home: "Home",
      bc_solutions: "Solutions & Cases",
      bc_current: "Overseas Parking Service & Fee Management System",
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
      sec1_title: "1. Project Overview & Export Engineering Background",
      sec7_title: "7. Specialized Application Scenarios & Global Case Profiles",
      sec7_intro: "Our systems are specifically customized to address the operational demands of distinct overseas parking environments:",
      tab_airport: "✈️ International Airports",
      tab_mall: "🛍️ Commercial Plazas & Malls",
      tab_garage: "🏢 Municipal Multi-Level Garages",
      toast_success: "✓ Thank you! Your RFQ has been received. Our overseas engineer will reply within 24 hours.",
      footer_rights: "© 2026 Shenzhen ParkPro Technology Co., Ltd. (深圳市帕格泊科技有限公司). All Rights Reserved.",
      footer_subtext: "Designed for International Engineering & Smart Mobility Infrastructure."
    },

    zh: {
      top_address: "深圳市龙华区清湖恒博创新产业园4楼409室",
      top_whatsapp: "WhatsApp / 电话：+86 15677223292",
      badge_oem: "支持 OEM/ODM 定制",
      badge_export: "国际标准 CE / FCC 认证",
      badge_factory: "源头制造外贸工厂",
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
      banner_badge: "全球出海解决方案展示 | 一站式交钥匙工程",
      banner_title: "出海一站式智能停车服务系统：自动化收费管理与超声波车位引导",
      banner_desc: "专为国际大型商业广场、海外国际机场、市政交通枢纽与多层立体停车场量身定制。高度集成条码取票机、电动验票机、人工中央收费POS、车牌识别摄像机及云端实时管理平台。",
      bc_home: "首页",
      bc_solutions: "解决方案与案例",
      bc_current: "海外停车服务与收费管理系统",
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
      sec1_title: "1. 项目概况与海外工程背景",
      sec7_title: "7. 典型应用场景与海外定制方案",
      sec7_intro: "系统根据不同海外停车运营场景进行了针对性软硬件优化：",
      tab_airport: "✈️ 国际机场航站楼",
      tab_mall: "🛍️ 商业综合体与大型商场",
      tab_garage: "🏢 市政多层立体停车场",
      toast_success: "✓ 感谢您的垂询！我们已收到您的项目需求，海外技术团队将在24小时内与您联系。",
      footer_rights: "© 2026 深圳市帕格泊科技有限公司 (Shenzhen ParkPro Technology Co., Ltd.). 保留所有权利。",
      footer_subtext: "专为国际工程与智慧出行基础设施打造。"
    },

    es: {
      top_address: "Habitación 409, 4to Piso, Parque Industrial Qinghu Hengbo, Longhua, Shenzhen, China",
      top_whatsapp: "WhatsApp: +86 15677223292",
      badge_oem: "OEM/ODM Disponible",
      badge_export: "Norma CE / FCC",
      badge_factory: "Fábrica Directa",
      company_title: "Shenzhen ParkPro Technology (帕格泊科技)",
      nav_home: "Inicio",
      nav_solutions: "Soluciones",
      nav_products: "Productos y Hardware",
      nav_cloud: "Plataforma Cloud",
      nav_scenarios: "Aeropuertos y Malls",
      nav_about: "Nosotros",
      nav_contact: "Contacto",
      btn_get_price: "Obtener Precio",
      btn_contact_factory: "Contactar Fábrica",
      btn_quick_rfq: "Cotización Rápida",
      btn_get_design: "Diseño de Solución",
      search_placeholder: "Buscar sistemas...",
      banner_badge: "Ingeniería de Exportación Llave en Mano",
      banner_title: "Sistema Inteligente de Estacionamiento: Cobro Automatizado y Guiado Ultrasónico",
      banner_desc: "Diseñado para plazas comerciales, aeropuertos internacionales y garajes multinivel.",
      bc_home: "Inicio",
      bc_solutions: "Soluciones",
      bc_current: "Sistema de Control de Estacionamiento",
      sidebar_title_sections: "Índice de la Solución",
      side_nav_1: "1. Descripción del Proyecto",
      side_nav_2: "2. Arquitecturas del Sistema",
      side_nav_3: "3. Estación de Entrada",
      side_nav_4: "4. Estación de Salida",
      side_nav_5: "5. Estación POS Cajero",
      side_nav_6: "6. Software en la Nube",
      side_nav_7: "7. Escenarios de Aeropuertos y Malls",
      side_nav_8: "8. Especificaciones Técnicas",
      side_nav_9: "9. Solicitar Cotización",
      sidebar_title_sales: "Ventas Globales",
      status_online: "En Línea",
      sales_name: "Jade Huang",
      sales_role: "Directora de Proyectos",
      tab_airport: "✈️ Aeropuertos Internacionales",
      tab_mall: "🛍️ Centros Comerciales",
      tab_garage: "🏢 Garajes Municipales",
      toast_success: "✓ ¡Gracias! Responderemos en 24 horas.",
      footer_rights: "© 2026 Shenzhen ParkPro Technology Co., Ltd. Todos los derechos reservados.",
      footer_subtext: "Diseñado para Movilidad Inteligente."
    },

    fr: {
      top_address: "Bureau 409, 4e Étage, Parc Qinghu Hengbo, Longhua, Shenzhen, Chine",
      top_whatsapp: "WhatsApp: +86 15677223292",
      badge_oem: "OEM/ODM Disponible",
      badge_export: "Norme Export CE / FCC",
      badge_factory: "Usine d'Exportation",
      company_title: "Shenzhen ParkPro Technology (帕格泊科技)",
      nav_home: "Accueil",
      nav_solutions: "Solutions",
      nav_products: "Matériel",
      nav_cloud: "Plateforme Cloud",
      nav_scenarios: "Aéroports & Centres Commerciaux",
      nav_about: "À Propos",
      nav_contact: "Contact",
      btn_get_price: "Meilleur Prix",
      btn_contact_factory: "Contacter l'Usine",
      btn_quick_rfq: "Devis Rapide",
      btn_get_design: "Conception de Solution",
      search_placeholder: "Rechercher...",
      banner_badge: "Ingénierie Clé en Main",
      banner_title: "Système de Gestion de Stationnement Intelligent & Guidage Ultrasonique",
      banner_desc: "Conçu pour aéroports, centres commerciaux et parkings à étages.",
      bc_home: "Accueil",
      bc_solutions: "Solutions",
      bc_current: "Système de Stationnement",
      sidebar_title_sections: "Sommaire",
      side_nav_1: "1. Présentation du Projet",
      side_nav_2: "2. Architectures Système",
      side_nav_3: "3. Borne d'Entrée",
      side_nav_4: "4. Borne de Sortie",
      side_nav_5: "5. Station Caisse POS",
      side_nav_6: "6. Logiciel Cloud",
      side_nav_7: "7. Cas Aéroports & Centres",
      side_nav_8: "8. Spécifications",
      side_nav_9: "9. Demander un Devis",
      sidebar_title_sales: "Équipe Export",
      status_online: "En Ligne",
      sales_name: "Jade Huang",
      sales_role: "Directrice des Projets",
      tab_airport: "✈️ Aéroports",
      tab_mall: "🛍️ Centres Commerciaux",
      tab_garage: "🏢 Parkings Publics",
      toast_success: "✓ Merci ! Réponse sous 24h.",
      footer_rights: "© 2026 Shenzhen ParkPro Technology Co., Ltd. Tous droits réservés.",
      footer_subtext: "Conçu pour l'Ingénierie Internationale."
    },

    ar: {
      top_address: "الغرفة 409، الطابق الرابع، مجمع تشينغهو هينغبو، لونغهوا، شنتشن، الصين",
      top_whatsapp: "واتساب: 8615677223292+",
      badge_oem: "تصنيع OEM / ODM",
      badge_export: "معايير CE / FCC",
      badge_factory: "مصنع مباشر",
      company_title: "شنتشن بارك برو للتكنولوجيا (帕格泊科技)",
      nav_home: "الرئيسية",
      nav_solutions: "الحلول",
      nav_products: "المعدات",
      nav_cloud: "منصة السحابة",
      nav_scenarios: "المطارات والمولات",
      nav_about: "من نحن",
      nav_contact: "اتصل بنا",
      btn_get_price: "أفضل سعر",
      btn_contact_factory: "اتصل بالمصنع",
      btn_quick_rfq: "طلب تسعير",
      btn_get_design: "تصميم الحل",
      search_placeholder: "البحث في الأنظمة...",
      banner_badge: "حلول تصدير متكاملة",
      banner_title: "نظام إدارة مواقف السيارات الذكي والتحصيل الآلي والإرشاد",
      banner_desc: "مصمم للمطارات والمراكز التجارية ومواقف السيارات متعددة الطوابق.",
      bc_home: "الرئيسية",
      bc_solutions: "الحلول",
      bc_current: "نظام إدارة المواقف",
      sidebar_title_sections: "أقسام الحل",
      side_nav_1: "1. نظرة عامة",
      side_nav_2: "2. هيكلية النظام",
      side_nav_3: "3. محطة الدخول",
      side_nav_4: "4. محطة الخروج",
      side_nav_5: "5. نقطة بيع المحاسب",
      side_nav_6: "6. برامج السحابة",
      side_nav_7: "7. حالات المطارات والمولات",
      side_nav_8: "8. المواصفات الفنية",
      side_nav_9: "9. طلب عرض سعر",
      sidebar_title_sales: "فريق المبيعات",
      status_online: "متصل",
      sales_name: "Jade Huang",
      sales_role: "مديرة المشاريع",
      tab_airport: "✈️ المطارات الدولية",
      tab_mall: "🛍️ المراكز التجارية",
      tab_garage: "🏢 المواقف البلدية",
      toast_success: "✓ شكراً لك! سنرد خلال 24 ساعة.",
      footer_rights: "© 2026 Shenzhen ParkPro Technology Co., Ltd. جميع الحقوق محفوظة.",
      footer_subtext: "مصمم للبنية التحتية الذكية."
    },

    de: {
      top_address: "Raum 409, 4. OG, Qinghu Hengbo Industriepark, Longhua, Shenzhen, China",
      top_whatsapp: "WhatsApp: +86 15677223292",
      badge_oem: "OEM/ODM Verfügbar",
      badge_export: "Exportstandard CE / FCC",
      badge_factory: "Direkte Exportfabrik",
      company_title: "Shenzhen ParkPro Technology (帕格泊科技)",
      nav_home: "Startseite",
      nav_solutions: "Lösungen",
      nav_products: "Produkte",
      nav_cloud: "Cloud-Plattform",
      nav_scenarios: "Flughafen & Malls",
      nav_about: "Über Uns",
      nav_contact: "Kontakt",
      btn_get_price: "Preis Anfordern",
      btn_contact_factory: "Fabrik Kontaktieren",
      btn_quick_rfq: "Schnellanfrage",
      btn_get_design: "Lösungsdesign",
      search_placeholder: "Systeme durchsuchen...",
      banner_badge: "Schlüsselfertige globale Exportlösung",
      banner_title: "Intelligentes Parkservice-System & Ultraschall-Leitsystem",
      banner_desc: "Für Einkaufszentren, Flughäfen und städtische Parkhäuser.",
      bc_home: "Startseite",
      bc_solutions: "Lösungen",
      bc_current: "Parkraummanagementsystem",
      sidebar_title_sections: "Abschnitte",
      side_nav_1: "1. Projektübersicht",
      side_nav_2: "2. Systemarchitekturen",
      side_nav_3: "3. Einfahrtsstation",
      side_nav_4: "4. Ausfahrtsstation",
      side_nav_5: "5. Kassen-POS",
      side_nav_6: "6. Cloud-Software",
      side_nav_7: "7. Flughafen & Malls",
      side_nav_8: "8. Technische Daten",
      side_nav_9: "9. Angebot Anfordern",
      sidebar_title_sales: "Vertriebsteam",
      status_online: "Online",
      sales_name: "Jade Huang",
      sales_role: "Projektleiterin",
      tab_airport: "✈️ Flughäfen",
      tab_mall: "🛍️ Einkaufszentren",
      tab_garage: "🏢 Parkhäuser",
      toast_success: "✓ Danke! Wir antworten innerhalb von 24 Stunden.",
      footer_rights: "© 2026 Shenzhen ParkPro Technology Co., Ltd. Alle Rechte vorbehalten.",
      footer_subtext: "Für Smart-Mobility-Infrastruktur."
    },

    ru: {
      top_address: "Офис 409, 4-й этаж, Технопарк Цинху Хэнбо, Лунхуа, Шэньчжэнь, Китай",
      top_whatsapp: "WhatsApp: +86 15677223292",
      badge_oem: "OEM/ODM Доступно",
      badge_export: "Стандарт CE / FCC",
      badge_factory: "Прямой экспортный завод",
      company_title: "Shenzhen ParkPro Technology (帕格泊科技)",
      nav_home: "Главная",
      nav_solutions: "Решения",
      nav_products: "Оборудование",
      nav_cloud: "Облако",
      nav_scenarios: "Аэропорты и ТЦ",
      nav_about: "О нас",
      nav_contact: "Контакты",
      btn_get_price: "Узнать цену",
      btn_contact_factory: "Связаться с заводом",
      btn_quick_rfq: "Быстрый запрос",
      btn_get_design: "Проект решения",
      search_placeholder: "Поиск систем...",
      banner_badge: "Экспортные решения под ключ",
      banner_title: "Интеллектуальная система парковки: Автоматическая оплата и ультразвуковая навигация",
      banner_desc: "Разработано для торговых комплексов, аэропортов и паркингов.",
      bc_home: "Главная",
      bc_solutions: "Решения",
      bc_current: "Система парковки",
      sidebar_title_sections: "Разделы",
      side_nav_1: "1. Обзор проекта",
      side_nav_2: "2. Архитектура системы",
      side_nav_3: "3. Стойка въезда",
      side_nav_4: "4. Стойка выезда",
      side_nav_5: "5. Касса POS",
      side_nav_6: "6. Облачное ПО",
      side_nav_7: "7. Аэропорты и ТЦ",
      side_nav_8: "8. Технические данные",
      side_nav_9: "9. Запросить КП",
      sidebar_title_sales: "Отдел продаж",
      status_online: "Онлайн",
      sales_name: "Jade Huang",
      sales_role: "Руководитель проектов",
      tab_airport: "✈️ Аэропорты",
      tab_mall: "🛍️ Торговые центры",
      tab_garage: "🏢 Паркинги",
      toast_success: "✓ Спасибо! Мы свяжемся с вами в течение 24 часов.",
      footer_rights: "© 2026 Shenzhen ParkPro Technology Co., Ltd. Все права защищены.",
      footer_subtext: "Создано для интеллектуальной мобильности."
    },

    pt: {
      top_address: "Sala 409, 4º Andar, Parque Qinghu Hengbo, Longhua, Shenzhen, China",
      top_whatsapp: "WhatsApp: +86 15677223292",
      badge_oem: "OEM/ODM Disponível",
      badge_export: "Padrão CE / FCC",
      badge_factory: "Fábrica Direta",
      company_title: "Shenzhen ParkPro Technology (帕格泊科技)",
      nav_home: "Início",
      nav_solutions: "Soluções",
      nav_products: "Hardware",
      nav_cloud: "Nuvem",
      nav_scenarios: "Aeroportos e Shoppings",
      nav_about: "Sobre Nós",
      nav_contact: "Contato",
      btn_get_price: "Melhor Cotação",
      btn_contact_factory: "Falar com a Fábrica",
      btn_quick_rfq: "Cotação Rápida",
      btn_get_design: "Projeto de Solução",
      search_placeholder: "Pesquisar...",
      banner_badge: "Engenharia Turnkey",
      banner_title: "Sistema Inteligente de Estacionamento & Guia Ultrassônico",
      banner_desc: "Desenvolvido para shopping centers, aeroportos e garagens.",
      bc_home: "Início",
      bc_solutions: "Soluções",
      bc_current: "Sistema de Estacionamento",
      sidebar_title_sections: "Seções",
      side_nav_1: "1. Visão Geral",
      side_nav_2: "2. Arquiteturas",
      side_nav_3: "3. Estação de Entrada",
      side_nav_4: "4. Estação de Saída",
      side_nav_5: "5. Caixa POS",
      side_nav_6: "6. Software em Nuvem",
      side_nav_7: "7. Aeroportos e Shoppings",
      side_nav_8: "8. Especificações",
      side_nav_9: "9. Solicitar Cotação",
      sidebar_title_sales: "Vendas",
      status_online: "Online",
      sales_name: "Jade Huang",
      sales_role: "Diretora de Projetos",
      tab_airport: "✈️ Aeroportos",
      tab_mall: "🛍️ Shopping Centers",
      tab_garage: "🏢 Garagens Públicas",
      toast_success: "✓ Obrigado! Responderemos em até 24 horas.",
      footer_rights: "© 2026 Shenzhen ParkPro Technology Co., Ltd. Todos os direitos reservados.",
      footer_subtext: "Mobilidade Inteligente."
    },

    ja: {
      top_address: "中国広東省深圳市竜華区清湖恒博創新産業園4階409室",
      top_whatsapp: "WhatsApp: +86 15677223292",
      badge_oem: "OEM/ODM 対応",
      badge_export: "国際輸出基準 CE / FCC",
      badge_factory: "直営輸出メーカー",
      company_title: "深圳市帕格泊科技有限公司 (ParkPro)",
      nav_home: "ホーム",
      nav_solutions: "ソリューション",
      nav_products: "製品情報",
      nav_cloud: "クラウド管理",
      nav_scenarios: "空港・商業施設導入事例",
      nav_about: "会社概要",
      nav_contact: "お問い合わせ",
      btn_get_price: "見積り依頼",
      btn_contact_factory: "工場へ問い合わせ",
      btn_quick_rfq: "迅速見積り",
      btn_get_design: "設計提案",
      search_placeholder: "システム検索...",
      banner_badge: "ターンキーソリューション",
      banner_title: "海外向けスマートパーキングシステム＆超音波満空誘導",
      banner_desc: "大型商業施設、国際空港、立体駐車場向けに設計。",
      bc_home: "ホーム",
      bc_solutions: "ソリューション",
      bc_current: "駐車場管理システム",
      sidebar_title_sections: "目次",
      side_nav_1: "1. プロジェクト概要",
      side_nav_2: "2. システム構成",
      side_nav_3: "3. 入口自動発券機",
      side_nav_4: "4. 出口自動精算機",
      side_nav_5: "5. 有人中央精算POS",
      side_nav_6: "6. クラウド管理ソフト",
      side_nav_7: "7. 空港・商業施設事例",
      side_nav_8: "8. 主要技術仕様",
      side_nav_9: "9. 公式見積り依頼",
      sidebar_title_sales: "海外営業",
      status_online: "オンライン",
      sales_name: "Jade Huang (黄)",
      sales_role: "プロジェクト統括",
      tab_airport: "✈️ 国際空港",
      tab_mall: "🛍️ ショッピングモール",
      tab_garage: "🏢 市営立体駐車場",
      toast_success: "✓ ありがとうございます。24時間以内にご連絡いたします。",
      footer_rights: "© 2026 Shenzhen ParkPro Technology Co., Ltd. 無断転載を禁じます。",
      footer_subtext: "スマートモビリティのために設計。"
    }
  };

  // 2. Comprehensive Bilingual Content Map for English <-> Chinese
  const ZH_FULL_MAP = [
    // Headings & Titles
    ["Turnkey Overseas Parking Service System: Automated Fee Collection & Ultrasonic Guidance", "出海一站式智能停车服务系统：自动化收费管理与超声波车位引导"],
    ["Turnkey Overseas Parking Solutions", "出海一站式智能停车系统解决方案"],
    ["Smart Parking Terminals & Infrastructure Hardware", "智能停车终端与出入口基础设施硬件"],
    ["Engineering Reliable Smart Parking Systems for the Global Market", "专注全球市场的工业级智能停车系统制造与工程交付"],
    ["Contact Our Overseas Engineering Team", "联系我们的海外工程技术拓展团队"],
    ["1. Project Overview & Export Engineering Background", "1. 项目概况与海外工程背景"],
    ["2. Dual System Architectures: Central Payment vs Exit Lane Payment", "2. 双系统架构设计：中央预缴费模式 vs 出口直缴模式"],
    ["3. Smart Entry Station (Ticket Dispenser PK-ENT800)", "3. 智能入口取票系统 (Ticket Dispenser PK-ENT800)"],
    ["4. Smart Exit Station (Ticket Validator PK-EXT800)", "4. 智能出口验票系统 (Ticket Validator PK-EXT800)"],
    ["5. Central Cashier POS Workstation & Hardware Peripherals", "5. 人工中央收费工作站与周边配套设备"],
    ["6. Central Cloud & Local Server Management Software", "6. 中央云平台与本地收费管理软件"],
    ["7. Specialized Application Scenarios & Global Case Profiles", "7. 典型应用场景与海外定制方案"],
    ["8. Complete System Technical Specifications", "8. 核心系统软硬件技术参数"],
    ["9. Request Official Quotation & Project Technical Proposal", "9. 获取官方工程方案与项目报价单"],
    ["Company Profile", "公司简介与发展概况"],
    ["Core Competencies & Manufacturing Strength", "核心研发实力与制造优势"],
    ["Global Quality Assurance & Service Commitment", "全球质保与技术服务承诺"],
    ["Shenzhen Headquarters", "深圳总部与制造基地"],
    ["Send Us an Inquiry", "在线提交项目咨询需求"],

    // Scenario Headers
    ["1. International Airport Parking & Transit Hub System", "1. 国际机场航站楼与交通枢纽智慧停车系统"],
    ["2. Shopping Malls & Commercial Plazas", "2. 大型商业综合体与购物中心停车系统"],
    ["3. Municipal & Hospital Public Car Parks", "3. 市政与医院公共多层立体停车场"],
    ["International Airport Terminal Parking Solution", "国际机场航站楼智慧停车方案"],
    ["Shopping Mall & Commercial Center Parking Solution", "大型商业综合体与购物中心方案"],
    ["Municipal Multi-Story Garage & Ultrasonic Space Guidance", "市政多层立体车库与超声波车位引导系统"],

    // Hardware Names
    ["Intelligent Entry Ticket Dispenser (PK-ENT800)", "智能入口取票机 (PK-ENT800)"],
    ["Intelligent Exit Ticket Validator (PK-EXT800)", "智能出口验票机 (PK-EXT800)"],
    ["Cashier POS Workstation Bundle (POS-WS500)", "人工中央收费工作站套装 (POS-WS500)"],
    ["High-Speed Brushless Barrier Gate (BG-DC900)", "工业级直流无刷快速道闸 (BG-DC900)"],
    ["Ultrasonic Parking Space Detector & LED Indicator", "超声波车位探测器与红绿双色指示灯 (PGS-US200)"],
    ["Deep-Learning ANPR / LPR HD Camera", "深度学习高清车牌识别摄像机 (LPR-CAM4K)"],

    // Key Highlights & Subtitles
    ["High Throughput Rate", "超高车流通行率"],
    ["Multi-Currency Ready", "多币种全球适配"],
    ["Offline Fallback Safe", "断网离线容灾保护"],
    ["Turnkey Engineering", "一站式整套交付"],
    ["Global Export Assurance", "全球出海品质保障"],
    ["CE & FCC Certified", "CE & FCC 国际认证"],
    ["Multi-Currency POS", "多币种收费结算"],
    ["3-Year Hardware Warranty", "3年硬件标准质保"],
    ["99.9% Recognition Rate", "99.9% 综合识别率"],
    ["Export Specifications", "出海工程技术规格书"],
    ["Download Project Pack (PDF)", "免费索取项目资料包 (PDF)"],
    ["Contact Sales Now", "立即咨询销售团队"],
    ["Request Official Proposal", "获取官方技术方案"],
    ["Request Airport Case Study", "获取机场案例方案"],
    ["Request Commercial Proposal", "获取商业广场方案"],
    ["Request Municipal Garage Design", "获取市政立体车库方案"],
    ["Request Specs & Price", "索取规格参数与报价"],
    ["Contact Factory", "联系工厂"],
    ["Get Best Price", "获取最优报价"],
    ["Quick RFQ", "快速询价"],
    ["Get Solution Design", "获取方案设计"],
    ["SUBMIT RFQ INQUIRY", "提交项目询价需求"],
    ["SUBMIT OFFICIAL RFQ INQUIRY", "立即提交官方项目询价"],
    ["SUBMIT SOLUTION REQUEST", "提交定制方案请求"],
    ["SUBMIT HARDWARE RFQ", "提交硬件采购询价"],
    ["SEND MESSAGE", "发送留言信息"],
    ["VISIT FACTORY OR REQUEST DISTRIBUTION PARTNERSHIP", "参观工厂或申请海外代理经销"],
    ["Visit Factory or Request Distribution Partnership", "参观工厂或申请海外代理经销"],

    // Form Field Labels
    ["Full Name", "您的姓名"],
    ["Work Email", "企业电子邮箱"],
    ["Email", "电子邮箱"],
    ["WhatsApp / Phone Number", "WhatsApp / 联系电话"],
    ["WhatsApp / Phone", "WhatsApp / 联系电话"],
    ["Company & Country", "公司名称及所在国家"],
    ["Project Facility Type", "项目场所类型"],
    ["Project Requirements & Lane Details", "项目具体需求与车道数量"],
    ["Project Scenario", "项目应用场景"],
    ["Site Scale & Scope", "场地规模与车位数"],
    ["Inquiry Details", "需求详情"],
    ["Inquiry Message", "留言内容"],
    ["Destination Country & Quantities", "目的港口与采购数量"],

    // Common Descriptions
    ["Airports experience intense peak traffic surges, mixed vehicle categories (taxis, ride-shares, long-term travelers, VIP shuttles), and high security demands.", "针对机场极端早晚高峰、复杂车辆类型（出租车、网约车、长租旅客、VIP接驳车）及高安全防卫等级量身优化。"],
    ["Commercial complexes require smooth customer parking to stimulate retail spending, accompanied by seamless tenant discount administration.", "商业综合体需确保顺畅的泊车体验以促进零售消费，并支持商户消费小票无缝抵扣减免停车费。"],
    ["Equipped with heavy-duty thermal ticket dispenser (0.8s print & cut), Mifare/ID RFID reader, LCD screen, IP voice intercom, and dual loop vehicle interlock.", "配备工业级高速热敏切刀取票机构（0.8秒快速出票）、Mifare/ID刷卡读头、7寸液晶屏、IP紧急对讲及双地感防砸互锁。"],
    ["Motorized validator retraction mechanism, multi-angle 1D/2D barcode imaging scanner, audio guidance speaker, and barrier interlock relay.", "具备电动自动收票/吞票机构、广角一维/二维码激光扫描器、真人语音播报扬声器及道闸联动放行控制继电器。"],
    ["Headquartered in Shenzhen, China — the world's leading hub for smart electronics and automation engineering — Shenzhen ParkPro Technology Co., Ltd. (深圳市帕格泊科技有限公司) is a dedicated developer and exporter of intelligent parking revenue control systems (PARCS), ultrasonic parking guidance systems (PGS), and automated access barrier hardware.", "深圳市帕格泊科技有限公司总部位于中国深圳——全球智能硬件与电子自动化的核心枢纽，是一家专注于海外智能停车收费系统 (PARCS)、超声波车位引导系统 (PGS) 及出入口控制道闸硬件的研发制造与出口商。"]
  ];

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

  // Deep recursive text-node replacer
  function applyFullTextTranslation(targetLang) {
    // 1. Process explicit data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = getTranslation(key, targetLang);
      if (val !== null) {
        el.innerHTML = val;
      }
    });

    // 2. Process placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = getTranslation(key, targetLang);
      if (val !== null) {
        el.placeholder = val;
      }
    });

    // 3. Process titles
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      const val = getTranslation(key, targetLang);
      if (val !== null) {
        el.title = val;
      }
    });

    // 4. Translate via Bilingual Content Map (English <-> Chinese)
    const elementsToScan = document.querySelectorAll('h1, h2, h3, h4, h5, p, a, button, label, strong, span, th, td');
    elementsToScan.forEach(el => {
      // Skip language dropdown items themselves
      if (el.closest('#langDropdown') || el.closest('.lang-dropdown')) return;
      if (el.getAttribute('data-i18n')) return; // already handled

      // Store original English text if not already stored
      if (el.dataset.origText === undefined) {
        const text = el.textContent.trim();
        if (text) {
          el.dataset.origText = text;
        }
      }

      const origText = el.dataset.origText;
      if (!origText) return;

      if (targetLang === 'zh') {
        // Find matching pair
        for (let i = 0; i < ZH_FULL_MAP.length; i++) {
          const enStr = ZH_FULL_MAP[i][0];
          const zhStr = ZH_FULL_MAP[i][1];
          if (origText === enStr) {
            // Check if element has child elements or is plain text
            if (el.children.length === 0) {
              el.textContent = zhStr;
            } else {
              // Only replace text node if simple
              el.childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() === enStr) {
                  node.nodeValue = zhStr;
                }
              });
            }
            break;
          }
        }
      } else {
        // Restore English as base
        if (el.children.length === 0) {
          el.textContent = origText;
        } else {
          el.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== '') {
              node.nodeValue = origText;
            }
          });
        }
      }
    });
  }

  function applyLanguage(lang) {
    if (!translations[lang]) lang = 'en';
    currentLang = lang;
    try {
      localStorage.setItem('parkpro_lang', lang);
    } catch (e) {}

    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    applyFullTextTranslation(lang);
    updateLanguageSelectorUI(lang);

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

    const langSelector = document.getElementById('langSelector');
    const langDropdown = document.getElementById('langDropdown');

    if (langSelector && langDropdown) {
      // Toggle dropdown ONLY when clicking the selector trigger (not the dropdown menu itself)
      langSelector.addEventListener('click', function (e) {
        if (e.target.closest('#langDropdown') || e.target.closest('.lang-dropdown')) {
          return;
        }
        e.stopPropagation();
        langDropdown.classList.toggle('show');
      });

      // Bind directly to EACH language item
      const langItems = langDropdown.querySelectorAll('a[data-lang]');
      langItems.forEach(item => {
        item.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          const selectedLang = this.getAttribute('data-lang');
          if (selectedLang) {
            applyLanguage(selectedLang);
          }
          langDropdown.classList.remove('show');
        });
      });

      // Close dropdown when clicking outside
      document.addEventListener('click', function (e) {
        if (!langSelector.contains(e.target)) {
          langDropdown.classList.remove('show');
        }
      });
    }

    // Apply saved language initially
    applyLanguage(savedLang);
  }

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
