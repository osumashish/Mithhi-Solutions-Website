export interface Certification {
  id: string;
  name: string;
  issuer: string;
  badge: string;
  year?: string;
  description?: string;
}

export interface DomainExpertise {
  id: string;
  title: string;
  iconName: string;
  description: string;
  category: 'Strategy' | 'Operations' | 'Technology' | 'Leadership';
  impact?: string;
}

export interface ServiceOffering {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  outcome: string;
  deliverables: string[];
  engagementModel: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  clientIndustry: string;
  region: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    label: string;
  }[];
  keyTakeaways: string[];
  image: string;
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: 'AI' | 'ITSM' | 'Leadership' | 'Cloud' | 'Automation';
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  featured?: boolean;
  content: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  category: 'Leadership' | 'Client' | 'Mentorship' | 'Peer' | 'Training';
}

export interface ResourceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  fileType: string;
  fileSize: string;
  downloadUrl: string;
  previewUrl?: string;
}

export interface ExperienceRole {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Ashish Mishra',
    title: 'Executive IT Leader | AI Strategy Advisor | Digital Transformation',
    role: 'Regional Technology Leader — APAC',
    company: 'The Woodbridge Group',
    location: 'Pune, India · APAC Region',
    email: 'ashm1305@hotmail.com',
    linkedin: 'https://www.linkedin.com/in/osumashish',
    instagram: 'https://www.instagram.com/byteandbrewpune',
    avatarImage: 'https://images.pexels.com/photos/7580763/pexels-photo-7580763.jpeg?auto=compress&cs=tinysrgb&w=1200',
    heroBgImage: 'https://images.pexels.com/photos/8566470/pexels-photo-8566470.jpeg?auto=compress&cs=tinysrgb&w=1200',
    bio: 'Executive IT Leader with 17+ years of hands-on experience guiding multinational enterprises through digital transformation, ITSM modernization, cloud strategy, and pragmatically governed enterprise AI adoption. Proven track record across APAC managing high-performing regional technology teams, driving SLA compliance from 82% to 96%, and delivering multi-million dollar operational optimizations.',
    philosophy: 'Technology is an accelerator, not a constraint. Sustainable digital transformation happens at the intersection of robust governance, empirical service management, and empathetic people leadership.'
  },

  stats: [
    { value: '17+', label: 'Years of Experience' },
    { value: '4+', label: 'Countries Managed' },
    { value: '50+', label: 'Projects Delivered' },
    { value: '120+', label: 'Team Members Led' },
    { value: '8', label: 'Certifications' },
    { value: '96%', label: 'SLA Compliance Achieved' }
  ],

  certifications: [
    { id: '1', name: 'PMP®', issuer: 'Project Management Institute', badge: 'PMP®', year: 'Certified', description: 'Project Management Professional' },
    { id: '2', name: 'PRINCE2®', issuer: 'AXELOS', badge: 'PRINCE2®', year: 'Practitioner', description: 'PRINCE2 Certified Project Management' },
    { id: '3', name: 'ITIL® 4', issuer: 'AXELOS', badge: 'ITIL® 4', year: 'Managing Professional', description: 'IT Service Management & Governance' },
    { id: '4', name: 'CCNA', issuer: 'Cisco Systems', badge: 'CCNA', year: 'Routing & Switching', description: 'Cisco Certified Network Associate' },
    { id: '5', name: 'AWS SAA', issuer: 'Amazon Web Services', badge: 'AWS SAA', year: 'Solutions Architect', description: 'AWS Certified Solutions Architect – Associate' },
    { id: '6', name: 'ServiceNow CSA', issuer: 'ServiceNow', badge: 'ServiceNow', year: 'Certified Administrator', description: 'ServiceNow System Administration & Modernization' },
    { id: '7', name: 'CSM®', issuer: 'Scrum Alliance', badge: 'CSM®', year: 'Agile Leadership', description: 'Certified ScrumMaster' },
    { id: '8', name: 'TOGAF® 9', issuer: 'The Open Group', badge: 'TOGAF®', year: 'Enterprise Architecture', description: 'Enterprise Architecture Framework' }
  ],

  companies: [
    { name: 'The Woodbridge Group', role: 'Regional Technology Leader — APAC' },
    { name: 'Infosys', role: 'Lead Technology Consultant' },
    { name: 'CompuCom', role: 'Senior ITSM Specialist' },
    { name: 'Sakon', role: 'Senior Telecom & IT Operations Manager' }
  ],

  domains: [
    {
      id: '1',
      title: 'IT Strategy',
      iconName: 'Compass',
      category: 'Strategy',
      description: 'Aligning technology investments with business objectives to create measurable enterprise value.'
    },
    {
      id: '2',
      title: 'AI Adoption',
      iconName: 'Brain',
      category: 'Strategy',
      description: 'Pragmatic AI strategy, governance and adoption frameworks for enterprise environments.'
    },
    {
      id: '3',
      title: 'Digital Transformation',
      iconName: 'Rocket',
      category: 'Strategy',
      description: 'Large-scale modernization programs that move organizations from legacy to future-ready.'
    },
    {
      id: '4',
      title: 'ITSM & ITIL',
      iconName: 'Workflow',
      category: 'Operations',
      description: 'ITIL 4-based service management transformations that lift SLA performance and visibility.'
    },
    {
      id: '5',
      title: 'ServiceNow',
      iconName: 'ServerCog',
      category: 'Operations',
      description: 'Platform rollouts embedding Incident, Change and Problem Management with real-time KPIs.'
    },
    {
      id: '6',
      title: 'IT Infrastructure',
      iconName: 'Network',
      category: 'Technology',
      description: 'Enterprise infrastructure consolidation, hybrid-cloud migration and standardization.'
    },
    {
      id: '7',
      title: 'Cybersecurity',
      iconName: 'Shield',
      category: 'Technology',
      description: 'SOC leadership, security operations collaboration and risk-aware governance.'
    },
    {
      id: '8',
      title: 'Cloud Strategy',
      iconName: 'Cloud',
      category: 'Technology',
      description: 'Hybrid and multi-cloud strategies balancing agility, cost and resilience.'
    },
    {
      id: '9',
      title: 'Vendor Governance',
      iconName: 'Handshake',
      category: 'Operations',
      description: 'Strategic supplier evaluation, contract negotiation and service-level agreement enforcement.'
    },
    {
      id: '10',
      title: 'Agile & DevOps',
      iconName: 'Zap',
      category: 'Operations',
      description: 'Embedding CI/CD pipelines, cross-functional squad structures and rapid delivery loops.'
    },
    {
      id: '11',
      title: 'Data Center Modernization',
      iconName: 'Database',
      category: 'Technology',
      description: 'Consolidating legacy hardware into optimized hyper-converged and edge environments.'
    },
    {
      id: '12',
      title: 'Disaster Recovery & BCP',
      iconName: 'ShieldCheck',
      category: 'Operations',
      description: 'RPO/RTO minimization, disaster recovery simulation and continuous business continuity.'
    },
    {
      id: '13',
      title: 'Enterprise Architecture',
      iconName: 'Layers',
      category: 'Strategy',
      description: 'TOGAF-driven target operating models aligning business capabilities with scalable tech.'
    },
    {
      id: '14',
      title: 'IT Financial Management (TBM)',
      iconName: 'DollarSign',
      category: 'Strategy',
      description: 'Total cost of ownership optimization, chargeback transparency and budget efficiency.'
    },
    {
      id: '15',
      title: 'Change Management',
      iconName: 'RefreshCw',
      category: 'Leadership',
      description: 'People-first organizational change, training pipelines and stakeholder alignment.'
    },
    {
      id: '16',
      title: 'Telecommunications & Networking',
      iconName: 'Radio',
      category: 'Technology',
      description: 'SD-WAN rollouts, global MPLS optimization and secure campus network architecture.'
    }
  ],

  services: [
    {
      id: '1',
      title: 'Executive IT Consulting',
      iconName: 'Briefcase',
      shortDesc: 'Board-level advisory on technology strategy, operating models and organizational design.',
      fullDesc: 'Empowering senior executives and C-suite leaders to bridge the gap between technology capabilities and corporate growth targets. We evaluate your current IT maturity, benchmark against industry standards, and craft a 3-year strategic roadmap.',
      outcome: 'Technology leadership that accelerates — not constrains — business growth.',
      deliverables: [
        '3-Year Enterprise Technology Strategy & Roadmap',
        'Target Operating Model (TOM) Design',
        'IT Capability Maturity Assessment',
        'Board & C-Suite Executive Briefings'
      ],
      engagementModel: 'Retainer or Project-based Strategy Audit'
    },
    {
      id: '2',
      title: 'AI Strategy & Adoption',
      iconName: 'Brain',
      shortDesc: 'Enterprise AI readiness assessments, governance frameworks and adoption roadmaps.',
      fullDesc: 'Transition your enterprise from fragmented AI experimentation to scalable, value-generating production systems. We institute ethical governance, data privacy boundaries, tool selection, and change enablement.',
      outcome: 'AI initiatives that deliver measurable ROI instead of stalled pilots.',
      deliverables: [
        'Enterprise AI Readiness & Risk Blueprint',
        'AI Governance & Security Policy Framework',
        'Use-case ROI Prioritization Matrix',
        'Staff Upskilling & Adoption Playbook'
      ],
      engagementModel: '8 to 12 Week Transformation Engagement'
    },
    {
      id: '3',
      title: 'IT Transformation',
      iconName: 'Rocket',
      shortDesc: 'End-to-end modernization of infrastructure, platforms and processes.',
      fullDesc: 'Comprehensive restructuring of enterprise tech stacks. Legacy system decommissioning, automated workflow integration, cloud migrations, and operating model redesigns built for 99.99% operational continuity.',
      outcome: 'Up to 30% reliability improvement and 15% cost reduction — proven at scale.',
      deliverables: [
        'Full Architecture & Legacy Debt Audit',
        'Modernization & Migration Playbook',
        'Risk Mitigation & Zero-Downtime Rollout Strategy',
        'Post-Transformation KPI Verification'
      ],
      engagementModel: 'Multi-Phase Modernization Program'
    },
    {
      id: '4',
      title: 'ITSM & ITIL Modernization',
      iconName: 'Workflow',
      shortDesc: 'ITIL 4-based service management transformations that lift SLA performance and visibility.',
      fullDesc: 'Restructure service management from reactive trouble-ticket management to proactive value streams. Standardize Incident, Problem, Change, and Service Request workflows to achieve world-class SLA targets.',
      outcome: 'Shift SLA compliance from ~80% to 95%+ with complete executive visibility.',
      deliverables: [
        'ITIL 4 Process Design & Standardization',
        'SLA/OLA Taxonomy & Metric Restructuring',
        'Root Cause Analysis (RCA) & Problem Management Design',
        'Service Desk KPI Dashboard Specification'
      ],
      engagementModel: '6 to 10 Week Process Modernization'
    },
    {
      id: '5',
      title: 'ServiceNow Platform Advisory',
      iconName: 'ServerCog',
      shortDesc: 'Platform rollouts embedding Incident, Change and Problem Management with real-time KPIs.',
      fullDesc: 'Unlock the true value of your ServiceNow investment. From greenfield deployments to platform health check remediation, CMDB cleanup, and automated ITOM/ITSM workflow configurations.',
      outcome: 'Single pane of glass operations with automated governance and minimal customization bloat.',
      deliverables: [
        'ServiceNow Instance Health & Architecture Audit',
        'CMDB Data Hygiene & Automated Discovery Blueprint',
        'ITSM / ITOM Workflow Configuration Blueprint',
        'User Adoption & Admin Training Protocols'
      ],
      engagementModel: 'Advisory or Implementation Oversight'
    },
    {
      id: '6',
      title: 'Fractional CIO Services',
      iconName: 'UserCheck',
      shortDesc: 'Flexible executive technology leadership for mid-market enterprises navigating growth.',
      fullDesc: 'Get senior CIO-level leadership without the expense of a full-time executive. Ideal for organizations navigating major scale-ups, post-merger integrations, or interim leadership transitions.',
      outcome: 'Decisive executive guidance, vendor negotiation power, and team leadership.',
      deliverables: [
        'Interim IT Department Leadership',
        'Vendor Contract & Budget Optimization',
        'IT Hiring & Organizational Structuring',
        'Executive & Board Reporting'
      ],
      engagementModel: 'Part-Time Retainer (10-20 hrs/week)'
    },
    {
      id: '7',
      title: 'Cloud Strategy & Hybrid Migration',
      iconName: 'Cloud',
      shortDesc: 'Hybrid and multi-cloud strategies balancing agility, cost control, and resilience.',
      fullDesc: 'Design pragmatic cloud architectures that avoid cloud vendor lock-in or runaway subscription costs. Right-size workloads between AWS, Azure, on-premise private clouds, and edge compute.',
      outcome: 'Predictable cloud spend, zero data loss migration, and enhanced disaster recovery.',
      deliverables: [
        'Cloud Financial Management (FinOps) Assessment',
        'Hybrid Architecture Blueprint',
        'Application Migration Roadmap (6 Rs Analysis)',
        'Cloud Security & Compliance Blueprint'
      ],
      engagementModel: 'Assessment & Execution Roadmap'
    },
    {
      id: '8',
      title: 'Cybersecurity Governance & SOC Oversight',
      iconName: 'Shield',
      shortDesc: 'Risk-aware security operations, SOC governance, and compliance readiness.',
      fullDesc: 'Strengthen enterprise security posture without choking business agility. Establish security operating center (SOC) metrics, incident response protocols, and ISO/NIST framework compliance.',
      outcome: 'Actionable security posture with minimal friction for internal teams.',
      deliverables: [
        'Security Governance & Gap Analysis',
        'Incident Response & Playbook Design',
        'SOC Performance Metrics & Oversight Framework',
        'Cyber Security Awareness Campaign Design'
      ],
      engagementModel: 'Security Advisory Retainer'
    },
    {
      id: '9',
      title: 'Vendor Ecosystem Governance',
      iconName: 'Handshake',
      shortDesc: 'Strategic supplier evaluation, contract negotiation, and SLA enforcement.',
      fullDesc: 'Transform IT vendor relationships from passive cost centers into accountability-driven partnerships. Implement vendor scorecards, contractual SLA enforcement, and cost optimization routines.',
      outcome: 'Average 15-20% vendor cost reduction with improved deliverable quality.',
      deliverables: [
        'Vendor Portfolio Cost & SLA Audit',
        'RFP & Supplier Selection Framework',
        'Contract SLA & Penalty Mechanism Design',
        'Quarterly Business Review (QBR) Structure'
      ],
      engagementModel: 'Vendor Restructuring Engagement'
    },
    {
      id: '10',
      title: 'Corporate Technology Training',
      iconName: 'GraduationCap',
      shortDesc: 'Custom training programs for ITIL 4, PMP methodology, and AI integration.',
      fullDesc: 'Elevate your internal engineering and management talent. Specialized workshops covering practical ITIL implementation, project management execution, networking fundamentals, and GenAI enterprise adoption.',
      outcome: 'A self-sufficient, highly skilled technical workforce aligned with modern standards.',
      deliverables: [
        'Customized Curriculum & Learning Materials',
        'Interactive Masterclasses & Simulation Workshops',
        'Knowledge Check & Capability Assessments',
        'Post-Training Mentorship & Support'
      ],
      engagementModel: '1-Day to 1-Week Intensive Workshops'
    }
  ],

  caseStudies: [
    {
      id: '1',
      slug: 'itsm-transformation-servicenow',
      title: 'IT Service Management Transformation — ITIL & ServiceNow',
      subtitle: 'Modernizing APAC regional IT operations from 82% to 96% SLA compliance while instituting real-time executive visibility.',
      category: 'ITSM Modernization',
      clientIndustry: 'Global Automotive & Manufacturing',
      region: 'APAC Region (Multi-Country)',
      challenge: 'Inconsistent service delivery processes across 4 country operations led to SLA compliance drops below 82%, high MTTR (Mean Time to Resolution), and zero centralized tracking for executive leadership.',
      solution: 'Architected and led an enterprise ITIL 4 process standardization coupled with a ServiceNow greenfield rollout. Consolidated Incident, Problem, Change, and Knowledge Management into unified workflows with automated escalation pathways.',
      results: [
        { metric: '82% → 96%', label: 'SLA Compliance Uplift' },
        { metric: '35%', label: 'Reduction in MTTR' },
        { metric: 'Real-Time', label: 'Executive Dashboard Visibility' }
      ],
      keyTakeaways: [
        'Process alignment must precede tool implementation.',
        'Leadership dashboard transparency creates positive accountability.',
        'Automated change advisory boards (CAB) reduced emergency changes by 60%.'
      ],
      image: 'https://images.pexels.com/photos/17489158/pexels-photo-17489158.jpeg?auto=compress&cs=tinysrgb&w=1600',
      featured: true
    },
    {
      id: '2',
      slug: 'ai-adoption-governance',
      title: 'Enterprise AI Strategy & Governance Blueprint',
      subtitle: 'Formulating a pragmatically governed GenAI adoption framework across multi-departmental corporate functions.',
      category: 'AI Strategy',
      clientIndustry: 'Enterprise Technology Services',
      region: 'Global / APAC',
      challenge: 'Uncontrolled "shadow AI" usage created severe IP exposure risks while leadership struggled to quantify business value from early experimental pilots.',
      solution: 'Instituted a centralized AI Governance Board, defined zero-data-retention policy guidelines for LLM usage, created a sandboxed internal GenAI platform, and established an ROI-weighted project selection matrix.',
      results: [
        { metric: '100%', label: 'Data Leakage Risk Elimination' },
        { metric: '14', label: 'Vetted AI Use-Cases Deployed' },
        { metric: '40%', label: 'Speed Improvement in Support Documentation' }
      ],
      keyTakeaways: [
        'Governance enables speed by setting safe boundaries rather than stopping innovation.',
        'Employee prompt-engineering masterclasses accelerated organic tool adoption.',
        'Prioritizing high-frequency internal tasks yielded immediate, visible ROI.'
      ],
      image: 'https://images.pexels.com/photos/8566470/pexels-photo-8566470.jpeg?auto=compress&cs=tinysrgb&w=1600',
      featured: true
    },
    {
      id: '3',
      slug: 'hybrid-cloud-migration',
      title: 'Multi-Country Hybrid Cloud Migration & Infrastructure Standardization',
      subtitle: 'Consolidating legacy data centers into a resilient hybrid cloud architecture with zero unexpected business downtime.',
      category: 'Cloud Infrastructure',
      clientIndustry: 'Industrial Engineering',
      region: 'APAC (India, China, Thailand, Japan)',
      challenge: 'Aging data center hardware across regional sites suffered frequent outages and mounting licensing costs, with low elasticity for spikes in production demand.',
      solution: 'Migrated non-latency-critical workloads to AWS while modernizing critical on-premise factory floor systems onto hyper-converged Nutanix infrastructure connected via SD-WAN.',
      results: [
        { metric: '22%', label: 'Annual Infrastructure Cost Savings' },
        { metric: '99.99%', label: 'Uptime Achieved Post-Migration' },
        { metric: '0 hrs', label: 'Unplanned Factory Downtime' }
      ],
      keyTakeaways: [
        'A hybrid approach respects operational realities that purely public cloud strategies ignore.',
        'SD-WAN connectivity was key to seamless hybrid workload performance.',
        'FinOps monitoring prevented cloud cost sprawl within 60 days of launch.'
      ],
      image: 'https://images.pexels.com/photos/8761323/pexels-photo-8761323.jpeg?auto=compress&cs=tinysrgb&w=1600',
      featured: false
    },
    {
      id: '4',
      slug: 'global-service-desk-optimization',
      title: 'Regional Service Desk Consolidation & Automation',
      subtitle: 'Unifying disparate localized IT helpdesks into a 24/7 centralized service desk model with self-service automation.',
      category: 'IT Operations',
      clientIndustry: 'Global Logistics & Supply Chain',
      region: 'APAC & Middle East',
      challenge: 'High cost per ticket and slow resolution times due to localized, siloed support desks running isolated ticketing tools.',
      solution: 'Consolidated support into a follow-the-sun regional hub, introduced an AI-powered self-service portal for routine password resets and access requests, and optimized agent escalation flows.',
      results: [
        { metric: '45%', label: 'First Contact Resolution (FCR) Increase' },
        { metric: '30%', label: 'Reduction in Cost Per Ticket' },
        { metric: '24/7', label: 'Support Coverage Established' }
      ],
      keyTakeaways: [
        'Self-service portals must be friction-free to drive high user adoption.',
        'Knowledge base article quality directly correlates with tier-1 deflection rates.',
        'Empowering helpdesk staff with clear escalation criteria reduced ticket ping-pong.'
      ],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1600',
      featured: false
    }
  ],

  blogPosts: [
    {
      id: '1',
      slug: 'ai-adoption-enterprise-playbook',
      title: 'The Enterprise AI Adoption Playbook: From Pilot Purgatory to Production',
      category: 'AI',
      date: 'May 20, 2025',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/8566470/pexels-photo-8566470.jpeg?auto=compress&cs=tinysrgb&w=1600',
      excerpt: 'Most enterprise AI initiatives stall at the pilot stage. Here is the governance-first framework I use to move organizations from experimentation to measurable production value.',
      featured: true,
      content: [
        'Every technology executive in 2025 is feeling the pressure to "do AI." Boardrooms want generative AI strategies, department heads are asking for copilots, and software vendors are adding AI labels to every license renewal. Yet behind the hype lies a sobering reality: over 70% of enterprise AI initiatives get stuck in what I call "Pilot Purgatory."',
        'Pilot Purgatory is that state where a team builds a neat demo or proof-of-concept, showcases it to leadership, receives applause, and then realizes they cannot deploy it safely to 10,000 employees because of security risks, data compliance concerns, or unclear financial ROI.',
        '### The 4 Pillars of Governance-First AI',
        'Over the past two years, guiding enterprise IT teams through AI integration across the APAC region, I have developed a repeatable governance-first framework:',
        '1. **Data Perimeter Security**: Never feed confidential enterprise data into unvetted public models. Establish private API tenants with strict zero-data-retention agreements.',
        '2. **The High-Impact / Low-Risk Matrix**: Map potential use-cases on a grid. Avoid high-risk customer-facing generative bots initially; start with internal knowledge synthesis and automated ticket categorization.',
        '3. **Human-in-the-Loop Safeguards**: AI output should augment employee decision-making, not replace critical operational oversight without audit trails.',
        '4. **Empirical ROI Tracking**: Define metrics before building — measure hours saved per task, accuracy improvements, or processing latency reductions.',
        '### Moving Forward with Confidence',
        'Enterprise AI adoption is a endurance marathon, not a sprint. By anchoring your AI vision in robust ITIL-aligned governance, clear risk boundaries, and user enablement, you turn artificial intelligence from a risky novelty into a sustained competitive advantage.'
      ]
    },
    {
      id: '2',
      slug: 'itsm-transformation-lessons',
      title: 'From 82% to 96% SLA Compliance: Lessons from a Real ITSM Transformation',
      category: 'ITSM',
      date: 'Apr 14, 2025',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/17489163/pexels-photo-17489163.jpeg?auto=compress&cs=tinysrgb&w=1600',
      excerpt: 'Rolling out ServiceNow is easy. Changing how an organization thinks about service is the real transformation. Here is what actually moved the needle.',
      featured: true,
      content: [
        'When I stepped into leading regional IT operations across APAC, our Service Level Agreement (SLA) compliance was hovering around 82%. On paper, we had tickets being logged and closed. In reality, users were frustrated, major incidents escalated straight to executive inboxes, and root cause problem management was virtually non-existent.',
        'Many leaders believe that buying a premier tool like ServiceNow automatically fixes service delivery. It does not. A expensive tool built on broken processes simply automates chaos at scale.',
        '### What Actually Moved the Needle',
        'To shift SLA performance from 82% to 96% in 9 months, we focused on three fundamental interventions:',
        '1. **Categorization & Priority Matrix Overhaul**: We discovered over 40% of logged tickets were categorized incorrectly as "P2 High Impact" when they were routine requests. We recalibrated priority definitions based on true business operational impact.',
        '2. **Proactive Problem Management**: We established a weekly Incident Trend Analysis. By identifying recurring network switch failures at two plant locations, we eliminated 150+ tickets per month permanently.',
        '3. **Cultural Shift to SLA Transparency**: We replaced monthly PDF reports with real-time TV dashboards in our operational centers and shared transparent metrics with business stakeholders.',
        '### The Takeaway for IT Leaders',
        'Operational excellence is not about perfection; it is about visibility, consistency, and continuous empirical refinement.'
      ]
    },
    {
      id: '3',
      slug: 'engineer-to-executive',
      title: 'From Engineer to Executive: The Career Transitions Nobody Prepares You For',
      category: 'Leadership',
      date: 'Mar 28, 2025',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/8761323/pexels-photo-8761323.jpeg?auto=compress&cs=tinysrgb&w=1600',
      excerpt: 'Sixteen years ago I was configuring routers at Infosys. Today I lead technology across a region. These are the mindset shifts that mattered most.',
      featured: true,
      content: [
        'Early in my technology career, I believed that technical brilliance was the sole key to advancement. If I could configure complex Cisco BGP routing tables faster or solve a server kernel panic before anyone else, I assumed executive leadership would follow naturally.',
        'The transition from hands-on engineer to executive technology leader requires unlearning many of the habits that made you a great engineer.',
        '### Key Mindset Shifts',
        '1. **From Solving Problems to Structuring Systems**: As an engineer, you take pride in fixing broken things. As an executive, your job is to build systems, processes, and teams so things do not break in the first place.',
        '2. **Translating Tech into Business Value**: Board members do not care about Kubernetes clusters or MPLS bandwidth latency. They care about revenue growth, risk mitigation, operational reliability, and margin expansion.',
        '3. **Empowering Over Micromanaging**: The hardest step for technical leaders is stepping back from the command line and trusting your team to execute while you clear organizational roadblocks.',
        '### Final Advice for Aspiring Leaders',
        'Develop your emotional intelligence (EQ) as rigorously as your technical certifications. Leadership is fundamentally about inspiring people to build great things together.'
      ]
    },
    {
      id: '4',
      slug: 'hybrid-cloud-pragmatism',
      title: 'Hybrid Cloud Pragmatism: Why the Best Architecture Is the One Your Business Can Absorb',
      category: 'Cloud',
      date: 'Mar 2, 2025',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/17489158/pexels-photo-17489158.jpeg?auto=compress&cs=tinysrgb&w=1600',
      excerpt: 'Cloud-first does not mean cloud-only. Lessons from migrating a multi-country manufacturing estate to hybrid cloud without breaking the business.',
      featured: false,
      content: [
        'The tech industry has spent the last decade preaching "full cloud migration." But for global enterprises operating manufacturing plants, physical logistics, or local compliance requirements, a 100% public cloud architecture is often impractical and cost-prohibitive.',
        '### The Case for Hybrid Cloud Pragmatism',
        'A pragmatic hybrid cloud model places workloads where they make the most operational and financial sense:',
        '- High-elasticity customer applications and analytics belong in AWS/Azure.',
        '- Low-latency manufacturing execution systems (MES) belong on local edge infrastructure.',
        '- Regulated data assets remain on governed private cloud infrastructure.',
        'By instituting unified FinOps monitoring and standardized management tools across all environments, you get the agility of the cloud without the cost surprises.'
      ]
    },
    {
      id: '5',
      slug: 'service-desk-ai-future',
      title: 'The AI-Augmented Service Desk: What Changes, What Does Not',
      category: 'AI',
      date: 'Feb 10, 2025',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1600',
      excerpt: 'GenAI will transform service desks — but not by replacing people. A practical view from someone who has run service desks for a decade.',
      featured: false,
      content: [
        'Pundits predict that AI will completely automate IT service desks by next year. Having managed IT operations across APAC for over 17 years, I can tell you that prediction misses how service desks actually operate.',
        'AI is incredible at tier-0 self-service, initial ticket triage, draft response generation, and KB article creation. But when a critical manufacturing plant network goes offline or an executive has a security compromise, human judgment, empathy, and rapid tactical leadership remain indispensable.',
        'The winning service desk model combines AI speed for routine tasks with skilled human engineering for complex problem solving.'
      ]
    },
    {
      id: '6',
      slug: 'automation-toil-elimination',
      title: 'Kill the Toil: A Leader\'s Guide to Meaningful IT Automation',
      category: 'Automation',
      date: 'Jan 18, 2025',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/8566470/pexels-photo-8566470.jpeg?auto=compress&cs=tinysrgb&w=1600',
      excerpt: 'Automation programs fail when they chase tools instead of toil. Here is how to find and eliminate the work that drains your teams.',
      featured: false,
      content: [
        'Toil is manual, repetitive, automatable work that scales linearly as your organization grows. It drains team morale, introduces human copy-paste errors, and distracts engineers from strategic projects.',
        '### How to Systematically Eliminate Toil',
        '1. Measure toil hours during sprint planning.',
        '2. Target high-frequency, low-variability tasks first (e.g., active directory provisioning, SSL certificate renewals, routine health check scripts).',
        '3. Treat internal automation scripts as first-class software products with version control and documentation.'
      ]
    }
  ],

  testimonials: [
    {
      id: '1',
      quote: 'Ashish combines deep technical mastery with genuine executive presence. He transformed our APAC service operations while keeping every stakeholder aligned — a rare combination.',
      author: 'Regional VP, Global Manufacturing',
      title: 'Global Manufacturing Enterprise',
      category: 'Leadership'
    },
    {
      id: '2',
      quote: 'The ITSM transformation Ashish led changed how our leadership sees IT. SLA performance went from a monthly argument to a dashboard we trust.',
      author: 'IT Director, Enterprise Client',
      title: 'Enterprise Technology Client',
      category: 'Client'
    },
    {
      id: '3',
      quote: 'As a mentor, Ashish shaped my career more than any course ever could. He teaches you to think like a leader, not just an engineer.',
      author: 'Senior Network Engineer',
      title: 'Mentee & Senior Engineer',
      category: 'Mentorship'
    },
    {
      id: '4',
      quote: 'His vendor governance framework brought discipline and transparency we did not think was possible with our partner ecosystem. Costs fell, quality rose.',
      author: 'Procurement Head, APAC',
      title: 'APAC Procurement Leadership',
      category: 'Peer'
    },
    {
      id: '5',
      quote: 'One of the best corporate trainers I have learned from — complex networking and ITIL concepts made simple, practical and memorable.',
      author: 'Training Program Participant',
      title: 'Corporate Training Attendee',
      category: 'Training'
    }
  ],

  resources: [
    {
      id: '1',
      title: 'Ashish Mishra — Executive CV / Resume (2026)',
      category: 'Executive Resume',
      description: 'Comprehensive 17+ years executive leadership summary detailing roles at The Woodbridge Group, Infosys, CompuCom, certifications, and major transformation results.',
      fileType: 'PDF Document',
      fileSize: '1.2 MB',
      downloadUrl: '/resources/Ashish_Mishra_Executive_Resume.pdf',
      previewUrl: 'https://images.pexels.com/photos/7580763/pexels-photo-7580763.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      id: '2',
      title: 'Enterprise AI Governance Checklist & Assessment Matrix',
      category: 'Framework & Playbook',
      description: 'A 25-point actionable framework for technology leaders to evaluate AI tool safety, data privacy perimeters, LLM security policy, and ROI readiness before deployment.',
      fileType: 'PDF / Spreadsheet',
      fileSize: '850 KB',
      downloadUrl: '/resources/AI_Governance_Checklist.pdf'
    },
    {
      id: '3',
      title: 'ITIL 4 Service Desk Modernization & Metric Template',
      category: 'ITSM Toolkit',
      description: 'Standardized SLA/OLA tracking dashboard template, priority escalation matrices, and root cause analysis (RCA) reporting guidelines built from enterprise rollouts.',
      fileType: 'Excel / PDF Template',
      fileSize: '2.1 MB',
      downloadUrl: '/resources/ITIL4_ServiceDesk_Toolkit.xlsx'
    },
    {
      id: '4',
      title: 'Executive Technology Presentation Deck (Modernizing IT Strategy)',
      category: 'Presentation Template',
      description: 'C-Suite ready slide deck framework for presenting IT transformation proposals, budget requests, and technology roadmaps to board members.',
      fileType: 'PowerPoint (PPTX)',
      fileSize: '4.5 MB',
      downloadUrl: '/resources/Executive_IT_Strategy_Deck.pptx'
    }
  ],

  experienceHistory: [
    {
      id: '1',
      company: 'The Woodbridge Group',
      role: 'Regional Technology Leader — APAC',
      period: '2020 – Present',
      location: 'Pune, India / APAC Operations',
      type: 'Full-time Executive Role',
      description: 'Leading regional enterprise technology operations, ITSM modernization, cloud strategy, infrastructure, vendor management, and AI adoption initiatives across 4 countries in the APAC region.',
      highlights: [
        'Elevated regional ITSM SLA compliance from 82% to 96% by standardizing ITIL 4 workflows and rolling out ServiceNow across all regional sites.',
        'Architected and executed hybrid cloud migrations resulting in 22% annual infrastructure operational cost savings.',
        'Established regional AI Strategy & Governance Board to evaluate and safely deploy high-impact GenAI tools for internal operations.',
        'Directly managing a cross-functional regional engineering and support team of 120+ technical professionals.'
      ],
      technologies: ['ServiceNow', 'ITIL 4', 'AWS', 'Hybrid Cloud', 'AI Governance', 'SD-WAN', 'Nutanix', 'Cybersecurity', 'Executive Leadership']
    },
    {
      id: '2',
      company: 'Infosys',
      role: 'Lead Technology Consultant & Architect',
      period: '2015 – 2020',
      location: 'Pune / International Client Operations',
      type: 'Full-time Senior Consulting',
      description: 'Provided strategic IT consulting, infrastructure architecture, and large-scale IT service management transformations for Fortune 500 enterprise clients in North America and APAC.',
      highlights: [
        'Led end-to-end ServiceNow ITSM and ITOM platform implementations for enterprise clients with 20,000+ end-users.',
        'Designed global network infrastructure modernizations and data center consolidation blueprints.',
        'Delivered corporate training workshops on advanced networking, PMP project management, and ITIL practices.'
      ],
      technologies: ['ServiceNow', 'Cisco Networking', 'PMP', 'ITIL v3/4', 'Enterprise Architecture', 'Vendor Negotiation']
    },
    {
      id: '3',
      company: 'CompuCom',
      role: 'Senior ITSM & Infrastructure Specialist',
      period: '2012 – 2015',
      location: 'India & APAC Support Hub',
      type: 'Full-time Senior Operations',
      description: 'Managed enterprise IT service desk operations, incident escalation management, and infrastructure support contracts for global enterprise accounts.',
      highlights: [
        'Reduced Tier-1 ticket escalation rate by 30% through comprehensive knowledge management overhaul.',
        'Managed major incident management (MIM) bridge calls for mission-critical client outages with sub-15-minute MTTR response times.'
      ],
      technologies: ['ITSM', 'Incident Management', 'CCNA', 'Helpdesk Operations', 'SLA Management']
    },
    {
      id: '4',
      company: 'Sakon',
      role: 'Senior Telecom & IT Operations Manager',
      period: '2008 – 2012',
      location: 'Pune, India',
      type: 'Full-time Operations Manager',
      description: 'Overseeing enterprise telecommunications expense management, core network routing and switching, and client infrastructure rollouts.',
      highlights: [
        'Built core network infrastructure monitoring systems handling high-density telecom traffic.',
        'Managed vendor partner SLA contracts with global telecom service providers.'
      ],
      technologies: ['Telecom Management', 'Network Engineering', 'CCNA', 'Vendor Relations']
    }
  ]
};
