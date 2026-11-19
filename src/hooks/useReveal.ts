import { useEffect, useRef } from 'react'

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotion.matches || !('IntersectionObserver' in window)) {
      element.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
        element.classList.add('is-visible')
        observer.disconnect()
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' })

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return ref
}
