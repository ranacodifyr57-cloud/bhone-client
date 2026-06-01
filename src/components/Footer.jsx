import { Link } from 'react-router-dom'
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ background: '#0f172a', padding: '64px 24px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 48, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 38, height: 38, background: 'var(--accent)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: 18, color: '#fff' }}>B</span>
              </div>
              <span style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: 18, color: '#fff' }}>
                Bhone<span style={{ color: 'var(--accent)' }}>.</span>
              </span>
            </div>
            <p style={{ color: '#94a3b8', fontSize: 14, lineHeight: 1.7, maxWidth: 260 }}>
              Muhammad Amir — Professional freelancer delivering web solutions, design & digital services from Rawalpindi, Pakistan.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              {[<Github size={16} />, <Linkedin size={16} />, <Twitter size={16} />].map((icon, i) => (
                <a key={i} href="#" style={{
                  width: 36, height: 36, borderRadius: 8,
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#94a3b8', transition: 'var(--transition)',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#94a3b8' }}
                >{icon}</a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-head)', fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: 20 }}>Navigation</h4>
            {[['/', 'Home'], ['/services', 'Services'], ['/portfolio', 'Portfolio'], ['/contact', 'Contact']].map(([to, label]) => (
              <Link key={to} to={to} style={{ display: 'block', color: '#94a3b8', fontSize: 14, marginBottom: 10, transition: 'var(--transition)' }}
              onMouseEnter={e => e.target.style.color = '#fff'}
              onMouseLeave={e => e.target.style.color = '#94a3b8'}
              >{label}</Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-head)', fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: 20 }}>Services</h4>
            {['Web Development', 'UI/UX Design', 'E-Commerce', 'SEO Optimization', 'Mobile Apps'].map(s => (
              <p key={s} style={{ color: '#94a3b8', fontSize: 14, marginBottom: 10 }}>{s}</p>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-head)', fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: 20 }}>Contact</h4>
            {[
              { icon: <Mail size={14} />, text: 'rana.codifyr57@gmail.com' },
              { icon: <Phone size={14} />, text: '+92 324 7352486' },
              { icon: <MapPin size={14} />, text: 'Rawalpindi, Pakistan' },
            ].map((c, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12, color: '#94a3b8', fontSize: 14 }}>
                <span style={{ color: 'var(--accent)' }}>{c.icon}</span>
                {c.text}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: '#64748b', fontSize: 13 }}>© {year} Bhone Enterprises. All rights reserved.</p>
          <p style={{ color: '#64748b', fontSize: 13 }}>Made with ❤️ by Muhammad Amir</p>
        </div>
      </div>
    </footer>
  )
}