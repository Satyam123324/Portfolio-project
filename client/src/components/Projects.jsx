import { projects } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'
import SocialIcon from './SocialIcon.jsx'
import { useTilt } from './useTilt.js'

function ProjectCard({ p }) {
  const tilt = useTilt(9)
  return (
    <Reveal className={`project ${p.featured ? 'project--featured' : ''}`}>
      <div className="project__tilt" ref={tilt.ref} {...tilt.bind}>
        <div className="project__glow" aria-hidden="true" />
        <div className="project__body">
          {p.featured && <span className="project__flag">★ Featured</span>}
          <h3 className="project__title">{p.title}</h3>
          <p className="project__desc">{p.description}</p>
          <div className="project__tags">
            {p.tags.map((t) => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
        </div>
        <div className="project__links">
          {p.github && p.github !== '#' && (
            <a href={p.github} target="_blank" rel="noreferrer" className="project__link">
              <SocialIcon name="github" size={16} /> Code
            </a>
          )}
          {p.demo && p.demo !== '#' && (
            <a href={p.demo} target="_blank" rel="noreferrer" className="project__link">↗ Live Demo</a>
          )}
        </div>
      </div>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <Reveal>
        <p className="section__eyebrow">Some things I’ve built</p>
        <h2 className="section__title">Featured <span className="grad-text">Projects</span></h2>
      </Reveal>
      <div className="projects">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </section>
  )
}
