export const STATS = [
  { value: '50K+', label: 'Jobs Posted Daily' },
  { value: '98%', label: 'Accuracy Rate' },
  { value: '2M+', label: 'Active Users' },
  { value: '15s', label: 'Avg Match Time' },
];

export const FEATURES = [
  {
    icon: 'Zap',
    title: 'AI-Powered Matching',
    description: 'Advanced algorithms match your skills to perfect opportunities in seconds.',
  },
  {
    icon: 'Target',
    title: 'Personalized Scores',
    description: 'Get detailed match scores showing how well each job aligns with your profile.',
  },
  {
    icon: 'Bell',
    title: 'Smart Alerts',
    description: 'Receive instant notifications when jobs matching your criteria appear.',
  },
  {
    icon: 'TrendingUp',
    title: 'Career Insights',
    description: 'Explore salary trends, in-demand skills, and growth opportunities.',
  },
  {
    icon: 'Briefcase',
    title: 'Job Insights',
    description: 'Deep dive into company culture, salary ranges, and role requirements.',
  },
  {
    icon: 'Users',
    title: 'Community Network',
    description: 'Connect with peers, get referrals, and build your professional network.',
  },
];

export const JOB_EXAMPLES = [
  {
    id: 1,
    title: 'Senior Security Engineer',
    company: 'Google Cloud',
    location: 'Mountain View, CA',
    salary: '$280K - $320K',
    match: 92,
    tags: ['Security', 'Cloud', 'Leadership'],
    description: 'Lead security initiatives across Google Cloud infrastructure.',
  },
  {
    id: 2,
    title: 'Staff Backend Engineer',
    company: 'Meta',
    location: 'Menlo Park, CA',
    salary: '$250K - $300K',
    match: 88,
    tags: ['Backend', 'Distributed Systems', 'Scala'],
    description: 'Build scalable backend systems for billions of users.',
  },
  {
    id: 3,
    title: 'DevOps Architect',
    company: 'AWS',
    location: 'Seattle, WA',
    salary: '$220K - $270K',
    match: 85,
    tags: ['DevOps', 'Kubernetes', 'AWS'],
    description: 'Design and implement cloud infrastructure at scale.',
  },
  {
    id: 4,
    title: 'Full Stack Engineer',
    company: 'Stripe',
    location: 'San Francisco, CA',
    salary: '$240K - $290K',
    match: 87,
    tags: ['React', 'Node.js', 'API Design'],
    description: 'Build payment infrastructure and developer tools.',
  },
  {
    id: 5,
    title: 'ML Engineer',
    company: 'OpenAI',
    location: 'San Francisco, CA',
    salary: '$300K - $350K',
    match: 95,
    tags: ['Machine Learning', 'PyTorch', 'LLMs'],
    description: 'Develop cutting-edge AI models and systems.',
  },
  {
    id: 6,
    title: 'Product Engineer',
    company: 'Linear',
    location: 'Remote',
    salary: '$200K - $250K',
    match: 89,
    tags: ['React', 'TypeScript', 'Product'],
    description: 'Build the future of issue tracking and project management.',
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Alex Chen',
    role: 'Senior Engineer at Microsoft',
    company: 'Microsoft',
    avatar: '👨‍💼',
    text: 'Job Digest found me my dream role in just 2 weeks. The match accuracy is incredible!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Williams',
    role: 'Product Manager at Apple',
    company: 'Apple',
    avatar: '👩‍💼',
    text: 'The insights about company culture were game-changing. Helped me make the right decision.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Marcus Johnson',
    role: 'Staff Engineer at Netflix',
    company: 'Netflix',
    avatar: '👨‍💼',
    text: 'Never thought I\'d find a role that perfectly matched my expertise. Thank you!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Emily Rodriguez',
    role: 'Design Lead at Adobe',
    company: 'Adobe',
    avatar: '👩‍💼',
    text: 'The job matching algorithm is ridiculously accurate. Saved me months of searching.',
    rating: 5,
  },
];

export const FAQ = [
  {
    id: 1,
    question: 'How does Job Digest match jobs to my profile?',
    answer: 'Our AI analyzes your skills, experience, preferences, and career goals to find the best-matching opportunities. We use advanced NLP and machine learning models trained on millions of job placements to ensure accuracy.',
  },
  {
    id: 2,
    question: 'Is Job Digest completely free?',
    answer: 'Yes! The Basic plan is completely free with unlimited job searches and matches. We also offer Premium plans with additional features like career coaching and advanced insights.',
  },
  {
    id: 3,
    question: 'Can I get a refund if I\'m not satisfied?',
    answer: 'Absolutely. We offer a 30-day money-back guarantee on all Premium plans. No questions asked. Your satisfaction is our priority.',
  },
  {
    id: 4,
    question: 'How often is the job database updated?',
    answer: 'Our database is updated in real-time, with new jobs added every minute. We aggregate positions from 500+ job boards and company career pages.',
  },
  {
    id: 5,
    question: 'Do you share my data with recruiters?',
    answer: 'Never. Your profile and preferences are completely private. We only share information when you explicitly apply to a job or opt-in to recruiter visibility.',
  },
  {
    id: 6,
    question: 'What if I want to pause my account?',
    answer: 'You can pause or cancel anytime from your account settings. No penalties, no long-term commitments. Restart whenever you\'re ready.',
  },
];

export const PRICING = [
  {
    id: 1,
    name: 'Free',
    price: '$0',
    period: 'Forever',
    description: 'Perfect for getting started',
    features: [
      'Unlimited job searches',
      'Daily job matches',
      'Basic insights',
      'Email alerts',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    id: 2,
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For serious job seekers',
    features: [
      'Everything in Free',
      'Advanced salary insights',
      'Company culture scores',
      'Career coaching',
      'Priority support',
      'API access',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    id: 3,
    name: 'Enterprise',
    price: 'Custom',
    period: 'Contact us',
    description: 'For organizations & teams',
    features: [
      'Everything in Pro',
      'Bulk user management',
      'Custom integrations',
      'Dedicated support',
      'White-label option',
      'Advanced analytics',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];
