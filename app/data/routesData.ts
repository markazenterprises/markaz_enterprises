export interface RouteMetadata {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  category?: string;
  divisionId?: string;
  h1: string;
  subtitle: string;
  content?: string[];
  features?: string[];
  faqs?: { q: string; a: string }[];
}

export const DIVISIONS_DATA: Record<string, RouteMetadata> = {
  "home-appliances": {
    slug: "home-appliances",
    divisionId: "DIV03",
    title: "Home Appliances Supply, Installation & Smart Integration | Markaz Enterprises",
    description: "Premium home and commercial appliance supply, expert installation, HVAC systems, smart home integration, and Annual Maintenance Contracts (AMC) across Karachi.",
    keywords: ["Home Appliances Karachi", "HVAC System Installation", "Smart Home Appliance", "AMC Maintenance Contract", "Commercial Kitchen Equipment"],
    h1: "Premium Home & Commercial Appliance Solutions",
    subtitle: "Supplying, installing, and maintaining top-brand home and commercial appliances with comprehensive AMC packages and smart integration.",
    features: [
      "Supply & Professional Installation of Leading Appliance Brands",
      "HVAC (Air Conditioning & Ventilation) System Setup",
      "Smart Home Appliance Integration & Automation",
      "Commercial Kitchen Equipment & Cold Storage Solutions",
      "Annual Maintenance Contract (AMC) & Priority Repair Services",
      "Energy-Efficient Appliance Consultation & Replacement Programs"
    ],
    faqs: [
      { q: "Do you offer installation warranties on appliances?", a: "Yes, all installations include a 12-month workmanship warranty. Manufacturer warranties are passed through in full." },
      { q: "Can you integrate home appliances with a smart home system?", a: "Absolutely — we connect compatible appliances to smart home hubs for voice, app, and automated scheduling control." }
    ]
  },
  "software-development": {
    slug: "software-development",
    divisionId: "DIV07",
    title: "Custom Business Software Development Pakistan | Markaz Enterprises",
    description: "Bespoke desktop and cloud business software, database architecture, legacy system migration, SaaS platforms, and ongoing technical consulting in Pakistan.",
    keywords: ["Custom Software Development Pakistan", "Business Desktop Application", "SaaS Platform Development", "Database Architecture", "Legacy Software Migration"],
    h1: "Custom Business Software Engineering",
    subtitle: "Building enterprise-grade desktop software, cloud SaaS platforms, and mission-critical business applications engineered for Pakistani operational requirements.",
    features: [
      "Custom Desktop & Cloud Business Application Development",
      "Relational & NoSQL Database Architecture & Optimization",
      "Legacy System Migration to Modern Cloud Architecture",
      "SaaS Platform Development with Multi-Tenant Architecture",
      "Rigorous QA Testing & Automated Test Suite Implementation",
      "Dedicated Technical Consulting & Post-Launch SLA Support"
    ],
    faqs: [
      { q: "What is the difference between your IT Solutions and Software Development division?", a: "IT Solutions (DIV05) focuses on web-based corporate portals, eCommerce, and CRM/ERP. Software Development (DIV07) covers desktop applications, legacy migrations, SaaS platforms, and advanced database engineering." },
      { q: "Do you provide source code ownership?", a: "Yes — all custom software delivered by Markaz Enterprises transfers full source code ownership to the client upon project completion and final payment." }
    ]
  },
  construction: {
    slug: "construction",
    divisionId: "DIV01",
    title: "Turnkey Construction & Civil Engineering in Karachi | Markaz Enterprises",
    description: "Pakistan's leading commercial and luxury residential turnkey construction firm in Karachi. Structural 3D engineering, grey structure, and premium finishing.",
    keywords: ["Turnkey Construction Karachi", "Civil Engineering Pakistan", "Grey Structure Cost 2026", "Luxury Home Builder Gulshan Clifton", "Commercial Building Contractor"],
    h1: "Turnkey Commercial & Residential Construction",
    subtitle: "ISO-compliant structural engineering, grey structure development, and executive turnkey finishings across Pakistan.",
    features: [
      "Architectural & Structural CAD Design Validation",
      "Tier-1 Raw Material Sourcing (High-grade steel & certified cement)",
      "Dedicated On-Site Project Engineer Supervision",
      "5-Stage Milestone Quality Assurance Checks",
      "Fixed Budget Contract & Transparent Timelines"
    ],
    faqs: [
      { q: "What is the average construction cost per sq ft in Karachi?", a: "Grey structure ranges around PKR 2,600/sq ft, while luxury turnkey finishing averages PKR 4,800/sq ft." },
      { q: "Do you handle SBCA approvals?", a: "Yes, our engineering division coordinates architectural drawings and regulatory compliance approvals." }
    ]
  },
  interior: {
    slug: "interior",
    divisionId: "DIV02",
    title: "Luxury Interior Design & Executive Fitouts Karachi | Markaz Enterprises",
    description: "Bespoke corporate office interiors, acoustic paneling, glass partitions, and luxury residential home décor in Karachi.",
    keywords: ["Corporate Office Interior Karachi", "Executive Fitouts Clifton", "Acoustic Paneling Pakistan", "Luxury Home Decor", "Commercial Interior Architect"],
    h1: "Executive Interior Design & Fitout Solutions",
    subtitle: "Transforming corporate workspaces and luxury residences with ergonomic layouts, bespoke furniture, and acoustic excellence.",
    features: [
      "3D Spatial Visualization & Material Moodboards",
      "Custom Ergonomic Workstation Manufacturing",
      "Acoustic Paneling & Noise Reduction Solutions",
      "Tempered Glass Office Partitioning",
      "Lighting Design & Smart Automation Integration"
    ]
  },
  media: {
    slug: "media",
    divisionId: "DIV03",
    title: "Media Production & Digital Billboard Advertising | Markaz Enterprises",
    description: "High-impact corporate videography, TV commercial production, and prime location digital billboard advertising across Pakistan.",
    keywords: ["Media Production House Karachi", "Digital Billboard Advertising Pakistan", "Corporate Videography", "TV Commercial Production", "Brand Advertising Campaign"],
    h1: "Media Production & High-Impact Advertising",
    subtitle: "Captivating visual story-telling, corporate brand documentaries, and strategic nationwide billboard placement.",
    features: [
      "4K Corporate Documentaries & Brand Films",
      "Digital Billboard (DOOH) Placement in Prime Traffic Hubs",
      "Professional Voiceover & Audio Mastering",
      "Animation & Motion Graphics Production"
    ]
  },
  cctv: {
    slug: "cctv",
    divisionId: "DIV04",
    title: "IP CCTV & Automated Security Systems Karachi | Markaz Enterprises",
    description: "Enterprise-grade IP surveillance cameras, central NVR control room setups, biometric access control, and remote mobile monitoring.",
    keywords: ["IP CCTV Installation Karachi", "Security Camera System Pakistan", "Biometric Access Control", "NVR Remote Surveillance", "Industrial CCTV Port Qasim"],
    h1: "Enterprise IP CCTV & Automated Security Networks",
    subtitle: "Protecting commercial facilities, industrial warehouses, and private estates with 24/7 high-definition surveillance.",
    features: [
      "4K Ultra-HD AI Motion-Detection IP Cameras",
      "Centralized Control Room NVR Storage Configurations",
      "Biometric Door Locks & Attendance Terminals",
      "Perimeter Intrusion Alarm Systems",
      "Real-time Remote Mobile & Cloud Surveillance Access"
    ]
  },
  software: {
    slug: "software",
    divisionId: "DIV05",
    title: "Custom Software Engineering & Business ERP Systems | Markaz Enterprises",
    description: "Bespoke enterprise ERP, CRM development, inventory dispatch tracking, and high-speed Next.js web applications in Pakistan.",
    keywords: ["Custom ERP Software Pakistan", "Business CRM Development Karachi", "Next.js Web Application", "Inventory Management Software", "Software House Karachi"],
    h1: "Custom Software Engineering & Enterprise ERP Systems",
    subtitle: "Empowering Pakistani enterprises with consolidated business software, warehouse automation, and scalable database architecture.",
    features: [
      "Custom Multi-Module ERP Systems (Accounts, HR, Inventory)",
      "High-Performance Next.js Corporate Portals",
      "Real-Time Warehouse & Dispatch Tracking APIs",
      "Database Optimization & Cloud Hosting Deployment",
      "Dedicated SLA Support & Maintenance"
    ]
  },
  mobile: {
    slug: "mobile",
    divisionId: "DIV06",
    title: "Mobile App Development iOS & Android Karachi | Markaz Enterprises",
    description: "Native and cross-platform mobile apps for iOS and Android. Custom eCommerce apps, logistics tracking, and enterprise mobile tools.",
    keywords: ["Mobile App Development Karachi", "iOS App Developer Pakistan", "Android App Development", "Flutter React Native Developer", "eCommerce Mobile App"],
    h1: "High-Performance iOS & Android Mobile App Engineering",
    subtitle: "Connecting your brand directly with mobile consumers through intuitive, ultra-fast mobile applications.",
    features: [
      "Cross-Platform Flutter & React Native Architecture",
      "Seamless Payment Gateway Integrations (JazzCash, EasyPaisa, Stripe)",
      "Real-Time GPS Location & Order Tracking",
      "Push Notifications & Customer Engagement Funnels"
    ]
  },
  architectural: {
    slug: "architectural",
    divisionId: "DIV07",
    title: "Architectural Design & 3D Structural Engineering | Markaz Enterprises",
    description: "Comprehensive architectural blueprints, elevation designs, 3D walkthrough renderings, and structural load analysis in Karachi.",
    keywords: ["Architectural Design Karachi", "3D Building Elevation Rendering", "Structural Engineering Blueprints", "Building Layout CAD Design"],
    h1: "Architectural Blueprints & 3D Structural Visualization",
    subtitle: "Precision CAD schematics, photorealistic 3D animations, and structural safety validation for modern construction.",
    features: [
      "Photorealistic 3D Exterior & Interior Walkthroughs",
      "Structural Load Calculation & Seismic Safety Audits",
      "Complete Working Drawing Packages for Contractors",
      "Town Planning & Land Utilization Blueprints"
    ]
  },
  analytics: {
    slug: "analytics",
    divisionId: "DIV08",
    title: "Enterprise Data Analytics & Business Intelligence | Markaz Enterprises",
    description: "Turn raw operational data into actionable revenue growth insights with custom PowerBI dashboards and predictive analytics.",
    keywords: ["Data Analytics Services Pakistan", "Business Intelligence PowerBI Karachi", "Sales Forecasting Dashboard", "Data Warehousing Enterprise"],
    h1: "Enterprise Data Analytics & Business Intelligence",
    subtitle: "Unlocking hidden profit drivers and streamlining supply chain operations through real-time data visual analytics.",
    features: [
      "Automated PowerBI & Tableau Executive Dashboards",
      "Sales Forecasting & Customer Retention Analytics",
      "Financial Recon & Cost Leakage Audits",
      "ETL Data Pipeline Engineering"
    ]
  },
  marketing: {
    slug: "marketing",
    divisionId: "DIV09",
    title: "Digital Marketing & Performance Lead Generation | Markaz Enterprises",
    description: "Data-driven B2B lead generation, Google PPC ads, SEO ranking, and social media funnels tailored for Pakistani businesses.",
    keywords: ["Digital Marketing Agency Karachi", "B2B Lead Generation Pakistan", "Google PPC Ads Agency", "SEO Services Karachi", "Performance Marketing"],
    h1: "Data-Driven Digital Marketing & B2B Lead Funnels",
    subtitle: "Scaling qualified monthly sales inquiries through targeted Google Search Ads, social media funnels, and organic SEO ranking.",
    features: [
      "Google Search & Display PPC Campaign Management",
      "Meta (Facebook/Instagram) & LinkedIn Lead Ads",
      "Search Engine Optimization (SEO) Top 10 Guarantee",
      "Conversion Rate Optimization (CRO) & Funnel Building"
    ]
  },
  solar: {
    slug: "solar",
    divisionId: "DIV10",
    title: "Industrial & Commercial Solar Energy Solutions Karachi | Markaz Enterprises",
    description: "Tier-1 hybrid and ON-grid solar installations in Karachi. NEPRA net metering approval, Longi panels, and industrial energy audits.",
    keywords: ["Solar Energy Installation Karachi", "Net Metering NEPRA License", "Industrial Solar System Pakistan", "100kW Solar Panel Cost", "Commercial Solar Hybrid Inverter"],
    h1: "Industrial & Commercial Solar Energy Systems",
    subtitle: "Slashing commercial electricity bills by up to 80% with turnkey Tier-1 solar installations and net metering authorization.",
    features: [
      "Tier-1 Longi/Canadian Solar Monocrystalline Panels",
      "Industrial Hybrid & On-Grid Inverters (Huawei, Sungrow, Solis)",
      "Complete NEPRA Net Metering License Processing",
      "Thermal Scanning & Preventative AMC Audits",
      "25-Year Panel Linear Power Warranty"
    ]
  },
  batteries: {
    slug: "batteries",
    divisionId: "DIV11",
    title: "Lithium Battery Systems, Custom LiFePO4 Packs & Smart BMS | Markaz Enterprises",
    description: "Custom LiFePO4 lithium battery pack engineering, active balancing BMS integration, and high-cycle industrial energy storage in Karachi. EVE Grade-A cells, Bluetooth app, and solar inverter communications.",
    keywords: [
      "Lithium Battery Pack Karachi",
      "Custom LiFePO4 Battery Pakistan",
      "BMS Supplier Pakistan",
      "48V 100Ah Battery Pakistan",
      "LiFePO4 Solar Storage",
      "Smart BMS Inverter Communication",
      "JK Smart BMS Pakistan",
      "EVE LiFePO4 Cells Karachi"
    ],
    h1: "Custom Lithium Battery Packs & Energy Storage Systems",
    subtitle: "Engineering high-cycle LiFePO4 battery packs, active-balancing smart BMS integration, and industrial energy storage tailored for Pakistani power environments.",
    features: [
      "Grade-A EVE LiFePO4 Prismatic Cells (3.2V 100Ah, 314Ah & 315Ah Pro)",
      "Smart Inverter Communication BMS (CAN Bus & RS485 for Growatt/Deye/Victron)",
      "Custom 12V, 24V, 48V & High-Voltage Battery Pack Assembly",
      "Active Balancing BMS with Real-Time Bluetooth & LCD Diagnostics",
      "Heavy-Duty Precision Steel Enclosures & Low-Resistance Brass Terminals",
      "5-Year / 5000-Cycle Extended Warranty on Complete Finished Systems"
    ],
    faqs: [
      { q: "What battery chemistries and cell brands do you use?", a: "We exclusively utilize Grade-A EVE LiFePO4 (Lithium Iron Phosphate) prismatic cells known for exceptional thermal safety, zero fire hazard, and 5000+ to 6000+ cycle life." },
      { q: "Are your battery packs compatible with solar inverters in Pakistan?", a: "Yes. Our smart BMS systems feature CAN Bus and dual RS485 communication protocols compatible with major hybrid inverter brands including Growatt, Deye, Victron, and FoxESS." },
      { q: "Do you assemble custom battery configurations for specific dimensions?", a: "Absolutely. We engineer custom battery packs for UPS backup, electric lifters, hydraulic equipment, material handling, telecom, and industrial solar ESS with tailored steel casings and busbars." }
    ]
  }
};

export const SERVICES_DATA: Record<string, RouteMetadata> = {
  "solar-installation-karachi": {
    slug: "solar-installation-karachi",
    title: "Turnkey Solar Installation Services in Karachi | Markaz Enterprises",
    description: "Custom commercial and residential solar system installations in Karachi. Expert engineering, zero load-shedding, and fast payback.",
    keywords: ["Solar Installation Karachi", "Commercial Solar Power", "Residential Solar Setup", "Solar Panel Cost Karachi"],
    h1: "Turnkey Commercial & Residential Solar Installation in Karachi",
    subtitle: "Custom-engineered solar power plants designed for maximum yield, durability, and immediate utility cost reduction."
  },
  "net-metering-nepra-license": {
    slug: "net-metering-nepra-license",
    title: "NEPRA Net Metering License Application & Approval | Markaz Enterprises",
    description: "Hassle-free net metering license processing in Karachi. Sell excess solar electricity back to K-Electric / grid automatically.",
    keywords: ["Net Metering NEPRA Karachi", "K-Electric Net Metering Process", "Grid Tie Solar License"],
    h1: "NEPRA Net Metering Application & Approval Services",
    subtitle: "Complete regulatory liaison to connect your solar plant to the grid and monetize excess power generation."
  },
  "grey-structure-construction": {
    slug: "grey-structure-construction",
    title: "Grey Structure Construction Services Karachi | Markaz Enterprises",
    description: "Top-grade grey structure construction for homes, plazas, and factories in Karachi. Certified steel, concrete, and brickwork.",
    keywords: ["Grey Structure Construction Karachi", "Building Structural Contractor", "Grey Structure Cost Per Sq Ft"],
    h1: "High-Durability Grey Structure Construction in Karachi",
    subtitle: "Engineering solid foundations, reinforced concrete beams, and masonry walls adhering strictly to seismic safety standards."
  },
  "turnkey-residential-construction": {
    slug: "turnkey-residential-construction",
    title: "Luxury Turnkey Home Construction Karachi | Markaz Enterprises",
    description: "Complete turnkey residential construction from architectural design to move-in ready luxury finishing in Clifton, DHA & Gulshan.",
    keywords: ["Turnkey Home Construction Karachi", "Luxury Villa Builder DHA", "House Construction Contract"],
    h1: "Luxury Turnkey Home Construction Services",
    subtitle: "Transforming raw plots into architectural masterpieces with bespoke interior finishings, smart wiring, and executive fixtures."
  },
  "corporate-office-interior": {
    slug: "corporate-office-interior",
    title: "Corporate Office Interior Design & Executive Fitouts | Markaz Enterprises",
    description: "Modern corporate office space renovation, acoustic partitioning, glass boardrooms, and ergonomic furniture installation.",
    keywords: ["Corporate Office Interior Karachi", "Office Renovation Fitout", "Commercial Interior Designer"],
    h1: "Corporate Office Interior Design & Executive Workspaces",
    subtitle: "Designing inspiring work environments that foster productivity, team collaboration, and prestigious brand identity."
  },
  "cctv-surveillance-installation": {
    slug: "cctv-surveillance-installation",
    title: "Commercial IP CCTV Surveillance Camera Installation | Markaz Enterprises",
    description: "Professional high-definition IP camera installation, NVR setup, remote phone monitoring, and thermal night vision cameras.",
    keywords: ["CCTV Camera Installation Karachi", "Commercial Security Surveillance", "NVR Setup Services"],
    h1: "Commercial & Industrial IP CCTV Security Installation",
    subtitle: "Comprehensive 24/7 security coverage with intelligent motion tracking, cloud backups, and centralized command centers."
  },
  "custom-erp-software-pakistan": {
    slug: "custom-erp-software-pakistan",
    title: "Custom Business ERP Software Development Pakistan | Markaz Enterprises",
    description: "Tailor-made ERP systems integrating inventory, accounts, CRM, and HR under one centralized secure cloud application.",
    keywords: ["Custom ERP Software Pakistan", "Enterprise Software House Karachi", "Warehouse Inventory ERP"],
    h1: "Bespoke Enterprise ERP Software Engineering",
    subtitle: "Consolidating business operations into a unified digital ecosystem engineered specifically for Pakistani commerce workflows."
  },
  "mobile-app-development-karachi": {
    slug: "mobile-app-development-karachi",
    title: "iOS & Android Mobile App Development Services | Markaz Enterprises",
    description: "Custom mobile app creation for iOS & Android. Fast user interfaces, secure API integrations, and continuous app maintenance.",
    keywords: ["Mobile App Development Karachi", "iOS Android App Agency", "Flutter App Developer"],
    h1: "Native & Cross-Platform Mobile Application Development",
    subtitle: "Turning brilliant digital concepts into intuitive, scalable mobile apps on Apple App Store and Google Play."
  },
  "seo-lead-generation-pakistan": {
    slug: "seo-lead-generation-pakistan",
    title: "SEO & B2B Performance Lead Generation Pakistan | Markaz Enterprises",
    description: "Rank #1 on Google Search in Pakistan. High-converting digital marketing campaigns that generate qualified phone leads daily.",
    keywords: ["SEO Lead Generation Pakistan", "Google PPC Agency Karachi", "B2B Marketing Funnel"],
    h1: "High-ROI SEO & B2B Performance Lead Generation",
    subtitle: "Dominating search engine results and deploying automated sales lead funnels to accelerate revenue growth."
  },
  "acoustic-paneling-fitouts": {
    slug: "acoustic-paneling-fitouts",
    title: "Acoustic Paneling & Soundproofing Solutions Karachi | Markaz Enterprises",
    description: "Professional acoustic wall paneling, soundproofing for auditoriums, boardrooms, recording studios, and executive suites.",
    keywords: ["Acoustic Paneling Karachi", "Soundproofing Office Boardroom", "Noise Control Interior"],
    h1: "Architectural Acoustic Paneling & Soundproofing Solutions",
    subtitle: "Eliminating echo and external noise interference with premium fabric, wood, and foam acoustic wall treatments."
  },
  "smart-home-automation": {
    slug: "smart-home-automation",
    title: "Smart Home & Office Automation Systems Karachi | Markaz Enterprises",
    description: "Automate lighting, AC climate control, smart locks, and motorized curtains via mobile smartphone and voice control.",
    keywords: ["Smart Home Automation Karachi", "Office Automation System", "IoT Smart Lighting Control"],
    h1: "Intelligent Smart Home & Office Automation Networks",
    subtitle: "Seamlessly controlling your environment with integrated IoT sensors, automated scenes, and remote smartphone access."
  },
  "structural-3d-rendering": {
    slug: "structural-3d-rendering",
    title: "Photorealistic 3D Architectural Exterior Rendering | Markaz Enterprises",
    description: "High-resolution 3D architectural rendering and animation walkthroughs for commercial plazas, residential developments, and interior layouts.",
    keywords: ["3D Architectural Rendering Karachi", "Building 3D Walkthrough", "Exterior Elevation CAD"],
    h1: "Photorealistic 3D Architectural & Structural Rendering",
    subtitle: "Visualizing architectural concepts prior to construction with hyper-realistic lighting, texturing, and 4K video walkthroughs."
  },
  "industrial-automation-iot": {
    slug: "industrial-automation-iot",
    title: "Industrial Automation & IoT Sensor Integration | Markaz Enterprises",
    description: "Industrial IoT solutions for factories in Karachi. Machine health monitoring, automated sensor reporting, and energy telemetry.",
    keywords: ["Industrial Automation Pakistan", "IoT Sensor Integration Karachi", "Factory Telemetry System"],
    h1: "Industrial Automation & Smart Telemetry IoT Engineering",
    subtitle: "Modernizing manufacturing lines with automated sensor feedback, predictive maintenance alerts, and cloud monitoring."
  },
  "warehouse-management-system": {
    slug: "warehouse-management-system",
    title: "Custom Warehouse Management Software (WMS) | Markaz Enterprises",
    description: "Barcode dispatch tracking, real-time inventory count, order fulfillment, and multi-location warehouse management software.",
    keywords: ["Warehouse Management System Pakistan", "WMS Software Karachi", "Barcode Inventory Tracking"],
    h1: "Enterprise Warehouse Management Systems (WMS)",
    subtitle: "Optimizing inventory stock accuracy, reducing dispatch picking errors, and streamlining logistics operations."
  },
  "digital-billboard-advertising": {
    slug: "digital-billboard-advertising",
    title: "Digital Billboard (DOOH) Advertising Services | Markaz Enterprises",
    description: "Prime outdoor digital LED billboard ad slots on Shahrah-e-Faisal, Clifton, and major arterial routes in Karachi.",
    keywords: ["Digital Billboard Advertising Karachi", "Outdoor LED Screen Ads", "DOOH Advertising Pakistan"],
    h1: "Prime Location Digital Billboard & DOOH Advertising",
    subtitle: "Maximizing commercial brand exposure with vivid LED digital billboard placements across high-traffic urban corridors."
  }
};

export const PORTFOLIO_DATA: Record<string, RouteMetadata> = {
  "100kw-solar-textile-factory-karachi": {
    slug: "100kw-solar-textile-factory-karachi",
    title: "Case Study: 100kW Solar Installation at Textile Factory | Markaz Enterprises",
    description: "Detailed breakdown of 100kW hybrid solar system execution in Karachi. Over PKR 500k monthly electricity savings and net metering approval.",
    keywords: ["100kW Solar Case Study", "Textile Solar Power Karachi", "Industrial Solar ROI"],
    h1: "100kW Commercial Hybrid Solar Installation",
    subtitle: "Eliminating factory grid load-shedding and saving PKR 500,000+ monthly in operational electricity expenditure."
  },
  "gulshan-luxury-residence-construction": {
    slug: "gulshan-luxury-residence-construction",
    title: "Case Study: Gulshan Luxury Residence Construction | Markaz Enterprises",
    description: "Turnkey construction case study for a 500 Sq Yd luxury residence in Gulshan, Karachi featuring custom architectural engineering and smart automation.",
    keywords: ["Luxury Residence Construction", "Gulshan House Builder Case Study", "Turnkey Construction Project"],
    h1: "500 Sq Yd Luxury Turnkey Residence",
    subtitle: "Complete architectural execution, grey structure engineering, and high-end executive marble finishings."
  },
  "corporate-office-interior-clifton": {
    slug: "corporate-office-interior-clifton",
    title: "Case Study: Corporate FinTech Office Interior Clifton | Markaz Enterprises",
    description: "Executive interior design case study for a 4,500 Sq Ft corporate office in Clifton, Karachi featuring acoustic paneling and glass boardrooms.",
    keywords: ["Corporate Office Fitout Clifton", "FinTech Interior Case Study", "Office Acoustic Paneling"],
    h1: "Executive FinTech Office Interior Fitout",
    subtitle: "Crafting a high-tech open-plan workplace with acoustic soundproofing, custom workstations, and modern executive suites."
  },
  "multi-channel-warehouse-erp-system": {
    slug: "multi-channel-warehouse-erp-system",
    title: "Case Study: Multi-Channel Logistics ERP System | Markaz Enterprises",
    description: "Custom software development case study. Bespoke warehouse management and dispatch tracking system built for a leading logistics hub in Karachi.",
    keywords: ["Logistics ERP Case Study", "Custom Software Development Karachi", "Warehouse Tracking System"],
    h1: "Multi-Channel Warehouse & Dispatch ERP",
    subtitle: "Automating real-time stock inventory, barcode scanning, order fulfillment, and multi-branch financial reconciliation."
  },
  "32-camera-ip-surveillance-port-qasim": {
    slug: "32-camera-ip-surveillance-port-qasim",
    title: "Case Study: 32-Camera IP Surveillance at Port Qasim | Markaz Enterprises",
    description: "Industrial CCTV security installation case study. 32 4K IP cameras with central command room access and perimeter thermal motion alerts.",
    keywords: ["Port Qasim CCTV Installation", "Industrial IP Surveillance Case Study", "Commercial NVR Setup"],
    h1: "32-Camera Industrial IP CCTV Network",
    subtitle: "Securing a multi-acre industrial manufacturing facility with centralized NVR storage and remote mobile phone access."
  },
  "national-seo-lead-gen-campaign": {
    slug: "national-seo-lead-gen-campaign",
    title: "Case Study: B2B National SEO & Lead Gen Campaign | Markaz Enterprises",
    description: "Digital marketing case study. Generating a 70% increase in qualified monthly sales inquiries for a commercial manufacturing group in Lahore.",
    keywords: ["B2B SEO Case Study Pakistan", "Lead Generation Campaign Lahore", "Google Ads Performance"],
    h1: "National SEO & High-Converting PPC Funnel",
    subtitle: "Optimizing search engine positioning and deploying automated lead generation funnels across Pakistan."
  },
  "react-native-field-app-logistics": {
    slug: "react-native-field-app-logistics",
    title: "Case Study: React Native Field App for Logistics Dispatch | Markaz",
    description: "Detailed logistics app case study. Android & iOS cross-platform agent tracker with maps navigation, automated customer receipts, and off-grid offline database.",
    keywords: ["Logistics App Case Study", "Mobile App Development Karachi", "Field Agent App Flutter React Native"],
    h1: "React Native Field Agent App Integration",
    subtitle: "Increasing package delivery speed by 40% with real-time GPS tracking and automated SMS customer updates."
  },
  "powerbi-retail-analytics-dashboard": {
    slug: "powerbi-retail-analytics-dashboard",
    title: "Case Study: PowerBI Business Intelligence & Retail Dashboards | Markaz",
    description: "Automated retail ETL pipelines feeding executive PowerBI dashboards for real-time revenue monitoring and automated stock replenishment.",
    keywords: ["PowerBI Retail Dashboard", "Business Intelligence Case Study Karachi", "Data Analytics Pakistan"],
    h1: "PowerBI Multi-Branch Retail Analytics System",
    subtitle: "Eliminating reporting delays and reducing overall retail stock wastage by 22% via real-time telemetry."
  },
  "central-hvac-commercial-building": {
    slug: "central-hvac-commercial-building",
    title: "Case Study: Commercial Central HVAC & VRF Air Conditioning | Markaz",
    description: "Turnkey commercial VRF and HVAC design, mechanical routing installation, building management controls, and Annual Maintenance Contracts.",
    keywords: ["Commercial HVAC Installation Karachi", "VRF Air Conditioning System Pakistan", "Daikin VRF Karachi"],
    h1: "Commercial Central HVAC & VRF Installation",
    subtitle: "Reducing corporate tower electrical consumption by 35% with smart Daikin zone ventilation controls."
  },
  "corporate-network-server-room-setup": {
    slug: "corporate-network-server-room-setup",
    title: "Case Study: Corporate Network Infrastructure & Server Room Setup | Markaz",
    description: "Design and setup of enterprise server rooms, Cat6 structured cabling routing, Cisco catalyst configurations, and backup UPS distribution.",
    keywords: ["Server Room Setup Karachi", "Structured Network Cabling Pakistan", "IT Infrastructure Case Study"],
    h1: "Corporate Data Center & Cat6 Structured Cabling",
    subtitle: "Engineering 99.99% server network uptime for national logistics distribution hub with cold-aisle containment."
  }
};

export const BLOG_DATA: Record<string, RouteMetadata> = {
  "net-metering-pakistan-step-by-step-guide": {
    slug: "net-metering-pakistan-step-by-step-guide",
    title: "Net Metering in Pakistan 2026: Complete Step-by-Step NEPRA Guide | Markaz",
    description: "An in-depth breakdown of NEPRA net metering regulations, license timelines, bi-directional meter installation, and commercial ROI calculations.",
    keywords: ["Net Metering Guide Pakistan 2026", "NEPRA Net Metering Application", "Sell Solar Power K-Electric"],
    h1: "Net Metering in Pakistan: Complete Step-by-Step Regulatory Guide",
    subtitle: "Everything factory owners and commercial property managers need to know about monetizing solar energy."
  },
  "grey-structure-costs-karachi-2026": {
    slug: "grey-structure-costs-karachi-2026",
    title: "Grey Structure Construction Costs in Karachi (2026 Rates) | Markaz",
    description: "Current steel, cement, sand, and aggregate pricing per square foot in Karachi to help plan your next residential or commercial building project.",
    keywords: ["Grey Structure Cost Karachi 2026", "Construction Material Rates Pakistan", "Cost Per Sq Ft Construction"],
    h1: "Understanding Grey Structure Construction Costs in Karachi (2026 Edition)",
    subtitle: "Detailed material cost breakdowns and structural budget planning for commercial and residential developments."
  },
  "consolidated-business-erp-benefits": {
    slug: "consolidated-business-erp-benefits",
    title: "Why Multi-Vendor Software Sells Short: Benefits of Consolidated ERP | Markaz",
    description: "How integrating inventory, CRM, accounts, and HR under a single software architecture saves hours, avoids silos, and drives growth.",
    keywords: ["Consolidated Business ERP", "ERP vs Multi-Vendor Software", "Enterprise Software Benefits"],
    h1: "Why Multi-Vendor Software Sells Short: The Power of a Consolidated ERP",
    subtitle: "Eliminating operational friction and communication silos through unified cloud software architecture."
  }
};

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductItem extends RouteMetadata {
  id: string;
  category: "Complete Battery Systems" | "Battery Cells" | "Battery Management Systems" | "Displays" | "Terminals & Casings";
  image: string;
  gallery?: string[];
  specs: ProductSpec[];
  highlights: string[];
  applications: string[];
  isFlagship?: boolean;
  warranty?: string;
  certifications?: string[];
  isDraftSpec?: boolean;
}

export const PRODUCTS_DATA: Record<string, ProductItem> = {
  // ── Complete Finished Battery Systems (Flagship) ──
  "48v-100ah-lifepo4-wall-mount-system": {
    id: "PROD-SYS-01",
    slug: "48v-100ah-lifepo4-wall-mount-system",
    category: "Complete Battery Systems",
    isFlagship: true,
    warranty: "5-Year or 5,000-Cycle Warranty",
    title: "48V 100Ah LiFePO4 Wall-Mount Battery System (5.0kWh) | Markaz",
    description: "Premium 48V 100Ah (5.0kWh) LiFePO4 wall-mount energy storage system. 15S1P EVE LF100LA cells, JK Smart BMS 100A active balancing, Bluetooth monitoring, and 5-year warranty.",
    keywords: ["48V 100Ah LiFePO4 Battery Karachi", "Wall Mount Battery Pakistan", "5kWh Solar Battery", "JK Smart BMS Active Balancing", "EVE LF100LA Grade A"],
    h1: "48V 100Ah LiFePO4 Wall-Mount Battery System (5.0kWh)",
    subtitle: "Turnkey 15S1P Grade-A EVE LF100LA energy storage unit with JK Smart 100A active-balancing BMS and 5-Year / 5,000-cycle warranty.",
    image: "/products/48v-100ah-lifepo4-wall-mount-system.png",
    highlights: [
      "15S1P Grade-A EVE LF100LA LiFePO4 Prismatic Cells",
      "JK Smart BMS 100A with High-Efficiency Active Balancing",
      "5,000+ Deep Discharge Cycles @ 90% DOD",
      "Real-Time Wireless Bluetooth Mobile App & 3.2\" LCD Screen",
      "Heavy-Duty IP21 Wall-Mount Steel Casing with Natural Convection Cooling",
      "5-Year or 5,000-Cycle Comprehensive Warranty"
    ],
    specs: [
      { label: "Nominal Voltage", value: "48V / 51.2V" },
      { label: "Nominal Capacity", value: "100Ah" },
      { label: "Total Energy", value: "5.0 kWh" },
      { label: "Cell Configuration", value: "15S1P" },
      { label: "Cell Type", value: "EVE LF100LA Grade-A LiFePO4" },
      { label: "BMS Protection", value: "JK Smart BMS 100A Active Balancing" },
      { label: "Charge Voltage", value: "55.2V" },
      { label: "Recommended Charge Current", value: "Up to 50A" },
      { label: "Cycle Life", value: "5000+ Cycles @ 90% DOD" },
      { label: "Monitoring", value: "Bluetooth App & 3.2\" LCD Panel" },
      { label: "Enclosure / Protection", value: "IP21 Wall-Mount Steel Housing" },
      { label: "Cooling Method", value: "Natural Air Convection" },
      { label: "Warranty", value: "5 Years or 5,000 Cycles" }
    ],
    applications: [
      "Solar Energy Storage",
      "Commercial UPS Backup",
      "Electric Lifters",
      "Hydraulic Lifting Equipment",
      "Material Handling",
      "Industrial Power Backup",
      "Telecom Tower Backup"
    ]
  },
  "25-6v-200ah-lifepo4-battery-system": {
    id: "PROD-SYS-02",
    slug: "25-6v-200ah-lifepo4-battery-system",
    category: "Complete Battery Systems",
    isFlagship: true,
    title: "25.6V 200Ah LiFePO4 Heavy-Duty Battery System (5.12kWh) | Markaz",
    description: "High-capacity 25.6V 200Ah (5.12kWh) LiFePO4 battery pack in 8S1P configuration. EVE 3.2V 200Ah Grade-A cells, 24V 200A Smart BMS, copper busbars, and 6,000+ cycle life.",
    keywords: ["24V 200Ah Lithium Battery Pakistan", "25.6V LiFePO4 Pack Karachi", "5.12kWh Battery Storage", "EVE 200Ah Prismatic", "Heavy Duty Solar Battery"],
    h1: "25.6V 200Ah LiFePO4 Heavy-Duty Battery Pack (5.12kWh)",
    subtitle: "Engineered 8S1P assembly featuring EVE 3.2V 200Ah Grade-A cells, 24V 200A Smart BMS, copper busbars, and 6,000+ cycle endurance.",
    image: "/products/25-6v-200ah-lifepo4-battery-system.png",
    highlights: [
      "8S1P Grade-A EVE 3.2V 200Ah Prismatic Cell Architecture",
      "24V 200A Heavy-Duty Smart BMS with 200A Max Continuous Discharge",
      "6,000+ Cycles @ 80% DOD Long-Life Design",
      "Solid Pure Copper Busbars & Premium Brass Terminals",
      "Integrated 3.2\" Diagnostic LCD Screen",
      "Reinforced Industrial Steel Casing"
    ],
    specs: [
      { label: "Nominal Voltage", value: "25.6V" },
      { label: "Nominal Capacity", value: "200Ah" },
      { label: "Total Energy", value: "5.12 kWh" },
      { label: "Cell Configuration", value: "8S1P" },
      { label: "Cell Type", value: "EVE 3.2V 200Ah Grade-A LiFePO4" },
      { label: "BMS System", value: "24V 200A Smart BMS" },
      { label: "Max Continuous Discharge", value: "200A" },
      { label: "Max Charge Current", value: "100A" },
      { label: "Cycle Life", value: "6000+ Cycles @ 80% DOD" },
      { label: "Operating Temp (Charge)", value: "0°C to +55°C" },
      { label: "Operating Temp (Discharge)", value: "-20°C to +60°C" },
      { label: "Dimensions", value: "520 × 268 × 218 mm" },
      { label: "Weight", value: "Approx. 48–52 kg" }
    ],
    applications: [
      "Solar Off-Grid & Hybrid Banks",
      "Heavy Industrial Equipment",
      "Marine & RV Power",
      "High-Drain Inverter Systems",
      "Commercial Power Backup"
    ]
  },

  // ── Battery Cells ──
  "eve-100ah-lifepo4-prismatic-cell": {
    id: "PROD-CELL-01",
    slug: "eve-100ah-lifepo4-prismatic-cell",
    category: "Battery Cells",
    title: "EVE 100Ah 3.2V Grade-A LiFePO4 Prismatic Cell | Markaz",
    description: "Original EVE 100Ah 3.2V Grade-A LiFePO4 prismatic cell. Ultra-stable chemistry for custom battery pack assembly, solar storage, UPS, and EV conversions.",
    keywords: ["EVE 100Ah Cell Pakistan", "3.2V LiFePO4 Prismatic", "EVE Grade A Cell Karachi", "DIY Battery Pack Pakistan"],
    h1: "EVE 100Ah 3.2V Grade-A LiFePO4 Prismatic Cell",
    subtitle: "High-stability Grade-A lithium iron phosphate cell for DIY battery packs, solar storage banks, UPS, and EV applications.",
    image: "/products/eve-100ah-lifepo4-prismatic-cell.png",
    gallery: ["/products/eve-100ah-lifepo4-cell-diagram.jpg"],
    highlights: [
      "Genuine EVE Grade-A LiFePO4 Chemistry",
      "3.2V Nominal Voltage with Flat Discharge Curve",
      "High Energy Density & Zero Thermal Runaway Risk",
      "Factory Matched Impedance and Tested Capacity"
    ],
    specs: [
      { label: "Nominal Voltage", value: "3.2V" },
      { label: "Nominal Capacity", value: "100Ah" },
      { label: "Chemistry", value: "Lithium Iron Phosphate (LiFePO4)" },
      { label: "Grade", value: "Grade-A Matched & Tested" },
      { label: "Cycle Life", value: "4,000+ Cycles" },
      { label: "Operating Voltage Range", value: "2.5V – 3.65V" }
    ],
    applications: ["DIY Lithium Packs", "Solar ESS Banks", "UPS Upgrades", "Electric Vehicles (EV)", "Marine & RV"]
  },
  "eve-314ah-lifepo4-prismatic-cell": {
    id: "PROD-CELL-02",
    slug: "eve-314ah-lifepo4-prismatic-cell",
    category: "Battery Cells",
    title: "EVE 314Ah 3.2V High-Capacity LiFePO4 Prismatic Cell | Markaz",
    description: "High-capacity EVE 314Ah 3.2V LiFePO4 cell with 6,000+ cycle life. Engineered for commercial and industrial battery storage banks across Pakistan.",
    keywords: ["EVE 314Ah Cell Pakistan", "High Capacity LiFePO4 314Ah", "Commercial Battery Storage Cell Karachi", "6000 Cycles Cell"],
    h1: "EVE 314Ah 3.2V High-Capacity LiFePO4 Prismatic Cell",
    subtitle: "6,000+ cycle ultra-high capacity cell engineered for commercial & industrial energy storage banks.",
    image: "/products/eve-314ah-lifepo4-prismatic-cell.png",
    highlights: [
      "314Ah Massive Capacity in Standard Prismatic Format",
      "6,000+ Full Cycles for 10+ Year Operational Life",
      "Low Internal Resistance for High Efficiency",
      "Optimized for High-Voltage Industrial Racks"
    ],
    specs: [
      { label: "Nominal Voltage", value: "3.2V" },
      { label: "Nominal Capacity", value: "314Ah" },
      { label: "Cycle Life", value: "6,000+ Cycles" },
      { label: "Chemistry", value: "Grade-A LiFePO4" },
      { label: "Charge Voltage Cutoff", value: "3.65V" },
      { label: "Discharge Cutoff", value: "2.5V" }
    ],
    applications: ["Commercial Solar ESS", "Industrial Battery Banks", "High-Capacity Off-Grid Plants", "Microgrid Storage"]
  },
  "eve-315ah-pro-lifepo4-cell": {
    id: "PROD-CELL-03",
    slug: "eve-315ah-pro-lifepo4-cell",
    category: "Battery Cells",
    title: "EVE 315Ah Pro Enhanced LiFePO4 Prismatic Cell | Markaz",
    description: "Enhanced EVE 315Ah Pro LiFePO4 cell. Features 15% higher energy density, superior cold-weather response, +20% cycle life, and smart BMS communication interface.",
    keywords: ["EVE 315Ah Pro Pakistan", "EVE Pro LiFePO4 Cell", "High Density Lithium Cell", "Smart BMS Interface Cell"],
    h1: "EVE 315Ah Pro Enhanced LiFePO4 Prismatic Cell",
    subtitle: "Next-generation prismatic cell with +15% higher density, superior cold-temperature performance, and +20% extended cycle endurance.",
    image: "/products/eve-315ah-pro-lifepo4-cell.jpg",
    highlights: [
      "15% Higher Volumetric & Gravimetric Energy Density",
      "Superior Cold-Weather Charge & Discharge Performance",
      "+20% Extended Cycle Life vs Standard Cells",
      "Integrated Smart BMS Telemetry Interface"
    ],
    specs: [
      { label: "Nominal Voltage", value: "3.2V" },
      { label: "Nominal Capacity", value: "315Ah Pro" },
      { label: "Energy Density Index", value: "+15% Higher Density (25.6kg vs 17.9kg index)" },
      { label: "Thermal Stability", value: "Enhanced Low-Temp Operation" },
      { label: "Cycle Endurance", value: "+20% Extended Cycle Life" },
      { label: "Interface", value: "Integrated Smart BMS Telemetry Interface" }
    ],
    applications: ["Next-Gen Commercial ESS", "Space-Constrained Industrial Battery Banks", "Extreme Climate Solar Plants"]
  },

  // ── Battery Management Systems (BMS) ──
  "4s-8s-60a-bms": {
    id: "PROD-BMS-01",
    slug: "4s-8s-60a-bms",
    category: "Battery Management Systems",
    title: "4S–8S 60A Continuous Lithium Battery BMS | Markaz",
    description: "4S to 8S 60A continuous (100A peak) Battery Management System with 30A max charge. Compact 150×100×15mm form factor for 12V to 24V lithium battery packs.",
    keywords: ["4S 8S BMS Pakistan", "60A BMS Karachi", "12V 24V Lithium Protection Board", "LiFePO4 BMS 60A"],
    h1: "4S–8S 60A Continuous Battery Management System",
    subtitle: "Reliable over-charge, over-discharge, over-current, and thermal protection for 12V to 24V custom lithium battery assemblies.",
    image: "/products/4s-8s-60a-bms.png",
    gallery: ["/products/4s-8s-60a-bms-diagram.jpg"],
    highlights: [
      "60A Continuous Discharge / 100A Peak (5s)",
      "30A Max Fast Charging Current",
      "Wide -20°C to +70°C Operating Temperature",
      "Ultra-Slim 15mm Profile"
    ],
    specs: [
      { label: "Supported Configuration", value: "4S to 8S (12.8V to 25.6V LiFePO4)" },
      { label: "Continuous Discharge Current", value: "60A" },
      { label: "Peak Discharge Current", value: "100A (5s)" },
      { label: "Max Charge Current", value: "30A" },
      { label: "Dimensions", value: "150 × 100 × 15 mm" },
      { label: "Operating Temperature", value: "-20°C to +70°C" }
    ],
    applications: ["12V/24V Solar Storage", "UPS Replacement Packs", "Small EV Conversions", "Portable Power Stations"]
  },
  "4s-8s-100a-bms": {
    id: "PROD-BMS-02",
    slug: "4s-8s-100a-bms",
    category: "Battery Management Systems",
    title: "4S–8S 100A High-Current Lithium Battery BMS | Markaz",
    description: "4S–8S 100A continuous discharge Battery Management System for solar storage, lithium packs, electric vehicles, and heavy backup power systems.",
    keywords: ["4S 8S 100A BMS Pakistan", "100A Lithium BMS Karachi", "Solar Storage BMS", "24V 100A BMS"],
    h1: "4S–8S 100A High-Current Battery Management System",
    subtitle: "100A continuous protection circuit designed for solar energy storage, lithium battery pack builds, and EV applications.",
    image: "/products/4s-8s-100a-bms.png",
    gallery: ["/products/4s-8s-100a-bms-diagram.jpg"],
    highlights: [
      "100A Continuous Current Handling",
      "Multi-Layer Thermal Dissipation Plate",
      "Precise Individual Cell Voltage Monitoring",
      "Short-Circuit and Reverse Polarity Protection"
    ],
    specs: [
      { label: "Supported Configuration", value: "4S to 8S (12V / 24V)" },
      { label: "Continuous Current", value: "100A" },
      { label: "Protection Triggers", value: "Over-voltage, Under-voltage, Over-current, Temp" },
      { label: "Cooling", value: "Integrated Aluminum Heat Sink" },
      { label: "Applications", value: "Solar Storage, Lithium Packs, EV, Backup" }
    ],
    applications: ["Solar Energy Storage", "Custom Lithium Battery Packs", "Light Electric Vehicles", "Commercial Backup Power"]
  },
  "4s-8s-200a-bms": {
    id: "PROD-BMS-03",
    slug: "4s-8s-200a-bms",
    category: "Battery Management Systems",
    isDraftSpec: true,
    title: "4S–8S 200A Dual-Processor IoT BMS (Draft Spec) | Markaz",
    description: "4S–8S 200A continuous (400A peak) dual-processor ASIC & MCU smart BMS. Features CAN/RS485/UART communications and cloud/IoT readiness. Note: Preliminary draft specifications.",
    keywords: ["200A Smart BMS Pakistan", "Dual Processor BMS", "CAN Bus RS485 BMS Karachi", "IoT Battery BMS"],
    h1: "4S–8S 200A Dual-Processor Smart BMS [Preliminary / Draft Spec]",
    subtitle: "Heavy-duty 200A continuous BMS featuring dual ASIC & MCU architecture, CAN/RS485/UART connectivity, and IoT cloud telemetry.",
    image: "/products/4s-8s-200a-bms.png",
    gallery: ["/products/4s-8s-200a-bms-diagram.jpg"],
    highlights: [
      "Dual-Processor Architecture (Dedicated ASIC + High-Speed MCU)",
      "200A Continuous / 400A Peak (10s) Current Handling",
      "Multi-Protocol: CAN Bus, RS485, and UART",
      "Cloud & IoT Telemetry Ready",
      "Notice: Specifications based on manufacturer draft data sheet"
    ],
    specs: [
      { label: "Configuration", value: "4S to 8S" },
      { label: "Continuous Current", value: "200A" },
      { label: "Peak Current", value: "400A (10s)" },
      { label: "Max Charge Current", value: "100A" },
      { label: "Processing Core", value: "Dual-Processor ASIC & MCU" },
      { label: "Communication Protocols", value: "CAN / RS485 / UART / Cloud IoT" },
      { label: "Dimensions", value: "200 × 150 × 30 mm" },
      { label: "Operating Temperature", value: "-30°C to +75°C" },
      { label: "Status", value: "Preliminary / Draft Specification" }
    ],
    applications: ["Heavy Industrial Energy Storage", "High-Power Off-Grid Inverters", "Commercial Fleet EV", "Remote Telecom Sites"]
  },
  "8s-24s-100a-smart-bms": {
    id: "PROD-BMS-04",
    slug: "8s-24s-100a-smart-bms",
    category: "Battery Management Systems",
    title: "8S–24S 100A Multi-Chemistry Smart BMS | Markaz",
    description: "8S to 24S 100A continuous (300A peak) Smart BMS supporting LiFePO4, NMC, and LTO chemistries. Built-in CAN, RS485, and UART communication ports.",
    keywords: ["8S 24S Smart BMS Pakistan", "Multi Chemistry BMS Karachi", "LiFePO4 NMC LTO BMS", "High Voltage Smart BMS"],
    h1: "8S–24S 100A Multi-Chemistry Smart BMS",
    subtitle: "Versatile 8S–24S protection system supporting LiFePO4, NMC, and LTO chemistries with CAN/RS485/UART digital telemetry.",
    image: "/products/8s-24s-100a-smart-bms.png",
    gallery: ["/products/8s-24s-100a-smart-bms-diagram.jpg"],
    highlights: [
      "Supports 8S to 24S (24V up to 72V+ nominal)",
      "Multi-Chemistry Support: LiFePO4, NMC, and LTO",
      "100A Continuous / 300A Peak (3s)",
      "Triple Communication: CAN Bus, RS485, and UART"
    ],
    specs: [
      { label: "Cell Count Range", value: "8S to 24S" },
      { label: "Supported Chemistries", value: "LiFePO4 / NMC / LTO" },
      { label: "Continuous Current", value: "100A" },
      { label: "Peak Current", value: "300A (3s)" },
      { label: "Communications", value: "CAN / RS485 / UART" },
      { label: "Dimensions", value: "180 × 100 × 20 mm" },
      { label: "Operating Temperature", value: "-20°C to +70°C" }
    ],
    applications: ["Multi-Voltage Custom Packs", "High-Voltage Solar Storage", "Commercial EV Conversions", "LTO High-Cycle Banks"]
  },
  "8s-16s-100a-smart-inverter-bms": {
    id: "PROD-BMS-05",
    slug: "8s-16s-100a-smart-inverter-bms",
    category: "Battery Management Systems",
    title: "8S–16S 100A Smart Inverter Communication BMS | Markaz",
    description: "8S–16S 100A continuous BMS with direct CAN Bus and RS485 communication protocols for Growatt, Deye, Victron, and FoxESS class solar inverters.",
    keywords: ["Inverter Communication BMS Pakistan", "Growatt Deye Victron BMS", "8S 16S 100A CAN BMS", "Solar Inverter Lithium BMS"],
    h1: "8S–16S 100A Smart Inverter Communication BMS",
    subtitle: "Seamless closed-loop battery communication with leading hybrid inverters including Growatt, Deye, Victron, and FoxESS.",
    image: "/products/8s-16s-100a-smart-inverter-bms.png",
    gallery: [
      "/products/8s-16s-100a-smart-inverter-bms-detail.jpg",
      "/products/8s-16s-100a-smart-inverter-bms-diagram.jpg"
    ],
    highlights: [
      "Direct Closed-Loop Inverter Communication (CAN & RS485)",
      "Compatible with Growatt, Deye, Victron & Industry-Standard Protocols",
      "100A Continuous / 200A Peak (30s) / 50A Max Charge",
      "Compact 180×120×20mm Form Factor"
    ],
    specs: [
      { label: "Supported Configuration", value: "8S to 16S (24V – 48V / 51.2V)" },
      { label: "Continuous Discharge Current", value: "100A" },
      { label: "Peak Current", value: "200A (30s)" },
      { label: "Max Charge Current", value: "50A" },
      { label: "Communication Protocols", value: "CAN Bus + RS485 (Customizable)" },
      { label: "Inverter Compatibility", value: "Growatt, Deye, Victron, FoxESS & compatible" },
      { label: "Dimensions", value: "180 × 120 × 20 mm" }
    ],
    applications: ["48V Hybrid Solar Systems", "24V/48V Residential ESS", "Commercial Inverter Battery Banks"]
  },
  "8s-16s-150a-smart-inverter-bms": {
    id: "PROD-BMS-06",
    slug: "8s-16s-150a-smart-inverter-bms",
    category: "Battery Management Systems",
    title: "8S–16S 150A Smart Inverter BMS in Enclosed Metal Housing | Markaz",
    description: "8S–16S 150A continuous Smart Inverter Communication BMS protected in an enclosed metal housing. Features dual CAN/RS485 communications.",
    keywords: ["150A Inverter BMS Pakistan", "Enclosed Metal Housing BMS", "8S 16S 150A BMS", "Heavy Solar ESS BMS"],
    h1: "8S–16S 150A Smart Inverter Communication BMS (Enclosed Housing)",
    subtitle: "Heavy-duty 150A continuous BMS enclosed in rugged metal housing with CAN/RS485 solar inverter communication protocols.",
    image: "/products/8s-16s-150a-smart-inverter-bms.png",
    gallery: [
      "/products/8s-16s-150a-smart-inverter-bms-diagram.jpg",
      "/products/8s-16s-150a-smart-inverter-bms-spec.png"
    ],
    highlights: [
      "Enclosed Metal Housing for Superior Shielding & Heat Dissipation",
      "150A Continuous Current Handling",
      "CAN Bus and RS485 Inverter Communication",
      "Engineered for Demanding Commercial Power Environments"
    ],
    specs: [
      { label: "Configuration Range", value: "8S to 16S (24V – 51.2V)" },
      { label: "Continuous Current", value: "150A" },
      { label: "Enclosure Type", value: "Enclosed Protective Metal Housing" },
      { label: "Communication Ports", value: "CAN Bus & RS485" },
      { label: "Compatibility", value: "Growatt, Deye, Victron, FoxESS & compatible" }
    ],
    applications: ["Commercial 48V Solar ESS", "High-Power Industrial Inverters", "Demanding Factory Backup"]
  },
  "8s-16s-200a-smart-inverter-bms": {
    id: "PROD-BMS-07",
    slug: "8s-16s-200a-smart-inverter-bms",
    category: "Battery Management Systems",
    certifications: ["CE", "FCC", "RoHS"],
    title: "8S–16S 200A Flagship Smart Inverter BMS (CE/FCC/RoHS) | Markaz",
    description: "8S–16S 200A continuous (400A peak) flagship Smart Inverter BMS. CAN Bus & Dual RS485, CE/FCC/RoHS certified, 1.8kg precision chassis for high-capacity battery banks.",
    keywords: ["200A Inverter BMS Karachi", "CE FCC RoHS BMS Pakistan", "Dual RS485 BMS", "48V 200A Smart BMS"],
    h1: "8S–16S 200A Flagship Smart Inverter BMS",
    subtitle: "200A continuous current handling with CAN Bus, dual RS485 ports, and full CE/FCC/RoHS compliance marks.",
    image: "/products/8s-16s-200a-smart-inverter-bms.png",
    gallery: [
      "/products/8s-16s-200a-smart-inverter-bms-housing.png",
      "/products/8s-16s-200a-smart-inverter-bms-diagram.jpg"
    ],
    highlights: [
      "200A Continuous / 400A Peak (3s) / 100A Max Charge",
      "CAN Bus (Major Brand Protocol Compatible) + Dual RS485 Ports",
      "Officially CE, FCC & RoHS Certified",
      "Heavy-Duty 1.8kg Chassis (250 × 150 × 30 mm)",
      "5% to 95% Humidity Tolerant Design"
    ],
    specs: [
      { label: "Supported Configuration", value: "8S to 16S (24V – 51.2V)" },
      { label: "Continuous Current", value: "200A" },
      { label: "Peak Current", value: "400A (3s)" },
      { label: "Max Charge Current", value: "100A" },
      { label: "Communication Interfaces", value: "CAN Bus + Dual RS485 Ports" },
      { label: "Certifications", value: "CE, FCC, RoHS Marked" },
      { label: "Dimensions", value: "250 × 150 × 30 mm" },
      { label: "Weight", value: "1.8 kg" },
      { label: "Operating Humidity", value: "5% – 95% RH" }
    ],
    applications: ["Industrial Solar ESS", "Mega-Watt Scale Battery Racks", "High-Power Hybrid Inverters", "Data Center Backup"]
  },

  // ── Displays ──
  "3-2-inch-lcd-battery-display": {
    id: "PROD-DSP-01",
    slug: "3-2-inch-lcd-battery-display",
    category: "Displays",
    title: "3.2\" TFT LCD Battery Diagnostic Display Screen | Markaz",
    description: "3.2\" TFT LCD (320×240px) battery diagnostic display with >160° viewing angle. UART (RS232/TTL) + optional CAN communication in a compact ABS enclosure.",
    keywords: ["3.2 Inch Battery LCD Pakistan", "TFT Battery Display Karachi", "BMS LCD Screen", "UART CAN Battery Display"],
    h1: "3.2\" TFT LCD Battery Diagnostic Display",
    subtitle: "High-contrast 320×240 color screen providing real-time pack telemetry, cell balance data, and alarm status.",
    image: "/products/3-2-inch-lcd-battery-display.png",
    gallery: ["/products/3-2-inch-lcd-battery-display-diagram.jpg"],
    highlights: [
      "High-Resolution 320 × 240px Color TFT Display",
      "Ultra-Wide >160° Viewing Angle",
      "Wide 8–80V DC Operating Input Range",
      "Ultra-Low Power Consumption (<50mA)",
      "Durable ABS Protective Enclosure"
    ],
    specs: [
      { label: "Display Type", value: "TFT LCD Screen" },
      { label: "Resolution", value: "320 × 240 pixels" },
      { label: "Viewing Angle", value: "> 160°" },
      { label: "Interface", value: "UART (RS232 / TTL) + Optional CAN" },
      { label: "Operating Voltage", value: "8V to 80V DC" },
      { label: "Power Consumption", value: "< 50mA" },
      { label: "Enclosure Material", value: "ABS Plastic" },
      { label: "Dimensions", value: "95 × 65 × 22 mm" }
    ],
    applications: ["Wall-Mount Battery Systems", "Custom Lithium Battery Boxes", "Mobile Power Carts", "Inverter Status Panels"]
  },
  "4-3-inch-touch-lcd-display": {
    id: "PROD-DSP-02",
    slug: "4-3-inch-touch-lcd-display",
    category: "Displays",
    title: "4.3\" Interactive Touchscreen LCD Battery Display | Markaz",
    description: "4.3\" Touchscreen LCD screen for smart BMS monitoring. Displays real-time pack voltage, charge/discharge current, temperature, SOC %, per-cell voltage matrix, and alarms.",
    keywords: ["4.3 Touchscreen Battery Display", "BMS Touch LCD Pakistan", "Per Cell Voltage Display Karachi", "Lithium Battery Touch Panel"],
    h1: "4.3\" Interactive Touchscreen LCD Battery Display",
    subtitle: "Touch-responsive diagnostics panel displaying real-time pack voltage, current, temperature, state of charge, and individual cell balance matrix.",
    image: "/products/4-3-inch-touch-lcd-display.png",
    gallery: ["/products/4-3-inch-touch-lcd-display-diagram.jpg"],
    highlights: [
      "Responsive Touchscreen UI Interface",
      "Real-Time Voltage, Current, Temp & SOC Monitoring",
      "Complete Per-Cell Voltage Breakdown Matrix",
      "Visual & Audible Alarm Diagnostics"
    ],
    specs: [
      { label: "Screen Size", value: "4.3 Inch Interactive Touchscreen" },
      { label: "Telemetry Displayed", value: "Pack Voltage, Current, Temp, SOC %, Per-Cell Voltage" },
      { label: "Diagnostics", value: "Real-time Fault Alarms & Protection Logs" },
      { label: "Compatibility", value: "Smart Inverter & Multi-Chemistry BMS" }
    ],
    applications: ["High-End Commercial ESS", "Industrial Battery Cabinets", "Custom Solar Pack Assemblies"]
  },

  // ── Terminals & Casings ──
  "120ah-battery-terminal": {
    id: "PROD-TRM-01",
    slug: "120ah-battery-terminal",
    category: "Terminals & Casings",
    title: "120Ah Premium Brass Battery Terminal (M8 Stud) | Markaz",
    description: "Precision-machined CuZn39Pb3 brass battery terminal with nickel plating. M8×20mm stud, <0.1mΩ resistance, supporting 4 AWG to 1/0 AWG cables.",
    keywords: ["120Ah Battery Terminal Pakistan", "Brass M8 Terminal Karachi", "Low Resistance Battery Terminal", "Lithium Pack Hardware"],
    h1: "120Ah Premium Brass Battery Terminal (M8 Stud)",
    subtitle: "Engineered from high-purity CuZn39Pb3 brass with nickel plating and sub-0.1mΩ internal resistance.",
    image: "/products/120ah-battery-terminal.png",
    gallery: ["/products/120ah-battery-terminal-diagram.jpg"],
    highlights: [
      "CuZn39Pb3 High-Purity Brass Alloy",
      "Nickel-Plated Finish (Gold Plating Optional)",
      "Ultra-Low Resistance (<0.1mΩ) to Prevent Heat Buildup",
      "Supports 4 AWG to 1/0 AWG Cable Lugging",
      "Wide -40°C to +125°C Temperature Range"
    ],
    specs: [
      { label: "Material", value: "Brass (CuZn39Pb3)" },
      { label: "Plating", value: "Nickel-Plated (Gold Plating Optional)" },
      { label: "Stud Size", value: "M8 × 20 mm (Customizable)" },
      { label: "Wire Gauge Support", value: "4 AWG to 1/0 AWG" },
      { label: "Contact Resistance", value: "< 0.1 mΩ" },
      { label: "Temperature Rating", value: "-40°C to +125°C" },
      { label: "Weight", value: "150 g" }
    ],
    applications: ["100Ah–120Ah Battery Packs", "Solar ESS Terminations", "UPS Battery Connections"]
  },
  "200ah-battery-terminal": {
    id: "PROD-TRM-02",
    slug: "200ah-battery-terminal",
    category: "Terminals & Casings",
    title: "200Ah Heavy-Duty High-Amp Battery Terminal | Markaz",
    description: "Heavy-duty 200Ah brass battery terminal engineered for high-current discharge in large lithium battery banks, industrial equipment, and solar ESS.",
    keywords: ["200Ah Battery Terminal Pakistan", "Heavy Duty Battery Terminal Karachi", "High Current Lithium Stud", "Solar Battery Hardware"],
    h1: "200Ah Heavy-Duty High-Amp Battery Terminal",
    subtitle: "High-capacity nickel-plated brass terminal engineered for high-discharge 200Ah+ lithium battery packs and commercial banks.",
    image: "/products/200ah-battery-terminal.png",
    gallery: ["/products/200ah-battery-terminal-diagram.jpg"],
    highlights: [
      "Heavy-Duty High-Amp Brass Construction",
      "Maximized Surface Contact for High Current Flow",
      "Corrosion-Resistant Nickel Plating",
      "Handles Extreme Thermal and Mechanical Loads"
    ],
    specs: [
      { label: "Current Rating", value: "200Ah+ Continuous High-Amp" },
      { label: "Material", value: "Reinforced Brass Alloy" },
      { label: "Plating", value: "Nickel Plated Anti-Oxidation" },
      { label: "Application Scale", value: "Large Lithium Packs & ESS Banks" }
    ],
    applications: ["200Ah–314Ah Battery Packs", "Industrial Power Banks", "Electric Heavy Machinery", "High-Power Inverters"]
  },
  "4s-100ah-battery-casing": {
    id: "PROD-CSG-01",
    slug: "4s-100ah-battery-casing",
    category: "Terminals & Casings",
    title: "4S 100Ah Precision Metal Battery Casing | Markaz",
    description: "Precision-engineered protective metal enclosure for 4-cell (12.8V 100Ah) LiFePO4 battery assemblies. Features integrated terminal mounting and secure cell retention.",
    keywords: ["4S 100Ah Battery Box Pakistan", "12V 100Ah Lithium Enclosure Karachi", "Metal Battery Casing", "LiFePO4 Casing"],
    h1: "4S 100Ah Precision Metal Battery Casing",
    subtitle: "Durable steel housing engineered for 4-cell / 12.8V 100Ah LiFePO4 battery pack builds with integrated terminal cutouts.",
    image: "/products/4s-100ah-battery-casing.png",
    highlights: [
      "Custom-Fitted for 4-Cell (12.8V) 100Ah Prismatic Configurations",
      "Solid Powder-Coated Metal Construction",
      "Pre-Drilled Precision Terminal & Handle Cutouts",
      "Superior Physical Protection & Heat Radiation"
    ],
    specs: [
      { label: "Target Configuration", value: "4-Cell 12.8V 100Ah LiFePO4" },
      { label: "Material", value: "Heavy-Gauge Steel with Powder Coating" },
      { label: "Mounting", value: "Reinforced Base & Terminal Openings" },
      { label: "Compatibility", value: "EVE 100Ah & standard prismatic cells" }
    ],
    applications: ["12.8V 100Ah Drop-In Replacements", "Trolling Motors", "UPS Enclosures", "Camping & Off-Grid Kits"]
  },
  "8s-100ah-battery-casing": {
    id: "PROD-CSG-02",
    slug: "8s-100ah-battery-casing",
    category: "Terminals & Casings",
    title: "8S 100Ah Battery Casing with LCD & Cable Routing | Markaz",
    description: "Industrial metal battery casing for 8-cell (25.6V class) battery packs. Accommodates cells, BMS unit, LCD display screen, and organized internal cable routing.",
    keywords: ["8S 100Ah Battery Casing Pakistan", "24V Lithium Battery Enclosure", "Battery Box with LCD Cutout Karachi", "25.6V ESS Case"],
    h1: "8S 100Ah Battery Casing with LCD & Cable Routing",
    subtitle: "Engineered for 8-cell / 25.6V 100Ah packs, featuring dedicated compartments for BMS, 3.2\" LCD display, and internal cable management channels.",
    image: "/products/8s-100ah-battery-casing.png",
    gallery: ["/products/8s-100ah-battery-casing-diagram.jpg"],
    highlights: [
      "Engineered for 8-Cell (25.6V) 100Ah Prismatic Assemblies",
      "Integrated Faceplate Cutout for 3.2\" / 4.3\" Diagnostic LCD",
      "Internal Cable Routing Channels & BMS Mounting Plate",
      "Durable Industrial Powder-Coated Steel Chassis"
    ],
    specs: [
      { label: "Target Configuration", value: "8-Cell 25.6V 100Ah LiFePO4" },
      { label: "Internal Components Accommodated", value: "Cells + BMS + LCD + Busbars + Wiring" },
      { label: "Chassis Material", value: "Powder-Coated Industrial Steel" },
      { label: "Cable Management", value: "Integrated Channels & Isolation Barriers" }
    ],
    applications: ["24V Solar Storage Packs", "Commercial Equipment Batteries", "Telecom Power Packs"]
  },
  "16s-100ah-battery-casing": {
    id: "PROD-CSG-03",
    slug: "16s-100ah-battery-casing",
    category: "Terminals & Casings",
    title: "16S 100Ah (48V / 51.2V) Rack-Mount Battery Casing | Markaz",
    description: "Standard 16S 100Ah (51.2V ESS) rack-style steel battery enclosure. Includes breaker mounting, communication ports, handles, and heavy cell retention framing.",
    keywords: ["16S 100Ah Rack Casing Pakistan", "48V 51.2V Server Rack Battery Case", "Rack Mount ESS Enclosure Karachi", "5kWh Battery Case"],
    h1: "16S 100Ah (48V / 51.2V) Rack-Mount Battery Casing",
    subtitle: "Standard server rack & wall-mountable steel enclosure for 16-cell 51.2V ESS battery packs with breaker, switch, and comm port cutouts.",
    image: "/products/16s-100ah-battery-casing.png",
    gallery: [
      "/products/16s-100ah-battery-casing-diagram.jpg",
      "/products/16s-100ah-battery-casing-spec.png"
    ],
    highlights: [
      "Standard Rack-Mount & Modular Stackable Chassis",
      "Designed for 16-Cell 51.2V (48V Class) 100Ah ESS Packs",
      "Pre-Cut Openings for Breaker, CAN/RS485 Ports & Power Terminals",
      "Rigid Cell Compression Framing for Max Life"
    ],
    specs: [
      { label: "Target Pack", value: "16-Cell 51.2V 100Ah (5.0kWh – 5.12kWh)" },
      { label: "Form Factor", value: "Rack-Mount & Stackable Enclosure" },
      { label: "Chassis Construction", value: "Heavy-Gauge Cold-Rolled Steel" },
      { label: "Front Panel Features", value: "Breaker Slot, Power Switch, LCD Cutout, RJ45 Comm Ports" }
    ],
    applications: ["48V Home Energy Storage", "Commercial Solar Battery Racks", "Telecom DC Power Plants"]
  }
};
