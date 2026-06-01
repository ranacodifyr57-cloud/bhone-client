import { Link } from 'react-router-dom'
import { ArrowRight, Code2, Palette, ShoppingCart, Search, Smartphone, Zap, Star, CheckCircle } from 'lucide-react'

const skills = ['React.js', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind CSS', 'Figma', 'Git', 'Vite', 'Express.js', 'REST APIs', 'JWT']

const services = [
  { icon: <Code2 size={24} />, title: 'Web Development', desc: 'Custom, fast & responsive websites built with modern tech stack.', color: '#1a56db' },
  { icon: <Palette size={24} />, title: 'UI/UX Design', desc: 'Beautiful interfaces that users love and convert visitors to clients.', color: '#c9a84c' },
  { icon: <ShoppingCart size={24} />, title: 'E-Commerce', desc: 'Shopify & WooCommerce stores that sell 24/7 automatically.', color: '#0891b2' },
  { icon: <Search size={24} />, title: 'SEO & Marketing', desc: 'Rank higher on Google, get found by more clients online.', color: '#7c3aed' },
  { icon: <Smartphone size={24} />, title: 'Mobile Apps', desc: 'iOS & Android apps with React Native for your business.', color: '#dc2626' },
  { icon: <Zap size={24} />, title: 'Performance', desc: 'Speed optimization to keep users engaged and boost rankings.', color: '#d97706' },
]

const stats = [
  { value: '50+', label: 'Projects Done' },
  { value: '30+', label: 'Happy Clients' },
  { value: '3+', label: 'Years Experience' },
  { value: '100%', label: 'Satisfaction Rate' },
]

const testimonials = [
  { name: 'Ahmed Khan', role: 'CEO, TechStart', text: 'Muhammad delivered our website on time and exceeded expectations. Highly professional work!', rating: 5 },
  { name: 'Sara Ali', role: 'Founder, StyleHub', text: 'Incredible work on our e-commerce store. Sales increased 40% in the first month!', rating: 5 },
  { name: 'Usman Raza', role: 'Director, BuildPro', text: 'Best freelancer I have worked with. Clean code, great communication, fast delivery.', rating: 5 },
]

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section style={{
        minHeight: '100vh',
        display: 'flex', alignItems: 'center',
        padding: '120px 24px 80px',
        position: 'relative',
        background: 'linear-gradient(135deg, #f8f9fc 0%, #eef1f8 100%)',
        overflow: 'hidden',
      }}>
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, borderRadius: '50%', background: 'rgba(26,86,219,0.05)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -50, left: -50, width: 300, height: 300, borderRadius: '50%', background: 'rgba(201,168,76,0.08)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'center' }}>
            <div>
              {/* Badge */}
              <div className="fade-up" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '6px 16px', borderRadius: 100,
                border: '1px solid rgba(26,86,219,0.2)',
                background: 'rgba(26,86,219,0.06)',
                marginBottom: 28,
              }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', animation: 'pulse 2s infinite' }} />
                <span style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 600 }}>Available for freelance work</span>
              </div>

              {/* Heading */}
              <h1 className="fade-up-1" style={{ fontSize: 'clamp(40px, 5.5vw, 72px)', fontFamily: 'var(--font-head)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 20, lineHeight: 1.05, color: 'var(--text)' }}>
                Hi, I'm<br />
                <span style={{ color: 'var(--accent)' }}>Muhammad Amir</span>
              </h1>

              <p className="fade-up-2" style={{ fontSize: 18, color: 'var(--text2)', maxWidth: 520, marginBottom: 16, lineHeight: 1.7 }}>
                Freelance Full-Stack Developer & Designer at <strong style={{ color: 'var(--text)' }}>Bhone Enterprises</strong>
              </p>
              <p className="fade-up-2" style={{ fontSize: 16, color: 'var(--text2)', maxWidth: 520, marginBottom: 36, lineHeight: 1.7 }}>
                I build stunning websites, apps & digital products that grow your business and attract more clients.
              </p>

              {/* CTA Buttons */}
              <div className="fade-up-3" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 48 }}>
                <Link to="/contact" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 28px', borderRadius: 12,
                  background: 'var(--accent)', color: '#fff',
                  fontWeight: 700, fontSize: 15,
                  boxShadow: '0 8px 24px rgba(26,86,219,0.3)',
                  transition: 'var(--transition)',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(26,86,219,0.4)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(26,86,219,0.3)' }}
                >Hire Me <ArrowRight size={16} /></Link>

                <Link to="/portfolio" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 28px', borderRadius: 12,
                  border: '2px solid var(--border)', color: 'var(--text)',
                  fontWeight: 600, fontSize: 15,
                  background: '#fff',
                  transition: 'var(--transition)',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)' }}
                >View Work</Link>

                <a href="/cv.pdf" download="Muhammad-Amir-CV.pdf" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 28px', borderRadius: 12,
                  border: '2px solid rgba(201,168,76,0.4)',
                  color: '#a07820', fontWeight: 600, fontSize: 15,
                  background: 'rgba(201,168,76,0.06)',
                  transition: 'var(--transition)',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#c9a84c'; e.currentTarget.style.background = 'rgba(201,168,76,0.12)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)'; e.currentTarget.style.background = 'rgba(201,168,76,0.06)' }}
                >📄 Download CV</a>
              </div>

              {/* Trust badges */}
              <div className="fade-up-4" style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                {['React Expert', 'Full-Stack Dev', 'Available Now'].map((b, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <CheckCircle size={16} color="var(--accent)" />
                    <span style={{ fontSize: 13, color: 'var(--text2)', fontWeight: 500 }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Profile Card */}
            <div className="fade-up-2" style={{ animation: 'float 6s ease-in-out infinite' }}>
              <div style={{
                width: 260, borderRadius: 24,
                background: '#fff',
                border: '1px solid var(--border)',
                boxShadow: '0 20px 60px rgba(26,86,219,0.12)',
                overflow: 'hidden',
              }}>
                {/* Card header */}
                <div style={{ background: 'var(--accent)', padding: '24px 24px 60px', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: 16, right: 16, padding: '4px 10px', borderRadius: 100, background: 'rgba(255,255,255,0.2)', fontSize: 11, color: '#fff', fontWeight: 600 }}>● Online</div>
                </div>
                {/* Photo */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 24px 24px', marginTop: -48 }}>
                  <img src="/photo.jpg" style={{
                    width: 120, height: 120, borderRadius: '50%',
objectFit: 'cover', objectPosition: 'center 0%',
                    border: '4px solid #fff',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  }} />
                  <h3 style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: 17, marginTop: 12, color: 'var(--text)' }}>Muhammad Amir</h3>
                  <p style={{ color: 'var(--accent)', fontSize: 13, fontWeight: 600, marginTop: 4 }}>Full-Stack Developer</p>
                  <p style={{ color: 'var(--text2)', fontSize: 12, marginTop: 4 }}>🇵🇰 Rawalpindi, Pakistan</p>

                  {/* Stats */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, width: '100%', marginTop: 16 }}>
                    {[['50+', 'Projects'], ['3+', 'Years']].map(([val, lab]) => (
                      <div key={lab} style={{ textAlign: 'center', padding: '10px', borderRadius: 10, background: 'var(--bg2)' }}>
                        <div style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: 20, color: 'var(--accent)' }}>{val}</div>
                        <div style={{ fontSize: 11, color: 'var(--text2)', fontWeight: 500 }}>{lab}</div>
                      </div>
                    ))}
                  </div>

                  <Link to="/contact" style={{
                    display: 'block', width: '100%', textAlign: 'center',
                    marginTop: 14, padding: '11px', borderRadius: 10,
                    background: 'var(--accent)', color: '#fff',
                    fontWeight: 700, fontSize: 14,
                  }}>Hire Me →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Marquee */}
      <section style={{ padding: '20px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', overflow: 'hidden', background: '#fff' }}>
        <div style={{ display: 'flex', animation: 'marquee 25s linear infinite', width: 'max-content' }}>
          {[...skills, ...skills].map((s, i) => (
            <span key={i} style={{
              padding: '7px 20px', margin: '0 6px',
              borderRadius: 100, border: '1px solid var(--border)',
              fontSize: 13, fontWeight: 600, color: 'var(--text2)',
              background: '#fff', whiteSpace: 'nowrap',
            }}>{s}</span>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              textAlign: 'center', padding: '36px 24px',
              borderRadius: 20, border: '1px solid var(--border)',
              background: 'var(--bg2)',
              boxShadow: 'var(--shadow)',
              transition: 'var(--transition)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow)' }}
            >
              <div style={{ fontFamily: 'var(--font-head)', fontSize: 52, fontWeight: 800, color: 'var(--accent)', lineHeight: 1 }}>{s.value}</div>
              <div style={{ color: 'var(--text2)', fontSize: 14, marginTop: 8, fontWeight: 600 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '100px 24px', background: 'var(--bg2)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <p style={{ color: 'var(--accent)', fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>What I Do</p>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontFamily: 'var(--font-head)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>Services I Offer</h2>
            <p style={{ color: 'var(--text2)', fontSize: 16, maxWidth: 480, margin: '16px auto 0' }}>Professional digital services to help your business grow online.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {services.map((s, i) => (
              <div key={i} style={{
                padding: 32, borderRadius: 20,
                border: '1px solid var(--border)',
                background: '#fff',
                boxShadow: 'var(--shadow)',
                transition: 'var(--transition)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = s.color; e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `0 20px 40px ${s.color}20` }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow)' }}
              >
                <div style={{ width: 52, height: 52, borderRadius: 14, background: `${s.color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: s.color, marginBottom: 20 }}>
                  {s.icon}
                </div>
                <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 20, fontWeight: 700, marginBottom: 10, color: 'var(--text)' }}>{s.title}</h3>
                <p style={{ color: 'var(--text2)', fontSize: 14, lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '100px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <p style={{ color: 'var(--accent)', fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>Client Reviews</p>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontFamily: 'var(--font-head)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>What Clients Say</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{
                padding: 32, borderRadius: 20,
                border: '1px solid var(--border)',
                background: 'var(--bg2)',
                boxShadow: 'var(--shadow)',
              }}>
                <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                  {Array(t.rating).fill(0).map((_, j) => <Star key={j} size={16} fill="#f59e0b" color="#f59e0b" />)}
                </div>
                <p style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.7, marginBottom: 24, fontStyle: 'italic' }}>"{t.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#fff', fontSize: 16 }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 14, color: 'var(--text)' }}>{t.name}</p>
                    <p style={{ color: 'var(--text2)', fontSize: 12 }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ padding: '80px 24px', background: 'var(--accent)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontFamily: 'var(--font-head)', fontWeight: 800, marginBottom: 16, letterSpacing: '-0.03em', color: '#fff' }}>
            Ready to Start Your Project?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 17, marginBottom: 36 }}>
            Let's build something amazing together. Get a free consultation today.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '16px 36px', borderRadius: 14,
              background: '#fff', color: 'var(--accent)',
              fontWeight: 700, fontSize: 16,
              boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            }}>
              Get In Touch <ArrowRight size={18} />
            </Link>
            <a href="/cv.pdf" download="Muhammad-Amir-CV.pdf" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '16px 36px', borderRadius: 14,
              border: '2px solid rgba(255,255,255,0.4)',
              color: '#fff', fontWeight: 700, fontSize: 16,
            }}>📄 Download CV</a>
          </div>
        </div>
      </section>
    </main>
  )
}