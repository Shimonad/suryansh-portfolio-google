export const heroData = {
  headline: "Meet Suryansh Dubey",
  profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face", // replace with your own image when ready
  primaryCTA: "See My Work",
  secondaryCTA: "Contact Me"
};

export const metricsData = [
  {
    number: "3",
    value: "+",
    label: "Full-stack/AI Projects",
    description: "Prompt2Anim, HR Chatbot, Streaming Platform"
  },
  {
    number: "1M",
    value: "+",
    label: "Records Processed",
    description: "Pipelines across PLFS/ASUSE datasets"
  },
  {
    number: "3000",
    value: "+",
    label: "Event Participants",
    description: "Publicity for GES’24 across 250+ colleges"
  },
  {
    number: "3500",
    value: "+",
    label: "Startups Engaged",
    description: "Empresario’24 competition outreach"
  }
];

export const qualificationCards = [
  {
    id: 1,
    front: {
      icon: "Settings",
      title: "Team & Program Leadership",
      subtitle: "Associate Manager, E-Cell IIT Kharagpur"
    },
    back: {
      content: [
        "Led a 70+ team for PR & competitions.",
        "Drove GES’24 across 250+ colleges; 3K+ participants.",
        "Facilitated 60+ VC/ecosystem partnerships and $2.5M+ in services."
      ]
    }
  },
  {
    id: 2,
    front: {
      icon: "BarChart3",
      title: "Data & ML Engineering",
      subtitle: "Python, FastAPI, NLP, retrieval"
    },
    back: {
      content: [
        "Built Pandas/NumPy pipelines for 1M+ records (Cambridge).",
        "DistilBERT sentiment classifier (86% acc) + MiniLM retrieval.",
        "FAISS + LangChain RAG; automated reports with OpenAI & S3."
      ]
    }
  },
  {
    id: 3,
    front: {
      icon: "Cog",
      title: "Secure & Scalable Systems",
      subtitle: "Docker sandboxing, S3 storage, job queues"
    },
    back: {
      content: [
        "Prompt2Anim: prompt→Manim automation, 90% faster creation.",
        "AST parsing + Docker sandbox to prevent arbitrary code exec.",
        "Parallel job infra boosted throughput by ~65%."
      ]
    }
  }
];

export const educationData = {
  graduate: {
    degree: "Dual Degree (B.Tech. Hons. + M.Tech.) in Metallurgical & Materials Engineering",
    university: "IIT Kharagpur",
    period: "2022–2027",
    details: [
      "CGPA: 7.95/10 (as listed).",
      "Relevant Coursework: Programming & Data Structures, Intro to ML (NPTEL), Probability & Statistics, Linear Algebra, Advanced/Transform Calculus, Computer Applications for Materials, Economics."
    ]
  },
  undergraduate: {
    degree: "AISSCE (CBSE XII) & CBSE X",
    university: "D.A.V. Public School, Kota",
    period: "2022 (XII), 2020 (X)",
    details: [
      "Class XII: 95.6%, Class X: 96.4%."
    ]
  }
};

export const experienceData = [
  {
    company: "Skill Master Games",
    role: "Backend & Analytics Intern",
    description: "FastAPI, MongoDB, analytics for Android gaming",
    period: "May 2025 – Jul 2025",
    achievements: [
      "Implemented FastAPI endpoints for score submission & match status.",
      "Added structured logging and Pytest for key endpoints.",
      "Built MongoDB queries for DAU, match counts, payout trends."
    ]
  },
  {
    company: "University of Cambridge",
    role: "Research Associate",
    description: "Data engineering for India’s SME landscape (Prof. Jaideep Prabhu)",
    period: "Nov 2024 – Feb 2025",
    achievements: [
      "Parsed 1M+ PLFS/ASUSE records; modular Pandas/NumPy pipelines.",
      "Applied post-stratification weighting, modeled rural-urban trends.",
      "Built formalization metrics and time-series visualizations."
    ]
  },
  // Featured projects (as professional-grade builds)
  {
    company: "Prompt2Anim",
    role: "Creator",
    description: "AI-powered prompt→Manim animation system",
    period: "May 2025 – Jun 2025",
    achievements: [
      "TypeScript React frontend + FastAPI backend; 90% faster creation.",
      "FAISS + LangChain RAG improved GPT-4 Manim accuracy by 42%.",
      "AST parsing + Docker sandbox for secure execution; S3 + job queue for parallel runs (+65% throughput)."
    ]
  },
  {
    company: "HR Sentiment Chatbot (Deloitte Challenge, Open-Soft 25)",
    role: "Backend & Data Engineer",
    description: "Conversational AI for employee well-being insights",
    period: "Mar 2025 – Apr 2025",
    achievements: [
      "FastAPI backend across 9 data streams; DistilBERT (86% acc).",
      "MiniLM + FAISS semantic retrieval with contradiction checks.",
      "Automated reporting via OpenAI + AWS S3 (-60% manual effort)."
    ]
  },
  {
    company: "Smart Movie Streaming Platform",
    role: "Full-Stack Developer",
    description: "MERN app with multimodal search & secure playback",
    period: "Feb 2025 – Mar 2025",
    achievements: [
      "Fuzzy + semantic search (language/genre/title/plot/cast).",
      "MiniLM-L6-v2 + OpenAI Vision for image-based recommendations.",
      "Video.js player; Razorpay subscriptions; JWT session handling."
    ]
  }
];

export const challengesData = [
  {
    id: 'security',
    title: 'Secure Code Execution',
    description: 'Preventing arbitrary code execution in user-generated scripts.',
    iconClass: 'fa-solid fa-shield-halved',
    impact: 'Sandboxing and AST checks avoid exploits and protect infra.',
    analysis: { impact: 10, complexity: 8 }
  },
  {
    id: 'retrieval',
    title: 'High-Quality Retrieval for LLMs',
    description: 'Designing RAG that stays accurate, fresh, and efficient.',
    iconClass: 'fa-solid fa-magnifying-glass-chart',
    impact: 'Poor retrieval lowers model performance and UX.',
    analysis: { impact: 9, complexity: 8 }
  },
  {
    id: 'scalability',
    title: 'Scalable Job Orchestration',
    description: 'Handling parallel animation/render jobs and queues.',
    iconClass: 'fa-solid fa-layer-group',
    impact: 'Throughput constraints bottleneck user productivity.',
    analysis: { impact: 8, complexity: 7 }
  },
  {
    id: 'analytics',
    title: 'Actionable Product Analytics',
    description: 'Building metrics that inform iterations, not dashboards only.',
    iconClass: 'fa-solid fa-chart-line',
    impact: 'Misleading metrics delay product improvements.',
    analysis: { impact: 7, complexity: 6 }
  },
  {
    id: 'collaboration',
    title: 'Cross-Functional Execution',
    description: 'Coordinating with engineers, researchers, and partners.',
    iconClass: 'fa-solid fa-handshake',
    impact: 'Misalignment causes scope creep and delays.',
    analysis: { impact: 7, complexity: 6 }
  }
];

export const dashboardData = {
  overview: {
    metrics: [
      { label: "Pipeline Records Parsed", value: "1.0M+", trend: "up" },
      { label: "Model Accuracy (Sentiment)", value: "86%", change: "DistilBERT", trend: "stable" },
      { label: "Throughput Gain (Jobs)", value: "65%", change: "Parallel queueing", trend: "up" },
      { label: "Prompt→Code Speedup", value: "90%", change: "Automation", trend: "up" }
    ],
    charts: {
      qualityTrends: [
        { month: "Feb", score: 78 },
        { month: "Mar", score: 82 },
        { month: "Apr", score: 86 },
        { month: "May", score: 88 },
        { month: "Jun", score: 90 },
        { month: "Jul", score: 91 }
      ],
      processingDistribution: [
        { name: "Automated", value: 72, color: "#1a73e8" },
        { name: "Manual Review", value: 20, color: "#fbbc04" },
        { name: "Failed", value: 8, color: "#ea4335" }
      ]
    }
  },
  providers: [
    { name: "FAISS + MiniLM", status: "Active", quality: 95, lastUpdate: "Today", issues: 0 },
    { name: "LangChain", status: "Active", quality: 93, lastUpdate: "Today", issues: 0 },
    { name: "OpenAI API", status: "Active", quality: 92, lastUpdate: "Today", issues: 0 },
    { name: "Docker Sandbox", status: "Active", quality: 97, lastUpdate: "Today", issues: 0 },
    { name: "AWS S3 (Compatible)", status: "Active", quality: 94, lastUpdate: "Today", issues: 0 }
  ],
  qualityControl: {
    validationRate: 94.2,
    pendingReviews: 24,
    criticalIssues: 1
  },
  pipeline: {
    stages: [
      { name: "Ingestion", status: "Active", rate: "5.2K/min" },
      { name: "Preprocess", status: "Active", rate: "5.0K/min" },
      { name: "Embedding/Retrieval", status: "Active", rate: "4.8K/min" },
      { name: "Generation", status: "Active", rate: "4.6K/min" },
      { name: "Reports/Render", status: "Active", rate: "4.5K/min" }
    ]
  },
  monitoring: {
    systemHealth: {
      cpu: 61,
      memory: 70,
      storage: 38
    }
  }
};
