'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Bell, TrendingUp, Briefcase, Users, ChevronDown, Star, ArrowRight, Menu, X, CheckCircle2 } from 'lucide-react';
import { STATS, FEATURES, JOB_EXAMPLES, TESTIMONIALS, FAQ, PRICING } from '@/lib/constants';

const NAV_LINKS = ['Features', 'Jobs', 'Pricing', 'FAQ'];

function Navigation() {
  const [open, setOpen] = useState(false);
  const navBg = { position: 'fixed' as const, top: 0, left: 0, right: 0, zIndex: 50,
    background: 'rgba(10,10,10,0.92)', backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(16,185,129,0.2)' };
  const inner = { maxWidth: '1280px', margin: '0 auto', padding: '0 24px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' };
  const logoStyle = { fontSize: '20px', fontWeight: 900,
    background: 'linear-gradient(135deg,#10b981,#34d399)',
    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' };
  const linkStyle = { color: '#9ca3af', textDecoration: 'none', fontSize: '14px' };
  const ctaStyle = { padding: '8px 20px', background: '#10b981', color: '#000',
    fontWeight: 700, borderRadius: '8px', textDecoration: 'none', fontSize: '14px' };
  return (
    <nav style={navBg}>
      <div style={inner}>
        <span style={logoStyle}>Job Digest</span>
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: '32px' }}>
          {NAV_LINKS.map(s => (
            <a key={s} href={'#' + s.toLowerCase()} style={linkStyle}>{s}</a>
          ))}
          <a href="#pricing" style={ctaStyle}>Get Started</a>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
          {open ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </div>
      {open && (
        <div style={{ background: 'rgba(10,10,10,0.98)', borderTop: '1px solid rgba(16,185,129,0.15)', padding: '16px 24px' }}>
          {NAV_LINKS.map(s => (
            <a key={s} href={'#' + s.toLowerCase()} onClick={() => setOpen(false)}
              style={{ display: 'block', padding: '10px 0', color: '#9ca3af', textDecoration: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{s}</a>
          ))}
          <a href="#pricing" style={{ display: 'block', textAlign: 'center', marginTop: '12px',
            padding: '10px', background: '#10b981', color: '#000', fontWeight: 700,
            borderRadius: '8px', textDecoration: 'none' }}>Get Started</a>
        </div>
      )}
    </nav>
  );
}

export default function Home() {
  const [faqOpen, setFaqOpen] = useState<number|null>(null);
  const Icons: Record<string,any> = { Zap, Target, Bell, TrendingUp, Briefcase, Users };

  const heroBg = {
    paddingTop: '130px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px',
    textAlign: 'center' as const,
    background: 'radial-gradient(ellipse at 20% 40%, rgba(16,185,129,0.15) 0%, transparent 55%), radial-gradient(ellipse at 80% 60%, rgba(16,185,129,0.08) 0%, transparent 55%), #0a0a0a'
  };

  return (
    <div style={{ background: '#0a0a0a', color: '#fff', minHeight: '100vh', fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif' }}>
      <Navigation />

      {/* HERO */}
      <section style={heroBg}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px',
              background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.35)',
              borderRadius: '100px', marginBottom: '32px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}/>
              <span style={{ color: '#10b981', fontSize: '13px', fontWeight: 600 }}>AI-Powered Job Matching</span>
            </div>
            <h1 style={{ fontSize: 'clamp(42px,7vw,80px)', fontWeight: 900, lineHeight: 1.08, marginBottom: '24px' }}>
              Find Your{' '}
              <span style={{ background: 'linear-gradient(135deg,#10b981,#34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Perfect Job</span>
              <br />in Seconds
            </h1>
            <p style={{ fontSize: '18px', color: '#9ca3af', maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.7 }}>
              AI scans 50+ job boards and scores every role against your profile.
              <br />Get matched, get notified, get hired.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#pricing" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '16px 32px', background: '#10b981', color: '#000', fontWeight: 700,
                borderRadius: '12px', textDecoration: 'none', fontSize: '17px' }}>
                Start Free <ArrowRight size={20}/>
              </a>
              <a href="#features" style={{ display: 'inline-flex', alignItems: 'center',
                padding: '16px 32px', border: '1px solid rgba(16,185,129,0.4)',
                color: '#10b981', fontWeight: 600, borderRadius: '12px', textDecoration: 'none', fontSize: '17px' }}>
                See Features
              </a>
            </div>
          </motion.div>
          {/* Stats */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.5 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '24px',
              marginTop: '80px', paddingTop: '48px', borderTop: '1px solid rgba(16,185,129,0.2)' }}>
            {STATS.map((s,i) => (
              <motion.div key={i} initial={{ opacity:0, scale:0.8 }} animate={{ opacity:1, scale:1 }} transition={{ delay: 0.6+i*0.1 }}>
                <div style={{ fontSize: 'clamp(32px,4vw,48px)', fontWeight: 900,
                  background: 'linear-gradient(135deg,#10b981,#34d399)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.value}</div>
                <div style={{ fontSize: '13px', color: '#6b7280', marginTop: '4px' }}>{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={{ padding: '96px 24px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 900, marginBottom: '16px' }}>Powerful Features</h2>
            <p style={{ color: '#9ca3af', fontSize: '17px' }}>Everything you need to land your dream job faster than ever before.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '20px' }}>
            {FEATURES.map((f,i) => {
              const Icon = Icons[f.icon];
              return (
                <motion.div key={i} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
                  transition={{ delay: i*0.08 }} viewport={{ once: true }}
                  style={{ padding: '28px', borderRadius: '16px',
                    background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.2)' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px',
                    background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                    {Icon && <Icon size={22} style={{ color: '#34d399' }}/>}
                  </div>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px', color: '#fff' }}>{f.title}</h3>
                  <p style={{ fontSize: '13px', color: '#9ca3af', lineHeight: 1.7 }}>{f.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* JOBS */}
      <section id="jobs" style={{ padding: '96px 24px', borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(16,185,129,0.02)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 900, marginBottom: '16px' }}>Top Opportunities</h2>
            <p style={{ color: '#9ca3af', fontSize: '17px' }}>A live sample of what Job Digest surfaces for senior tech professionals.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '20px' }}>
            {JOB_EXAMPLES.map((job,i) => (
              <motion.div key={job.id} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
                transition={{ delay: i*0.07 }} viewport={{ once: true }}
                style={{ padding: '24px', borderRadius: '16px',
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(16,185,129,0.18)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div style={{ flex: 1, paddingRight: '12px' }}>
                    <h3 style={{ fontWeight: 700, fontSize: '15px', color: '#fff', marginBottom: '4px' }}>{job.title}</h3>
                    <p style={{ fontSize: '12px', color: '#6b7280' }}>{job.company} · {job.location}</p>
                  </div>
                  <span style={{ padding: '4px 12px', borderRadius: '100px', fontSize: '13px', fontWeight: 900,
                    background: 'rgba(16,185,129,0.15)', color: '#34d399',
                    border: '1px solid rgba(16,185,129,0.3)', whiteSpace: 'nowrap' }}>{job.match}%</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '12px' }}>
                  {job.tags?.map((tag: string, j: number) => (
                    <span key={j} style={{ padding: '3px 10px', fontSize: '11px', borderRadius: '100px',
                      background: 'rgba(255,255,255,0.06)', color: '#9ca3af',
                      border: '1px solid rgba(255,255,255,0.1)' }}>{tag}</span>
                  ))}
                </div>
                <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.7, marginBottom: '16px' }}>{job.description}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ fontWeight: 700, fontSize: '13px', color: '#10b981' }}>{job.salary}</span>
                  <span style={{ fontSize: '13px', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>View <ArrowRight size={13}/></span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '96px 24px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 900, marginBottom: '16px' }}>Loved by Engineers</h2>
            <p style={{ color: '#9ca3af', fontSize: '17px' }}>Join thousands of tech professionals who found their dream jobs.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '20px' }}>
            {TESTIMONIALS.map((t,i) => (
              <motion.div key={t.id} initial={{ opacity:0, scale:0.95 }} whileInView={{ opacity:1, scale:1 }}
                transition={{ delay: i*0.1 }} viewport={{ once: true }}
                style={{ padding: '24px', borderRadius: '16px',
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(16,185,129,0.15)',
                  display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: '3px', marginBottom: '16px' }}>
                  {[...Array(t.rating)].map((_,j) => <Star key={j} size={13} style={{ fill: '#10b981', color: '#10b981' }}/>)}
                </div>
                <p style={{ fontSize: '13px', color: '#d1d5db', lineHeight: 1.75, fontStyle: 'italic', flex: 1, marginBottom: '20px' }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '24px' }}>{t.avatar}</span>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: '13px', color: '#fff' }}>{t.name}</p>
                    <p style={{ fontSize: '11px', color: '#6b7280' }}>{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: '96px 24px', borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(16,185,129,0.02)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 900, marginBottom: '16px' }}>Questions?</h2>
            <p style={{ color: '#9ca3af', fontSize: '17px' }}>Everything you need to know about Job Digest.</p>
          </div>
          <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(16,185,129,0.2)' }}>
            {FAQ.map((item,i) => (
              <div key={i} style={{ borderBottom: i < FAQ.length-1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <button onClick={() => setFaqOpen(faqOpen===i ? null : i)}
                  style={{ width: '100%', padding: '20px 24px', display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', textAlign: 'left', cursor: 'pointer', border: 'none',
                    background: faqOpen===i ? 'rgba(16,185,129,0.07)' : 'rgba(255,255,255,0.02)',
                    color: faqOpen===i ? '#34d399' : '#fff' }}>
                  <span style={{ fontWeight: 600, fontSize: '15px', paddingRight: '16px' }}>{item.question}</span>
                  <motion.div animate={{ rotate: faqOpen===i ? 180 : 0 }} transition={{ duration: 0.2 }} style={{ flexShrink: 0 }}>
                    <ChevronDown size={18} style={{ color: '#10b981' }}/>
                  </motion.div>
                </button>
                <motion.div initial={false} animate={{ height: faqOpen===i ? 'auto' : 0, opacity: faqOpen===i ? 1 : 0 }}
                  transition={{ duration: 0.2 }} style={{ overflow: 'hidden' }}>
                  <p style={{ padding: '0 24px 20px', fontSize: '14px', color: '#9ca3af', lineHeight: 1.75 }}>{item.answer}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ padding: '96px 24px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 900, marginBottom: '16px' }}>Simple Pricing</h2>
            <p style={{ color: '#9ca3af', fontSize: '17px' }}>Start free. Upgrade when you land the job.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '24px', alignItems: 'start' }}>
            {PRICING.map((p,i) => (
              <motion.div key={p.id} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
                transition={{ delay: i*0.1 }} viewport={{ once: true }}
                style={{ padding: '36px', borderRadius: '20px', display: 'flex', flexDirection: 'column',
                  background: p.highlighted ? 'rgba(16,185,129,0.08)' : 'rgba(255,255,255,0.03)',
                  border: p.highlighted ? '2px solid rgba(16,185,129,0.55)' : '1px solid rgba(16,185,129,0.15)',
                  boxShadow: p.highlighted ? '0 0 50px rgba(16,185,129,0.1)' : 'none' }}>
                {p.highlighted && (
                  <div style={{ fontSize: '11px', fontWeight: 900, textTransform: 'uppercase',
                    letterSpacing: '2px', color: '#10b981', marginBottom: '16px' }}>⭐ Most Popular</div>
                )}
                <h3 style={{ fontSize: '26px', fontWeight: 900, marginBottom: '6px' }}>{p.name}</h3>
                <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '24px' }}>{p.description}</p>
                <div style={{ marginBottom: '32px' }}>
                  <span style={{ fontSize: '52px', fontWeight: 900 }}>{p.price}</span>
                  {p.period && <span style={{ fontSize: '17px', color: '#6b7280', marginLeft: '4px' }}>{p.period}</span>}
                </div>
                <ul style={{ listStyle: 'none', marginBottom: '32px', flex: 1 }}>
                  {p.features?.map((f: string, j: number) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px',
                      marginBottom: '12px', fontSize: '14px', color: '#d1d5db' }}>
                      <CheckCircle2 size={16} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }}/>{f}
                    </li>
                  ))}
                </ul>
                <button style={{ width: '100%', padding: '14px', borderRadius: '12px', fontWeight: 700,
                  fontSize: '14px', cursor: 'pointer',
                  background: p.highlighted ? '#10b981' : 'transparent',
                  color: p.highlighted ? '#000' : '#10b981',
                  border: p.highlighted ? 'none' : '1px solid rgba(16,185,129,0.4)' }}>
                  {p.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={{ padding: '96px 24px', borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(16,185,129,0.02)' }}>
        <div style={{ maxWidth: '520px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 900, marginBottom: '16px' }}>Get Your Weekly Job Digest</h2>
          <p style={{ color: '#9ca3af', marginBottom: '32px' }}>Top matches delivered to your inbox. No spam.</p>
          <form style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }} onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="your@email.com" required
              style={{ flex: 1, minWidth: '200px', padding: '14px 20px', borderRadius: '12px',
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(16,185,129,0.3)',
                color: '#fff', fontSize: '14px', outline: 'none' }}/>
            <button type="submit" style={{ padding: '14px 28px', background: '#10b981', color: '#000',
              fontWeight: 700, borderRadius: '12px', border: 'none', cursor: 'pointer',
              fontSize: '14px', whiteSpace: 'nowrap' }}>
              Subscribe Free
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '56px 24px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: '32px', marginBottom: '48px' }}>
            <div>
              <div style={{ fontSize: '20px', fontWeight: 900,
                background: 'linear-gradient(135deg,#10b981,#34d399)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '12px' }}>Job Digest</div>
              <p style={{ fontSize: '13px', color: '#374151', lineHeight: 1.7 }}>AI-powered job matching for tech professionals worldwide.</p>
            </div>
            {[['Product',['Features','Pricing','Security','API']],['Company',['About','Blog','Careers','Contact']],['Legal',['Privacy','Terms','GDPR','Cookies']]].map(([title,links]) => (
              <div key={title as string}>
                <h4 style={{ fontSize: '13px', fontWeight: 700, marginBottom: '16px', color: '#fff' }}>{title}</h4>
                <ul style={{ listStyle: 'none' }}>
                  {(links as string[]).map(l => (
                    <li key={l} style={{ marginBottom: '8px' }}>
                      <a href="#" style={{ fontSize: '13px', color: '#374151', textDecoration: 'none' }}>{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.04)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <p style={{ fontSize: '13px', color: '#1f2937' }}>&copy; 2024 Job Digest. All rights reserved.</p>
            <div style={{ display: 'flex', gap: '24px' }}>
              {['Twitter','LinkedIn','GitHub'].map(s => (
                <a key={s} href="#" style={{ fontSize: '13px', color: '#4b5563', textDecoration: 'none' }}>{s}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}