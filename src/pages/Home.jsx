import { Link } from 'react-router-dom'
import { ArrowRight, Code2, Palette, ShoppingCart, Search, Smartphone, Star, CheckCircle2, Zap } from 'lucide-react'

const skills = ['React', 'Node.js', 'MongoDB', 'Figma', 'Next.js', 'Python', 'WordPress', 'MySQL', 'Tailwind CSS', 'AWS', 'Git', 'Shopify']

const services = [
  { icon: <Code2 size={24} />, title: 'Web Development', desc: 'Custom, fast & responsive websites built with modern tech.', color: '#e8ff00' },
  { icon: <Palette size={24} />, title: 'UI/UX Design', desc: 'Beautiful interfaces that users love and convert.', color: '#00e5ff' },
  { icon: <ShoppingCart size={24} />, title: 'E-Commerce', desc: 'Shopify & WooCommerce stores that sell 24/7.', color: '#ff6b6b' },
  { icon: <Search size={24} />, title: 'SEO & Marketing', desc: 'Rank higher, get found, grow your business.', color: '#a855f7' },
  { icon: <Smartphone size={24} />, title: 'Mobile Apps', desc: 'iOS & Android apps with React Native.', color: '#22d3ee' },
  { icon: <Zap size={24} />, title: 'Performance', desc: 'Speed optimization to keep users engaged.', color: '#fb923c' },
]

const stats = [
  { value: '50+', label: 'Projects Done' },
  { value: '30+', label: 'Happy Clients' },
  { value: '3+', label: 'Years Exp.' },
  { value: '100%', label: 'Satisfaction' },
]

const testimonials = [
  { name: 'Ahmed Khan', role: 'CEO, TechStart', text: 'Muhammad delivered our website on time and exceeded expectations. Highly professional!', rating: 5 },
  { name: 'Sara Ali', role: 'Founder, StyleHub', text: 'Incredible work on our e-commerce store. Sales increased 40% in the first month!', rating: 5 },
  { name: 'Usman Raza', role: 'Director, BuildPro', text: 'Best freelancer I have worked with. Clean code, great communication, fast delivery.', rating: 5 },
]

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 24px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* BG Glow */}
        <div style={{
          position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
          width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,255,0,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'center' }}>
            <div>
              {/* Badge */}
              <div className="fade-up" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '6px 14px', borderRadius: 100,
                border: '1px solid rgba(232,255,0,0.3)',
                background: 'rgba(232,255,0,0.06)',
                marginBottom: 28,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', animation: 'pulse 2s infinite' }} />
                <span style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 500 }}>Available for freelance work</span>
              </div>

              {/* Heading */}
              <h1 className="fade-up-1" style={{ fontSize: 'clamp(44px, 6vw, 80px)', fontFamily: 'var(--font-head)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 20, lineHeight: 1.05 }}>
                Hi, I'm<br />
                <span style={{
                  background: 'linear-gradient(90deg, var(--accent), #a3ff00)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>Muhammad Amir</span>
              </h1>

              <p className="fade-up-2" style={{ fontSize: 18, color: 'var(--text2)', maxWidth: 520, marginBottom: 36, lineHeight: 1.7 }}>
                Freelance full-stack developer & designer at <strong style={{ color: 'var(--text)' }}>Bhone Enterprises</strong>. I build stunning websites, apps & digital products that grow businesses.
              </p>

              {/* CTA */}
              <div className="fade-up-3" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link to="/contact" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 28px', borderRadius: 12,
                  background: 'var(--accent)',
                  color: '#000', fontWeight: 700, fontSize: 15,
                  transition: 'var(--transition)',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(232,255,0,0.3)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  Hire Me <ArrowRight size={16} />
                </Link>
                <Link to="/portfolio" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 28px', borderRadius: 12,
                  border: '1px solid var(--border)',
                  color: 'var(--text)', fontWeight: 600, fontSize: 15,
                  transition: 'var(--transition)',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
                >
                  View Work
                </Link>
              </div>
            </div>

            {/* Avatar card */}
            <div className="fade-up-2" style={{ animation: 'float 6s ease-in-out infinite' }}>
              <div style={{
                width: 260, height: 320,
                borderRadius: 24,
                background: 'linear-gradient(135deg, #1a1a1a, #111)',
                border: '1px solid rgba(232,255,0,0.2)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                gap: 12,
                boxShadow: '0 0 60px rgba(232,255,0,0.08)',
              }}>
                <img src="/src/assets/photo.jpg" style={{
  width: 160, height: 160, borderRadius: '50%',
  objectFit: 'cover', objectPosition: 'top',
  border: '4px solid var(--accent)',
  boxShadow: '0 0 30px rgba(232,255,0,0.3)'
}} />
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: 16 }}>Muhammad Amir</p>
                  <p style={{ color: 'var(--text2)', fontSize: 12, marginTop: 4 }}>Full-Stack Developer</p>
                </div>
                <div style={{
                  padding: '6px 14px', borderRadius: 100,
                  background: 'rgba(232,255,0,0.1)',
                  border: '1px solid rgba(232,255,0,0.2)',
                  fontSize: 12, color: 'var(--accent)', fontWeight: 600,
                }}>🇵🇰 Rawalpindi, Pakistan</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Skills */}
      <section style={{ padding: '32px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', overflow: 'hidden', background: 'var(--bg2)' }}>
        <div style={{ display: 'flex', animation: 'marquee 20s linear infinite', width: 'max-content' }}>
          {[...skills, ...skills].map((s, i) => (
            <span key={i} style={{
              padding: '8px 24px',
              margin: '0 4px',
              borderRadius: 100,
              border: '1px solid var(--border)',
              fontSize: 13, fontWeight: 500, color: 'var(--text2)',
              whiteSpace: 'nowrap',
            }}>{s}</span>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '80px 24px', background: 'var(--bg2)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 24 }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              textAlign: 'center', padding: '32px 24px',
              borderRadius: 16,
              border: '1px solid var(--border)',
              background: 'var(--bg3)',
            }}>
              <div style={{ fontFamily: 'var(--font-head)', fontSize: 48, fontWeight: 800, color: 'var(--accent)', lineHeight: 1 }}>{s.value}</div>
              <div style={{ color: 'var(--text2)', fontSize: 14, marginTop: 8, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <p style={{ color: 'var(--accent)', fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>What I Do</p>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontFamily: 'var(--font-head)', fontWeight: 800, letterSpacing: '-0.03em' }}>Services I Offer</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {services.map((s, i) => (
              <div key={i} style={{
                padding: 28, borderRadius: 20,
                border: '1px solid var(--border)',
                background: 'var(--bg2)',
                transition: 'var(--transition)',
                cursor: 'default',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${s.color}40`; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div style={{ width: 48, height: 48, borderRadius: 12, background: `${s.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: s.color, marginBottom: 20 }}>
                  {s.icon}
                </div>
                <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 20, fontWeight: 700, marginBottom: 10 }}>{s.title}</h3>
                <p style={{ color: 'var(--text2)', fontSize: 14, lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '100px 24px', background: 'var(--bg2)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <p style={{ color: 'var(--accent)', fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>Reviews</p>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontFamily: 'var(--font-head)', fontWeight: 800, letterSpacing: '-0.03em' }}>What Clients Say</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{ padding: 28, borderRadius: 20, border: '1px solid var(--border)', background: 'var(--bg3)' }}>
                <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
                  {Array(t.rating).fill(0).map((_, j) => <Star key={j} size={16} fill="var(--accent)" color="var(--accent)" />)}
                </div>
                <p style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.7, marginBottom: 20, fontStyle: 'italic' }}>"{t.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent), var(--accent2))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#000', fontSize: 14 }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: 14 }}>{t.name}</p>
                    <p style={{ color: 'var(--text2)', fontSize: 12 }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            padding: '60px 40px', borderRadius: 28,
            background: 'linear-gradient(135deg, rgba(232,255,0,0.08), rgba(0,229,255,0.05))',
            border: '1px solid rgba(232,255,0,0.15)',
          }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontFamily: 'var(--font-head)', fontWeight: 800, marginBottom: 16, letterSpacing: '-0.03em' }}>
              Ready to Start Your Project?
            </h2>
            <p style={{ color: 'var(--text2)', fontSize: 16, marginBottom: 32 }}>
              Let's build something amazing together. Get in touch today.
            </p>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '16px 36px', borderRadius: 14,
              background: 'var(--accent)', color: '#000',
              fontWeight: 700, fontSize: 16,
            }}>
              Get In Touch <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
