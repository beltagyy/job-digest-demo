'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Bell, TrendingUp, Briefcase, Users, ChevronDown, Star, ArrowRight } from 'lucide-react';
import { STATS, FEATURES, JOB_EXAMPLES, TESTIMONIALS, FAQ, PRICING } from '@/lib/constants';

export default function Home() {
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  
  return (
    <main className="bg-black text-white min-h-screen">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Find Your Perfect Job in Seconds</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">AI-powered job matching at its finest.</p>
          <button className="px-8 py-4 bg-emerald-500 text-black rounded-lg font-semibold hover:bg-emerald-400">Start Free</button>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-emerald-500/20">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="glass p-6 rounded-lg border border-emerald-500/20">
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-400">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50 border-y border-emerald-500/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Jobs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {JOB_EXAMPLES.map((job) => (
              <div key={job.id} className="glass p-6 rounded-lg border border-emerald-500/20">
                <div className="flex justify-between items-start mb-4">
                  <div><h3 className="font-semibold">{job.title}</h3><p className="text-gray-400 text-sm">{job.company}</p></div>
                  <span className="text-emerald-400 font-bold">{job.match}%</span>
                </div>
                <p className="text-gray-400 text-sm">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="glass p-6 rounded-lg border border-emerald-500/20">
                <div className="flex items-center mb-4"><div className="text-3xl mr-3">{t.avatar}</div><div><h4 className="font-semibold">{t.name}</h4><p className="text-gray-400 text-sm">{t.role}</p></div></div>
                <div className="flex gap-1 mb-3">{[...Array(5)].map((_, i) => (<Star key={i} size={14} className="fill-emerald-400 text-emerald-400" />))}</div>
                <p className="text-gray-300 text-sm italic">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50 border-y border-emerald-500/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">FAQ</h2>
          {FAQ.map((item, i) => (
            <div key={i} className="border-b border-emerald-500/20">
              <button onClick={() => setExpandedFAQ(expandedFAQ === i ? null : i)} className="w-full py-6 flex justify-between items-center hover:text-emerald-400 transition-colors">
                <span className="font-semibold">{item.question}</span>
                <ChevronDown size={20} className={expandedFAQ === i ? 'rotate-180' : ''} />
              </button>
              {expandedFAQ === i && <p className="pb-6 text-gray-400">{item.answer}</p>}
            </div>
          ))}
        </div>
      </section>
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING.map((p) => (
              <div key={p.id} className={`rounded-lg p-8 border ${p.highlighted ? 'glass border-emerald-500 bg-emerald-500/10 ring-2 ring-emerald-500/30 scale-105' : 'glass border-emerald-500/20'}`}>
                {p.highlighted && <div className="text-emerald-400 text-sm font-semibold mb-4">Most Popular</div>}
                <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
                <div className="text-4xl font-bold mb-8">{p.price}{p.period && <span className="text-lg text-gray-400 font-normal ml-2">{p.period}</span>}</div>
                <ul className="space-y-4 mb-8">{p.features?.map((f, j) => (<li key={j} className="flex items-center gap-3 text-gray-300"><div className="w-2 h-2 rounded-full bg-emerald-400" />{f}</li>))}</ul>
                <button className={`w-full py-3 rounded-lg font-semibold ${p.highlighted ? 'bg-emerald-500 text-black' : 'bg-emerald-500/20 text-emerald-400'}`}>{p.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-400 mb-8">Get weekly digests of jobs matching your profile</p>
          <div className="flex gap-3"><input type="email" placeholder="Enter email" className="flex-1 px-6 py-3 bg-gray-900 border border-emerald-500/20 rounded-lg focus:outline-none focus:border-emerald-500" /><button className="px-8 py-3 bg-emerald-500 text-black rounded-lg font-semibold">Subscribe</button></div>
        </div>
      </section>
      
      <footer className="bg-black border-t border-emerald-500/20 py-12 px-4 text-center text-gray-400">
        <p>© 2024 Job Digest. Built with 💚</p>
      </footer>
    </main>
  );
}
