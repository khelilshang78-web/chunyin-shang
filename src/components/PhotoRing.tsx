import { useCallback, useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'

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
    file: 'kindergarten-english-reading.webp',
    title: 'Reading with younger students',
    meta: 'Student Council · Kindergarten English reading',
    description: 'Organizing a student council visit to read English books with children at the school’s kindergarten.',
    alt: 'Student council members reading English books with kindergarten children at school',
  },
  {
    file: 'school-event-speaking.webp',
    title: 'Sharing the stage',
    meta: 'School event · SFLSHZ',
    description: 'Speaking on stage with a fellow student.',
    alt: 'ChunYin Shang speaking on stage with a fellow student during a school event',
  },
  {
    file: 'halloween-student-event.webp',
    title: 'Halloween with fellow students',
    meta: 'Student community · Halloween event',
    description: 'Sharing the school’s Halloween celebration with fellow students.',
    alt: 'ChunYin Shang and a fellow student in costume at a school Halloween event',
  },
  {
    file: 'piano-performance.webp',
    title: 'Piano performance',
    meta: 'School concert',
    description: 'Performing piano on stage at a school concert.',
    alt: 'ChunYin Shang performing piano on stage at a school concert',
    objectPosition: 'center 48%',
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
  const [hovered, setHovered] = useState(false)
  const [focusPaused, setFocusPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [inView, setInView] = useState(() => !('IntersectionObserver' in window))
  const [pageVisible, setPageVisible] = useState(true)
  const [enlargedIndex, setEnlargedIndex] = useState<number | null>(null)
  const angleRef = useRef(0)
  const activeIndexRef = useRef(0)
  const viewportRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const activePhoto = photos[activeIndex]
  const enlargedPhoto = enlargedIndex === null ? null : photos[enlargedIndex]
  const paused = hovered || focusPaused || reducedMotion || enlargedIndex !== null

  const closeLightbox = useCallback(() => {
    setEnlargedIndex(null)
    requestAnimationFrame(() => triggerRef.current?.focus({ preventScroll: true }))
  }, [])

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
      angleRef.current += elapsed * 0.01
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

  useEffect(() => {
    if (enlargedIndex === null) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeLightbox()
      if (event.key === 'Tab') {
        event.preventDefault()
        closeButtonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [enlargedIndex, closeLightbox])

  return (
    <>
      <div
        className="photo-ring-carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label="Experiences in photographs"
        data-active-index={activeIndex}
        data-autoplay={paused || !inView || !pageVisible ? 'paused' : 'playing'}
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
                <button
                  type="button"
                  className="photo-ring-expand"
                  aria-label={`Enlarge photograph: ${photo.title}`}
                  tabIndex={index === activeIndex ? 0 : -1}
                  onClick={(event) => {
                    triggerRef.current = event.currentTarget
                    setEnlargedIndex(index)
                  }}
                  onMouseEnter={() => {
                    if (index === activeIndex) setHovered(true)
                  }}
                  onMouseLeave={() => {
                    if (index === activeIndex) setHovered(false)
                  }}
                  onFocus={(event) => {
                    if (index === activeIndex && event.currentTarget.matches(':focus-visible')) setFocusPaused(true)
                  }}
                  onBlur={() => setFocusPaused(false)}
                >
                  <img
                    src={`./images/${photo.file}`}
                    alt={photo.alt}
                    loading={index < 2 ? 'eager' : 'lazy'}
                    decoding="async"
                    draggable={false}
                    style={{ objectPosition: photo.objectPosition ?? 'center' }}
                  />
                </button>
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
      </div>

      {enlargedPhoto && (
        <div
          className="photo-lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby="photo-lightbox-title"
          onClick={(event) => {
            if (event.target === event.currentTarget) closeLightbox()
          }}
        >
          <button ref={closeButtonRef} type="button" className="photo-lightbox-close" onClick={closeLightbox} aria-label="Close enlarged photograph">
            <X aria-hidden="true" size={24} />
          </button>
          <figure className="photo-lightbox-content">
            <img src={`./images/${enlargedPhoto.file}`} alt={enlargedPhoto.alt} />
            <figcaption>
              <h3 id="photo-lightbox-title">{enlargedPhoto.title}</h3>
              <p>{enlargedPhoto.meta}</p>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  )
}
