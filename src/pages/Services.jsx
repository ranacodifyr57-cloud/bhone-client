import { Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Starter', price: '$299', period: 'one-time',
    desc: 'Perfect for small businesses & personal brands.',
    color: 'var(--text2)',
    features: ['5-page website', 'Mobile responsive', 'Contact form', 'Basic SEO', '1 revision round', '2 weeks delivery'],
    cta: 'Get Started', popular: false,
  },
  {
    name: 'Professional', price: '$699', period: 'one-time',
    desc: 'For growing businesses that need more power.',
    color: 'var(--accent)',
    features: ['Up to 15 pages', 'CMS / Admin panel', 'E-commerce ready', 'Advanced SEO', 'Unlimited revisions', '4 weeks delivery', 'WhatsApp integration', '3 months support'],
    cta: 'Most Popular', popular: true,
  },
  {
    name: 'Enterprise', price: 'Custom', period: 'quote',
    desc: 'Full-scale custom solution for large businesses.',
    color: '#c9a84c',
    features: ['Custom web app', 'Mobile app (iOS & Android)', 'API integrations', 'Payment gateway', 'Performance tuning', 'Dedicated support', 'Monthly maintenance', 'Analytics dashboard'],
    cta: 'Contact Me', popular: false,
  },
]

const servicesList = [
  { title: 'Web Development', color: '#1a56db', items: ['React / Next.js', 'Node.js / Express', 'MongoDB / PostgreSQL', 'REST APIs', 'Authentication'] },
  { title: 'UI/UX Design', color: '#c9a84c', items: ['Figma Wireframes', 'Prototyping', 'User Research', 'Design Systems', 'Brand Identity'] },
  { title: 'E-Commerce', color: '#0891b2', items: ['Shopify Stores', 'WooCommerce', 'Payment Integration', 'Inventory System', 'Order Management'] },
  { title: 'Digital Marketing', color: '#7c3aed', items: ['On-Page SEO', 'Google Analytics', 'Meta Ads Setup', 'Email Marketing', 'Content Strategy'] },
]

export default function Services() {
  return (
    <main style={{ background: '#fff' }}>
      {/* Header */}
      <section style={{ padding: '120px 24px 80px', background: 'linear-gradient(135deg, #f8f9fc, #eef1f8)', textAlign: 'center' }}>
        <p style={{ color: 'var(--accent)', fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>What I Offer</p>
        <h1 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontFamily: 'var(--font-head)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 16, color: 'var(--text)' }}>Services & Pricing</h1>
        <p style={{ color: 'var(--text2)', fontSize: 17, maxWidth: 500, margin: '0 auto' }}>Transparent pricing. No hidden costs. Quality guaranteed every time.</p>
      </section>

      {/* Pricing */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {plans.map((p, i) => (
            <div key={i} style={{
              padding: 36, borderRadius: 24,
              border: p.popular ? '2px solid var(--accent)' : '1px solid var(--border)',
              background: p.popular ? 'linear-gradient(135deg, #f0f5ff, #e8f0fe)' : '#fff',
              position: 'relative',
              boxShadow: p.popular ? 'var(--shadow-lg)' : 'var(--shadow)',
              transition: 'var(--transition)',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              {p.popular && (
                <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', padding: '5px 18px', borderRadius: 100, background: 'var(--accent)', color: '#fff', fontSize: 11, fontWeight: 800, whiteSpace: 'nowrap', letterSpacing: '0.05em', boxShadow: '0 4px 12px rgba(26,86,219,0.3)' }}>
                  ✦ MOST POPULAR
                </div>
              )}
              <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 22, fontWeight: 800, marginBottom: 8, color: 'var(--text)' }}>{p.name}</h3>
              <p style={{ color: 'var(--text2)', fontSize: 14, marginBottom: 24 }}>{p.desc}</p>
              <div style={{ marginBottom: 28 }}>
                <span style={{ fontFamily: 'var(--font-head)', fontSize: 52, fontWeight: 800, color: p.popular ? 'var(--accent)' : 'var(--text)' }}>{p.price}</span>
                <span style={{ color: 'var(--text2)', fontSize: 13, marginLeft: 6 }}>{p.period}</span>
              </div>
              <ul style={{ listStyle: 'none', marginBottom: 32 }}>
                {p.features.map((f, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, fontSize: 14 }}>
                    <Check size={15} color={p.popular ? 'var(--accent)' : '#22c55e'} strokeWidth={3} />
                    <span style={{ color: 'var(--text)' }}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" style={{
                display: 'block', textAlign: 'center',
                padding: '13px 0', borderRadius: 12,
                background: p.popular ? 'var(--accent)' : 'transparent',
                border: p.popular ? 'none' : '2px solid var(--border)',
                color: p.popular ? '#fff' : 'var(--text)',
                fontWeight: 700, fontSize: 15,
                transition: 'var(--transition)',
              }}
              onMouseEnter={e => { if (!p.popular) { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--accent)' }}}
              onMouseLeave={e => { if (!p.popular) { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--text)' }}}
              >{p.cta}</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Service breakdown */}
      <section style={{ padding: '80px 24px', background: 'var(--bg2)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 44px)', fontFamily: 'var(--font-head)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>Full Service Breakdown</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {servicesList.map((s, i) => (
              <div key={i} style={{ padding: 28, borderRadius: 20, border: '1px solid var(--border)', background: '#fff', boxShadow: 'var(--shadow)' }}>
                <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 17, fontWeight: 800, marginBottom: 20, color: s.color, borderBottom: `2px solid ${s.color}20`, paddingBottom: 12 }}>{s.title}</h3>
                {s.items.map((item, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                    <div style={{ width: 5, height: 5, borderRadius: '50%', background: s.color, flexShrink: 0 }} />
                    <span style={{ color: 'var(--text2)', fontSize: 14 }}>{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', background: 'var(--accent)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 36, fontWeight: 800, marginBottom: 12, color: '#fff' }}>Not sure which plan?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 28, fontSize: 16 }}>Let's talk and I'll recommend the best solution for your needs.</p>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', borderRadius: 12, background: '#fff', color: 'var(--accent)', fontWeight: 700, fontSize: 15 }}>
            Get Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  )
}