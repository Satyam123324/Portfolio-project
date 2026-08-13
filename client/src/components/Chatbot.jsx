import { useEffect, useRef, useState } from 'react'
import {
  profile, socials, skills, education, projects, about,
  experience, certifications, softSkills,
} from '../data/portfolio.js'

const FIRST = profile.name.split(' ')[0]
const GENERIC = ['platform', 'system', 'based', 'marketplace', 'management', 'intelligence', 'developer', 'personalized']

// find a project the question is about (by title keywords)
function projectByQuery(q) {
  let best = null, score = 0
  projects.forEach((p) => {
    const words = (p.title.toLowerCase().match(/[a-z0-9]+/g) || [])
      .filter((w) => w.length >= 3 && !GENERIC.includes(w))
    let s = 0
    words.forEach((w) => { if (q.includes(w)) s += 2 })
    if (s > score) { score = s; best = p }
  })
  return score > 0 ? best : null
}

const projectActions = (p) => {
  const a = []
  if (p.demo && p.demo !== '#') a.push({ label: '↗ Live Demo', url: p.demo })
  if (p.github && p.github !== '#') a.push({ label: '⚙️ Code', url: p.github })
  a.push({ label: 'See all projects ↓', url: '#projects' })
  return a
}

// ── The brain: answers ONLY from portfolio data ──
function answer(qRaw) {
  const q = ` ${qRaw.toLowerCase()} `
  const has = (...w) => w.some((x) => q.includes(x))

  // small talk
  if (has(' hi ', ' hii', 'hello', ' hey', 'namaste', ' yo ', 'good morning', 'good evening'))
    return { text: `Hey! 👋 I’m ${FIRST}’s assistant. I can tell you about his projects, skills, experience, education, certifications, or how to reach him. What would you like to know?`, chips: ['Projects', 'Skills', 'Experience', 'Contact'] }
  if (has('how are you', 'how r u', "what's up", 'whats up'))
    return { text: `I’m great, thanks for asking! 😊 Ready to tell you anything about ${FIRST}.`, chips: ['Projects', 'Skills', 'Résumé'] }
  if (has('who made you', 'who built you', 'who are you', 'are you real', 'are you a bot', 'chatgpt'))
    return { text: `I’m a little assistant built right into ${FIRST}’s portfolio — I only answer using his real information.`, chips: ['Projects', 'Skills'] }
  if (has('thank', ' thx', 'nice', 'cool', 'awesome', 'great job'))
    return { text: `You’re welcome! 😊 Anything else about ${FIRST}?`, chips: ['Projects', 'Contact'] }
  if (has(' bye', 'goodbye', 'see you', 'see ya'))
    return { text: `Thanks for stopping by! Reach ${FIRST} at ${profile.email}. 👋` }
  if (has('help', 'what can you', 'options', 'menu', 'what do you know'))
    return { text: `I can answer about ${FIRST}’s:\n• Projects (ask about any by name)\n• Skills & tech stack\n• Experience / internships\n• Education\n• Certifications\n• Résumé & contact\nTry the chips below 👇`, chips: ['Projects', 'Skills', 'Experience', 'Education', 'Certifications', 'Contact'] }

  // resume
  if (has('resume', ' cv ', 'download'))
    return { text: `Here’s ${FIRST}’s résumé — you can download it:`, actions: [{ label: '📄 Download Résumé', url: profile.resumeUrl }], chips: ['Skills', 'Experience'] }

  // availability / hire
  if (has('available', 'open to work', 'hire', 'freelance', 'looking for', 'job', 'opportunit', 'intern you', 'recruit'))
    return { text: `Yes — ${FIRST} is open to internships, full-time roles, and freelance work. The best way to reach him is email.`, actions: [{ label: '✉️ Email', url: `mailto:${profile.email}` }, { label: 'LinkedIn', url: socials.find((s) => s.icon === 'linkedin')?.url }], chips: ['Résumé', 'Projects'] }

  // specific project
  const proj = projectByQuery(q)
  if (proj && has('project', 'giftsoul', 'photoconnect', 'gym', 'review', 'analyzer', 'knowledge', 'gap', 'tell me about', 'gift', 'photo', 'about'))
    return { text: `${proj.title}\n\n${proj.description}\n\nTech: ${proj.tags.join(', ')}`, actions: projectActions(proj), chips: ['Other projects', 'Skills'] }

  // projects filtered by tech
  const techHit = [...new Set(projects.flatMap((p) => p.tags))].find((t) => q.includes(t.toLowerCase().split(' ')[0]))
  if (techHit && has('project', 'which', 'what', 'built', 'using', 'made'))
    return {
      text: `Projects using ${techHit}:\n` + projects.filter((p) => p.tags.some((t) => t.toLowerCase().includes(techHit.toLowerCase().split(' ')[0]))).map((p) => `• ${p.title}`).join('\n'),
      chips: ['All projects', 'Skills'],
    }

  // all projects
  if (has('project', 'work', 'built', 'made', 'portfolio work', 'apps', ' app '))
    return {
      text: `${FIRST} has built ${projects.length} projects, including:\n` +
        projects.map((p) => `• ${p.title}`).join('\n') + `\n\nAsk me about any one by name!`,
      actions: [{ label: 'Open Projects ↓', url: '#projects' }],
      chips: ['GiftSoul', 'PhotoConnect', 'AI Review Analyzer'],
    }

  // specific skill
  const skillHit = skills.find((s) => q.includes(s.name.toLowerCase().split(' ')[0].split('.')[0]))
  if (skillHit && has('do you know', 'can you', 'know ', 'experience with', 'good at', 'familiar', 'level'))
    return { text: `Yes! ${FIRST} works with ${skillHit.name} (about ${skillHit.level}% proficiency, ${skillHit.group}).`, chips: ['All skills', 'Projects'] }

  // top skills
  if (has('best skill', 'top skill', 'strongest', 'main skill', 'main tech'))
    return { text: `${FIRST}’s strongest areas are the MERN stack plus Java. Top skills: ` + [...skills].sort((a, b) => b.level - a.level).slice(0, 4).map((s) => s.name).join(', ') + '.', chips: ['All skills', 'Projects'] }

  // all skills
  if (has('skill', 'tech', 'stack', 'language', 'know', 'tools', 'technolog'))
    return { text: `${FIRST} works with: ${skills.map((s) => s.name).join(', ')}. Main focus: the MERN stack (MongoDB, Express, React, Node) plus Java.`, chips: ['Projects', 'Certifications'] }

  // soft skills
  if (has('soft skill', 'strength', 'personality', 'leadership', 'teamwork'))
    return { text: `${FIRST}’s soft skills: ${softSkills.join(', ')}.`, chips: ['Skills', 'Experience'] }

  // experience
  if (has('experience', 'intern', 'internship', 'worked', ' company', 'infosys', 'unified'))
    return { text: `${FIRST}’s experience:\n` + experience.map((e) => `• ${e.role} — ${e.company} (${e.period})`).join('\n'), actions: [{ label: 'See Experience ↓', url: '#experience' }], chips: ['Projects', 'Certifications'] }

  // certifications
  if (has('certif', 'course', 'workshop', 'credential', 'nvidia', 'be10x'))
    return { text: `${FIRST}’s certifications:\n` + certifications.map((c) => `• ${c.title} — ${c.issuer}`).join('\n'), actions: [{ label: 'See Certifications ↓', url: '#certifications' }], chips: ['Skills', 'Contact'] }

  // education
  if (has('education', 'study', 'studies', 'degree', 'college', 'university', 'mca', 'bca', 'qualif', 'gpa', 'sgpa', 'marks'))
    return { text: `🎓 Education:\n` + education.map((e) => `• ${e.degree} (${e.period}) — ${e.status}\n  ${e.institution}, ${e.score}`).join('\n'), chips: ['Experience', 'Skills'] }

  // contact / phone / socials
  if (has('phone', 'call', 'number', 'mobile', 'whatsapp'))
    return { text: `📞 You can call ${FIRST} at ${profile.phone}, or email ${profile.email}.`, actions: [{ label: '✉️ Email', url: `mailto:${profile.email}` }] }
  if (has('github'))
    return { text: `Here’s ${FIRST}’s GitHub:`, actions: socials.filter((s) => s.icon === 'github').map((s) => ({ label: 'GitHub', url: s.url })) }
  if (has('linkedin'))
    return { text: `Here’s ${FIRST}’s LinkedIn:`, actions: socials.filter((s) => s.icon === 'linkedin').map((s) => ({ label: 'LinkedIn', url: s.url })) }
  if (has('contact', 'email', 'reach', 'connect', 'touch', 'mail', 'get in'))
    return {
      text: `You can reach ${FIRST} at ${profile.email} or ${profile.phone}. He’s open to opportunities!`,
      actions: [
        { label: '✉️ Email', url: `mailto:${profile.email}` },
        ...socials.filter((s) => s.icon !== 'mail').map((s) => ({ label: s.label, url: s.url })),
      ],
      chips: ['Résumé', 'Projects'],
    }

  // location
  if (has('location', 'where', 'based', 'city', 'country', 'live', 'from'))
    return { text: `${FIRST} is based in ${profile.location}.`, chips: ['Contact', 'Experience'] }

  // about / name / role
  if (has('who is', 'about', 'yourself', 'introduce', 'tell me about him', 'bio', 'summary'))
    return { text: about[0], actions: [{ label: 'Read more ↓', url: '#about' }], chips: ['Projects', 'Skills', 'Experience'] }
  if (has('name'))
    return { text: `His name is ${profile.name}.`, chips: ['Projects', 'Skills'] }
  if (has('role', ' do ', 'title', 'position', 'what is he'))
    return { text: `${FIRST} is a ${profile.roles.slice(0, 3).join(', ')}.`, chips: ['Skills', 'Experience'] }
  if (has(' age', 'old are', 'salary', 'phone password'))
    return { text: `I only share what ${FIRST} has put in his portfolio — that detail isn’t here. Try asking about his projects, skills, or how to contact him.`, chips: ['Projects', 'Contact'] }

  return {
    text: `I can only answer about ${FIRST}. Try one of these 👇`,
    chips: ['Projects', 'Skills', 'Experience', 'Education', 'Certifications', 'Contact'],
  }
}

const DEFAULT_CHIPS = ['Projects', 'Skills', 'Experience', 'Contact', 'Résumé']

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [tease, setTease] = useState(false)
  const [typing, setTyping] = useState(false)
  const [chips, setChips] = useState(DEFAULT_CHIPS)
  const [messages, setMessages] = useState([
    { from: 'bot', text: `👋 Hi! I’m ${FIRST}’s assistant. Ask me anything about his projects, skills, experience, or how to get in touch.` },
  ])
  const [value, setValue] = useState('')
  const bodyRef = useRef(null)

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [messages, typing, open])

  // greeting popup after a moment (only if unopened)
  useEffect(() => {
    const t = setTimeout(() => setTease(true), 3500)
    return () => clearTimeout(t)
  }, [])

  const openPanel = () => { setOpen(true); setTease(false) }

  const send = (text) => {
    const q = (text ?? value).trim()
    if (!q) return
    setMessages((m) => [...m, { from: 'user', text: q }])
    setValue('')
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      const res = answer(q)
      setMessages((m) => [...m, { from: 'bot', ...res }])
      setChips(res.chips || DEFAULT_CHIPS)
    }, 480 + Math.random() * 320)
  }

  const reset = () => {
    setMessages([{ from: 'bot', text: `Fresh start! 🌟 Ask me anything about ${FIRST}.` }])
    setChips(DEFAULT_CHIPS)
  }

  const runAction = (a, e) => {
    if (a.url && a.url.startsWith('#')) {
      e.preventDefault()
      document.querySelector(a.url)?.scrollIntoView({ behavior: 'smooth' })
      setOpen(false)
    }
  }

  return (
    <div className={`bot ${open ? 'bot--open' : ''}`}>
      {open && (
        <div className="bot__panel" role="dialog" aria-label="Portfolio assistant">
          <div className="bot__head">
            <div className="bot__avatar">🤖</div>
            <div>
              <strong>Ask about {FIRST}</strong>
              <span className="bot__status"><i /> Online · replies instantly</span>
            </div>
            <button className="bot__reset" onClick={reset} aria-label="Reset chat" title="Reset chat">↺</button>
            <button className="bot__close" onClick={() => setOpen(false)} aria-label="Close">✕</button>
          </div>

          <div className="bot__body" ref={bodyRef}>
            {messages.map((m, i) => (
              <div key={i} className={`bot__msg bot__msg--${m.from}`}>
                <div className="bot__bubble">
                  {m.text.split('\n').map((line, j, arr) => (
                    <span key={j}>{line}{j < arr.length - 1 ? <br /> : null}</span>
                  ))}
                  {m.actions && (
                    <div className="bot__actions">
                      {m.actions.filter((a) => a.url).map((a) => (
                        <a key={a.label} href={a.url} onClick={(e) => runAction(a, e)}
                          target={a.url.startsWith('#') ? undefined : '_blank'} rel="noreferrer" className="bot__action">{a.label}</a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {typing && (
              <div className="bot__msg bot__msg--bot">
                <div className="bot__bubble bot__typing"><span /><span /><span /></div>
              </div>
            )}
          </div>

          <div className="bot__suggest">
            {chips.map((s) => (
              <button key={s} onClick={() => send(s)}>{s}</button>
            ))}
          </div>

          <form className="bot__input" onSubmit={(e) => { e.preventDefault(); send() }}>
            <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Ask a question…" aria-label="Message" />
            <button type="submit" aria-label="Send">➤</button>
          </form>
        </div>
      )}

      {!open && tease && (
        <button className="bot__tease" onClick={openPanel}>
          👋 Hi! Ask me anything about {FIRST}
          <i onClick={(e) => { e.stopPropagation(); setTease(false) }}>✕</i>
        </button>
      )}

      <button className="bot__fab" onClick={() => (open ? setOpen(false) : openPanel())} aria-label="Chat assistant">
        {open ? '✕' : '💬'}
        {!open && <span className="bot__dot" />}
      </button>
    </div>
  )
}
