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
