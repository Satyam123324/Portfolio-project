import { skills } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'

export default function Skills() {
  return (
    <section className="section" id="skills">
      <Reveal>
        <p className="section__eyebrow">What I work with</p>
        <h2 className="section__title">My <span className="grad-text">Skills</span></h2>
      </Reveal>

      <div className="skills">
        {skills.map((s, i) => (
          <Reveal className="skill" key={s.name}>
            <div className="skill__head">
              <div className="skill__name">
                {s.icon ? (
                  <img src={s.icon} alt="" className="skill__icon" />
                ) : (
                  <span className="skill__icon skill__icon--text grad-text">{s.name[0]}</span>
                )}
                {s.name}
              </div>
              <span className="skill__pct">{s.level}%</span>
            </div>
            <div className="skill__bar">
              <span
                className="skill__fill"
                style={{ width: `${s.level}%`, transitionDelay: `${i * 60}ms` }}
              />
            </div>
            <span className="skill__group">{s.group}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
