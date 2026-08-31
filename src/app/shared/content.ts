import { Capability, Product, ResearchProject, Technology, Insight, CaseStudy } from './models';

export const CAPABILITIES: Capability[] = [
  { id: 'ai-eng', title: 'AI Engineering', description: 'Production AI systems — from training pipelines to inference at scale. Guardrails, evals, and observability built in.', pillar: 'engineering', icon: 'cpu', link: '/solutions/ai-engineering' },
  { id: 'data-intel', title: 'Data Intelligence', description: 'Structure raw data into knowledge. Lakehouse, streaming, and semantic layers that turn noise into decisions.', pillar: 'engineering', icon: 'database', link: '/solutions/data-intelligence' },
  { id: 'enterprise-eng', title: 'Enterprise Engineering', description: 'Resilient platforms for large organizations. Rust, Go, TypeScript and cloud-native at enterprise scale.', pillar: 'engineering', icon: 'layers', link: '/solutions/enterprise-engineering' },
  { id: 'tech-transform', title: 'Technology Transformation', description: 'Modernize without disruption. Legacy to cloud, monolith to modular — with zero-downtime migration.', pillar: 'engineering', icon: 'git-branch', link: '/solutions/technology-transformation' },
];

export const PRODUCTS: Product[] = [
  { id: 'financial-intel', title: 'Financial Intelligence', description: 'Real-time market intelligence, risk modelling and portfolio analytics powered by proprietary AI.', status: 'beta', features: ['Multi-asset signal engine', 'Risk & exposure analytics', 'Explainable predictions'], pillar: 'intelligence', link: '/products/financial-intelligence' },
  { id: 'enterprise-ai', title: 'Enterprise AI', description: 'Secure, private AI for your data. RAG, agents and copilots deployed inside your VPC.', status: 'in-development', features: ['Private LLM gateway', 'Knowledge copilot', 'Audit-ready governance'], pillar: 'intelligence', link: '/products/enterprise-ai' },
  { id: 'data-intel-prod', title: 'Data Intelligence', description: 'The data platform that thinks. Automated lineage, quality and semantic understanding.', status: 'research', features: ['Auto-lineage & catalog', 'Anomaly detection', 'Natural-language queries'], pillar: 'intelligence', link: '/products/future-products' },
];

export const RESEARCH: ResearchProject[] = [
  { id: 'ai-res', title: 'Artificial Intelligence', domain: 'Artificial Intelligence', status: 'research', summary: 'Foundation models, reasoning, and alignment — plus practical evaluation harnesses.', links: [{ label: 'QuantsMind SDK', href: '/labs/artificial-intelligence' }], pillar: 'labs' },
  { id: 'quantum', title: 'Quantum Computing', domain: 'Quantum Computing', status: 'experimental', summary: 'Algorithms, error correction and hybrid quantum-classical workflows.', links: [{ label: 'Quantum SDK', href: '/labs/quantum-computing' }], pillar: 'labs' },
  { id: 'comp-sys', title: 'Computational Systems', domain: 'Computational Systems', status: 'research', summary: 'Distributed systems, formal verification and high-performance runtimes.', links: [{ label: 'Karkain', href: '/labs/computational-systems' }], pillar: 'labs' },
  { id: 'prog-lang', title: 'Programming Languages', domain: 'Programming Languages', status: 'research', summary: 'Language design, compilers (LLVM/WASM) and developer tooling.', links: [{ label: 'Explore', href: '/labs/programming-languages' }], pillar: 'labs' },
  { id: 'exp', title: 'Experimental Projects', domain: 'Experimental', status: 'experimental', summary: 'Bold bets that may not ship — but move the frontier.', links: [{ label: 'View all', href: '/labs/experimental-projects' }], pillar: 'labs' },
];

export const TECHNOLOGIES: Technology[] = [
  { id: 'pytorch', name: 'PyTorch', category: 'ai', relevance: 'Training & inference' },
  { id: 'tensorflow', name: 'TensorFlow', category: 'ai', relevance: 'Production models' },
  { id: 'langchain', name: 'LangChain', category: 'ai', relevance: 'Agent orchestration' },
  { id: 'openai', name: 'OpenAI', category: 'ai', relevance: 'Foundation models' },
  { id: 'anthropic', name: 'Anthropic', category: 'ai', relevance: 'Reasoning & safety' },
  { id: 'spark', name: 'Apache Spark', category: 'data', relevance: 'Distributed compute' },
  { id: 'dbt', name: 'dbt', category: 'data', relevance: 'Transform layer' },
  { id: 'snowflake', name: 'Snowflake', category: 'data', relevance: 'Warehouse' },
  { id: 'kafka', name: 'Kafka', category: 'data', relevance: 'Streaming' },
  { id: 'airflow', name: 'Airflow', category: 'data', relevance: 'Orchestration' },
  { id: 'rust', name: 'Rust', category: 'software', relevance: 'Systems' },
  { id: 'go', name: 'Go', category: 'software', relevance: 'Services' },
  { id: 'ts', name: 'TypeScript', category: 'software', relevance: 'Frontend & APIs' },
  { id: 'python', name: 'Python', category: 'software', relevance: 'ML & automation' },
  { id: 'dotnet', name: '.NET', category: 'software', relevance: 'Enterprise' },
  { id: 'aws', name: 'AWS', category: 'cloud', relevance: 'Cloud' },
  { id: 'azure', name: 'Azure', category: 'cloud', relevance: 'Enterprise cloud' },
  { id: 'gcp', name: 'GCP', category: 'cloud', relevance: 'Data & AI' },
  { id: 'k8s', name: 'Kubernetes', category: 'cloud', relevance: 'Orchestration' },
  { id: 'terraform', name: 'Terraform', category: 'cloud', relevance: 'Infra as code' },
  { id: 'linux', name: 'Linux', category: 'systems', relevance: 'OS' },
  { id: 'wasm', name: 'WASM', category: 'systems', relevance: 'Runtime' },
  { id: 'llvm', name: 'LLVM', category: 'systems', relevance: 'Compilers' },
];

export const INSIGHTS: Insight[] = [
  { id: '1', title: 'Why most AI pilots never reach production', excerpt: 'Evaluation harnesses, guardrails and the boring engineering that makes AI reliable.', category: 'Artificial Intelligence', date: '2026-03-12', readTime: '6 min', imageRef: '/images/insights/ai.jpg', link: '/insights/artificial-intelligence' },
  { id: '2', title: 'Designing a lakehouse that answers questions', excerpt: 'From raw events to semantic layer — the architecture we use with clients.', category: 'Data', date: '2026-02-28', readTime: '8 min', imageRef: '/images/insights/data.jpg', link: '/insights/data' },
  { id: '3', title: 'Quantum error correction in plain English', excerpt: 'What NISQ means for engineering teams today — and what to build now.', category: 'Quantum', date: '2026-02-10', readTime: '7 min', imageRef: '/images/insights/quantum.jpg', link: '/insights/quantum' },
  { id: '4', title: 'Rust at the edge: WASM for regulated workloads', excerpt: 'How we use Rust + WASM for deterministic, auditable runtimes.', category: 'Engineering', date: '2026-01-18', readTime: '5 min', imageRef: '/images/insights/engineering.jpg', link: '/insights/engineering' },
  { id: '5', title: 'Research note — verifying distributed protocols', excerpt: 'Lightweight formal methods that caught a real bug before launch.', category: 'Research', date: '2026-01-05', readTime: '9 min', imageRef: '/images/insights/research.jpg', link: '/insights/research' },
  { id: '6', title: 'From documents to knowledge graphs', excerpt: 'Entity extraction that survives messy, real-world PDFs and scans.', category: 'Data', date: '2025-12-20', readTime: '6 min', imageRef: '/images/insights/data2.jpg', link: '/insights/data' },
];

export const CASE_STUDIES: CaseStudy[] = [
  { id: '1', title: 'Realtime risk engine for a trading desk', challenge: 'Legacy batch risk took hours; desk needed seconds.', outcome: 'Streaming engine with < 300ms p95; auditable lineage.', isPublic: false, pillar: 'engineering' },
  { id: '2', title: 'Private AI copilot for operations', challenge: '1.2M documents, zero external data leakage allowed.', outcome: 'VPC-deployed RAG with 94% helpful rate, SOC-2 aligned.', isPublic: false, pillar: 'intelligence' },
  { id: '3', title: 'Compiler toolchain for domain language', challenge: 'Domain experts needed safe, fast experimentation.', outcome: 'LLVM-backed DSL with WASM target; 40% faster iteration.', isPublic: false, pillar: 'labs' },
];

export const FEATURED_PRODUCT: Product = PRODUCTS[0];
