import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react'
import axios from 'axios'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', budget: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async e => {
    e.preventDefault()
    setStatus('loading')
    try {
      await axios.post('https://bhone-server.vercel.app/api/contact', form)
      setStatus('success')
      setForm({ name: '', email: '', service: '', budget: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%', padding: '14px 16px',
    borderRadius: 12,
    background: 'var(--bg3)',
    border: '1px solid var(--border)',
    color: 'var(--text)',
    fontSize: 15,
    transition: 'var(--transition)',
  }

  return (
    <main style={{ padding: '120px 24px 80px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 70 }}>
          <p style={{ color: 'var(--accent)', fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>Let's Talk</p>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontFamily: 'var(--font-head)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 16 }}>Get In Touch</h1>
          <p style={{ color: 'var(--text2)', fontSize: 17, maxWidth: 480, margin: '0 auto' }}>Ready to start your project? Send me a message and I'll get back within 24 hours.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 48, alignItems: 'start' }}>
          {/* Info panel */}
          <div>
            <div style={{ padding: 32, borderRadius: 24, border: '1px solid var(--border)', background: 'var(--bg2)', marginBottom: 20 }}>
              <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 20, fontWeight: 700, marginBottom: 24 }}>Contact Info</h3>
              {[
                { icon: <Mail size={18} />, label: 'Email', value: 'amir@bhoneenterprises.com', color: '#e8ff00' },
                { icon: <Phone size={18} />, label: 'WhatsApp', value: '+92 300 0000000', color: '#00e5ff' },
                { icon: <MapPin size={18} />, label: 'Location', value: 'Rawalpindi, Pakistan', color: '#a855f7' },
              ].map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, marginBottom: 20 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `${c.color}15`, border: `1px solid ${c.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: c.color, flexShrink: 0 }}>
                    {c.icon}
                  </div>
                  <div>
                    <p style={{ color: 'var(--text2)', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 2 }}>{c.label}</p>
                    <p style={{ fontSize: 14, fontWeight: 500 }}>{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ padding: 24, borderRadius: 20, background: 'rgba(232,255,0,0.05)', border: '1px solid rgba(232,255,0,0.15)' }}>
              <p style={{ color: 'var(--accent)', fontWeight: 700, fontSize: 15, marginBottom: 8 }}>⚡ Quick Response</p>
              <p style={{ color: 'var(--text2)', fontSize: 13, lineHeight: 1.6 }}>I typically respond within 2–4 hours during business hours (9AM–6PM PKT).</p>
            </div>
          </div>

          {/* Form */}
          <div style={{ padding: 40, borderRadius: 24, border: '1px solid var(--border)', background: 'var(--bg2)' }}>
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <CheckCircle2 size={64} color="var(--accent)" style={{ margin: '0 auto 20px' }} />
                <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 24, fontWeight: 800, marginBottom: 12 }}>Message Sent!</h3>
                <p style={{ color: 'var(--text2)' }}>Thanks for reaching out. I'll get back to you within 24 hours.</p>
                <button onClick={() => setStatus('idle')} style={{ marginTop: 24, padding: '12px 28px', borderRadius: 10, background: 'var(--accent)', color: '#000', fontWeight: 700 }}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={submit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--text2)', marginBottom: 8 }}>Your Name *</label>
                    <input name="name" value={form.name} onChange={handle} required placeholder="Muhammad Ali" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(232,255,0,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--text2)', marginBottom: 8 }}>Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handle} required placeholder="you@example.com" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(232,255,0,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--text2)', marginBottom: 8 }}>Service Needed</label>
                    <select name="service" value={form.service} onChange={handle} style={{ ...inputStyle, appearance: 'none' }}>
                      <option value="">Select service</option>
                      <option>Web Development</option>
                      <option>UI/UX Design</option>
                      <option>E-Commerce</option>
                      <option>Mobile App</option>
                      <option>SEO & Marketing</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--text2)', marginBottom: 8 }}>Budget</label>
                    <select name="budget" value={form.budget} onChange={handle} style={{ ...inputStyle, appearance: 'none' }}>
                      <option value="">Select budget</option>
                      <option>Under $300</option>
                      <option>$300 – $700</option>
                      <option>$700 – $1500</option>
                      <option>$1500+</option>
                    </select>
                  </div>
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--text2)', marginBottom: 8 }}>Message *</label>
                  <textarea name="message" value={form.message} onChange={handle} required rows={5}
                    placeholder="Tell me about your project..."
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 130 }}
                    onFocus={e => e.target.style.borderColor = 'rgba(232,255,0,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
                {status === 'error' && <p style={{ color: '#ff6b6b', fontSize: 13, marginBottom: 16 }}>Something went wrong. Please try WhatsApp instead.</p>}
                <button type="submit" disabled={status === 'loading'} style={{
                  width: '100%', padding: '15px',
                  borderRadius: 12,
                  background: status === 'loading' ? 'rgba(232,255,0,0.5)' : 'var(--accent)',
                  color: '#000', fontWeight: 700, fontSize: 16,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  transition: 'var(--transition)',
                }}>
                  {status === 'loading' ? 'Sending...' : <><Send size={16} /> Send Message</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          main > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}
