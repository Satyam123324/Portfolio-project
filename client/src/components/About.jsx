import { education, about, stats } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section className="section" id="about">
      <Reveal>
        <p className="section__eyebrow">Get to know me</p>
        <h2 className="section__title">About <span className="grad-text">Me</span></h2>
      </Reveal>

      <div className="about">
        <Reveal className="about__bio">
          {about.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          <div className="about__facts">
            {stats.map((s) => (
              <div className="about__fact" key={s.label}>
                <span className="about__fact-num grad-text">{s.value}</span>
                <span className="about__fact-label">
                  {s.label.split('\n').map((line, i) => (
                    <span key={i}>{line}{i === 0 ? <br /> : null}</span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="timeline">
          <h3 className="timeline__heading">Education</h3>
          {education.map((e) => (
            <div className="timeline__item" key={e.degree}>
              <span className="timeline__dot" />
              <div className="timeline__card">
                <div className="timeline__top">
                  <span className="timeline__period">{e.period}</span>
                  <span
                    className={`timeline__status ${
                      e.status === 'Pursuing' ? 'timeline__status--active' : ''
                    }`}
                  >
                    {e.status}
                  </span>
                </div>
                <h4 className="timeline__degree">{e.degree}</h4>
                <p className="timeline__detail">{e.detail}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
