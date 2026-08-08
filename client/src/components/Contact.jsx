import { useState } from 'react'
import { profile, socials } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'
import SocialIcon from './SocialIcon.jsx'

// Backend base URL. In dev, Vite proxies /api to localhost:5000.
// In production set VITE_API_URL to your deployed backend (e.g. Render URL).
const API_BASE = import.meta.env.VITE_API_URL || ''

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ state: 'idle', msg: '' })

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus({ state: 'error', msg: 'Please fill in all fields.' })
      return
    }
    setStatus({ state: 'loading', msg: 'Sending…' })
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || 'Something went wrong.')
      setStatus({ state: 'success', msg: 'Thanks! Your message has been sent. 🎉' })
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus({
        state: 'error',
        msg:
          'Could not reach the server. Start the backend, or email me directly at ' +
          profile.email,
      })
    }
  }

  return (
    <section className="section" id="contact">
      <Reveal>
        <p className="section__eyebrow">Let’s connect</p>
        <h2 className="section__title">Get In <span className="grad-text">Touch</span></h2>
      </Reveal>

      <div className="contact">
        <Reveal className="contact__intro">
          <h3>Have a project or opportunity in mind?</h3>
          <p>
            I’m open to internships, freelance work, and collaboration. Drop me a message and
            I’ll get back to you as soon as I can.
          </p>
          <a href={`mailto:${profile.email}`} className="contact__email">
            <SocialIcon name="mail" /> {profile.email}
          </a>
          <div className="contact__socials">
            {socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label}>
                <SocialIcon name={s.icon} />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal className="contact__formwrap">
          <form className="contact__form" onSubmit={submit} noValidate>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={update}
                placeholder="Your name"
                autoComplete="name"
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={update}
                placeholder="you@example.com"
                autoComplete="email"
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={update}
                placeholder="Tell me a bit about it…"
              />
            </label>
            <button type="submit" className="btn" disabled={status.state === 'loading'}>
              {status.state === 'loading' ? 'Sending…' : 'Send Message'}
            </button>
            {status.msg && (
              <p className={`contact__status contact__status--${status.state}`}>{status.msg}</p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
