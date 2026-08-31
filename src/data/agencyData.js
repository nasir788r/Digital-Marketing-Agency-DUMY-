export const AGENCY_STATS = [
  {
    id: 'ad-spend',
    label: 'Ad Spend Managed',
    value: 12,
    suffix: 'M+',
    prefix: '$',
    description: 'Directly deployed across Meta, Google & TikTok algorithms.'
  },
  {
    id: 'avg-roi',
    label: 'Avg. Client ROI',
    value: 340,
    suffix: '%',
    description: 'Blended return on marketing investment across our active roster.'
  },
  {
    id: 'brands-scaled',
    label: 'Brands Scaled',
    value: 150,
    suffix: '+',
    description: 'E-commerce, D2C, High-Ticket Lead Gen & B2B brands elevated.'
  },
  {
    id: 'avg-roas',
    label: 'Peak ROAS Achieved',
    value: 8.4,
    suffix: 'x',
    description: 'Consistent top-funnel profitable acquisition at scale.'
  }
];

export const AGENCY_SERVICES = [
  {
    id: 'meta-ads',
    title: 'Meta Ads (Facebook & Instagram)',
    shortDesc: 'High-converting creative testing, rapid scaling frameworks, and custom algorithmic audience targeting.',
    fullDesc: 'We construct full-funnel Meta advertising systems combining dynamic creative testing (DCT), automated bidding strategies, and first-party data tracking to slash Customer Acquisition Cost (CAC) while scaling spend reliably.',
    category: 'Paid Social',
    iconName: 'Sparkles',
    metricsHighlight: 'Avg. 4.6x ROAS across D2C brands',
    deliverables: [
      'UGC & High-Velocity Video Ad Creative Production',
      'Advanced Advantage+ & Custom Lookalike Architectures',
      'CAPI (Conversions API) Server-Side Tracking Integration',
      'Daily Budget Allocation & Bid Cap Scaling Strategies'
    ],
    idealFor: 'E-commerce stores, D2C brands, and consumer apps generating $20k-$500k/mo looking to double volume profitably.',
    technologies: ['Meta Ads Manager', 'Triple Whale', 'Elevar CAPI', 'Klaviyo Sync']
  },
  {
    id: 'google-ads',
    title: 'Google & YouTube Ads',
    shortDesc: 'High-intent Search, Performance Max, and YouTube video ads capturing ready-to-buy buyers.',
    fullDesc: 'Capture market share from competitors and dominate high-intent keywords. We build rigorous search structure, Performance Max asset feeds, and YouTube retargeting to maximize purchase intent capture.',
    category: 'Paid Search',
    iconName: 'Search',
    metricsHighlight: '-38% Avg. CPA on competitive search terms',
    deliverables: [
      'Granular Single-Themed Keyword Groups (STAG)',
      'Performance Max Optimization & Feed Cleansing',
      'High-Intent Negative Keyword Governance',
      'GA4 Multi-Touch Attribution Modeling'
    ],
    idealFor: 'B2B SaaS, Professional Services, and High-AOV E-commerce looking for scalable intent traffic.',
    technologies: ['Google Ads', 'GA4', 'Merchant Center', 'Data Studio']
  },
  {
    id: 'seo-growth',
    title: 'Organic Search & Technical SEO',
    shortDesc: 'Authoritative topical maps, technical site health audits, and evergreen organic revenue engines.',
    fullDesc: 'Build long-term organic compounding revenue. We perform deep technical audits, eliminate crawl errors, architect comprehensive topical authority clusters, and build tier-1 editorial backlinks.',
    category: 'Organic Growth',
    iconName: 'TrendingUp',
    metricsHighlight: '+240% YoY Organic Traffic Increase',
    deliverables: [
      'Topical Authority Keyword & Content Map',
      'Core Web Vitals & Technical Speed Architecture',
      'High-Authority Digital PR & Editorial Backlinks',
      'On-Page Schema & Structured Data Blueprint'
    ],
    idealFor: 'Brands wanting sustainable inbound flow and reduced long-term dependence on paid ads.',
    technologies: ['Ahrefs', 'Semrush', 'Screaming Frog', 'Search Console']
  },
  {
    id: 'web-dev-cro',
    title: 'High-Converting Web & Landing Pages',
    shortDesc: 'Bespoke Shopify, Webflow, and React storefronts built specifically for hyper-conversion.',
    fullDesc: 'Traffic is useless without conversion. We engineer lightning-fast landing pages, optimize checkout funnels, and run scientific multivariate A/B testing to lift your baseline site conversion rate by 30-70%.',
    category: 'Development & CRO',
    iconName: 'Layout',
    metricsHighlight: 'Average +44% Conversion Rate Lift',
    deliverables: [
      'Sub-Second Page Load Optimization',
      'Unbounce, Replo & Custom React Landing Pages',
      'Heatmap & Session Recording Analytics',
      'Frictionless One-Click Upsell Checkout Flows'
    ],
    idealFor: 'Any business spending >$5,000/mo on ads wanting to extract maximum revenue from existing clicks.',
    technologies: ['Shopify Plus', 'Webflow', 'Next.js / React', 'Hotjar', 'VWO']
  },
  {
    id: 'creative-production',
    title: 'Creative Strategy & Ad Design',
    shortDesc: 'Direct-response hooks, motion graphics, UGC curation, and static visual creatives that stop the scroll.',
    fullDesc: 'In modern algorithmic ad platforms, creative IS the targeting. Our in-house production unit scripts, edits, and produces 20-50 fresh visual variations per month to beat creative fatigue and sustain scale.',
    category: 'Creative Production',
    iconName: 'Palette',
    metricsHighlight: '3.2x Higher CTR vs Industry Benchmarks',
    deliverables: [
      '30-Second Direct-Response UGC Video Ad Scripts',
      'High-Impact Static Product Banners & Carousels',
      'Hook Variation Testing (First 3-Seconds Optimization)',
      'Brand Style Consistency & Typography Guidelines'
    ],
    idealFor: 'Brands struggling with ad creative fatigue or low click-through rates (CTR < 1.5%).',
    technologies: ['Adobe Premiere', 'After Effects', 'Figma', 'CapCut Pro']
  },
  {
    id: 'analytics-retention',
    title: 'Data Analytics & Email Retention',
    shortDesc: 'First-party tracking setup, Triple Whale dashboards, and revenue-generating Klaviyo flows.',
    fullDesc: 'We turn one-time shoppers into high-LTV repeat advocates with behavioral email flows, SMS campaigns, and clean real-time financial attribution dashboards.',
    category: 'Retention & Data',
    iconName: 'BarChart3',
    metricsHighlight: '+32% Total Revenue from Automated Flows',
    deliverables: [
      'Triple Whale / Northbeam Pixel Implementation',
      'Klaviyo Welcome, Abandoned Cart & VIP Winback Flows',
      'SMS Marketing Compliance & Segmented Blasts',
      'Cohort LTV Analysis & Customer Churn Modeling'
    ],
    idealFor: 'E-commerce and subscription brands seeking predictable repeat revenue.',
    technologies: ['Triple Whale', 'Klaviyo', 'Postscript', 'Segment']
  }
];

export const PORTFOLIO_CASE_STUDIES = [
  {
    id: 'aura-skincare',
    title: 'Aura Skincare Expansion',
    client: 'Aura Organic Skincare',
    industry: 'Beauty & D2C E-Commerce',
    category: 'Meta Ads',
    serviceProvided: 'Meta Ads Scaling & Landing Page CRO',
    goal: 'Scale monthly revenue from $40k to $250k while cutting rising Meta CAC in half.',
    shortDesc: 'Reduced Cost-Per-Acquisition by 42% while scaling monthly revenue from $40k to $250k with 5.8x blended ROAS.',
    problem: 'Aura was stuck at $40,000/mo. Their generic product pages converted at only 1.4%, and ad costs on Meta were escalating with constant creative fatigue.',
    strategy: 'We transitioned to an offer-led bundle strategy, designed bespoke Unbounce advertorial pages, and implemented an agile weekly UGC creative sprint testing 12 hook variations.',
    execution: 'Deployed Advantage+ Shopping campaigns with strict bid caps, optimized post-purchase upsells, and installed server-side CAPI tracking to regain iOS signal loss.',
    results: [
      { label: 'Monthly Revenue', value: '$250,000+', increase: true },
      { label: 'Blended ROAS', value: '5.8x', increase: true },
      { label: 'CAC Reduction', value: '-42%', increase: false },
      { label: 'Storefront CR', value: '3.9%', increase: true }
    ],
    clientReview: {
      quote: 'VELORA transformed our entire business model. We went from burning cash on random boosted posts to a predictable, profitable customer acquisition machine.',
      author: 'Elena Vance',
      role: 'Founder & CEO',
      company: 'Aura Skincare',
      rating: 5
    },
    featuredImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'
    ],
    badge: 'Featured Meta Ads Scale'
  },
  {
    id: 'vertex-saas',
    title: 'Vertex Logistics B2B Growth',
    client: 'Vertex Supply Chain Software',
    industry: 'B2B SaaS / Enterprise Tech',
    category: 'Google Ads',
    serviceProvided: 'Google Search & LinkedIn Ads Lead Gen',
    goal: 'Generate qualified enterprise pipeline for $50k+ ACV contracts at lower CPA.',
    shortDesc: 'Generated 340+ Enterprise SQLs with $3.8M qualified pipeline value at 62% lower cost per booked demo.',
    problem: 'Vertex was burning $15,000/mo on broad Google Ads keywords that brought spam submissions from small freight brokers rather than enterprise logistics directors.',
    strategy: 'Rebuilt the account with high-intent exact match keywords, instituted strict offline conversion tracking synced with HubSpot CRM, and created interactive ROI demo landing pages.',
    execution: 'Segmented search campaigns by enterprise company size tiers, created gated buyer guides, and utilized Google RLSA retargeting on LinkedIn.',
    results: [
      { label: 'Qualified Demos Booked', value: '340+', increase: true },
      { label: 'Pipeline Generated', value: '$3.8M', increase: true },
      { label: 'Cost Per SQL Drop', value: '-62%', increase: false },
      { label: 'Close Rate', value: '28%', increase: true }
    ],
    clientReview: {
      quote: 'The team at VELORA actually understands enterprise B2B sales cycles. Every lead passing to our SDRs is a genuine VP of Logistics with real budget.',
      author: 'Marcus Sterling',
      role: 'Chief Revenue Officer',
      company: 'Vertex Systems',
      rating: 5
    },
    featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    ],
    badge: 'B2B Enterprise Lead Gen'
  },
  {
    id: 'lumina-eyewear',
    title: 'Lumina Eyewear Global Launch',
    client: 'Lumina Studio Eyewear',
    industry: 'Luxury Fashion & Apparel',
    category: 'Creative Design',
    serviceProvided: 'Direct Response Creative & Multi-Channel Ads',
    goal: 'Launch luxury acetate frames across 12 countries with 4.0+ ROAS on debut.',
    shortDesc: 'Generated $620,000 in launch quarter sales with 4.8x ROAS across US, UK, and European luxury markets.',
    problem: 'High retail price point ($280/pair) made impulse purchases difficult on cold social channels without strong lifestyle validation and try-on trust.',
    strategy: 'Produced cinematic 4K micro-stories focusing on craftsmanship, combined with AR virtual try-on filters and 30-day home trial risk reversal offers.',
    execution: 'Ran omnichannel campaigns spanning Instagram Reels, Pinterest Shopping, and Google Performance Max with dynamic product ads.',
    results: [
      { label: 'Quarterly Revenue', value: '$620,000', increase: true },
      { label: 'Blended ROAS', value: '4.8x', increase: true },
      { label: 'CTR on Reels', value: '3.4%', increase: true },
      { label: 'Return Customer Rate', value: '24%', increase: true }
    ],
    clientReview: {
      quote: 'VELORA’s creative direction preserved our luxury brand equity while executing ruthless direct-response performance.',
      author: 'Chloe Dupont',
      role: 'Creative Director',
      company: 'Lumina Eyewear',
      rating: 5
    },
    featuredImage: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80'
    ],
    badge: 'Luxury E-Commerce'
  },
  {
    id: 'novafit-supplements',
    title: 'Novafit Performance Nutrition',
    client: 'Novafit Labs',
    industry: 'Health & Wellness',
    category: 'Website Development',
    serviceProvided: 'High-Converting Shopify Store & Subscription Funnel',
    goal: 'Scale monthly active subscriptions and raise Average Order Value (AOV) by 30%.',
    shortDesc: 'Lifted store conversion from 1.8% to 4.2%, driving +185% increase in recurring subscriber MRR.',
    problem: 'High cart abandonment, clunky subscription checkout, and slow mobile loading speeds (4.2s on mobile).',
    strategy: 'Custom headless Shopify rebuild with instant 0.6s load speeds, customized quiz-based product recommendation engine, and tiered volume discount pricing.',
    execution: 'A/B tested 4 different checkout steps and deployed automated email winbacks synced with SMS notifications.',
    results: [
      { label: 'Mobile Conversion', value: '4.2%', increase: true },
      { label: 'AOV Increase', value: '+$34.50', increase: true },
      { label: 'Subscription MRR', value: '+185%', increase: true },
      { label: 'Page Load Speed', value: '0.6s', increase: true }
    ],
    clientReview: {
      quote: 'Our previous agency spent 6 months guessing. VELORA fixed our site speed in 2 weeks and doubled our conversion rate in 45 days.',
      author: 'David Zhang',
      role: 'Co-Founder',
      company: 'Novafit Labs',
      rating: 5
    },
    featuredImage: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80'
    ],
    badge: 'Storefront Rebuild & CRO'
  }
];

export const CAMPAIGN_PROOF = [
  {
    id: 'proof-1',
    title: 'Scale to $120k/mo Ad Spend at 5.2x ROAS',
    clientIndustry: 'Apparel & Streetwear',
    period: 'Last 90 Days',
    adSpend: '$120,400',
    revenueGenerated: '$626,080',
    roas: '5.20x',
    cpa: '$18.40',
    keyMetric: '626k Gross Sales',
    screenshotType: 'meta',
    screenshotCaption: 'Meta Ads Manager Live View: Blended CPA under $20 across Advantage+ scale campaigns.',
    verifiedBadge: true,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'proof-2',
    title: 'Google Ads High-Intent B2B Scaling',
    clientIndustry: 'Fintech & Commercial Lending',
    period: 'Q2 Performance Report',
    adSpend: '$45,000',
    revenueGenerated: '$380,000',
    roas: '8.44x',
    cpa: '$42.10',
    keyMetric: '8.44x Pipeline ROAS',
    screenshotType: 'google',
    screenshotCaption: 'Google Search Exact Match: Dominating high-intent commercial keywords with 14% CTR.',
    verifiedBadge: true,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'proof-3',
    title: 'E-Commerce Storefront Flash Sale Blitz',
    clientIndustry: 'Home & Kitchen Appliances',
    period: '30-Day Campaign Window',
    adSpend: '$32,500',
    revenueGenerated: '$188,500',
    roas: '5.80x',
    cpa: '$26.80',
    keyMetric: '1,420 Orders',
    screenshotType: 'shopify',
    screenshotCaption: 'Shopify Analytics verified: 3.8% store conversion rate during 48-hour promotional sprint.',
    verifiedBadge: true,
    image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80'
  }
];

export const CLIENT_REVIEWS = [
  {
    id: 'rev-1',
    name: 'Elena Vance',
    role: 'Founder & CEO',
    company: 'Aura Organic Skincare',
    industry: 'Beauty / D2C',
    rating: 5,
    content: 'We tested 3 different agencies before VELORA. All of them gave excuses about iOS updates. VELORA stepped in, reworked our creative angle, and within 60 days our revenue leaped from $40k to over $250,000 with a 5.8x ROAS.',
    highlight: 'Scaled from $40k to $250k monthly revenue with 5.8x ROAS.',
    metricAchieved: '$250k/mo Revenue',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    hasWhatsAppScreenshot: true,
    whatsappSnippet: {
      date: 'Aug 24, 2024',
      time: '14:32',
      sender: 'Elena (Aura CEO)',
      message: 'Guys!! Just saw the dashboard. We just crossed $250k for the first time in company history 🚀 ROAS is holding strong at 5.8! You guys are wizards.'
    }
  },
  {
    id: 'rev-2',
    name: 'Marcus Sterling',
    role: 'Chief Revenue Officer',
    company: 'Vertex Supply Chain Software',
    industry: 'B2B Enterprise',
    rating: 5,
    content: 'VELORA understands the difference between vanity lead form clicks and qualified enterprise deals. Their Google Ads overhaul cut our cost per sales-qualified lead by 62% and brought in $3.8M in enterprise pipeline.',
    highlight: 'Cut cost per enterprise lead by 62%, adding $3.8M pipeline.',
    metricAchieved: '$3.8M Enterprise Pipeline',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    hasWhatsAppScreenshot: true,
    whatsappSnippet: {
      date: 'Jul 18, 2024',
      time: '10:15',
      sender: 'Marcus Sterling',
      message: 'Demo queue is completely full for Q3. Sales team says lead quality is the highest we have seen in 3 years. Let us up the monthly budget.'
    }
  },
  {
    id: 'rev-3',
    name: 'David Zhang',
    role: 'Co-Founder',
    company: 'Novafit Labs',
    industry: 'Health & Supplements',
    rating: 5,
    content: 'Their full-funnel approach is unbeatable. Instead of just tweaking ad buttons, they redesigned our landing page, boosted our site load time, and overhauled our email retention flows. Our customer LTV grew by 45%.',
    highlight: 'Overhauled storefront & boosted retention LTV by 45%.',
    metricAchieved: '+185% Subscription MRR',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    hasWhatsAppScreenshot: true,
    whatsappSnippet: {
      date: 'Jun 05, 2024',
      time: '18:45',
      sender: 'David (Novafit)',
      message: 'Conversion rate just hit 4.2% on the new checkout flow. Subscription retention is up 185%. Phenomenal work!'
    }
  },
  {
    id: 'rev-4',
    name: 'Sophia Laurent',
    role: 'Marketing VP',
    company: 'Lumina Studio Eyewear',
    industry: 'Luxury Apparel',
    rating: 5,
    content: 'High-end brands usually struggle with direct response because ads look cheap. VELORA designed editorial-grade cinematic creatives that maintained our brand prestige while converting at 4.8x ROAS.',
    highlight: 'Delivered $620k launch quarter with 4.8x ROAS in luxury niche.',
    metricAchieved: '$620k Debut Quarter',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    hasWhatsAppScreenshot: true,
    whatsappSnippet: {
      date: 'May 12, 2024',
      time: '09:12',
      sender: 'Sophia Laurent',
      message: 'The European launch campaign blew past all internal targets. 4.8x ROAS on luxury frames is extraordinary. Thank you VELORA team!'
    }
  }
];

export const PRICING_PLANS = [
  {
    id: 'starter-growth',
    name: 'Growth Foundation',
    badge: 'Best For Scaling to $50k/mo',
    tagline: 'Single or dual-channel acquisition engine built to establish profitable customer acquisition.',
    monthlyPrice: 2450,
    billingPeriod: '/month + % of ad spend over $20k',
    minAdSpendGuide: 'Recommended Ad Spend: $3,000 – $15,000 / mo',
    targetBusiness: 'Early stage e-commerce, local high-ticket businesses, and growing startups.',
    features: [
      { text: 'Meta Ads OR Google Ads Management', included: true, highlight: true },
      { text: 'Weekly Creative Strategy & 8 New Ad Assets/mo', included: true },
      { text: 'Server-Side CAPI Tracking & GA4 Setup', included: true },
      { text: 'Dedicated Slack Channel & Bi-Weekly Strategy Calls', included: true },
      { text: 'Live Triple Whale / Data Studio Reporting Dashboard', included: true },
      { text: 'Landing Page CRO & A/B Testing', included: false },
      { text: 'Full-Funnel Email/SMS Retention Flows', included: false },
      { text: 'Dedicated Video Production Unit', included: false }
    ],
    ctaText: 'Apply For Growth Plan',
    guaranteeNote: '30-Day Performance Guarantee: Clear KPI roadmap or free continuation.'
  },
  {
    id: 'scale-accelerator',
    name: 'Scale Accelerator',
    badge: 'Most Popular',
    isPopular: true,
    tagline: 'Multi-channel omnichannel domination engine for ambitious brands ready to scale past $100k-$500k/mo.',
    monthlyPrice: 4200,
    billingPeriod: '/month + % of ad spend over $50k',
    minAdSpendGuide: 'Recommended Ad Spend: $15,000 – $75,000 / mo',
    targetBusiness: 'Established D2C brands, B2B SaaS companies, and fast-scaling digital businesses.',
    features: [
      { text: 'Omnichannel: Meta + Google + YouTube Ads', included: true, highlight: true },
      { text: 'High-Velocity Creative Unit: 20+ Custom Ads/mo (UGC & Motion)', included: true, highlight: true },
      { text: 'Bespoke High-Converting Landing Page Design & CRO', included: true, highlight: true },
      { text: 'Full CAPI, Triple Whale, GA4 Multi-Touch Attribution', included: true },
      { text: 'Weekly Strategy Sprints & Instant Slack Access', included: true },
      { text: 'Klaviyo Core Email & SMS Winback Automation', included: true },
      { text: 'Competitor Reverse-Engineering & Offer Crafting', included: true },
      { text: 'Dedicated Senior Account Director + Creative Director', included: true }
    ],
    ctaText: 'Book Strategy Call & Scale',
    guaranteeNote: 'Guaranteed CAC reduction target established on kickoff audit.'
  },
  {
    id: 'enterprise-dominance',
    name: 'Enterprise Apex',
    badge: 'Custom Tailored',
    tagline: 'Full-service outsourced growth department with bespoke engineering, custom creative, and international scale.',
    monthlyPrice: 7800,
    billingPeriod: '/month custom retainers',
    minAdSpendGuide: 'Recommended Ad Spend: $75,000 – $500,000+ / mo',
    targetBusiness: 'Market leaders, enterprise B2B, international brands, and venture-backed scaleups.',
    features: [
      { text: 'All Channels: Meta, Google, TikTok, Pinterest, YouTube, Bing', included: true, highlight: true },
      { text: 'Unlimited Direct-Response Creative Production & UGC Studio', included: true, highlight: true },
      { text: 'Custom Headless Storefront & App Engineering', included: true, highlight: true },
      { text: 'Comprehensive Technical SEO & Digital PR Link Building', included: true },
      { text: 'Full Retention Architecture (Klaviyo, Postscript, Loyalty)', included: true },
      { text: 'Daily Real-Time Dashboard & Dedicated Data Analyst', included: true },
      { text: 'Executive C-Suite Quarterly In-Person Strategy Reviews', included: true },
      { text: '24/7 Priority Hotline & On-Demand Dev Sprint Team', included: true }
    ],
    ctaText: 'Request Enterprise Proposal',
    guaranteeNote: 'Custom SLA with dedicated sprint capacity and milestone-tied fees.'
  }
];

export const BLOG_POSTS = [
  {
    id: 'post-1',
    title: 'Why Most Meta Ads Fail in 2024 (And the 3 Creative Frameworks That Actually Scale)',
    slug: 'meta-ads-creative-frameworks-2024',
    category: 'Meta Ads',
    excerpt: 'Algorithmic targeting has made manual audience hacking obsolete. Here is the exact creative testing playbook we used to scale $12M+ in spend profitably.',
    readTime: '6 min read',
    date: 'Aug 28, 2024',
    author: {
      name: 'Julian Kane',
      role: 'Head of Paid Acquisition',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
    content: [
      'For years, media buyers obsessed over interest stacking, 1% lookalikes, and intricate campaign bidding structures. In 2024, Meta’s Advantage+ machine learning engine has fundamentally shifted the paradigm: creative IS the targeting.',
      'When you launch broad targeting, the first 3 seconds of your video ad filters the exact user profile who stops scrolling. If your hook speaks to chronic back pain, Meta automatically surfaces your ad to individuals searching for lumbar relief.',
      'Our High-Velocity Creative Framework consists of 3 Pillars: 1) The Contrarian Hook, 2) The Problem-Agitation Proof Mechanism, and 3) The Frictionless Risk-Reversal Offer. Brands applying this saw immediate 35-50% drops in blended customer acquisition costs.'
    ],
    keyTakeaways: [
      'Broad targeting paired with high-intent creative hooks outperforms micro-interest stacking 87% of the time.',
      'Test a minimum of 4 distinct 3-second visual hooks for every single core product concept.',
      'First-party server-side tracking (CAPI) is mandatory for optimal algorithm feedback loops.'
    ]
  },
  {
    id: 'post-2',
    title: 'The Anatomy of a 4.5% Conversion Rate Landing Page for D2C Brands',
    slug: 'anatomy-of-high-converting-landing-page',
    category: 'Digital Marketing',
    excerpt: 'Sending paid traffic to standard product description pages is burning your ad budget. Here is how we build dedicated direct-response advertorials.',
    readTime: '8 min read',
    date: 'Aug 15, 2024',
    author: {
      name: 'Maya Lin',
      role: 'Creative & CRO Director',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
    },
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    isFeatured: false,
    content: [
      'When analyzing over 2 million user sessions across our client portfolio, one pattern stands out: standard e-commerce product pages overwhelm visitors with navigation menus, footer clutter, and unstructured product claims.',
      'A dedicated direct-response landing page eliminates decision fatigue. It follows a strict psychological sequence: Hero Promise -> Social Proof Strip -> Core Problem Identification -> Unique Mechanism Revelation -> Clinical/Verified Evidence -> Interactive Bundle Selector -> Risk Reversal Guarantee -> Sticky Quick-Buy Cart.'
    ],
    keyTakeaways: [
      'Remove top navigation bars on paid traffic landing pages to boost checkout completion by up to 22%.',
      'Feature sticky mobile CTA buttons visible across all scroll depths.',
      'Place verified customer photos directly adjacent to the primary checkout button.'
    ]
  },
  {
    id: 'post-3',
    title: 'Google Performance Max vs Search Exact Match: The 2024 Scaling Verdict',
    slug: 'google-performance-max-vs-search-exact',
    category: 'Google Ads',
    excerpt: 'How to prevent Performance Max from cannibalizing your brand search terms and wasting spend on low-quality display networks.',
    readTime: '5 min read',
    date: 'Jul 29, 2024',
    author: {
      name: 'Alexander Ross',
      role: 'Search & Data Specialist',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    coverImage: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80',
    isFeatured: false,
    content: [
      'Google Performance Max is exceptionally potent for scaling e-commerce catalog volume, but without proper negative brand exclusions and asset group discipline, it frequently claims credit for customers who were already searching for your brand name.',
      'By implementing brand exclusion lists, feeding high-resolution custom lifestyle imagery, and pairing PMax with dedicated Exact Match Non-Brand search campaigns, we achieved an average 42% lift in true net-new customer acquisition.'
    ],
    keyTakeaways: [
      'Always submit brand exclusion requests to your Google rep or account settings.',
      'Segment Performance Max asset groups by distinct margin and product price tiers.',
      'Track offline conversions or qualified CRM stages rather than superficial lead form hits.'
    ]
  }
];

export const TEAM_MEMBERS = [
  {
    id: 'julian-kane',
    name: 'Julian Kane',
    role: 'Founder & Managing Partner',
    bio: 'Former growth lead at Silicon Valley scaleups. Has personally deployed over $25M in profitable digital ad spend across Meta, Google, and emerging programmatic channels.',
    expertise: ['Growth Strategy', 'Meta Advantage+', 'Unit Economics', 'Capital Allocation'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'maya-lin',
    name: 'Maya Lin',
    role: 'Partner & Chief Creative Officer',
    bio: 'Award-winning direct-response director with a decade of experience crafting high-velocity video commercials and high-converting UI/UX design architectures.',
    expertise: ['Creative Strategy', 'Landing Page CRO', 'Direct-Response Scripting', 'Brand Identity'],
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'alexander-ross',
    name: 'Alexander Ross',
    role: 'Head of Search & Attribution',
    bio: 'Data scientist turned search specialist. Master of GA4 server-side modeling, Triple Whale custom dashboards, and high-intent Google Search dominance.',
    expertise: ['Google & YouTube Ads', 'Server CAPI Setup', 'Multi-Touch Attribution', 'Technical SEO'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'charlotte-vane',
    name: 'Charlotte Vane',
    role: 'Director of Retention & Lifecycle',
    bio: 'Klaviyo Elite partner specialist who has built email and SMS automated retention machines generating 30-45% of total backend revenue for D2C brands.',
    expertise: ['Klaviyo Automation', 'SMS Marketing', 'Customer LTV Modeling', 'VIP Retention'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
  }
];

export const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: 'How quickly can we expect to see results after partnering with VELORA?',
    answer: 'For paid advertising campaigns (Meta & Google), our initial 14-day sprint includes full tracking auditing, custom creative production, and audience architecture deployment. Most clients begin seeing optimized CPA improvements within the first 14-21 days of live ad spend.',
    category: 'results'
  },
  {
    id: 'faq-2',
    question: 'What is your minimum monthly ad spend requirement?',
    answer: 'We typically recommend a minimum ad spend of $3,000/month for single-channel campaigns and $10,000+/month for omnichannel scaling. This ensures the algorithms receive adequate conversion data to optimize efficiently.',
    category: 'pricing'
  },
  {
    id: 'faq-3',
    question: 'How do you handle ad creative production and UGC videos?',
    answer: 'Creative is fully handled in-house. Our production unit writes direct-response scripts, hires vetted creators matching your target customer demographics, edits high-impact video assets, and provides 12-25+ fresh creatives every month.',
    category: 'process'
  },
  {
    id: 'faq-4',
    question: 'What makes VELORA different from standard digital marketing agencies?',
    answer: 'We do not sell generic vanity metrics like impressions or clicks. We focus strictly on revenue, customer acquisition cost (CAC), and blended ROAS. Every account is led by senior growth practitioners with direct equity accountability, not junior account managers.',
    category: 'general'
  },
  {
    id: 'faq-5',
    question: 'Do you require long-term lock-in contracts?',
    answer: 'No. Our standard agreements operate on flexible 90-day growth cycles with transparent monthly milestones. We believe client retention should be earned through consistent revenue delivery, not hostage clauses.',
    category: 'pricing'
  },
  {
    id: 'faq-6',
    question: 'How often do we communicate and review campaign performance?',
    answer: 'You receive a dedicated private Slack channel with real-time response from your strategy team, 24/7 access to live financial dashboards (Triple Whale / Data Studio), and weekly strategic synchronization calls.',
    category: 'process'
  }
];
