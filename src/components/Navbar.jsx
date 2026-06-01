import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'all 0.4s ease',
      background: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.8)',
      backdropFilter: 'blur(20px)',
      borderBottom: scrolled ? '1px solid rgba(0,0,0,0.08)' : '1px solid transparent',
      boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.06)' : 'none',
    }}>
      <nav style={{
        maxWidth: 1200, margin: '0 auto',
        padding: '0 24px', height: 72,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 38, height: 38,
            background: 'var(--accent)',
            borderRadius: 10,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(26,86,219,0.3)',
          }}>
            <span style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: 18, color: '#fff' }}>B</span>
          </div>
          <span style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: 18, letterSpacing: '-0.02em', color: 'var(--text)' }}>
            Bhone<span style={{ color: 'var(--accent)' }}>.</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: 4, listStyle: 'none', alignItems: 'center' }} className="desktop-nav">
          {links.map(l => (
            <li key={l.to}>
              <Link to={l.to} style={{
                padding: '8px 16px', borderRadius: 8, fontSize: 14, fontWeight: 600,
                color: pathname === l.to ? 'var(--accent)' : 'var(--text2)',
                background: pathname === l.to ? 'var(--accent-light)' : 'transparent',
                transition: 'var(--transition)', display: 'block',
              }}
              onMouseEnter={e => { if (pathname !== l.to) { e.target.style.color = 'var(--text)'; e.target.style.background = 'var(--bg2)' }}}
              onMouseLeave={e => { if (pathname !== l.to) { e.target.style.color = 'var(--text2)'; e.target.style.background = 'transparent' }}}
              >{l.label}</Link>
            </li>
          ))}
          <li style={{ marginLeft: 8 }}>
            <Link to="/contact" style={{
              padding: '10px 22px', borderRadius: 10, fontSize: 14, fontWeight: 700,
              color: '#fff', background: 'var(--accent)',
              transition: 'var(--transition)', display: 'block',
              boxShadow: '0 4px 12px rgba(26,86,219,0.3)',
            }}
            onMouseEnter={e => { e.target.style.transform = 'translateY(-1px)'; e.target.style.boxShadow = '0 8px 20px rgba(26,86,219,0.4)' }}
            onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 4px 12px rgba(26,86,219,0.3)' }}
            >Hire Me</Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} style={{ color: 'var(--text)', padding: 8 }} className="mobile-toggle">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: '#fff',
          borderTop: '1px solid var(--border)',
          padding: '16px 24px 24px',
          boxShadow: '0 12px 40px rgba(0,0,0,0.1)',
        }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{
              display: 'block', padding: '14px 0',
              borderBottom: '1px solid var(--border)',
              fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: 18,
              color: pathname === l.to ? 'var(--accent)' : 'var(--text)',
            }}>{l.label}</Link>
          ))}
          <Link to="/contact" style={{
            display: 'block', marginTop: 16, padding: '14px 0',
            textAlign: 'center', background: 'var(--accent)',
            borderRadius: 12, fontFamily: 'var(--font-head)',
            fontWeight: 700, fontSize: 16, color: '#fff',
          }}>Hire Me</Link>
        </div>
      )}

      {/* WhatsApp */}
      <a href="https://wa.me/923247352486" target="_blank" style={{
  position: 'fixed', bottom: 32, right: 32,
  width: 52, height: 52, borderRadius: '50%',
  background: '#25D366',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  fontSize: 24, zIndex: 999,
  boxShadow: '0 4px 16px rgba(37,211,102,0.5)',
  transition: 'var(--transition)',
}}
onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,211,102,0.6)' }}
onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,211,102,0.5)' }}
>💬</a>

      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-toggle { display: none !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  )
}