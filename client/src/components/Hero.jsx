import { useEffect, useRef, useState } from 'react'
import { profile, socials } from '../data/portfolio.js'
import SocialIcon from './SocialIcon.jsx'
import { useTilt } from './useTilt.js'

function useTyped(words, { typeSpeed = 85, deleteSpeed = 40, pause = 1400 } = {}) {
  const [text, setText] = useState('')
  const idx = useRef(0)
  const del = useRef(false)
  useEffect(() => {
    let t
    const tick = () => {
      const full = words[idx.current % words.length]
      const next = del.current ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1)
      setText(next)
      let delay = del.current ? deleteSpeed : typeSpeed
      if (!del.current && next === full) { del.current = true; delay = pause }
      else if (del.current && next === '') { del.current = false; idx.current += 1; delay = 300 }
      t = setTimeout(tick, delay)
    }
    t = setTimeout(tick, typeSpeed)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])
  return text
}

export default function Hero() {
  const typed = useTyped(profile.roles)
  const tilt = useTilt(12)

  return (
    <section className="hero" id="home">
      <div className="hero__inner">
        <div className="hero__photo-wrap hero-in" {...tilt.bind}>
          <div className="hero__photo-ring" ref={tilt.ref}>
            <img src={profile.avatar} alt={profile.name} className="hero__photo" />
            <span className="hero__photo-badge"><span className="hero__status-dot" /> Open to work</span>
          </div>
        </div>

        <p className="hero__hi hero-in">Hello, I’m</p>
        <h1 className="hero__name hero-in">
          <span className="grad-text">{profile.name}</span>
        </h1>
        <h2 className="hero__role hero-in hero-in--d1">
          I’m a <span className="hero__typed">{typed}</span>
          <span className="hero__caret" />
        </h2>
        <p className="hero__tagline hero-in hero-in--d2">{profile.tagline}</p>

        <div className="hero__actions hero-in hero-in--d2">
          <a href="#projects" className="btn">View my work</a>
          <a href={profile.resumeUrl} className="btn btn--ghost" download>Résumé</a>
        </div>

        <div className="hero__socials hero-in hero-in--d3">
          {socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label}>
              <SocialIcon name={s.icon} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
