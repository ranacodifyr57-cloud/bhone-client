import { Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Starter', price: '$299', period: 'one-time',
    desc: 'Perfect for small businesses & personal brands.',
    color: '#8a8780',
    features: ['5-page website', 'Mobile responsive', 'Contact form', 'Basic SEO', '1 revision round', '2 weeks delivery'],
    cta: 'Get Started',
  },
  {
    name: 'Professional', price: '$699', period: 'one-time',
    desc: 'For growing businesses that need more power.',
    color: '#e8ff00',
    features: ['Up to 15 pages', 'CMS / Admin panel', 'E-commerce ready', 'Advanced SEO', 'Unlimited revisions', '4 weeks delivery', 'WhatsApp integration', '3 months support'],
    cta: 'Most Popular',
    popular: true,
  },
  {
    name: 'Enterprise', price: 'Custom', period: 'quote',
    desc: 'Full-scale custom solution for large businesses.',
    color: '#00e5ff',
    features: ['Custom web app', 'Mobile app (iOS & Android)', 'API integrations', 'Payment gateway', 'Performance tuning', 'Dedicated support', 'Monthly maintenance', 'Analytics dashboard'],
    cta: 'Contact Me',
  },
]

const servicesList = [
  { title: 'Web Development', items: ['React / Next.js', 'Node.js / Express', 'MongoDB / PostgreSQL', 'REST APIs', 'Authentication'] },
  { title: 'UI/UX Design', items: ['Figma Wireframes', 'Prototyping', 'User Research', 'Design Systems', 'Brand Identity'] },
  { title: 'E-Commerce', items: ['Shopify Stores', 'WooCommerce', 'Payment Integration', 'Inventory System', 'Order Management'] },
  { title: 'Digital Marketing', items: ['On-Page SEO', 'Google Analytics', 'Meta Ads Setup', 'Email Marketing', 'Content Strategy'] },
]

export default function Services() {
  return (
    <main style={{ padding: '120px 24px 80px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <p style={{ color: 'var(--accent)', fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>What I Offer</p>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontFamily: 'var(--font-head)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 16 }}>Services & Pricing</h1>
          <p style={{ color: 'var(--text2)', fontSize: 17, maxWidth: 500, margin: '0 auto' }}>Transparent pricing. No hidden costs. Quality guaranteed.</p>
        </div>

        {/* Pricing cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 100 }}>
          {plans.map((p, i) => (
            <div key={i} style={{
              padding: 32, borderRadius: 24,
              border: `1px solid ${p.popular ? 'rgba(232,255,0,0.4)' : 'var(--border)'}`,
              background: p.popular ? 'linear-gradient(135deg, rgba(232,255,0,0.05), rgba(232,255,0,0.02))' : 'var(--bg2)',
              position: 'relative',
              transition: 'var(--transition)',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              {p.popular && (
                <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', padding: '4px 16px', borderRadius: 100, background: 'var(--accent)', color: '#000', fontSize: 11, fontWeight: 800, whiteSpace: 'nowrap', letterSpacing: '0.05em' }}>
                  ✦ MOST POPULAR
                </div>
              )}
              <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 22, fontWeight: 800, marginBottom: 8 }}>{p.name}</h3>
              <p style={{ color: 'var(--text2)', fontSize: 14, marginBottom: 24 }}>{p.desc}</p>
              <div style={{ marginBottom: 28 }}>
                <span style={{ fontFamily: 'var(--font-head)', fontSize: 48, fontWeight: 800, color: p.color }}>{p.price}</span>
                <span style={{ color: 'var(--text2)', fontSize: 13, marginLeft: 6 }}>{p.period}</span>
              </div>
              <ul style={{ listStyle: 'none', marginBottom: 32 }}>
                {p.features.map((f, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, fontSize: 14 }}>
                    <Check size={15} color={p.color} strokeWidth={3} />
                    <span style={{ color: 'var(--text)' }}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" style={{
                display: 'block', textAlign: 'center',
                padding: '13px 0', borderRadius: 12,
                background: p.popular ? 'var(--accent)' : 'transparent',
                border: p.popular ? 'none' : `1px solid ${p.color}60`,
                color: p.popular ? '#000' : p.color,
                fontWeight: 700, fontSize: 15,
                transition: 'var(--transition)',
              }}>{p.cta}</Link>
            </div>
          ))}
        </div>

        {/* Service breakdown */}
        <div style={{ marginBottom: 80 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 44px)', fontFamily: 'var(--font-head)', fontWeight: 800, letterSpacing: '-0.03em' }}>Full Service Breakdown</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {servicesList.map((s, i) => (
              <div key={i} style={{ padding: 28, borderRadius: 20, border: '1px solid var(--border)', background: 'var(--bg2)' }}>
                <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 18, fontWeight: 700, marginBottom: 20, color: 'var(--accent)' }}>{s.title}</h3>
                {s.items.map((item, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                    <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                    <span style={{ color: 'var(--text2)', fontSize: 14 }}>{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', padding: '60px 40px', borderRadius: 28, border: '1px solid var(--border)', background: 'var(--bg2)' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 32, fontWeight: 800, marginBottom: 12 }}>Not sure which plan?</h2>
          <p style={{ color: 'var(--text2)', marginBottom: 28 }}>Let's talk and I'll recommend the best solution for you.</p>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', borderRadius: 12, background: 'var(--accent)', color: '#000', fontWeight: 700, fontSize: 15 }}>
            Get Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  )
}
