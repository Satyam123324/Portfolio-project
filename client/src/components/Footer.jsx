import { profile, socials } from '../data/portfolio.js'
import SocialIcon from './SocialIcon.jsx'

const nav = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <a href="#home" className="nav__brand">
            Satyam<span className="grad-text">.dev</span>
          </a>
          <p>{profile.tagline}</p>
        </div>
        <nav className="footer__nav">
          {nav.map((n) => (
            <a key={n.href} href={n.href}>{n.label}</a>
          ))}
        </nav>
        <div className="footer__socials">
          {socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label}>
              <SocialIcon name={s.icon} />
            </a>
          ))}
        </div>
      </div>
      <div className="footer__rights">
        © {new Date().getFullYear()} {profile.name}. Built with the MERN stack.
      </div>
    </footer>
  )
}
