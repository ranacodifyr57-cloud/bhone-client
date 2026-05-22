import { Link } from 'react-router-dom'
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ background: '#080808', borderTop: '1px solid var(--border)', padding: '64px 24px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 48,
          marginBottom: 48,
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, background: 'var(--accent)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: 18, color: '#000' }}>B</span>
              </div>
              <span style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: 17 }}>
                Bhone Enterprises
              </span>
            </div>
            <p style={{ color: 'var(--text2)', fontSize: 14, lineHeight: 1.7, maxWidth: 260 }}>
              Muhammad Amir — Professional freelancer delivering web solutions, design, and digital services.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
              {[
                { icon: <Github size={17} />, href: '#' },
                { icon: <Linkedin size={17} />, href: '#' },
                { icon: <Twitter size={17} />, href: '#' },
              ].map((s, i) => (
                <a key={i} href={s.href} style={{
                  width: 38, height: 38,
                  border: '1px solid var(--border)',
                  borderRadius: 10,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text2)',
                  transition: 'var(--transition)',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text2)' }}
                >{s.icon}</a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-head)', fontSize: 14, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text2)', marginBottom: 20 }}>Navigation</h4>
            {[['/', 'Home'], ['/services', 'Services'], ['/portfolio', 'Portfolio'], ['/contact', 'Contact']].map(([to, label]) => (
              <Link key={to} to={to} style={{ display: 'block', color: 'var(--text2)', fontSize: 14, marginBottom: 10, transition: 'var(--transition)' }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--text2)'}
              >{label}</Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-head)', fontSize: 14, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text2)', marginBottom: 20 }}>Services</h4>
            {['Web Development', 'UI/UX Design', 'E-Commerce', 'SEO Optimization', 'Mobile Apps'].map(s => (
              <p key={s} style={{ color: 'var(--text2)', fontSize: 14, marginBottom: 10 }}>{s}</p>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-head)', fontSize: 14, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text2)', marginBottom: 20 }}>Contact</h4>
            {[
              { icon: <Mail size={15} />, text: 'rana.codifyr57@gmail.com' },
              { icon: <Phone size={15} />, text: '+92 324 7352486' },
              { icon: <MapPin size={15} />, text: 'Rawalpindi, Pakistan' },
            ].map((c, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12, color: 'var(--text2)', fontSize: 14 }}>
                <span style={{ color: 'var(--accent)' }}>{c.icon}</span>
                {c.text}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: 'var(--text2)', fontSize: 13 }}>© {year} Bhone Enterprises. All rights reserved.</p>
          <p style={{ color: 'var(--text2)', fontSize: 13 }}>Made with ❤️ by Muhammad Amir</p>
        </div>
      </div>
    </footer>
  )
}
