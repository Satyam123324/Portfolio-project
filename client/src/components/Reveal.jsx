import { useEffect, useRef, useState } from 'react'

// Wraps children and fades/slides them in when scrolled into view.
export default function Reveal({ children, className = '', as: Tag = 'div' }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          obs.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`reveal ${shown ? 'reveal--in' : ''} ${className}`}>
      {children}
    </Tag>
  )
}
