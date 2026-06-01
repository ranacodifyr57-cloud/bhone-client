import { useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  { id: 1, title: 'E-Commerce Store', category: 'web', tech: ['React', 'Node.js', 'MongoDB'], desc: 'Full-stack online store with payments, admin panel and inventory management.', color: '#1a56db' },
  { id: 2, title: 'Restaurant App', category: 'mobile', tech: ['React Native', 'Firebase'], desc: 'Mobile app for food ordering with real-time tracking and push notifications.', color: '#0891b2' },
  { id: 3, title: 'Portfolio Website', category: 'design', tech: ['Figma', 'React'], desc: 'Elegant personal portfolio with animations and CMS integration.', color: '#c9a84c' },
  { id: 4, title: 'SaaS Dashboard', category: 'web', tech: ['Next.js', 'PostgreSQL'], desc: 'Analytics dashboard with real-time charts, user management, and billing.', color: '#7c3aed' },
  { id: 5, title: 'Blog Platform', category: 'web', tech: ['WordPress', 'Custom Theme'], desc: 'SEO-optimized blog with custom Gutenberg blocks and newsletter integration.', color: '#dc2626' },
  { id: 6, title: 'Brand Identity', category: 'design', tech: ['Figma', 'Illustrator'], desc: 'Complete brand identity including logo, color system, and guidelines.', color: '#d97706' },
]

const categories = ['all', 'web', 'mobile', 'design']

export default function Portfolio() {
  const [active, setActive] = useState('all')
  const filtered = active === 'all' ? projects : projects.filter(p => p.category === active)

  return (
    <main style={{ background: '#fff' }}>
      {/* Header */}
      <section style={{ padding: '120px 24px 80px', background: 'linear-gradient(135deg, #f8f9fc, #eef1f8)', textAlign: 'center' }}>
        <p style={{ color: 'var(--accent)', fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>My Work</p>
        <h1 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontFamily: 'var(--font-head)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 16, color: 'var(--text)' }}>Portfolio</h1>
        <p style={{ color: 'var(--text2)', fontSize: 17, maxWidth: 500, margin: '0 auto' }}>A selection of projects I've built for clients and personal exploration.</p>
      </section>

      <section style={{ padding: '60px 24px 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {/* Filter tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 48, flexWrap: 'wrap' }}>
            {categories.map(c => (
              <button key={c} onClick={() => setActive(c)} style={{
                padding: '9px 24px', borderRadius: 100,
                border: `2px solid ${active === c ? 'var(--accent)' : 'var(--border)'}`,
                background: active === c ? 'var(--accent)' : '#fff',
                color: active === c ? '#fff' : 'var(--text2)',
                fontSize: 14, fontWeight: 600, textTransform: 'capitalize',
                transition: 'var(--transition)',
                boxShadow: active === c ? '0 4px 12px rgba(26,86,219,0.3)' : 'none',
              }}>{c}</button>
            ))}
          </div>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
            {filtered.map((p) => (
              <div key={p.id} style={{
                borderRadius: 20, overflow: 'hidden',
                border: '1px solid var(--border)',
                background: '#fff',
                boxShadow: 'var(--shadow)',
                transition: 'var(--transition)',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `0 20px 40px ${p.color}20` }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow)' }}
              >
                {/* Thumbnail */}
                <div style={{ height: 180, background: `linear-gradient(135deg, ${p.color}15, ${p.color}05)`, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ width: 64, height: 64, borderRadius: 16, background: `${p.color}15`, border: `2px solid ${p.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, fontFamily: 'var(--font-head)', fontWeight: 800, color: p.color }}>
                    {p.title[0]}
                  </div>
                  <div style={{ position: 'absolute', top: 12, right: 12, padding: '4px 10px', borderRadius: 100, background: '#fff', border: `1px solid ${p.color}30`, fontSize: 11, fontWeight: 700, color: p.color, textTransform: 'uppercase', letterSpacing: '0.05em', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                    {p.category}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: 24 }}>
                  <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 19, fontWeight: 700, marginBottom: 8, color: 'var(--text)' }}>{p.title}</h3>
                  <p style={{ color: 'var(--text2)', fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>{p.desc}</p>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 20 }}>
                    {p.tech.map(t => (
                      <span key={t} style={{ padding: '3px 10px', borderRadius: 6, background: 'var(--bg2)', border: '1px solid var(--border)', fontSize: 11, fontWeight: 700, color: 'var(--text2)' }}>{t}</span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: 10 }}>
                    <button style={{ flex: 1, padding: '10px', borderRadius: 10, background: p.color, color: '#fff', fontWeight: 700, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, border: 'none', cursor: 'pointer' }}>
                      <ExternalLink size={14} /> Live Demo
                    </button>
                    <button style={{ padding: '10px 16px', borderRadius: 10, border: '1px solid var(--border)', color: 'var(--text2)', display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, cursor: 'pointer', background: '#fff' }}>
                      <Github size={14} /> Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}