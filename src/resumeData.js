export const resumeData = {
  name: 'Jacob MacInnis',
  title: 'Director of Engineering | Cloud & AI',
  location: 'Rhode Island · Remote',
  pdf: '/files/Jacob_MacInnis_Cloud_AI.pdf',
  contacts: [
    { icon: 'fas fa-envelope', label: 'jacobmacinnis7@gmail.com', href: 'mailto:jacobmacinnis7@gmail.com' },
    { icon: 'fas fa-phone', label: '(508) 244-1362', href: 'tel:5082441362' },
    { icon: 'fab fa-linkedin-in', label: 'in/Jacob-MacInnis', href: 'https://www.linkedin.com/in/jacob-macinnis/' },
    { icon: 'fab fa-github', label: 'github.com/JacobMacInnis', href: 'https://github.com/JacobMacInnis' },
    { icon: 'fab fa-medium', label: 'medium.com/@jacobmacinnis', href: 'https://medium.com/@jacobmacinnis' },
    { icon: 'fas fa-globe', label: 'jacobmacinnis.com', href: 'https://www.jacobmacinnis.com' }
  ],

  summary: [
    'Hands-on engineering leader with 5+ years leading high-performing teams and architecting scalable, cloud-native distributed systems. Proven track record of fast, reliable shipping, optimizing engineering processes, driving major feature development, system migrations, and leading teams toward 100% test coverage improving system reliability and long-term velocity.',
    'Combines technical expertise with clear communication and strategic vision to drive innovation in remote-first environments. Known for leading by example, promoting collaboration, and fostering pragmatic, inclusive team cultures built on empathy and continuous improvement.',
    'Applied AI/ML experience across NLP, LLMs, classification, image recognition, RAG, and agentic workflows. Proficient with TensorFlow, PyTorch, LangChain, and LangGraph, with certifications from Stanford, DeepLearning.AI, Duke, and Google — combining theory with real-world delivery.'
  ],

  skills: [
    { label: 'Frontend', items: 'React, Redux, TypeScript, JavaScript' },
    { label: 'Backend', items: 'Node.js, Express.js, Python, FastAPI' },
    { label: 'Cloud', items: 'AWS, GCP, Azure, Serverless Framework, Cloud Run, Terraform' },
    { label: 'AI / ML', items: 'TensorFlow, PyTorch, LangChain, LangGraph, MCP, scikit-learn, Hugging Face' },
    { label: 'Data', items: 'Firestore, MongoDB, PostgreSQL, CouchDB, BigQuery, AWS S3' },
    { label: 'DevOps', items: 'Docker, CircleCI, Terraform, Dataflow, Pub/Sub' },
    { label: 'Leadership', items: 'Team management, coaching, mentorship, product vision, process optimization' }
  ],

  experience: [
    {
      role: 'Director of Engineering',
      company: 'OneView Commerce',
      location: 'Remote / Boston',
      start: '06/2022',
      end: 'Present',
      current: true,
      bullets: [
        'Implemented global-scale cloud architecture for 10,000+ stores across North America, Europe, and Australia, powering 1M+ daily transactions and hundreds of billions of dollars annually.',
        'Optimized deployment processes, cutting downtime from several days to 1–2 hours with a 99% success rate and saving hundreds of development hours per release.',
        'Engineered a serverless architecture on AWS and GCP with 400+ cloud functions handling billions of requests a month at 99.99% uptime, leveraging API Gateway, Firestore, SQS, SNS, and ECS.',
        'Directed the migration of legacy databases to Firestore, reducing production database issues from 20+ per week to fewer than 1 per quarter.',
        'Managed 3+ cross-functional teams (12+ engineers) across North America, Europe, and Australia, focusing on hiring, mentorship, performance management, and growth planning.',
        'Partnered with operations, engineering, and QA to redesign the CI/CD pipeline, streamlining code delivery into a more efficient, reliable process.',
        'Built scalable pipelines with Dataflow, Kotlin, Pub/Sub, and Firestore for reporting, analytics, and search in BigQuery.'
      ]
    },
    {
      role: 'Engineering Manager',
      company: 'OneView Commerce',
      location: 'Remote / Boston',
      start: '03/2021',
      end: '06/2022',
      bullets: [
        'Architected and led a globally deployed order and pick-pack app for major retailers across 3,500+ stores, with a cloud-native backend (AWS, GCP, Firestore) and React/Redux frontend enabling multi-billion dollar retailers to offer contactless shopping during the pandemic.',
        'Formulated a multicloud backend monorepo, creating a cloud-agnostic platform supporting AWS and Azure deployments while enabling future GCP support.',
        'Led two cross-functional teams, managing 10+ engineers across React, Node, TypeScript/JavaScript, and serverless architectures.',
        'Drove architectural enablement initiatives across 4 development teams (25 engineers), standardizing platform practices and accelerating knowledge transfer.',
        'Mentored engineers in system design, debugging, collaboration, and delivery best practices — sharpening technical skills, product understanding, and confidence under pressure.'
      ]
    },
    {
      role: 'Team Lead, Software Engineering',
      company: 'OneView Commerce',
      location: 'Remote / Boston',
      start: '07/2020',
      end: '03/2021',
      bullets: [
        'Led a scrum team building a fintech-adjacent headless SaaS app with a focus on innovation and fast iteration.',
        "Developed OneView's platform user management infrastructure serving 100,000+ users globally across multiple SaaS products, analogous to AWS IAM, using AWS Cognito user pools.",
        'Revamped dev team meetings with structured agendas and focused discussions, improving cross-team alignment for 25+ engineers across 5 scrum teams.',
        'Built scalable backend services with AWS Lambda, S3, API Gateway, and Firestore.',
        'Led peer code reviews and technical knowledge sharing, running lunch-and-learn sessions on software design patterns and best practices.'
      ]
    },
    {
      role: 'Full Stack Software Engineer',
      company: 'OneView Commerce',
      location: 'Remote / Boston',
      start: '08/2019',
      end: '07/2020',
      bullets: [
        'Built a cloud-agnostic integration layer adopted by hundreds of cloud functions, abstracting common service concepts into a unified codebase that dynamically maps to AWS, Azure, and future providers.',
        'Served on the cross-functional UI Tribe (product, design, engineering), providing direction on UI/UX feasibility and influencing product decisions with a technical lens.',
        'Assessed and fortified penetration test security measures, addressing vulnerabilities such as XSS and function-level access controls while improving API security key management.'
      ]
    },
    {
      role: 'Full Stack Engineer',
      company: 'Insight Global',
      location: 'Remote / Boston',
      start: '02/2019',
      end: '08/2019',
      bullets: [
        'Developed a curbside pickup solution for Kroger, facilitating online purchases for pickup at designated Kroger and Walgreens locations.',
        'Built SaaS and headless POS features, including barcode handling and mobile USB scanning.',
        'Translated business requirements into agile epics with sprint-sized, vertically sliced increments.'
      ]
    },
    {
      role: 'Architect & Full Stack Developer',
      company: 'Function Earth (self start-up)',
      location: 'Remote / Boston',
      start: '11/2018',
      end: '04/2019',
      bullets: [
        'Constructed cross-platform React Native mobile applications for both iOS and Android.',
        'Integrated JavaScript Node.js backend services with RESTful API endpoints and MongoDB.'
      ]
    },
    {
      role: 'Developer Apprentice',
      company: 'Thinkful',
      location: 'Remote / Boston',
      start: '05/2018',
      end: '11/2018',
      bullets: [
        'Deployed mobile-first responsive web applications using Node, Express RESTful APIs, React, Redux, and Postgres/Mongo databases.'
      ]
    },
    {
      role: 'Founder & President',
      company: 'E-Prime Sourcing',
      location: 'Salem, MA',
      start: '05/2015',
      end: '07/2018',
      bullets: [
        'Founded and scaled E-Prime Sourcing into a commercial warehouse, generating $1.29M+ in sales.',
        'Secured a $3M distribution deal and fulfilled 41K+ orders across Amazon, Walmart, and eBay.',
        'Built a Shopify site with 350+ products and listed 800+ SKUs across marketplaces.'
      ]
    }
  ],

  education: [
    {
      school: 'University of Colorado Boulder',
      credential: 'Master of Science, Artificial Intelligence',
      status: 'In progress',
      bullets: []
    },
    {
      school: 'Stanford',
      credential: 'Certificate, Machine Learning Specialization',
      bullets: [
        'Supervised/unsupervised/reinforcement learning, model evaluation, and tuning best practices.',
        'Neural networks, regression, clustering, and ML model optimization taught by Andrew Ng.'
      ]
    },
    {
      school: 'Duke',
      credential: 'Certificate, Managing Machine Learning Projects',
      bullets: [
        'Applied the CRISP-DM framework, managed the ML project lifecycle, and aligned teams for delivery.',
        'Assessed ML feasibility, managed data pipelines, and designed production monitoring strategies.'
      ]
    },
    {
      school: 'DeepLearning.AI',
      credential: 'Certificate, Machine Learning in Production',
      bullets: [
        'Deployment strategies, data drift detection, and model lifecycle management.',
        'Packaging ML models, setting up monitoring, and maintaining production pipelines.'
      ]
    },
    {
      school: 'Thinkful',
      credential: 'Certificate, Software Engineering',
      bullets: ['1,600 hours of intensive full-stack software engineering.']
    },
    {
      school: 'Eastern Nazarene College',
      credential: 'Bachelor of Arts, Child Psychology',
      bullets: []
    }
  ],

  projects: [
    {
      name: 'MCP App',
      description:
        'Explored MCP-style orchestration with LangChain and LangGraph, running side-by-side chatbots that compare a ReAct agent against a deterministic MCP pipeline to contrast autonomous vs. explicit tool orchestration.'
    },
    {
      name: 'R2AI',
      href: 'https://github.com/JacobMacInnis/r2ai',
      description:
        'A semi-autonomous code-refactoring agent built on LangGraph. Lints code with Ruff and refactors via LLMs (local Mistral through Ollama, or OpenAI) with human-in-the-loop feedback.'
    },
    {
      name: 'Agent Cortex',
      href: 'https://github.com/JacobMacInnis/agent_cortex_v2',
      description:
        'A local multi-tool agent (LangChain + Mistral 7B) featuring retrieval-augmented search, short and long-term memory via FAISS, web search, calculator, and Python code execution tools.'
    },
    {
      name: 'RAG API',
      href: 'https://github.com/JacobMacInnis/rag-api',
      description:
        'FastAPI backend using SentenceTransformers, FAISS, and FLAN-T5 for retrieval-augmented question answering, supporting dense retrieval, reranking, and RAG Fusion modes.'
    },
    {
      name: 'Summit Mind',
      href: 'https://summit-mind-55f22.web.app/',
      description:
        'Fine-tuned T5 models to summarize multi-turn conversations. Built with Python/PyTorch and FastAPI, containerized with Docker and deployed on Cloud Run.'
    },
    {
      name: 'Folia Vision',
      href: 'https://agricultural-leaf-vision-7fab2.web.app/',
      description:
        'A lightweight computer vision API classifying plant species and diseases from leaf images, using transfer learning with TensorFlow/Keras and EfficientNet on the PlantVillage dataset, served on Cloud Run.'
    },
    {
      name: 'Career Compass',
      href: 'https://github.com/JacobMacInnis/career-compass',
      description:
        'Production-grade binary classifier predicting employment status from profile data. Built with TensorFlow/Keras, exposed via FastAPI, and backed by PostgreSQL on Cloud Run.'
    }
  ]
};
