export const STATS = [
  { value: '50K+', label: 'Jobs Posted Daily' },
  { value: '98%', label: 'Accuracy Rate' },
  { value: '2M+', label: 'Active Users' },
  { value: '15s', label: 'Avg Match Time' },
];

export const FEATURES = [
  { icon: 'Zap', title: 'AI-Powered Matching', description: 'Advanced algorithms match your skills to perfect opportunities in seconds.' },
  { icon: 'Target', title: 'Personalized Scores', description: 'Get detailed match scores showing how well each job aligns with your profile.' },
  { icon: 'Bell', title: 'Smart Alerts', description: 'Receive instant notifications when high-match jobs appear.' },
  { icon: 'TrendingUp', title: 'Career Insights', description: 'Explore salary trends, in-demand skills, and growth opportunities.' },
  { icon: 'Briefcase', title: 'Job Intelligence', description: 'Deep dive into company culture, salary ranges, and role requirements.' },
  { icon: 'Users', title: 'Community Network', description: 'Connect with peers, get referrals, and build your professional network.' },
];

export const JOB_EXAMPLES = [
  { id: 1, title: 'Senior Security Engineer', company: 'Siemens BSW', location: 'Berlin, Germany', salary: '€95K–€130K', match: 92, tags: ['Security', 'Cloud', 'Leadership', 'Remote'], description: 'Lead security initiatives across cloud infrastructure protecting millions of users.' },
  { id: 2, title: 'Staff Backend Engineer', company: 'Brightly Software', location: 'Amsterdam, NL', salary: '$150K–$200K', match: 88, tags: ['Backend', 'Microservices', 'EKS', 'Full-time'], description: 'Design and scale microservices architecture for enterprise SaaS platform.' },
  { id: 3, title: 'DevOps Architect', company: 'AWS Europe', location: 'Frankfurt, Germany', salary: '€85K–€120K', match: 85, tags: ['DevOps', 'Kubernetes', 'CI/CD', 'Remote'], description: 'Manage EKS clusters and CI/CD pipelines for high-traffic cloud apps.' },
  { id: 4, title: 'Full Stack Engineer', company: 'European Startup', location: 'Vienna, Austria', salary: '€80K–€110K', match: 87, tags: ['React', 'Node.js', 'Remote', 'Startup'], description: 'Build modern SaaS platform with React and Node for growing B2B customer base.' },
  { id: 5, title: 'Machine Learning Engineer', company: 'DeepSeek Research', location: 'Remote (EU)', salary: '€110K–€150K', match: 95, tags: ['ML', 'Python', 'AI', 'Research'], description: 'Develop AI models for job matching using cutting-edge NLP techniques.' },
  { id: 6, title: 'Cloud Security Engineer', company: 'N26 Bank', location: 'Berlin, Germany', salary: '€90K–€125K', match: 89, tags: ['Security', 'AWS', 'FinTech', 'Remote'], description: 'Protect financial infrastructure and customer data across cloud environments.' },
];

export const TESTIMONIALS = [
  { id: 1, avatar: '👩‍💼', name: 'Sarah Chen', role: 'Engineering Manager @ Siemens', rating: 5, text: 'Found my dream role in just 2 weeks. The AI matching was scary accurate.' },
  { id: 2, avatar: '👨‍💻', name: 'Marcus Mueller', role: 'Senior DevOps @ Brightly', rating: 5, text: 'Saved 30+ hours of manual searching. The auto cover letters were incredible.' },
  { id: 3, avatar: '👩‍🔬', name: 'Alessia Rossi', role: 'Tech Recruiter', rating: 5, text: 'Candidates using Job Digest are way more prepared. Game-changing tool.' },
  { id: 4, avatar: '👨‍🚀', name: 'Alex Kim', role: 'ML Engineer @ DeepSeek', rating: 5, text: '95% match score and it was right. Got the offer. This is the future.' },
];

export const FAQ = [
  { question: 'How does Job Digest find jobs?', answer: 'Job Digest scrapes 50+ boards in real-time then uses AI to score each role against your profile with up to 98% accuracy.' },
  { question: 'Is my data safe?', answer: 'Yes. Data is stored locally and encrypted. We never sell your data. Fully GDPR compliant.' },
  { question: 'How accurate is the matching?', answer: 'Our AI achieves 98% accuracy analyzing skills, experience, location preferences, and salary expectations simultaneously.' },
  { question: 'Does it work outside Europe?', answer: 'Yes! Job Digest supports 50+ countries including EU, US, UK, Canada, and Australia.' },
  { question: 'How fast are cover letters generated?', answer: 'Usually 10-30 seconds. Each letter is uniquely tailored to the specific job and company.' },
  { question: 'What notification options exist?', answer: 'Email, Telegram, or WhatsApp. Set minimum match thresholds so you only get notified about truly relevant roles.' },
];

export const PRICING = [
  { id: 1, name: 'Free', price: '$0', period: '', description: 'Perfect for getting started', highlighted: false, features: ['10 jobs/week', 'Basic AI matching', 'Email notifications', 'Community support'], cta: 'Get Started Free' },
  { id: 2, name: 'Pro', price: '$29', period: '/month', description: 'For serious job seekers', highlighted: true, features: ['Unlimited job scans', 'Advanced AI scoring', 'Auto cover letters', 'Multi-channel alerts', 'LinkedIn integration', 'Priority support'], cta: 'Start Free Trial' },
  { id: 3, name: 'Enterprise', price: 'Custom', period: '', description: 'For teams and recruiters', highlighted: false, features: ['Team collaboration', 'Recruiter dashboard', 'Custom API access', 'Advanced analytics', 'Dedicated account manager'], cta: 'Contact Sales' },
];
