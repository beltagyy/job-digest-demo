'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Bell, TrendingUp, Briefcase, Users, ChevronDown, Star, ArrowRight, Menu, X } from 'lucide-react';
import { STATS, FEATURES, JOB_EXAMPLES, TESTIMONIALS, FAQ, PRICING } from '@/lib/constants';

function ParticleBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="g1" cx="20%" cy="30%">
            <stop offset="0%" stopColor="rgba(16,185,129,0.2)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <radialGradient id="g2" cx="80%" cy="70%">
            <stop offset="0%" stopColor="rgba(16,185,129,0.12)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <ellipse cx="200" cy="250" rx="400" ry="350" fill="url(#g1)" />
        <ellipse cx="1000" cy="600" rx="450" ry="380" fill="url(#g2)" />
      </svg>
    </div>
  );
}

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full bg-black/80 backdrop-blur-xl border-b border-emerald-500/20 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold gradient-text cursor-pointer">
            Job Digest
          </motion.div>
          <div className="hidden md:flex gap-8 items-center">
            {['Features', 'Jobs', 'Pricing', 'FAQ'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ color: '#10b981' }}
                className="text-gray-300 hover:text-emerald-400 transition-colors text-sm font-medium"
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-emerald-500 text-black rounded-lg font-semibold hover:bg-emerald-400 transition-colors text-sm"
            >
              Get Started
            </motion.button>
          </div>
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden pb-4 pt-3 space-y-3 border-t border-emerald-500/20"
          >
            {['Features', 'Jobs', 'Pricing', 'FAQ'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-gray-300 hover:text-emerald-400 transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="w-full py-2 bg-emerald-500 text-black rounded-lg font-semibold">Get Started</button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

function FeatureCard({ feature, index }: { feature: any; index: number }) {
  const Icons: Record<string, any> = { Zap, Target, Bell, TrendingUp, Briefcase, Users };
  const Icon = Icons[feature.icon];
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="glass p-6 rounded-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all"
    >
      <div className="w-12 h-12 bg-emerald-500/15 rounded-xl flex items-center justify-center mb-4 border border-emerald-500/20">
        {Icon && <Icon className="w-6 h-6 text-emerald-400" />}
      </div>
      <h3 className="text-base font-semibold mb-2 text-white">{feature.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
    </motion.div>
  );
}

function JobCard({ job, index }: { job: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="glass p-6 rounded-xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all group"
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1 min-w-0 pr-3">
          <h3 className="font-semibold group-hover:text-emerald-400 transition-colors">{job.title}</h3>
          <p className="text-gray-400 text-sm">{job.company} · {job.location}</p>
        </div>
        <div className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm font-bold rounded-full shrink-0 border border-emerald-500/30">
          {job.match}%
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {job.tags?.map((tag: string, i: number) => (
          <span key={i} className="px-2 py-0.5 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700">{tag}</span>
        ))}
      </div>
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">{job.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-emerald-400 font-semibold text-sm">{job.salary}</span>
        <motion.span whileHover={{ x: 4 }} className="text-emerald-400 text-sm flex items-center gap-1 cursor-pointer">
          View <ArrowRight size={14} />
        </motion.span>
      </div>
    </motion.div>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass p-6 rounded-xl border border-emerald-500/20 flex flex-col"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={13} className="fill-emerald-400 text-emerald-400" />)}
      </div>
      <p className="text-gray-300 text-sm italic leading-relaxed mb-5 flex-1">&ldquo;{testimonial.text}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="text-2xl">{testimonial.avatar}</div>
        <div>
          <p className="font-semibold text-sm text-white">{testimonial.name}</p>
          <p className="text-gray-400 text-xs">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}

function FAQItem({ item, isOpen, onToggle }: { item: any; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-white/10">
      <button onClick={onToggle} className="w-full py-5 flex justify-between items-center text-left hover:text-emerald-400 transition-colors">
        <span className="font-medium text-sm md:text-base pr-4">{item.question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }} className="shrink-0">
          <ChevronDown size={18} className="text-emerald-400" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-gray-400 text-sm leading-relaxed">{item.answer}</p>
      </motion.div>
    </div>
  );
}

function PricingCard({ pricing, index }: { pricing: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      viewport={{ once: true }}
      className={`rounded-xl p-8 border transition-all flex flex-col ${
        pricing.highlighted
          ? 'glass border-emerald-500 ring-2 ring-emerald-500/30 scale-105 z-10'
          : 'glass border-emerald-500/20'
      }`}
    >
      {pricing.highlighted && <div className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">Most Popular</div>}
      <h3 className="text-2xl font-bold mb-1">{pricing.name}</h3>
      <p className="text-gray-400 text-sm mb-6">{pricing.description}</p>
      <div className="mb-8">
        <span className="text-4xl font-bold">{pricing.price}</span>
        {pricing.period && <span className="text-gray-400 text-lg ml-1">{pricing.period}</span>}
      </div>
      <ul className="space-y-3 mb-8 flex-1">
        {pricing.features?.map((f: string, i: number) => (
          <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
            <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            {f}
          </li>
        ))}
      </ul>
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={`w-full py-3 rounded-lg font-semibold transition-all text-sm ${
          pricing.highlighted
            ? 'bg-emerald-500 text-black hover:bg-emerald-400'
            : 'border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10'
        }`}
      >
        {pricing.cta}
      </motion.button>
    </motion.div>
  );
}

function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setEmail(''); setSubmitted(false); }, 3000);
  };
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Weekly Job Digest</h2>
        <p className="text-gray-400 mb-8">Top matches delivered to your inbox. No spam, only jobs you actually want.</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input type="email" placeholder="your@email.com" value={email} required onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-5 py-3 bg-gray-900 border border-emerald-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors" />
          <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} type="submit"
            className="px-8 py-3 bg-emerald-500 text-black rounded-xl font-semibold hover:bg-emerald-400 transition-colors whitespace-nowrap">
            {submitted ? 'Subscribed!' : 'Subscribe Free'}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="text-xl font-bold gradient-text mb-3">Job Digest</div>
            <p className="text-gray-500 text-sm leading-relaxed">AI-powered job matching for tech professionals worldwide.</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white">Product</h4>
            <ul className="space-y-2">
              {['Features', 'Pricing', 'Security', 'API'].map((l) => <li key={l}><a href="#" className="text-gray-500 hover:text-emerald-400 transition-colors text-sm">{l}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              {['About', 'Blog', 'Careers', 'Contact'].map((l) => <li key={l}><a href="#" className="text-gray-500 hover:text-emerald-400 transition-colors text-sm">{l}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white">Legal</h4>
            <ul className="space-y-2">
              {['Privacy', 'Terms', 'GDPR', 'Cookies'].map((l) => <li key={l}><a href="#" className="text-gray-500 hover:text-emerald-400 transition-colors text-sm">{l}</a></li>)}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">2024 Job Digest. All rights reserved.</p>
          <div className="flex gap-6">
            {['Twitter', 'LinkedIn', 'GitHub'].map((s) => <a key={s} href="#" className="text-gray-500 hover:text-emerald-400 transition-colors text-sm">{s}</a>)}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  return (
    <main className="bg-black text-white min-h-screen">
      <ParticleBackground />
      <Navigation />

      <section className="pt-36 pb-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-8">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-sm font-semibold">AI-Powered Job Matching</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Find Your <span className="gradient-text">Perfect Job</span><br className="hidden md:block" /> in Seconds
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              AI scans 50+ job boards and scores every role against your profile. Get matched, get notified, get hired.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-emerald-500 text-black rounded-xl font-bold hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2 text-lg">
                Start Free <ArrowRight size={20} />
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-emerald-500/40 text-emerald-400 rounded-xl font-semibold hover:bg-emerald-500/10 transition-colors text-lg">
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-emerald-500/20">
            {STATS.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful Features</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Everything you need to land your dream job faster than ever before.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => <FeatureCard key={i} feature={f} index={i} />)}
          </div>
        </div>
      </section>

      <section id="jobs" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Top Opportunities</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">A live sample of what Job Digest surfaces for senior tech professionals.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {JOB_EXAMPLES.map((job, i) => <JobCard key={job.id} job={job} index={i} />)}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Loved by Engineers</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Join thousands of tech professionals who found their dream jobs.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t, i) => <TestimonialCard key={t.id} testimonial={t} index={i} />)}
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Questions?</h2>
            <p className="text-gray-400 text-lg">Everything you need to know about Job Digest.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
            {FAQ.map((item, i) => (
              <FAQItem key={i} item={item} isOpen={expandedFAQ === i} onToggle={() => setExpandedFAQ(expandedFAQ === i ? null : i)} />
            ))}
          </motion.div>
        </div>
      </section>

      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple Pricing</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Start free. Upgrade when you land the job.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {PRICING.map((p, i) => <PricingCard key={p.id} pricing={p} index={i} />)}
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  );
}
