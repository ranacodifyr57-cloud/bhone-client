import { useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  { id: 1, title: 'E-Commerce Store', category: 'web', tech: ['React', 'Node.js', 'MongoDB'], desc: 'Full-stack online store with payments, admin panel and inventory management.', color: '#e8ff00' },
  { id: 2, title: 'Restaurant App', category: 'mobile', tech: ['React Native', 'Firebase'], desc: 'Mobile app for food ordering with real-time tracking and push notifications.', color: '#00e5ff' },
  { id: 3, title: 'Portfolio Website', category: 'design', tech: ['Figma', 'React'], desc: 'Elegant personal portfolio with animations and CMS integration.', color: '#a855f7' },
  { id: 4, title: 'SaaS Dashboard', category: 'web', tech: ['Next.js', 'PostgreSQL'], desc: 'Analytics dashboard with real-time charts, user management, and billing.', color: '#ff6b6b' },
  { id: 5, title: 'Blog Platform', category: 'web', tech: ['WordPress', 'Custom Theme'], desc: 'SEO-optimized blog with custom Gutenberg blocks and newsletter integration.', color: '#22d3ee' },
  { id: 6, title: 'Brand Identity', category: 'design', tech: ['Figma', 'Illustrator'], desc: 'Complete brand identity including logo, color system, and guidelines.', color: '#fb923c' },
]

const categories = ['all', 'web', 'mobile', 'design']

export default function Portfolio() {
  const [active, setActive] = useState('all')
  const filtered = active === 'all' ? projects : projects.filter(p => p.category === active)

  return (
    <main style={{ padding: '120px 24px 80px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <p style={{ color: 'var(--accent)', fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>My Work</p>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontFamily: 'var(--font-head)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 16 }}>Portfolio</h1>
          <p style={{ color: 'var(--text2)', fontSize: 17, maxWidth: 500, margin: '0 auto' }}>A selection of projects I've built for clients and personal exploration.</p>
        </div>

        {/* Filter tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 48, flexWrap: 'wrap' }}>
          {categories.map(c => (
            <button key={c} onClick={() => setActive(c)} style={{
              padding: '9px 22px', borderRadius: 100,
              border: `1px solid ${active === c ? 'var(--accent)' : 'var(--border)'}`,
              background: active === c ? 'rgba(232,255,0,0.1)' : 'transparent',
              color: active === c ? 'var(--accent)' : 'var(--text2)',
              fontSize: 14, fontWeight: 600, textTransform: 'capitalize',
              transition: 'var(--transition)',
            }}>{c}</button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
          {filtered.map((p) => (
            <div key={p.id} style={{
              borderRadius: 20, overflow: 'hidden',
              border: '1px solid var(--border)',
              background: 'var(--bg2)',
              transition: 'var(--transition)',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = `${p.color}40`; e.currentTarget.style.transform = 'translateY(-4px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              {/* Thumbnail */}
              <div style={{ height: 200, background: `linear-gradient(135deg, ${p.color}18, ${p.color}06)`, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <div style={{ width: 72, height: 72, borderRadius: 20, background: `${p.color}20`, border: `1px solid ${p.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontFamily: 'var(--font-head)', fontWeight: 800, color: p.color }}>
                  {p.title[0]}
                </div>
                <div style={{ position: 'absolute', top: 12, right: 12, padding: '4px 10px', borderRadius: 100, background: `${p.color}20`, border: `1px solid ${p.color}30`, fontSize: 11, fontWeight: 600, color: p.color, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {p.category}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: 24 }}>
                <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{p.title}</h3>
                <p style={{ color: 'var(--text2)', fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>{p.desc}</p>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 20 }}>
                  {p.tech.map(t => (
                    <span key={t} style={{ padding: '3px 10px', borderRadius: 6, background: 'var(--bg3)', border: '1px solid var(--border)', fontSize: 11, fontWeight: 600, color: 'var(--text2)' }}>{t}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 10 }}>
                  <button style={{ flex: 1, padding: '10px', borderRadius: 10, background: p.color, color: '#000', fontWeight: 700, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                    <ExternalLink size={14} /> Live Demo
                  </button>
                  <button style={{ padding: '10px 16px', borderRadius: 10, border: '1px solid var(--border)', color: 'var(--text2)', display: 'flex', alignItems: 'center', gap: 6, fontSize: 13 }}>
                    <Github size={14} /> Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
