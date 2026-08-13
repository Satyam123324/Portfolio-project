import { experience } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'
import { useTilt } from './useTilt.js'

function ExpCard({ e }) {
  const tilt = useTilt(7)
  return (
    <Reveal className="exp">
      <div className="exp__tilt" ref={tilt.ref} {...tilt.bind}>
        <div className="exp__glow" aria-hidden="true" />
        <div className="exp__top">
          <div>
            <h3 className="exp__role">{e.role}</h3>
            <p className="exp__company">{e.company}</p>
          </div>
          <span className={`exp__period ${e.current ? 'exp__period--now' : ''}`}>{e.period}</span>
        </div>
        <ul className="exp__points">
          {e.points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}

export default function Experience() {
  return (
    <section className="section" id="experience">
      <Reveal>
        <p className="section__eyebrow">Where I’ve worked</p>
        <h2 className="section__title">Experience &amp; <span className="grad-text">Internships</span></h2>
      </Reveal>
      <div className="exp-grid">
        {experience.map((e) => (
          <ExpCard key={e.role} e={e} />
        ))}
      </div>
    </section>
  )
}
