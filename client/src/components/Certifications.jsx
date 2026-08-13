import { certifications, softSkills } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <Reveal>
        <p className="section__eyebrow">Extra credentials</p>
        <h2 className="section__title">Certifications &amp; <span className="grad-text">Strengths</span></h2>
      </Reveal>

      <div className="cert-grid">
        {certifications.map((c) => (
          <Reveal className="cert" key={c.title}>
            <div className="cert__flip">
              <div className="cert__face cert__face--front">
                <span className="cert__icon">{c.icon}</span>
                <h3 className="cert__title">{c.title}</h3>
                <p className="cert__issuer">{c.issuer}</p>
              </div>
              <div className="cert__face cert__face--back">
                <span className="cert__badge">✓ Certified</span>
                <p>{c.title}</p>
                <small>{c.issuer}</small>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="soft">
        <h3 className="soft__heading">Soft skills</h3>
        <div className="soft__list">
          {softSkills.map((s) => (
            <span className="soft__chip" key={s}>{s}</span>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
