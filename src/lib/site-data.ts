export const siteConfig = {
  name: "Patrika Media & Marketing Enterprise",
  shortName: "Patrika Media",
  description:
    "Patrika builds growth systems for trust-based businesses in healthcare, education, hospitality, and premium local services across West Bengal.",
  url: "https://patrikamedia.com",
  email: "hello@patrikamedia.com",
  phone: "+91 90000 00000",
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

export const servicePillars = [
  {
    slug: "content-production",
    name: "Content Production",
    summary: "Premium photo, video, campaign, and narrative systems that help trust-first businesses look credible before the first call.",
    challenge: "Brands in trust-based categories often look inconsistent across reels, websites, ads, and sales assets.",
    outcome: "A cinematic content system built for conversion across social, paid, and owned channels.",
  },
  {
    slug: "growth-marketing",
    name: "Growth Marketing",
    summary: "Performance strategy, campaign management, and funnel optimization designed around qualified enquiries, not vanity metrics.",
    challenge: "Lead volumes look healthy on paper but the pipeline lacks fit, consistency, and follow-through.",
    outcome: "Clear positioning, channel mix, and reporting that makes spend accountable to business growth.",
  },
  {
    slug: "web-development",
    name: "Web Development",
    summary: "High-trust websites that balance authority, speed, accessibility, and conversion architecture.",
    challenge: "Most local business websites feel dated, template-driven, and disconnected from real sales journeys.",
    outcome: "A premium digital flagship with SEO structure, case studies, and lead capture built in.",
  },
  {
    slug: "whatsapp-automation",
    name: "WhatsApp Automation",
    summary: "Lead qualification, reminders, routing, and nurturing flows inside the channel customers already use.",
    challenge: "Enquiries are lost between campaigns, staff follow-up, and slow response times.",
    outcome: "Automated WhatsApp journeys that keep interest warm and reduce manual workload.",
  },
  {
    slug: "ai-visibility",
    name: "AI Visibility Strategy",
    summary: "Emerging-search positioning for ChatGPT, Gemini, Claude, and Perplexity recommendations.",
    challenge: "Search behavior is shifting toward AI assistants, but most businesses have no structured visibility plan.",
    outcome: "Entity clarity, helpful content, and authority signals designed for AI citations and answers.",
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
    blurb: "Neel shapes offer clarity, growth direction, and the commercial systems behind qualified lead generation.",
  },
  {
    name: "Prasenjit Dutta",
    role: "Creative Director",
    blurb: "Prasenjit leads visual language, production quality, and the premium storytelling layer of each engagement.",
  },
];

export const pricingTiers = [
  { name: "Starter", price: "₹15k+", description: "Focused campaigns, landing pages, and essential lead capture systems." },
  { name: "Growth", price: "₹35k+", description: "Ongoing campaign management, content, optimization, and reporting." },
  { name: "Enterprise", price: "₹80k+", description: "Cross-channel authority building with automation and strategic oversight." },
  { name: "Custom Solutions", price: "₹1.5L+", description: "Bespoke growth systems for multi-location or multi-service brands." },
];

export const faqs = [
  {
    question: "Who is Patrika best suited for?",
    answer: "Patrika is built for trust-based businesses where credibility affects conversion, especially in healthcare, education, hospitality, and premium local services.",
  },
  {
    question: "Do you only work in West Bengal?",
    answer: "West Bengal is the current core focus because local market understanding creates better outcomes, but we can support aligned brands elsewhere selectively.",
  },
  {
    question: "Can you handle both content and performance?",
    answer: "Yes. The model combines content production, growth marketing, websites, CRM thinking, and automation so the funnel feels connected.",
  },
  {
    question: "What happens in the strategy call?",
    answer: "We review the current demand journey, identify bottlenecks, assess positioning, and recommend the fastest practical next steps.",
  },
  {
    question: "Do you offer one-time projects or retainers?",
    answer: "Both. Some clients begin with a single deliverable and move into retainers once the growth system is defined.",
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
