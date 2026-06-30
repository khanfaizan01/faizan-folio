export const personal = {
  name: 'Mohd Faizan Khan',
  initials: 'FK',
  title: 'Lead Software Engineer',
  taglines: [
    'Lead Software Engineer',
    'Solution Architect',
    'System Design Expert',
    'Backend Platform Builder',
    'Enterprise Scale Engineer',
  ],
  location: 'Gurugram, Haryana, India',
  email: 'khanfaizan1196@gmail.com',
  linkedin: 'https://www.linkedin.com/in/faizan~khan',
  summary:
    '7+ years of demonstrated expertise architecting and engineering enterprise-scale platforms across pharma, telecom, and IT domains. Specializing in distributed systems, microservices architecture, and solution design — I bridge strategic thinking with hands-on execution, building products from scratch to production and scaling them for multi-client adoption.',
  shortBio:
    'Lead Software Engineer at ZS Associates | Solution Architect | System Design Enthusiast',
};

export const stats = [
  { value: 7, suffix: '+', label: 'Years Experience' },
  { value: 5, suffix: '', label: 'Products Built' },
  { value: 4, suffix: '', label: 'Companies' },
  { value: 3, suffix: '', label: 'Industry Domains' },
];

export const experience = [
  {
    id: 'zs-lead',
    company: 'ZS',
    companyFull: 'ZS Associates',
    role: 'Lead Software Engineer',
    period: 'July 2025 – Present',
    duration: '1 year',
    location: 'Gurugram, Haryana, India',
    accentColor: '#00B4FF',
    description:
      'Leading architecture decisions and engineering execution for ZAIDYN, an AI-powered life sciences commercial platform. Driving system design for territory optimization and incentive compensation at scale, mentoring engineers, and owning end-to-end solution solutioning for enterprise pharma clients.',
    highlights: [
      'Architected multi-tenant platform design for pharma enterprise clients',
      'Led engineering pods across feature development and platform reliability',
      'Drove performance optimization and security hardening for production systems',
      'Owned solution architecture and client-facing technical solutioning',
    ],
    techStack: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Python', 'AWS'],
  },
  {
    id: 'zs-senior',
    company: 'ZS',
    companyFull: 'ZS Associates',
    role: 'Senior Software Engineer',
    period: 'October 2022 – June 2025',
    duration: '2 years 9 months',
    location: 'Gurugram, Haryana, India',
    accentColor: '#00B4FF',
    description:
      'Built and stabilized the ZAIDYN Application Studio (ZAS) — a low-code platform enabling pharma teams to compose data-driven applications. Onboarded first clients, scaled to multi-client adoption, and delivered feature solutioning across the product lifecycle.',
    highlights: [
      'Built the stable foundation of the ZAS product from ground up',
      'Onboarded the first enterprise client on the ZAS platform',
      'Engineered architectural workflows for multi-client isolation and scalability',
      'Led performance improvements, security mitigations, and product design',
    ],
    techStack: ['Python', 'Flask', 'Angular', 'PostgreSQL', 'AWS Lambda', 'Docker'],
  },
  {
    id: 'amdocs',
    company: 'Amdocs',
    companyFull: 'Amdocs',
    role: 'Software Developer',
    period: 'July 2021 – October 2022',
    duration: '1 year 4 months',
    location: 'Pune, Maharashtra, India',
    accentColor: '#00E5CC',
    description:
      'Contributed to the Real-Time Billing platform — a cloud-native, AI-powered billing engine replacing batch processing for global communications service providers. Developed features and introduced common architectural workflows to support multiple CSP client adoption.',
    highlights: [
      'Developed core billing engine features and real-time charge calculation flows',
      'Introduced common architectural hooks to support multi-client CSP onboarding',
      'Worked across distributed microservices in a Kubernetes-native environment',
      'Enabled real-time anomaly detection flows within the billing pipeline',
    ],
    techStack: ['Java', 'Spring Boot', 'Couchbase', 'Kubernetes', 'Microservices', 'Docker'],
  },
  {
    id: 'infosys-senior',
    company: 'Infosys',
    companyFull: 'Infosys Limited',
    role: 'Senior System Engineer',
    period: 'October 2020 – June 2021',
    duration: '9 months',
    location: 'Chandigarh, India',
    accentColor: '#00B4FF',
    description:
      'Enhanced InTAP (Infosys Talent Acquisition Platform) with new capabilities and led the productization of common services adopted by multiple Infosys development teams across different products.',
    highlights: [
      'Extended InTAP with advanced recruiter features at Infosys scale',
      'Built reusable common services adopted org-wide by multiple product teams',
      'Worked on on-premise server integration and system reliability',
    ],
    techStack: ['Java', 'Spring Boot', 'Angular', 'On-Premise', 'REST APIs'],
  },
  {
    id: 'infosys-engineer',
    company: 'Infosys',
    companyFull: 'Infosys Limited',
    role: 'System Engineer',
    period: 'September 2018 – September 2020',
    duration: '2 years 1 month',
    location: 'Chandigarh, India',
    accentColor: '#00B4FF',
    description:
      'Laid the foundation for InTAP — the Infosys Talent Acquisition Platform — taking it from concept to production. Built the platform architecture, core services, and delivered a recruiter-facing product designed for Infosys-scale search and speed.',
    highlights: [
      'Built InTAP from scratch to production, owning the full engineering lifecycle',
      'Designed the core platform architecture for scale and search performance',
      'Created foundational services enabling rapid feature development',
    ],
    techStack: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'REST APIs'],
  },
];

export const projects = [
  {
    id: 'zas',
    name: 'ZAS — Zaidyn Application Studio',
    company: 'ZS Associates',
    domain: 'Pharma Tech / Low-Code',
    accentColor: '#00B4FF',
    tagColor: 'cobalt',
    description:
      'A low-code studio that lets pharma teams compose data-driven applications without rebuilding the wheel. Built the stable product foundation, onboarded the first enterprise client, and scaled to multi-client adoption. Covers performance improvement, security mitigations, feature solutioning, and product design.',
    role: 'Platform Engineer & Product Designer',
    highlights: [
      'Engineered foundational platform architecture',
      'First client onboarding and production deployment',
      'Multi-client scaling with tenant isolation',
      'Security hardening and performance optimization',
    ],
    techStack: [
      { name: 'Python', icon: 'devicon-python-plain', color: '#3776AB' },
      { name: 'Flask', icon: 'devicon-flask-original', color: '#E0E0E0' },
      { name: 'Angular', icon: 'devicon-angularjs-plain', color: '#DD0031' },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain', color: '#4169E1' },
      { name: 'AWS Lambda', icon: 'devicon-amazonwebservices-plain', color: '#FF9900' },
    ],
  },
  {
    id: 'zaidyn',
    name: 'ZAIDYN Field Deployment',
    company: 'ZS Associates',
    domain: 'Life Sciences / AI Platform',
    accentColor: '#00E5CC',
    tagColor: 'mint',
    description:
      'An AI-powered life sciences commercial platform bridging strategy and execution. Enables pharma and biotech companies to continuously optimize sales territories, align resources, manage incentive compensation, and execute real-time call planning through intelligent, data-driven workflows.',
    role: 'Lead Engineer & Solution Architect',
    highlights: [
      'Territory optimization and resource alignment at enterprise scale',
      'Incentive compensation management workflows',
      'Real-time call planning with AI-driven decisioning',
      'Multi-client pharma enterprise deployment',
    ],
    techStack: [
      { name: 'Java', icon: 'devicon-java-plain', color: '#007396' },
      { name: 'Spring Boot', icon: 'devicon-spring-plain', color: '#6DB33F' },
      { name: 'Angular', icon: 'devicon-angularjs-plain', color: '#DD0031' },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain', color: '#4169E1' },
    ],
  },
  {
    id: 'rtb',
    name: 'RTB — Real Time Billing',
    company: 'Amdocs',
    domain: 'Telecom / Cloud-Native',
    accentColor: '#00B4FF',
    tagColor: 'cobalt',
    description:
      'An AI-powered, cloud-native billing solution shifting communications service providers away from traditional batch processing. Instantly calculates charges for any transaction type, enabling proactive operations like real-time anomaly detection and AI-guided resolution to shorten time-to-cash.',
    role: 'Software Developer',
    highlights: [
      'Feature development in distributed billing microservices',
      'Common architectural workflow patterns for multi-CSP adoption',
      'Real-time anomaly detection pipeline integration',
      'Kubernetes-native service deployment and operations',
    ],
    techStack: [
      { name: 'Java', icon: 'devicon-java-plain', color: '#007396' },
      { name: 'Spring Boot', icon: 'devicon-spring-plain', color: '#6DB33F' },
      { name: 'Couchbase', icon: 'devicon-couchbase-plain', color: '#EA2328' },
      { name: 'Kubernetes', icon: 'devicon-kubernetes-plain', color: '#326CE5' },
      { name: 'Docker', icon: 'devicon-docker-plain', color: '#2496ED' },
    ],
  },
  {
    id: 'intap',
    name: 'InTAP — Talent Acquisition Platform',
    company: 'Infosys',
    domain: 'HR Tech / Enterprise',
    accentColor: '#00E5CC',
    tagColor: 'mint',
    description:
      'Talent Acquisition Platform serving recruiters across Infosys — built for scale, search, and speed. Owned the full product lifecycle from foundation to production. Built common reusable services adopted by multiple Infosys development teams across different products.',
    role: 'System Engineer to Senior Engineer',
    highlights: [
      'End-to-end product ownership from zero to production',
      'Platform architecture for enterprise recruiter workflows',
      'Common services library adopted org-wide at Infosys',
      'On-premise server integration and system reliability',
    ],
    techStack: [
      { name: 'Java', icon: 'devicon-java-plain', color: '#007396' },
      { name: 'Spring Boot', icon: 'devicon-spring-plain', color: '#6DB33F' },
      { name: 'Angular', icon: 'devicon-angularjs-plain', color: '#DD0031' },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain', color: '#4169E1' },
    ],
  },
  {
    id: 'jantacart',
    name: 'JantaCart',
    company: 'Personal Project',
    domain: 'E-Commerce / Full Stack',
    accentColor: '#00B4FF',
    tagColor: 'cobalt',
    description:
      'An e-commerce concept exploring catalog, cart, and checkout flows end-to-end. Owned the complete product development lifecycle — from architecture and design through development and deployment — on both web and mobile platforms.',
    role: 'Product Owner & Full Stack Developer',
    highlights: [
      'End-to-end product ownership from concept to launch',
      'Full catalog, cart, and checkout implementation',
      'Web and mobile platform coverage',
      'Complete SDLC experience in a solo product context',
    ],
    techStack: [
      { name: 'Java', icon: 'devicon-java-plain', color: '#007396' },
      { name: 'Spring Boot', icon: 'devicon-spring-plain', color: '#6DB33F' },
      { name: 'Angular', icon: 'devicon-angularjs-plain', color: '#DD0031' },
      { name: 'Android', icon: 'devicon-android-plain', color: '#3DDC84' },
    ],
  },
];

export const skills = {
  backend: [
    { name: 'Java', icon: 'devicon-java-plain', color: '#007396', level: 95 },
    { name: 'Spring Boot', icon: 'devicon-spring-plain', color: '#6DB33F', level: 93 },
    { name: 'Python', icon: 'devicon-python-plain', color: '#3776AB', level: 82 },
    { name: 'Flask', icon: 'devicon-flask-original', color: '#E0E0E0', level: 78 },
    { name: 'REST APIs', icon: 'devicon-swagger-plain', color: '#85EA2D', level: 95 },
    { name: 'JPA/Hibernate', icon: 'devicon-java-plain', color: '#007396', level: 85 },
  ],
  frontend: [
    { name: 'Angular', icon: 'devicon-angularjs-plain', color: '#DD0031', level: 80 },
    { name: 'TypeScript', icon: 'devicon-typescript-plain', color: '#3178C6', level: 78 },
    { name: 'HTML5', icon: 'devicon-html5-plain', color: '#E34F26', level: 75 },
    { name: 'CSS3', icon: 'devicon-css3-plain', color: '#1572B6', level: 72 },
  ],
  databases: [
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain', color: '#4169E1', level: 88 },
    { name: 'Oracle SQL', icon: 'devicon-oracle-original', color: '#F80000', level: 80 },
    { name: 'Couchbase', icon: 'devicon-couchbase-plain', color: '#EA2328', level: 72 },
  ],
  devops: [
    { name: 'Kubernetes', icon: 'devicon-kubernetes-plain', color: '#326CE5', level: 75 },
    { name: 'Docker', icon: 'devicon-docker-plain', color: '#2496ED', level: 78 },
    { name: 'AWS Lambda', icon: 'devicon-amazonwebservices-plain', color: '#FF9900', level: 72 },
    { name: 'Git', icon: 'devicon-git-plain', color: '#F05032', level: 90 },
    { name: 'Linux', icon: 'devicon-linux-plain', color: '#FCC624', level: 80 },
  ],
};

export const architecture = [
  {
    icon: 'layers',
    title: 'Microservices Architecture',
    description: 'Designing decoupled, independently deployable services with well-defined contracts and bounded contexts for enterprise-scale systems.',
    accent: '#00B4FF',
  },
  {
    icon: 'git-branch',
    title: 'Distributed Systems',
    description: 'Building fault-tolerant, highly available distributed systems with event-driven communication, CQRS, and eventual consistency patterns.',
    accent: '#00E5CC',
  },
  {
    icon: 'shield',
    title: 'API Design & Governance',
    description: 'Crafting RESTful APIs with versioning, rate limiting, and security-first thinking — from contract definition to production hardening.',
    accent: '#00B4FF',
  },
  {
    icon: 'zap',
    title: 'Performance Engineering',
    description: 'Systematic performance profiling, query optimization, caching strategies, and throughput improvements in high-load enterprise environments.',
    accent: '#00E5CC',
  },
  {
    icon: 'cloud',
    title: 'Cloud-Native Patterns',
    description: 'Leveraging Kubernetes, serverless functions, and cloud-native design patterns to build scalable, operationally excellent platforms.',
    accent: '#00B4FF',
  },
  {
    icon: 'users',
    title: 'Multi-Tenant Platforms',
    description: 'Engineering tenant isolation, configuration management, and onboarding workflows for SaaS platforms serving multiple enterprise clients.',
    accent: '#00E5CC',
  },
  {
    icon: 'lock',
    title: 'Security Hardening',
    description: 'Implementing authentication, authorization, input validation, secrets management, and OWASP-compliant security patterns across the stack.',
    accent: '#00B4FF',
  },
  {
    icon: 'box',
    title: 'Product Solutioning',
    description: 'Translating business requirements into technical architecture — bridging the gap between product strategy and engineering execution.',
    accent: '#00E5CC',
  },
];

export const education = [
  {
    institution: 'Bundelkhand University, Jhansi',
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science and Engineering',
    period: '2014 – 2018',
    type: 'university',
  },
  {
    institution: 'Kendriya Vidyalaya No. 2, Jhansi',
    degree: 'Senior Secondary',
    field: 'Science',
    period: '2013 – 2014',
    type: 'school',
  },
  {
    institution: 'Kendriya Vidyalaya No. 2, Jhansi',
    degree: 'Higher Secondary',
    field: 'Science',
    period: '2011 – 2012',
    type: 'school',
  },
];
