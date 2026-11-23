import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react'

const photos = [
  {
    file: 'china-un-presentation.jpg',
    title: 'China’s return to the United Nations',
    meta: 'Academic presentation · SFLSHZ',
    description: 'Connecting historical inquiry with public communication in a presentation at school.',
    alt: 'ChunYin Shang presenting on China’s return to the United Nations at SFLSHZ',
  },
  {
    file: 'summer-program-group.webp',
    title: 'Harvard Summit for Young Leaders in China',
    meta: 'HSYLC · Summer program',
    description: 'Learning alongside a cohort of peers during the summer program.',
    alt: 'ChunYin Shang with a group of peers during a summer learning program',
  },
  {
    file: 'school-event-speaking.webp',
    title: 'Sharing the stage',
    meta: 'School event · SFLSHZ',
    description: 'Speaking on stage with a fellow student.',
    alt: 'ChunYin Shang speaking on stage with a fellow student during a school event',
  },
  {
    file: 'piano-performance.webp',
    title: 'Piano performance',
    meta: 'School concert',
    description: 'Performing piano on stage at a school concert.',
    alt: 'ChunYin Shang performing piano on stage at a school concert',
    objectPosition: 'center top',
  },
  {
    file: 'football-team.webp',
    title: 'Football team',
    meta: 'Football · Top 8 in Fuyang, Hangzhou',
    description: 'With teammates on the school pitch.',
    alt: 'ChunYin Shang posing with football teammates on the school pitch',
  },
]

const step = 360 / photos.length

export default function PhotoRing() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [pausedByUser, setPausedByUser] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [focusPaused, setFocusPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [inView, setInView] = useState(() => !('IntersectionObserver' in window))
  const [pageVisible, setPageVisible] = useState(true)
  const angleRef = useRef(0)
  const activeIndexRef = useRef(0)
  const viewportRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  const activePhoto = photos[activeIndex]
  const paused = pausedByUser || hovered || focusPaused || reducedMotion

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const element = viewportRef.current
    if (!element || !('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.15 })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const update = () => setPageVisible(!document.hidden)
    update()
    document.addEventListener('visibilitychange', update)
    return () => document.removeEventListener('visibilitychange', update)
  }, [])

  useEffect(() => {
    if (paused || !inView || !pageVisible) return
    let frame = 0
    let previousTime = performance.now()
    const spin = (now: number) => {
      const elapsed = Math.min(now - previousTime, 64)
      previousTime = now
      angleRef.current += elapsed * 0.007
      if (ringRef.current) {
        ringRef.current.style.transform = `translateZ(calc(-1 * var(--ring-radius))) rotateY(${-angleRef.current}deg)`
      }
      const nextIndex = ((Math.round(angleRef.current / step) % photos.length) + photos.length) % photos.length
      if (nextIndex !== activeIndexRef.current) {
        activeIndexRef.current = nextIndex
        setActiveIndex(nextIndex)
      }
      frame = requestAnimationFrame(spin)
    }
    frame = requestAnimationFrame(spin)
    return () => cancelAnimationFrame(frame)
  }, [paused, inView, pageVisible])

  const move = (direction: number) => {
    const nextStep = Math.round(angleRef.current / step) + direction
    angleRef.current = nextStep * step
    if (ringRef.current) {
      ringRef.current.style.transform = `translateZ(calc(-1 * var(--ring-radius))) rotateY(${-angleRef.current}deg)`
    }
    const nextIndex = ((nextStep % photos.length) + photos.length) % photos.length
    activeIndexRef.current = nextIndex
    setActiveIndex(nextIndex)
  }
  const previous = () => move(-1)
  const next = () => move(1)
  const toggleAutoplay = () => {
    setPausedByUser((value) => !value)
    setHovered(false)
    setFocusPaused(false)
  }

  return (
    <div
      className="photo-ring-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Experiences in photographs"
      data-active-index={activeIndex}
      data-autoplay={paused || !inView || !pageVisible ? 'paused' : 'playing'}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocusPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocusPaused(false)
      }}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault()
          previous()
        }
        if (event.key === 'ArrowRight') {
          event.preventDefault()
          next()
        }
      }}
    >
      <div ref={viewportRef} className="photo-ring-viewport">
        <div
          ref={ringRef}
          className="photo-ring"
          style={{ transform: 'translateZ(calc(-1 * var(--ring-radius))) rotateY(0deg)' }}
        >
          {photos.map((photo, index) => (
            <figure
              key={photo.file}
              className={`photo-ring-slide${index === activeIndex ? ' is-active' : ''}`}
              style={{ transform: `rotateY(${index * step}deg) translateZ(var(--ring-radius))` }}
              aria-hidden={index !== activeIndex}
            >
              <img
                src={`./images/${photo.file}`}
                alt={photo.alt}
                loading={index < 2 ? 'eager' : 'lazy'}
                decoding="async"
                draggable={false}
                style={{ objectPosition: photo.objectPosition ?? 'center' }}
              />
            </figure>
          ))}
        </div>
      </div>

      <div className="photo-ring-caption" aria-live={paused ? 'polite' : 'off'} aria-atomic="true">
        <p className="photo-ring-position">{String(activeIndex + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}</p>
        <h3>{activePhoto.title}</h3>
        <p className="photo-ring-meta">{activePhoto.meta}</p>
        <p>{activePhoto.description}</p>
      </div>

      <div className="photo-ring-controls" aria-label="Photo carousel controls">
        <button type="button" onClick={previous} aria-label="Previous photo">
          <ArrowLeft aria-hidden="true" size={20} />
        </button>
        {!reducedMotion && (
          <button type="button" onClick={toggleAutoplay} aria-label={pausedByUser ? 'Resume automatic rotation' : 'Pause automatic rotation'}>
            {pausedByUser ? <Play aria-hidden="true" size={18} /> : <Pause aria-hidden="true" size={18} />}
          </button>
        )}
        <button type="button" onClick={next} aria-label="Next photo">
          <ArrowRight aria-hidden="true" size={20} />
        </button>
      </div>
    </div>
  )
}
