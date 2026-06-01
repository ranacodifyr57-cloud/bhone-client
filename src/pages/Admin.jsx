import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MessageSquare, Briefcase, LogOut, Plus, Trash2, Eye } from 'lucide-react'
import axios from 'axios'

export default function Admin() {
  const [tab, setTab] = useState('messages')
  const [messages, setMessages] = useState([])
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const token = localStorage.getItem('token')
  const headers = { Authorization: `Bearer ${token}` }

  useEffect(() => {
    if (!token) { navigate('/login'); return }
    Promise.all([
  axios.get('https://bhone-server.vercel.app/api/messages', { headers }),
  axios.get('https://bhone-server.vercel.app/api/projects'),
]).then(([m, p]) => {
  setMessages(Array.isArray(m.data) ? m.data : [])
  setProjects(Array.isArray(p.data) ? p.data : [])
}).catch(() => navigate('/login'))
    .finally(() => setLoading(false))
  }, [])

  const deleteMessage = async id => {
    await axios.delete(`/api/messages/${id}`, { headers })
    setMessages(messages.filter(m => m._id !== id))
  }

  const logout = () => { localStorage.removeItem('token'); navigate('/login') }

  if (loading) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 40, height: 40, border: '3px solid var(--border)', borderTop: '3px solid var(--accent)', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
    </div>
  )

  const cardStyle = { padding: '14px 18px', borderRadius: 12, border: '1px solid var(--border)', background: 'var(--bg3)', marginBottom: 12 }

  return (
    <main style={{ padding: '100px 24px 60px', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 }}>
          <div>
            <h1 style={{ fontFamily: 'var(--font-head)', fontSize: 28, fontWeight: 800 }}>Admin Dashboard</h1>
            <p style={{ color: 'var(--text2)', fontSize: 14 }}>Bhone Enterprises</p>
          </div>
          <button onClick={logout} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 18px', borderRadius: 10, border: '1px solid var(--border)', color: 'var(--text2)', fontSize: 14 }}>
            <LogOut size={15} /> Logout
          </button>
        </div>

        {/* Stats row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16, marginBottom: 40 }}>
          {[
            { icon: <MessageSquare size={20} />, label: 'Messages', value: messages.length, color: '#e8ff00' },
            { icon: <Briefcase size={20} />, label: 'Projects', value: projects.length, color: '#00e5ff' },
          ].map((s, i) => (
            <div key={i} style={{ padding: '24px', borderRadius: 16, border: '1px solid var(--border)', background: 'var(--bg2)', display: 'flex', gap: 16, alignItems: 'center' }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: `${s.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: s.color }}>
                {s.icon}
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-head)', fontSize: 28, fontWeight: 800, color: s.color, lineHeight: 1 }}>{s.value}</div>
                <div style={{ color: 'var(--text2)', fontSize: 13 }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
          {[['messages', 'Messages', <MessageSquare size={15} />], ['projects', 'Projects', <Briefcase size={15} />]].map(([key, label, icon]) => (
            <button key={key} onClick={() => setTab(key)} style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '9px 18px', borderRadius: 10,
              border: `1px solid ${tab === key ? 'rgba(232,255,0,0.4)' : 'var(--border)'}`,
              background: tab === key ? 'rgba(232,255,0,0.08)' : 'transparent',
              color: tab === key ? 'var(--accent)' : 'var(--text2)',
              fontWeight: 600, fontSize: 14,
            }}>{icon}{label}</button>
          ))}
        </div>

        {/* Messages tab */}
        {tab === 'messages' && (
          <div>
            {messages.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px', color: 'var(--text2)' }}>No messages yet.</div>
            ) : messages.map(m => (
              <div key={m._id} style={cardStyle}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 6 }}>
                      <span style={{ fontWeight: 700 }}>{m.name}</span>
                      <span style={{ color: 'var(--text2)', fontSize: 13 }}>{m.email}</span>
                      {m.service && <span style={{ padding: '2px 8px', borderRadius: 6, background: 'rgba(232,255,0,0.1)', border: '1px solid rgba(232,255,0,0.2)', fontSize: 11, color: 'var(--accent)', fontWeight: 600 }}>{m.service}</span>}
                    </div>
                    <p style={{ color: 'var(--text)', fontSize: 14, lineHeight: 1.6 }}>{m.message}</p>
                    <p style={{ color: 'var(--text2)', fontSize: 12, marginTop: 6 }}>{new Date(m.createdAt).toLocaleString()}</p>
                  </div>
                  <button onClick={() => deleteMessage(m._id)} style={{ padding: 8, borderRadius: 8, color: '#ff6b6b', marginLeft: 12 }}>
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Projects tab */}
        {tab === 'projects' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
              <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 18px', borderRadius: 10, background: 'var(--accent)', color: '#000', fontWeight: 700, fontSize: 14 }}>
                <Plus size={15} /> Add Project
              </button>
            </div>
            {projects.map(p => (
              <div key={p._id} style={{ ...cardStyle, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontWeight: 700, fontSize: 15 }}>{p.title}</span>
                  <span style={{ color: 'var(--text2)', fontSize: 13, marginLeft: 12 }}>{p.category}</span>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button style={{ padding: 8, borderRadius: 8, color: 'var(--accent)' }}><Eye size={15} /></button>
                  <button style={{ padding: 8, borderRadius: 8, color: '#ff6b6b' }}><Trash2 size={15} /></button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
