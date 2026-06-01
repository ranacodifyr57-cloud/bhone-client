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
      background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
    }}>
      <nav style={{
        maxWidth: 1200, margin: '0 auto',
        padding: '0 24px',
        height: 72,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 36, height: 36,
            background: 'var(--accent)',
            borderRadius: 8,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: 18, color: '#000' }}>B</span>
          </div>
          <span style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: 17, letterSpacing: '-0.02em' }}>
            Bhone<span style={{ color: 'var(--accent)' }}>.</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: 8, listStyle: 'none', alignItems: 'center' }}
            className="desktop-nav">
          {links.map(l => (
            <li key={l.to}>
              <Link to={l.to} style={{
                padding: '8px 16px',
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 500,
                color: pathname === l.to ? 'var(--accent)' : 'var(--text2)',
                background: pathname === l.to ? 'rgba(232,255,0,0.08)' : 'transparent',
                transition: 'var(--transition)',
                display: 'block',
              }}
              onMouseEnter={e => { if (pathname !== l.to) e.target.style.color = 'var(--text)' }}
              onMouseLeave={e => { if (pathname !== l.to) e.target.style.color = 'var(--text2)' }}
              >{l.label}</Link>
            </li>
          ))}
          <li>
            <Link to="/contact" style={{
              padding: '9px 20px',
              borderRadius: 10,
              fontSize: 14,
              fontWeight: 600,
              color: '#000',
              background: 'var(--accent)',
              transition: 'var(--transition)',
              display: 'block',
            }}
            onMouseEnter={e => e.target.style.transform = 'translateY(-1px)'}
            onMouseLeave={e => e.target.style.transform = 'translateY(0)'}
            >Hire Me</Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} style={{ color: 'var(--text)', padding: 8 }}
                className="mobile-toggle">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: 'rgba(17,17,17,0.98)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid var(--border)',
          padding: '16px 24px 24px',
        }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{
              display: 'block',
              padding: '14px 0',
              borderBottom: '1px solid var(--border)',
              fontFamily: 'var(--font-head)',
              fontWeight: 600,
              fontSize: 18,
              color: pathname === l.to ? 'var(--accent)' : 'var(--text)',
            }}>{l.label}</Link>
          ))}
          <Link to="/contact" style={{
            display: 'block',
            marginTop: 16,
            padding: '14px 0',
            textAlign: 'center',
            background: 'var(--accent)',
            borderRadius: 12,
            fontFamily: 'var(--font-head)',
            fontWeight: 700,
            fontSize: 16,
            color: '#000',
          }}>Hire Me</Link>
        </div>
      )}

      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-toggle { display: none !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
      <a href="https://wa.me/923247352486" 
   target="_blank"
   style={{
     position: 'fixed', bottom: 24, right: 24,
     width: 56, height: 56, borderRadius: '50%',
     background: '#25D366',
     display: 'flex', alignItems: 'center', 
     justifyContent: 'center',
     fontSize: 28, zIndex: 999,
     boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
   }}>
  💬
</a>
    </header>
  )
}
