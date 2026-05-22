import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Lock, Mail, Eye, EyeOff } from 'lucide-react'
import axios from 'axios'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [show, setShow] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async e => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const { data } = await axios.post('/api/auth/login', form)
      localStorage.setItem('token', data.token)
      navigate('/admin')
    } catch (err) {
      setError('Invalid email or password')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    width: '100%', padding: '14px 16px 14px 44px',
    borderRadius: 12, background: 'var(--bg3)',
    border: '1px solid var(--border)',
    color: 'var(--text)', fontSize: 15,
    transition: 'var(--transition)',
  }

  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px', background: 'var(--bg)' }}>
      <div style={{ width: '100%', maxWidth: 420 }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ width: 56, height: 56, background: 'var(--accent)', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
            <Lock size={24} color="#000" strokeWidth={2.5} />
          </div>
          <h1 style={{ fontFamily: 'var(--font-head)', fontSize: 28, fontWeight: 800, marginBottom: 8 }}>Admin Login</h1>
          <p style={{ color: 'var(--text2)', fontSize: 14 }}>Bhone Enterprises Dashboard</p>
        </div>

        <form onSubmit={submit} style={{ padding: 32, borderRadius: 24, border: '1px solid var(--border)', background: 'var(--bg2)' }}>
          <div style={{ marginBottom: 16, position: 'relative' }}>
            <Mail size={16} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text2)' }} />
            <input name="email" type="email" value={form.email} onChange={handle} required placeholder="admin@bhoneenterprises.com" style={inputStyle}
            onFocus={e => e.target.style.borderColor = 'rgba(232,255,0,0.5)'}
            onBlur={e => e.target.style.borderColor = 'var(--border)'} />
          </div>
          <div style={{ marginBottom: 24, position: 'relative' }}>
            <Lock size={16} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text2)' }} />
            <input name="password" type={show ? 'text' : 'password'} value={form.password} onChange={handle} required placeholder="Password" style={{ ...inputStyle, paddingRight: 44 }}
            onFocus={e => e.target.style.borderColor = 'rgba(232,255,0,0.5)'}
            onBlur={e => e.target.style.borderColor = 'var(--border)'} />
            <button type="button" onClick={() => setShow(!show)} style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text2)', background: 'none', border: 'none', cursor: 'pointer' }}>
              {show ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {error && <p style={{ color: '#ff6b6b', fontSize: 13, marginBottom: 16, textAlign: 'center' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '14px', borderRadius: 12, background: 'var(--accent)', color: '#000', fontWeight: 700, fontSize: 16 }}>
            {loading ? 'Logging in...' : 'Login to Dashboard'}
          </button>
        </form>
      </div>
    </main>
  )
}
