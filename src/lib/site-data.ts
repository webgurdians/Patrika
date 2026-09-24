export const siteConfig = {
  name: "Patrika Media & Marketing",
  shortName: "Patrika Media",
  description:
    "Patrika builds measurable growth systems for trust-based businesses in healthcare, education, hospitality, and premium local services across West Bengal and India.",
  url: "https://patrikamedia.in",
  email: "hello@patrikamedia.in",
  phone: "+91 6297648194",
  location: "West Bengal, India",
};

export const experienceBrands = [
  {
    name: "ITC Sonar Bangla",
    category: "Hospitality",
    logo: "",
    description: "Hospitality Production Experience",
    website: "https://www.itchotels.com",
    featured: true,
    sortOrder: 1,
  },
  {
    name: "Taj Vivanta",
    category: "Hospitality",
    logo: "",
    description: "Hospitality Project Experience",
    website: "https://www.vivantahotels.com",
    featured: true,
    sortOrder: 2,
  },
  {
    name: "Apollo Hospitals",
    category: "Healthcare",
    logo: "",
    description: "Healthcare Content & Production Experience",
    website: "https://www.apollohospitals.com",
    featured: true,
    sortOrder: 3,
  },
  {
    name: "Narayana Superspeciality Hospital",
    category: "Healthcare",
    logo: "",
    description: "Healthcare Industry Experience",
    website: "https://www.narayanahealth.org",
    featured: true,
    sortOrder: 4,
  },
  {
    name: "Shivhom Jewellery",
    category: "Luxury & Retail",
    logo: "",
    description: "Luxury Retail Creative Experience",
    website: "",
    featured: true,
    sortOrder: 5,
  },
  {
    name: "Cafe Flora",
    category: "Regional Businesses",
    logo: "",
    description: "Regional Business Growth Experience",
    website: "",
    featured: true,
    sortOrder: 6,
  },
].sort((a, b) => a.sortOrder - b.sortOrder);

export const growthSystemStages = [
  {
    name: "Discovery",
    summary: "Help the right buyers find the brand through search, local discovery, AI answers, social, partnerships, and paid demand.",
  },
  {
    name: "Trust",
    summary: "Make expertise, proof, reviews, content, and brand signals credible before a prospect speaks to the team.",
  },
  {
    name: "Conversion",
    summary: "Turn attention into action with clear offers, websites, landing pages, forms, calls, and WhatsApp journeys.",
  },
  {
    name: "Pipeline",
    summary: "Capture, qualify, route, and follow up with leads inside a CRM-led operating process rather than scattered inboxes.",
  },
  {
    name: "Revenue",
    summary: "Connect marketing activity to appointments, admissions, bookings, opportunities, and closed business.",
  },
  {
    name: "Measurement",
    summary: "Use attribution, dashboards, lead quality, CAC, conversion rates, and experiments to decide what to improve next.",
  },
];

export const servicePillars = [
  {
    slug: "content-production",
    name: "Content Production",
    summary: "Premium photo, video, campaign, and narrative systems that help trust-first businesses look credible before the first call.",
    challenge: "Brands in trust-based categories often look inconsistent across reels, websites, ads, sales assets, and on-ground experiences.",
    outcome: "A repeatable content system that supports discovery, authority, paid campaigns, sales conversations, and conversion.",
    forWho: ["Healthcare teams", "Education brands", "Hospitality businesses", "Premium local brands"],
    examine: ["Buyer objections and trust gaps", "Existing content inventory", "Channel and campaign requirements", "Brand consistency across touchpoints"],
    build: ["Content strategy and production plan", "Campaign photo and video assets", "Founder or expert-led content", "Reusable creative asset library"],
    measure: ["Creative response and engagement quality", "Content-assisted enquiries", "Campaign creative performance", "Landing-page performance by asset"],
    engagement: ["Audit the buyer journey", "Define the content role", "Produce priority assets", "Distribute and learn from performance"],
  },
  {
    slug: "growth-marketing",
    name: "Growth Marketing",
    summary: "Performance strategy, campaign management, and funnel optimization designed around qualified enquiries, not vanity metrics.",
    challenge: "Lead volumes can look healthy while the pipeline still suffers from weak fit, poor conversion, and unclear channel economics.",
    outcome: "A measurable acquisition system connecting positioning, campaigns, landing pages, lead quality, and commercial outcomes.",
    forWho: ["Businesses already generating some demand", "Teams spending on Google or Meta", "Brands preparing to scale acquisition", "Founders who need channel clarity"],
    examine: ["Positioning and offer clarity", "Demand and channel economics", "Campaign and audience structure", "Conversion leaks after the click"],
    build: ["Google and Meta campaign systems", "Landing pages and offer tests", "Retargeting and nurture paths", "Experiment and optimisation backlog"],
    measure: ["Cost per lead", "Cost per qualified lead", "Lead-to-opportunity conversion", "Customer acquisition cost and revenue by channel"],
    engagement: ["Diagnose current acquisition", "Set the measurement baseline", "Launch focused experiments", "Scale what produces qualified demand"],
  },
  {
    slug: "web-development",
    name: "Web Development",
    summary: "High-trust websites and landing pages that balance authority, speed, accessibility, search structure, and conversion.",
    challenge: "Many business websites look acceptable but fail to explain the offer, build confidence, capture intent, or connect to the sales process.",
    outcome: "A premium digital flagship that supports search discovery, buyer education, lead capture, tracking, and future growth experiments.",
    forWho: ["Businesses rebuilding an outdated site", "Brands launching a new offer", "Teams needing campaign landing pages", "Companies preparing for SEO and AI discovery"],
    examine: ["Message hierarchy", "Search and information architecture", "Performance and accessibility", "Conversion friction and lead capture"],
    build: ["Custom responsive websites", "Campaign landing pages", "Structured data and semantic content", "Analytics and conversion event setup"],
    measure: ["Qualified conversion rate", "Lead source and journey", "Core Web Vitals and usability", "Organic and campaign-assisted enquiries"],
    engagement: ["Map the buyer journey", "Design the information architecture", "Build and instrument the experience", "Optimise from real behaviour"],
  },
  {
    slug: "whatsapp-automation",
    name: "CRM & Growth Operations",
    summary: "CRM design, WhatsApp automation, lead routing, follow-up, and pipeline workflows that stop valuable enquiries from disappearing after acquisition.",
    challenge: "Marketing can generate demand while revenue is still lost through slow response times, scattered WhatsApp chats, inconsistent follow-up, and unclear ownership.",
    outcome: "A company-owned lead system with clear stages, faster routing, structured follow-up, and visibility into what happens after an enquiry arrives.",
    forWho: ["Teams managing leads in WhatsApp", "Multi-person sales or counselling teams", "Businesses with recurring follow-up", "Companies that need pipeline visibility"],
    examine: ["Lead capture sources", "Response time and ownership", "Pipeline stages and handoffs", "Follow-up and lost-lead reasons"],
    build: ["CRM stages and field structure", "WhatsApp and email workflows", "Lead routing and reminders", "Source attribution and pipeline reporting"],
    measure: ["Speed to lead", "Follow-up completion", "Lead-to-opportunity conversion", "Pipeline value and lost-lead reasons"],
    engagement: ["Map the current lead journey", "Define CRM stages and ownership", "Automate high-friction handoffs", "Review pipeline quality every cycle"],
  },
  {
    slug: "ai-visibility",
    name: "AI Visibility Strategy",
    summary: "Entity, content, retrieval, and authority work that makes a brand easier for AI assistants and generative search systems to understand and cite.",
    challenge: "Buyer discovery is expanding beyond traditional search, yet many businesses have fragmented entity information, thin authority signals, and no way to evaluate AI visibility.",
    outcome: "A clearer machine-readable brand footprint with useful source content, structured entity signals, and a repeatable query-based measurement approach.",
    forWho: ["Expert-led businesses", "Brands investing in organic authority", "Companies with strong offline credibility but weak digital clarity", "Teams exploring AI-led discovery"],
    examine: ["Entity clarity and consistency", "Crawlability and structured data", "Source-worthy content depth", "Priority buyer queries and citation patterns"],
    build: ["Entity and authority page architecture", "Structured data and semantic content", "Answer-ready resources and evidence pages", "AI visibility query and source tracking framework"],
    measure: ["Priority query coverage", "Brand mention consistency", "Citation and source visibility", "Changes in retrievable brand facts over time"],
    engagement: ["Establish the baseline", "Fix entity and information gaps", "Publish useful evidence", "Measure query and citation movement"],
  },
  {
    slug: "analytics-growth-intelligence",
    name: "Analytics & Growth Intelligence",
    summary: "Measurement architecture that connects traffic, campaigns, leads, pipeline, and revenue so marketing decisions are based on business evidence.",
    challenge: "Teams often have analytics, ad dashboards, and CRM data in separate places, making it difficult to know which activity is producing valuable demand.",
    outcome: "A shared measurement layer for spend, lead quality, conversion, pipeline, and growth experiments.",
    forWho: ["Businesses spending across multiple channels", "Teams with GA4 but weak decision reporting", "Companies introducing a CRM", "Leaders who need marketing accountability"],
    examine: ["Analytics and conversion tracking", "Lead-source consistency", "CRM and campaign data", "Reporting and experiment cadence"],
    build: ["Measurement plan and event taxonomy", "Growth dashboard", "Lead and source attribution framework", "Weekly or monthly decision rhythm"],
    measure: ["Qualified leads and conversion", "Customer acquisition cost", "Revenue and pipeline by source", "Experiment impact and funnel velocity"],
    engagement: ["Audit the data layer", "Define commercial metrics", "Connect dashboards and sources", "Turn reporting into decisions"],
  },
];

export const industries = [
  {
    slug: "healthcare",
    name: "Healthcare",
    summary: "Patients choose providers online before they ever call. We help clinics, specialists, and hospitals earn trust earlier.",
    points: ["Doctor and clinic branding", "Patient education content", "Local search and reputation systems"],
  },
  {
    slug: "education",
    name: "Education",
    summary: "Parents and students compare institutions carefully. We build authority-led journeys that support enquiries and admissions.",
    points: ["Admissions campaigns", "Campus storytelling", "Lead nurture and counsellor workflow support"],
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    summary: "Guests decide before they visit. We position hotels, cafes, and premium dining brands to convert intent into visits.",
    points: ["High-end visual storytelling", "Offer-led campaigns", "Reservation and CRM journeys"],
  },
  {
    slug: "premium-local-businesses",
    name: "Premium Local Businesses",
    summary: "For businesses where trust drives the sale, we build systems that make credibility visible at every touchpoint.",
    points: ["Founder-led positioning", "Lead capture and follow-up", "Content systems for premium perception"],
  },
];

export const caseStudies = [
  {
    slug: "apollo-clinic",
    name: "Apollo Clinic",
    challenge: "Needed a more trustworthy digital front that could convert attention into appointments.",
    solution: "Produced a combined content, landing-page, and lead-routing system centered on patient clarity.",
    outcome: "Higher enquiry quality, faster response pathways, and a stronger authority signal online.",
  },
  {
    slug: "dearstory",
    name: "DearStory",
    challenge: "A premium storytelling-led brand needed sharper digital positioning and more disciplined growth execution.",
    solution: "Refined the offer architecture, campaign narrative, and website conversion paths.",
    outcome: "Clearer premium positioning with a stronger pipeline of relevant inbound interest.",
  },
  {
    slug: "cafe-flora",
    name: "Cafe Flora",
    challenge: "The brand had ambience offline, but not enough digital consistency to drive regular traffic.",
    solution: "Built a hospitality content engine with local campaign support and WhatsApp-led follow-up.",
    outcome: "More repeatable promotional launches and stronger guest recall before visits.",
  },
];

export const founders = [
  {
    name: "Neel Sen",
    role: "Growth & Strategy",
    image: "/neel.png",
    mobileImage: "/neel-mobile.png",
    blurb: "Neel shapes offer clarity, growth direction, measurement, and the commercial systems behind qualified customer acquisition.",
  },
  {
    name: "Prasenjit Dutta",
    role: "Creative Director",
    image: "/prasenjit.png",
    mobileImage: "/prasenjit-mobile.png",
    blurb: "Prasenjit leads visual language, production quality, and the premium storytelling layer of each engagement.",
  },
];

export const diagnosticAreas = growthSystemStages.map((stage) => ({
  name: stage.name,
  summary: stage.summary,
}));

export const pricingTiers = [
  {
    name: "Growth Diagnostic",
    price: "₹15k+",
    description: "A focused audit of discovery, trust, conversion, pipeline, and measurement with a prioritised growth map.",
  },
  {
    name: "Growth Foundation",
    price: "₹50k+",
    description: "Project-based implementation for the highest-priority website, tracking, CRM, visibility, and funnel foundations.",
  },
  {
    name: "Growth Partnership",
    price: "₹40k+/mo",
    description: "Ongoing acquisition, content, optimisation, reporting, and experiments tied to qualified demand and pipeline.",
  },
  {
    name: "Growth Infrastructure",
    price: "Custom",
    description: "Cross-channel systems for multi-location, multi-team, or operationally complex organisations.",
  },
];

export const faqs = [
  {
    question: "Who is Patrika best suited for?",
    answer: "Patrika is built for trust-based businesses where credibility affects conversion, especially in healthcare, education, hospitality, and premium local services.",
  },
  {
    question: "Do you only work in West Bengal?",
    answer: "West Bengal is the current core focus because local market understanding creates better outcomes, but Patrika selectively supports aligned brands elsewhere in India.",
  },
  {
    question: "What is a Growth Diagnostic?",
    answer: "It is a structured review of discovery, trust, conversion, pipeline, revenue, and measurement. The output is a prioritised growth map showing what to fix, build, or test next.",
  },
  {
    question: "Can you handle both marketing and the systems after a lead arrives?",
    answer: "Yes. Patrika connects content, acquisition, websites, CRM, WhatsApp workflows, and measurement so lead generation is not separated from follow-up and conversion.",
  },
  {
    question: "Do you offer one-time projects or retainers?",
    answer: "Both. Many engagements begin with a diagnostic or foundation project and move into an ongoing growth partnership once the operating system is clear.",
  },
];

export const aiVisibilityPages = [
  {
    slug: "ai-visibility",
    title: "AI Visibility Strategy",
    description: "How trust-based businesses can become easier for AI assistants to cite, recommend, and explain.",
  },
  {
    slug: "chatgpt-optimization",
    title: "ChatGPT Optimization",
    description: "Practical steps to improve how your brand appears in ChatGPT-style recommendation flows.",
  },
  {
    slug: "gemini-optimization",
    title: "Gemini Optimization",
    description: "Entity clarity, structured content, and authority signals that help Google Gemini understand your brand.",
  },
  {
    slug: "llm-seo",
    title: "LLM SEO",
    description: "Search strategy built for a world where model-generated answers influence buyer decisions.",
  },
  {
    slug: "generative-engine-optimization",
    title: "Generative Engine Optimization",
    description: "A strategic publishing and structured-data layer designed for generative search visibility.",
  },
];
